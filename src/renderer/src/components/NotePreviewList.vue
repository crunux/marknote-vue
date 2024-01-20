<script setup lang="ts">
import useNotesList from '../composables/useNotesList'

const { notes, selectedNote, handlerNoteSelect } = useNotesList({})
const toogleNoteSelect = async (idx: number) => {
	await handlerNoteSelect(idx)
}
</script>
<template>
	<ul
		v-if="notes.length > 0"
		hover:bg-gray-500:50
		rounded-lg
		mt-3
		space-y-1
		p0
		text-zinc-200
		font-500
		v-for="(note, idx) in notes"
		:key="idx"
	>
		<NotePreview
			@click.prevent="toogleNoteSelect(idx)"
			:class="selectedNote === idx ? 'bg-zinc-400:90' : ''"
			:title="note.title"
			:lastEditTime="note.lastEditTime"
		/>
	</ul>
	<h3 v-else mb1 font-bold truncate text-center text-zinc-200>No Notes Yet!</h3>
</template>
<style scoped></style>
