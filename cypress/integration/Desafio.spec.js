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

    context('Salvar e voltar tela', () => {
        cy.SalvaVolta()
    })

    context('Buscar por registro', () => {
        cy.BuscaRegistro()
    })

    context('Selecionar registro', () => {
        cy.SelecionaRegistro()
    })

    context('Solicitar delete de registro', () => {
        cy.SolicitaDelete()

    context('PopUp de validação de apagar registro', () => {
        cy.ValidarMsgpopUp()
    })

    context('Clicar no delete para apagar registro', () => {
        cy.CliqueBotaoDelete()
        })
    
    context('Validação de registro apagado', () => {
        cy.ValidaMsgRegistroApagado()
    })
    })
})
})