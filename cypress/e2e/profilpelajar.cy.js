describe('Sistem Profil Pelajar', () => {

  it('Papar Maklumat Pelajar', () => {

    cy.visit('http://127.0.0.1:5500/index.html')

    cy.get('#nama').type('Vennilaa')
    cy.get('#matrik').type('DIPA12345')
    cy.get('#program').select('Multimedia')
    cy.get('#email').type('vennilaa@gmail.com')

    cy.get('#papar').click()

    cy.contains('Vennilaa')
    cy.contains('DIPA12345')
    cy.contains('Multimedia')
    cy.contains('vennilaa@gmail.com')

  })

})