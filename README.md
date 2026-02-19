# Tekion Design System Boilerplate
date: 2026-02-19

This project has been migrated from a collection of static HTML/CSS files to a **Next.js 16 (App Router)** application. It is configured for **Static Site Generation (SSG)** and is deployed to GitHub Pages.

## Project Architecture

The system uses Next.js to provide a dynamic wrapper around static component files, enabling features like easy navigation, a persistent sidebar, and conditional toolbars while maintaining the simplicity of the original HTML components.

- **Framework**: Next.js 16
- **Deployment**: GitHub Pages (Static Export)
- **Styling**: Vanilla CSS (tokens-based)

---

## Folder Structure

### 🏗️ Design Components (`/design-boilerplate`)
This is the **Ground Truth** for all UI components.
- **`components/`**: Place all your component `.html` files here. Next.js automatically detects these files and generates a route for each (e.g., `button.html` becomes `/components/button/`).

### 🌐 Public Assets (`/public`)
Contains all static assets served by the application. All assets previously located in `design-boilerplate/assets/` have been consolidated here.
- **`assets/css/`**: Global stylesheets (e.g., `tokens.css`, `colors.css`, `typography.css`).
- **`assets/icons/`**: SVG icons used across the design system.
- **`assets/fonts/`**: Project font files.

### 🚀 Application Logic (`/src/app`)
The "brains" of the showcase.
- **`layout.js`**: Controls the root HTML, global style imports, and the sidebar layout.
- **`page.js`**: The main landing page (Showcases Design Tokens).
- **`components/[slug]/page.js`**: A dynamic route that reads the HTML files from the `/design-boilerplate/components` directory and renders them inside the Next.js wrapper.
- **`components/ClientAgentation.js`**: A wrapper that ensures the Agentation toolbar is **only visible on localhost**.

---

## Development Workflow

### 1. Adding a New Component
To add a new component to the showcase:
1. Create a new `.html` file in `design-boilerplate/components/` (e.g., `new-component.html`).
2. Add the component's CSS to `public/assets/css/` if it's new.
3. The component will automatically be visible at `http://localhost:3000/components/new-component/`.

### 2. Updating Design Tokens
Modify the CSS files in `public/assets/css/`. These are imported globally in `src/app/layout.js` and will reflect across all components and the landing page.

### 3. Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000). The **Agentation toolbar** is active in this mode.

---

## Build & Deployment

### Global Configuration (`next.config.mjs`)
- **`output: 'export'`**: Directs Next.js to generate a static HTML/CSS site in the `out/` folder.
- **`basePath`**: Set to `/design-boilerplate` during production to match the GitHub Pages URL structure.

### Deployment Commands
- **Build**: `npm run build` (Generates files in `out/`)
- **Deploy**: `npm run deploy` (Pushes the `out/` folder to the `gh-pages` branch)

> [!IMPORTANT]
> **Source Control vs. Deployment**: `npm run deploy` only updates the live website by pushing build artifacts to the `gh-pages` branch. It does **not** push your source code changes. You must still use standard Git commands (`git push`) to save your code to the main repository.

---

## Folders to Avoid
- **`.next/`**: Local build cache (managed by Next.js).
- **`node_modules/`**: Project dependencies.
- **`out/`**: The static output folder. **Do not edit files here directly** as they are overwritten on every build.
- **`tmp/`**: Temporary scratchpad files.

---
