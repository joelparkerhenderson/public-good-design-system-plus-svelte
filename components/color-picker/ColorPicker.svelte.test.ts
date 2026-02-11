import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./ColorPicker.svelte";

describe("ColorPicker", () => {
    test("renders a color input", () => {
        render(Subject, { props: { label: "Color" } });
        expect((screen.getByLabelText("Color") as HTMLInputElement).type).toBe("color");
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Background color" } });
        expect(screen.getByLabelText("Background color")).toBeTruthy();
    });

    test("supports disabled", () => {
        render(Subject, { props: { label: "Color", disabled: true } });
        expect((screen.getByLabelText("Color") as HTMLInputElement).disabled).toBe(true);
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "C", "data-testid": "cp" } });
        expect(screen.getByTestId("cp")).toBeTruthy();
    });
});
