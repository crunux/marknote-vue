import type { NoteInfo } from '@shared/types'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
//import { notesMock } from './mock'

export const useStoreNotes = defineStore('notesStore', () => {
	const notesAtom = ref<NoteInfo[]>([
		{
			title: `Welcome`,
			lastEditTime: new Date().getTime()
		},
		{
			title: 'Note 1',
			lastEditTime: new Date().getTime()
		},
		{
			title: 'Note 2',
			lastEditTime: new Date().getTime()
		},
		{
			title: 'Note 3',
			lastEditTime: new Date().getTime()
		}
	])

	const selectedNoteIndex = ref<number | null>(null)
	const note = ref<NoteInfo | null>(null)
	const content = ref<string>(`# Welcome`)

	const selectNote = (index: number) => {
		selectedNoteIndex.value = index
		note.value = notesAtom.value[selectedNoteIndex.value]
		content.value = `# Welcome from Note${selectedNoteIndex.value}`
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
		selectNote,
		addEmptyNote,
		deleteNote
	}
})
