import ContentManager from '@basementuniverse/content-manager';
import Debug from '@basementuniverse/debug';
import { clamp, exclude } from '@basementuniverse/utils';
import { vec } from '@basementuniverse/vec';
import { v4 as uuid } from 'uuid';
import { Light, LightOptions } from '../../lighting';
import Game from '../Game';
import { LightingScene } from '../scenes/LightingScene';
import { EditorActor } from './EditorActor';

export class LightActor extends EditorActor {
  private static readonly HOVER_RADIUS = 20;
  private static readonly MIN_RADIUS = 10;
  private static readonly MAX_RADIUS = 400;

  public readonly type = 'Light';
  public readonly object: Light;

  protected readonly debugColour = '#5b3';
  protected readonly debugHoverColour = '#7e5';
  protected readonly minSize = vec();
  protected readonly maxSize = vec();

  public radius: number = 100;
  public colour: string = 'white';
  public coreRadius: number = 0.2;
  public intensity: number = 1;
  public height: number = 48;
  public castShadows: boolean = true;

  public constructor(scene: LightingScene, data: Partial<LightActor> = {}) {
    super(scene);

    Object.assign(this, data, {
      id: data.id ?? uuid().split('-')[0],
    });

    this.object = scene.lightingSystem.addLight(this.objectOptions());

    this.folder = Game.gui.addFolder(`Light ${this.id}`);
    this.folder.add(this.position, 'x').listen();
    this.folder.add(this.position, 'y').listen();
    this.folder.add(
      this,
      'radius',
      LightActor.MIN_RADIUS,
      LightActor.MAX_RADIUS
    );
    this.folder.add(this, 'colour');
    this.folder.add(this, 'coreRadius', 0, 1);
    this.folder.add(this, 'intensity', 0, 1);
    this.folder.add(this, 'height', 1, 200);
    this.folder.add(this, 'castShadows');
  }

  private objectOptions(): LightOptions {
    return {
      position: this.position,
      radius: this.radius,
      colour: this.colour,
      coreRadius: this.coreRadius,
      intensity: this.intensity,
      height: this.height,
      castShadows: this.castShadows,
    };
  }

  protected sync() {
    this.object.set(this.objectOptions());
  }

  public serialise(): any {
    return {
      type: this.type,
      id: this.id,
      position: this.position,
      radius: this.radius,
      colour: this.colour,
      coreRadius: this.coreRadius,
      intensity: this.intensity,
      height: this.height,
      castShadows: this.castShadows,
    };
  }

  public static deserialise(scene: LightingScene, data: any): LightActor {
    // In older scenes the core radius was called 'intensity'
    if (data.coreRadius === undefined && data.intensity !== undefined) {
      return new LightActor(scene, {
        ...exclude(data, 'intensity'),
        coreRadius: data.intensity,
      });
    }

    return new LightActor(scene, data);
  }

  protected isHovered(mouseWorldPosition: vec): boolean {
    return (
      vec.len(vec.sub(mouseWorldPosition, this.position)) <
      LightActor.HOVER_RADIUS
    );
  }

  protected dragPosition(position: vec) {
    this.position.x = position.x;
    this.position.y = position.y;
  }

  protected dragSize(mouseWorldPosition: vec) {
    this.radius = clamp(
      vec.len(vec.sub(mouseWorldPosition, this.position)),
      LightActor.MIN_RADIUS,
      LightActor.MAX_RADIUS
    );
  }

  protected drawDebug() {
    Debug.border(`Light ${this.id} border`, '', this.position, {
      level: 1,
      space: 'world',
      showLabel: false,
      showValue: false,
      borderShape: 'circle',
      radius: this.radius,
      borderColour:
        this.hovered || this.dragging
          ? this.debugHoverColour
          : this.debugColour,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
    Debug.marker(`Light ${this.id}`, this.id, this.position, {
      level: 2,
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      markerImage: ContentManager.get<HTMLImageElement>('light'),
    });
  }
}
