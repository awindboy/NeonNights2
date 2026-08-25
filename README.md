# NeonNights 2
NeonNights is back, this time reworked from ground up!
Thanks to Seddy, the original idea creator.

## iPad compatibility fork

This fork keeps every `sprites-override` texture from the upstream mod while
removing its optional JavaScript color and settings hooks. The package is
declared `iosCompatible` so it can be imported as a texture-only mod on iPad.

Original project: https://github.com/WMF-Industries/NeonNights2

## Resource sprite overhaul

- Reworked all 22 item icons and all 11 liquid icons used by build 159.7.
- Reworked ground, crystal and wall ore overlays while preserving each
  resource's original identification color.
- Reworked the three mineable sand and dark-sand floor variants. Water-edge
  and wall terrain remain unchanged.
- Item icons are shared by belts, inventories and resource UI, so the same
  design is shown consistently in every one of those contexts.
