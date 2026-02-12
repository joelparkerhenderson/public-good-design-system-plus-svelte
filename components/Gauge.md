# Gauge

A gauge is a headless component that visually represents a value within a defined range using the native HTML `<meter>` element. It is commonly used in dashboards and monitoring tools to display metrics like CPU usage, disk space, battery level, temperature, or system performance at a glance.

The component supports low, high, and optimum thresholds, allowing the browser to apply semantic meaning to the value's position within the range. This helps convey whether a measurement is in an acceptable, cautionary, or critical zone. An `aria-label` provides an accessible name for screen readers.

## Implementation Notes

- Renders a single `<meter>` element with the current value as text content (fallback for browsers that do not support `<meter>`)
- Uses the native `<meter>` element which provides semantic meaning for scalar measurements
- The `low`, `high`, and `optimum` attributes enable the browser to indicate whether the current value is in a preferred, acceptable, or suboptimal range
- Uses `aria-label` for accessible naming
- Spreads `restProps` onto the meter element for consumer extensibility

## Props

- `value`: number (required) -- current measurement value
- `min`: number (default: 0) -- minimum value of the range
- `max`: number (default: 100) -- maximum value of the range
- `low`: number (default: undefined) -- upper boundary of the low range
- `high`: number (default: undefined) -- lower boundary of the high range
- `optimum`: number (default: undefined) -- optimal value within the range
- `label`: string (required) -- accessible name applied via `aria-label`
- `...restProps`: unknown -- additional attributes spread onto the meter element

## Usage

```svelte
<Gauge label="CPU usage" value={75} />
```

```svelte
<Gauge label="Disk space" value={40} min={0} max={100} low={25} high={75} optimum={50} />
```

```svelte
<Gauge label="Battery level" value={15} low={20} high={80} optimum={100} />
```

## Keyboard Interactions

None -- this component is a passive display element that does not accept user input.

## ARIA

- `aria-label={label}` -- provides an accessible name describing what the gauge measures

## References

- MDN meter element: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
- WAI-ARIA meter role: https://www.w3.org/WAI/ARIA/apd/patterns/meter/
