import type { NoteInfo } from '@shared/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
//import { notesMock } from './mock'

const loadNotes = async () => {
	const notes = await window.context.getNotes()
	return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

export const useStoreNotes = defineStore('notesStore', () => {
	const notesAtom = ref<NoteInfo[]>([])

	const selectedNoteIndex = ref<number | null>(null)
	const note = ref<NoteInfo | null>(null)
	const content = ref<string>(`# Welcome`)

	const loadData = async () => {
		notesAtom.value = await loadNotes()
	}

	const selectNote = async (index: number) => {
		selectedNoteIndex.value = index
		if (selectedNoteIndex.value === null || !notesAtom) return
		note.value = notesAtom.value[selectedNoteIndex.value]
		content.value = await window.context.readNote(note.value.title)
	}

	const addEmptyNote = () => {
		console.log('clickAdd')

		const newNote: NoteInfo = {
			title: `Note ${notesAtom.value.length + 1}`,
			lastEditTime: new Date().getTime()
		}

		notesAtom.value = [newNote, ...notesAtom.value.filter((note) => note.title !== newNote.title)]
		selectedNoteIndex.value = null
	}

	const deleteNote = () => {
		if (!selectedNoteIndex.value && selectedNoteIndex.value !== 0) return
		notesAtom.value = notesAtom.value.filter((item) => item.title !== note.value?.title)
		selectedNoteIndex.value = null
	}

	return {
		//variable
		note,
		content,
		notesAtom,
		selectedNoteIndex,

		//getters
		noteComputed: computed(() => notesAtom.value),

		//setter
		loadData,
		selectNote,
		addEmptyNote,
		deleteNote
	}
})
