const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  login: (title) => ipcRenderer.send('login', email, password)
})
