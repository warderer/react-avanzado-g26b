describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga leyendo Home en /', () => {
    // 01. Arrange: Setup del estado inicial de mi aplicación
    cy.visit('/')

    // 02. Act: Interactuar con la aplicación o ejecutar acciones
    cy.get('h1')
      .contains('Home') // 03. Assert: Esperar un resultado
  })

  it('Probar el Login como CUSTOMER', () => {
    // Interceptor lo uso para saber cuando una llamada a API esta resulta y puedo esperarla en otro momento usando cy.wait()
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')

    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[name="email"]').type('drstrange@marvel.com')
    cy.get('input[name="password"]').type('multiverso')
    cy.get('button[type="submit"]').click()

    cy.wait('@login')
    // 03. Assert
    cy.get('h1').contains('Home')
  })

  it('Cuando haga Logout como ADMIN me lleve a la página de Home', () => {
    // Interceptor lo uso para saber cuando una llamada a API esta resulta y puedo esperarla en otro momento usando cy.wait()
    cy.intercept('POST', 'https://ecommerce-json-jwt.onrender.com/login').as('login')

    // 01. Arrange
    cy.visit('/login')

    // 02. Act
    cy.get('input[name="email"]').type('superman@dc.com')
    cy.get('input[name="password"]').type('superman')
    cy.get('button[type="submit"]').click()
    cy.wait('@login')

    cy.get('nav > ul li:last').click()
    // 03. Assert
    cy.get('h1').contains('Home')
  })
})
