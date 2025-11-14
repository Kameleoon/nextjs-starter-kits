## Getting Started

This repository contains code examples demonstrating how the **Kameleoon SDK** can be integrated with **Next.js**.
Each example showcases a different integration approach:

### Server-Side Integrations

- **App Router**:
  - [Route Handler](./nodejs-route-handler-app-router)
  - [Middleware](./nodejs-middleware-app-router)
  - [Server Actions](./nodejs-server-action-app-router)
  - [No Cookie Set](./nodejs-no-set-cookie-app-router)
- **Pages Router** *(deprecated in newer Next.js versions)*:
  - [Pages Router](./nodejs-pages-router)

### Client-Side Integrations

- **App Router**:
  - [SSR Provider](./react-ssr-provider-app-router/) – simpler and recommended
  - [Custom Provider](./react-custom-provider-app-router/) – use only if custom external dependencies are required for Kameleoon
- **Pages Router** *(deprecated in newer Next.js versions)*:
  - [SSR Provider](./react-ssr-provider-pages-router/)

### Hybrid Integrations

- **App Router**:
  - [Route Handler + SSR Provider](./hybrid-route-handler-ssr-provider-app-router/)
