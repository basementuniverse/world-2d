water region
  rectangular region where water will be rendered

WaterReflectable
  interface for objects that show a reflection in water

WaterShore
  interface for objects that form part of a water shore


draw water regions as black rectangles
subtract water shores
this makes a water mask canvas

if we invert this (non-water regions black, water regions transparent) we can cast a white shadow, then
mask with the water mask canvas, we should be left with a shore map
overlay this onto the water mask canvas, we should be left with a water mask with shore lines

use this with a "shore waves" shader to have waves moving in from shores


we can also use the water mask to get the area which should be refracted


waterreflectables can be reflected


2x overlaid normal maps for offsetting texture lookups


flow map
depth map
both of these are grids w/ numbers, we can use setPixel to render them as textures (only when they change)
then pass these textures into the shader so we get free interpolation

flow map defines flow direction and speed

depth map defines alpha (w/ shore blending) & amount of refraction
