const userList = [
	{
		address: 'Anglesea Street Cork',
		phone: '+353892522216',
		age: 35,
	},
	{
		name: 'Shimul',
		phone: '+353892522216',
	},
	{
		name: 'Shafayet',
		address: 'Anglesea Street Cork',
		phone: null,
		age: 35,
	},
];

userList.forEach(({ name, address, phone, age }) => {
	const isNotFound = 'Not Found';

	const p = document.createElement('p');
	const userInfo = document.querySelector('.user-info');
	p.innerHTML = ` Name: ${name || isNotFound}  Address: ${
		address || isNotFound
	} Phone: ${phone || isNotFound} Age: ${age || isNotFound}`;
	userInfo.appendChild(p);
});

const numbers = [undefined, 1, 2, 3, null, 4, 5, 6, 'jamela'];

const sum = numbers.reduce((preValue, currentValue) => {
	return typeof currentValue === 'number' ? preValue + currentValue : preValue;
}, 0);

console.log(sum);
