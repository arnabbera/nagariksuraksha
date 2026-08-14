# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Social sharing worker

Facebook and X use the free Cloudflare Worker in `worker/social-share.js` so social crawlers receive post-specific Open Graph metadata before the React application loads.

Deploy it after signing in to Cloudflare:

```bash
npx wrangler login
npx wrangler secret put FIREBASE_API_KEY
npx wrangler deploy
```

When Wrangler asks for `FIREBASE_API_KEY`, paste the existing NagarikSuraksha Firebase Web API key. After deployment, set `VITE_SOCIAL_SHARE_BASE_URL` to the public Worker URL and rebuild the website.

The Worker reads only published posts from the existing Firestore `posts` collection and redirects human visitors to the canonical NagarikSuraksha post.
