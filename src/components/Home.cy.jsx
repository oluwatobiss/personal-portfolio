import React from "react";
import Home from "./Home";

describe("<Home />", () => {
  it("renders", () => {
    cy.mount(<Home />);
    cy.get("nav");
    cy.get("h1").contains("Oluwatobi Sofela");
  });
});
