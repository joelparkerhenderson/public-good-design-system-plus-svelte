<script lang="ts">
    // ToolBarItem component
    //
    // A single button item within a ToolBar. Renders as a native <button> element
    // with type="button" for proper keyboard and screen reader support. The
    // component avoids unintended form submissions and supports the disabled
    // attribute for disabling interaction. Designed to be placed inside a ToolBar
    // container that manages roving focus keyboard navigation.
    //
    // Props:
    //   disabled — boolean, default false. Whether the button is disabled.
    //   children — Snippet, required. Button content.
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <ToolBarItem>Bold</ToolBarItem>
    //
    // Examples:
    //   <!-- Disabled toolbar item -->
    //   <ToolBarItem disabled>Redo</ToolBarItem>
    //
    // Keyboard:
    //   - Enter/Space: activate the button (native behavior)
    //   - Arrow keys: handled by parent ToolBar for roving focus navigation
    //   - Button is skipped in tab order when disabled
    //
    // Accessibility:
    //   - Implicit button role from the <button> element
    //   - disabled attribute communicates disabled state to assistive technology
    //
    // Internationalization:
    //   - All text is provided through the children snippet
    //   - No hardcoded user-facing strings
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Designed to be placed inside a ToolBar container
    //   - type="button" prevents accidental form submission
    //
    // References:
    //   - WAI-ARIA Toolbar Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/toolbar/

    import type { Snippet } from "svelte";

    let {
        disabled = false,
        children,
        ...restProps
    }: {
        /** Whether disabled. */
        disabled?: boolean;
        /** Button content. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- ToolBarItem component: a button element for use as an individual toolbar action -->
<button
    type="button"
    {disabled}
    {...restProps}
>
    {@render children()}
</button>
