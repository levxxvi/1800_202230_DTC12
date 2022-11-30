const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')
var breakfast = ""
var lunch = ""
var snack = ""
var dinner = ""

function grocerySkeleton() {

    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").doc(today).get()
        .then(rec_info => { // pulls all info from database
            breakfast = rec_info.data().breakfast;
            breakfast = breakfast.toLowerCase();
            lunch = rec_info.data().lunch;
            lunch = lunch.toLowerCase();
            snack = rec_info.data().snack;
            snack = snack.toLowerCase();
            dinner = rec_info.data().dinner;
            dinner = dinner.toLowerCase();
            console.log(breakfast, lunch, snack, dinner)
        })
}

function groceryBreakfast() {
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", breakfast)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var list = doc.data().ingredients;
                var list_len = list.length;
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $('#breakfast_list').append(`<li class="list_item"> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
                    </div>
                </li>`);
                }
            })
        })
}
function groceryLunch() {
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", lunch)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var list = doc.data().ingredients;
                var list_len = list.length;
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $('#lunch_list').append(`<li class="list_item"> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
                    </div>
                </li>`);
                }
            })
        })
}
function grocerySnack() {
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", snack)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var list = doc.data().ingredients;
                var list_len = list.length;
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $('#snack_list').append(`<li class="list_item"> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
                    </div>
                </li>`);
                }
            })
        })
}
function groceryDinner() {
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", dinner)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var list = doc.data().ingredients;
                var list_len = list.length;
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $('#dinner_list').append(`<li class="list_item"> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
                    </div>
                </li>`);
                }
            })
        })
}

setup = function () {
    grocerySkeleton()
    setTimeout(groceryBreakfast, 500)
    setTimeout(groceryLunch, 500)
    setTimeout(grocerySnack, 500)
    setTimeout(groceryDinner, 500)
}

$(document).ready(setup)

