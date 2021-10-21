// onload currentDate()
window.onload = currentDate();

function currentDate() {
    let currentDate = new Date();
    // console.log(currentDate)
    // Thu Oct 21 2021 21:26:16 GMT+0800 (Philippine Standard Time)
    let day = currentDate.getDay();
    // console.log(day)
    // 4
    let month = currentDate.getMonth();
    // console.log(month)
    // 9
    let date = currentDate.getDate();
    // console.log(date)
    // 21
    let year = currentDate.getFullYear();
    // console.log(year)
    // 2021

    let monthList = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];

    let dayList = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];

    // day & month will serve as the index
    let updatedDay = dayList[day];
    // console.log(updatedDay);
    // Thu

    let updatedMonth = monthList[month];
    // console.log(updatedMonth);
    // Oct
    
    let displayDate = document.getElementById('displayDate');

    displayDate.innerHTML = updatedDay + 
                            ", " + 
                            date +
                            " " +
                            updatedMonth + 
                            " " +
                            year;
};