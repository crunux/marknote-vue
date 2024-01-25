<script setup lang="ts">
import { useStoreNotes } from '../store'

const store = useStoreNotes()

const handlerDeleteNote = async () => {
	await store.deleteNote()
}
</script>
<template>
	<ActionButton @click="handlerDeleteNote"
		><div class="i-carbon-trash-can w-4 h-4 text-zinc-200"
	/></ActionButton>
</template>
