import { NoteInfo } from '@shared/types'

const notes = ref<NoteInfo[]>([
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

const notesMock = computed(() => notes.value)

export { notesMock }
