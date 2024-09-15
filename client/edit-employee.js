let employees = [];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const employeeId = parseInt(urlParams.get('id'));

    // Fetch employees data (in a real application, this would be an API call)
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            employees = data;
            populateForm(employeeId);
        });

    document.getElementById('edit-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveChanges(employeeId);
    });
});

function populateForm(employeeId) {
    const employee = employees[employeeId];
    if (employee) {
        document.getElementById('fullName').value = employee.fullName;
        document.getElementById('email').value = employee.email;
        document.getElementById('mobile').value = employee.mobile;
        document.getElementById('dob').value = employee.dob;
    }
}

function saveChanges(employeeId) {
    const employee = employees[employeeId];
    if (employee) {
        employee.fullName = document.getElementById('fullName').value;
        employee.email = document.getElementById('email').value;
        employee.mobile = document.getElementById('mobile').value;
        employee.dob = document.getElementById('dob').value;

        // Handle photo upload (in a real application, this would involve file upload)
        const photoInput = document.getElementById('photo');
        if (photoInput.files.length > 0) {
            // For demonstration, we're just setting the file name
            employee.photo = photoInput.files[0].name;
        }

        // In a real application, you would send this data to a server
        console.log('Employee data updated:', employee);

        // Redirect back to the main page
        window.location.href = 'index.html';
    }
}