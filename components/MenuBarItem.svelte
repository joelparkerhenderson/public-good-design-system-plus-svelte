<script lang="ts">
    // MenuBarItem component
    //
    // A single interactive item within a menu bar, using the ARIA menuitem role
    // for keyboard navigation and screen reader support. It renders a <div> with
    // role="menuitem" and tabindex="-1", designed to be placed inside a MenuBar
    // container with role="menubar". Focus management is delegated to the parent
    // MenuBar which uses roving tabindex with arrow keys.
    //
    // Props:
    //   children — Snippet, required. Content of the menu bar item.
    //   ...restProps — additional HTML attributes spread onto the <div>.
    //
    // Syntax:
    //   <MenuBarItem>File</MenuBarItem>
    //
    // Examples:
    //   <!-- Menu bar items within a MenuBar -->
    //   <MenuBar label="Main menu">
    //     <MenuBarItem>File</MenuBarItem>
    //     <MenuBarItem>Edit</MenuBarItem>
    //     <MenuBarItem>View</MenuBarItem>
    //   </MenuBar>
    //
    // Keyboard:
    //   - ArrowLeft/ArrowRight: focus movement managed by parent MenuBar
    //   - Enter/Space: activate the menu item (consumer-provided handler)
    //   - tabindex="-1" enables programmatic focus from parent keyboard navigation
    //
    // Accessibility:
    //   - role="menuitem" identifies this as an item within a menubar
    //   - tabindex="-1" removes from tab order; focus managed by parent MenuBar
    //
    // Internationalization:
    //   - All visible content is provided through the children snippet
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles — consumer provides all styling
    //   - Must be placed inside a MenuBar container with role="menubar"
    //
    // References:
    //   - WAI-ARIA Menu Bar Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/menubar/

    import type { Snippet } from "svelte";

    let {
        children,
        ...restProps
    }: {
        /** Content of the menu bar item. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- MenuBarItem component: a menuitem role element for use within a menubar -->
<div
    role="menuitem"
    tabindex="-1"
    {...restProps}
>
    {@render children()}
</div>
