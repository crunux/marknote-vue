import { storeToRefs } from 'pinia'
import { useStoreNotes } from '../store'

const useNotesList = () => {
	const store = useStoreNotes()

	const { noteComputed, selectedNoteIndex } = storeToRefs(store)
	const handlerNoteSelect = async (index: number) => {
		await store.selectNote(index)
	}

	return {
		notes: noteComputed,
		selectedNote: selectedNoteIndex,
		handlerNoteSelect
	}
}

export default useNotesList
