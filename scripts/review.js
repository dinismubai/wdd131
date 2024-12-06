// Increment the review counter upon form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-grid');

    form.addEventListener('submit', (event) => {
        // Prevent default submission to check functionality (optional for testing)
        // event.preventDefault(); 

        // Get the current counter value from localStorage
        let reviewCount = localStorage.getItem('reviewCount');

        // Initialize counter if not set
        if (!reviewCount) {
            reviewCount = 0;
        }

        // Increment and save the updated count
        reviewCount = parseInt(reviewCount) + 1;
        localStorage.setItem('reviewCount', reviewCount);
    });
});

// Display the review counter on the review.html page
document.addEventListener('DOMContentLoaded', () => {
    const reviewCounterElement = document.getElementById('reviewCounter');
    if (reviewCounterElement) {
        // Get the review count from localStorage
        let reviewCount = localStorage.getItem('reviewCount');

        // Default to 0 if no reviews have been recorded yet
        if (!reviewCount) {
            reviewCount = 0;
        }

        // Update the span element with the review count
        reviewCounterElement.textContent = `Number of reviews submitted: ${reviewCount}`;
    }
});
