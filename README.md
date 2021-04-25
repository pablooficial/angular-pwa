# AngularPwa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

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

#INSTALAR
 ng add @angular/pwa

É PRECISO BUILDAR para executar como pwa
ng build --prod

RODAR, entrar na pasta DIST, e depois entrar na pasta do projeto
 npx serve

Manifest.webmanifest => Arq de personalizção , aonde  colocamos o nome que ira aparecer no aplicativo e as img

HttpClientJsonpModule = Semelhante ao Httpclientmodule, porem trata arquivos json e barra o erro cors na aplicação



Para cachear os dados e o site aparecer offline
, "dataGroups": [
    {
      "name": "car-api",
      "urls": [
        "https://www.carqueryapi.com/api/0.3/"
      ],
      "cacheConfig": {
        "strategy": "performance", //perfomance os dados não mudam muito, freshines=dados mudam toda hora
        "maxSize": 10000,
        "maxAge": "10h",//depois de 10h o cach não esta mais valendo
        "timeout": "5s" //se em 5s a api não conectar os dados são cacheados
      }
    }
  ]![image](https://user-images.githubusercontent.com/39338362/115979026-dc340080-a559-11eb-943a-3ba703c7d8e5.png)

