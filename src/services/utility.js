const moment = require('moment');

module.exports = {
    randomDate,
    randomNumber,
    currentDayDK
};

/* Sort function WIP */
/* function sortListOfObjects (list, sortBy) {
    let sortedList = list.sort((a, b) => {
            if(a.firstName < b.firstName) return -1;
            if(a.firstName > b.firstName) return 1;
            return 0;
        });
    
    return sortedList;

}; */

function randomDate() {
    const someDate = randomNumber(1,27) + "-" + randomNumber(1, 12) + "-2017";
    const randomDate = moment(someDate, "D-M-YYYY").format("DD/M/YY");
    return randomDate;
};

function randomNumber(min, max, decimals) {
    let randomNumber = Math.random() * (max - min) + min;
    return randomNumber.toFixed(decimals);
};

function currentDayDK() {
    const day = moment().format("dddd");
    let dkDay = "";
    if(day === "Monday") {
        dkDay = "Mandag";
    } else if (day === "Tuesday") {
        dkDay = "Tirsdag";
    } else if (day === "Wednesday") {
        dkDay = "Onsdag";
    } else if (day === "Thursday") {
        dkDay = "Torsdag";
    } else if (day === "Friday") {
        dkDay = "Fredag";
    } else if (day === "Saturday") {
        dkDay = "Lørdag";
    } else if (day === "Sunday") {
        dkDay = "Søndag";
    }

    return dkDay;
}