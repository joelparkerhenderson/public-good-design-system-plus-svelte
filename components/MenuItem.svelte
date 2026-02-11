<script lang="ts">
    // Component: MenuItem
    //
    // A headless menu item component for use within a menu, dropdown menu,
    // or navigation menu. Renders a <div> with role="menuitem" and tabindex="-1"
    // for proper menu keyboard navigation.
    //
    // Usage:
    //   <MenuItem>New File</MenuItem>
    //   <MenuItem>Open File</MenuItem>
    //   <MenuItem>Save</MenuItem>
    //   <MenuItem>Exit</MenuItem>
    //
    // Props:
    //   - children: Snippet for menu item content
    //   - ...restProps: Any additional HTML attributes spread onto the div
    //
    // Behavior:
    //   - tabindex="-1" removes the item from the normal tab order; focus is
    //     managed programmatically by the parent menu component using Arrow keys
    //   - The parent menu is responsible for managing focus between items with
    //     ArrowUp/ArrowDown keys and handling item activation
    //
    // Accessibility:
    //   - role="menuitem" identifies this element as an item within a menu
    //   - tabindex="-1" supports roving focus management by the parent menu
    //   - Consumers can add aria-disabled="true" for disabled items
    //   - Consumers can add aria-haspopup for items that open submenus
    //   - Consumers can add aria-expanded for submenu trigger items
    //   - Should be placed within a role="menu" or role="menubar" container
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

<!-- MenuItem: a menu item for use in a menu or dropdown -->
<div role="menuitem" tabindex="-1" {...restProps}>
    {@render children()}
</div>
