# In-Browser Text Adventure Game

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/zachneill/game/master?label=version)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/zachneill/game/@angular/core?label=angular&color=red)
![GitHub last commit](https://img.shields.io/github/last-commit/zachneill/game) 

This application is a text-based adventure game. It is the product of an independent study project at Berea College created by Zach Neill and supervised by Dr. Scott Heggen and Dr. Gordon Gray. As a capstone for the Digital Media minor, the project intends to focus on aethetics and story, despite the inherent dearth of visuals within this genre. 

## Technologies

This application utilizes [Angular 14](https://angular.io/). Notable implementations are [NgRx](https://ngrx.io/) state management and [SASS](https://sass-lang.com/). [Webstorm](https://www.jetbrains.com/webstorm/) was the preferred IDE for development. 

## Development

Make sure to run `npm install` so you have all the dependencies. 

For the front end, run `ng serve` for a dev server. Navigate to the server at `http://localhost:4200/`. The app auto-reloads if you change any source files. 

For deploying to the [website](https://zachneill.github.io/game), run `npm run deploy`. This custom script technically runs `ng deploy --base-href=/game/`, and the angular-gh-pages package takes care of the rest (creating the build folder, pushing to the [gh-pages](https://github.com/zachneill/game/tree/gh-pages) branch, etc.).

## Dev Checklist 

- Pre-development stages
- NgRx implementation
- Testing
- Actually creating the game
