function name_search() {
    $("#search_cards").html("") // take user search
    let photonum = 111
    let card_num = 0
    let name_search = jQuery("#search").val();
    name_search = name_search.toLowerCase();
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("name", "==", name_search) // search by name for documents
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => { // find all recipes
                card_num += 1
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
                        `
                )
                photonum += 1
                let list = doc.data().tag
                let list_len = list.length
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $(`#card_list_${card_num}`).append('<li class="list_item">' + list[i] + '</li>');
                }

            });
        })
        .catch((error) => { // catch error
            console.log("Error getting documents: ", error);
        });
    $("#search").val('');
}

function tag_search() {
    $("#search_cards").html("") // take user search
    let photonum = 111
    let card_num = 0
    let tag_search = jQuery("#search").val();
    tag_search = tag_search.toLowerCase();
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").where("tag", "array-contains", tag_search) // find documents by name
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                card_num += 1
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
                    `
                )
                photonum += 1
                let list_items = doc.data().tag
                let list_len = list_items.length
                for (let i = 0; i < list_len; i++) { // add list items to card
                    $(`#card_list_${card_num}`).append('<li class="list_item">' + list_items[i] + '</li>');
                }

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error); // catch errors
        });
    $("#search").val('');
}


setup = function () {
    jQuery("#search_names").click(name_search); // search by name
    jQuery("#search_tags").click(tag_search); // search by tags
}

$(document).ready(setup)