// Events script
let events = [];
let eventCounter = 1;

document.getElementById('prikaz-button').addEventListener('click', () => {
    showFirstEvent();
});

async function fetchEvents() {
    try {
        const response = await fetch('dogodki.csv');
        const data = await response.text();
        events = parseCSV(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchEvents);

function parseCSV(csvData) {
    let rows = csvData.split('\n');
    let result = [];

    for (let i = 1; i < rows.length; i++) {
        let columns = rows[i].split(';');
        let event = columns[0].trim();
        if (event) {
            result.push(event);
        }
    }
    return result;
}

function showFirstEvent() {
    const eventsContainer = document.getElementById('events-container');

    if (events.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Ni več dogodkov za prikaz!',
            customClass: {
                container: 'sweet-alert',
            },
        });
        return;
    }

    shuffleArray(events);

    const eventDiv = document.createElement('div');
    eventDiv.textContent = `${eventCounter}. ${events[0]}`;
    eventCounter++;

    eventsContainer.appendChild(eventDiv);

    events.shift();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
