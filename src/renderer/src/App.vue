<script setup lang="ts">
import AppLayout from './layouts/AppLayout.vue'
</script>
<template>
	<DraggableTopbar />
	<AppLayout flex="~ row">
		<SideBar p2 bg-zinc-900:30>
			<ActionButtonsrow mt10 h-auto w-auto flex justify-between mt1 />
			<NotePreviewList />
		</SideBar>
		<MainContent p2 border-l rounded-lg border-l-white:20>
			<FloatingNoteTitle pt2/>
			<MarkdownEditor />
		</MainContent>
	</AppLayout>
</template>
<style scope lang="less">
@import './assets/css/styles.less';
</style>
