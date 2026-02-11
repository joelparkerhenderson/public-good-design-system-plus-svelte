import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./MedicalHighlightBox.svelte";

// Helper to create a Svelte 5 snippet for children content.
function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("MedicalHighlightBox", () => {
    test("renders with note role", () => {
        render(Subject, { props: { label: "Warning", children: textSnippet("Allergy") } });
        expect(screen.getByRole("note")).toBeTruthy();
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Allergy warning", children: textSnippet("Content") } });
        expect(screen.getByRole("note").getAttribute("aria-label")).toBe("Allergy warning");
    });

    test("renders children", () => {
        render(Subject, { props: { label: "Note", children: textSnippet("Allergic to penicillin") } });
        expect(screen.getByRole("note").textContent).toContain("Allergic to penicillin");
    });

    test("renders as aside element", () => {
        render(Subject, { props: { label: "Note", children: textSnippet("Content") } });
        expect(screen.getByRole("note").tagName).toBe("ASIDE");
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "N", "data-testid": "mhb", children: textSnippet("C") } });
        expect(screen.getByTestId("mhb")).toBeTruthy();
    });
});
