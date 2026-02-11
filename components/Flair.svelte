<script lang="ts">
    // Component: Flair
    //
    // A decorative text badge/tag used to highlight status, category, or label.
    // Rendered as a span with appropriate ARIA for decorative or meaningful use.
    //
    // Props:
    //   label    — optional accessible name (if meaningful, not decorative)
    //   children — flair content text
    //
    // Usage:
    //   <Flair>New</Flair>
    //   <Flair label="Status: new">New</Flair>

    import type { Snippet } from "svelte";

    let {
        label = undefined,
        children,
        ...restProps
    }: {
        /** Accessible label (omit for decorative). */
        label?: string;
        /** Flair content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<span
    aria-label={label}
    aria-hidden={label ? undefined : "true"}
    {...restProps}
>
    {@render children()}
</span>
