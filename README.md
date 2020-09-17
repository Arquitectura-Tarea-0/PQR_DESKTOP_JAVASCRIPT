# PQR_DESKTOP_JAVASCRIPT
# uwu

# Quick Installation/Use Guide

Easy mode: 
Use the setup.exe to install the app.

Normal mode (This way you can launch the app without installing it!): 
You must have node.js installed on your OS in order for npm to work. Go to the project main folder then launch your OS Console, change to the project main folder on your console then run the command 'npm install electron'. Wait for it to create a 'node_modules' folder. Once its done you can run the command 'npm init' to create/edit the package.json file (Or you can edit it the whay you prefer!). Now you're ready to run the app, run the command 'npm start' and it will open the PQR app without installing it in your device.

# How to create a setup file?

If you want to create a setup file for any OS (You have to follow the next steps).

To create our installer we will make use of a library available through npm packages called Electron Builder, locate ourselves inside the folder where our application is located and run the command 'npm install electron-builder --save-dev'. Then go to the main folder and create a folder called build where you have to add an image for each operating system 
icon.ico (Required for windows)
background.png (Required for Linux)
icon.icns (Required for Mac)
Normally you have to fix the previous package.json file but it is already done for it to create the app's setup, last step is to run the command 'npm run dist' and it will create the setup.exe

NOTE: If you want to create a Linux, Mac, Mam setup, you have to follow the previous steps in a device with the OS which you want to create the exe.
