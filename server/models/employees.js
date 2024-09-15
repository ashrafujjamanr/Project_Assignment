const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    photo: String,
    fullName: String,
    email: String,
    mobile: String,
    dateOfBirth: Date,
    actions: {
        edit: Boolean,
        delete: Boolean
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;