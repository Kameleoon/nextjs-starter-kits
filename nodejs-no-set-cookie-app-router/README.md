## Getting Started

This example demonstrates how to use the NodeJS SDK with Next.js (App Router) in cases where the visitor code is already saved in a cookie (e.g., by [engine.js](https://developers.kameleoon.com/web-experimentation/simple-implementation)) or when `getVisitorCode` has not been invoked.

## How to run

- Update your site code in the file: `src/kameleoon.ts`
- Update your feature key in the file: `src/app/page.tsx`
- Run `yarn ..` or `npm ...`, then open your browser and go to `http://localhost:3000`.
- To simulate a new visitor please change the `kameleoonVisitorCode` cookie in your browser.

> [!WARNING]
> You will get a new variation on every page refresh until the `kameleoonVisitorCode` cookie is set. the SDK does not set this cookie automatically.

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
