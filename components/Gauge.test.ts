import { render, screen } from "@testing-library/svelte";
import { describe, expect, test } from "vitest";

import Subject from "./Gauge.svelte";

describe("Gauge", () => {
    test("renders as a meter", () => {
        render(Subject, { props: { label: "CPU", value: 50 } });
        expect(screen.getByRole("meter")).toBeTruthy();
    });

    test("has correct value", () => {
        render(Subject, { props: { label: "CPU", value: 75, "data-testid": "g" } });
        expect((screen.getByTestId("g") as HTMLMeterElement).value).toBe(75);
    });

    test("has aria-label", () => {
        render(Subject, { props: { label: "Memory", value: 60 } });
        expect(screen.getByRole("meter").getAttribute("aria-label")).toBe("Memory");
    });

    test("supports min/max", () => {
        render(Subject, { props: { label: "G", value: 5, min: 0, max: 10, "data-testid": "g" } });
        const meter = screen.getByTestId("g") as HTMLMeterElement;
        expect(meter.min).toBe(0);
        expect(meter.max).toBe(10);
    });

    test("passes through attributes", () => {
        render(Subject, { props: { label: "G", value: 50, "data-testid": "g" } });
        expect(screen.getByTestId("g")).toBeTruthy();
    });
});
