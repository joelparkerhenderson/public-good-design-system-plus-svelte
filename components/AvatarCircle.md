# AvatarCircle

An avatar circle is a component that displays a user's profile image or fallback initials within a circular frame, commonly used to represent a user identity in apps, websites, and social platforms. This visual element provides a quick, recognizable way for users to identify themselves or others, often appearing in headers, comments, chat interfaces, and account menus.

The component handles image loading gracefully: if an image source is provided, it displays the image; if the image fails to load, it automatically falls back to displaying the user's initials. When no image source is provided at all, initials are shown directly.

## Implementation Notes

- Outer `<span role="img" aria-label>` provides accessible image semantics for the entire avatar
- When `src` is provided and loads successfully, renders an `<img>` element inside the container
- Image error tracking uses `$state(imageError)` to detect failed image loads via the `onerror` handler
- `$derived(showImage)` computes whether to show the image based on `src` presence and error state
- Initials fallback `<span>` is marked `aria-hidden="true"` since the outer element already has `aria-label`
- Consumers apply circular styling via CSS (e.g., `border-radius: 50%`)
- No hardcoded strings; all text comes through props for internationalization

## Props

- `src`: string (optional) -- URL of the avatar image
- `alt`: string (required) -- accessible description of the person, used as `aria-label` on the container and `alt` on the image
- `initials`: string (optional) -- fallback text displayed when no image is available or the image fails to load
- `...restProps`: any -- additional HTML attributes spread onto the outer `<span>` element

## Usage

```svelte
<AvatarCircle src="/photo.jpg" alt="Jane Doe" />
```

```svelte
<AvatarCircle initials="JD" alt="Jane Doe" />
```

```svelte
<AvatarCircle src="/photo.jpg" alt="Jane Doe" initials="JD" />
```

## Keyboard Interactions

- None -- this is a decorative/informational component, not interactive

## ARIA

- `role="img"` -- on the outer container, conveying that the entire avatar is an image representation
- `aria-label` -- set from the `alt` prop, providing the accessible name for the avatar
- `aria-hidden="true"` -- on the inner initials `<span>`, preventing duplicate announcements since the outer element already has `aria-label`

## References

- WAI-ARIA Img Role: https://www.w3.org/TR/wai-aria-1.2/#img
