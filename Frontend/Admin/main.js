const{app, BrowserWindow} = require('electron') 
let win;
function createWindow (){
    
 // Create the browser window.
  win=new BrowserWindow({
      width: 600,
      height: 600,
      resizable: true,
      backgroundColor: '#212529'

  })
  win.setMenu(null);
  win.loadURL(`file://${__dirname}/dist/admin/index.html`)
  win.on('closed', function (){
    win= null 
  })
}
app.on('ready', createWindow);
app.on('window-all-closed', function(){
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate' , function(){
    if(win === null){
        createWindow()
    }
})