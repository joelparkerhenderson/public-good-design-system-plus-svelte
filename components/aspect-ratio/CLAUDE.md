# AspectRatio

## Implementation Notes

- Pure layout utility — no ARIA role needed
- Uses `style:aspect-ratio` Svelte directive for inline CSS
- `data-aspect-ratio` attribute exposed for consumer CSS selectors
- Ratio prop is a number (width/height), e.g., 16/9 = 1.777...

## Props

- `ratio`: number (default: 1) — aspect ratio as width/height
- `children`: Snippet — content to display within the container

## Keyboard Interactions

- None — layout utility, not interactive

## ARIA

- None — transparent layout container
