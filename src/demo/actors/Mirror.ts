import { vec2 } from '@basementuniverse/vec';
import { Rectangle } from '../../core';
import { WallReceiver } from '../../lighting';
import { WallReflectionReceiver } from '../../reflections';
import { addColour } from '../gui';
import type { EditorScene } from '../scenes/EditorScene';

type MirrorShape = 'rectangle' | 'ellipse';

/**
 * The reflective part of a wall in the demo scene
 */
export class Mirror {
  private static readonly MIN_SIZE = 1;
  private static readonly MASK_SIZE = 256;

  private static ellipseMask: HTMLCanvasElement | null = null;

  /**
   * A mask that's stretched to fit the mirror
   */
  private static getEllipseMask(): HTMLCanvasElement {
    if (!Mirror.ellipseMask) {
      const size = Mirror.MASK_SIZE;
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = size;

      const context = canvas.getContext('2d')!;
      context.beginPath();
      context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
      context.fill();

      Mirror.ellipseMask = canvas;
    }

    return Mirror.ellipseMask;
  }

  public enabled: boolean = false;
  public strength: number = 1;
  public inset: number = 4;
  public shape: MirrorShape = 'rectangle';
  public glass: boolean = true;
  public glassColour: string = '#39505c';

  private wall: WallReceiver | null = null;
  private receiver: WallReflectionReceiver | null = null;
  private removeGlass: (() => void) | null = null;

  public constructor(data: Partial<Mirror> = {}) {
    Object.assign(this, data);
  }

  public createControls(folder: dat.GUI) {
    folder.add(this, 'enabled');
    folder.add(this, 'strength', 0, 1, 0.01);
    folder.add(this, 'inset', 0, 32, 1);
    folder.add(this, 'shape', ['rectangle', 'ellipse']);
    folder.add(this, 'glass');
    addColour(folder, this, 'glassColour');
  }

  public serialise(): any {
    return {
      enabled: this.enabled,
      strength: this.strength,
      inset: this.inset,
      shape: this.shape,
      glass: this.glass,
      glassColour: this.glassColour,
    };
  }

  /**
   * Find the part of a wall that's covered by the mirror
   */
  private rectangle({ position, size }: Rectangle): Rectangle {
    const { inset } = this;

    return {
      position: vec2.add(position, inset),
      size: vec2(
        Math.max(size.x - inset * 2, Mirror.MIN_SIZE),
        Math.max(size.y - inset * 2, Mirror.MIN_SIZE)
      ),
    };
  }

  private drawGlass(context: CanvasRenderingContext2D) {
    if (!this.glass || !this.wall) {
      return;
    }

    const { position, size } = this.rectangle(this.wall);

    context.fillStyle = this.glassColour;
    if (this.shape === 'ellipse') {
      context.beginPath();
      context.ellipse(
        position.x + size.x / 2,
        position.y + size.y / 2,
        size.x / 2,
        size.y / 2,
        0,
        0,
        Math.PI * 2
      );
      context.fill();
    } else {
      context.fillRect(position.x, position.y, size.x, size.y);
    }
  }

  private remove() {
    this.removeGlass?.();
    this.receiver?.remove();
    this.removeGlass = null;
    this.receiver = null;
  }

  /**
   * Show this mirror on a wall, this needs to be called every frame so that the
   * mirror can follow the wall
   */
  public sync(scene: EditorScene, wall: WallReceiver) {
    if (!this.enabled || wall !== this.wall) {
      this.remove();
    }

    if (this.enabled && !this.receiver) {
      // The reflection is drawn on top of the glass, so this has to come first
      this.wall = wall;
      this.removeGlass = wall.addOverlay(context => this.drawGlass(context));
      this.receiver = scene.world.addMirror(wall);
    }

    if (this.receiver) {
      Object.assign(this.receiver, this.rectangle(wall), {
        foot: wall.position.y + wall.size.y,
        mask: this.shape === 'ellipse' ? Mirror.getEllipseMask() : null,
        strength: this.strength * scene.reflectionStrength.wall,
      });
    }
  }
}
