# Spinner

A spinner is a component used to indicate that a process or action is currently in progress, typically involving loading, submitting, or fetching data. It signals to users that they need to wait momentarily, helping manage expectations and improving perceived performance by providing visual feedback during delays.

This headless component renders a `<div>` with `role="status"` and `aria-live="polite"` to announce the loading state to screen readers without interrupting them. The consumer provides all visual styling and can optionally include child content such as a loading message.

## Implementation Notes

- Renders a `<div>` with `role="status"` for screen reader announcements
- Uses `aria-live="polite"` so loading announcements do not interrupt the current screen reader output
- Supports optional `children` snippet for custom loading text or animated content
- Accepts `...restProps` for forwarding additional attributes to the container

## Props

- `label`: string (required) -- accessible name describing the loading state, applied via `aria-label`
- `children`: Snippet (optional) -- content rendered inside the spinner container

## Usage

```svelte
<Spinner label="Loading" />
```

```svelte
<Spinner label="Processing">
    <span>Please wait...</span>
</Spinner>
```

## Keyboard Interactions

None -- this component is a passive status indicator.

## ARIA

- `role="status"` -- defines the element as a live region for status messages; screen readers announce content changes
- `aria-label={label}` -- provides an accessible name describing what is loading
- `aria-live="polite"` -- ensures new content is announced after the screen reader finishes its current output

## References

- WAI-ARIA status role: https://www.w3.org/TR/wai-aria-1.2/#status
- WAI-ARIA Live Regions: https://www.w3.org/TR/wai-aria-1.2/#aria-live
