# Angular Study Base 🧠🚀

A clean, scalable, and well-structured Angular base project designed for learning, experimentation, and future real-world application development.

## 📦 Project Overview

This repository provides a starter Angular project with:

- Lazy-loaded feature modules
- A modular folder structure
- SCSS styling
- ESLint integration
- HTTP interceptor for handling API requests
- Shared reusable components
- Built-in routing system

It's intended to serve as a foundational codebase for learning best practices and growing with more advanced features over time.

## 🔧 Tech Stack

- [Angular](https://angular.io/) 17+
- TypeScript
- SCSS
- ESLint
- RxJS
- Angular CLI

## 📁 Folder Structure

```bash
src/
├── app/
│   ├── core/            # Singleton services, interceptors, guards
│   ├── shared/          # Reusable UI components, pipes, directives
│   ├── features/        # Lazy-loaded modules (e.g., dashboard, auth)
│   ├── app-routing.module.ts
│   ├── app.component.ts
│   └── app.module.ts
├── assets/
├── environments/
