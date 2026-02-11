<script lang="ts">
    // Component: ContextMenuItem
    //
    // A headless context menu item component for use within a context menu or
    // right-click menu. Renders a <div> with role="menuitem" and tabindex="-1"
    // for proper menu keyboard navigation.
    //
    // Usage:
    //   <ContextMenuItem>Cut</ContextMenuItem>
    //   <ContextMenuItem>Copy</ContextMenuItem>
    //   <ContextMenuItem>Paste</ContextMenuItem>
    //   <ContextMenuItem disabled>Delete</ContextMenuItem>
    //
    // Props:
    //   - children: Snippet for menu item content
    //   - ...restProps: Any additional HTML attributes spread onto the div
    //
    // Behavior:
    //   - tabindex="-1" removes the item from the normal tab order; focus is
    //     managed programmatically by the parent menu component using Arrow keys
    //   - The parent context menu is responsible for showing/hiding the menu and
    //     managing focus between items with ArrowUp/ArrowDown keys
    //
    // Accessibility:
    //   - role="menuitem" identifies this element as an item within a menu
    //   - tabindex="-1" supports roving focus management by the parent menu
    //   - Consumers can add aria-disabled="true" for disabled items
    //   - Consumers can add aria-keyshortcuts for keyboard shortcut hints
    //   - Should be placed within a role="menu" container
    //
    // Internationalization:
    //   - All visible content is provided through the children snippet
    //   - No hardcoded strings in the component

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Menu item content (text, icon, shortcut hint, etc.) */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- ContextMenuItem: a menu item for use in a context (right-click) menu -->
<div role="menuitem" tabindex="-1" {...restProps}>
    {@render children()}
</div>
