import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./RatingGroupItem.svelte";

function textSnippet(text: string) {
    return (($anchor: Comment) => {
        const node = document.createTextNode(text);
        $anchor.before(node);
    }) as any;
}

describe("RatingGroupItem", () => {
    test("renders a radio button", () => {
        render(Subject, { props: { children: textSnippet("1 star") } });
        expect(screen.getByRole("radio")).toBeTruthy();
    });

    test("has aria-checked false by default", () => {
        render(Subject, { props: { children: textSnippet("1 star") } });
        expect(screen.getByRole("radio").getAttribute("aria-checked")).toBe("false");
    });

    test("has aria-checked true when checked", () => {
        render(Subject, { props: { checked: true, children: textSnippet("1 star") } });
        expect(screen.getByRole("radio").getAttribute("aria-checked")).toBe("true");
    });

    test("has tabindex -1 when not checked", () => {
        render(Subject, { props: { children: textSnippet("1 star") } });
        expect(screen.getByRole("radio").getAttribute("tabindex")).toBe("-1");
    });

    test("has tabindex 0 when checked", () => {
        render(Subject, { props: { checked: true, children: textSnippet("1 star") } });
        expect(screen.getByRole("radio").getAttribute("tabindex")).toBe("0");
    });

    test("has data-value attribute", () => {
        render(Subject, { props: { value: "3", children: textSnippet("3 stars") } });
        expect(screen.getByRole("radio").getAttribute("data-value")).toBe("3");
    });

    test("is not disabled by default", () => {
        render(Subject, { props: { children: textSnippet("1 star") } });
        expect((screen.getByRole("radio") as HTMLButtonElement).disabled).toBe(false);
    });

    test("supports disabled state", () => {
        render(Subject, { props: { disabled: true, children: textSnippet("1 star") } });
        expect((screen.getByRole("radio") as HTMLButtonElement).disabled).toBe(true);
    });

    test("renders children", () => {
        render(Subject, { props: { children: textSnippet("5 stars") } });
        expect(screen.getByText("5 stars")).toBeTruthy();
    });

    test("passes through attributes", () => {
        render(Subject, { props: { "data-testid": "rgi", children: textSnippet("x") } });
        expect(screen.getByTestId("rgi")).toBeTruthy();
    });
});
