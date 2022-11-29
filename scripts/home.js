const h1 = document.querySelector('h1');
const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')
var today;


function populateDate() {
    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    h1.textContent = today; // get the current date and display it
}
populateDate();

function populateCardsDynamically() { //function to populate the cards with information pulled from firestore
    db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").where("date", "==", (today)).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // appends the breakfast that user scheduled for today
            $("#todaysMeals").append(
                `
            <h2>Breakfast</h2>
            <button class = "recipe_card" id = "${doc.data().breakfast}">
                <div class="cards" id="top_card">
                    <img src="https://picsum.photos/111">
                    <div id="text_area">
                        <div id="title_area">
                            <h1 class="card_title" id="get_title_3">
                                ${doc.data().breakfast}
                            </h1>
                            <hr>
                        </div>

                        <div id="list_area">
                            <ul class="lists" id="card_list_1">

                            </ul>
                        </div>
                    </div>
                </div>
            </button>
            `
            ),
            // appends the lunch that user scheduled for today
                $("#todaysMeals").append(
                    `
                    <h2>Lunch</h2>
        <button class = "recipe_card" id = "${doc.data().lunch}">
            <div class="cards" id="top_card">
                <img src="https://picsum.photos/112">
                <div id="text_area">
                    <div id="title_area">
                        <h1 class="card_title" id="get_title_3">
                            ${doc.data().lunch}
                        </h1>
                        <hr>
                    </div>

                    <div id="list_area">
                        <ul class="lists" id="card_list_2">

                        </ul>
                    </div>
                </div>
            </div>
        </button>
        `
                ), 
                // appends the snack that user scheduled for today
                $("#todaysMeals").append(
                    `
                    <h2>Snack</h2>
        <button class = "recipe_card" id = "${doc.data().snack}">
            <div class="cards" id="top_card">
                <img src="https://picsum.photos/113">
                <div id="text_area">
                    <div id="title_area">
                        <h1 class="card_title" id="get_title_3">
                            ${doc.data().snack}
                        </h1>
                        <hr>
                    </div>

                    <div id="list_area">
                        <ul class="lists" id="card_list_3">

                        </ul>
                    </div>
                </div>
            </div>
        </button>
        `
                ), 
                // appends the dinner that user scheduled for today
                $("#todaysMeals").append(
                    `
                    <h2>Dinner</h2>
        <button class = "recipe_card" id = "${doc.data().dinner}">
            <div class="cards" id="top_card">
                <img src="https://picsum.photos/114">
                <div id="text_area">
                    <div id="title_area">
                        <h1 class="card_title" id="get_title_3">
                            ${doc.data().dinner}
                        </h1>
                        <hr>
                    </div>

                    <div id="list_area">
                        <ul class="lists" id="card_list_4">

                        </ul>
                    </div>
                </div>
            </div>
        </button>
        `
                )
        });
        return null;
    })
    // checks if there are scheduled meals for today, and if not, displays a message to tell users
    let check = $("#todaysMeals").val()
    if (check == "") {
        $("#todaysMeals").append(
            `
                    <h2>Dinner</h2>
        <button class = "recipe_card" id = "noSchedule">
            <div class="cards" id="top_card">
                <img src="https://picsum.photos/114">
                <div id="text_area">
                    <div id="title_area">
                        <h1 class="card_title" id="get_title_3">
                            No Schedule for today
                        </h1>
                        <hr>
                    </div>

                    <div id="list_area">
                        <ul class="lists" id="card_list_4">

                        </ul>
                    </div>
                </div>
            </div>
        </button>
        `
        )
    }
}
populateCardsDynamically();