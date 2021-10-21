// onload currentDate()
window.onload = currentDate();
// window.onload = forecast();

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

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.599512&lon=120.984222&exclude=current,minutely,hourly,alerts&units=metric&appid=67e1ee4b132ec689f22552812006e566`)

    .then(Response=>Response.json())

    .then(data => {
        let i = 0;
        let tableBody = document.getElementById('tableBody');

        while (i < 8) {
            let dailyTemp = data['daily'][i]['temp']['day'];
            
            let newDay = dayList[day];
            console.log(newDay);

            let rowTemplate = 
            `<tr>
                <td>${newDay}, ${date} ${updatedMonth} ${year}: ${dailyTemp}℃</td>
            </tr>`;

            tableBody.innerHTML = tableBody.innerHTML + rowTemplate;

            i++;

            console.log("This is the daily temp: " + dailyTemp + "℃");

            if (day < 6) {
                newDay = dayList[day++];
            } else {
                day = 0;
            }

            console.log("This is the day updating: " + day);
            
            if (date < 31) {
                date++;
            } else {
                date = 1;
            }
            
            console.log("This is the date updating: " + date);

        };
    });

};

// function forecast() {
    // fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.599512&lon=120.984222&exclude=current,minutely,hourly,alerts&units=metric&appid=67e1ee4b132ec689f22552812006e566`)

    // .then(Response=>Response.json())

    // .then(data => {
    //     let i = 0;
    //     let tableBody = document.getElementById('tableBody');

    //     while (i < 7) {
    //         let dailyTemp = data['daily'][i]['temp']['day'];

    //         let rowTemplate = 
    //         `<tr>
    //             <td>${dailyTemp}℃</td>
    //         </tr>`;

    //         tableBody.innerHTML = tableBody.innerHTML + rowTemplate;

    //         i++;

    //         console.log(dailyTemp + "℃");
    //     };
    // });
// };