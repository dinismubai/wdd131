// Array of titles and images for each day
const dishes = [
    {
        weekDay: "Mon",
        description: "Start Fresh with a Crisp Salad",
        imageUrl: "images/salad.webp"
    },
    {
        weekDay: "Tue",
        description: "Tropical Twist Taco Tuesday",
        imageUrl: "images/taco.webp"
    },
    {
        weekDay: "Wed",
        description: "Midweek Mango Magic",
        imageUrl: "images/mango.webp"
    },
    {
        weekDay: "Thu",
        description: "Sip and Chill: Smoothie Day",
        imageUrl: "images/smoothie.webp"
    },
    {
        weekDay: "Fri",
        description: "Flavorful Fridays: Grilled Goodness",
        imageUrl: "images/grilled.webp"
    },
    {
        weekDay: "Sat",
        description: "Sizzle Saturday: BBQ and Skewers",
        imageUrl: "images/bbq.webp"
    },
    {
        weekDay: "Sun",
        description: "Sweet Sunday: Coconut Bliss",
        imageUrl: "images/rice.webp"
    }
];

// Function to dynamically create and fill the Dish of the Day section
function generateDishOfTheDay() {
    // Get the current day of the week (e.g., "Mon", "Tue", ...)
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'short' });

    // Find the data for the current day
    const todayData = dishes.find(dish => dish.weekDay === currentDay);

    // Select the container for the Dish of the Day
    const dishDayContainer = document.getElementById("dish-day");

    if (todayData) {
        // Create the <figure> element
        const figure = document.createElement("figure");

        // Create and append the <img> element
        const img = document.createElement("img");
        img.id = "dishoftheday";
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
        dishDayContainer.textContent = "Today's special recipe will be revealed soon!";
    }
}

// Run the function when the page loads
generateDishOfTheDay();