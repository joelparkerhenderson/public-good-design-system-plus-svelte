# Public Good Design System Svelte Components

Components:

- data-filter
- gannt-chart
- kanban-board
- emoji-character-picker
- icon
- medical-highlight-box

Contact display and input:

- email-address-input
- email-address-view
- phone-number-input
- phone-number-view
- postal-code-input
- postal-code-view

Measurement:

- measurement-instance-input
- measurement-instance-view
- measurement-system-input
- measurement-system-view
- measurement-unit-input
- measurement-unit-view

Ratings:

- five-star-rating-input
- five-star-rating-view
- five-face-rating-input
- five-face-rating-view
- net-promotor-score-rating-input
- net-promotor-score-rating-view

Country-specific data display and input:

- united-kingdom-national-health-service-number-input
- united-kingdom-national-health-service-number-view
- united-states-social-security-number-input
- united-states-social-security-number-view

Status indicators:

- red-amber-green-status-input
- red-amber-green-status-view
- red-orange-yellow-green-blue-status-input
- red-orange-yellow-green-blue-status-view

Input:

- button-input: A push button with no default behavior displaying the value of the value attribute, empty by default.
- checkbox-input: A check box allowing single values to be selected/deselected.
- color-input: A control for specifying a color; opening a color picker when active in supporting browsers.
- date-input: A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.
- datetime-input-local: A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.
- email-input: A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
- file-input: A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.
- hidden-input: A control that is not displayed but whose value is submitted to the server.
- image-input: A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.
- input: A generic input HTML tag <input>.
- month-input: A control for entering a month and year, with no time zone.
- number-input: A control for entering a number. Displays a spinner and adds default validation. Displays a numeric keypad in some devices with dynamic keypads.
- password-input: A single-line text field whose value is obscured. Will alert user if site is not secure.
- pin-input: A personal identification number input, a.k.a. PIN pad, OTP input.
- radio-input: A radio button, allowing a single value to be selected out of multiple choices with the same name value.
- radio-group-input: A radio button group, allowing a single value to be selected out of multiple choices with the same name value.
- range-input: A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.
- reset-input: A button that resets the contents of the form to default values. Not recommended.
- search-input: A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.
- select-input: HTML tag <select>.
- option-input: HTML tag <option>.
- slider-input
- submit-input: A button that submits the form.
- tag-input: A single-line short test field for entering a tag keyword. See also tag, tag-group.
- tel-input: A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.
- text-input: The default value. A single-line text field. Line-breaks are automatically removed from the input value.
- textarea-input
- textfield-input
- time-input: A control for entering a time value with no time zone.
- url-input: A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.
- week-input: A control for entering a date consisting of a week-year number and a week number with no time zone.

Tag:

- tag
- tag-group
- tag-input

Theme:

- theme-view
- theme-picker

Link:

- action-link
- back-link
- skip-link

Layout:

- accordion
- carousel
- collapsible
- drawer
- header
- footer
- resizable
- tab
- tab-group

Data:

- data-filter
- data-table

Date/Time:

- calendar
- calendar-input
- calendar-range-picker
- date-input
- date-field
- date-picker
- date-range

Progress:

- progress-bar
- progress-circle
- progress-spinner

Medical:

- medical-patient-banner-danger-box

TODO:

- alert
- alert-dialog
- angle-slider
- aspect-ratio
- avatar-circle
- badge
- breadcrumb
- card
- care-card
- chart
- character
- character-counter
- clipboard
- color-picker
- combobox
- command
- contents-list
- context-menu
- details
- dialog

Lists:

- do-list
- dont-list

- dropdown-menu
- editable
- error-message
- error-summary
- expander
- field
- fieldset
- file-upload
- floating-panel
- form
- hint-text
- hover-card
- image
- inset-text
- label
- listbox
- menu
- menubar
- meter
- navigation-menu
- pagination
- panel
- popover
- qr-code
- range-calendar
- rating-group
- review-date
- scroll-area
- segment-group
- separator
- sheet
- sidebar
- signature-pad
- skeleton
- splitter
- sonner
- steps
- summary-list
- switch
- table
- task-list
- timer
- toast
- toggle
- toggle-group
- tooltip
- tour
- tree-view
- warning-callout
- information-callout

Naming:

- PascalCase: PublicGoodDesignSystemPlusSvelte
- kebab-case: public-good-design-system-plus-svelte
- snake_case: public_good_design_system_plus_svelte

## Setup from scratch

Preflight:

- [update-node](help/update-node/)

Run:

```sh
npm init
```

Choose:

```sh
package name: (public-good-design-system-plus-svelte)
version: (1.0.0) 0.1.0
description: public-good-design-system-plus-svelte
entry point: (index.js)
test command: vitest run
git repository: (https://github.com/joelparkerhenderson/public-good-design-system-plus-svelte.git)
keywords: public good design system plus svelte
author: joel@joelparkerhenderson.com
license: (ISC)
```

## Testing

We prefer using Vitest for unit testing and @testing-library/svelte for component testing.

```sh
npm install --save-dev @sveltejs/vite-plugin-svelte
npm install --save-dev @sveltejs/adapter-auto
npm install --save-dev svelte
npm install --save-dev @vitest/ui
npm install --save-dev vitest
npm install --save-dev @testing-library/svelte
npm install --save-dev @testing-library/user-event
npm install --save-dev jsdom
```

Create files:

- [.claude/settings.local.json](.claude/settings.local.json)
- [.prettierrc](.prettierrc)
- [svelte.config.js](svelte.config.js)
- [vite.config.js](vite.config.js)
- [MyComponent.svelte](help/testing-library/svelte-testing-library/examples/MyComponent.svelte)
- [MyComponent.svelte.test.ts](help/testing-library/svelte-testing-library/examples/MyComponent.svelte.test.ts)

Add scripts to file `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:ui": "vitest --ui",
    "test:watch": "vitest"
  }
}
```

## Tracking

- Package: public-good-design-system-plus-svelte
- Version: 0.1.0
- Created: 2021-03-30T15:47:49Z
- Updated: 2026-01-14T21:43:14Z
- License: MIT or Apache-2.0 or GPL-2.0 or GPL-3.0 or contact us for more
- Contact: Joel Parker Henderson (joel@joelparkerhenderson.com)
