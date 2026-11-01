# World 2D

Lights, shadows, reflections, and water for 2.5d top-down 3/4-view games.

![Lighting and shadows in 2.5d](preview.png)

![Animated preview](preview-animated.gif)

(the above scene is in `/samples/sample-scene-1.json`)

## How to run it

1. Clone this repository

```bash
git clone https://github.com/basementuniverse/world-2d
```

2. Install dependencies

```bash
npm install
```

3. You'll need to run a local server to view the samples. You can use `http-server`:

```bash
npm install -g http-server
```

4. Run the server

```bash
npm run start
```

5. Open your browser and navigate to `http://localhost:8080`

6. To view the sample scene (the one in the preview image), open the "Scene" folder (in the menu, top-right) and click "Sample: town". There are samples for reflections and water too

## Using the editor

The demo is a small editor for trying out lights, reflections, and water. It isn't intended to be a complete world editor, but you can use it to build simple scenes.

Use the "Add" folder to create something, or hold shift and press a key to create it at the mouse position:

| Element | Key | Description |
| --- | --- | --- |
| Light | `SHIFT-L` | A light |
| Character | | A character that you can walk around with WASD, which is useful for seeing how reflections and water react to something moving |
| Prop | `SHIFT-P` | An object that stands on the ground, it can appear in reflections and stand in water |
| Wall | `SHIFT-W` | A solid wall, the front can be turned into a mirror |
| Wall surface | `SHIFT-F` | A flat surface that receives light and wall shadows, the same as `addWallReceiver()`. This can also be a mirror |
| Region shadow caster | `SHIFT-R` | The same as `addRegionCaster()` |
| Sprite shadow caster | `SHIFT-S` | The same as `addSpriteCaster()` |
| Circle shadow caster | `SHIFT-C` | The same as `addCircleCaster()` |
| Water | `SHIFT-A` | An area of water |
| Ground | `SHIFT-G` | An area of ground, this can be reflective |

Click on something to select it, its settings will appear in the menu. If several things overlap, click again to select the next one underneath.

| Control | Action |
| --- | --- |
| Drag | Move the selected element |
| `CTRL`-drag | Resize the selected element |
| Hold `SHIFT` while dragging | Snap to the grid |
| `SHIFT-D` | Duplicate the selected element at the mouse position |
| `DELETE` or `BACKSPACE` | Delete the selected element |
| Right click | Make a splash in the water |
| Arrow keys | Move the camera |
| `SHIFT`-mouse wheel | Zoom the camera |
| WASD | Move characters |

The "Lighting", "Reflections", and "Water" folders have settings for the whole scene. The strengths in the "Reflections" folder are multiplied by the strength of each reflection, so they can be used to compare a scene with and without reflections.

"Export scene to a file" downloads the current scene as a JSON file, and "Import scene from a file" loads it again. Scenes that were exported from older versions can still be imported.

## Project structure

* `src/core` is the code that's shared by every rendering system: types, geometry, and a `GlContext` that wraps a WebGL context
* `src/lighting` is the lighting system, it only depends on `src/core`
* `src/reflections` is the reflection system, it only depends on `src/core`
* `src/water` is the water system, it only depends on `src/core`
* `src/world` is a `World`, which renders a scene using several systems working together
* `build/index.js` is the library, it contains all of the above and doesn't depend on the demo
* `src/demo` is the editor shown in the preview, it builds to `build/game.js` and is a good example of how to use the library

Run `npm run build` to build both.

## How to integrate it into your game

A scene consists of ground, walls, actors, and lights. You add each of these to a `LightingSystem` once, and then render it every frame.

First, we create a `LightingSystem`:

```ts
import { LightingSystem } from '@basementuniverse/world-2d';

const lighting = new LightingSystem({
  ambientLightColour: '#555',
});
```

(see `src/lighting/LightingSystem.ts` for options you can pass to the `LightingSystem`)

Then we add things to the scene. Each of the `add...()` methods returns an object that can be used to change or remove it later on.

