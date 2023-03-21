describe("tiptapEditor", () => {
  let body;
  beforeEach(() => {
    body = cy.request("http://localhost:8787/texts/1").its("body");
  });
  it("should have heading", () => {
    body.then((html) => {
      const $h1 = cy.$$(html).find("h1");
      expect($h1).to.be.visible();
    });
  });
  it("should load textEditor", () => {
    body.then((html) => {
      const $editor = cy.$$(html).find(".textEditorContainer");
      expect($editor).to.be.visible();
    });
  });
});
