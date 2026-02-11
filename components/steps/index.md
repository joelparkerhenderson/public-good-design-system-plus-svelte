# Steps

A steps component is a UI/UX element that displays a sequence of stages or
actions in a process, workflow, wizard, or multi-step form. Steps help users
understand where they are in a multi-stage process, what they have completed,
and what remains ahead. They are commonly used in checkout flows, registration
processes, onboarding wizards, and multi-part forms.

This component renders as a semantic ordered list (<ol>) with an accessible
label, conveying the sequential nature of the steps to both sighted users and
screen reader users. The consumer provides individual step items as <li>
children, and can add aria-current="step" to indicate the active step.
