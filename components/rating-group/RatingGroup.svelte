<script lang="ts">
    // Component: RatingGroup — a fieldset with radiogroup role for rating selection.
    import type { Snippet } from "svelte";
    let { label, children, ...restProps }: { label: string; children: Snippet; [key: string]: unknown; } = $props();
</script>
<fieldset role="radiogroup" aria-label={label} {...restProps}>{@render children()}</fieldset>
