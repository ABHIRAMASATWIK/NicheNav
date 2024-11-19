document.addEventListener('DOMContentLoaded', function() {
    // Store user credentials after signup
    var users = [];

    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        // Simple validation (you may need to improve this)
        if (email === "" || password === "") {
            document.getElementById('login-error-msg').innerText = "Please enter both email and password";
        } else {
            // Check if email contains "@" symbol
            if (email.includes("@")) {
                // Check if password meets length requirement (8 characters or more)
                if (password.length >= 8) {
                    // Check if password contains at least one digit
                    if (/\d/.test(password)) {
                        // All validation passed, proceed with successful login
                        alert("Login successful!");
                        // Redirect to a blank page
                        window.location.href = "blank.html"; // Change "blank.html" to your desired blank page URL
                    } else {
                        document.getElementById('login-error-msg').innerText = "Password must contain at least one digit";
                    }
                } else {
                    document.getElementById('login-error-msg').innerText = "Password must be at least 8 characters long";
                }
            } else {
                document.getElementById('login-error-msg').innerText = "Invalid email format";
            }
        }
    });

    // Adding event listener to "Log in with Facebook" button
    document.getElementById('login-fb-btn').addEventListener('click', function(event) {
        event.preventDefault();
        alert('Adding this feature soon!');
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var name = document.getElementById('new-name').value;
        var email = document.getElementById('new-email').value;
        var password = document.getElementById('new-password').value;

        // Simple validation (you may need to improve this)
        if (name === "" || email === "" || password === "") {
            document.getElementById('signup-error-msg').innerText = "Please fill in all fields";
        } else {
            // Simulate account creation (you would replace this with actual account creation logic)
            alert("Account created successfully!");
            // Store the user's information in the users array
            users.push({name: name, email: email, password: password});

            // Redirect user back to login page
            document.querySelector('.login-container').style.display = 'block';
            document.querySelector('.signup-container').style.display = 'none';
        }
    });

    // Toggle between login and signup forms
    document.getElementById('signup-link').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.login-container').style.display = 'none';
        document.querySelector('.signup-container').style.display = 'block';
    });
    var countOptions = {
        useEasing: true,
        separator: ''
      }
      
      var count = new CountUp('MyNumber', 0, 2016, 0, 5, countOptions)
      
      // start the counting and give it a callback when done
      count.start(function() {
        $('h2').text('finished')
      })
});
