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
console.log(jsonData);