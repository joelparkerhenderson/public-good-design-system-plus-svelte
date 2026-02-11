<script lang="ts">
    // Component: ColorPickerSwatch — a button representing a color choice.

    let {
        color, label, selected = false, disabled = false, onclick = undefined,
        ...restProps
    }: {
        color: string; label: string; selected?: boolean; disabled?: boolean;
        onclick?: (event: MouseEvent) => void; [key: string]: unknown;
    } = $props();
</script>

<button type="button" aria-label={label} aria-pressed={selected} {disabled}
    style:background-color={color} data-color={color} {onclick} {...restProps}
></button>
