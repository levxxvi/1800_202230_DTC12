const h1 = document.querySelector('h1');
const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')
var today;


function populateDate() {
    // today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = yyyy + '-' + mm + '-' + dd;

    today = "2022-11-23";

    h1.textContent = today;
}
populateDate();

function populateCardsDynamically() {
    // let mealCardTemplate = document.getElementById("mealCardTemplate");
    // let mealCardGroup = document.getElementById("mealCardGroup");
    // db.collection("users").doc(user.uid + "/" + user.displayName + "Schedule").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc.id, " => ", doc.data());
    //     });
    // })

    // db.collection("added_recipes").get()
    //     .then(allMeals => {
    //         allMeals.forEach(doc => {
    //             var mealName = doc.data().name; //gets the name field
    //             //var mealID = doc.data().code; //gets the unique ID field
    //             var mealIngredients = doc.data().length; //gets the length field
    //             let testMealCard = hikeCardTemplate.content.cloneNode(true);
    //             testMealCard.querySelector('.card-title').innerHTML = mealName; //equiv getElementByClassName
    //             testMealCard.querySelector('.card-ingredients').innerHTML = mealIngredients; //equiv getElementByClassName

    //             // testHikeCard.querySelector('a').onclick = () => setHikeData(hikeID);//equiv getElementByTagName
    //             // testHikeCard.querySelector('img').src = `./images/${hikeID}.jpg`;   //equiv getElementByTagName
    //             hikeCardGroup.appendChild(testHikeCard);
    //         })

    //     })

    let photonum = 111
    let card_num = 0

    db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").doc(today).get().then((doc) => {
        console.log(uUid, uDisplayName);
        console.log(doc.id, " => ", doc.data());
        $("#todaysMeals").append(
            `
        <button class = "recipe_card" id = "${doc.data().name}">
            <div class="cards" id="top_card">
                <img src="https://picsum.photos/${photonum}">
                <div id="text_area">
                    <div id="title_area">
                        <h1 class="card_title" id="get_title_3">
                            ${doc.data().name}
                        </h1>
                        <hr>
                    </div>

                    <div id="list_area">
                        <ul class="lists" id="card_list_${card_num}">

                        </ul>
                    </div>
                </div>
            </div>
        </button>
        `
        )
        photonum += 1
        let list = doc.data().tag
        let list_len = list.length
        for (let i = 0; i < list_len; i++) {
            $(`#card_list_${card_num}`).append('<li class="list_item">' + list[i] + '</li>');
        }

    });
    return null;
}
populateCardsDynamically();