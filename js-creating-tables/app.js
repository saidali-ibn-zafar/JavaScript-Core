function generateData(numRows) {
    const data = [];
    const columns = [
        { name: 'id', generator: () => faker.random.uuid() },
        { name: 'firstName', generator: () => faker.name.firstName() },
        { name: 'lastName', generator: () => faker.name.lastName() },
        { name: 'email', generator: () => faker.internet.email() },
        { name: 'phone', generator: () => faker.phone.phoneNumber() },
        { name: 'address', generator: () => faker.address.streetAddress() },
        { name: 'city', generator: () => faker.address.city() },
        { name: 'state', generator: () => faker.address.state() },
        { name: 'country', generator: () => faker.address.country() },
        { name: 'zipCode', generator: () => faker.address.zipCode() },
    ];

    for (let i = 0; i < numRows; i++) {
        const row = {};
        for (const column of columns) {
            row[column.name] = column.generator();
        }
        data.push(row);
    }

    return data;
}

const jsonData = generateData(200);

// Create table element
const table = document.createElement('table');

// Create table header row
const headerRow = document.createElement('tr');
for (const column of columns) {
    const th = document.createElement('th');
    th.textContent = column.name;
    headerRow.appendChild(th);
}
table.appendChild(headerRow);

// Create table data rows
for (const row of jsonData) {
    const tr = document.createElement('tr');
    for (const column of columns) {
        const td = document.createElement('td');
        td.textContent = row[column.name];
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

// Append table to a container element in the HTML
const container = document.getElementById('tableContainer'); 
container.appendChild(table);
