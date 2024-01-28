
function getTime() {
    let now = new Date();

    // Time
    let hours_str = now.getHours().toString().padStart(2, '0');
    let hours_int = Number(hours_str);

    if  (hours_int > 12) {
        hours_int = hours_int - 12;
    } else {
        
    }

    let hours = hours_int.toString();
    let minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    let session = now.getHours() >= 12 ? 'PM' : 'AM';
    let time = `${hours}:${minutes}:${seconds} ${session}`;
    document.getElementById('time').innerText = time;


    // Date
    let year = now.getFullYear();

    let month_str = now.getMonth() + 1;
    let month = ""

    if (month_str == "1") {
        month = "January";
    } else if (month_str == "2") {
        month = "February";
    } else if (month_str == "3") {
        month = "March";
    } else if (month_str == "4") {
        month = "April";
    } else if (month_str == "5") {
        month = "May";
    } else if (month_str == "6") {
        month = "June";
    } else if (month_str == "7") {
        month = "July";
    } else if (month_str == "8") {
        month = "August";
    } else if (month_str == "9") {
        month = "September";
    } else if (month_str == "10") {
        month = "October";
    } else if (month_str == "11") {
        month = "November";
    } else if (month_str == "12") {
        month = "December";
    }

    let day = now.getDate();
    let date = `${month} ${day}, ${year}`
    document.getElementById('date').innerText = date;

  }
  
  setInterval(getTime, 1000);
  
  getTime(); // Initialize the clock