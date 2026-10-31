import { vec } from '@basementuniverse/vec';
import { Actor, ActorOptions } from './Actor';
import { CircleCaster, CircleCasterOptions, RegionCaster, RegionCasterOptions, SpriteCaster, SpriteCasterOptions } from './Caster';
import { Light, LightOptions } from './Light';
import { SceneObject } from './SceneObject';
import { GroundReceiver, GroundReceiverOptions, WallReceiver, WallReceiverOptions } from './Surface';
import { LightingCamera } from './types';
import { Wall, WallOptions } from './Wall';
export type LightingSystemOptions = {
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
     * Should the shader be enabled?
     */
    shaderEnabled: boolean;
    /**
     * Shader for normal mapping and specular highlights
     */
    shader: string;
    /**
     * Maximum number of lights that can use the shader
     *
     * Each of these lights needs its own WebGL context, and browsers lose the
     * oldest context when too many are active (the limit is 16 in Chrome)
     */
    maxShaderLights: number;
    /**
     * Alpha value for shader highlights
     */
    shaderHighlightAlpha: number;
    /**
     * Alpha value for shader shadows
     */
    shaderShadowAlpha: number;
    /**
     * Alpha value for shader specular highlights
     */
    shaderSpecularAlpha: number;
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
     * Length of sprite wall shadows will be scaled by this amount
     */
    spriteWallShadowLengthFactor: number;
    /**
     * Sprite wall shadow intercept will be offset by this amount (as a factor
     * of the total edge length)
     */
    spriteWallShadowInterceptOffset: number;
    /**
     * Height of circle wall shadows will be scaled by this amount
     */
    circleWallShadowLengthFactor: number;
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
    screen: vec;
    private groundReceivers;
    private wallReceivers;
    private regionCasters;
    private spriteCasters;
    private circleCasters;
    private groundMaskContext;
    groundMaskCanvas: HTMLCanvasElement;
    private groundMaskedLightMapContext;
    groundMaskedLightMapCanvas: HTMLCanvasElement;
    private wallMask1Context;
    wallMask1Canvas: HTMLCanvasElement;
    private wallMaskedLightMap1Context;
    wallMaskedLightMap1Canvas: HTMLCanvasElement;
    private wallMask2Context;
    wallMask2Canvas: HTMLCanvasElement;
    private wallMaskedLightMap2Context;
    wallMaskedLightMap2Canvas: HTMLCanvasElement;
    private lightMapContext;
    lightMapCanvas: HTMLCanvasElement;
    private sceneNormalMapContext;
    sceneNormalMapCanvas: HTMLCanvasElement;
    private sceneSpecularMapContext;
    sceneSpecularMapCanvas: HTMLCanvasElement;
    private shaderLimitWarningShown;
    constructor(options?: Partial<LightingSystemOptions>);
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
    addActor(options: ActorOptions): Actor;
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
    remove(object: SceneObject<any> | Light): void;
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
     * Check if another light is allowed to create a shader canvas
     */
    canCreateShaderCanvas(): boolean;
    /**
     * Make sure a screen-sized canvas matches the screen size and clear it
     */
    private resetContext;
    /**
     * Render a lit scene onto a context
     *
     * If `drawScene` is provided then it will be called to draw the scene with
     * the camera's transforms applied, otherwise we'll draw all of the surfaces
     * that have been added to the lighting system
     */
    render(context: CanvasRenderingContext2D, camera: LightingCamera, drawScene?: (context: CanvasRenderingContext2D) => void): void;
    /**
     * Draw all of the surfaces that have been added to the lighting system
     */
    drawSurfaces(context: CanvasRenderingContext2D): void;
    private sortSurfaces;
    /**
     * Prepare the lightmaps for rendering
     */
    prepare(camera: LightingCamera, screen: vec): void;
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
