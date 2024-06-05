/// <reference types="cypress" />


describe('Testes', () => {

  it('Soma 1 + 1 ', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get(':nth-child(11)').click()
      cy.get('#plus').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
    cy.get('.display-container').should('have.text', "2")

  })

  it('Subtração 1 - 1 = 0 ', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get(':nth-child(11)').click()
      cy.get(':nth-child(10)').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()

    cy.get('.display-container').should('have.text', "0")
  
  })

  it('Divisão 30 / 6 = 5 ', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('button').contains('3').click()
    cy.get('button').contains('0').click()
      cy.get('.panel > :nth-child(2)').click()
    cy.get('button').contains('6').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "5")
  })

  it('Multiplicação 54 * 92 = 4.968 ', () => {
    cy.visit('http://127.0.0.1:5173/')

    cy.get('button').contains('5').click()
    cy.get('button').contains('4').click()
      cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('9').click()
    cy.get('button').contains('2').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "4968")
  })

  it('Multiplicação e Soma: 10 * 6 + 7 = 67', () => {//
    cy.visit('http://127.0.0.1:5173/')

    cy.get('button').contains('1').click()
    cy.get('button').contains('0').click()
      cy.get('.panel > :nth-child(6)').click()
    cy.get('button').contains('6').click()
      cy.get('#equal').click()
      cy.get('#plus').click()
    cy.get('button').contains('7').click()
    cy.get('#equal').click()
    
    cy.get('.display-container').should('have.text', "67")
  })


  it('Divisão e Subtração: 295 / 6 - 13 = 144.5', () => {//
    cy.visit('http://127.0.0.1:5173/')

    cy.get('button').contains('2').click()
    cy.get('button').contains('9').click()
    cy.get('button').contains('5').click()
      cy.get('button').contains('/').click()
    cy.get('button').contains('2').click()
    cy.get('#equal').click()
      cy.get('button').contains('-').click()
    cy.get('button').contains('3').click()
    cy.get('#equal').click()

    cy.get('.display-container').should('have.text', "144.5")
  })


  it('Multiplicação, subtração e soma: 90 * 4 - 96 + 5 = 269', () => {//
    cy.visit('http://127.0.0.1:5173/')

    cy.get('button').contains('9').click()
    cy.get('button').contains('0').click()
      cy.get('button').contains('x').click()
    cy.get('button').contains('4').click()
    cy.get('#equal').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('9').click()
    cy.get('button').contains('6').click()
    cy.get('#equal').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('5').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "269")
  })


  it('Subtração e soma: 64 - 4 + 90 = 150 ', () => {//
    cy.visit('http://127.0.0.1:5173/')

    
    cy.get('button').contains('6').click()
    cy.get('button').contains('4').click()
      cy.get('button').contains('-').click()
    cy.get('button').contains('4').click()
    cy.get('#equal').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('9').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "150")
  })

  it('Soma, divisão e subtração: 32 + 11 / 9 - 2 = 2,777777777777778 ', () => {//
    cy.visit('http://127.0.0.1:5173/')

    
    cy.get('button').contains('3').click()
    cy.get('button').contains('2').click()
      cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
      cy.get('button').contains('/').click()
    cy.get('button').contains('9').click()
    cy.get('#equal').click()
      cy.get('button').contains('-').click()
    cy.get('button').contains('2').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "2.7777777777777777")
  })

  it('Subtração, soma, divisão e multiplicação: 33 - 1 + 30 / 2 * 10 ', () => {//
    cy.visit('http://127.0.0.1:5173/')

    
    cy.get('button').contains('3').click()
    cy.get('button').contains('3').click()
      cy.get('button').contains('-').click()
    cy.get('button').contains('1').click()
    cy.get('#equal').click()
      cy.get('button').contains('+').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
      cy.get('button').contains('/').click()
    cy.get('button').contains('2').click()
    cy.get('#equal').click()
      cy.get('button').contains('x').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('0').click()
    cy.get('#equal').click()
  
    cy.get('.display-container').should('have.text', "310")
  })

})
