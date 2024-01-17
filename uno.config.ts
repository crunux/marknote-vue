import { defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerCompileClass,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({}),
    presetTypography(),
    presetWebFonts()
  ],
  transformers: [
    transformerDirectives(),
    transformerCompileClass(),
  ]
})
