// Array of titles based on the day of the week
const titles = [
    { weekDay: "Mon", title: "Start Fresh with a Crisp Salad" },
    { weekDay: "Tue", title: "Tropical Twist Taco Tuesday" },
    { weekDay: "Wed", title: "Midweek Mango Magic" },
    { weekDay: "Thu", title: "Sip and Chill: Smoothie Day" },
    { weekDay: "Fri", title: "Flavorful Fridays: Grilled Goodness" },
    { weekDay: "Sat", title: "Sizzle Saturday: BBQ and Skewers" },
    { weekDay: "Sun", title: "Sweet Sunday: Coconut Bliss" }
];

// Function to get the current day of the week and update the title
function updateDynamicTitle() {
    const dynamicTitleElement = document.getElementById("dynamic-title");

    // Get the current day of the week (e.g., "Mon", "Tue", ...)
    const currentDay = new Date().toLocaleString('en-US', { weekday: 'short' });

    // Find the title for the current day
    const todayTitle = titles.find(title => title.weekDay === currentDay);

    // Update the dynamic title element with the appropriate title
    if (todayTitle) {
        dynamicTitleElement.textContent = todayTitle.title;
    } else {
        dynamicTitleElement.textContent = "Welcome! Enjoy Delicious Recipes!";
    }
}

// Run the function when the page loads
updateDynamicTitle();