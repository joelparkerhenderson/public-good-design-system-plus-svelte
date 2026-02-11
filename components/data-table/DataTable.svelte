<script lang="ts">
    // Component: DataTable
    //
    // A headless data table wrapper. Provides semantic <table> with optional
    // caption. Consumers provide <thead>, <tbody>, <tr>, <th>, <td> as children.
    //
    // Props:
    //   caption  — optional visible caption describing the table
    //   label    — optional aria-label (used when caption is not visible)
    //   children — Snippet containing thead/tbody rows
    //
    // Usage:
    //   <DataTable caption="User accounts">
    //     <thead><tr><th scope="col">Name</th></tr></thead>
    //     <tbody><tr><td>Alice</td></tr></tbody>
    //   </DataTable>

    import type { Snippet } from "svelte";

    let {
        caption = undefined,
        label = undefined,
        children,
        ...restProps
    }: {
        /** Visible caption for the table. */
        caption?: string;
        /** Accessible label when caption is not used. */
        label?: string;
        /** Table content (thead, tbody, etc.). */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<table aria-label={caption ? undefined : label} {...restProps}>
    {#if caption}
        <caption>{caption}</caption>
    {/if}
    {@render children()}
</table>
