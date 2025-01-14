let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
    // Get values from the form
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let address = document.getElementById('address').value;
    let password = document.getElementById('password').value;
    let gender = document.querySelector('input[name="gender"]:checked')?.value || 'Not Selected';
    let isSubscribed = document.getElementById('subscribe').checked ? 'Subscribed' : 'Not Subscribed';
    let dob = document.getElementById('dob').value || 'Not Provided';

    // Display the values in span tags
    document.getElementById('displayUsername').textContent = username;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayAddress').textContent = address;
    document.getElementById('displayPassword').textContent = password;
    document.getElementById('displayGender').textContent = gender;
    document.getElementById('displaySubscription').textContent = isSubscribed;
    document.getElementById('displayDob').textContent = dob;
});
