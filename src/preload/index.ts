import { contextBridge } from 'electron'

if (!process.contextIsolated) {
	throw new Error('contextIsolated must be enabled in th BrowserWindow')
}

try {
	contextBridge.exposeInMainWorld('context', {
		locale: navigator.language
	})
} catch (error) {
	console.error(error)
}
// Custom APIs for renderer
// const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// if (process.contextIsolated) {
//   try {
//     contextBridge.exposeInMainWorld('electron', electronAPI)
//     contextBridge.exposeInMainWorld('api', api)
//   } catch (error) {
//     console.error(error)
//   }
// } else {
//   // @ts-ignore (define in dts)
//   window.electron = electronAPI
//   // @ts-ignore (define in dts)
//   window.api = api
// }
