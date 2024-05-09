beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format



BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
     */

    it('check the logo on the form' , () => {  
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        cy.get('img').invoke('height').should('be.lessThan', 167)
            .and('be.greaterThan', 165)   
        cy.get('img').invoke('width').should('be.lessThan', 179)
            .and('be.greaterThan', 177)   
    })

    

    it.only('check the dropdown on the form' , () => {  

        cy.get('#country').children().should('have.length', 4)
        cy.get('#country').find('option').then(options => {
            const actual = [...options].map(option => option.label)
            expect(actual).to.deep.eq(['', 'Spain', 'Estonia', 'Austria'])
        })      
        cy.get('#country').select(0)
        cy.get('#city').should('be.disabled')
        cy.get('#country').select(2)
        cy.get('#city').should('be.enabled')
        cy.get('#city').find('option').eq(0).should('have.be.empty')
        cy.get('#city').find('option').eq(1).should('have.text','Tallinn')
        cy.get('#city').find('option').eq(2).should('have.text','Haapsalu')
        cy.get('#city').find('option').eq(3).should('have.text','Tartu')
        cy.get('#country').select('Austria')
        cy.get('#city').find('option').eq(1).should('have.text','Vienna')
        cy.get('#country').select('Spain')
        cy.get('#city').children().should('have.length', 5)
        cy.get('#city').find('option').then(options => {
            const actual = [...options].map(option => option.label)
            expect(actual).to.deep.eq(['', 'Malaga', 'Madrid', 'Valencia','Corralejo'])
        cy.get('#country').select(2)
        cy.get('#city').select('Haapsalu')
        cy.get('#country').select('Spain')
        cy.get('#city').should('not.have.value')
        cy.get('#city').find('option').then(options => {
            const actual = [...options].map(option => option.text)
        expect(actual).to.not.include('Tallinn')
    })
        
    })

    it('check the radio buttons' , () => {     
        
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily').should('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly').should('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly').should('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','Never').should('not.be.checked')
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).should('not.be.checked')
        cy.get('input[type="radio"]').eq(2).should('not.be.checked')
        cy.get('input[type="radio"]').eq(3).should('not.be.checked')


        })

        it('check email format' , () => {  

            cy.select('input[id="birthday"]').click()
            
            



        })       
        
    

    })