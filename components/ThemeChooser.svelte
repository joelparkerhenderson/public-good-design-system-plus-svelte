<script lang="ts">
    // ThemeChooser component
    //
    // A headless theme selection control that renders a native <select> dropdown
    // for choosing between visual themes or color schemes. Commonly used for
    // light, dark, high-contrast, or system-default theme options. The consumer
    // provides <option> elements as children and is responsible for applying the
    // selected theme value to the page.
    //
    // Props:
    //   label — string, required. Accessible name via aria-label.
    //   value — string, default "". Bindable selected theme; supports bind:value.
    //   children — Snippet, required. <option> elements representing available themes.
    //   ...restProps — additional HTML attributes spread onto the <select>.
    //
    // Syntax:
    //   <ThemeChooser label="Theme" bind:value>...</ThemeChooser>
    //
    // Examples:
    //   <!-- Theme chooser with multiple schemes -->
    //   <ThemeChooser label="Color scheme" bind:value={theme}>
    //     <option value="light">Light</option>
    //     <option value="dark">Dark</option>
    //     <option value="high-contrast">High Contrast</option>
    //     <option value="system">System Default</option>
    //   </ThemeChooser>
    //
    // Keyboard:
    //   - Tab: moves focus to the select element (native behavior)
    //   - Space/Enter: opens the dropdown (native behavior)
    //   - ArrowUp/ArrowDown: navigates through options (native behavior)
    //   - Escape: closes the dropdown (native behavior)
    //
    // Accessibility:
    //   - aria-label={label} provides an accessible name since no visible <label> is included
    //
    // Internationalization:
    //   - The label prop accepts any translated string
    //   - Option text is consumer-provided and can be localized
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Consumer applies the selected theme value to the page
    //   - Uses $bindable() for two-way data binding on value
    //
    // References:
    //   - MDN select element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
    //   - WCAG 1.4.12 Text Spacing: https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html

    import type { Snippet } from "svelte";

    let {
        label,
        value = $bindable(""),
        children,
        ...restProps
    }: {
        /** Accessible label. */
        label: string;
        /** Selected theme. Bindable. */
        value?: string;
        /** Theme options. */
        children: Snippet;
        [key: string]: unknown;
    } = $props();
</script>

<!-- ThemeChooser component: a select dropdown for choosing a visual theme -->
<select
    aria-label={label}
    bind:value
    {...restProps}
>
    {@render children()}
</select>
