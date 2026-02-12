# AccordionArea

An accordion area is a container that organizes and displays content in a space-efficient, collapsible format. It consists of vertically stacked sections, each with a clickable header that expands or collapses its associated content. This design helps reduce visual clutter, allowing users to focus on one section at a time while keeping other content hidden until needed. Commonly used in FAQs, filters, or mobile menus, accordions enhance usability by streamlining content access and improving navigation on both desktop and mobile interfaces.

The AccordionArea component serves as the outer wrapper and requires AccordionAreaItem children to provide the individual collapsible sections.

## Implementation Notes

- Renders a `<div>` with `role="region"` as the semantic container
- Uses `aria-label` for accessible naming of the accordion region
- Accepts a `children` Snippet for composing AccordionAreaItem elements inside
- Spreads `restProps` for consumer customization
- This is a compound component: use with AccordionAreaItem for full functionality

## Props

- `label`: string (required) -- accessible name for the accordion region via `aria-label`
- `children`: Snippet (required) -- accordion item elements to render inside the container
- `...restProps`: unknown -- additional attributes spread onto the outer `<div>`

## Usage

```svelte
<AccordionArea label="FAQ">
  <AccordionAreaItem summary="Question 1">Answer 1</AccordionAreaItem>
</AccordionArea>
```

## Keyboard Interactions

None -- this component is a passive container. Keyboard interactions are handled by AccordionAreaItem children.

## ARIA

- `role="region"` -- identifies the accordion as a landmark region
- `aria-label="..."` -- provides an accessible name for the region, allowing screen readers to announce it

## References

- WAI-ARIA Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/accordion/