```ts
lighting.addGround({
  position: vec2(0, 0),
  size: vec2(800, 600),
  image: groundImage,
});

// Creates a lit front face, an unlit top, and a footprint that casts shadows
lighting.addWall({
  footprint: { position: vec2(100, 100), size: vec2(48, 48) },
  height: 48,
  image: wallImage,
  top: { image: wallTopImage },
});

// Creates a surface that receives light, and a shadow based on the image
const hero = lighting.addActor({
  position: vec2(200, 200),
  size: vec2(32, 48),
  image: heroImage,
});

const torch = lighting.addLight({
  position: vec2(250, 250),
  radius: 200,
  colour: 'white',
});
```

Every frame, update anything that has moved and render the scene:

```ts
hero.moveTo(player.position);
torch.radius = 180 + Math.sin(time) * 20;

lighting.render(context, camera);
```

The camera can be a [@basementuniverse/camera](https://www.npmjs.com/package/@basementuniverse/camera), or any object with `bounds`, `worldToScreen()`, and `setTransforms()`.

By default, `render()` will draw everything that was added to the `LightingSystem`. If you want to draw the scene yourself, pass in a callback. It will be called with the camera's transforms applied:

```ts
lighting.render(context, camera, context => {
  drawMyScene(context);
});
```

### Using a World

A `World` renders a scene using all of the systems that you give it. Each system draws its part of the frame without needing to know about the others, and the `World` decides the order.

```ts
import { LightingSystem, ReflectionSystem, WaterSystem, World } from '@basementuniverse/world-2d';

const world = new World({
  lighting: new LightingSystem({ ambientLightColour: '#555' }),
  reflections: new ReflectionSystem(),
  water: new WaterSystem(),
});

world.addGround({ position: vec2(0, 0), size: vec2(800, 600), image: groundImage });
world.addLight({ position: vec2(250, 250), radius: 200 });
const hero = world.addActor({ sprite: heroSprite });

world.update(dt);
world.render(context, camera);
```

`world.lighting`, `world.reflections`, and `world.water` are the systems, if you need one of their other methods. All of the systems in a `World` share one WebGL context, you can pass in your own as `glContext`.

If you don't pass in a `LightingSystem` then the scene is drawn without any lighting and WebGL isn't used. You can do the same thing with the `lightingEnabled` option on a `LightingSystem`, which can also be changed at any time.

### Reflections

Things that appear in reflections are reflection sources, and the floors and walls that show them are reflection receivers.

```ts
// A source
const hero = world.addActor({
  sprite: heroSprite,
  reflectionSource: true,
});

// A reflective floor
world.addGround({
  position: vec2(0, 0),
  size: vec2(800, 600),
  image: floorImage,
  reflectionReceiver: { strength: 0.5 },
});

// A wall where the whole front is a mirror
world.addWall({
  footprint: { position: vec2(100, 100), size: vec2(128, 16) },
  height: 64,
  image: mirrorImage,
  reflectionReceiver: true,
});
```

To make part of a floor or wall reflective, pass a `position` and `size`, and optionally a `mask` image whose alpha channel decides which parts are reflective. These can be used several times for the same object:

```ts
const wall = world.addWall({ /* ... */ });

world.addMirror(wall.front, {
  position: vec2(120, 60),
  size: vec2(40, 40),
  mask: roundMaskImage,
});

world.addFloorReflection(ground, {
  position: vec2(200, 200),
  size: vec2(64, 64),
  strength: 0.8,
});
```

`world.addMirror()` and `world.addFloorReflection()` return an object that can be used to change the `strength` or `remove()` the reflection. Reflections are removed along with the object that they belong to. Mirrors and reflective floors are placed once, so they won't follow a wall or an area of ground that's moved.

If a `World` doesn't have a `ReflectionSystem` then these options are ignored, so you can turn off reflections by not passing one in.

#### Reflection sources

Use an object for `reflectionSource` to change how something is reflected:

* `footOffset: number` how far the object's feet are above the bottom of its image, set this if the image has empty space underneath the object
* `floorOffset: number` how far to move the reflection up the screen, to close a gap between the object's feet and its reflection
* `floorFade: number` the distance over which the reflection fades in from the feet, to hide any overlap with the object
* `floorLayer: string` the layer in a sprite's animations with images for floor reflections, the default is `floor-reflection`
* `floorImage: image` for actors that aren't sprites, an image to show in floors
* `floor: boolean` should this appear in floors?
* `wall: boolean` should this appear in walls? This is false by default for walls
* `wallDirections: Record<string, string>` which way a sprite appears to be facing in a wall
* `wallImage: image` for actors that aren't sprites, an image of the object's other side to show in walls

Sprites in a 3/4 view can look strange when they're flipped upside-down, because we're seeing the top of the sprite where we should be seeing the underside. If this matters for a sprite then you can add a `floor-reflection` layer to its animations, with an image for each frame:

```ts
walk: {
  left: {
    name: 'walk',
    frameCount: 2,
    images: [walkLeft1, walkLeft2],
    layers: {
      'floor-reflection': [walkLeftFloor1, walkLeftFloor2],
    },
  },
}
```

These images are flipped in the same way as the sprite, so it's easiest to start with a copy of each frame. Any animation or direction that doesn't have this layer uses the sprite instead, so it's only needed for the sprites and frames that need it.

#### How reflections work

A top-down 3/4 view draws a point at height `z` at `screenY = y - z`. This tells us what each kind of reflection looks like:

* **Floors** make `z` negative, so a source is flipped upside-down around its own feet. This is why it doesn't matter where the source is, and why each source needs to know where its feet are.
* **Walls** move a source to the other side of the wall, so `y` becomes `2 * wallFoot - y`. The source stays the same way up, but moves up the screen by twice its distance from the wall.

In a wall we're looking at the side of the source that faces the wall. A character facing north will appear to face south, so a sprite's image comes from `sprite.getImage()` using the opposite direction. By default this swaps `north` and `south`, and `up` and `down`, and any other direction stays the same. If your sprites have other directions, for example diagonals, then set `wallDirections`:

```ts
reflectionSource: {
  wallDirections: {
    north: 'south',
    south: 'north',
    'north-east': 'south-east',
    'south-east': 'north-east',
    'north-west': 'south-west',
    'south-west': 'north-west',
  },
}
```

Reflections are drawn into the scene before lighting is applied, so a reflection is lit by the light on the floor or wall that it appears in. Floor reflections are drawn after the ground and before anything that stands on the ground. Wall reflections are drawn straight after their wall, so anything in front of the wall will cover them.

There are some limits to this:

* Mirrors only show sources, they don't show the floor or the room.
* Nothing blocks a reflection, so a source can appear in a mirror even if there's something between it and the mirror (unless that's drawn in front of the mirror).
* If a sprite is drawn with a `floor-reflection` image, or facing a different direction in a wall, then its `preRender` and `postRender` hooks won't be used for the reflection.

