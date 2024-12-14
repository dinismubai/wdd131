// Array of titles and images for each day
const sweets = [
    {
        weekDay: "Mon",
        description: "Sweet Start: Chocolate Dreams",
        imageUrl: "images/chocolate.webp"
    },
    {
        weekDay: "Tue",
        description: "Tasty Tuesday: Berry Bliss",
        imageUrl: "images/berries.webp"
    },
    {
        weekDay: "Wed",
        description: "Midweek Treat: Caramel Delight",
        imageUrl: "images/caramel.webp"
    },
    {
        weekDay: "Thu",
        description: "Sugary Sip: Milkshake Magic",
        imageUrl: "images/milkshake.webp"
    },
    {
        weekDay: "Fri",
        description: "Frosty Fridays: Ice Cream Indulgence",
        imageUrl: "images/icecream.webp"
    },
    {
        weekDay: "Sat",
        description: "Weekend Whimsy: Pastry Perfection",
        imageUrl: "images/pastry.webp"
    },
    {
        weekDay: "Sun",
        description: "Sunny Sunday: Lemon Tart Love",
        imageUrl: "images/tart.webp"
    }
];

// Function to dynamically create and fill the Dish of the Day section
function generateSweetOfTheDay() {
    // Get the current day of the week (e.g., "Mon", "Tue", ...)
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'short' });

    // Find the data for the current day
    const todayData = sweets.find(sweet => sweet.weekDay === currentDay);

    // Select the container for the Dish of the Day
    const dishDayContainer = document.getElementById("sweet-day");

    if (todayData) {
        // Create the <figure> element
        const figure = document.createElement("figure");

        // Create and append the <img> element
        const img = document.createElement("img");
        img.id = "sweetoftheday";
        img.src = todayData.imageUrl;
        img.setAttribute("loading", "lazy");
        img.alt = todayData.description;
        figure.appendChild(img);

        // Create and append the <figcaption> element
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = todayData.description;
        figure.appendChild(figcaption);

        // Append the <figure> to the container
        dishDayContainer.appendChild(figure);
    } else {
        // If no data is found, display a default message
        dishDayContainer.textContent = "Today's special sweet will be revealed soon!";
    }
}

// Run the function when the page loads
generateSweetOfTheDay();