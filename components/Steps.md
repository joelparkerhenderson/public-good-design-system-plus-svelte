# Steps

A steps component is a UI/UX element that displays a sequence of stages or
actions in a process, workflow, wizard, or multi-step form. Steps help users
understand where they are in a multi-stage process, what they have completed,
and what remains ahead. They are commonly used in checkout flows, registration
processes, onboarding wizards, and multi-part forms.

This component renders as a semantic ordered list (<ol>) with an accessible
label, conveying the sequential nature of the steps to both sighted users and
screen reader users. The consumer provides individual step items as <li>
children, and can add aria-current="step" to indicate the active step.
# Steps

## Implementation Notes

- Renders as `<ol aria-label={label}>` for sequential step semantics
- Ordered list conveys the sequential nature of steps
- All step content provided through children snippet (should be `<li>` elements)
- Consumers can add `aria-current="step"` to the active step

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- step items (should be `<li>` elements)
- `...restProps`: Any additional HTML attributes

## Keyboard Interactions

- None directly -- standard list navigation by screen readers

## ARIA

- Semantic `<ol>` for ordered/sequential content
- `aria-label` provides accessible name for the list
- Consumers should use `aria-current="step"` on the active step
