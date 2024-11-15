function updateTime() {
  // Set the starting point (Halloween 2024 at 3:30 PM)
  const halloweenDate = new Date(2024, 9, 31, 15, 30);  // October 31, 2024, 3:30 PM (9 is October, months are zero-indexed)

  // Get the current date and time
  const now = new Date();

  // Calculate the difference in milliseconds
  const diff = now - halloweenDate; // Time difference since Halloween 2024 3:30 PM

  if (diff < 0) {
    // If the target time is in the future, display 00:00:00:00:00:00
    document.getElementById('time').textContent = "00:00:00:00:00:00";
    return;
  }

  // Calculate years, months, days, hours, minutes, seconds from the difference
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365)); // Calculate full years
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12; // Calculate full months
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30; // Remaining days after months
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24; // Hours
  const minutes = Math.floor(diff / (1000 * 60)) % 60; // Minutes
  const seconds = Math.floor(diff / 1000) % 60; // Seconds

  // Format the time to always show two digits (e.g., 01 for 1)
  const formattedYears = years < 10 ? '0' + years : years;
  const formattedMonths = months < 10 ? '0' + months : months;
  const formattedDays = days < 10 ? '0' + days : days;
  const formattedHours = hours < 10 ? '0' + hours : hours;
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  // Display the formatted time in YYYY:MM:DD:HH:MM:SS format
  document.getElementById('time').textContent = `${formattedYears}:${formattedMonths}:${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time immediately
updateTime();
