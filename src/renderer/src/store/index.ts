import type { NoteInfo } from '@shared/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const loadNotes = async () => {
	const notes = await window.context.getNotes()
	return notes.sort((a, b) => b.lastEditTime - a.lastEditTime)
}

export const useStoreNotes = defineStore('notesStore', () => {
	const notesAtom = ref<NoteInfo[]>([])

	const selectedNoteIndex = ref<number | null>(null)
	const note = ref<NoteInfo | null>(null)
	const content = ref<string>(`# Welcome to the Jungle`)

	const loadData = async () => {
		notesAtom.value = await loadNotes()
	}

	const selectNote = async (index: number) => {
		selectedNoteIndex.value = index
		if (selectedNoteIndex.value === null || !notesAtom) return
		note.value = notesAtom.value[selectedNoteIndex.value]
		content.value = await window.context.readNote(note.value.title)
	}

	const saveNote = async () => {
		if (!note.value) return
		// save on disk
		note.value.lastEditTime = new Date().getTime()
		await window.context.writeNote(note.value.title, content.value)
	}

	const addEmptyNote = async () => {
		const title = await window.context.createNote()

		if (!title) return

		const newNote: NoteInfo = {
			title,
			lastEditTime: new Date().getTime()
		}
		notesAtom.value = [newNote, ...notesAtom.value.filter((note) => note.title !== newNote.title)]
		selectedNoteIndex.value = null
	}

	const deleteNote = async () => {
		if (!selectedNoteIndex.value && selectedNoteIndex.value !== 0) return

		if (!note.value) return
		const isDeleted = await window.context.deleteNote(note.value.title)

		if (!isDeleted) return

		notesAtom.value = notesAtom.value.filter((item) => item.title !== note.value?.title)
		note.value = null
		content.value = ''
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
		saveNote,
		selectNote,
		addEmptyNote,
		deleteNote
	}
})
