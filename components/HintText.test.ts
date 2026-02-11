import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./HintText.svelte";

function textSnippet(text: string) {
    return (($$anchor: Comment) => {
        const node = document.createTextNode(text);
        $$anchor.before(node);
    }) as any;
}

describe("HintText", () => {
    test("renders text", () => {
        render(Subject, { props: { children: textSnippet("Helper text") } });
        expect(screen.getByText("Helper text")).toBeTruthy();
    });

    test("has id for linking", () => {
        render(Subject, { props: { id: "ht-1", children: textSnippet("Info") } });
        expect(document.getElementById("ht-1")).toBeTruthy();
    });

    test("passes through attributes", () => {
        render(Subject, { props: { "data-testid": "ht", children: textSnippet("H") } });
        expect(screen.getByTestId("ht")).toBeTruthy();
    });
});
