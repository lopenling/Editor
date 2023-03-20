describe("testing homepage Header", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8787");
  });
  it("should contain logo in Header", () => {
    cy.get("nav").get("img").should("be.visible");
  });
  it("selected default translation is English", () => {
    cy.get("select")
      .children()
      .first()
      .then((option1) => {
        expect(option1).to.be.selected;
      });
  });
  it("should have login and signup button", () => {
    cy.get("#login").get("button").contains("log in");
    cy.get("#signup").get("a").contains("sign up");
  });
});
