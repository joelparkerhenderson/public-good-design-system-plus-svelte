<script lang="ts">
    // Component: Listbox
    //
    // A headless listbox with ARIA listbox role and keyboard navigation.
    // Up/down arrows move focus between options.
    //
    // Props:
    //   label — accessible name via aria-label
    //   children — snippet for option elements (role="option")
    //
    // Usage:
    //   <Listbox label="Fruits">
    //     <div role="option" tabindex="-1">Apple</div>
    //     <div role="option" tabindex="-1">Banana</div>
    //   </Listbox>

    import type { Snippet } from "svelte";

    let {
        label,
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Option elements. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let listRef: HTMLElement | undefined = $state(undefined);

    function onkeydown(event: KeyboardEvent) {
        if (!listRef) return;
        const options = Array.from(listRef.querySelectorAll<HTMLElement>("[role='option']"));
        const current = document.activeElement as HTMLElement;
        const index = options.indexOf(current);
        switch (event.key) {
            case "ArrowDown": { event.preventDefault(); const next = index < options.length - 1 ? index + 1 : 0; options[next]?.focus(); break; }
            case "ArrowUp": { event.preventDefault(); const prev = index > 0 ? index - 1 : options.length - 1; options[prev]?.focus(); break; }
            case "Home": { event.preventDefault(); options[0]?.focus(); break; }
            case "End": { event.preventDefault(); options[options.length - 1]?.focus(); break; }
        }
    }
</script>

<div role="listbox" aria-label={label} bind:this={listRef} {onkeydown} {...restProps}>
    {@render children()}
</div>
