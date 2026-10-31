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

Add a `normalMap` and `specularMap` image to anything that needs one.

```ts
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

Set `surfaceMapsEnabled: false` on the `LightingSystem` to turn these off.

### Masks and shadows

A surface's shape comes from its image's alpha channel, and an actor's shadow is a silhouette of its image, so you only need to provide a `mask` or `shadow` image if you want something different.

### Requirements

Lighting is rendered using WebGL. If it isn't available then a warning is logged and the scene is drawn without any lighting.

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
* `mask: image` an image whose alpha channel decides which parts of the shadow receiver are lit, if this isn't set then `image` is used
* `repeat: boolean` true if the images should be repeated, false if the images should be stretched
* `surfaceNormal: vec` the direction that this surface is facing, used for ambient lighting
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
