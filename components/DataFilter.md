# Data Filter

A data filter component allows users to narrow down a dataset by applying
criteria. It wraps filter controls in a form with appropriate ARIA attributes
for accessibility. Consumers provide their own filter inputs as children.
# DataFilter

- `<form role="search">` with `aria-label`
- Prevents default form submission
- Callbacks: `onsubmit`, `onreset`
- Children are consumer-provided filter controls
