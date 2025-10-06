// Dynamic time-based greeting functionality
function getTimeBasedGreeting() {
  const hour = new Date().getHours();
  let greeting = "";
  let emoji = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    emoji = "🌅";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
    emoji = "☀️";
  } else if (hour >= 17 && hour < 21) {
    greeting = "Good evening";
    emoji = "🌆";
  } else {
    greeting = "Good night";
    emoji = "🌙";
  }

  return `${greeting}! ${emoji} Thanks for visiting.`;
}

function updateGreeting() {
  const greetingElement = document.getElementById("dynamic-greeting");
  if (greetingElement) {
    greetingElement.textContent = getTimeBasedGreeting();
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  updateGreeting();

  // Update greeting every minute
  setInterval(updateGreeting, 60000);
});

// Export for ES6 module compatibility
export { getTimeBasedGreeting, updateGreeting };
