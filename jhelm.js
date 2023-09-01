// Function to get the current date and time
function getCurrentDateAndTime() {
    const dateTime = new Date();
    console.log(dateTime);
    return dateTime.toLocaleString();
  }
  
  // Target an HTML element to display the current date and time
  const dateDisplay = document.getElementById("date-container");
  
  // Set the innerHTML of the element to the current date and time returned by the function
  dateDisplay.innerHTML = getCurrentDateAndTime();
  



/* Get current date for website footer - from Sololearn Code Bits /////////////////////
function getTime() {
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
setInterval(getTime, 1000);
//console.log(getTime);

const printDate = document.getElementById("site-date")
const currentDate = document.createElement("getTime")
*/



// Have new tabs open from links clicked ////////////////////////////
/*
let newTab = document.getElementsByTagName("href");

for (var i = 0; i < newTab.length; i++) {
    newTab[i].setAttribute('target', '_blank');
}
*/



/* Have table on DOM page do a thing //////////////////////////////////////

function addToTable() {
    // Get what's in the text box

    // Make a new <tr> with info in <td> cells from data in text field

    // Add item to the table

    // Clear out text field after entry
}
*/