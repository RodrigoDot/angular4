# Angular 4

- This project is the result of the course that I'm doing at School of Net

## Requirements

- Node.js
- webpack-dev-server (npm install -g webpack-dev-server)

## Cloning the repository using console

- Clone ``git clone https://github.com/erikfig/angular2-webpack-skeleton.git``
- ``cd angular2-webpack-skeleton``
- remove .git repository
- ``npm install``


## Cloning the repository using Ng2Install (Isn't working)

- Run ``npm install -g ng2-install``
- Run ``ng2-install``


## Running the application

- ``npm start``


## The main files

- ``/public/css/style.css`` The base css
- ``/src/app/app.component.html`` The default template
- ``/src/app/app.component.css`` The default css
- ``/src/app/app.component.ts`` The config file that loads all components


## Creating the theme

- Install twitter bootstrap ``npm install --save bootstrap``
- Go to ``/arc/app/app.component.ts``
- And add ``import 'bootstrap/dist/css/bootstrap.css';`` at the top of the file
