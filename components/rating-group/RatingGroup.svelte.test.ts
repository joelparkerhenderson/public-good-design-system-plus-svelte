import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";
import Subject from "./RatingGroup.svelte";
function textSnippet(text: string) { return (($anchor: Comment) => { $anchor.before(document.createTextNode(text)); }) as any; }
describe("RatingGroup", () => {
    test("renders a radiogroup", () => { render(Subject, { props: { label: "Rating", children: textSnippet("stars") } }); expect(screen.getByRole("radiogroup")).toBeTruthy(); });
    test("has aria-label", () => { render(Subject, { props: { label: "Rate this", children: textSnippet("stars") } }); expect(screen.getByLabelText("Rate this")).toBeTruthy(); });
    test("passes through attributes", () => { render(Subject, { props: { label: "R", "data-testid": "rg", children: textSnippet("x") } }); expect(screen.getByTestId("rg")).toBeTruthy(); });
});
