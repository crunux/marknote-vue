<script setup lang="ts">
import { notesMock } from '../store/mock'
</script>
<template>
	<ul mt-3 space-y-1 p0 text-white font-500 v-for="(note, idx) in notesMock" :key="idx">
		<NotePreview :title="note.title" :lastEditTime="note.lastEditTime" />
	</ul>
</template>
<style scoped></style>
