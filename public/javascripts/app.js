// Author:Thi Hong Hanh Bui
// Student ID: 3011122851
// Date: June 19, 2022

console.log('Client area.');

if (getTitle == "Business Contact List") {
    let deleteButtons = document.querySelectorAll('.btn-danger');

    for (button of deleteButtons) {
        button.addEventListener('click', (event) => {
            if (!confirm("Do you want to delete?")) {
                // Cancels the action
                event.preventDefault();
            }
        });
    }
}

if (getTitle == "Sign-up Form") {
    const confirm = document.querySelector('input[name=password_confirm]');

    confirm.addEventListener('change', onChange);
}


function onChange() {
    const password = document.querySelector('input[name=password]');
    const confirm = document.querySelector('input[name=password_confirm]');

    if (confirm.value === password.value) {
        confirm.setCustomValidity('');
    } else {
        confirm.setCustomValidity('Passwords do not match');
    }
}

//add a eventlistener to the button
document.getElementById("cont-btn").addEventListener("click", email);

//function to alert the message and back to the first page
function email() {
    alert("Thank you for your message!");
    window.location = '/';
}