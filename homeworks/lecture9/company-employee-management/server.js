const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();
app.use(express.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/companies', companyRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
