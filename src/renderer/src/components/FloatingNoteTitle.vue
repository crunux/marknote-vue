<script setup lang="ts">
import { useStoreNotes } from '../store/index'

const store = useStoreNotes()
</script>
<template>
	<div flex justify-center>
		<span text-gray-400>{{ store.note?.title }}</span>
	</div>
</template>
<style scoped></style>
