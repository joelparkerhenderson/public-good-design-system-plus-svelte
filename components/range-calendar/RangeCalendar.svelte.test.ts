import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Subject from "./RangeCalendar.svelte";
function textSnippet(text: string) { return (($anchor: Comment) => { $anchor.before(document.createTextNode(text)); }) as any; }
describe("RangeCalendar", () => {
    test("renders application role", () => { render(Subject, { props: { label: "Calendar", children: textSnippet("grid") } }); expect(screen.getByRole("application")).toBeTruthy(); });
    test("has aria-label", () => { render(Subject, { props: { label: "Date range", children: textSnippet("grid") } }); expect(screen.getByLabelText("Date range")).toBeTruthy(); });
    test("passes through attributes", () => { render(Subject, { props: { label: "R", "data-testid": "rc", children: textSnippet("x") } }); expect(screen.getByTestId("rc")).toBeTruthy(); });
});
