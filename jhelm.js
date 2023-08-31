// Get current date for website footer - from Sololearn Code Bits
function printTime() {
    let d = new Date();
    let hours = d.getHours();
    let mins = d.getMinutes();
    let secs = d.getSeconds();
    let dayTime = true;

    // How to configure if AM vs. PM
    if (hours >= 12){
        dayTime = "PM";
    } else {
        dayTime = "AM";
    }
    
    // Hwo to configure if less than 10 minutes
    if (mins < 10){
        mins = "0"+mins;
    }

    // How to configure if less than 10 seconds
        if (secs < 10){
        secs = "0"+secs;
    }
    
    let timeZone = -1;
    // Timezone equals time from Eastern time (CT)
    
    document.body.innerHTML = (Math.floor(hours/2)+(timeZone))+":"+mins+":"+secs+dayTime;
    //console.log((hours/2)+":"+mins+":"+secs+dayTime);
    //console.log(hours+":"+mins+":"+secs);
}
setInterval(printTime, 1000);
console.log(printTime);

document.getElementById("currentDate").innerHTML = printTime
