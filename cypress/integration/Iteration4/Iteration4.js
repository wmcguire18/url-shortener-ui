describe('Checking items', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to get new URL', () => {
    cy.get('.url-entry').type('www.reddit.com')
    cy.get('.title-entry').type('Reddit')
    cy.get('.submit-button').click();
    cy.wait(500);
    cy.get('.new-url')
  });

  });
