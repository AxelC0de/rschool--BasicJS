- [x] построить массив с номерами месяцев от 0 до 11, и с их отношением в сезону (как в обьекте Date JS)

function getSeason() {
    month = document.forms.date.month.value;
    season = '';
    switch(month) {
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
    alert(season);
}

- [ ] получить из обьекта Date месяц