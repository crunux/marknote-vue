import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Component from 'unplugin-vue-components/vite'

export default defineConfig({
	main: {
		plugins: [externalizeDepsPlugin()],
		resolve: {
			alias: {
				'@lib': resolve('src/main/lib'),
				'@shared': resolve('src/shared')
			}
		}
	},
	preload: {
		plugins: [externalizeDepsPlugin()]
	},
	renderer: {
		assetsInclude: 'src/renderer/src/assets/**',
		resolve: {
			alias: {
				'@renderer': resolve('src/renderer/src'),
				'@assets': resolve('src/renderer/src/assets'),
				'@store': resolve('src/renderer/src/store'),
				'@components': resolve('src/renderer/src/components'),
				'@composables': resolve('src/renderer/src/composables'),
				'@types': resolve('src/renderer/src/types'),
				'@shared': resolve('src/shared')
			}
		},
		plugins: [
			vue(),
			UnoCSS(),
			AutoImport({
				imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'vue/macros', 'pinia'],
				dirs: [
					'./src/renderer/src/composables/**',
					'./src/renderer/src/store/**',
					'./src/renderer/src/store/mock/**',
					'./src/renderer/src/types/**'
				],
				vueTemplate: true
			}),
			Component()
		]
	}
})
