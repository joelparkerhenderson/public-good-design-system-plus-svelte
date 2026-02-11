<script lang="ts">
    // Component: Emoji
    //
    // Wraps an emoji character with role="img" and aria-label for a11y.
    //
    // Props:
    //   emoji — the emoji character(s) to display
    //   label — accessible name describing the emoji
    //
    // Usage:
    //   <Emoji emoji="👍" label="Thumbs up" />

    let {
        emoji,
        label,
        ...restProps
    }: {
        /** The emoji character(s). */
        emoji: string;
        /** Accessible name for the emoji. */
        label: string;
        [key: string]: unknown;
    } = $props();
</script>

<span role="img" aria-label={label} {...restProps}>{emoji}</span>
