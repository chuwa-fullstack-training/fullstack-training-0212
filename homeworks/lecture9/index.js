const mongoose = require("mongoose");
const connectDB = require("./connect/connectDB");
const Company = require("./models/Company");
const Employee = require("./models/Employee");

const {
  createCompany,
  findCompany,
  updateCompany,
  deleteCompany,
  getAllCompany,
} = require("./controllers/Company");
const {
  createEmployee,
  deleteEmployee,
  findEmployee,
  updateEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  getAllEmployeesByManager,
} = require("./controllers/Employee");

const company1 = "65e40cb760cce4c27c7e5a5b";
const company2 = "65e3ac3ce9336a12df66177c";
const company3 = "65e4086185cb147a9c76b836";

const m1 = "65e4113933a288ee3b70553f";
const m2 = "65e4113933a288ee3b705543";
const m1_d = "65e411549430375edb170e57";
const m2_d = "65e411549430375edb170e5b";

const e1 = "65e41289e88f25fe6fa8e8a9"

async function test() {
  await connectDB();

  //  Company functions test

  //   await createCompany({
  //     name: "Word Best",
  //     description:
  //       "We are the best, we earn most. jagsdubnagWUHYDIUAjxdiuahtsufybgAYDIUJYAIujdoiuyHAMKJDGNFWJHEfgnodikuJSDilk<",
  //       headquarters: 'San Jose, CA',
  //       industry: 'Everything'
  //   });

  //   await createCompany({
  //     name: "USA Best",
  //     description:
  //       "aaaa",
  //       headquarters: 'India',
  //       industry: 'Nothing'
  //   });

  //   await createCompany({
  //     name: "No Name",
  //     description:
  //       "aaaa",
  //       headquarters: 'Underground',
  //       industry: 'Tech'
  //   });

  // await findCompany(company1)
  // await findCompany(company2)
  // await findCompany(company3)

  // await updateCompany(company1,{
  //     description: "The best company don't need any description",
  //     industry: 'Anything you can image'
  // })

  // await deleteCompany(company1)

  // await getAllCompany()

  // Employee functions test
  // await createEmployee({
  //     firstName: 'Manager for c1',
  //     lastName: 'First',
  //     company: company1,
  //     jobTitle: 'CEO',
  //     resigned: true,
  //     salary: 1000000,
  // })

  // await createEmployee({
  //     firstName: 'Manager for c2',
  //     lastName: 'Best',
  //     company: company2,
  //     jobTitle: 'CTO',
  //     resigned: true,
  //     salary: 1000000,
  // })

  // await createEmployee({
  //     firstName: 'First employee c1',
  //     lastName: 'First',
  //     company: company1,
  //     jobTitle: 'Sales',
  //     resigned: false,
  //     salary: 1000000,
  //     manager: m1,
  // })

  // await createEmployee({
  //     firstName: 'Second employee c1',
  //     lastName: 'Second',
  //     company: company1,
  //     jobTitle: 'Sales',
  //     resigned: false,
  //     salary: 1000000,
  //     manager: m1,
  // })

  // await createEmployee({
  //     firstName: 'First employee c2',
  //     lastName: 'First',
  //     company: company2,
  //     jobTitle: 'Sales',
  //     resigned: false,
  //     salary: 1000000,
  //     manager: m2,
  // })

  // await createEmployee({
  //     firstName: 'Second employee c2',
  //     lastName: 'Second',
  //     company: company2,
  //     jobTitle: 'Sales',
  //     resigned: false,
  //     salary: 1000000,
  //     manager: m2,
  // })

//   await deleteEmployee(m1_d)
//   await deleteEmployee(m2_d)

  // await findEmployee(m1)
  // await findEmployee(m2)

//   await updateEmployee(e1,{
//     firstName: 'change employee to c2',
//     company: company2, 
//     manager: m2,
//   })

// await updateEmployee(e1, {
//     salary: 10,
//     jobTitle: 'Designer'
// })

// await getAllEmployees()

await getAllEmployeesByCompany(company1)

await getAllEmployeesByManager(m2)


  mongoose.connection.close();
}

test();
