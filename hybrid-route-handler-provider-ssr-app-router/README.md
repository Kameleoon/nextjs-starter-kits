
## Description

This example demonstrates how to use the NodeJS SDK and React SDK with Next.js (App Router) and [Route Handlers](https://nextjs.org/docs/app/getting-started/route-handlers).

## How to run

- Update your site codes in `src/kameleoon.ts` (NodeJS SDK) and `src/app/_providers/provider.tsx` (React SDK).
- Update your feature keys in `src/app/route.tsx` (NodeJS SDK) and `src/app/newdesign/pageExperiment.tsx` (React SDK).
- Run `yarn dev` or `npm run dev`, then open your browser and go to `http://localhost:3000`.
- To simulate a new visitor, remove the `kameleoonVisitorCode` cookie in your browser. For testing the NodeJS SDK, you must also visit `http://localhost:3000`.

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
