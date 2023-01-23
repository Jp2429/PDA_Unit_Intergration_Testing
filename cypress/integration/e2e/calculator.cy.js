describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  it('Should display running total',()=>{
    cy.get('#number8').click()
    cy.get('#operator-add').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','10')
  })
  it('Should chain multiple operations',()=>{
    cy.get('#number6').click()
    cy.get('#operator-multiply').click()
    cy.get('#number7').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','21')
  })
  it('Should get expected out for range of numbers',()=>{
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number7').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','-5')
  })
  it('Should equal 0 when dividing by zero',()=>{
    cy.get('#number2').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain','0')
  })

})