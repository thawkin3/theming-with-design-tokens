# Theming with Design Tokens

This demo is part of a talk for UtahJS Conference 2025. Learn how you can leverage design tokens to master creating themes for your app. Light mode, dark mode, and more!

The app is built using Vite, React, CSS modules, and CSS variables.

## Running Locally

1. `npm install`
2. `npm run dev`
3. Open your browser to http://localhost:5173/ (or whatever your terminal shows)

## Using the Demo

The `index.html` file controls which demo `src` file is used. Comment and un-comment out the scripts to change which demo you see. Only one script at a time should be used.

```html
<!-- <script type="module" src="/src/01-beginning/main.jsx"></script> -->
<!-- <script type="module" src="/src/02-centralized-tokens/main.jsx"></script> -->
<!-- <script type="module" src="/src/03-light-and-dark-themes/main.jsx"></script> -->
<!-- <script type="module" src="/src/04-theme-switcher/main.jsx"></script> -->
<script type="module" src="/src/05-more-themes/main.jsx"></script>
```

1. `01-beginning`: Starting point. Nice looking app, but hard-coded CSS hex color values everywhere.
2. `02-centralized-tokens`: CSS variables are centralized in the `index.css` file.
3. `03-light-and-dark-themes`: Light and dark themes are introduced. The theme switches automatically based on your browser's or operating system's preference for light or dark mode.
4. `04-theme-switcher`: A theme switcher UI control is introduced. Give users more control over which theme they use.
5. `05-more-themes`: Add even more themes. Light and dark mode are the most common use cases, but with this setup in place, you can build whatever themes you want!
