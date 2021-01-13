const data = require("../fixtures/data");
import helpers from "../fixtures/helpers";

context("Customer List Screen", () => {

it("should take me to customer list", () => {
    helpers.getURL();
    helpers.setUserName().type(data.name);
    helpers.getSubmitButton().click();
    helpers.getHeader().should("contain", data.header);
});

it("should have the customerlist table with customer data", () => {
    helpers.getTableHeader().contains("Name");
    helpers.getTableHeader().next().contains("# of Employees");
    helpers.getTableHeader().siblings().contains("Size");
});

it(
  "should have size = Small for # of employees <=100, size = Medium for # of employees >100 <=1000, and Big for # of employees >1000",
  () => {
    helpers.getTableData().each(($e1, index, $list) => {
      const size = $e1.text();
      if (size.includes("Small")) {
        helpers.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(0).and.be.lte(100);
          });
      } else if (size.includes("Medium")) {
        helpers.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(100).and.be.lte(1000);
          });
      } else if (size.includes("Big")) {
        helpers.getTableData()
          .eq(index)
          .prev()
          .then(function (employees) {
            const numemp = parseFloat(employees.text());
            expect(numemp).to.be.gt(1000);
          });
      }
    });
  });
});