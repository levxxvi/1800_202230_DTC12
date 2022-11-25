const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')
var breakfast = ""
var lunch = ""
var snack = ""
var dinner = ""

function grocerySkeleton() {
    db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").doc("2022-11-23").get()
        .then(rec_info => { // pulls all info from database
            breakfast = rec_info.data().breakfast;
            breakfast = breakfast.toLowerCase();
            lunch = rec_info.data().lunch;
            lunch = lunch.toLowerCase();
            snack = rec_info.data().snack;
            snack = snack.toLowerCase();
            dinner = rec_info.data().dinner;
            dinner = dinner.toLowerCase();
            console.log(breakfast, lunch, dinner, snack)
        })

    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", breakfast)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(breakfast)
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

    // db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", lunch) // search by name for documents
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(lunch)
    //             let list = doc.data().ingredients
    //             let list_len = list.length
    //             for (let i = 0; i < list_len; i++) { // add list items to card
    //                 $('#breakfast_list').append(`<li class="list_item"> 
    //                 <div class="form-check form-check-inline">
    //                     <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
    //                     <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
    //                 </div>
    //             </li>`);
    //             }
    //         })
    //     })
    // db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", snack) // search by name for documents
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(snack)
    //             let list = doc.data().ingredients
    //             let list_len = list.length
    //             for (let i = 0; i < list_len; i++) { // add list items to card
    //                 $('#breakfast_list').append(`<li class="list_item"> 
    //                 <div class="form-check form-check-inline">
    //                     <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
    //                     <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
    //                 </div>
    //             </li>`);
    //             }
    //         })
    //     })
    // db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", dinner) // search by name for documents
    //     .get()
    //     .then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(dinner)
    //             let list = doc.data().ingredients
    //             let list_len = list.length
    //             for (let i = 0; i < list_len; i++) { // add list items to card
    //                 $('#breakfast_list').append(`<li class="list_item"> 
    //                 <div class="form-check form-check-inline">
    //                     <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
    //                     <label class="form-check-label" for="dinner"> &nbsp; ${list[i]}</label>
    //                 </div>
    //             </li>`);
    //             }
    //         })
    //     })
}
grocerySkeleton();  //invoke the function
