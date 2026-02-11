<script lang="ts">
    // Component: TabGroup
    //
    // A headless tab list container with ARIA tablist role and keyboard navigation.
    // Left/right arrow keys move between tabs.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for tab elements
    //
    // Usage:
    //   <TabGroup label="Settings">
    //     <button role="tab" aria-selected="true">General</button>
    //     <button role="tab" aria-selected="false">Advanced</button>
    //   </TabGroup>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Tab elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let tablistRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!tablistRef) return;
        const tabs = Array.from(tablistRef.querySelectorAll<HTMLElement>("[role='tab']"));
        const current = document.activeElement as HTMLElement;
        const index = tabs.indexOf(current);
        switch (event.key) {
            case "ArrowRight": { event.preventDefault(); const next = index < tabs.length - 1 ? index + 1 : 0; tabs[next]?.focus(); break; }
            case "ArrowLeft": { event.preventDefault(); const prev = index > 0 ? index - 1 : tabs.length - 1; tabs[prev]?.focus(); break; }
            case "Home": { event.preventDefault(); tabs[0]?.focus(); break; }
            case "End": { event.preventDefault(); tabs[tabs.length - 1]?.focus(); break; }
        }
    }
</script>

<div role="tablist" aria-label={label} bind:this={tablistRef} {onkeydown} {...restProps}>
    {@render children()}
</div>
