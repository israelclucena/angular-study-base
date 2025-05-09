# Angular Study Base 🧠🚀

A clean, scalable, and well-structured Angular 19 base project designed for learning, experimentation, and building real-world apps using best practices.

## 📦 Project Overview

This repository provides a starter Angular 19 project with:

- Lazy-loaded feature modules
- A modular and scalable folder structure
- SCSS styling
- ESLint integration
- HTTP interceptor for token handling
- Shared reusable components
- Built-in routing system
- Angular 19 features like signals, standalone APIs (optional)

It serves as a foundation for learning, testing, and future Angular development.

## 🅰️ Angular Stack

- [Angular 19](https://angular.io/)
- TypeScript
- SCSS
- RxJS
- ESLint
- Angular CLI

## 💽 Tech Stack

- ng version -> Angular CLI: 19.2.11
- node -v -> v22.14.0
- npm -v -> 11.3.0 

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── core/            # Singleton services, interceptors, guards
│   ├── shared/          # Reusable UI components, directives, pipes
│   ├── features/        # Lazy-loaded feature modules (e.g., dashboard, auth)
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets/
├── environments/

```

## ####################

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
