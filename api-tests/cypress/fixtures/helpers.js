export const response = {
    customers: [
      {
          "id": 1,
          "name": "Americas Inc.",
          "employees": 10,
          "contactInfo": {
              "name": "John Smith",
              "email": "jsmith@americasinc.com"
          },
          "size": "Small"
      },
      {
          "id": 2,
          "name": "Caribian Airlnis",
          "employees": 1000,
          "contactInfo": {
              "name": "Jose Martinez",
              "email": "martines@cair.com"
          },
          "size": "Big"
      },
      {
          "id": 3,
          "name": "MacroSoft",
          "employees": 540,
          "contactInfo": {
              "name": "Bill Paxton",
              "email": "bp@ms.com"
          },
          "size": "Medium"
      },
      {
          "id": 4,
          "name": "United Brands",
          "employees": 20,
          "size": "Small"
      },
      {
          "id": 5,
          "name": "Bananas Corp",
          "employees": 10000,
          "contactInfo": {
              "name": "Xavier Hernandez",
              "email": "xavier@bananas.com"
          },
          "size": "Big"
      },
      {
          "id": 6,
          "name": "XPTO.com",
          "employees": 102,
          "contactInfo": {
              "name": "Daniel Zuck",
              "email": "zuckh@xpto.com"
          },
          "size": "Medium"
      }
  ]
}

export const names = [{"name":"Krystal"}, {"name":"12345"},{"name":"!@#$%"},{"name":" "}, {}];

export const todaysDate = new Date().toDateString();
export const timestamp= {"timestamp": todaysDate};

// export const getCustomer = (data, customerName) => {
//     const customer = data.filter((customer) => customer.name === customerName);
//     return customer;
//   };

export const employeeSize = {
  small: { size: 10 },
  medium: { size: 1000 },
  big: { size: 1000 },
};

export const getSize = (employees) => {
  let expectedSize = '';
  if (employees <= employeeSize.small.size) {
    expectedSize = 'Small';
  } else if (
    employees > employeeSize.small.size &&
    employees <= employeeSize.medium.size
  ) {
    expectedSize = 'Medium';
  } else if (employees > employeeSize.big.size) {
    expectedSize = 'Big';
  }
  return expectedSize;
};
