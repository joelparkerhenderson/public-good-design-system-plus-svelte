import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./DateRangePicker.svelte";

describe("DateRangePicker", () => {
    test("renders two date inputs", () => {
        render(Subject, { props: { label: "Stay", startLabel: "Check-in", endLabel: "Check-out" } });
        expect(screen.getByLabelText("Check-in")).toBeTruthy();
        expect(screen.getByLabelText("Check-out")).toBeTruthy();
    });

    test("has group aria-label", () => {
        render(Subject, { props: { label: "Stay dates", startLabel: "In", endLabel: "Out" } });
        expect(screen.getByLabelText("Stay dates").tagName).toBe("FIELDSET");
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "D", startLabel: "S", endLabel: "E", "data-testid": "drp" } });
        expect(screen.getByTestId("drp")).toBeTruthy();
    });
});
