// Task 7 & 9
document.getElementById('recommendation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const recommendationText = document.getElementById('recommendation-text').value;

    if (recommendationText.trim() !== '') {
        // Create a new recommendation card
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation-card');
        newRecommendation.innerHTML = `<p>${recommendationText}</p>`;

        // Add the new recommendation to the container
        document.querySelector('.recommendations-container').appendChild(newRecommendation);

        // Show a pop-up confirmation message
        alert("Thank you for leaving a recommendation!");
        
        // Clear the input field
        document.getElementById('recommendation-text').value = '';
    }
});