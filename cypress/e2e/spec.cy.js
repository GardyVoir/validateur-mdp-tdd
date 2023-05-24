describe('test', () => {
  it('should display an error if password not valid', () => {
    cy.visit("http://localhost:5173");

    cy.get("#password").type("abc");
    cy.get("#btn").click();
    cy.get("#result").contains("Le mot de passe doit comporter au moins 8 caractères");

    cy.get("#password").clear().type("abcdefghij");
    cy.get("#btn").click();
    cy.get("#result").contains("Le mot de passe doit contenir au moins 1 chiffre");

    cy.get("#password").clear().type("abcdefghij1");
    cy.get("#btn").click();
    cy.get("#result").contains("Le mot de passe doit contenir au moins une lettre majuscule");
    
    cy.get("#password").clear().type("abcdEfghij1");
    cy.get("#btn").click();
    cy.get("#result").contains("Le mot de passe doit contenir au moins un caractère spécial");
    
    cy.get("#password").clear().type("@bcdEfghij1");
    cy.get("#btn").click();
    cy.get("#result").contains("OK");
  })
})