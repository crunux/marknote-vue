import { useStoreNotes } from '@renderer/store'
import { storeToRefs } from 'pinia'

const useMarkdownEditor = () => {
	const store = useStoreNotes()
	const { content, selectedNoteIndex, note } = storeToRefs(store)

	const handlerSaveNote = () => {
		store.saveNote()
		console.log('Hola ya esta guardado')
	}

	return {
		content: content,
		index: selectedNoteIndex,
		...note.value,
		handlerSaveNote
	}
}

export default useMarkdownEditor
