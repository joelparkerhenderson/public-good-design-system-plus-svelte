<script lang="ts">
    // Component: Dial
    //
    // A headless circular dial/knob control. Adjusts a value from min to max
    // using keyboard navigation. Renders as a slider role for accessibility.
    //
    // Keyboard:
    //   ArrowRight/ArrowUp   — increase by step
    //   ArrowLeft/ArrowDown  — decrease by step
    //   Shift+Arrow          — increase/decrease by step * 10
    //   Home                 — set to min
    //   End                  — set to max
    //
    // Props:
    //   value    — bindable numeric value
    //   min      — minimum value (default 0)
    //   max      — maximum value (default 100)
    //   step     — increment per key press (default 1)
    //   label    — accessible name
    //   disabled — whether the dial is disabled
    //
    // Usage:
    //   <Dial label="Volume" bind:value min={0} max={100} />

    let {
        value = $bindable(0),
        min = 0,
        max = 100,
        step = 1,
        label,
        disabled = false,
        ...restProps
    }: {
        /** Current value. Bindable. */
        value?: number;
        /** Minimum value. */
        min?: number;
        /** Maximum value. */
        max?: number;
        /** Step increment per key press. */
        step?: number;
        /** Accessible label for the dial. */
        label: string;
        /** Whether the dial is disabled. */
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    function clamp(v: number): number {
        return Math.min(max, Math.max(min, v));
    }

    function onkeydown(event: KeyboardEvent) {
        if (disabled) return;
        const multiplier = event.shiftKey ? 10 : 1;
        switch (event.key) {
            case "ArrowRight":
            case "ArrowUp":
                value = clamp(value + step * multiplier);
                event.preventDefault();
                break;
            case "ArrowLeft":
            case "ArrowDown":
                value = clamp(value - step * multiplier);
                event.preventDefault();
                break;
            case "Home":
                value = min;
                event.preventDefault();
                break;
            case "End":
                value = max;
                event.preventDefault();
                break;
        }
    }
</script>

<div
    role="slider"
    tabindex={disabled ? -1 : 0}
    aria-label={label}
    aria-valuenow={value}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-disabled={disabled || undefined}
    {onkeydown}
    {...restProps}
></div>
