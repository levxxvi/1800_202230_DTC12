function cardSkeleton() {
    let photonum = 111
    let card_num = 0
    db.collection("added_recipes")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { // get all recipes
                card_num += 1
                // populate a recipe card to the page
                $("#search_cards").append(`
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
                `)
                photonum += 1
                let list = doc.data().tag
                let list_len = list.length
                for (let i = 0; i < list_len; i++) { // list items below the recipe
                    $(`#card_list_${card_num}`).append('<li class="list_item">' + list[i] + '</li>');
                }

            });
        })
        .catch((error) => { // catch errors
            console.log("Error getting documents: ", error);
        });

}
cardSkeleton(); //invoke the function