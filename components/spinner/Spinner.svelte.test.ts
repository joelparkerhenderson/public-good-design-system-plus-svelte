import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./Spinner.svelte";

function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("Spinner", () => {
    test("renders with status role", () => {
        render(Subject, { props: { label: "Loading" } });
        expect(screen.getByRole("status")).toBeTruthy();
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Loading data" } });
        expect(screen.getByLabelText("Loading data")).toBeTruthy();
    });

    test("has polite aria-live", () => {
        render(Subject, { props: { label: "Loading", "data-testid": "sp" } });
        expect(screen.getByTestId("sp").getAttribute("aria-live")).toBe("polite");
    });

    test("renders children", () => {
        render(Subject, { props: { label: "L", children: textSnippet("Please wait") } });
        expect(screen.getByRole("status").textContent).toContain("Please wait");
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "L", "data-testid": "sp" } });
        expect(screen.getByTestId("sp")).toBeTruthy();
    });
});
