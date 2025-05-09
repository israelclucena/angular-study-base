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

## 🔧 Tech Stack

- [Angular 19](https://angular.io/)
- TypeScript
- SCSS
- RxJS
- ESLint
- Angular CLI

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── core/            # Singleton services, interceptors, guards
│   ├── shared/          # Reusable UI components, directives, pipes
│   ├── features/        # Lazy-loaded feature modules (e.g., dashboard, auth)
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/