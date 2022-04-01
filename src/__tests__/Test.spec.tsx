import { render, screen } from "@testing-library/react";
import { Test } from "../components/Test";

test("TEST", () => {
  render(<Test />);

  expect(screen.getByText(/test/)).toBeInTheDocument();
});
