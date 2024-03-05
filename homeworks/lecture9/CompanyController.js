const mongoose = require('./connect');
const Company = require('./schema').Company;

const createCom = async (info) => {
    try{
        const company = new Company(info);
        await company.save();
        console.log('Company saved')
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
        const companies = await Company.find()  
        console.log(companies)
    } catch (e) {
        console.log('Error finding all companies', e)
    } finally {
        mongoose.disconnect();
    }
}

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
