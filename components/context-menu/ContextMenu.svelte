<script lang="ts">
    // Component: ContextMenu
    //
    // A context menu that displays a list of actions. Triggered externally
    // (e.g. right-click). Uses role="menu" with proper ARIA attributes.
    // Keyboard: ArrowDown/ArrowUp navigate items, Escape closes, Home/End
    // jump to first/last item. The menu manages focus on open/close.
    //
    // Props:
    //   label    — accessible name for the menu (aria-label)
    //   open     — bindable boolean controlling visibility
    //   children — Snippet rendered inside the menu (menu items)
    //
    // Usage:
    //   <ContextMenu label="Actions" bind:open>
    //     <li role="menuitem" tabindex="-1">Cut</li>
    //     <li role="menuitem" tabindex="-1">Copy</li>
    //   </ContextMenu>

    import type { Snippet } from "svelte";

    let {
        label,
        open = $bindable(false),
        children,
        ...restProps
    }: {
        /** Accessible name for the context menu. */
        label: string;
        /** Whether the menu is visible. Bindable for two-way control. */
        open?: boolean;
        /** Menu item content rendered inside the menu list. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();

    // Reference to the menu element for focus management.
    let menuRef: HTMLElement | undefined = $state(undefined);

    // When the menu opens, focus the first menuitem.
    $effect(() => {
        if (open && menuRef) {
            const firstItem = menuRef.querySelector<HTMLElement>("[role='menuitem']");
            firstItem?.focus();
        }
    });

    // Keyboard navigation within the menu.
    function onkeydown(event: KeyboardEvent) {
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

{#if open}
    <div
        role="menu"
        aria-label={label}
        bind:this={menuRef}
        {onkeydown}
        {...restProps}
    >
        {@render children()}
    </div>
{/if}
