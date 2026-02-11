<script lang="ts">
    // Component: CharacterCounter
    //
    // A headless character counter that displays character count information
    // for a text input. Announces changes to screen readers via aria-live.
    //
    // Usage:
    //   <CharacterCounter count={text.length} max={280} label="Characters" />
    //
    // Accessibility:
    //   - role="status" with aria-live="polite" for dynamic updates
    //   - aria-label provides context for the counter

    let {
        count = 0,
        max = undefined,
        label = undefined,
        ...restProps
    }: {
        /** Current character count */
        count?: number;
        /** Maximum allowed characters (optional) */
        max?: number;
        /** Accessible label for the counter */
        label?: string;
        [key: string]: unknown;
    } = $props();

    let remaining = $derived(max != null ? max - count : undefined);
    let overLimit = $derived(max != null && count > max);

    // Screen reader text: "5 of 280" or "5" or "5 remaining"
    let displayText = $derived(
        max != null ? `${count} / ${max}` : `${count}`
    );
</script>

<span
    role="status"
    aria-live="polite"
    aria-label={label}
    data-count={count}
    data-max={max}
    data-remaining={remaining}
    data-over-limit={overLimit || undefined}
    {...restProps}
>
    {displayText}
</span>
