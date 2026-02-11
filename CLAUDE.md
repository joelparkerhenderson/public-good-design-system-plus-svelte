# Public Good Design System Plus Svelte

## IMPORTANT component architecture

- Svelte 5
- Runes patterns
- Prop conventions
- TypeScript conventions
- Headless design
- Comprehensive comments with syntax, usage, examples, explanations, etc.
- Input/View pattern for paired -input/-view components
- All tasks reference plan.md for implementation details

## NO

- No SvelteKit
- No images
- No icons
- No fonts
- No stylesheets
- No visual styling
- No Tailwind
- No DaisyUI
- No Paraglide
- No svelte-i18n
- No @testing-library/jest-dom

## Component directory success checklist

Each component directory has these files:

- CLAUDE.md (Claude notes; always update this file with new information, new help, new learning)
- index.md (markdown text that explains the component purpose, syntax, usage, examples, documentation)
- {ComponentTitlePascalCase}.svelte (Svelte TypeScript component headless, with plenty of help comments)
- {ComponentTitlePascalCase}.svelte.test.ts (testing-library svelte-testing-library component test)

## Component success checklist

- Keyboard navigation tested
- Screen reader tested
- WCAG 2.2 AAA tested
- ARIA attributes all present tested
- TypeScript types exported tested

## Component granularity

- If a directory represents a compound pattern, then stop and ask for help.
- The directory must be changed to have separate component directories
- The directory must not have sub-components within the same directory.

### Headless component scope

- Semantic HTML
- ARIA attributes
- Props
- Events
- No visual styling
- Consumers bring all their own CSS

## Titles

- PackagePascalCase: PublicGoodDesignSystemPlusSvelte
- package-kebab-case: public-good-design-system-plus-svelte
- package_snake_case: public_good_design_system_plus_svelte

## Helpers

- List components: Bash(find components -type d -depth 1 -exec basename {} \; | sort)

## Testing

- testing-library svelte-testing-library https://github.com/testing-library/svelte-testing-library
- testing-library user-event: https://github.com/testing-library/user-event
- example help/testing-library/svelte-testing-library/examples/MyComponent.svelte
- example help/testing-library/svelte-testing-library/examples/MyComponent.svelte.test.ts

### Testing with vitest not jest-dom

Prohibit `@testing-library/jest-dom`. All tests use vitest built-in matchers only.

- `expect(el).toBeTruthy()` instead of `expect(el).toBeInTheDocument()`
- `expect(el).toBeNull()` instead of `expect(el).not.toBeInTheDocument()`
- `expect(el.getAttribute('role')).toBe('button')` instead of `expect(el).toHaveAttribute('role', 'button')`
- `expect(el.textContent).toContain('text')` instead of `expect(el).toHaveTextContent('text')`

## Accessbility

- Semantic HTML, alt text, link text, form labels, scoping, table row headings, table column headings.
- Provide keyboard navigation, screen readers, color contrast, etc.
- Web Content Accessibility Guidelines (WCAG) 2.2 AAA
- Accessible Rich Internet Applications (ARIA) attributes
- ARIA pattern references: Mapping to WAI-ARIA Authoring Practices

## Internationalization

- String Externalization: Never hardcode user-facing strings. Use variable attributes.
- Contextual Awareness: Text is retrieved by translation, not written directly into code.

## Setup

`npm install --save-dev @sveltejs/vite-plugin-svelte svelte @vitest/ui vitest @testing-library/svelte @testing-library/user-event jsdom`

## Implementation plan

- Infrastructure prerequisites: Missing svelte dependency, vitest-setup.js, test pipeline verification
- Verify Test Pipeline: run `npm test` to confirm testing works end-to-end before writing component tests.
- Templates: .svelte, .test.ts, index.md, and CLAUDE.md templates
- Implementation priority: start with infrastructure tasks first, then proceed alphabetically
- Batch size: Implement as many components as possible per session, until out of tokens

## Timeline

- There is no specific deadline.
- There is no preferred timeline.

## Project metadata tracking

- Package: public-good-design-system-plus-svelte
- Version: 0.1.0
- Created: 2021-03-30T15:47:49Z
- Updated: 2026-01-14T21:43:14Z
- License: MIT or Apache-2.0 or GPL-2.0 or GPL-3.0 or contact us for more
- Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
