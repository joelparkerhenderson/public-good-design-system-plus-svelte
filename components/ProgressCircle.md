# Progress circle

A progress circle is a UI/UX component that indicates completion status in a
circular format. It uses a div with role="progressbar" and ARIA value attributes
(aria-valuenow, aria-valuemin, aria-valuemax) to communicate progress to screen
readers. Unlike a linear progress bar, a progress circle conveys progress in a
radial layout, which is commonly used for loading indicators, completion
percentages, and dashboard widgets. The component is headless, so consumers
provide their own CSS to create the circular visual representation.
