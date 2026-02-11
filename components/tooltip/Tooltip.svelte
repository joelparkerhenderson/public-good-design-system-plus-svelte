<script lang="ts">
    // Component: Tooltip
    //
    // A headless tooltip with role="tooltip" and conditional visibility.
    // Displays contextual information when visible.
    //
    // Props:
    //   label    — the tooltip text
    //   visible  — bindable boolean controlling visibility
    //   id       — optional id for aria-describedby linking
    //
    // Usage:
    //   <button aria-describedby="tip">Hover me</button>
    //   <Tooltip id="tip" label="Additional info" visible />

    let {
        label,
        visible = $bindable(false),
        id = undefined,
        ...restProps
    }: {
        /** Tooltip text content. */
        label: string;
        /** Whether the tooltip is visible. Bindable. */
        visible?: boolean;
        /** Optional id for aria-describedby linking. */
        id?: string;
        [key: string]: unknown;
    } = $props();
</script>

{#if visible}
    <div role="tooltip" {id} {...restProps}>{label}</div>
{/if}
