function transform(arr) {

// TODO
	if (!Array.isArray(arr)) {
		console.log('Error');

	}

	let res = []

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== '--discard-next' && arr[i] !== '--discard-prev' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
			res.push(arr[i])
		}

		if (arr[i - 1] === '--discard-next') {
			res.pop()
		}

		if (arr[i + 1] === '--discard-prev') {
			res.pop()
		}

		if (arr[i - 1] === '--double-next') {

			res.push(arr[i])
		}

		if (arr[i + 1] === '--double-prev') {

			res.push(arr[i])
		}

	}

	// ===============================

	// switch (expr) {
	// 	case "Oranges":
	// 		console.log("Oranges are $0.59 a pound.");
	// 		break;
	// 	case "Apples":
	// 		console.log("Apples are $0.32 a pound.");
	// 		break;
	// 	case "Bananas":
	// 		console.log("Bananas are $0.48 a pound.");
	// 		break;
	// 	case "Cherries":
	// 		console.log("Cherries are $3.00 a pound.");
	// 		break;
	// 	case "Mangoes":
	// 	case "Papayas":
	// 		console.log("Mangoes and papayas are $2.79 a pound.");
	// 		break;
	// 	default:
	// 		console.log("Sorry, we are out of " + expr + ".");
	// }







	return console.log(res);


}

// transform([1, 2, 3, '--double-next', 4, 5])

// transform("1, 2, 3, '--double-next', 4, 5")
// transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]

// transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]

transform([1, 2, 3, '--discard-prev', 4, 5])