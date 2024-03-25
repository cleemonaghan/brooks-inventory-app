import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Root } from "../Root";
import { act } from "react-dom/test-utils";

test("redirects when navbar item clicked", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Root />
    </MemoryRouter>
  );

  const home = screen.getByText(/Missing Inventory/i);
  expect(home).toBeInTheDocument();

  const redirect = screen.getByText(/Overview/i);
  expect(redirect).toBeInTheDocument();
  await act(async () => {
    redirect.click();
  });

  const dashboard = screen.getByTestId(/dashboard/i);
  expect(dashboard).toBeInTheDocument();
});

test("redirects when landing on a bad page", () => {
  const badRoute = "/some/bad/route";

  // use <MemoryRouter> when you want to manually control the history
  render(
    <MemoryRouter initialEntries={[badRoute]}>
      <Root />
    </MemoryRouter>
  );

  // verify navigation to home page
  expect(screen.getByText(/Missing Inventory/i)).toBeInTheDocument();
});
