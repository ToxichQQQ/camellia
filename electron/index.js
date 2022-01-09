const path = require("path");
const URL = require("url");
const isDev = require("electron-is-dev");

const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  let win;
  win = new BrowserWindow({
    width: 800,
    height: 800,
    resizable: false,
    // icon
  });

  const startUrl =
    process.env.ELECTRON_START_URL ||
    URL.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    });

  win.loadURL(isDev ? "http://localhost:3000" : startUrl);

  win.on("closed", () => {
    win = null;
  });
};

app.on("window-all-closed", () => {
  app.quit();
});

app.on("ready", createWindow);
