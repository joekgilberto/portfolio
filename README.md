# Joe Gilberto — Portfolio

My personal portfolio site, built with React, TypeScript, Vite, and Tailwind CSS. It has pages for my work, hobbies, contact info, and asset attributions.

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) for the dev server and build
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- [React Router](https://reactrouter.com) for client-side routing
- [React Icons](https://react-icons.github.io/react-icons/)
- [Oxlint](https://oxc.rs) for linting, [Prettier](https://prettier.io) (with the Tailwind plugin) for formatting

## Getting started

Requires Node.js and npm.

```sh
npm install
npm run dev
```

The dev server prints a local URL (by default http://localhost:5173).

## Scripts

| Command           | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with hot reload       |
| `npm run build`   | Type-check with `tsc -b`, then build to `dist/` |
| `npm run preview` | Serve the production build locally              |
| `npm run lint`    | Run Oxlint                                      |

To format the code, run `npx prettier --write .` (there's no npm script for it).

## Project structure

```
index.html              HTML entry point: favicons, manifest, theme color, loading spinner
public/
  favicons/             Favicons, Android icons, and site.webmanifest
src/
  index.tsx             Mounts the app inside a BrowserRouter
  index.css             Tailwind import, Google Fonts, theme tokens
  App/App.tsx           Background image, route table, navigation
  pages/                Home, Work, Hobbies, Contact, Attribution
  components/           Content, Navigation, ContactInfo, AttributionInfo, Chip
  assets/               Page images used in the build
original-photos/        Source copies of the page images (not used by the build)
```

### Routes

| Path           | Page        |
| -------------- | ----------- |
| `/`            | Home        |
| `/work`        | Work        |
| `/hobbies`     | Hobbies     |
| `/contact`     | Contact     |
| `/attribution` | Attribution |

To add a page, create a component in `src/pages/`, add a `<Route>` in `src/App/App.tsx`, and add an entry (label, path, icon) to the `LINKS` array in `src/components/Navigation.tsx`.

## Deployment

`npm run build` writes a static site to `dist/`, which can be served from any static host.

The site uses `BrowserRouter`, so the host has to send every unknown path to `index.html`. Without that fallback, reloading or directly opening a URL like `/work` returns a 404. On Netlify, that means a `_redirects` file with `/* /index.html 200`. On Vercel, it's a rewrite in `vercel.json`. Other hosts have their own SPA fallback setting.

## Credits

The full attributions are on the site's `/attribution` page:

- **Background photo**: Yoal Desurmont on [Unsplash](https://unsplash.com/photos/green-linear-leafed-plants-jqgsM3B9Fpo)
- **Favicon**: M Umar Farooq on [Unsplash](https://unsplash.com/illustrations/collection-of-ripe-and-unripe-bananas-and-peels-iuOKg5WZcRo)
- **Header font**: [Playwrite](https://github.com/TypeTogether/Playwrite), SIL Open Font License 1.1
- **Body font**: [Xmind](https://github.com/lamzhonghang/xmind), SIL Open Font License 1.1
