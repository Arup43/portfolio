window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        document.querySelector('#navbar').classList.add('navbar-scrolled');
    } else {
        document.querySelector('#navbar').classList.remove('navbar-scrolled');
    }
});

// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the ID of the corresponding section
        const sectionId = this.getAttribute('href');

        // Get the position of the corresponding section
        const sectionPosition = document.querySelector(sectionId).offsetTop;

        // Scroll to the corresponding section with a smooth animation
        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    });
});

//projects filter
document.querySelector('#projects').addEventListener('change', function (event) {
    console.log("clicked");
    console.log(event.target.value);

    if (event.target.value == 'all') {
        document.querySelectorAll('.project').forEach(function (project) {
            project.style.display = 'block';
        });
    } else if (event.target.value == 'web') {
        document.querySelectorAll('.project').forEach(function (project) {
            if (project.classList.contains('web')) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    } else if (event.target.value == 'mobile') {
        document.querySelectorAll('.project').forEach(function (project) {
            if (project.classList.contains('mobile')) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    } else if (event.target.value == 'landing') {
        document.querySelectorAll('.project').forEach(function (project) {
            if (project.classList.contains('landing')) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }
});

//form validation
document.querySelector('#contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get the values of the inputs
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;

    // Check if the name is empty
    if (name == '') {
        document.querySelector('#name-error').style.display = 'block';
    } else {
        document.querySelector('#name-error').style.display = 'none';
    }

    // Check if the email is empty
    if (email == '') {
        document.querySelector('#email-error').style.display = 'block';
    } else {
        document.querySelector('#email-error').style.display = 'none';
    }

    // Check if the subject is empty
    if (email == '') {
        document.querySelector('#subject-error').style.display = 'block';
    } else {
        document.querySelector('#subject-error').style.display = 'none';
    }

    // Check if the message is empty
    if (message == '') {
        document.querySelector('#message-error').style.display = 'block';
    } else {
        document.querySelector('#message-error').style.display = 'none';
    }

    // Check if the email is valid
    if (email != '' && !isEmailValid(email)) {
        document.querySelector('#email-invalid-error').style.display = 'block';
    } else {
        document.querySelector('#email-invalid-error').style.display = 'none';
    }
});

function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}