<script lang="ts">
    // Tab component
    //
    // A headless tab button for use within a tabbed interface. Renders a <button>
    // with role="tab" and appropriate ARIA attributes for tab selection and panel
    // association. It follows the roving tabindex pattern where only the selected
    // tab participates in the tab order. Commonly used inside a TabGroup or a
    // container with role="tablist".
    //
    // Props:
    //   selected — boolean, default false. Whether this tab is currently active.
    //   controls — string, required. The id of the associated tabpanel element.
    //   children — Snippet, required. Tab label content.
    //   ...restProps — additional HTML attributes spread onto the <button>.
    //
    // Syntax:
    //   <Tab selected={true} controls="panel-1">Label</Tab>
    //
    // Examples:
    //   <!-- Tab within a tablist container -->
    //   <div role="tablist" aria-label="Settings">
    //     <Tab selected={activeTab === "general"} controls="panel-general"
    //       onclick={() => activeTab = "general"}>General</Tab>
    //     <Tab selected={activeTab === "advanced"} controls="panel-advanced"
    //       onclick={() => activeTab = "advanced"}>Advanced</Tab>
    //   </div>
    //
    // Keyboard:
    //   - Tab: moves focus to the selected tab in the tablist
    //   - ArrowLeft/ArrowRight: moves between tabs (handled by parent tablist)
    //   - Enter/Space: activates the tab (native button behavior)
    //
    // Accessibility:
    //   - role="tab" identifies this element as a tab in a tabbed interface
    //   - aria-selected communicates the selection state to screen readers
    //   - aria-controls links the tab to its panel for assistive technology
    //   - Roving tabindex: selected tab has tabindex=0, others have tabindex=-1
    //   - Consumers should wrap tabs in a role="tablist" container
    //
    // Internationalization:
    //   - All visible text is provided through the children snippet
    //   - No hardcoded strings in the component
    //
    // Claude rules:
    //   - Headless: no CSS, no styles -- consumer provides all styling
    //   - Consumers manage selection state and panel visibility
    //
    // References:
    //   - WAI-ARIA Tabs Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/tabs/
    //   - WAI-ARIA Tab Role: https://www.w3.org/TR/wai-aria-1.2/#tab

    import type { Snippet } from "svelte";

    let {
        selected = false,
        controls,
        children,
        ...restProps
    }: {
        /** Whether this tab is currently active */
        selected?: boolean;
        /** The id of the associated tabpanel element */
        controls: string;
        /** Tab label content */
        children: Snippet;
        /** Additional HTML attributes */
        [key: string]: unknown;
    } = $props();
</script>

<!-- Tab component: a button element representing a tab in a tabbed interface -->
<button
    role="tab"
    aria-selected={selected}
    aria-controls={controls}
    tabindex={selected ? 0 : -1}
    {...restProps}
>
    {@render children()}
</button>
