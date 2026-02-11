<script lang="ts">
    // Component: TimePicker — a headless time input.
    let { label, value = $bindable(""), required = false, disabled = false, ...restProps }: { label: string; value?: string; required?: boolean; disabled?: boolean; [key: string]: unknown; } = $props();
</script>
<input type="time" aria-label={label} bind:value {required} {disabled} {...restProps} />
