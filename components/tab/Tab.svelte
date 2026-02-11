<script lang="ts">
    // Component: Tab
    //
    // A headless tab button component for use within a tabbed interface. Renders
    // a <button> with role="tab" and appropriate ARIA attributes for tab selection
    // and panel association.
    //
    // Usage:
    //   <Tab selected={true} controls="panel-1">Dashboard</Tab>
    //   <Tab selected={false} controls="panel-2">Settings</Tab>
    //   <Tab selected={activeTab === "reports"} controls="reports-panel">Reports</Tab>
    //
    // Props:
    //   - selected: Whether this tab is currently active (default: false)
    //   - controls: The id of the associated tabpanel element (required)
    //   - children: Snippet for tab label content
    //   - ...restProps: Any additional HTML attributes spread onto the button
    //
    // Behavior:
    //   - aria-selected reflects the active/inactive state of the tab
    //   - aria-controls associates the tab with its corresponding tabpanel
    //   - tabindex is set to 0 when selected, -1 when not selected, following
    //     the roving tabindex pattern for tab navigation
    //
    // Accessibility:
    //   - role="tab" identifies this element as a tab in a tabbed interface
    //   - aria-selected communicates the selection state to screen readers
    //   - aria-controls links the tab to its panel for assistive technology
    //   - Roving tabindex ensures only the active tab is in the tab order
    //   - Consumers should wrap tabs in a role="tablist" container
    //
    // Internationalization:
    //   - All visible text is provided through the children snippet
    //   - No hardcoded strings in the component

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

<!-- Tab: a button element representing a tab in a tabbed interface -->
<button
    role="tab"
    aria-selected={selected}
    aria-controls={controls}
    tabindex={selected ? 0 : -1}
    {...restProps}
>
    {@render children()}
</button>
