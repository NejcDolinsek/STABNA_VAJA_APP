// Stopwatch variables
let timer;
let isRunning = false;
let minutes = 0;
let hours = 0;

/**
 * Start or stop the stopwatch based on the current state.
 */
function startStop() {
    if (isRunning) {
        // Stop the stopwatch
        clearInterval(timer);
        isRunning = false;
    } else {
        // Start the stopwatch
        hours = parseInt(document.getElementById('hours').value, 10) || 0;
        minutes = parseInt(document.getElementById('minutes').value, 10) || 0;

        // Validate input for hours
        if (hours > 23) {
            alert("Please enter a valid value for hours (0-23).");
            return;
        }

        // Validate input for minutes
        if (minutes > 59) {
            alert("Please enter a valid value for minutes (0-59).");
            return;
        }

        // Update the display and start the timer
        updateDisplay();
        timer = setInterval(updateStopwatch, 10000); // Updated to 10000 milliseconds (10 seconds)
        isRunning = true;
    }
}

/**
 * Reset the stopwatch to its initial state.
 */
function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    hours = 0;
    document.getElementById('hours').value = '0';
    document.getElementById('minutes').value = '0';
    updateDisplay();
    startStop(); // Restart the stopwatch after resetting
}

/**
 * Update the stopwatch with the passage of time.
 */
function updateStopwatch() {
    minutes++;

    if (minutes === 60) {
        minutes = 0;
        hours++;

        if (hours === 24) {
            // Reset to 00:00 when it reaches 23:59
            hours = 0;
        }
    }

    // Update the display
    updateDisplay();
}

/**
 * Update the displayed stopwatch time.
 */
function updateDisplay() {
    const display = document.getElementById('stopwatch');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}`;
}

/**
 * Format time values to include leading zeros.
 * @param {number} time - The time value to format.
 * @returns {string} - The formatted time string.
 */
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// Events script
let events = [
    'Poplave Trnjava - 14 hiš',
    'Poplave Lukovica center - 9 hiš',
    'Podrta drevesa cesta Čeplje, Brezovica - 6 lokacij',
    'Udar strele v hišo - Mala Lašna (Novo naselje) še 2 hiši ogroženi',
    'Udar strele - Žaga Videm',
    'Eksplozija plina - vrtec Medo',
    'Prometna nesreča v križišču Lukovica',
    'Zdrs vozila, več ujetih - cesta proti Zlatem polju',
    'Pomoč reševalcem - AED',
    'Nesreča gasilcev na poti v Trnovče'
];

let eventCounter = 1; // Variable to track the event number

/**
 * Display events from the events array.
 */
function displayEvents() {
    const eventsContainer = document.getElementById('events-container');

    if (events.length === 0) {
        alert('All events have been displayed!');
        return;
    }

    // Shuffle the events array randomly
    shuffleArray(events);

    // Create a new div for the displayed event
    const eventDiv = document.createElement('div');
    eventDiv.textContent = `${eventCounter}. ${events[0]}`; // Display event with number
    eventCounter++; // Increment the event counter

    // Append the event div to the container
    eventsContainer.appendChild(eventDiv);

    // Remove the displayed event from the array
    events.shift();

    if (events.length === 0) {
        alert('The last event will be displayed!');
    }
}

/**
 * Shuffle an array randomly.
 * @param {Array} array - The array to be shuffled.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
