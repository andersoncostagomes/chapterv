/// <reference types ="cypress" />

import articles from '../support/Pages/articles'

describe('Articles', () => {
  beforeEach(() => {
    cy.login()
    cy.visit('/')
  })
  it('Cadastro de novo artigo com sucesso', () => {
    articles.acessarFormulario()
    articles.preencherFormulario()
    articles.submeterFormulario()
    articles.verificarSeOArtigoFoiCriado()
  })
})
