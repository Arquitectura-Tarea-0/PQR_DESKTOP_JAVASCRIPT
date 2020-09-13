const electron = require('electron')
const {app, BrowserWindow} = electron

const path = require('path')
const url  = require('url')

let win

function createWindow(){
	win = new electron.BrowserWindow ({width: 900, height: 700, resizable:false})
	win.loadURL(url.format({
		pathname: path.join(__dirname, '../HTML/index.html'),
		protocol: 'file',
		slashes: true
	}))
}

app.on('ready', createWindow)
