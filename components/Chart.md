# Chart

A chart is a component used to visually represent data through graphical formats such as bar charts, line charts, pie charts, area charts, and scatter plots. Commonly used in dashboards, reports, analytics tools, and data-driven applications, charts transform raw numbers into visual patterns that make trends, comparisons, and distributions easier to understand at a glance.

This headless component renders a `<figure>` element with `role="img"` and an accessible label. The consumer provides their preferred visualization content (SVG, canvas, or a charting library) as children. The figure element provides semantic grouping for the chart content.

## Implementation Notes

- Renders a `<figure>` element with `role="img"` for semantic chart representation
- The `<figure>` element provides a natural container for graphical content
- Consumer provides all chart rendering (SVG, canvas, D3, Chart.js, etc.) via the `children` snippet
- Accepts `...restProps` for forwarding additional attributes to the figure element
- No internal state -- purely a structural wrapper

## Props

- `label`: string (required) -- accessible name describing what the chart represents, applied via `aria-label`
- `children`: Snippet (required) -- the chart visualization content

## Usage

```svelte
<Chart label="Monthly revenue for 2024">
    <svg><!-- bar chart SVG here --></svg>
</Chart>
```

```svelte
<Chart label="User growth trend">
    <canvas><!-- canvas chart here --></canvas>
</Chart>
```

## Keyboard Interactions

None -- this component is a passive container for data visualization.

## ARIA

- `role="img"` -- identifies the figure as a graphical image to assistive technologies
- `aria-label={label}` -- provides an accessible name describing the chart content

## References

- WAI-ARIA img role: https://www.w3.org/TR/wai-aria-1.2/#img
- MDN figure element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
