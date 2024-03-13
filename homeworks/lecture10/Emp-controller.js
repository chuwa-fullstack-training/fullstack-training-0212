const mongoose = require('./connect');
const {Company, Employee} = require('./schema');

const createEmp = async (info) => {
    try{
        const company = await Company.findById(info.company);
        if (!company) {
            console.error('Not Found the company')
        }
        const employee = new Employee(info);
        company.employees.push(employee.id);
        await employee.save();
        await company.save();
        console.log(`${employee} saved`);
    } catch (e) {
        console.error(e);
    }
}

const findEmpById = (id) => {
    Employee.find({company:id})   //Mongoose 查询语法，在数据库中查找符合条件的所有员工文档
        .then(employee => {
        if (employee) {
            console.log(employee);
        } else {
            console.log('Employee not found.');
        }
        })
        .catch(err => {
        console.error('Error finding empolyee:', err);
        })
        .finally(() => {
        mongoose.disconnect();
    });
};

const findEmps = async () => {
    try {
        const employees = await Employee.find()  
        console.log(employees)
    } catch (e) {
        console.log('Error finding all employees', e)
    } finally {
        mongoose.disconnect();
    }
}

const deleteEmp = async (id) => {
    try {
        const emp = await Employee.findByIdAndDelete(id);
        console.log(`${emp} deleted`);
        const subordinates = await Employee.find({manager:id});
        subordinates.forEach(async subordinate => {
            subordinate.manager = undefined;
            await subordinate.save();
          });
        const company = await Company.findById(emp.company);
        company.employees.remove(emp.id);
        await company.save();
    } catch (e) {
        console.log('Delete Failed', e)
    } finally {
        mongoose.disconnect();
    }
}

// const updateEmp = (id) => {
//     Employee.findById(id)
//     .then(employee => {
//         if (info.company) {
//             return Company.findComById(employee.company)
//                 .then(res => {
//                     res.employees.remove(id);
//                     return res.save();
//                 })
//                 .then(() => {
//                     employee.company = info.company;
//                     return Company.findById(employee.company)
//                 })
//                 .then(cur => {
//                     cur.employees.push(id);
//                     return cur.save()
//                 })
//                 .then(() => {
//                     employee.manager = undefined
//                 })
//         }
//     })
// }

async function updateEmp(id, newObj = {}) { 
    try {
        // 三个参数：要查找的文档ID（req.params.employeeId），要更新的数据（req.body）和选项（{ new: true }）
        // findByIdAndUpdate返回更新前的原始文档。设置{ new: true }确保返回更新后的文档
        const employee = await Employee.findByIdAndUpdate(id, newObj, { new: true });
    
        // 检查更新的内容中是否有 company 属性
        if (newObj.company) {
          // 如果有，获取该公司
          const companyPrev = await Company.findById(employee.company);
    
          // 如果公司存在，从 employees 数组中移除当前员工的 id
          if (companyPrev) {
            companyPrev.employees.remove(id);
            await companyPrev.save();
          }
    
          // 更新员工的公司属性
          employee.company = newObj.company;
    
          // 获取新的公司
          const companyCurr = await Company.findById(employee.company);
    
          // 如果公司存在，将当前员工的 id 添加到 employees 数组
          if (newObj.manager) {
            employee.manager = newObj.manager;
          } else {
            // 将 manager 设置为 undefined（可根据需要调整）
            employee.manager = undefined;
          }
        }
    
        // 将返回的 Query 对象执行以获取最终文档
        const updatedEmployee = await employee.save();
    
        console.log("Employee updated", updatedEmployee);
        return updatedEmployee;
      } catch (err) {
        console.error("Error updating employee:", err);
        throw err; // Rethrow the error for the caller to handle
        //其目的是在当前函数（或异步操作）无法处理错误时，将错误传递给调用者或上一级的错误处理机制
      }
    };
    

const EmpByManager = async (Id) => {
    try {
        const employees = await Employee.find({manager: Id})
        const name = employees.map(emp => emp.firstName )
        console.log(name)
    } catch (e) {
        console.error(e)
    }
}
 
module.exports = {
    createEmp,
    findEmpById,
    findEmps,
    deleteEmp,
    updateEmp,
    EmpByManager
}