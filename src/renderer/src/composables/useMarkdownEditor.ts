import { useStoreNotes } from '@renderer/store'
import { storeToRefs } from 'pinia'
import { throttle } from 'lodash'

const useMarkdownEditor = () => {
	const store = useStoreNotes()
	const { content, selectedNoteIndex, note } = storeToRefs(store)

	const handlerSavingNote = () => {
		store.saveNote()
	}

	const handlerAutoSaving = throttle(
		async () => {
			store.saveNote()
		},
		10000,
		{
			leading: false,
			trailing: true
		}
	)
	const handlerBlur = () => {
		handlerAutoSaving.cancel()
	}

	return {
		content: content,
		index: selectedNoteIndex,
		...note.value,

		// functions
		handlerSavingNote,
		handlerAutoSaving,
		handlerBlur
	}
}

export default useMarkdownEditor
