const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')

function addSchedule() {
    let Date = document.getElementById("date").value;
    let Breakfast = document.getElementById("breakfast").value;
    let Lunch = document.getElementById("lunch").value;
    let Snack = document.getElementById("snack").value;
    let Dinner = document.getElementById("dinner").value;
    //adds the input the user entered into the form to the database
    db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").doc(Date).set({
        date: Date,
        breakfast: Breakfast,
        lunch: Lunch,
        snack: Snack,
        dinner: Dinner
    }).then(() => {
        console.log("Document successfully written!");
        //redirects user to home page
        window.location.href = "../HTML/home.html";
    })
}

setup = function () {
    jQuery("#submitBtn").click(addSchedule);
}

$(document).ready(setup)