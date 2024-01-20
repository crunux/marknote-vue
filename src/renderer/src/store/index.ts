import type { NoteInfo } from '@shared/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { notesMock } from './mock'

export const useStoreNotes = defineStore('notesStore', () => {
	const notesAtom = ref<NoteInfo[]>(notesMock)
	const selectedNoteIndex = ref<number | null>(null)
	const note = ref<NoteInfo | null>(null)
	const content = ref<string>(`# Welcome`)

	const selectNote = (index?: number) => {
		selectedNoteIndex.value = index!
		note.value = notesAtom.value[selectedNoteIndex.value]
		content.value = `# Welcome from Note${selectedNoteIndex.value}`
		return {
			...note.value,
			index: selectedNoteIndex.value,
			content: content.value
		}
	}

	return {
		//variable
		note,
		content,

		notesAtom,
		selectedNoteIndex,
		//getters
		noteComputed: computed(() => note.value),
		//setter
		selectNote
	}
})
