// countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]]) => 3

function countCats(arr){
let res = []
	arr = arr.flat(Infinity)
		for (const i of arr) {
			if (i === '^^') {
				res.push(i)
		}
}
	return console.log(res.length);
}

countCats([[0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2]])