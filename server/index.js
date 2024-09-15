const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const employeeRoutes = require('./routers/routes');

const app = express();
const port = process.env.PORT || 3000;


mongoose.connect('mongodb://localhost:27017/employee_list')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));
app.use(bodyParser.json()); 
app.use(cors());


app.use('/api', employeeRoutes);


app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});