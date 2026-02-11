# Back link

A back link in UI/UX is a navigational component that allows users to return
to a previous page or step within an app or website, often represented as a
left-pointing arrow accompanied by text like “Back” or the name of the previous
page. It enhances usability by providing a clear, intuitive way to reverse
navigation without relying solely on the browser’s back button. Back links are
especially important in mobile and multi-step interfaces, helping users maintain
their sense of orientation and reducing frustration by making navigation feel
more seamless and controlled.
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
