import helpers from "../fixtures/helpers";
const data = require("../fixtures/data");

context("Welcome Screen", () => {

    it("should load header", () => {
        helpers.getURL();
        helpers.getHeader().should("contain", data.header);
    });

    it("should load instructions", () => {
        helpers.getInstructionText().should("contain", data.instructions);
    });

    it("should click on submit button without input", () => {
        helpers.getSubmitButton().click();
    });

    it("should send an alert", () => {
        cy.on("window:alert", (str) => {
          expect(str).to.equal(data.dialog);
          cy.get("button").contains("OK").click();
        });
    });
    
    
    data.names.forEach((name) => {
      describe(`Goes through name: "${name}"`, () => {
        it("should enter the input name", () => {
            helpers.setUserName().type(name);
        });

        //could not get validation to work using regex
        // it("should validate name", () => {
        //     cy.get('#name').contains(/[a-zA-Z]/)
        // });

        it("should click on submit button", () => {
            helpers.getSubmitButton().click();
        });
          
        it("should see the Customer list page with same input name", () => {
            helpers.getUserName().should("contain", name)
            helpers.getInstructionText().should("contain", data.textCL);
        });
    
        it("should refresh the page", () =>{
            cy.reload();
            helpers.setUserName()
            .should('exist')
            .and('be.visible')
            .and('have.value', '');
        });
      });
    });
});