If you aren't using a `World`, see `src/reflections/ReflectionSystem.ts` for the steps.

### Water

Add an area of water with `world.addWater()`, and call `world.update(dt)` every frame to keep it moving.

```ts
const lake = world.addWater({
  position: vec2(64, 64),
  size: vec2(384, 192),
  colour: '#3f8fa8',
  deepColour: '#123f63',
  opacity: 0.7,
});
```

Water shows the ground and anything else that's underneath it. It also receives light and shadows like the ground does, and its waves catch the light if the scene has a `LightingSystem`.

#### Shores

Where the water ends depends on `mask` and `depth`:

* `mask: image` an image whose alpha channel decides where the water is. This makes a hard edge, so it's useful for shores that follow the shape of the terrain
* `depth: number | number[][]` how deep the water is from 0 to 1, this can be a grid
* `shoreBlend: number` the water fades out at depths below this, so it blends in smoothly if the depth goes down to 0

This means that you can use both kinds of shore on the same water. If the water is still deep at the edge of the mask then you'll get a hard edge, and if it gets shallow before it reaches the edge then it fades out.

Grids can be any size, the first index is the row. Values are interpolated between cells, so a grid with a cell for each tile will give you a smooth result:

```ts
world.addWater({
  // ...
  mask: shoreMaskImage,
  depth: [
    [1.0, 0.8, 0.5, 0.1],
    [1.0, 1.0, 0.6, 0.0],
    [1.0, 0.8, 0.5, 0.1],
  ],
  shoreBlend: 0.2,
});
```

