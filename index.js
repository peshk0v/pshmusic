const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

const currentDir = __dirname;

function logggin(email, password) {
  console.log("okakkkkkkkkkkkkkk")
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(currentDir + '/front/index.html');

  //win.webContents.openDevTools();
}

app.whenReady().then(() => {
  ipcMain.on('login', logggin);
  createWindow();
})
