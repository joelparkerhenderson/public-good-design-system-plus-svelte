# RedOrangeYellowGreenBlueIndicatorStatus

The Red Orange Yellow Green Blue (ROYGB) indicator status component is a visual
status display that uses a five-level color scheme to represent different levels
of status, performance, or urgency. Commonly used in dashboards, reports, and
project tracking tools, it provides an at-a-glance understanding of how
something is performing: red indicates a critical problem, orange indicates a
hazard, yellow indicates caution, green indicates normal status, and blue
indicates pausing. ROYGB status indicators enhance usability by delivering
quick, intuitive feedback through universally understood colors, enabling users
to assess situations rapidly and prioritize actions effectively.

This is a read-only display component that renders the status value as text
inside a span element. For an interactive version where users can select a
ROYGB status, see RoygbStatusInput.

## Implementation Notes

- Renders as `<span aria-label={label}>` displaying a ROYGB status value as text
- Five-level status: red, orange, yellow, green, blue
- Read-only display component, not interactive
- Value defaults to empty string when not provided

## Props

- `label`: string (required) -- accessible label for screen readers
- `value`: string (default: "") -- the ROYGB status to display
- `...restProps`: Any additional HTML attributes spread onto the span

## Status Values

- `red`: Critical problem
- `orange`: Hazard or significant risk
- `yellow`: Caution or minor issues
- `green`: Normal, on track
- `blue`: Paused or informational

## Usage

Display a status indicator:

```svelte
<script lang="ts">
  import RedOrangeYellowGreenBlueIndicatorStatus from './RedOrangeYellowGreenBlueIndicatorStatus.svelte';
</script>

<RedOrangeYellowGreenBlueIndicatorStatus label="Risk level" value="yellow" />
```

Bound to a reactive variable:

```svelte
<script lang="ts">
  import RedOrangeYellowGreenBlueIndicatorStatus from './RedOrangeYellowGreenBlueIndicatorStatus.svelte';

  let level = $state("green");
</script>

<RedOrangeYellowGreenBlueIndicatorStatus label="Alert level" value={level} />
```

With additional HTML attributes:

```svelte
<RedOrangeYellowGreenBlueIndicatorStatus
  label="Server health"
  value="red"
  data-server="prod-1"
/>
```

## Keyboard Interactions

- None -- this is an informational display, not interactive

## ARIA

- `aria-label` on the span from the label prop

## References

- Traffic Light Rating System: https://en.wikipedia.org/wiki/Traffic_light_rating_system