#### Flow

`flow` sets which way the water moves and how quickly. This can be a single vector or a grid of vectors, which should be no longer than 1:

```ts
world.addWater({
  // ...
  flow: [
    [vec2(0, 0), vec2(0.5, 0), vec2(0, 0)],
    [vec2(0.2, 0.2), vec2(1, 0), vec2(0.2, -0.2)],
  ],
  flowSpeed: 18,
});
```

`region.setDepth()` and `region.setFlow()` will replace a grid at any time.

Waves are moved along the flow using [flow maps](https://graphicsrunner.blogspot.com/2010/08/water-using-flow-maps.html). Moving a normal map too far stretches it, so there are 2 sets of waves half a cycle apart. Each one moves for a while and then fades out while it jumps back to the start, and some noise stops all of the water from fading at the same time.

#### Ripples and rain

Disturbing the water makes ripples, which spread out and bounce off the edges of the mask:

```ts
world.water.disturb(position, { radius: 8, strength: 1.5 });
```

The `rain` option sets how many raindrops land each second for every 10000 square world units.

Ripples are simulated on a grid, there's a cell for every `rippleCellSize` world units and no more than 256 cells on the longest side. Nothing is calculated while the water is still.

#### Things in the water

An actor with `submersible` will go underwater when it stands in water, the deeper the water is the more of it goes under:

```ts
const hero = world.addActor({
  sprite: heroSprite,
  reflectionSource: true,
  submersible: {
    maxDepth: 22,
    footOffset: 6,
  },
});
```

The actor is split at the waterline. The lower part is drawn underneath the water, so it's bent and tinted in the same way as the terrain, and it's lit as if it was the water's surface. The upper part is drawn on top, and it's reflected around the waterline. Moving through the water makes ripples, set `ripples: false` to turn this off.

Actors without `submersible` stand on top of the water, and so do walls.

#### Options

As well as the options above, these can be changed at any time on the object returned from `addWater()`:

* `refraction: number` how far waves can bend what's underneath the water, this is stronger in deeper water
* `reflection: number` how strong reflections are from 0 to 1, this needs a `ReflectionSystem`
* `reflectionDistortion: number` how far waves can bend reflections
* `normalMap: image` a tiling normal map for waves, the default is generated
* `waveSize`, `waveSpeed`, `waveStrength` the size, speed, and steepness of the waves
* `rippleStrength`, `rippleSpeed`, `rippleDamping` how ripples look and behave
* `surfaceShading: number` how much slopes change the brightness of the water, this means waves can be seen even without any lights
* `specular: number` how shiny the water is, this needs a `LightingSystem`. The size of highlights comes from `shaderShininess` on the `LightingSystem`
* `pixelSize: number` snap the water to a grid of this size, for a pixel art style

If you change the contents of the `mask` then call `region.invalidateMask()`. Regions shouldn't overlap each other.

#### Performance

Water has to copy the scene to the GPU and back again every frame, so most of its cost is proportional to the size of the screen. There are some options for this on the `WaterSystem`:

```ts
const water = new WaterSystem({
  resolutionScale: 0.5,
});
```

* `resolutionScale: number` the resolution of the water, this is the most effective option. If `pixelSize` is being used then this doesn't lose any detail as long as there's still at least one pixel for each `pixelSize`, for example 0.5 works well for a `pixelSize` of 1 and a camera scale of 2
* `lightingMapScale: number` the resolution of the normal map that's given to the lighting system, the default is 0.5
* `reflectionMapScale: number` the resolution of reflections in the water, the default is 0.5

`surfaceMapScale` on the `LightingSystem` also helps, because water makes the normal map and specular map larger.

If you aren't using a `World`, see `src/water/WaterSystem.ts` for the steps.

### Animated actors

An actor can follow a [@basementuniverse/sprite](https://www.npmjs.com/package/@basementuniverse/sprite), which handles directions and animations:

```ts
const hero = lighting.addActor({ sprite: heroSprite });
```

Update the sprite as usual, there's no need to update the actor as well. Every time the scene is rendered, the actor copies the sprite's position, size, and current frame, so its lighting and shadow match the frame being drawn.

```ts
heroSprite.position = player.position;
heroSprite.direction = 'left';
heroSprite.update(dt);

lighting.render(context, camera);
```

For normal maps and specular maps, add `normal` and `specular` layers to the sprite's animations. These should have one image for each frame:

```ts
const heroSprite = new Sprite({
  directions: ['left', 'right'],
  defaultDirection: 'left',
  defaultAnimation: 'walk',
  animations: {
    walk: {
      left: {
        name: 'walk',
        frameCount: 2,
        images: [walkLeft1, walkLeft2],
        layers: {
          normal: [walkLeftNormal1, walkLeftNormal2],
          specular: [walkLeftSpecular1, walkLeftSpecular2],
        },
      },
      // ...
    },
  },
});
```

The sprite's `rotation` isn't supported by the lighting: the image will be rotated, but the area that receives light won't be.

### Normal maps and specular maps

Add a `normalMap` and `specularMap` image to anything that needs one.

```ts
lighting.addGround({
  position: vec2(0, 0),
  size: vec2(800, 600),
  image: floorImage,
  normalMap: floorNormalImage,
  specularMap: floorSpecularImage,
});

lighting.addLight({
  position: vec2(250, 250),
  radius: 200,
  height: 48,
});
```

The red channel of a specular map sets how shiny each part of the surface is. A light's `height` controls how low the light is over a surface, so lower lights make normal maps look stronger.

Set `surfaceMapsEnabled: false` on the `LightingSystem` to turn these off.

These maps are drawn for the whole screen and uploaded to the GPU every frame, which takes a lot of time at high resolutions. If the camera is zoomed in then you can set `surfaceMapScale` to draw them at a lower resolution, for example 0.5 won't lose any detail with a camera scale of 2.

### Masks and shadows

A surface's shape comes from its image's alpha channel, and an actor's shadow is a silhouette of its image, so you only need to provide a `mask` or `shadow` image if you want something different.

### Requirements

Lighting is rendered using WebGL. If it isn't available then a warning is logged and the scene is drawn without any lighting.

The `LightingSystem` creates its own WebGL context, or you can pass a `GlContext` as the second argument to share one with other rendering systems.

### Changing and removing things

Everything that's returned from an `add...()` method has `moveTo()` and `remove()`, except for reflection receivers and sources which are moved by setting their `position`. Calling `moveTo()` on an actor that follows a sprite will set the sprite's position. Surfaces and casters also have `resize()` and `set()`, for example `surface.set({ colour: 'red' })`.

The size of a water region can't be changed, because its ripple simulation is created with the region. Remove the region and add a new one instead.

An `Actor` or `Wall` is made from several smaller objects, which are available as `actor.surface` and `actor.caster`, or `wall.front`, `wall.top`, and `wall.caster`.

Lights have `radius`, `colour`, `coreRadius`, `intensity`, `height`, and `castShadows` properties which can be changed at any time.

### Optimising level geometry

If your level is made from a lot of small tiles, you can merge neighbouring walls after adding them:

```ts
lighting.optimise();
```

Merged objects can't be moved or removed afterwards, so this is only useful for level geometry. Set `mergeable: false` to exclude an object. Surfaces with a non-repeating image are never merged, because the image would be stretched.

### Drawing unusual objects

If something isn't a single image, you can replace any of the drawing steps for a surface:

```ts
lighting.addWallReceiver({
  position: vec2(100, 100),
  size: vec2(32, 32),
  customDraw: {
    image: context => drawMyObject(context),
    normalMap: context => drawMyObjectNormals(context),
  },
});
```

## How it works

> Note: the `vec2` type is from [@basementuniverse/vec](https://www.npmjs.com/package/@basementuniverse/vec) and looks like:
> ```ts
> type vec2 = {
>   x: number;
>   y: number;
> }
> ```

`addWall()` and `addActor()` are built from the shadow casters and shadow receivers described below. You can also add these directly if you need more control. This is what the demo does.

Shadow casters can be one of:

#### `addRegionCaster()`

This is a rectangle that casts polygonal shadows.

* `position: vec2` the position of the shadow caster
* `size: vec2` the size of the shadow caster (axis-aligned rectangle)
* `includeRegionShadow: boolean` when casting shadows, should we include the rectangular region of the shadow caster?

e.g.

`includeRegionShadow = false` (default value)

<img src="docs/region-shadow-caster-include-false.png" width="40%" border="1" />

`includeRegionShadow = true`

<img src="docs/region-shadow-caster-include-true.png" width="40%" border="1" />

#### `addSpriteCaster()`

This is a rectangle with an image. The image will be rotated and stretched when casting shadows.

<img src="docs/sprite-shadow-caster.png" width="20%" border="1" />

* `position: vec2` the position of the shadow caster
* `size: vec2` the size of the shadow caster (axis-aligned rectangle), this will be used as the size of the sprite
* `shadow: image` the image used for casting shadows
* `image: image` if `shadow` isn't set, the silhouette of this image will be used instead
* `anchor: vec2` the anchor point of the sprite where (0, 0) is the top-left corner, (0.5, 0.5) is the center, (1, 1) is the bottom-right corner
* `offset: vec2` used to offset the sprite from the anchor position
* `minShadowLength: number` the minimum length of the shadow
* `maxShadowLength: number` the maximum length of the shadow

We use a smoothstep interpolation to make the shadow length vary between `minShadowLength` and `maxShadowLength` based on the distance between the light and the shadow caster.

#### `addCircleCaster()`

This is a rectangle which casts an elliptical shadow.

<img src="docs/circle-shadow-caster.png" width="40%" border="1" />

* `position: vec2` the position of the shadow caster
* `size: vec2` the size of the shadow caster (axis-aligned rectangle), this will be used as the size of the ellipse
* `anchor: vec2` the anchor point of the circle where (0, 0) is the top-left corner, (0.5, 0.5) is the center, (1, 1) is the bottom-right corner
* `minShadowDistance: number` the minimum distance between the anchor position and center of the shadow ellipse
* `maxShadowDistance: number` the maximum distance between the anchor position and center of the shadow ellipse
* `alpha: number` the opacity of the shadow

We use a smoothstep interpolation to make the shadow distance vary between `minShadowDistance` and `maxShadowDistance` based on the distance between the light and the shadow caster.

---

Shadow receivers can be one of:

#### `addGround()`

This is a rectangle that receives ground shadows.

<img src="docs/ground-shadow-receiver.png" width="40%" border="1" />

* `position: vec2` the position of the shadow receiver
* `size: vec2` the size of the shadow receiver (axis-aligned rectangle)
* `colour: string` an optional background colour for the shadow receiver
* `image: image` the image used for rendering this shadow receiver (the image will be repeated)
* `normalMap: image` an optional normal map (the image will be repeated)
* `specularMap: image` an optional specular map (the image will be repeated)
* `zIndex: number` receivers are drawn in order of z-index, and then by the position of their bottom edge

#### `addWallReceiver()`

This is a rectangle or sprite that receives wall shadows.

<img src="docs/wall-shadow-receiver.png" width="30%" border="1" />

As well as the options above:

* `receiveLight: boolean` true if this shadow receiver should receive light and shadows (useful for tops of walls which should only receive ambient light)
* `mask: image` an image whose alpha channel decides which parts of the shadow receiver are lit, if this isn't set then `image` is used
* `repeat: boolean` true if the images should be repeated, false if the images should be stretched
* `surfaceNormal: vec2` the direction that this surface is facing, used for ambient lighting
* `shadowBias: number` how far towards the light to look for shadows on the ground, this should be enough to get out of the receiver's own shadow
* `projectShadows: boolean` true if sprite and circle shadows should climb this receiver, this should be false for anything that casts one of these shadows

Receivers can overlap each other in any way. They're drawn in order of `zIndex` and then by the position of their bottom edge, and each pixel belongs to whichever receiver was drawn last.

---

### Overview of `LightingSystem.prepare()` steps

1. Prepare each light
2. Draw the surface map
3. Draw the ambient light
4. Blend in each light
5. Add up the specular highlights

#### 1. Prepare each light

We only draw the light's gradient if any of the light's parameters have changed.

<img src="docs/base-light-map.png" width="40%" border="1" />

Next we draw 2 shadow maps for the light, which show the shadows on the ground. These are white where the ground is lit and black where it's in shadow. Region casters are drawn onto one, and sprite casters and circle casters are drawn onto the other.

<img src="docs/light-map-ground-shadows.png" width="40%" border="1" />

There are 2 shadow maps because these shadows behave differently on walls (see below).

#### 2. Draw the surface map

We draw every visible shadow receiver into a screen-sized surface map using WebGL, in the order that they appear in the scene. Each pixel of the surface map says what kind of surface is at that pixel, and where that surface meets the ground (its "foot").

There's no blending when drawing the surface map, so each pixel belongs to exactly one surface. This is why receivers can overlap each other, and why the foot position can be stored as a number in 2 colour channels.

#### 3. Draw the ambient light

We draw every visible shadow receiver again, this time filling each one with its ambient light colour.

#### 4. Blend in each light

We draw each light's bounding box into the final lightmap using a shader, which looks up the surface at each pixel.

For a pixel on the **ground**, the light is simply the light's gradient multiplied by both shadow maps.

For a pixel on a **wall**, we look up the shadow on the ground at the wall's foot:

* **Region casters** are solid walls, so if their shadow reaches the foot of a wall then it covers the whole height of the wall. We sample the region shadow map at the foot.
* **Sprite casters and circle casters** have shadows with a length, so they climb a wall until they run out. The higher up the wall a pixel is, the further along the shadow we look, so the shadow stops at the right height.
* **Walls can't be lit from behind**, so a wall fades out as the light moves above its foot. `wallLightingCutoffDistance` sets how quickly this happens, so that lights don't snap on and off.

Wall lighting has a small y-offset (`wallLightingYOffset`), which helps to create a more realistic "pseudo-3d" lighting effect.

If normal maps are being used, the result is then multiplied by how much light the surface receives compared to a flat surface. A flat surface is multiplied by 1. Lights are shaded separately, so the bumps from one light don't affect another light.

Each light is blended into the lightmap in the same way as the `screen` composite operation.

<img src="docs/final-light-map.png" width="40%" border="1" />

#### 5. Add up the specular highlights

If specular maps are being used, each light's highlights are added together in a separate buffer. These are calculated from the light's height and a fixed camera direction, and are multiplied by the light that reaches the surface so that they fade with distance and are blocked by shadows.

---

If we take the un-lit scene...

<img src="docs/final-scene-no-lighting.png" width="40%" border="1" />

...and overlay the final lightmap using the `multiply` composite operation, we get the final scene with lighting and shadows.

<img src="docs/final-scene-lighting.png" width="40%" border="1" />

The `multiply` composite operation can only darken the scene, so the specular highlights are then drawn over the top using the `lighter` composite operation. This means they can be brighter than the scene and appear on dark surfaces.

### Avoiding self-shadowing

Looking up shadows at a surface's foot could make things shadow themselves, so there are 2 options for this.

`shadowBias` moves the lookup slightly towards the light. Walls only need a small amount, but actors stand inside the start of their own shadow so they need more. `addActor()` works this out from the actor's shadow.

`projectShadows` should be false for anything that casts a sprite or circle shadow, otherwise looking further along the shadow for the upper part of the object would find its own shadow. `addActor()` sets this for you.
