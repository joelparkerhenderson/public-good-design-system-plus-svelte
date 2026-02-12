# StepList

A step list component displays a sequence of stages or actions in a process, workflow, wizard, or multi-step form. Steps help users understand where they are in a multi-stage process, what they have completed, and what remains ahead. They are commonly used in checkout flows, registration processes, onboarding wizards, and multi-part forms.

This component renders as a semantic ordered list (`<ol>`) with an accessible label, conveying the sequential nature of the steps to both sighted users and screen reader users. The consumer provides individual step items as `<li>` children, and can add `aria-current="step"` to indicate the active step.

## Implementation Notes

- Renders as `<ol aria-label={label}>` for sequential step semantics
- Ordered list element conveys the sequential nature of steps to assistive technology
- All step content is provided through the `children` Snippet (should be `<li>` elements)
- Uses Svelte 5 `$props()` rune for prop destructuring
- Spreads `...restProps` on the `<ol>` element for consumer extensibility
- Consumers can add `aria-current="step"` to the active step `<li>` to indicate progress
- No hardcoded user-facing strings; all text comes through props and children

## Props

- `label`: string (required) -- accessible label for the steps list via `aria-label`
- `children`: Snippet (required) -- step items, should be `<li>` elements
- `...restProps`: any additional HTML attributes spread onto the `<ol>` element

## Usage

```svelte
<StepList label="Checkout process">
    <li>Cart</li>
    <li aria-current="step">Shipping</li>
    <li>Payment</li>
    <li>Confirmation</li>
</StepList>
```

## Keyboard Interactions

None directly -- standard list navigation is handled by screen readers. Individual step items may contain interactive elements with their own keyboard behavior.

## ARIA

- Semantic `<ol>` -- conveys ordered/sequential content to assistive technology
- `aria-label={label}` -- provides the accessible name for the list, announced by screen readers along with the item count
- `aria-current="step"` -- consumers should add this attribute to the active step `<li>` to indicate the current position in the process

## References

- WAI-ARIA aria-current: https://www.w3.org/TR/wai-aria-1.2/#aria-current
- WAI-ARIA landmark regions: https://www.w3.org/WAI/ARIA/apd/practices/landmark-regions/
