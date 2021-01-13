import * as data from '../fixtures/helpers'

describe("API Test for Customer App", () => {
    
    it("Validates the API response", () => {
        data.names.forEach((name) => {
            cy.request('POST', "/", name)
                .its('body')
                .should('contain', name)
                // .should('contain', "[A-Za-z]")
                .should('contain', data.timestamp)
                .its('customers')
                .should('deep.equal', data.response.customers)
        })
    })
    
    it("Validates the objects in the response", () => {
        cy.request('POST', "/", data.names).then((response) => {
            response.body.customers.forEach(item => {
                expect(item).to.have.keys(
                    "id",
                    "name",
                    "employees",
                    "contactInfo",
                    "size"
                )
            })
        })
    })

    it("Validates the company based on employees", () => {
        cy.request('POST', "/", data.names).then((response) => {
            response.body.customers.forEach(item => {
                expect(item.size).to.equal(data.getSize(item.employees))
            })
        })
    })

})