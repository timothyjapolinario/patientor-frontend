import { expect, test, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import Patients from "../src/pages/Patients";
// Edit an assertion and save to see HMR in action

vi.mock("../src/utils/patientService", () => {
  return {
    getAll: vi.fn(() => {
      return [
        {
          id: "d2773336-f723-11e9-8f0b-362b9e155667",
          name: "John McClane",
          dateOfBirth: "1986-07-09",
          gender: "male",
          occupation: "New york city cop",
        },
      ];
    }),
  };
});

afterAll(() => {
  vi.clearAllMocks();
});

test.skip("Math.sqrt()", () => {
  expect(Math.sqrt(4)).toBe(2);
  expect(Math.sqrt(144)).toBe(12);
  expect(Math.sqrt(2)).toBe(Math.SQRT2);
});

test("information for patients are shown", async () => {
  render(<Patients />);
  await waitFor(
    () => {
      expect(screen.getByText("name: John McClane")).not.toBeNull();
      expect(screen.getByText("gender: male")).not.toBeNull();
      expect(screen.getByText("occupation: New york city cop")).not.toBeNull();
    },
    {
      timeout: 5000,
    }
  );
  const header = screen.queryByText(/Patient List/i);
  screen.debug();
  expect(header).not.toBeNull();
});
