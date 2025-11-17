## Getting Started

This example demonstrates how to use the React SDK with Next.js (App Router) using the SSR Provider, which automatically prevents its creation on the server side.

## How to run

- Update your site code in the file: `src/provider/provider.tsx`.
- Update your feature key in the file: `src/components/pageExperiment.tsx`.
- Run `yarn ..` or `npm ...`, then open your browser and go to `http://localhost:3000`.
- To simulate a new visitor, please remove the `kameleoonVisitorCode` cookie in your browser.

For Yarn:

```bash
yarn install
```
development:

```bash
yarn dev
```
production:

```bash
yarn build
yarn start
```

Or for NPM:

```bash
npm install
```
For development:

```bash
npm run dev
```
For production:

```bash
npm run build
npm run start
```
