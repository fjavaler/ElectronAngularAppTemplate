const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 800
  })

  // TODO: Replace 'electron-with-angular-app-template' with name of app. Do a search to find other areas to replace.
  win.loadFile('dist/electron-with-angular-app-template/index.html')
}

app.whenReady().then(() => {
  createWindow()
})
