import { vec2 } from '@basementuniverse/vec';
import { GlContext, SceneCamera } from '../core';
import { Actor, ActorOptions, SpriteActorOptions } from './Actor';
import { CircleCaster, CircleCasterOptions, RegionCaster, RegionCasterOptions, SpriteCaster, SpriteCasterOptions } from './Caster';
import { Light, LightOptions } from './Light';
import { SceneObject } from './SceneObject';
import { GroundReceiver, GroundReceiverOptions, WallReceiver, WallReceiverOptions } from './Surface';
import { Wall, WallOptions } from './Wall';
export type LightingSystemOptions = {
    /**
     * Should lighting be applied to the scene?
     *
     * If this is false then the scene will be drawn without any lighting, and
     * WebGL won't be used
     */
    lightingEnabled: boolean;
    /**
     * Should image smoothing be enabled?
     *
     * Set this to false for pixel art style
     */
    imageSmoothingEnabled: boolean;
    /**
     * Should soft shadows be enabled?
     *
     * This will only apply if softShadowsAmount is > 0
     */
    softShadowsEnabled: boolean;
    /**
     * Amount of soft shadows to apply
     *
     * Set this to 0 to disable soft shadows
     */
    softShadowsAmount: number;
    /**
     * Should normal maps and specular maps be used?
     */
    surfaceMapsEnabled: boolean;
    /**
     * Resolution of the scene's normal map and specular map, compared to the
     * resolution of the screen
     *
     * Uploading these maps takes up a lot of each frame, so lower values are
     * faster. If the camera is zoomed in then this won't lose any detail as long
     * as there's still at least one pixel for each pixel in the original images,
     * for example 0.5 works well for a camera with a scale of 2
     */
    surfaceMapScale: number;
    /**
     * Strength of highlights from normal maps
     */
    shaderHighlightStrength: number;
    /**
     * Strength of shading from normal maps
     */
    shaderShadowStrength: number;
    /**
     * Strength of specular highlights
     */
    shaderSpecularStrength: number;
    /**
     * Size of specular highlights, larger numbers make smaller highlights
     */
    shaderShininess: number;
    /**
     * How far the camera is tilted away from looking straight down, this moves
     * specular highlights towards the bottom of the screen
     */
    shaderViewTilt: number;
    /**
     * Quantize shading into bands of this size, set this to 0 for smooth shading
     */
    shaderBanding: number;
    /**
     * Colour of ambient (global) light
     */
    ambientLightColour: string;
    /**
     * Colour of ambient (global) light when facing away from the light
     */
    ambientLightShadowColour: string;
    /**
     * Colour of ambient (global) light when facing towards the light
     */
    ambientLightHighlightColour: string;
    /**
     * Direction of ambient light in radians
     */
    ambientLightDirection: number;
    /**
     * Vertical offset for wall lighting
     */
    wallLightingYOffset: number;
    /**
     * Distance above bottom edge of wall shadow receivers before light is
     * totally cut off
     */
    wallLightingCutoffDistance: number;
    /**
     * How far sprite and circle shadows climb walls, as a fraction of the length
     * of the shadow that reaches the wall
     */
    wallShadowLengthFactor: number;
};
export declare class LightingSystem {
    private static readonly DEFAULT_OPTIONS;
    private static createContext;
    private static compareSurfaces;
    options: LightingSystemOptions;
    lights: Light[];
    /**
     * The size of the most recently rendered screen
     */
    screen: vec2;
    private groundReceivers;
    private wallReceivers;
    private regionCasters;
    private spriteCasters;
    private circleCasters;
    private actors;
    private lightMapContext;
    lightMapCanvas: HTMLCanvasElement;
    private specularLightMapContext;
    specularLightMapCanvas: HTMLCanvasElement;
    private sceneNormalMapContext;
    sceneNormalMapCanvas: HTMLCanvasElement;
    private sceneSpecularMapContext;
    sceneSpecularMapCanvas: HTMLCanvasElement;
    private glContext;
    private shaderPass;
    private specularVisible;
    /**
     * `glContext` lets the lighting system share a WebGL context with other
     * systems, otherwise it will create its own
     */
    constructor(options?: Partial<LightingSystemOptions>, glContext?: GlContext);
    /**
     * Add an area of ground that receives light and shadows
     */
    addGround(options: GroundReceiverOptions): GroundReceiver;
    /**
     * Add a solid wall, made from a lit front face, an unlit top, and a footprint
     * that casts shadows
     */
    addWall(options: WallOptions): Wall;
    /**
     * Add a moving object that receives light and casts a shadow
     */
    addActor(options: ActorOptions | SpriteActorOptions): Actor;
    /**
     * Add a light
     */
    addLight(options: LightOptions): Light;
    /**
     * Add a rectangle or sprite that receives wall shadows
     *
     * This is what `addWall()` and `addActor()` use to create their surfaces
     */
    addWallReceiver(options: WallReceiverOptions): WallReceiver;
    /**
     * Add a rectangle that casts polygonal shadows
     */
    addRegionCaster(options: RegionCasterOptions): RegionCaster;
    /**
     * Add a rectangle that casts a rotated and stretched image as a shadow
     */
    addSpriteCaster(options: SpriteCasterOptions): SpriteCaster;
    /**
     * Add a rectangle that casts an elliptical shadow
     */
    addCircleCaster(options: CircleCasterOptions): CircleCaster;
    /**
     * Remove an object or light from the lighting system
     */
    remove(object: SceneObject<any> | Light | Actor): void;
    /**
     * Merge wall receivers and region casters that are adjacent to each other
     * and perfectly connected on one side, so that there are fewer to process
     *
     * Merged objects are removed from the lighting system and can't be moved
     * afterwards, so this is intended for level geometry. Set `mergeable` to
     * false on an object to exclude it
     *
     * `onMerge` is called each time 2 objects are replaced with a single object.
     * If the objects were duplicates, the merged object is the first object
     */
    optimise(onMerge?: (merged: WallReceiver | RegionCaster, a: WallReceiver | RegionCaster, b: WallReceiver | RegionCaster) => void): void;
    /**
     * Share a WebGL context with other systems, this needs to be called before
     * the first render and does nothing if a context has already been set
     */
    useGlContext(glContext: GlContext): void;
    /**
     * Get the shader pass, if it can be used
     */
    private getShaderPass;
    /**
     * Make sure a screen-sized canvas matches the screen size and clear it
     */
    private resetContext;
    /**
     * Get a map ready for drawing surfaces in world coordinates, at the
     * resolution of the scene's surface maps
     */
    private prepareSurfaceMap;
    /**
     * Render a lit scene onto a context
     *
     * If `drawScene` is provided then it will be called to draw the scene with
     * the camera's transforms applied, otherwise we'll draw all of the surfaces
     * that have been added to the lighting system
     */
    render(context: CanvasRenderingContext2D, camera: SceneCamera, drawScene?: (context: CanvasRenderingContext2D) => void): void;
    /**
     * Draw all of the surfaces that have been added to the lighting system
     */
    drawSurfaces(context: CanvasRenderingContext2D): void;
    /**
     * Draw the ground, this is the part of the scene that's underneath everything
     * else
     */
    drawGround(context: CanvasRenderingContext2D): void;
    /**
     * Draw the walls and actors that stand on the ground
     */
    drawWalls(context: CanvasRenderingContext2D): void;
    /**
     * Make sure surfaces are up to date and in drawing order, actors come first
     * because moving an actor can change the order
     */
    private updateSurfaces;
    /**
     * Prepare the lightmaps for rendering
     *
     * If WebGL isn't available then lightmaps are left as they are, so the scene
     * keeps its last lighting when the context is lost and then restored
     */
    prepare(camera: SceneCamera, screen: vec2): void;
    /**
     * Get a canvas showing which surface is at each pixel, for debugging
     *
     * This should be drawn straight away, because the canvas is reused
     */
    getSurfaceMapCanvas(): HTMLCanvasElement;
    /**
     * Find the ambient light on each surface
     */
    private calculateAmbientLights;
    /**
     * Calculate the actual colour of ambient light based on the surface normal
     */
    private calculateAmbientLight;
    /**
     * Set up soft shadow settings on the specified canvas context
     */
    setupSoftShadows(context: CanvasRenderingContext2D): void;
    /**
     * Overlay the lightmap onto the context
     */
    draw(context: CanvasRenderingContext2D): void;
    /**
     * Draw normal maps for surfaces in the scene
     */
    private drawSceneNormalMap;
    /**
     * Draw specular maps for surfaces in the scene
     */
    private drawSceneSpecularMap;
}
