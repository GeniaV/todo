/// <reference types="cypress" />

describe("TodoItem", () => {
  it("сhecked and unchecked", () => {

    cy.visit(`http://localhost:3000/`);

    cy.get("input").should("be.empty");
    cy.get("input").type('Task');
    cy.get("input").type('{enter}');

    cy.get("[data-cy=todo-checkbox]").should('not.be.visible');
    cy.get("[data-cy=todo-checkbox]").check({ force: true });
    cy.get("[data-cy=todo-checkbox]").should('be.checked');

    cy.get("[data-cy=todo-checkbox]").should('not.be.visible');
    cy.get("[data-cy=todo-checkbox]").uncheck({ force: true });
    cy.get("[data-cy=todo-checkbox]").should('not.be.checked');
  });
});