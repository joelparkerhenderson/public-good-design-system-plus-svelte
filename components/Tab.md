# Tab

A tab is a UI/UX component that allows users to navigate between different
sections of content within a single interface by clicking or tapping on labeled
tabs, typically displayed horizontally at the top of a content area. Each tab
represents a distinct section, and only the content related to the active tab is
displayed at a time, keeping the interface clean and organized. Tabs help group
similar information in a compact and accessible way, allowing users to switch
between views without reloading or navigating away from the page. They enhance
usability by providing an intuitive, quick way to explore different content or
options within the same context.

This component renders an individual tab button with proper ARIA attributes
including role="tab", aria-selected for the active state, and aria-controls to
associate the tab with its corresponding tabpanel. It follows the roving
tabindex pattern where only the selected tab participates in the tab order.

## Implementation Notes

- Renders as `<button role="tab">` for proper tab semantics
- `aria-selected` reflects active/inactive state
- `aria-controls` links to the associated tabpanel id
- Roving tabindex: selected tab has tabindex=0, others have tabindex=-1
- Should be placed within a `role="tablist"` container

## Props

- `selected`: boolean (default: false) -- whether this tab is active
- `controls`: string (required) -- id of the associated tabpanel
- `children`: Snippet -- tab label content
- `...restProps`: Any additional HTML attributes

## Usage

Basic tab within a tablist:

```svelte
<script lang="ts">
  import Tab from './Tab.svelte';

  let activeTab = $state("dashboard");
</script>

<div role="tablist" aria-label="Main navigation">
  <Tab
    selected={activeTab === "dashboard"}
    controls="panel-dashboard"
    onclick={() => activeTab = "dashboard"}
  >
    Dashboard
  </Tab>
  <Tab
    selected={activeTab === "settings"}
    controls="panel-settings"
    onclick={() => activeTab = "settings"}
  >
    Settings
  </Tab>
  <Tab
    selected={activeTab === "reports"}
    controls="panel-reports"
    onclick={() => activeTab = "reports"}
  >
    Reports
  </Tab>
</div>

<div id="panel-dashboard" role="tabpanel" hidden={activeTab !== "dashboard"}>
  Dashboard content
</div>
<div id="panel-settings" role="tabpanel" hidden={activeTab !== "settings"}>
  Settings content
</div>
<div id="panel-reports" role="tabpanel" hidden={activeTab !== "reports"}>
  Reports content
</div>
```

## Keyboard Interactions

- Tab: moves focus to the selected tab in the tablist
- ArrowLeft/ArrowRight: moves between tabs (handled by parent tablist)
- Enter/Space: activates the tab (native button behavior)

## ARIA

- `role="tab"` identifies this as a tab
- `aria-selected` communicates selection state
- `aria-controls` links to the corresponding tabpanel
- Roving `tabindex` (0 for selected, -1 for unselected)

## References

- WAI-ARIA Tabs Pattern: https://www.w3.org/WAI/ARIA/apd/patterns/tabs/
- WAI-ARIA Tab Role: https://www.w3.org/TR/wai-aria-1.2/#tab
