// Skip the values from loop

var numbers = [23, 45, 656, 78, 67];

for (let i = 0; i < numbers.length; i++) {
	const number = numbers[i];
	console.log(number);
	if (number > 100) {
		continue;
	}
}

var items = ["pen", "phone", "pad", "notebook"];

for (let i = 0; i < items.length; i++) {
	const item = items[i];
	console.log(item);
	if (item === "pad") {
		continue;
	}
}
