
// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
function createDreamTeam(arr){
	let arrStr = []
		for (const i of arr) {
			if (typeof i === 'string') {
				arrStr.push(i)
			}
	}

	let arrFirst = []
	for (let i of arrStr) {
	i = i.substring(0,1)
		arrFirst.push(i)
	}

	arrFirst = [... new Set(arrFirst)]

	arrFirst.sort((a, b) => a.localeCompare(b));
	arrFirst = arrFirst.join('')

	return console.log(arrFirst);
}
createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])
