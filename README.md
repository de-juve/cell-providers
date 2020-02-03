# ShakuroTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

Resolve https://gitlab.com/shakuro-public/frontend-test

1) Refactoring:
This code find last index of chars `a` or `b` in string `s`

Improve version:
a) For short strings 
```javascript
function func(s, a, b) {
    return Math.max(s.lastIndexOf(a), s.lastIndexOf(b));
}
```
b) 
```javascript
function func(s, a, b) {
    if (s.length === 0) {
        return -1;
    }
    const length = s.length;
    for(let i = length-1; i >= 0; i--) {
        if (s[i] === a || s[i] === b) {
            return i;
        }   
    }
    return -1;
}
````

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
