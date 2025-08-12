# ESLint Configuration

This project is configured with ESLint for code quality and consistency.

## Features

- **TypeScript Support**: Full TypeScript linting with `@typescript-eslint`
- **React Rules**: React-specific linting rules and hooks validation
- **Accessibility**: JSX accessibility rules with `eslint-plugin-jsx-a11y`
- **Import Sorting**: Automatic import organization and sorting
- **Code Quality**: Best practices and common error prevention

## Available Scripts

```bash
# Check for linting errors
npm run lint

# Fix automatically fixable issues
npm run lint:fix
```

## Configuration Files

- `.eslintrc.js` - Main ESLint configuration
- `.eslintignore` - Files and directories to ignore
- `tsconfig.eslint.json` - TypeScript config for ESLint
- `.vscode/settings.json` - VS Code integration settings

## Key Rules

### React & TypeScript
- No unused variables (with underscore prefix exception)
- React hooks rules enforced
- JSX accessibility standards
- TypeScript best practices

### Code Style
- Prefer `const` over `let`
- No `var` usage
- Object shorthand notation
- Template literals over string concatenation
- Import organization and sorting

### Warnings
- Console statements (development only)
- `any` type usage
- Non-null assertions

## VS Code Integration

The project includes VS Code settings for:
- ESLint validation on save
- Auto-fix on save
- Import suggestions
- TypeScript preferences

## Customization

To modify rules, edit `.eslintrc.js` and adjust the `rules` section. The configuration extends recommended presets for React, TypeScript, and accessibility.
