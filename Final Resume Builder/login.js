const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');
        const signInForm = document.getElementById('signInForm');
        const signUpForm = document.getElementById('signUpForm');
        const errorMessage = document.getElementById('errorMessage');
        const signupMessage = document.getElementById('signupMessage');

        // Dummy storage for users
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Show registration form
        registerBtn.addEventListener('click', () => {
            container.classList.add("active");
        });

        // Show login form
        loginBtn.addEventListener('click', () => {
            container.classList.remove("active");
        });

        // Handle sign-up form submission
        signUpForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;

            // Save user credentials
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            signupMessage.style.display = 'block';
            setTimeout(() => {
                signupMessage.style.display = 'none';
            }, 3000); // Hide message after 3 seconds
        });

        // Handle sign-in form submission
        signInForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.getElementById('signinEmail').value;
            const password = document.getElementById('signinPassword').value;

            // Validate credentials
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                window.location.href = 'intro.html';
            } else {
                errorMessage.style.display = 'block';
            }
        });