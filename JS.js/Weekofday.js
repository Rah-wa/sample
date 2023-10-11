let dayOfWeek = 3;
let nameOfDay;

switch (dayOfWeek) {
    case 1:
        nameOfDay = 'Monday';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        break;
    case 4:
        nameOfDay = 'Thursday';
        break;
    case 5:
        nameOfDay = 'Friday';
        break;
    case 6:
        nameOfDay = 'Saturday';
        break;
    case 7:
        nameOfDay = 'Sunday';
        break;
    default:
        console.error('Wrong input for the week days, please try again');
}

if (dayOfWeek <= 7 && dayOfWeek >= 1) {
    console.log(`
    day of the week: ${nameOfDay}
    input day: ${dayOfWeek}
    `);
}
