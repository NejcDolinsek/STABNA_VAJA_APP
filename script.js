

    let timer;
    let isRunning = false;
    let minutes = 0;
    let hours = 0;

    function startStop() {
    if (isRunning) {
    clearInterval(timer);
    isRunning = false;
} else {
    hours = parseInt(document.getElementById('hours').value, 10) || 0;
    minutes = parseInt(document.getElementById('minutes').value, 10) || 0;

    // Validation check for hours
    if (hours > 23) {
    alert("Vnesite veljavno vrednost za ure (0-23).");
    return;
}

    // Validation check for minutes
    if (minutes > 59) {
    alert("Vnesite veljavno vrednost za minute (0-59).");
    return;
}

    updateDisplay();
    timer = setInterval(updateStopwatch, 10000); // Updated to 1000 milliseconds (1 second)
    isRunning = true;
}
}

    function reset() {
    clearInterval(timer);
    isRunning = false;
    minutes = 0;
    hours = 0;
    document.getElementById('hours').value = '0';
    document.getElementById('minutes').value = '0';
    updateDisplay();
    startStop(); // Added to restart the stopwatch after resetting
}

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

    updateDisplay();
}

    function updateDisplay() {
    const display = document.getElementById('stopwatch');
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}`;
}

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

    function displayEvents() {
    const eventsContainer = document.getElementById('events-container');

    if (events.length === 0) {
    alert('Vsi dogodki so prikazani!');
    return;
}

    shuffleArray(events);

    const eventDiv = document.createElement('div');
    eventDiv.textContent = `${eventCounter}. ${events[0]}`; // Display event with number
    eventCounter++; // Increment the event counter

    eventsContainer.appendChild(eventDiv);

    // Remove the displayed event from the array
    events.shift();

    if (events.length === 0) {
    alert('Prikazan bo zadnji dogodek!');
}
}

    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
}
}

