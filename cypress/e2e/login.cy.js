describe('Проверка авторизации', function () {

it('Верный логин и верный пароль', function () {
cy.visit('https://login.qa.studio');
cy.get('#mail').type('german@dolnikov.ru');
cy.get('#pass').type('iLoveqastudio1');
cy.get('#loginButton').click();
cy.get('#messageHeader').should('be.visible');
cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})

it('Проверка логики восстановления пароля', function () {
cy.visit('https://login.qa.studio');
cy.get('#forgotEmailButton').click();
cy.get('#mailForgot').type('wrong@mail.ru');
cy.get('#restoreEmailButton').click();
cy.get('#messageHeader').should('be.visible');
cy.get('#messageHeader').should('have.text', 'Успешно отправили пароль на e-mail');
cy.get('#exitMessageButton > .exitIcon').should('be.visible')
})

it('Верный логин и неверный пароль', function () {
    cy.visit('https://login.qa.studio');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').should('be.visible');
    cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio');
        cy.get('#mail').type('germas@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').should('be.visible');
        cy.get('#messageHeader').should('have.text', 'Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible')
        })

        it('Проверка валидности логина', function () {
            cy.visit('https://login.qa.studio');
            cy.get('#mail').type('germandolnikov.ru');
            cy.get('#pass').type('iLoveqastudio1');
            cy.get('#loginButton').click();
            cy.get('#messageHeader').should('be.visible');
            cy.get('#messageHeader').should('have.text', 'Нужно исправить проблему валидации');
            cy.get('#exitMessageButton > .exitIcon').should('be.visible')
            })

            it('Приведение к строчным буквам в логине', function () {
                cy.visit('https://login.qa.studio');
                cy.get('#mail').type('GerMan@Dolnikov.ru');
                cy.get('#pass').type('iLoveqastudio1');
                cy.get('#loginButton').click();
                cy.get('#messageHeader').should('be.visible');
                cy.get('#messageHeader').should('have.text', 'Авторизация прошла успешно');
                cy.get('#exitMessageButton > .exitIcon').should('be.visible')
                })
})