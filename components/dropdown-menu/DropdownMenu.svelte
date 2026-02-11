<script lang="ts">
    // Component: DropdownMenu
    //
    // A headless dropdown menu triggered by a button. Combines a toggle
    // button with a menu that opens/closes. Uses role="menu" with
    // keyboard navigation.
    //
    // Props:
    //   label    — accessible name for the menu button
    //   open     — bindable boolean controlling menu visibility
    //   children — Snippet with menu items (role="menuitem")
    //
    // Keyboard:
    //   Enter/Space on button — toggle menu
    //   ArrowDown/ArrowUp     — navigate menu items
    //   Home/End              — first/last item
    //   Escape                — close menu
    //
    // Usage:
    //   <DropdownMenu label="Options" bind:open>
    //     <li role="menuitem" tabindex="-1">Edit</li>
    //     <li role="menuitem" tabindex="-1">Delete</li>
    //   </DropdownMenu>

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible name for the menu button. */
        label: string;
        /** Whether the menu is open. Bindable. */
        open?: boolean;
        /** Menu items. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    let menuRef: HTMLElement | undefined = $state(undefined);

    // Focus the first menuitem when the menu opens.
    $effect(() => {
        if (open && menuRef) {
            const first = menuRef.querySelector<HTMLElement>("[role='menuitem']");
            first?.focus();
        }
    });

    function toggleMenu() {
        open = !open;
    }

    function onMenuKeydown(event: KeyboardEvent) {
        if (!menuRef) return;
        const items = Array.from(menuRef.querySelectorAll<HTMLElement>("[role='menuitem']"));
        const current = document.activeElement as HTMLElement;
        const index = items.indexOf(current);

        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                const next = index < items.length - 1 ? index + 1 : 0;
                items[next]?.focus();
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                const prev = index > 0 ? index - 1 : items.length - 1;
                items[prev]?.focus();
                break;
            }
            case "Home": {
                event.preventDefault();
                items[0]?.focus();
                break;
            }
            case "End": {
                event.preventDefault();
                items[items.length - 1]?.focus();
                break;
            }
            case "Escape": {
                event.preventDefault();
                open = false;
                break;
            }
        }
    }
</script>

<div {...restProps}>
    <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={label}
        onclick={toggleMenu}
    >
        {label}
    </button>
    {#if open}
        <div
            role="menu"
            aria-label={label}
            bind:this={menuRef}
            onkeydown={onMenuKeydown}
        >
            {@render children()}
        </div>
    {/if}
</div>
