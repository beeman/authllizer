import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import { format } from 'url';

let isDevelopment: boolean = process.env.NODE_ENV !== 'production';
let mainWindow: BrowserWindow;

function createWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let appUrl: string = isDevelopment
        ? `http://localhost:8080`
        : format({
            pathname: join(__dirname, 'dist', 'index.html'),
            protocol: 'file:',
            slashes: true,
        });

    // open dev tools in development
    if (isDevelopment) {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
        mainWindow.webContents.openDevTools();
    }

    // and load the index.html of the app.
    mainWindow.loadURL(appUrl);

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()

    // Emitted when the window is closed.
    mainWindow
        .on('closed', () => {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null;
        });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app
    .on('window-all-closed', () => {
        // On OS X it is common for applications and their menu bar
        // to stay active until the user quits explicitly with Cmd + Q
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

app
    .on('activate', () => {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow();
        }
    });