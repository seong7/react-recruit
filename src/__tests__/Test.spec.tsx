import { render, screen } from "@testing-library/react";
import { Test } from "../components/Test";

test("TEST", () => {
  render(<Test text={"tt"} />);

  expect(screen.getByText(/tt/)).toBeInTheDocument();
});
