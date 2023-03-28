describe("<Filter>", () => {
  let body;
  beforeEach(() => {
    body = cy.request("http://localhost:8787/texts/1").its("body");
  });
  it("should contain logo on Filter button", () => {
    body.then((html) => {
      let $filterButton = cy.$$(html).find("#filterButton");
      expect($filterButton).to.contain("img").to.have.attr("src");
    });
  });

  it("should contain filter by span", () => {
    body.then((html) => {
      let $filterButton = cy.$$(html).find("#filterButton");
      expect($filterButton).to.contain("span").value("Filter");
    });
  });
});

export {};
