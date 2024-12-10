// This script automatically selects radio buttons and fills out textareas on a course evaluation form.

// Select all radio input elements with a value of 5 (you can change the value to 1, 2, 3, or 4 if needed)
const radioInputs = document.querySelectorAll("input[type='radio'][value='5']");

// Click each radio input to set its value
radioInputs.forEach(input => input.click());

// Select all textarea elements on the page
const textAreas = document.querySelectorAll("textarea");

// Define the evaluation text to be inserted into each textarea
// You can customize this text to match your review
const evaluationText = `
The teaching in this course was outstanding. The lectures were clear and well-paced, making it easy to understand the material. The teacher's approach was organized and the teaching methods were engaging. The course materials were helpful and included practical examples that made the content relevant and easy to grasp. The teacher was responsive to student queries and provided timely, constructive feedback. Overall, this course was a valuable and enjoyable experience.
`;

// Append the evaluation text to each textarea element
textAreas.forEach(textArea => {
  textArea.value += evaluationText;
});
