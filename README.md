# Lighting and shadows in 2.5d

This is an experiment showing how to create a 2.5d scene with lighting and shadows.

![Lighting and shadows in 2.5d](preview.png)

![Animated preview](preview-animated.gif)

(the above scene is in `/samples/sample-scene-1.json`)

## How to run it

1. Clone this repository

```bash
git clone https://github.com/basementuniverse/lighting-2d
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

6. To view the sample scene (the one in the preview image), click "Import state from JSON" (in the menu, top-right) and paste in the contents of `samples/sample-scene-1.json`

## Project structure

* `src/lighting` is the library, it builds to `build/index.js` and doesn't depend on the demo
* `src/demo` is the editor shown in the preview, it builds to `build/game.js` and is a good example of how to use the library

Run `npm run build` to build both.

## How to integrate it into your game

A scene consists of ground, walls, actors, and lights. You add each of these to a `LightingSystem` once, and then render it every frame.

First, we create a `LightingSystem`:

```ts
import { LightingSystem } from 'lighting-2d';

const lighting = new LightingSystem({
  ambientLightColour: '#555',
});
```

(see `src/lighting/LightingSystem.ts` for options you can pass to the `LightingSystem`)

Then we add things to the scene. Each of the `add...()` methods returns an object that can be used to change or remove it later on.

```ts
lighting.addGround({
  position: vec(0, 0),
  size: vec(800, 600),
  image: groundImage,
});

// Creates a lit front face, an unlit top, and a footprint that casts shadows
lighting.addWall({
  footprint: { position: vec(100, 100), size: vec(48, 48) },
  height: 48,
  image: wallImage,
  top: { image: wallTopImage },
});

// Creates a surface that receives light, and a shadow based on the image
const hero = lighting.addActor({
  position: vec(200, 200),
  size: vec(32, 48),
  image: heroImage,
});

