# Contributing

## Workflow

1. Create a feature branch from `main`.
2. Make focused changes.
3. Run quality checks locally:

```bash
npm run lint
npm run build
```

4. Commit with clear messages.
5. Open a pull request with:
- Summary of changes
- Validation steps
- Screenshots if UI changed

## Coding Guidelines

- Keep TypeScript strict and avoid `any`.
- Prefer small, reusable components.
- Preserve existing architecture and naming conventions.
- Update docs when behavior or structure changes.

## Content Updates

Most resume content updates should be made in:

- `src/data/resume-config.ts`

PDF assets go in:

- `public/cv/fr/`
- `public/cv/en/`
