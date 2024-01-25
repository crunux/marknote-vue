<script setup lang="ts">
import { useStoreNotes } from '../store'

const store = useStoreNotes()

const handlerAddNote = async () => {
	await store.addEmptyNote()
}
</script>
<template>
	<ActionButton @click="handlerAddNote" name="New Note"
		><div class="i-carbon-new-tab w-4 h-4 text-zinc-200"
	/></ActionButton>
</template>