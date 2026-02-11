<script lang="ts">
    // Component: Timer
    //
    // A headless timer component that renders a <time> element with
    // role="timer" and aria-live="polite" for accessible timer displays.
    // The children snippet provides the timer display content, which is
    // managed by the consumer (countdown, stopwatch, etc.).
    //
    // Usage:
    //   <Timer label="Countdown">05:30</Timer>
    //   <Timer label="Elapsed time">{formattedTime}</Timer>
    //   <Timer label="Session timeout" datetime="PT5M30S">{display}</Timer>
    //
    // Props:
    //   - label: Accessible label for screen readers (required)
    //   - children: Snippet for the timer display text
    //   - ...restProps: Any additional HTML attributes spread onto the time element
    //
    // Accessibility:
    //   - Semantic: <time> element for machine-readable time data
    //   - Role: timer for indicating a countdown or elapsed time
    //   - ARIA: aria-label for screen reader context
    //   - ARIA: aria-live="polite" announces timer updates without interrupting
    //   - WCAG 2.2 AAA: Properly labeled with live region for updates
    //
    // Internationalization:
    //   - The label prop externalizes the accessible label string
    //   - The children snippet allows localized time formatting

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label for screen readers */
        label: string;
        /** Timer display content (formatted time string) */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- Timer: a live-announced time element for countdowns or elapsed time -->
<time role="timer" aria-label={label} aria-live="polite" {...restProps}>
    {@render children()}
</time>
