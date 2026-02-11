<script lang="ts">
    // Component: HamburgerMenu
    //
    // A headless hamburger menu toggle button. Toggles a navigation
    // panel open/closed with appropriate ARIA attributes.
    //
    // Props:
    //   label    — accessible name (default: "Menu")
    //   open     — bindable boolean for menu state
    //   children — navigation content shown when open
    //
    // Usage:
    //   <HamburgerMenu label="Main menu" bind:open>
    //     <nav><ul>...</ul></nav>
    //   </HamburgerMenu>

    import type { Snippet } from "svelte";

    let {
        label = "Menu",
        open = $bindable(false),
        children,
        ...restProps
    }: {
        label?: string;
        open?: boolean;
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    const menuId = `hamburger-${Math.random().toString(36).slice(2, 9)}`;
</script>

<div {...restProps}>
    <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-controls={menuId}
        onclick={() => open = !open}
    >
        {label}
    </button>
    {#if open}
        <div id={menuId} role="navigation" aria-label={label}>
            {@render children()}
        </div>
    {/if}
</div>
