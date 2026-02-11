import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./AccordionArea.svelte";

function textSnippet(text: string) {
    return (($anchor: Comment) => {
        const node = document.createTextNode(text);
        $anchor.before(node);
    }) as any;
}

describe("AccordionArea", () => {
    test("renders a region", () => {
        render(Subject, { props: { label: "FAQ", children: textSnippet("content") } });
        expect(screen.getByRole("region")).toBeTruthy();
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "FAQ", children: textSnippet("content") } });
        expect(screen.getByLabelText("FAQ")).toBeTruthy();
    });

    test("renders children", () => {
        render(Subject, { props: { label: "FAQ", children: textSnippet("Question") } });
        expect(screen.getByText("Question")).toBeTruthy();
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "F", "data-testid": "aa", children: textSnippet("x") } });
        expect(screen.getByTestId("aa")).toBeTruthy();
    });
});
