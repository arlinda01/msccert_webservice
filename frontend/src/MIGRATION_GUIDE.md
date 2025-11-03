# TypeScript Migration Guide

## New Project Structure

```
frontend/src/
├── components/          # Reusable UI components
│   ├── Navigation/
│   │   ├── Navigation.tsx
│   │   ├── Navigation.module.css
│   │   └── index.ts
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   ├── Footer.module.css
│   │   └── index.ts
│   └── ...
├── pages/              # Page-level components
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.module.css
│   │   └── index.ts
│   ├── CertificateList/
│   │   ├── CertificateList.tsx
│   │   └── index.ts
│   └── CertificateDetail/
│       ├── CertificateDetail.tsx
│       └── index.ts
├── services/           # API and business logic
│   ├── api.ts
│   └── index.ts
├── types/              # TypeScript type definitions
│   ├── certificate.ts
│   └── index.ts
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx
├── App.module.css
├── index.tsx
└── index.css
```

## Migration Steps Completed

1. ✅ TypeScript configuration (tsconfig.json)
2. ✅ Created organized folder structure
3. ✅ Converted Navigation component to TypeScript with CSS Modules
4. ✅ Created type definitions for Certificate and FAQ

## Remaining Steps

1. Convert Footer component
2. Convert Home to pages/Home
3. Convert CertificateList and CertificateDetail to pages
4. Convert API service to TypeScript
5. Update App.tsx
6. Update index.tsx
7. Clean up old .js files

## CSS Modules Convention

- Use camelCase for class names in CSS files
- Import as: `import styles from './Component.module.css'`
- Use as: `className={styles.className}`

## TypeScript Best Practices

- Use FC (FunctionComponent) type for components
- Define proper prop interfaces
- Use explicit return types for functions
- Avoid `any` type - use specific types or `unknown`

## Path Aliases (tsconfig.json)

```typescript
import Navigation from '@components/Navigation';
import { Certificate } from '@types';
import { api } from '@services';
```
