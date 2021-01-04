# Heroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Lucho comentarios:  
Con este comando podemos generar un nuevo componente con el nombre que se escriba en <nombreComponente> dentro de la carpeta pages para mantener ordenado el proyecto
```
ng g c pages/<nombreComponente>
```
  
Con este comando podemos generar un nuevo servicio con el nombre que se escriba en <nombreService> dentro de la carpeta services para mantener ordenado el proyecto
```
ng g service services/<nombreService>
```

Con este comando genera una interface con el nombre que se escriba en <nombreInterface> dentro de la carpeta interfaces para mantener ordenado el proyecto
```
ng g i interfaces/<nombreInterface>
```
  
Con este comando genera un pipe del nombre que se escriba en <nombrePipe> dentro de una carpeta pipes para mantener el proyecto ordenado
```
ng g pipe pipes/<nombrePipe> 
```
  
Este comando sirve para terminar el proyecto y podes subirlo a algun server para produccion.
```
ng build --prod
```
