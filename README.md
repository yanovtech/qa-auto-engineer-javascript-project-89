### Hexlet tests and linter status:
[![Actions Status](https://github.com/RedBeduin/qa-auto-engineer-javascript-project-89/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/RedBeduin/qa-auto-engineer-javascript-project-89/actions)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=RedBeduin_qa-auto-engineer-javascript-project-89&metric=coverage)](https://sonarcloud.io/summary/new_code?id=RedBeduin_qa-auto-engineer-javascript-project-89)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=RedBeduin_qa-auto-engineer-javascript-project-89&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=RedBeduin_qa-auto-engineer-javascript-project-89)

### The testing of the chat bot widget
This project has purpose to test the registration form and the widget of the chat bot of the educational platform.

### Automatical tests directory
All files with automatical tests of the widget and application are stored in the \_\_tests\_\_ folder.

### How to copy the project to your PC
To copy this project to your PC, open Ubuntu, type in the command line ```git clone https://github.com/RedBeduin/qa-auto-engineer-javascript-project-89.git``` and rename the repository of the project if you want.

### How to open the application and the window with registration form and chat bot widget that are tested in the project
To open the application, open Ubuntu on your PC, move to the directory of the project and type in the command line ```npm run dev```, then type ```o``` to open the window with the registration form and the chat bot widget.

### Interaction with the registration form and chat bot widget
Then you can fill the registration form and click at checkbox field, send the filled form, type the buttons in the chat bot interface or close the window with the registration form and chat bot widget.

### Interaction with the application in Ubuntu via command line
Then you should type ```h``` in the command line to see help information/type ```q``` in the command line to exit the application.

### Exploring the test directory and the test files 
Then you can type ```cd __tests__``` in the command line to move to the directory with tests and type ```ls -a``` to see the structure of the directory. To see the test files it is better to use the code redactor program.

### Technologies that are used in the project
For the project application with help information, registration form and chat bot widget is used. This is the application of the educational platform that was not developed in this project. In this project an automatical testing of this application was written in two files:
* app.spec.jsx - testing of the application
* widget.spec.jsx - testing of the chat bot widget
Also CI/CD was connected to check the quality and the correct work of the project. In the \_\_fixtures\_\_ directory file with example steps of interaction with chat bot(steps.js) and vault with phrases, questions and options of chat bot(text-set.js) were written.
