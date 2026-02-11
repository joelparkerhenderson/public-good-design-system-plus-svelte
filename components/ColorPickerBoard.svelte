<script lang="ts">
    // Component: ColorPickerBoard
    //
    // A headless 2D color picker board. X = saturation, Y = brightness.
    // Keyboard arrow keys navigate, Shift+Arrow for large steps.

    let {
        x = $bindable(0),
        y = $bindable(0),
        label,
        disabled = false,
        ...restProps
    }: {
        x?: number;
        y?: number;
        label: string;
        disabled?: boolean;
        [key: string]: unknown;
    } = $props();

    function onkeydown(event: KeyboardEvent) {
        if (disabled) return;
        const step = event.shiftKey ? 10 : 1;
        switch (event.key) {
            case "ArrowRight": x = Math.min(100, x + step); event.preventDefault(); break;
            case "ArrowLeft": x = Math.max(0, x - step); event.preventDefault(); break;
            case "ArrowUp": y = Math.max(0, y - step); event.preventDefault(); break;
            case "ArrowDown": y = Math.min(100, y + step); event.preventDefault(); break;
            case "Home": x = 0; event.preventDefault(); break;
            case "End": x = 100; event.preventDefault(); break;
        }
    }
</script>

<div
    role="slider"
    tabindex={disabled ? -1 : 0}
    aria-label={label}
    aria-valuenow={x}
    aria-valuemin={0}
    aria-valuemax={100}
    aria-disabled={disabled || undefined}
    data-x={x}
    data-y={y}
    {onkeydown}
    {...restProps}
></div>
