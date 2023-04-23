let numPeople = 10;

// array as global vars
const columns = [
  { name: "id", generator: () => faker.random.uuid() },
  { name: "firstName", generator: () => faker.name.firstName() },
  { name: "lastName", generator: () => faker.name.lastName() },
  { name: "email", generator: () => faker.internet.email() },
  { name: "phone", generator: () => faker.phone.phoneNumber() },
  { name: "address", generator: () => faker.address.streetAddress() },
  { name: "city", generator: () => faker.address.city() },
  { name: "state", generator: () => faker.address.state() },
  { name: "country", generator: () => faker.address.country() },
  { name: "zipCode", generator: () => faker.address.zipCode() },
];

function generateData(numRows) {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (const column of columns) {
      row[column.name] = column.generator();
    }
    data.push(row);
  }

  return data;
}

const jsonData = generateData(numPeople);

const body = document.querySelector("body");
// =============================================================

const inputContainer = document.getElementById("inputContainer");

// creating input
const searchInput = document.createElement("input");
const btnSearch = document.createElement("button");
btnSearch.textContent = "Search";

const NumOfPeople = document.createElement("div");
NumOfPeople.textContent = `Number of people: ${numPeople}`;

const btnDecrease = document.createElement("span");
btnDecrease.textContent = "-";
const btnIncrease = document.createElement("span");
btnIncrease.textContent = "+";

btnIncrease.addEventListener("click", function () {
  numPeople++;
  NumOfPeople.textContent = `Number of people: ${numPeople}`;
  const newData = generateData(1);
  const tableRow = document.createElement("tr");
  for (const column of columns) {
    const tableCell = document.createElement("td");
    tableCell.textContent = newData[0][column.name];
    tableRow.appendChild(tableCell);
  }
  table.appendChild(tableRow);
});

btnDecrease.addEventListener("click", function () {
  if (numPeople > 1) {
    numPeople--;
    NumOfPeople.textContent = `Number of people: ${numPeople}`;
    const tableRows = table.getElementsByTagName("tr");
    if (tableRows.length > 1) {
      table.removeChild(tableRows[tableRows.length - 1]);
    }
  } else {
    alert("We need at least one.");
  }
});

inputContainer.appendChild(searchInput);
inputContainer.appendChild(btnSearch);
inputContainer.appendChild(NumOfPeople);
inputContainer.appendChild(btnDecrease);
inputContainer.appendChild(btnIncrease);

// =============================================================

// creating table container
const table = document.getElementById("tableContainer");

// creating table row
const tableHeaderRow = document.createElement("tr");

// then we are getting the headers like(id,firstName and so on)
for (const column of columns) {
  const tableHeaderCell = document.createElement("th");
  tableHeaderCell.style.padding = 20 + "px " + 8 + "px";
  tableHeaderCell.textContent = capitalizeFirstLetter(column.name);
  tableHeaderRow.appendChild(tableHeaderCell);
}

// Appending the table header row to the table
table.appendChild(tableHeaderRow);

// creating table rows and cells
for (const row of jsonData) {
  const tableRow = document.createElement("tr");
  for (const column in row) {
    const tableCell = document.createElement("td");
    tableCell.textContent = row[column];
    tableRow.appendChild(tableCell);
  }
  table.appendChild(tableRow);
}

// function for capitalizing the word (words ...)
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// search btn eventListener 
btnSearch.addEventListener("click", function () {
  const rows = table.getElementsByTagName("tr");
  for (const row of rows) {
    const cells = row.getElementsByTagName("td");
    for (const cell of cells) {
      if (cell.textContent.includes(searchInput.value)) {
        row.classList.add("newClass");
        break;
      } else {
        row.style.display = "none";
      }
    }
  }
});
