import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Product from "./Product";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const product = {
  id: "P-ID",
  name: "P-NAME",
  price: 10000,
  description: "P-DESCRIPTION",
  image: "P-IMAGE",
};

describe("Product", () => {
  const user = userEvent.setup();

  it("renders Product", async () => {
    render(<Product product={product} />);

    screen.getByText("R$ 100,00");
    screen.getByText(/10x de R\$ 10,00 sem juros/i);
    screen.getByText("P-DESCRIPTION");

    await act(async () => {
      await user.click(screen.getByText("P-NAME"));
    });

    await waitFor(() =>
      expect(mockNavigate).toHaveBeenCalledWith("products/P-ID")
    );
  });
});
