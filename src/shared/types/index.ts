export interface NoteInfo {
	title: string
	lastEditTime: number
}

export type NoteContent = string

export interface Note extends NoteInfo {
	content: NoteContent
	index: number
}

export type GetNotes = () => Promise<NoteInfo[]>

export type ReadNote = (title: NoteInfo['title']) => Promise<NoteContent>

export type WriteNote = (title: NoteInfo['title'], content: NoteContent) => Promise<void>

export type CreateNote = () => Promise<NoteInfo['title'] | false>

export type DeleteNote = (title: NoteInfo['title']) => Promise<boolean>
export interface HTMLDivElementCustom extends HTMLDivElement {
	$el: any
}
