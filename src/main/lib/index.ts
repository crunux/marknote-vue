import { homedir } from 'os'
import { appDirectoryName, fileEncoding } from '../../shared/constants'
import { ensureDir, readFile, readdir, stat } from 'fs-extra'
import { GetNotes, NoteInfo, ReadNote } from '../../shared/types/index'

export const getRootDir = () => {
	const rootDir = `${homedir()}/${appDirectoryName}`
	return rootDir
}

export const getNotes: GetNotes = async () => {
	const rootDir = getRootDir()
	await ensureDir(rootDir)
	const notesFilesName = await readdir(rootDir, {
		encoding: fileEncoding,
		withFileTypes: false
	})

	const notes = notesFilesName.filter((fileName) => fileName.endsWith('.md'))
	return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
	const note = await stat(`${getRootDir()}/${filename}`)
	return {
		title: filename.replace(/\.md$/, ''),
		lastEditTime: note.mtimeMs
	}
}

export const readNote: ReadNote = async (filename) => {
	const rootDir = getRootDir()
	return readFile(`${rootDir}/${filename}.md`, { encoding: fileEncoding })
}
