# Pin Input

A PIN input is a specialized form component that presents a series of
single-character input fields for entering Personal Identification Numbers
(PINs), verification codes, one-time passwords (OTPs), or similar short numeric
codes. Each digit occupies its own input field, creating a segmented entry
experience that clearly communicates the expected code length to the user.

The component automatically advances focus to the next field when a digit is
entered, supports Backspace to move back to the previous field, and allows Arrow
key navigation between fields. The combined value of all digit fields is
available as a single bindable string. This pattern is commonly used in
two-factor authentication flows, SMS verification, and secure PIN entry
interfaces. Each individual input field has an accessible label indicating its
position (e.g., "Digit 1 of 4") to support screen reader users.
