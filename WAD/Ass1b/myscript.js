function myFunctionpass() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function openRegister() {
    window.location.href = "register.html";
}

function validateLoginForm() {
    var nameValue = document.getElementById("nameInput").value;
    var passwordValue = document.getElementById("passwordInput").value;

    if (nameValue.trim() === "" || passwordValue.trim() === "") {
        alert("Please enter both name and password");
    } else {
        alert("Name: " + nameValue + "\nPassword: " + passwordValue);
    }
}

function validateEmail() {
    var emailInput = document.getElementById("emailInput").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address");
        return false;
    }

    return true;
}

function validateRegistrationForm() {
    var idInput = document.getElementById("IdInput").value;
    var nameInput = document.getElementById("nameInput").value;
    var birthdateInput = document.getElementById("birthdateInput").value;
    var emailInput = document.getElementById("emailInput").value;
    var passwordInput = document.getElementById("passwordInput").value;
    var gender = document.getElementById("maleRadio").checked ? "Male" : "Female";
    var cityInput = document.getElementById("city").value;
    var stateInput = document.getElementById("state").value;
    var pinCodeInput = document.getElementById("PinCodeInput").value;

    if (!idInput || !nameInput || !birthdateInput || !emailInput || !passwordInput || (!document.getElementById("maleRadio").checked && !document.getElementById("femaleRadio").checked) || !cityInput || !stateInput || !pinCodeInput) {
        alert("Please fill in all the required fields");
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (passwordInput.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    var pinCodeRegex = /^\d{6}$/;
    if (!pinCodeRegex.test(pinCodeInput)) {
        alert("PinCode must be 6 digits long and contain only numbers");
        return false;
    }

    var currentDate = new Date();
    var selectedDate = new Date(birthdateInput);

    if (selectedDate > currentDate) {
        alert("Birthdate should not be after the current date");
        return false;
    }

    var userData = {
        id: idInput,
        name: nameInput,
        birthdate: birthdateInput,
        email: emailInput,
        password: passwordInput,
        gender: gender,
        hobbies: hobbiesInput,
        city: cityInput,
        state: stateInput,
        pinCode: pinCodeInput
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    alert("Registration Successful");

    window.location.href = "success.html";

    return true;
}
