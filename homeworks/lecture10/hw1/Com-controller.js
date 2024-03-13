const mongoose = require('./connect');
const Company = require('./schema').Company;

const createCom = async (info) => {
    try{
        const company = new Company(info);
        await company.save();
        console.log('Company saved!!!!!!!!!')
    } catch (e) {
        console.error(e)
    } finally {
        mongoose.disconnect();
    }
}

const findComById = (id) => {
    Company.findById(id)   
        .then(company => {
        if (company) {
            console.log(company);
        } else {
            console.log('Company not found.');
        }
        })
        .catch(err => {
        console.error('Error finding company:', err);
        })
        .finally(() => {
        mongoose.disconnect();
    });
};

const findComs = async () => {
    try {
        const companies = await Company.find()  //await通常放在返回Promise的表达式前面。
        //await放在Company.findById(id)前面，以确保在继续执行后续代码之前等待findById方法返回的Promise解决
        console.log(companies)
    } catch (e) {
        console.log('Error finding all companies', e)
    } finally {
        mongoose.disconnect();
    }
}

// The findByIdAndDelete method not only finds the document by its ID but also deletes it from the database. 
//Therefore, there is no need to explicitly call save in this case.
const deleteCom = async (id) => {
    try {
        const company = await Company.findByIdAndDelete(id);
        console.log(`${company} deleted`)
    } catch (e) {
        console.log('Delete Failed', e)
    } finally {
        mongoose.disconnect();
    }
}

//findByIdAndUpdate method already updates the document in the database, 
//and there's no need for an additional save() cal
const updateCom = (id) => {
    Company.findByIdAndUpdate(id, {
        name: 'Mango',
        description: 'Tango'
      })
        .then(() => {
          console.log('Company updated');
        })
        .catch(err => {
          console.log('Error updating Company', err);
        })
        .finally(() => {
          mongoose.disconnect();
        });
}
 
module.exports = {
    createCom,
    findComs,
    findComById,
    deleteCom,
    updateCom
}
