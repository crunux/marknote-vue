<script setup lang="ts">
import { ref, onMounted} from 'vue'
import { useStoreNotes } from '../src/store'
import { HTMLDivElementCustom } from '@shared/types'
import AppLayout from './layouts/AppLayout.vue'
const contentContainerRef = ref<HTMLDivElementCustom | null>(null)
const { loadData } = useStoreNotes()

onMounted(async () => {
	await loadData()
})

const resetScroll = () => {
	contentContainerRef.value?.$el.scrollTo(0, 0)
}
</script>
<template>
	<DraggableTopbar />
	<AppLayout flex="~ row">
		<SideBar p2 bg-zinc-900:30>
			<ActionButtonsrow mt10 h-auto w-auto flex justify-between mt1 />
			<NotePreviewList @change="resetScroll" />
		</SideBar>
		<MainContent ref="contentContainerRef" p2 border-l rounded-lg border-l-white:20>
			<FloatingNoteTitle pt2 />
			<MarkdownEditor />
		</MainContent>
	</AppLayout>
</template>
<style scope lang="less">
@import './assets/css/styles.less';
</style>
