const employees = [
    {
        photo: 'avatar.png',
        fullName: 'Abul Kalam',
        email: 'abul@gmail.com',
        mobile: '01714546489',
        dob: '20/9/2000'
    },
    {
        photo: 'avatar.png',
        fullName: 'Jobyda Haque',
        email: 'jobhaq@gmail.com',
        mobile: '01354748493',
        dob: '2/8/1983'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tanim Shariar',
        email: 'tanim@yahoo.com',
        mobile: '015698746312',
        dob: '3/5/1999'
    },
    {
        photo: 'avatar.png',
        fullName: 'Shubir Nondi',
        email: 'nondi@hotmail.com',
        mobile: '01845693216',
        dob: '30/5/2001'
    },
    {
        photo: 'avatar.png',
        fullName: 'Afia Khatun',
        email: 'afia@gmail.com',
        mobile: '01752146369',
        dob: '10/7/2000'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
    {
        photo: 'avatar.png',
        fullName: 'Tonima Enam',
        email: 'tonima@yahoo.com',
        mobile: '017896544123',
        dob: '11/5/1998'
    },
];

let currentSort = { column: '', ascending: true };
let filteredEmployees = [...employees];

function renderEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';

    filteredEmployees.forEach((employee, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><img src="${employee.photo}" alt="Avatar"></td>
            <td>${employee.fullName}</td>
            <td>${employee.email}</td>
            <td>${employee.mobile}</td>
            <td>${employee.dob}</td>
            <td class="actions">
                <button onclick="editEmployee(${index})">✏️</button>
                <button onclick="deleteEmployee(${index})">🗑️</button>
            </td>
        `;

        employeeList.appendChild(row);
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function sortTable(column) {
    if (currentSort.column === column) {
        currentSort.ascending = !currentSort.ascending;
    } else {
        currentSort.column = column;
        currentSort.ascending = true;
    }

    filteredEmployees.sort((a, b) => {
        let valA = a[column].toLowerCase ? a[column].toLowerCase() : a[column];
        let valB = b[column].toLowerCase ? b[column].toLowerCase() : b[column];

        if (column === 'dob') {
            valA = new Date(valA.split('/').reverse().join('-'));
            valB = new Date(valB.split('/').reverse().join('-'));
        }

        if (valA < valB) return currentSort.ascending ? -1 : 1;
        if (valA > valB) return currentSort.ascending ? 1 : -1;
        return 0;
    });

    renderEmployees();
}

// function addEmployee() {
//     const fullName = prompt('Enter full name:');
//     const email = prompt('Enter email:');
//     const mobile = prompt('Enter mobile number:');
//     const dob = prompt('Enter date of birth:');
//     const newEmployee = {
//         photo: 'avatar.png',
//         fullName,
//         email,
//         mobile,
//         dob
//     };
//     employees.push(newEmployee);
//     filteredEmployees = [...employees];
//     renderEmployees();
// }


function addEmployee() {
    window.location.href = 'edit-employee.html?mode=add';
}



// function editEmployee(index) {
//     const employee = filteredEmployees[index];
//     const employeeId = employees.findIndex(e => e.fullName === employee.fullName);
//     window.location.href = `edit-employee.html?id=${employeeId}`;
// }

function editEmployee(index) {
    window.location.href = `edit-employee.html?mode=edit&id=${index}`;
}


// function enableEdit(index) {
//     document.getElementById(`fullName-${index}`).contentEditable = true;
//     document.getElementById(`email-${index}`).contentEditable = true;
//     document.getElementById(`mobile-${index}`).contentEditable = true;
//     document.getElementById(`dob-${index}`).contentEditable = true;

//     document.getElementById(`photoInput-${index}`).style.display = 'block';

//     const actions = document.querySelectorAll('.actions')[index];
//     actions.querySelector('.edit-btn').style.display = 'none';
//     actions.querySelector('.save-btn').style.display = 'inline';
// }

// function saveEdit(index) {
//     const fullName = document.getElementById(`fullName-${index}`).innerText;
//     const email = document.getElementById(`email-${index}`).innerText;
//     const mobile = document.getElementById(`mobile-${index}`).innerText;
//     const dob = document.getElementById(`dob-${index}`).innerText;

//     const employeeIndex = employees.findIndex(e => e.fullName === filteredEmployees[index].fullName);
//     employees[employeeIndex] = { ...employees[employeeIndex], fullName, email, mobile, dob };
//     filteredEmployees[index] = { ...filteredEmployees[index], fullName, email, mobile, dob };

//     document.getElementById(`fullName-${index}`).contentEditable = false;
//     document.getElementById(`email-${index}`).contentEditable = false;
//     document.getElementById(`mobile-${index}`).contentEditable = false;
//     document.getElementById(`dob-${index}`).contentEditable = false;

//     const actions = document.querySelectorAll('.actions')[index];
//     actions.querySelector('.edit-btn').style.display = 'inline';
//     actions.querySelector('.save-btn').style.display = 'none';

//     document.getElementById(`photoInput-${index}`).style.display = 'none';
// }

let deleteIndex = -1;

function deleteEmployee(index) {
    deleteIndex = index;
    document.getElementById('custom-popup').style.display = 'flex';
}

function confirmDelete(confirmed) {
    document.getElementById('custom-popup').style.display = 'none';
    if (confirmed && deleteIndex !== -1) {
        const employeeIndex = employees.findIndex(e => e.fullName === filteredEmployees[deleteIndex].fullName);
        employees.splice(employeeIndex, 1);
        filteredEmployees.splice(deleteIndex, 1);
        renderEmployees();
    }
    deleteIndex = -1;
}

function loadImage(index) {
    const fileInput = document.getElementById(`photoInput-${index}`);
    const imgElement = document.getElementById(`photo-${index}`);
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const img = new Image();
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const maxSize = 200; // Set the maximum width or height

            let width = img.width;
            let height = img.height;

            // Calculate the new dimensions while maintaining aspect ratio
            if (width > height) {
                if (width > maxSize) {
                    height *= maxSize / width;
                    width = maxSize;
                }
            } else {
                if (height > maxSize) {
                    width *= maxSize / height;
                    height = maxSize;
                }
            }

            canvas.width = width;
            canvas.height = height;

            // Draw the resized image on the canvas
            ctx.drawImage(img, 0, 0, width, height);

            // Convert the canvas to a data URL and set it as the image source
            const resizedImageDataUrl = canvas.toDataURL('image/jpeg', 0.7);
            imgElement.src = resizedImageDataUrl;

            // Update the employee object with the resized image data
            const employeeIndex = employees.findIndex(e => e.fullName === filteredEmployees[index].fullName);
            employees[employeeIndex].photo = resizedImageDataUrl;
            filteredEmployees[index].photo = resizedImageDataUrl;
        };
        img.src = e.target.result;
    };
    reader.readAsDataURL(file);
}

function searchEmployees() {
    const nameSearch = document.getElementById('search-name').value.toLowerCase();
    const dobSearch = document.getElementById('search-dob').value;
    const emailSearch = document.getElementById('search-email').value.toLowerCase();
    const mobileSearch = document.getElementById('search-mobile').value;

    filteredEmployees = employees.filter(employee => {
        const nameMatch = employee.fullName.toLowerCase().includes(nameSearch);
        const dobMatch = dobSearch === '' || employee.dob === dobSearch;
        const emailMatch = employee.email.toLowerCase().includes(emailSearch);
        const mobileMatch = employee.mobile.includes(mobileSearch);

        return nameMatch && dobMatch && emailMatch && mobileMatch;
    });

    renderEmployees();
}

// Event listeners
document.getElementById('search-btn').addEventListener('click', searchEmployees);
document.getElementById('search-name').addEventListener('input', searchEmployees);
document.getElementById('search-dob').addEventListener('input', searchEmployees);
document.getElementById('search-email').addEventListener('input', searchEmployees);
document.getElementById('search-mobile').addEventListener('input', searchEmployees);

document.addEventListener('DOMContentLoaded', () => {
    // ... (keep existing event listeners)

    // Add navigation event listeners
    document.getElementById('home').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });

    document.getElementById('add-employee').addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'add-employee.html';
    });
});



// Custom popup event listeners
document.getElementById('popup-yes').addEventListener('click', () => confirmDelete(true));
document.getElementById('popup-no').addEventListener('click', () => confirmDelete(false));

// Render initial employee data
renderEmployees();