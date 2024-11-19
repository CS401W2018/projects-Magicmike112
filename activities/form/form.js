document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve input values
    const firstname = document.getElementById('fname').value.trim();
    const lastname = document.getElementById('lname').value.trim();
    const password = document.getElementById('password').value.trim();
    const state = document.getElementById('state').value;

    // Form data object
    const formdata = {
        fname: firstname,
        lname: lastname,
        password: password,
        state: state,
    };

    // Validation
    const errors = [];
    if (!firstname) errors.push("First name is required.");
    if (!lastname) errors.push("Last name is required.");
    if (password.length < 6) errors.push("Password must be at least 6 characters.");
    if (!state) errors.push("State is required.");

    if (errors.length > 0) {
        alert(errors.join("\n"));
        return;
    }

    // Create and send AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json", true); // Use GET for static file
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                alert('Form submitted successfully: ' + response.message);
                document.getElementById('myform').reset(); // Clear the form
            } else {
                alert('Error submitting form. Status: ' + xhr.status);
            }
        }
    };

    xhr.send(); // No need to send the formdata if using GET for a static file
    console.log("Form data sent:", formdata);
});
