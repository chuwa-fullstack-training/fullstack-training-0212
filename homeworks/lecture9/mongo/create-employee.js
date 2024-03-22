const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const company = new Company({
    name: 'Normal Company'
});

company
    .save()
    .then(() => {
        console.log('Company saved');
        const employee = new Employee({
            firstName: 'Dragon',
            lastName: 'Li',
            company: company._id
        });
        return employee.save();
    })
    .then(employee => {
        company._employees.push(employee);
        return company.save();
    })
    .then(() => console.log('Employee saved'))
    .catch(err => console.log('Error', err))
    .finally(() => {
        mongoose.connection.close();
    })

