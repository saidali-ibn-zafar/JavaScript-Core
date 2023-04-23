const data = [
  {
    name: "John Smith",
    age: 35,
    gender: "Male",
    profession: "Software Engineer",
  },
  {
    name: "Jane Doe",
    age: 28,
    gender: "Female",
    profession: "Marketing Manager",
  },
  {
    name: "Michael Johnson",
    age: 42,
    gender: "Male",
    profession: "Financial Analyst",
  },
  {
    name: "Emily Wilson",
    age: 23,
    gender: "Female",
    profession: "Graphic Designer",
  },
  {
    name: "William Davis",
    age: 47,
    gender: "Male",
    profession: "Sales Manager",
  },
  {
    name: "Sophia Lee",
    age: 31,
    gender: "Female",
    profession: "Doctor",
  },
  {
    name: "David Chen",
    age: 56,
    gender: "Male",
    profession: "Lawyer",
  },
  {
    name: "Amanda Jackson",
    age: 27,
    gender: "Female",
    profession: "Software Developer",
  },
  {
    name: "Robert Garcia",
    age: 39,
    gender: "Male",
    profession: "Business Analyst",
  },
  {
    name: "Maria Rodriguez",
    age: 33,
    gender: "Female",
    profession: "Project Manager",
  },
  {
    name: "James Martin",
    age: 49,
    gender: "Male",
    profession: "Marketing Director",
  },
  {
    name: "Jennifer Hernandez",
    age: 26,
    gender: "Female",
    profession: "Web Designer",
  },
  {
    name: "Richard Kim",
    age: 43,
    gender: "Male",
    profession: "Doctor",
  },
  {
    name: "Melissa Thompson",
    age: 35,
    gender: "Female",
    profession: "Software Engineer",
  },
  {
    name: "Andrew Wilson",
    age: 50,
    gender: "Male",
    profession: "Product Manager",
  },
  {
    name: "Stephanie Wright",
    age: 29,
    gender: "Female",
    profession: "Data Analyst",
  },
  {
    name: "Christopher Allen",
    age: 37,
    gender: "Male",
    profession: "IT Manager",
  },
  {
    name: "Jessica Clark",
    age: 25,
    gender: "Female",
    profession: "Software Developer",
  },
  {
    name: "Daniel Baker",
    age: 44,
    gender: "Male",
    profession: "Business Development Manager",
  },
  {
    name: "Laura Martinez",
    age: 32,
    gender: "Female",
    profession: "Accountant",
  },
  {
    name: "Thomas Taylor",
    age: 48,
    gender: "Male",
    profession: "Project Manager",
  },
];

const tableContainer = document.getElementById("tableContainer");
const table = document.createElement("table");

// creating a header row
const headerRow = document.createElement("tr");
for (const headerKey in data[0]) {
  const headerCell = document.createElement("th");
  headerCell.textContent = capitalizeFirstLetter(headerKey);
  headerRow.appendChild(headerCell);
}
table.appendChild(headerRow);

for (const userInfo of data) {
  const row = document.createElement("tr");

  for (const info in userInfo) {
    const cell = document.createElement("td");
    // console.log(info);
    // console.log(userInfo[info]);
    cell.textContent = userInfo[info];
    row.appendChild(cell);
  }

  table.appendChild(row);
}
tableContainer.appendChild(table);

// CAPITALIZED FIRST LETTER
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

//FINDING THE OLDEST USER
function findOldestUser(data) {
  let oldestUser = null;
  for (const userInfo of data) {
    if (!oldestUser || userInfo.age > oldestUser.age) {
      oldestUser = userInfo;
    }
  }
  return oldestUser;
}

const oldestUser = findOldestUser(data);

const oldestUserInfo = document.querySelector(".oldestUserInfo");
const UL = document.createElement("ul");

// const oldestUser = findOldestUser(data); // Assuming you have the findOldestUser function defined

for (const key in oldestUser) {
  const LI = document.createElement("li");
  LI.textContent = capitalizeFirstLetter(key) + ":  " + oldestUser[key];
  UL.appendChild(LI);
}

oldestUserInfo.appendChild(UL);


// FINDING THE NUMBER OF USERS =================================================================
const usersNum = document.querySelector('.usersNum');
usersNum.textContent = data.length;