const data = require("../fixtures/data");
import helpers from "../fixtures/helpers";

context("Customer Details Screen", () => {

  it("should take me to customer list", () => {
    helpers.getURL();
    helpers.setUserName().type(data.name);
    helpers.getSubmitButton().click();
    helpers.getHeader().should("contain", data.header);
  });

  it("should click on customer name link", () => {
    helpers.getCustomerName().eq(0).click();
  });

  it("should see the customer details screen with the customer details",
  () => {
    helpers.getCustomerDetails().should("contain", data.textCD);
  });

  it("should click on Back to List button", () => {
    helpers.backToList().click();
  });

  it("should see the Customer List Page", () => {
    helpers.getTableHeader().contains("Name");
    helpers.getTableHeader().next().contains("# of Employees");
    helpers.getTableHeader().siblings().contains("Size");
  });
  
  it("should click on customer name who does not have contact info", () => {
    helpers.getCustomerName().eq(3).click();
  });
  it("should see the error message", () => {
    helpers.getContact().should("contain", data.error);
  });
});