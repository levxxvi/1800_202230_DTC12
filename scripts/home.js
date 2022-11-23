const h1 = document.querySelector('h1');

function populateDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    h1.textContent = today;
}
populateDate();

function populateCardsDynamically() {
    let mealCardTemplate = document.getElementById("mealCardTemplate");
    let mealCardGroup = document.getElementById("mealCardGroup");
    db.collection("users").doc(user.uid + "/" + user.displayName + "Schedule").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })

    db.collection("added_recipes").get()
        .then(allMeals => {
            allMeals.forEach(doc => {
                var mealName = doc.data().name; //gets the name field
                //var mealID = doc.data().code; //gets the unique ID field
                var mealIngredients = doc.data().length; //gets the length field
                let testMealCard = hikeCardTemplate.content.cloneNode(true);
                testMealCard.querySelector('.card-title').innerHTML = mealName; //equiv getElementByClassName
                testMealCard.querySelector('.card-ingredients').innerHTML = mealIngredients; //equiv getElementByClassName

                // testHikeCard.querySelector('a').onclick = () => setHikeData(hikeID);//equiv getElementByTagName
                // testHikeCard.querySelector('img').src = `./images/${hikeID}.jpg`;   //equiv getElementByTagName
                hikeCardGroup.appendChild(testHikeCard);
            })

        })
}
populateCardsDynamically();