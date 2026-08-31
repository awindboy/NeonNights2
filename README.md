# Depthforge

Depthforge is an iPad-compatible visual overhaul for Mindustry build 159.7.
It preserves the game's original silhouettes, palette and animation structure
while adding richer material shading, structural depth, thinner seams and
clearer separation between static and moving layers.

## Origin and compatibility

The project began as an iPad-compatible fork of NeonNights2 and has since been
rebuilt across resources, distribution, drills, power, turrets, production,
defense, campaign structures and units. It remains a texture-only package with
no JavaScript hooks, and is declared `iosCompatible` for direct iPad import.

Original project: https://github.com/WMF-Industries/NeonNights2

Original concept by Seddy. Upstream work and contributions are credited to WMF
Industries, Antlrr, Woop, Binonib, Alstocras and Blop.

## Resource sprite overhaul

- Reworked all 22 item icons and all 11 fluid-resource icons used by build
  159.7. Liquids use faceted droplets; gases use separate three-lobed forms.
- Reworked ground, crystal and wall ore overlays while preserving each
  resource's original identification color.
- Sand remains an upgraded item icon, but sand and dark-sand terrain tiles are
  intentionally left unchanged.
- Item icons are shared by belts, inventories and resource UI, so the same
  design is shown consistently in every one of those contexts.
- Added explicit `item-*-ui` and `liquid-*-ui` atlas overrides so the Core
  Database, block descriptions, research requirements and other UI panels use
  the upgraded icons instead of the game's pregenerated vanilla UI regions.
- Pregenerated build 159.7 block and unit composites from this fork's actual
  layer overrides. Construction menus and the Core Database now use matching
  `block-*-ui` / `unit-*-ui` icons, while construction previews and other
  full-icon consumers use matching `block-*-full` / `unit-*-full` regions.
