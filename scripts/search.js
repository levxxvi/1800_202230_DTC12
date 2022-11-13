function name_search() {
    $("#recipe_box").html("")
    let photonum = 111
    let card_num = 0
    let y = jQuery("#search").val();
    y = y.toLowerCase();
    db.collection("added_recipes").where("name", "==", y)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                card_num += 1
                $("#recipe_box").append(`
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
                    `
                )
                photonum += 1
                let list = doc.data().tag
                let list_len = list.length
                for (let i = 0; i < list_len; i++) {
                    $(`#card_list_${card_num}`).append('<li class="list_item">' + list[i] + '</li>');
                }

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    $("#search").val('');
}

function tag_search() {
    $("#recipe_box").html("")
    let photonum = 111
    let card_num = 0
    let z = jQuery("#search").val();
    z = z.toLowerCase();
    db.collection("added_recipes").where("tag", "array-contains", z)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                card_num += 1
                $("#recipe_box").append(`
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
                    `
                )
                photonum += 1
                let list = doc.data().tag
                let list_len = list.length
                for (let i = 0; i < list_len; i++) {
                    $(`#card_list_${card_num}`).append('<li class="list_item">' + list[i] + '</li>');
                }

            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    $("#search").val('');
}


setup = function () {
    jQuery("#search_names").click(name_search);
    jQuery("#search_tags").click(tag_search);
}

$(document).ready(setup)