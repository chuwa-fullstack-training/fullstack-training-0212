const jwt = require('jsonwebtoken');
const { Employee } = require('../models/employee');

const login = async (req, res) => {
    try {
        const { userName, password } = req.body;

        const employee = await Employee.findOne({ firstName: userName, lastName: password });
        if (!employee) {
            return res.status(401).json({ message: "Authentication failed" });
        }

        const token = jwt.sign(
            { employeeId: employee._id, company: employee.company },
            process.env.SECRET_KEY,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = login;