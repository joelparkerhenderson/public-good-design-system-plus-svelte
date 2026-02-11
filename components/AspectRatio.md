# Aspect Ratio

An aspect ratio component is a layout utility that constrains its content to a
specific width-to-height ratio. It ensures that images, videos, maps, and other
embedded content maintain consistent proportions regardless of the container
size. Common aspect ratios include 16:9 (widescreen video), 4:3 (traditional
display), 1:1 (square, often for avatars or thumbnails), and 21:9 (ultrawide).

This component sets the CSS `aspect-ratio` property on a wrapper element,
allowing consumers to control sizing through their own stylesheets while the
component guarantees the proportional constraint.
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
