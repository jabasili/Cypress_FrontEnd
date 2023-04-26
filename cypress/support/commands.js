Cypress.Commands.add('AlterarVersao', () =>{
    cy.get('select[id="switch-version-select"]')
        .select('/v1.x/demo/my_boss_is_in_a_hurry/bootstrap-v4')
})

Cypress.Commands.add('ClicarAddRecords', () => {
    cy.get('.floatL.t5 > .btn')
        .click()
})

Cypress.Commands.add('PreencheDados', () => {    
    cy.get('#field-customerName')
        .as('campoNome')
        .type('Teste Sicredi')
        .should('have.value', 'Teste Sicredi')

    cy.get('#field-contactLastName')
        .as('campoSobreNome')
        .type('Teste')
        .should('have.value', 'Teste')

    cy.get('#field-contactFirstName')
        .as('campoNomeContato')
        .type('Jader Basili')
        .should('have.value', 'Jader Basili')

    cy.get('#field-phone')
        .as('campoTelefone')
        .type('51 9999-9999')
        .should('have.value', '51 9999-9999')

    cy.get('#field-addressLine1')
        .as('campoEnderecoUm')
        .type('Av Assis Brasil, 3970')
        .should('have.value', 'Av Assis Brasil, 3970')

    cy.get('#field-addressLine2')
        .as('campoEnderecoDois')
        .type('Torre D')
        .should('have.value', 'Torre D')

    cy.get('#field-city')
        .as('campoCidade')
        .type('Porto Alegre')
        .should('have.value', 'Porto Alegre')

    cy.get('#field-state')
        .as('campoEstado')
        .type('RS')
        .should('have.value', 'RS')

    cy.get('#field-postalCode')
        .as('campoCep')
        .type('91000-000')
        .should('have.value', '91000-000')

    cy.get('#field-country')
        .as('campoPais')
        .type('Brasil')
        .should('have.value', 'Brasil')

    cy.get('#field-salesRepEmployeeNumber')
        .as('campoFuncionarioResp')
        .type('123321')
        .should('have.value', '123321')

    cy.get('#field-creditLimit')
        .as('campoLimiteCredito')
        .type('200')
        .should('have.value', '200')

    cy.get('#field-customerName')
        .as('campoNome')
               
})

Cypress.Commands.add('ClicarSalvar', () => {
    cy.get('#form-button-save')
        .click()
})

Cypress.Commands.add('ValidaçãoMensagem', () => {
    cy.get('p').invoke('text')
        .should('contain','Your data has been successfully stored into the database. ')
})

Cypress.Commands.add('SalvaVolta', () => {
    cy.get('#save-and-go-back-button')
        .click()
})

Cypress.Commands.add('BuscaRegistro', () => {
    cy.get(':nth-child(3) > .form-control')
        .type('Teste Sicredi')
})

Cypress.Commands.add('SelecionaRegistro', () => {
    cy.wait(3000)
    cy.get('input[class="select-row"]')
        .check()
})

Cypress.Commands.add('SolicitaDelete', () => {
    cy.get('a[class="btn btn-outline-dark delete-selected-button"]')
        .click()
})

Cypress.Commands.add('ValidarMsgpopUp', () => {
    cy.get('.alert-delete-multiple-one')
        .invoke('text')
        .should('contain','Are you sure that you want to delete this 1 item?')
})

Cypress.Commands.add('CliqueBotaoDelete', () => {
    cy.get('button[class="btn btn-danger delete-multiple-confirmation-button"]')
        .click()
})

Cypress.Commands.add('ValidaMsgRegistroApagado', () => {
    cy.get('[data-growl="message"] > p')
        .invoke('text')
        .should('contain', 'Your data has been successfully deleted from the database.')
})