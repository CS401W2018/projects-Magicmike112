document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect input values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const order = document.getElementById('order').value.trim();
    const pickup = document.getElementById('pickup').value.trim();

    // Update confirmation section
    document.getElementById('confName').textContent = name;
    document.getElementById('confEmail').textContent = email;
    document.getElementById('confOrder').textContent = order;
    document.getElementById('confPickup').textContent = pickup;

    // Show confirmation and hide form
    document.getElementById('confirmation').style.display = 'block';
    document.getElementById('contactForm').style.display = 'none';
});
