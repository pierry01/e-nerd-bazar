import React from "react";
import { render, screen } from "@testing-library/react";

import Home from "./index";

jest.mock("../../Components/Product", () => () => "Product");

describe("Home", () => {
  it("renders Home", async () => {
    render(<Home />);

    screen.getByText("HOME PAGE");
    screen.getByText("Product");
  });
});
