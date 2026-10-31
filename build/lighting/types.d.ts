import { vec2 } from '@basementuniverse/vec';
export type Line = {
    start: vec2;
    end: vec2;
};
export declare enum Sector1d {
    Before = "before",
    Inside = "inside",
    After = "after"
}
export declare enum Sector2d {
    TopLeft = "top-left",
    Top = "top",
    TopRight = "top-right",
    Left = "left",
    Inside = "inside",
    Right = "right",
    BottomLeft = "bottom-left",
    Bottom = "bottom",
    BottomRight = "bottom-right"
}
export type PolygonVertices = (vec2 | ((context: CanvasRenderingContext2D) => void))[];
export declare enum Side {
    Top = "top",
    Right = "right",
    Bottom = "bottom",
    Left = "left"
}
