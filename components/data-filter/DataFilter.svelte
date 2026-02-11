<script lang="ts">
    // Component: DataFilter
    //
    // A headless data filter container. Wraps filter controls in a <form>
    // with role="search" and accessible labelling.
    //
    // Props:
    //   label    — accessible name for the filter region (aria-label)
    //   onsubmit — callback when filter form is submitted
    //   onreset  — callback when filter form is reset
    //   children — Snippet with filter input controls
    //
    // Usage:
    //   <DataFilter label="Filter results" onsubmit={applyFilters}>
    //     <label>Category <select>...</select></label>
    //     <button type="submit">Apply</button>
    //   </DataFilter>

    import type { Snippet } from "svelte";

    let {
        label,
        onsubmit = undefined,
        onreset = undefined,
        children,
        ...restProps
    }: {
        /** Accessible name for the filter region. */
        label: string;
        /** Called when the filter form is submitted. */
        onsubmit?: (event: SubmitEvent) => void;
        /** Called when the filter form is reset. */
        onreset?: (event: Event) => void;
        /** Filter controls rendered inside the form. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    function handleSubmit(event: SubmitEvent) {
        event.preventDefault();
        onsubmit?.(event);
    }
</script>

<form
    role="search"
    aria-label={label}
    onsubmit={handleSubmit}
    {onreset}
    {...restProps}
>
    {@render children()}
</form>
