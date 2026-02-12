# Timeline

A timeline is a UI/UX component used to visually organize and display events,
steps, or data points in chronological order, helping users understand
progression over time. Commonly used in project tracking, activity feeds,
historical overviews, or user journeys, timelines can be vertical, horizontal,
or interactive, often incorporating icons, dates, and brief descriptions for
clarity. This component aids comprehension by making complex sequences more
intuitive and scannable. Effective timeline design emphasizes readability,
logical flow, and visual hierarchy, allowing users to quickly grasp the order,
timing, and significance of events or stages.

This component renders as a semantic ordered list (`<ol>`) with an accessible
label, conveying the chronological nature of the content to both sighted users
and screen reader users. The consumer provides individual timeline entries as
`<li>` children through the children snippet.

## Implementation Notes

- Renders as `<ol aria-label={label}>` for chronological event sequences
- Ordered list conveys the chronological nature of events
- All timeline content provided through children snippet (should be `<li>` elements)
- Consumers can add `<time>` elements and descriptions to individual items
- No hardcoded strings; all text content comes through props and children

## Props

- `label`: string (required) -- accessible label via aria-label
- `children`: Snippet -- timeline items (should be `<li>` elements)
- `...restProps`: Any additional HTML attributes spread onto the `<ol>`

## Usage

```svelte
<script>
  import Timeline from "./Timeline.svelte";
</script>

<Timeline label="Project milestones">
  <li>Project kickoff - Jan 2024</li>
  <li>Alpha release - Mar 2024</li>
  <li>Beta release - Jun 2024</li>
  <li>General availability - Sep 2024</li>
</Timeline>
```

With semantic `<time>` elements:

```svelte
<Timeline label="Order history">
  <li>
    <time datetime="2024-01-15">January 15, 2024</time>
    <p>Order placed</p>
  </li>
  <li>
    <time datetime="2024-01-16">January 16, 2024</time>
    <p>Order shipped</p>
  </li>
  <li>
    <time datetime="2024-01-19">January 19, 2024</time>
    <p>Order delivered</p>
  </li>
</Timeline>
```

## Keyboard Interactions

- None directly -- standard list navigation by screen readers
- Tab moves focus between any interactive elements (links, buttons) within timeline items

## ARIA

- Semantic `<ol>` for ordered/chronological content
- `aria-label` provides accessible name for the list
- Consumers should use `<time>` elements with `datetime` attributes for machine-readable dates within items

## References

- HTML `<time>` element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
- WAI-ARIA list role: https://www.w3.org/TR/wai-aria-1.2/#list
