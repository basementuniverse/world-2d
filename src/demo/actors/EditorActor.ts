import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec2 } from '@basementuniverse/vec';
import { Actor } from '../Actor';
import * as constants from '../constants';
import Game from '../Game';
import type { LightingScene } from '../scenes/LightingScene';
import { clampVec, pointInRectangle, quantizeVec } from '../utilities';

/**
 * An object in the demo scene that can be selected, dragged, and edited
 *
 * Each of these wraps something that has been added to the lighting system
 */
export abstract class EditorActor implements Actor {
  public abstract readonly type: string;
  public abstract readonly object: { remove(): void };

  protected abstract readonly debugColour: string;
  protected abstract readonly debugHoverColour: string;
  protected abstract readonly minSize: vec2;
  protected abstract readonly maxSize: vec2;
  protected labelOffset: vec2 = vec2();

  protected scene: LightingScene;
  public id: string = '';
  public folder: dat.GUI | null = null;

  public position: vec2 = vec2();
  public size: vec2 = vec2(64, 64);

  public hovered = false;
  public selected = false;
  protected dragging = false;
  private dragOffset: vec2 | null = null;

  public constructor(scene: LightingScene) {
    this.scene = scene;
  }

  /**
   * Create a GUI folder with controls for position and size
   */
  protected createFolder(): dat.GUI {
    const folder = Game.gui.addFolder(`${this.type} ${this.id}`);
    folder.add(this.position, 'x').listen();
    folder.add(this.position, 'y').listen();
    folder
      .add(this.size, 'x', this.minSize.x, this.maxSize.x)
      .name('width')
      .listen();
    folder
      .add(this.size, 'y', this.minSize.y, this.maxSize.y)
      .name('height')
      .listen();

    return folder;
  }

  public abstract serialise(): any;

  /**
   * Copy the current values from this actor to the lighting system
   */
  protected abstract sync(): void;

  public destroy() {
    if (this.folder) {
      Game.gui.removeFolder(this.folder);
      this.folder = null;
    }

    this.object.remove();
  }

  protected isHovered(mouseWorldPosition: vec2): boolean {
    return pointInRectangle(mouseWorldPosition, {
      position: this.position,
      size: this.size,
    });
  }

  protected dragPosition(position: vec2) {
    const newPosition = InputManager.keyDown('ShiftLeft')
      ? quantizeVec(position, constants.GRID_SIZE)
      : position;

    this.position.x = newPosition.x;
    this.position.y = newPosition.y;
  }

  protected dragSize(mouseWorldPosition: vec2) {
    let newSize = vec2.sub(mouseWorldPosition, this.position);
    if (InputManager.keyDown('ShiftLeft')) {
      newSize = quantizeVec(newSize, constants.GRID_SIZE);
    }
    newSize = clampVec(newSize, this.minSize, this.maxSize);

    this.size.x = newSize.x;
    this.size.y = newSize.y;
  }

  public update(dt: number) {
    const mouseWorldPosition = this.scene.camera.screenToWorld(
      InputManager.mousePosition
    );

    this.hovered = this.isHovered(mouseWorldPosition);

    if (InputManager.mouseDown() && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec2.sub(mouseWorldPosition, this.position);
    }

    if (!InputManager.mouseDown()) {
      this.dragging = false;
      this.dragOffset = null;
    }

    if (this.selected && this.dragging && this.dragOffset) {
      if (InputManager.keyDown('ControlLeft')) {
        this.dragSize(mouseWorldPosition);
      } else {
        this.dragPosition(vec2.sub(mouseWorldPosition, this.dragOffset));
      }
    }

    this.sync();
    this.drawDebug();
  }

  protected drawDebug() {
    if (!Game.DEBUG_MODES[Game.debugMode].borders) {
      return;
    }

    Debug.border(`${this.type} ${this.id}`, '', this.position, {
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: this.labelOffset,
      size: this.size,
      borderColour:
        this.hovered || this.dragging
          ? this.debugHoverColour
          : this.debugColour,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {}
}
