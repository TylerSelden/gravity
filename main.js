var dev = true;

const { app, BrowserWindow } = require('electron');


var w = 720;
if (dev) w += 555;
function createWindow() {
  var win = new BrowserWindow({
    width: w,
    height: 480
  });
  win.setAspectRatio(w / 480);
  if (dev) win.webContents.openDevTools();
  win.setBackgroundColor('#000000');
  win.removeMenu();

  win.loadFile('src/index.html');
}

app.whenReady().then(() => {
  createWindow();
})