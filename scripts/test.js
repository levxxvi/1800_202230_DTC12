
function reader() { // read specific document
    var recipe = db.collection("added_recipes")

    recipe.doc("Peanut Butter & Jelly").get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}

function reader2() { // read all documents
    db.collection("added_recipes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().tag);
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

function reader3() { // checks all documents
    db.collection("added_recipes").where("ingredients", "includes", "Potatoes")  // array-contains checks arrays
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data().tag); //
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
}

setup = function () {
    reader3()
}

$(document).ready(setup)