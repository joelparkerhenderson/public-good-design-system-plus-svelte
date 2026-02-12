# StepListItem

A single step item within a StepList ordered list. Renders a semantic `<li>` element representing one stage in a multi-step process, workflow, wizard, or multi-part form. The `status` prop controls ARIA attributes and a `data-status` attribute for consumer styling, communicating progress to both assistive technology and visual presentation.

This component is designed to be placed inside a StepList `<ol>`. The consumer controls each item's status to reflect the user's progress through the process.

## Implementation Notes

- Renders as `<li>` for proper list item semantics within a parent `<ol>`
- Uses `aria-current="step"` when status is `"current"` to indicate the active step
- Sets `data-status` attribute (`"completed"`, `"current"`, or `"upcoming"`) for consumer CSS hooks
- Defaults status to `"upcoming"` when not specified
- Spreads `restProps` onto the `<li>` for consumer customization

## Props

- `status`: `"completed"` | `"current"` | `"upcoming"` (default: `"upcoming"`) -- the step's progress state
- `children`: Snippet (required) -- step content
- `...restProps`: unknown -- additional attributes spread onto the `<li>`

## Usage

```svelte
<StepList label="Checkout process">
  <StepListItem status="completed">Cart</StepListItem>
  <StepListItem status="current">Shipping</StepListItem>
  <StepListItem status="upcoming">Payment</StepListItem>
  <StepListItem status="upcoming">Confirmation</StepListItem>
</StepList>
```

Consumer CSS example using `data-status`:

```css
[data-status="completed"] { opacity: 0.6; }
[data-status="current"] { font-weight: bold; }
[data-status="upcoming"] { opacity: 0.4; }
```

## Keyboard Interactions

- None directly -- standard list item with no interactive behavior
- If the step contains interactive elements (links, buttons), they handle their own keyboard behavior

## ARIA

- Semantic `<li>` provides list item semantics and position within the parent `<ol>`
- `aria-current="step"` -- indicates the currently active step to assistive technology (only when status is `"current"`)
- `data-status` -- communicates step state for consumer styling hooks

## References

- WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
