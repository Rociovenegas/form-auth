# Duolingo Auth

Login y registro con React, solo interfaz (sin validación ni backend real).
Incluye botón falso de "Ingresar con Google" y una pantalla de bienvenida
estilo app de aprendizaje al iniciar sesión.

## Cómo correrlo localmente

```bash
npm install
npm run dev
```

Abre la URL que te muestre la terminal (normalmente http://localhost:5173).

## Publicar en GitHub Pages

```bash
npm run deploy
```

Luego activa GitHub Pages en Settings → Pages → rama `gh-pages`.

## Estructura

```
src/
  AuthApp.jsx   -> login, registro y pantalla de bienvenida
  App.jsx       -> monta el AuthApp
  main.jsx      -> punto de entrada de React
```
