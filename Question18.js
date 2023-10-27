let days = document.getElementsByClassName("day");

let date = new Date();
currentCalendar(date);
function show() {
    for (let dayCount = 0; dayCount < 35; dayCount++) {
            days[dayCount].innerHTML = "";

    }
    var a = document.getElementById("year");
    var b = document.getElementById("month");
    var year = a.value;
    var month = b.value -1;
    let date = new Date(year, month);
    currentCalendar(date);

}
function currentCalendar(date) {
    let current = date;
    //current month first date
    current.setDate(1);
    let startDate = current.getDay();
    let countdate = 1;
    //go next month
    current.setMonth(current.getMonth() + 1);
    current.setDate(0);//currentd month end date
    let enddate = current.getDate();
    for (let dayCount = startDate; dayCount < 35; dayCount++) {
        if (countdate <= enddate)
            days[dayCount].innerHTML = countdate++;

    }
}

