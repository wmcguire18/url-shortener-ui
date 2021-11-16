describe('Checking items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to see the title', () => {
    cy.get('.title')
  });

  it('should be able to see the shortened URLs', () => {
    cy.get('.url')
  });

  it('should be able to see the form', () => {
    cy.get('.url-entry')
    cy.get('.title-entry')
    cy.get('.submit-button')
  });

  it('should be able to fill out the form', () => {
    cy.get('.url-entry').type('www.reddit.com')
    cy.get('.title-entry').type('Reddit')
    cy.get('.submit-button').click();
  });
   });
