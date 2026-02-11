import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./DatePicker.svelte";

describe("DatePicker", () => {
    test("renders a date input", () => {
        render(Subject, { props: { label: "Date" } });
        expect((screen.getByLabelText("Date") as HTMLInputElement).type).toBe("date");
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Start date" } });
        expect(screen.getByLabelText("Start date")).toBeTruthy();
    });

    test("supports required", () => {
        render(Subject, { props: { label: "Date", required: true } });
        expect((screen.getByLabelText("Date") as HTMLInputElement).required).toBe(true);
    });

    test("supports min/max", () => {
        render(Subject, { props: { label: "Date", min: "2025-01-01", max: "2025-12-31" } });
        const input = screen.getByLabelText("Date") as HTMLInputElement;
        expect(input.min).toBe("2025-01-01");
        expect(input.max).toBe("2025-12-31");
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "D", "data-testid": "dp" } });
        expect(screen.getByTestId("dp")).toBeTruthy();
    });
});