const torch = lighting.addLight({
  position: vec(250, 250),
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

### Normal maps and specular maps

Pass `shaderEnabled: true` to the `LightingSystem`, and add a `normalMap` and `specularMap` image to anything that needs one.

```ts
const lighting = new LightingSystem({
  shaderEnabled: true,
  shaderSpecularStrength: 1.5,
});

lighting.addGround({
  position: vec(0, 0),
  size: vec(800, 600),
  image: floorImage,
  normalMap: floorNormalImage,
  specularMap: floorSpecularImage,
});

lighting.addLight({
  position: vec(250, 250),
  radius: 200,
  height: 48,
});
```

The red channel of a specular map sets how shiny each part of the surface is. A light's `height` controls how low the light is over a surface, so lower lights make normal maps look stronger.

If WebGL isn't available then the scene is rendered without normal maps or specular maps.

### Masks and shadows

Masks and sprite shadows are generated automatically from an image's alpha channel, so you only need to provide a `mask` or `shadow` image if you want something different.

### Changing and removing things

Everything that's returned from an `add...()` method has `moveTo()` and `remove()`. Surfaces and casters also have `resize()` and `set()`, for example `surface.set({ colour: 'red' })`.

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
  position: vec(100, 100),
  size: vec(32, 32),
  customDraw: {
    image: context => drawMyObject(context),
    normalMap: context => drawMyObjectNormals(context),
  },
});
```

## How it works

> Note: the `vec` type is from [@basementuniverse/vec](https://www.npmjs.com/package/@basementuniverse/vec) and looks like:
> ```ts
> type vec = {
>   x: number;
>   y: number;
> }
> ```

`addWall()` and `addActor()` are built from the shadow casters and shadow receivers described below. You can also add these directly if you need more control. This is what the demo does.

Shadow casters can be one of:

#### `addRegionCaster()`

This is a rectangle that casts polygonal shadows.

* `position: vec` the position of the shadow caster
* `size: vec` the size of the shadow caster (axis-aligned rectangle)
* `includeRegionShadow: boolean` when casting shadows, should we include the rectangular region of the shadow caster?

e.g.

`includeRegionShadow = false` (default value)

<img src="docs/region-shadow-caster-include-false.png" width="40%" border="1" />

`includeRegionShadow = true`

<img src="docs/region-shadow-caster-include-true.png" width="40%" border="1" />

#### `addSpriteCaster()`

This is a rectangle with an image. The image will be rotated and stretched when casting shadows.

<img src="docs/sprite-shadow-caster.png" width="20%" border="1" />

* `position: vec` the position of the shadow caster
* `size: vec` the size of the shadow caster (axis-aligned rectangle), this will be used as the size of the sprite
* `shadow: image` the image used for casting shadows
* `image: image` if `shadow` isn't set, the silhouette of this image will be used instead
* `anchor: vec` the anchor point of the sprite where (0, 0) is the top-left corner, (0.5, 0.5) is the center, (1, 1) is the bottom-right corner
* `offset: vec` used to offset the sprite from the anchor position
* `minShadowLength: number` the minimum length of the shadow
* `maxShadowLength: number` the maximum length of the shadow

We use a smoothstep interpolation to make the shadow length vary between `minShadowLength` and `maxShadowLength` based on the distance between the light and the shadow caster.

#### `addCircleCaster()`

This is a rectangle which casts an elliptical shadow.

<img src="docs/circle-shadow-caster.png" width="40%" border="1" />

* `position: vec` the position of the shadow caster
* `size: vec` the size of the shadow caster (axis-aligned rectangle), this will be used as the size of the ellipse
* `anchor: vec` the anchor point of the circle where (0, 0) is the top-left corner, (0.5, 0.5) is the center, (1, 1) is the bottom-right corner
* `minShadowDistance: number` the minimum distance between the anchor position and center of the shadow ellipse
* `maxShadowDistance: number` the maximum distance between the anchor position and center of the shadow ellipse
* `alpha: number` the opacity of the shadow

We use a smoothstep interpolation to make the shadow distance vary between `minShadowDistance` and `maxShadowDistance` based on the distance between the light and the shadow caster.

---

Shadow receivers can be one of:

#### `addGround()`

This is a rectangle that receives ground shadows.

<img src="docs/ground-shadow-receiver.png" width="40%" border="1" />

* `position: vec` the position of the shadow receiver
* `size: vec` the size of the shadow receiver (axis-aligned rectangle)
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
* `mask: image` an image used for masking the shadow receiver, if this isn't set then the alpha channel of `image` is used
* `repeat: boolean` true if the images should be repeated, false if the images should be stretched
* `surfaceNormal: vec` the direction that this surface is facing, used for ambient lighting
* `layer: WallShadowLayer` either `WallShadowLayer.One` or `WallShadowLayer.Two`

---

### Overview of `LightingSystem.prepare()` steps

1. Prepare each light separately
2. Prepare the ground mask
3. Prepare the wall mask (layer 1)
4. Prepare the wall mask (layer 2)
5. Prepare the ground-masked lightmap
6. Prepare the wall-masked lightmap (layer 1)
7. Prepare the wall-masked lightmap (layer 2)

The 3 light maps (ground, wall layer 1, and wall layer 2) can now be combined to create the final light map.

#### 1. Prepare each light separately

##### 1.1. Prepare the base lightmap

First we prepare the base lightmap for the current light by drawing a radial gradient. We only do this if any of the light's parameters have changed.

<img src="docs/base-light-map.png" width="40%" border="1" />

##### 1.2. Prepare the ground lightmap

We draw the base lightmap onto the ground lightmap and then draw ground shadows for each shadow caster in range of the light.

<img src="docs/light-map-ground-shadows.png" width="40%" border="1" />

##### 1.3. Prepare the wall lightmaps (both layers 1 and 2)

We draw the base lightmap onto each of the wall lightmaps.

Next, we prepare initial shading for each wall shadow receiver in range of the light. This means we shade the entire receiver based on the y-position of the light relative to the y-position of the receiver's bottom edge.

There's a small amount of margin when doing this, so that light can fade in gradually rather than snapping on/off.

Also note that wall lighting has a small amount of y-offset which helps to create a more realistic "pseudo-3d" lighting effect.

<img src="docs/light-map-wall-shadows-1.png" width="40%" border="1" />

Finally, we project shadows onto the wall lightmaps. This is done by finding where ground shadows intersect the bottom edges of shadow receivers and drawing regions, scaled/rotated sprites, or ellipses onto the wall lightmaps (either layer 1 or 2 depending on the shadow caster's settings).

<img src="docs/light-map-wall-shadows-2.png" width="40%" border="1" />

The lightmap for this light is now complete. We do this for each light in the scene.

#### 2. Prepare the ground mask

We draw all of the ground shadow receivers onto the ground mask.

Next, we subtract all of the wall shadow receivers (ignoring their layer settings) using the `destination-out` composite operation.

This is done using each receiver's `drawMask()` method.

<img src="docs/ground-mask.png" width="40%" border="1" />

#### 3. Prepare the wall mask (layer 1)

Similarly to the ground mask, we draw all of the wall shadow receivers for layer 1 onto the layer 1 wall mask, then subtract all of the layer 2 wall shadow receivers.

This is done using each receiver's `drawMask()` method.

<img src="docs/wall-mask-1.png" width="40%" border="1" />

#### 4. Prepare the wall mask (layer 2)

We draw all of the layer 2 wall shadow receivers onto the layer 2 wall mask.

This is done using each receiver's `drawMask()` method.

<img src="docs/wall-mask-2.png" width="20%" border="1" />

#### 5. Prepare the ground-masked lightmap

We fill the ground-masked lightmap canvas with the ambient light colour, then we draw each light's ground lightmap using the `screen` composite operation.

Finally, we mask the ground-masked lightmap using the ground mask and the `destination-atop` composite operation.

<img src="docs/ground-masked-light-map.png" width="40%" border="1" />

#### 6. Prepare the wall-masked lightmap (layer 1)

We do the same for the layer 1 wall lightmap...

<img src="docs/wall-masked-1-light-map.png" width="40%" border="1" />

#### 7. Prepare the wall-masked lightmap (layer 2)

...and again for the layer 2 wall lightmap.

<img src="docs/wall-masked-2-light-map.png" width="20%" border="1" />

---

When the masked lightmaps are combined, we get the final lightmap.

<img src="docs/final-light-map.png" width="40%" border="1" />

If we take the un-lit scene...

<img src="docs/final-scene-no-lighting.png" width="40%" border="1" />

...and overlay the final lightmap using the `multiply` composite operation, we get the final scene with lighting and shadows.

<img src="docs/final-scene-lighting.png" width="40%" border="1" />

### Normal maps and specular maps

When the shader is enabled, the steps above are the same except that lights aren't drawn into the masked lightmaps, so those only contain ambient light. All of the lights are then shaded using a single WebGL context, which has 2 passes:

1. **Diffuse**: each light's lightmap is multiplied by how much light the surface receives compared to a flat surface, and then blended into the final lightmap in the same way as the `screen` composite operation. A flat surface is multiplied by 1, so it looks the same as it does without the shader. Lights are shaded separately, so the bumps from one light don't affect another light.
2. **Specular**: each light's highlights are added together in a separate buffer. These are calculated from the light's height and a fixed camera direction, and are multiplied by the light's lightmap so that they fade with distance and are blocked by shadows.

The final lightmap is drawn over the scene using the `multiply` composite operation, which can only darken the scene. The specular highlights are then drawn over the top using the `lighter` composite operation, so they can be brighter than the scene and appear on dark surfaces.

The scene's normal map, specular map, and masks are uploaded once per frame, and 3 lightmaps are uploaded for each visible light.

### Why 2 wall layers?

Because some wall shadow receivers might overlap. When a shadow caster overlaps a wall shadow receiver, we skip rendering shadows from that caster onto the overlapping receiver (so that objects don't self-shadow / shadows are _behind_ the objects that cast them).

However, if there was just a single layer, then when 2 wall shadow receivers overlap they would be masked onto the same wall-mask. This can cause strange artefacts.

<img src="docs/glitch-1.png" width="30%" border="1" />

<img src="docs/glitch-2.png" width="30%" border="1" />

By separating objects which might overlap onto separate layers, we can avoid this issue.

As long as shadows aren't too large and we don't have too many objects overlapping (e.g. more than 2), then 2 layers should be enough.
