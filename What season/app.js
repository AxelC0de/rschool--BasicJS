let givenDate = new Date(2020, 02, 25);
let month = givenDate.getMonth();
console.log(month);




function getSeason() {
	season = '';
	switch (month) {
		case '12':
		case '1':
		case '2':
			season = 'winter';
			break;
		case '3':
		case '4':
		case '5':
			season = 'spring';
			break;
		case '6':
		case '7':
		case '8':
			season = 'summer';
			break;
		case '9':
		case '10':
		case '11':
			season = 'fall';
			break;
	}
	console.log(season);
}

getSeason(month)