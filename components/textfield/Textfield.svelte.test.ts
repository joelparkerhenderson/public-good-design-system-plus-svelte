import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./Textfield.svelte";

describe("Textfield", () => {
    test("renders a text input", () => {
        render(Subject, { props: { label: "Username" } });
        const input = screen.getByLabelText("Username") as HTMLInputElement;
        expect(input.type).toBe("text");
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Username" } });
        expect(screen.getByLabelText("Username")).toBeTruthy();
    });

    test("supports required", () => {
        render(Subject, { props: { label: "Username", required: true } });
        expect((screen.getByLabelText("Username") as HTMLInputElement).required).toBe(true);
    });

    test("supports disabled", () => {
        render(Subject, { props: { label: "Username", disabled: true } });
        expect((screen.getByLabelText("Username") as HTMLInputElement).disabled).toBe(true);
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "Username", "data-testid": "tf" } });
        expect(screen.getByTestId("tf")).toBeTruthy();
    });
});
