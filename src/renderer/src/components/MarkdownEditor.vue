<script setup lang="ts">
import { ref, computed} from 'vue'
import { MdEditor } from 'md-editor-v3'
import type { ExposeParam } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import useMarkdownEditor from '../composables/useMarkdownEditor'

//const markdown = ref('# Welcome')
const html = ref('')
const el = ref<ExposeParam>()
const toggleCall = () => console.log('Hola ya esta guardado')

const {content} = useMarkdownEditor()

const htmlParse = (value) => {
	html.value = value
}
const htmlPreview = computed(() => html.value)

</script>
<template>
	<div v-html="htmlPreview" text-white p4 m2></div>
	<MdEditor
		ref="el"
		v-model="content"
		:language="'en-US'"
		theme="dark"
		@on-html-changed="htmlParse"
		:toolbars="[]"
		:footers="[]"
		:preview="false"
		@onSave="toggleCall"
		:style="{ background: 'transparent', border: 'none' }"
		autoDetectCode
		outline-none
		min-h-screen
		max-w-none
		text-3xl
		px8
		py5
		text-zinc-
		caret-yellow-500
		prose
		prose-invert
		prose-p:my-3
		prose-p:leading-relaxed
		prose-headings:my-4
		prose-blockquote:my-4
		prose-ul:my-2
		prose-li:my-0
		prose-code:px-1
		prose-code:text-red-500
		prose-code:before:content-none
		prose-code:after:content-none
	>
	</MdEditor>
</template>
<style scoped lang="less"></style>
