<script lang="ts">
    // TaskBarItem component
    //
    // A single button item within a TaskBar. Renders as a native <button> element
    // with type="button" for proper keyboard and screen reader support. The
    // component avoids unintended form submissions and supports the disabled
    // attribute for disabling interaction. Content is provided through the
    // children snippet.
    //
    // Props:
    //   disabled — boolean, default false. Whether the button is disabled.
    //   children — Snippet, required. Button content.
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <TaskBarItem>New Task</TaskBarItem>
    //
    // Examples:
    //   <!-- Disabled task bar item -->
    //   <TaskBarItem disabled>Delete</TaskBarItem>
    //
    // Keyboard:
    //   - Tab: focus the button
    //   - Enter/Space: activate the button (native behavior)
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
    //   - Designed to be placed inside a TaskBar container
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

<!-- TaskBarItem component: a button element for a single action within a task bar -->
<button
    type="button"
    {disabled}
    {...restProps}
>
    {@render children()}
</button>
