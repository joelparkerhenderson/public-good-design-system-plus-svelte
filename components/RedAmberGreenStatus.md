# RedAmberGreenStatus

The Red Amber Green (RAG) status component is a visual status indicator that uses the traffic light color scheme -- red, amber (yellow), and green -- to represent different levels of status, performance, or urgency. Commonly used in dashboards, reports, and project tracking tools, it provides an at-a-glance understanding of how something is performing: green typically means everything is on track, amber signals caution or minor issues, and red indicates a critical problem that needs immediate attention.

This component is an alternative naming for the RAG status view pattern, using the full color names rather than the acronym. It renders as a `<span>` element with an accessible label, making the status readable by screen readers and other assistive technologies. The headless design allows consumers to apply their own visual styling such as color-coded backgrounds or text colors.

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying a RAG status value as text content
- Alternative naming for the RAG status view pattern using full color names instead of the acronym
- Read-only display component, not interactive
- Value defaults to an empty string when not provided
- Uses Svelte 5 `$props()` rune for prop destructuring
- Spreads `...restProps` on the `<span>` element for consumer extensibility
- No hardcoded user-facing strings; label and value are fully configurable

## Props

- `label`: string (required) -- accessible label for screen readers via `aria-label`
- `value`: string (default: `""`) -- the status to display (e.g., "red", "amber", "green")
- `...restProps`: any additional HTML attributes spread onto the `<span>` element

## Usage

```svelte
<RedAmberGreenStatus label="Build status" value="green" />
```

```svelte
<RedAmberGreenStatus label="Deployment health" value={status} />
```

## Keyboard Interactions

None -- this is a passive informational display, not an interactive element.

## ARIA

- `aria-label={label}` -- provides the accessible name for the status display, allowing screen readers to announce the context of the value

## References

- WAI-ARIA status role: https://www.w3.org/TR/wai-aria-1.2/#status
