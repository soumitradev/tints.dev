import type {Mode, PaletteConfig} from '~/types'

export const DEFAULT_STOP = 500
export const DEFAULT_STOPS = [0, 20, 40, 60, 80, 100, 130, 200, 300, 400, 500, 600, 700, 760, 780, 800, 830, 880, 900, 940, 960, 1000]

export const MODES: Mode[] = [`hex`, `p-3`]

export const DEFAULT_PALETTE_CONFIG: PaletteConfig = {
  id: ``,
  name: ``,
  value: ``,
  valueStop: DEFAULT_STOP,
  swatches: [],
  h: 0,
  s: 0,
  lMin: 0,
  lMax: 100,
  useLightness: true,
  mode: MODES[0],
}

export const RANDOM_PALETTES = [
  {
    name: `blue`,
    value: `3B82F6`,
  },
  {
    name: `red`,
    value: `EF4444`,
  },
  {
    name: `green`,
    value: `22C55E`,
  },
  {
    name: `purple`,
    value: `A855F7`,
  },
  {
    name: `brand`,
    value: `2522FC`,
  },
]

export const META = {
  origin: `https://tints.dev`,
  title: `Tailwind CSS 11-color Palette Generator and API`,
  description: `A fast and flexible, HSL-tweakable palette generator and API for Tailwind CSS`,
}

export const OG_IMAGE_WIDTH = 1200
export const OG_IMAGE_HEIGHT = 630
