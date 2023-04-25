/// <reference types="cypress" />
describe('Abrir pagina', () => {
    it('Abrir pagina solicitada', () => {
        cy.visit('')
        cy.AlterarVersao()
        cy.ClicarAddRecords()

    context('Preenchimento dos dados', () => {
        cy.PreencheDados()
        cy.ClicarSalvar()
    })

    context('Validação de sucesso de mensagem', () => {
        cy.ValidaçãoMensagem()
    })
})
})