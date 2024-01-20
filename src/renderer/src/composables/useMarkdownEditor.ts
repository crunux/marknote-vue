import { useStoreNotes } from '@renderer/store'
import { storeToRefs } from 'pinia'

const useMarkdownEditor = () => {
	const store = useStoreNotes()

	const { content, selectedNoteIndex, note } = storeToRefs(store)

	return {
		content: content,
		index: selectedNoteIndex,
		...note
	}
}

export default useMarkdownEditor
