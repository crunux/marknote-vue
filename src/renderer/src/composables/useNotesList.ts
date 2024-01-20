import { useStoreNotes } from '../store/index'
import { computed } from 'vue'

interface OnSelect {
	onSelect?: () => void
}

const useNotesList = ({ onSelect }: OnSelect) => {
	const store = useStoreNotes()

	const notes = store.notesAtom

	const handlerNoteSelect = async (index: number) => {
		//store.selectedNoteIndex = index
		await store.selectNote(index)
		if (onSelect) {
			onSelect()
		}
	}

	return {
		notes: computed(() => notes),
		selectedNote: computed(() => store.selectedNoteIndex),
		handlerNoteSelect
	}
}

export default useNotesList
