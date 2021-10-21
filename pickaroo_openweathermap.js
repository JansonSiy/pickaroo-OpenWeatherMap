// onload function
window.onload = forecast();

function forecast() {
    // STEP 1 - Getting the current date
    let currentDate = new Date();
    // console.log(currentDate)

    let day = currentDate.getDay();
    // console.log(day)

    let month = currentDate.getMonth();
    // console.log(month)

    let date = currentDate.getDate();
    // console.log(date)

    let year = currentDate.getFullYear();
    // console.log(year)

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

    let updatedMonth = monthList[month];
    // console.log(updatedMonth);
    
    let displayDate = document.getElementById('displayDate');

    displayDate.innerHTML = updatedDay + 
                            ", " + 
                            date +
                            " " +
                            updatedMonth + 
                            " " +
                            year;

    // STEP 2 - fetch API
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=14.599512&lon=120.984222&exclude=current,minutely,hourly,alerts&units=metric&appid=67e1ee4b132ec689f22552812006e566`)

    .then(Response=>Response.json())

    .then(data => {
        // i is the index
        let i = 0;
        let tableBody = document.getElementById('tableBody');

        while (i < 8) {
            // loop through the data's index
            let dailyTemp = data['daily'][i]['temp']['day'];
            
            let newDay = dayList[day];
            // console.log(newDay);

            // insert a new row every loop
            let rowTemplate = 
            `<tr>
                <td>${newDay},</td>
                <td>${date}</td>
                <td>${updatedMonth}</td>
                <td>${year}:</td>
                <td>${dailyTemp}℃</td>
            </tr>`;

            tableBody.innerHTML = tableBody.innerHTML + rowTemplate;

            // index must increment
            i++;

            // Daily Temp
            // console.log("This is the daily temp: " + dailyTemp + "℃");

            // Updating of day
            // if the index is less than 6, increment, else, reset to 0
            if (day < 6) {
                newDay = dayList[day++];
            } else {
                day = 0;
            }
            // console.log("This is the day updating: " + newDay);
            
            // Updating of date
            // if the integer is less than 31, increment, else restart to 1 (ONLY FOR OCTOBER)
            if (date < 31) {
                date++;
            } else {
                date = 1;
            }
            // console.log("This is the date updating: " + date);
        };
    });
};