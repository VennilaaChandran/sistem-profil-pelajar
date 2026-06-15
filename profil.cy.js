describe('Ujian Sistem Profil Pelajar', () => {

  it('Memastikan borang berfungsi dengan betul', () => {

    cy.visit('index.html');

    cy.get('#nama').type('Ali Ahmad');
    cy.get('#program').select('Multimedia');
    cy.get('#email').type('ali@gmail.com');

    cy.contains('Papar Maklumat').click();

    cy.get('#output').should('contain', 'Ali Ahmad');
    cy.get('#output').should('contain', 'Multimedia');
    cy.get('#output').should('contain', 'ali@gmail.com');

  });

});