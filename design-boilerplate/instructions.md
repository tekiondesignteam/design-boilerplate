# AI Instructions: Tekion Design System

These instructions are for AI assistants working on this codebase. Follow these rules strictly to ensure the design system remains stable and consistent.

## 🧱 Component Management
- **Ground Truth**: All UI component source files MUST be `.html` files located in `design-boilerplate/components/`.
- **Dynamic Routing**: Do NOT create new React components for individual UI parts. Instead, add/edit the `.html` files in the ground truth directory. Next.js will automatically handle the routing and rendering.
- **Pathing**: Inside HTML files, use `../assets/` to reference CSS, icons, or images. The Next.js wrapper will automatically resolve these to the correct root `/public/assets/` path.

## 🎨 Asset Management
- **Location**: All CSS, icons, and fonts MUST be placed in root `/public/assets/`.
- **Legacy Files**: Do NOT use or restore the `design-boilerplate/assets/` folder. It has been deleted and consolidated into `/public`.
- **Tokens**: Prioritize using CSS variables (tokens) from `public/assets/css/tokens.css` over hardcoded values.

## 🚀 Development & Deployment
- **Local Dev**: Use `npm run dev`. The **Agentation toolbar** is only visible on `localhost`.
- **Deployment**: The project is deployed to GitHub Pages at `/design-boilerplate`.
- **Static Output**: The `out/` folder is auto-generated. NEVER manually edit files in `out/`.
- **Environment**: Always check `process.env.NODE_ENV` or `window.location.hostname` if you need to gate feature visibility (like the feedback toolbar).

## ⚠️ Forbidden Actions
- Do NOT edit `.next/`, `node_modules/`, or `out/`.
- Do NOT create `index.html` files in subdirectories; use the dynamic routing system instead.
- Do NOT use absolute root paths (like `/assets/`) in component HTML files, as they will break on GitHub Pages. Use `../assets/` instead.

---
*Follow these rules to maintain project integrity.*
