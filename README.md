# NeonNights 2
NeonNights is back, this time reworked from ground up!
Thanks to Seddy, the original idea creator.

## iPad compatibility fork

This fork keeps every `sprites-override` texture from the upstream mod while
removing its optional JavaScript color and settings hooks. The package is
declared `iosCompatible` so it can be imported as a texture-only mod on iPad.

Original project: https://github.com/WMF-Industries/NeonNights2

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
