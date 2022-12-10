import React from "react";
import { render, screen } from "@testing-library/react";

import TextLineClamp from "./TextLineClamp";

describe("TextLineClamp", () => {
  it("renders TextLineClamp", async () => {
    render(
      <TextLineClamp
        lineClamp={2}
        className="CLASS_NAME"
        paragraph="PARAGRAPH"
      />
    );

    screen.getByText("PARAGRAPH");
  });
});
