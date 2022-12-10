import React from "react";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import Home, { QUERY } from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const products = [
  { id: "P-ID", name: "P-NAME", price: 10000, description: "P-DESCRIPTION" },
  { id: "P2-ID", name: "P2-NAME", price: 4999, description: "P2-DESCRIPTION" },
];

const mocks = [{ request: { query: QUERY }, result: { data: { products } } }];

describe("Home", () => {
  it("renders Home", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );

    await screen.findByText("HOME PAGE");

    screen.getByText("P-NAME");
    screen.getByText("R$ 100,00");
    screen.getByText(/10x de R\$ 10,00 sem juros/i);
    screen.getByText("P-DESCRIPTION");

    screen.getByText("P2-NAME");
    screen.getByText("R$ 49,99");
    screen.getByText(/10x de R\$ 5,00 sem juros/i);
    screen.getByText("P2-DESCRIPTION");
  });
});
