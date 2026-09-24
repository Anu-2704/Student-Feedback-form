document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("feedbackForm");

    const name = document.getElementById("name");
    const rollno = document.getElementById("rollno");
    const email = document.getElementById("email");
    const course = document.getElementById("course");
    const feedback = document.getElementById("feedback");


    form.addEventListener("submit", function (event) {

        let isValid = true;


        // Clear previous errors

        document.querySelectorAll(".error-message").forEach(function (error) {
            error.textContent = "";
        });

        document.querySelectorAll("input, textarea").forEach(function (field) {
            field.classList.remove("input-error");
        });


        // Name validation

        if (name.value.trim() === "") {

            document.getElementById("nameError").textContent =
                "Please enter your name.";

            name.classList.add("input-error");

            isValid = false;
        }


        // Roll Number validation

        if (rollno.value.trim() === "") {

            document.getElementById("rollnoError").textContent =
                "Please enter your roll number.";

            rollno.classList.add("input-error");

            isValid = false;
        }


        // Email validation

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (email.value.trim() === "") {

            document.getElementById("emailError").textContent =
                "Please enter your email address.";

            email.classList.add("input-error");

            isValid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            document.getElementById("emailError").textContent =
                "Incorrect email. Please enter a valid email containing @.";

            email.classList.add("input-error");

            isValid = false;
        }


        // Course validation

        if (course.value.trim() === "") {

            document.getElementById("courseError").textContent =
                "Please enter your course.";

            course.classList.add("input-error");

            isValid = false;
        }


        // Feedback validation

        if (feedback.value.trim() === "") {

            document.getElementById("feedbackError").textContent =
                "Please enter your feedback.";

            feedback.classList.add("input-error");

            isValid = false;
        }


        // Stop form if validation fails

        if (!isValid) {

            event.preventDefault();

            return;
        }


        console.log("Feedback submitted successfully!");

    });


    console.log("Student Feedback Portal loaded successfully.");

});