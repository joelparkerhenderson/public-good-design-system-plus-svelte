<script lang="ts">
    // Component: CalendarBoard
    //
    // A headless calendar board using a table with ARIA grid role.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for calendar rows and cells
    //
    // Usage:
    //   <CalendarBoard label="January 2025">
    //     <tr><td>1</td><td>2</td>...</tr>
    //   </CalendarBoard>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label (e.g. month and year). */
        label: string;
        /** Calendar table rows. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<table role="grid" aria-label={label} {...restProps}>
    {@render children()}
</table>
