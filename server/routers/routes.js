const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');

router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch   
 (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/employees', async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Get the current page from the query parameters
    const pageSize = 10; // Set the number of items per page
  
    try {
      const totalItems = await Employee.countDocuments();
      const totalPages = Math.ceil(totalItems / pageSize);
  
      const employees = await Employee.find()
        .skip((page - 1) * pageSize)
        .limit(pageSize);
  
      res.json({
        employees,
        currentPage: page,
        totalPages,
        totalItems,
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  router.get('/employees', async (req, res) => {
    const { id, email, mobile, fullName, dob } = req.query;
    const query = {};
  
    if (id) query._id = id;
    if (email) query.email = email;
    if (mobile) query.mobile = mobile;
    if (fullName) query.fullName = { $regex: fullName, $options: 'i' }; // Case-insensitive search
    if (dob) query.dob = dob;
  
    try {
      const employees = await Employee.find(query);
      res.json(employees);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.post('/employees', async (req, res) => {
    const employee = new Employee({
        photo: req.body.photo,
        fullName: req.body.fullName,
        email: req.body.email,
        mobile: req.body.mobile,
        dateOfBirth: req.body.dateOfBirth
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/employees/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;