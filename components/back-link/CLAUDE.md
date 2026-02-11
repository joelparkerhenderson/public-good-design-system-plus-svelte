# BackLink

## Implementation Notes

- Simple semantic `<a>` element for backward navigation
- Same pattern as ActionLink but semantically represents "going back"
- Consumers add visual indicators (left arrow, chevron) via CSS or children content
- Supports `aria-label` override for more descriptive screen reader text

## Props

- `href`: string (required) — URL to navigate back to
- `label`: string (optional) — accessible label override
- `children`: Snippet — link text/content

## Keyboard Interactions

- Tab: Focus the link
- Enter: Activate the link (browser default)

## ARIA

- Implicit `link` role from `<a>` element
- Optional `aria-label` for descriptive screen reader text
