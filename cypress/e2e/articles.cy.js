describe("NY Times Most Popular Articles", () => {
  it("loads homepage and renders articles from API", () => {
    // Intercept API call
    cy.intercept(
      "GET",
      "**/mostpopular/v2/viewed/**"
    ).as("getArticles");

    // Visit app
    cy.visit("http://localhost:3000");

    // Wait for API to finish
    cy.wait("@getArticles");

    // Assert at least one article title is rendered
    cy.get("h2, h3")
      .should("have.length.greaterThan", 0);

    // Assert at least one link exists
    cy.get("a")
      .should("have.length.greaterThan", 0);
  });
});
