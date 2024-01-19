import type { NoteInfo } from '@shared/types'
import { defineStore } from 'pinia'
import {ref, computed} from 'vue'
import { notesMock } from './mock'



export const useStoreNotes = defineStore('notesAtom', () => {
	const notesAtom = ref<NoteInfo[]>(notesMock)
	const selectedNoteIndex = ref<number | null>(null)

	const selectNote = () => {
		const notes = computed(() => notesAtom.value)
		const selectedNote = computed(() => selectedNoteIndex.value)

		if (!selectedNote.value) return

		const note = notes.value[selectedNote.value]

		return {
			...note,

			content: `Hello From Note ${selectedNote.value}`,
			index: selectedNote.value
		}
	}

	return {
		//variable
		notesAtom,
		selectedNote: selectedNoteIndex.value,

		//setter
		selectNote
	}
})
