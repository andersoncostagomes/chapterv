/// <reference types ="cypress" />

const Chance = require('chance')
const chance = new Chance()

describe('Cadastro', () => {
  it('Cadastro com sucesso', () => {
    cy.intercept({

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 200,
      fixture: 'cadastro-com-sucesso'

    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type(chance.name())
    cy.get('[placeholder=Email]').type(chance.email())
    cy.get('[placeholder=Password]').type('teste123')

    cy.get('button.btn-primary').click()

    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Cadastro com usuário já existente', () => {
    cy.intercept({

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-usuario-existente'

    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type(chance.name())
    cy.get('[placeholder=Email]').type(chance.email())
    cy.get('[placeholder=Password]').type('teste123')

    cy.get('button.btn-primary').click()

    cy.contains('username has already been taken').should('be.visible')
  })

  it('Cadastro com e-mail já existente', () => {
    cy.intercept({

      method: 'POST',
      path: '/api/users'

    }, {

      statusCode: 422,
      fixture: 'cadastro-email-existente'

    }).as('postUsers')

    cy.visit('register')

    cy.get('[placeholder=Username]').type(chance.name())
    cy.get('[placeholder=Email]').type(chance.email())
    cy.get('[placeholder=Password]').type('teste123')

    cy.get('button.btn-primary').click()

    cy.contains('email has already been taken').should('be.visible')
  })
})
