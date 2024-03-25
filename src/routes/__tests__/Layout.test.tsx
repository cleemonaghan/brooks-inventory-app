import { render, screen } from "@testing-library/react";
import Layout from "../Layout";
import { MemoryRouter } from "react-router-dom";

test("renders navbar", () => {
  render(
    <MemoryRouter>
      <Layout />
    </MemoryRouter>
  );
  // let element = screen.getByText(/Study Hour Tracker/i);
  // expect(element).toBeInTheDocument();

  let element = screen.getByText(/Home/i);
  expect(element).toBeInTheDocument();
  element = screen.getByText(/Manager/i);
  expect(element).toBeInTheDocument();
  element = screen.getByText(/Admin/i);
  expect(element).toBeInTheDocument();
  element = screen.getByText(/Overview/i);
  expect(element).toBeInTheDocument();
});
