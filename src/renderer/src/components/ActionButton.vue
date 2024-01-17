<script setup lang="ts"></script>
<template>
	<button
		px2
		py1
		rounded-md
		border
		border-zinc-400:50
		hover:bg-zinc-600:50
		transition-colors
		duration-100
		bg-transparent
	>
		<slot />
	</button>
</template>
