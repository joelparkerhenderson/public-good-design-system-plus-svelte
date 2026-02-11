<script lang="ts">
    // Component: Character
    //
    // A headless component for displaying a single character with accessible
    // semantics. Useful for decorative characters, initials, or single-glyph
    // displays where screen readers need context.
    //
    // Usage:
    //   <Character label="Check mark">✓</Character>
    //   <Character label="Warning symbol">⚠</Character>
    //   <Character decorative>★</Character>
    //
    // Accessibility:
    //   - aria-label provides meaning for the character
    //   - aria-hidden when decorative (no screen reader announcement)

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        decorative = false,
        children,
        ...restProps
    }: {
        label?: string;
        decorative?: boolean;
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<span
    role={decorative ? "presentation" : "img"}
    aria-label={decorative ? undefined : label}
    aria-hidden={decorative ? "true" : undefined}
    {...restProps}
>
    {@render children()}
</span>
