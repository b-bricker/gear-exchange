# Gear Exchange

This project sets up a webapp to facilitate local exchange of soccer equipment.

## Project setup

### React App

Configured using Vite:

```bash
npm create vite@latest gear-exchange -- template react-ts
```

Added linting/prettier scripts and deploy script that works with infra directory:

```json
# ./package.json
"scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint src --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "prettier": "npx prettier --write .",
    "lint:fix": "npx eslint src/* --fix",
    "deploy": "npm install && npm run build && cd infra && npm install && npm run cdk-synth && npm run cdk-deploy"
  },
```

Updated `vite.config.ts` to build to infra directory:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './infra/resources/build',
  },
});
```

### Infrastructure

Initialized with AWS CDK using [this article](https://rhythmandbinary.com/post/2023-02-21-deploy-a-react-app-with-the-aws-cdk) as a guideline:

```bash
mkdir infra
cd infra
npx aws-cdk init app --language typescript
```

Added `infra_build` instead of `InfraBuild` for `outDir` in `infra/tsconfig.json`.
