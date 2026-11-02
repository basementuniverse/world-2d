import Debug from '@basementuniverse/debug';
import InputManager from '@basementuniverse/input-manager';
import { vec2 } from '@basementuniverse/vec';
import { Rectangle } from '../../core';
import { Actor } from '../Actor';
import * as constants from '../constants';
import Game from '../Game';
import type { EditorScene } from '../scenes/EditorScene';
import { clampVec, pointInRectangle, quantizeVec } from '../utilities';

/**
 * An object in the demo scene that can be selected, dragged, and edited
 *
 * Each of these wraps something that has been added to the world
 */
export abstract class EditorActor implements Actor {
  public abstract readonly type: string;
  public abstract object: { remove(): void };

  protected abstract readonly debugColour: string;
  protected abstract readonly debugHoverColour: string;
  protected abstract readonly minSize: vec2;
  protected abstract readonly maxSize: vec2;
  protected readonly sizeNames: [string, string] = ['width', 'height'];
  protected labelOffset: vec2 = vec2();

  protected scene: EditorScene;
  public id: string = '';

  public position: vec2 = vec2();
  public size: vec2 = vec2(64, 64);
  public zIndex: number = 0;

  public hovered = false;
  public selected = false;
  protected dragging = false;
  private dragOffset: vec2 | null = null;

  private changeKeys = new Map<string, string>();

  public constructor(scene: EditorScene) {
    this.scene = scene;
  }

  public get label(): string {
    return `${this.type} ${this.id}`;
  }

  /**
   * The area that this actor covers in the scene
   */
  public get bounds(): Rectangle {
    return { position: this.position, size: this.size };
  }

  /**
   * Add controls for this actor to a GUI folder, this is called when the actor
   * is selected
   */
  public createControls(folder: dat.GUI) {
    folder.add(this.position, 'x').step(1);
    folder.add(this.position, 'y').step(1);
    folder
      .add(this.size, 'x', this.minSize.x, this.maxSize.x, 1)
      .name(this.sizeNames[0]);
    folder
      .add(this.size, 'y', this.minSize.y, this.maxSize.y, 1)
      .name(this.sizeNames[1]);
  }

  public abstract serialise(): any;

  /**
   * Copy the current values from this actor to the world
   */
  protected abstract sync(): void;

  /**
   * Some things can't be changed after they've been created, so they have to be
   * created again. This calls `change` if `value` isn't the same as it was the
   * last time this was called with the same name, and the first time
   */
  protected whenChanged(name: string, value: unknown, change: () => void) {
    const key = JSON.stringify(value);

    if (this.changeKeys.get(name) !== key) {
      this.changeKeys.set(name, key);
      change();
    }
  }

  public destroy() {
    this.object.remove();
  }

  protected isHovered(mouseWorldPosition: vec2): boolean {
    return pointInRectangle(mouseWorldPosition, this.bounds);
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
    const mouseDown =
      InputManager.mouseDown(InputManager.MouseButton.Left) &&
      !this.scene.painter.active;
    const mouseWorldPosition = this.scene.camera.screenToWorld(
      InputManager.mousePosition
    );

    this.hovered = this.isHovered(mouseWorldPosition);

    if (mouseDown && this.selected && !this.dragging) {
      this.dragging = true;
      this.dragOffset = vec2.sub(mouseWorldPosition, this.position);
    }

    if (!mouseDown) {
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

    const { position, size } = this.bounds;

    Debug.border(this.label, '', position, {
      space: 'world',
      showLabel: this.selected || Game.DEBUG_MODES[Game.debugMode].labels,
      showValue: false,
      labelOffset: this.labelOffset,
      size,
      borderColour:
        this.hovered || this.dragging
          ? this.debugHoverColour
          : this.debugColour,
      borderStyle: this.selected ? 'solid' : 'dashed',
    });
  }

  public draw(context: CanvasRenderingContext2D) {}
}
