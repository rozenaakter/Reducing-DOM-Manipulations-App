const time = document.getElementById('time');
const showTime = new Date();
time.textContent = showTime;
time.style.fontSize = '35px'
time.style.color = 'blue'


function addItem() {
    const listContainer = document.getElementById('listContainer');
    const newItem = document.createElement('li');

    newItem.textContent = `list ${listContainer.childElementCount + 1}`;

    // Add event listener to the new item
    newItem.addEventListener('click', handleItemClick);

    // Append the new item to the container

    listContainer.appendChild(newItem);
}

// function to handle item click (event Delegation)

function handleItemClick(event) {
    alert(`You clicked on: ${event.target.textContent}`);
}

// Add event listener to the 'Add Item' button

document.getElementById('addItemBtn').addEventListener('click', addItem);