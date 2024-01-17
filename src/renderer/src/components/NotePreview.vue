<script setup lang="ts">
import { NoteInfo } from '@shared/types'
import { formatDateFromMs } from '../utils/index';

interface Props extends NoteInfo {
	isActive?: boolean
}

const {lastEditTime} = withDefaults(defineProps<Props>(), {
	isActive: false
})

const date = computed(()=> formatDateFromMs(lastEditTime))

</script>
<template>
	<div
		cursor-pointer
		px-2.5
		py-3
		rounded-md
		transition-colors
		duration-75
		:class="isActive ? 'bg-zinc-400:75' : 'hove:bg-zinc-500:75'"
	>
		<h3 mb1 font-bold truncate>{{ title }}</h3>
		<span inline-block w-full mb2 text-xs font-light text-left>{{ date }}</span>
	</div>
</template>
