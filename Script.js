// document.addEventListener('DOMContentLoaded', function () {
//     // Select the submit button and the feedback form elements
//     const submitButton = document.getElementById('submit-feedback');
//     const feedbackText = document.getElementById('feedback-text');
//     const feedbackName = document.getElementById('feedback-name');
    
//     // Select all testimonial boxes
//     const testimonialBoxes = document.querySelectorAll('.testimonial-box');

//     // Add event listener for the submit button
//     submitButton.addEventListener('click', function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Get the user's feedback and name
//         const newFeedback = feedbackText.value.trim();
//         const newName = feedbackName.value.trim();

//         // Make sure that the feedback and name are not empty
//         if (newFeedback && newName) {
//             // Replace the content of the oldest testimonial
//             const oldestTestimonial = testimonialBoxes[0]; // First one is the oldest
            
//             // Move the testimonials by removing the first element and adding it to the end
//             const lastTestimonial = testimonialBoxes[testimonialBoxes.length - 1];
//             lastTestimonial.parentNode.insertBefore(oldestTestimonial, lastTestimonial.nextSibling);

//             // Replace the content of the now oldest (previously last) testimonial
//             oldestTestimonial.querySelector('.customer-name').textContent = newName;
//             oldestTestimonial.querySelector('.testimonial-text').textContent = newFeedback;

//             // Optionally reset the form fields
//             feedbackText.value = '';
//             feedbackName.value = '';
//         } else {
//             alert("Please provide both your name and feedback.");
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    // Select the submit button and the feedback form elements
    const submitButton = document.getElementById('submit-feedback');
    const feedbackText = document.getElementById('feedback-text');
    const feedbackName = document.getElementById('feedback-name');

    // Select all testimonial boxes
    const testimonialBoxes = document.querySelectorAll('.testimonial-box');

    // Set an index to track the oldest testimonial
    let oldestIndex = 0; // Initially, the first testimonial is the oldest

    // Add event listener for the submit button
    submitButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get the user's feedback and name
        const newFeedback = feedbackText.value.trim();
        const newName = feedbackName.value.trim();

        // Make sure that the feedback and name are not empty
        if (newFeedback && newName) {
            // Replace the content of the testimonial at the oldestIndex
            const oldestTestimonial = testimonialBoxes[oldestIndex];
            
            // Update the content of the oldest testimonial
            oldestTestimonial.querySelector('.customer-name').textContent = newName;
            oldestTestimonial.querySelector('.testimonial-text').textContent = newFeedback;

            // Update the oldestIndex to point to the next testimonial in the cycle
            oldestIndex = (oldestIndex + 1) % testimonialBoxes.length; // Cycle through 0, 1, 2

            // Optionally reset the form fields
            feedbackText.value = '';
            feedbackName.value = '';
        } else {
            alert("Please provide both your name and feedback.");
        }
    });
});

