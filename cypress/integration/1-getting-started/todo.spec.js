/// <reference types="cypress" />



describe('page navigation and form validation', () => {

  it('displays a get started button', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.get-started-btn').should('have.length', 1);
    cy.get('.get-started-btn').click();
    cy.get('.rating-info-form').should('have.length', 1);
    cy.get('.overview-header').should('contain', 'Rating Information');
  });

  it('handles form validation', () => {
    cy.get('input[name="first_name"]').type('John');
    cy.get('input[name="last_name"]').type('Smith');
    cy.get('input[name="line_1"]').type('123 Main St');
    cy.get('input[name="city"]').type('Anytown');
    cy.get('input[name="region"]').type('AA').blur();
    cy.get('.error-span').should('contain', 'Invalid State Abbreviation!');
  });

  it('handles form submission and navgation', () => {
    cy.get('input[name="region').clear().type('AA');
    cy.get('input[name="postal"]').type('12345');
    cy.get('.form-submit').click();
    cy.get('.overview-header').should('contain', 'Quote Overview');
  });

  it('handles value adjustments on overview page', () => {
    cy.get('.price-tag')
      .first()
      .invoke('text')
      .then((text1) => {
        cy.get('select')
          .first()
          .select(1);
        cy.wait(1000);
        cy.get('.price-tag')
          .first()
          .invoke('text')
          .then((text2) => {
            expect(text2).to.not.equal(text1);
          }
          );
      });
  });
});

// describe('endpoints', () => {
//   const data = {
//     first_name: "John",
//     last_name: "Smith",
//     address: {
//       line_1: "123 Main St",
//       line_2: "",
//       city: "Anytown",
//       region: "NY",
//       postal: "12345"
//     }
//   };
//   it('GET request returns the initial quote object', () => {
//     cy.request('POST', 'https://fed-challenge-api.sure.now.sh/api/v1/quotes', data).then((response) => {
//       console.log(response);
//     });
//   });
// });
