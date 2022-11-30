const tags = []; // tags array
var doc_name = "" // recipe name



function adder_tag() { // pull tags from html, format them, add them to a array
    let tag = tags.length // format tags
    let z = jQuery("#recipe_tags").val();
    z = z.toLowerCase();
    if (z != "") { // add to array
        tags.push(z);
        $("#tag_list").append(`<li class="list_item"> <button id = "${tag}" class = "remove_tag"> ${z} </button> </li>`);
        $("#recipe_tags").val('');
    }
}

const ingred = []; // ingredient array
function adder_ing() { // pull ingredients from html, format them, add it to a array
    let ing = ingred.length // format items
    let x = jQuery("#recipe_ingred").val();
    x = x.toLowerCase();
    if (x != "") { // add to array
        ingred.push(x);
        $("#ingred_list").append(`<li class="list_item"> <button id = "${ing}" class = "remove_ing"> ${x} </button> </li>`);
        $("#recipe_ingred").val('');
    }
}

function call_cancel() { // call the reload function
    reload()
}

function call_add() { // add information to database


    let details = jQuery("#details_form").val();   // save user details


    let b = jQuery("#breakfast:checked").val();
    if (b == "breakfast") { // save if breakfast item 
        b = true

    } else {
        b = false
    }

    let c = jQuery("#lunch:checked").val(); // save if lunch item 
    if (c == "lunch") {
        c = true

    } else {
        c = false
    }

    let d = jQuery("#snack:checked").val(); // save if snack item 
    if (d == "snack") {
        d = true

    } else {
        d = false
    }

    let e = jQuery("#dinner:checked").val(); // save if dinner item 
    if (e == "dinner") {
        e = true

    } else {
        e = false
    }

    let f = jQuery("#recipe_link").val(); // save link item 

    if ((b != true && c != true && d != true && e != true) || (f == "")) { // check if all required info is present
        jQuery("#error").html("Error: one or more required fields is missing")
    } else { // ad meal time to tags
        if (b == true) {
            tags.push("breakfast");
        }
        if (c == true) {
            tags.push("lunch");
        }
        if (d == true) {
            tags.push("snack");
        }
        if (e == true) {
            tags.push("dinner");
        }

        len = tags.length;
        for (i = 0; i < len; i++)
            if (tags[i] != undefined) { tags.push(tags[i]); } // remove empty tags
        tags.splice(0, len);

        len = ingred.length;
        for (i = 0; i < len; i++)
            if (ingred[i] != undefined) { ingred.push(ingred[i]); } // remove empty ingredients
        ingred.splice(0, len);
        db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").doc(doc_name).set({ // push to firebase
            name: doc_name,
            breakfast: b,
            lunch: c,
            snack: d,
            dinner: e,
            tag: tags,
            ingredients: ingred,
            description: details,
            link: f,
        })
        setTimeout(reload, 500) // call reload function
    }
}

function delete_function_tag() { // remove a tag from the array
    tag = jQuery(this).attr('id') // find tag based on button id
    delete tags[tag]; // remove tag and button
    jQuery(this).parent().remove()
}

function delete_function_ing() { // remove a ingredient from the array
    ing = jQuery(this).attr('id')  // find ingredient based on button id
    delete ingred[ing]; // remove ingredient and button
    jQuery(this).parent().remove()
}


function pop_info() {
    var recipe = localStorage.getItem("rec_name")
    db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").doc(recipe).get().then(rec_info => { // pulls all info from database
        var doc_tags = rec_info.data().tag;
        var doc_ing = rec_info.data().ingredients;

        if ((doc_tags).includes("breakfast")) { // populates check buttons
            document.getElementById("breakfast").checked = true;
        }
        if ((doc_tags).includes("lunch")) { // populates check buttons
            document.getElementById("lunch").checked = true;
        }
        if ((doc_tags).includes("snack")) { // populates check buttons
            document.getElementById("snack").checked = true;
        }
        if ((doc_tags).includes("dinner")) { // populates check buttons
            document.getElementById("dinner").checked = true;
        }

        for (let i = 0; i < doc_tags.length; i++) {  // populate tags
            if (doc_tags[i] != "breakfast" && doc_tags[i] != "lunch" && doc_tags[i] != "snack" && doc_tags[i] != "dinner") {
                tags.push(doc_tags[i]);
                $("#tag_list").append(`<li class="list_item"> <button id = "${tags.length - 1}" class = "remove_tag"> ${doc_tags[i]} </button> </li>`);
            }
        }

        for (let i = 0; i < doc_ing.length; i++) { // populate ingredients
            ingred.push(doc_ing[i]);
            $("#ingred_list").append(`<li class="list_item"> <button id = "${ingred.length - 1}" class = "remove_ing"> ${doc_ing[i]} </button> </li>`);
        }

        jQuery("#recipe_name").val(rec_info.data().name); // populate name
        jQuery("#details_form").val(rec_info.data().description); // populate details
        jQuery("#recipe_link").val(rec_info.data().link); // populate link
        doc_name = rec_info.data().name
    })


}


function reload() {
    location.reload() // refresh the page
}

function bring_confirm() { // delete a recipe
    let check = $("#delete").html();
    console.log(check)
    if (check == "DELETE") { // changes to confirm when clicked
        $("#delete").html("CONFIRM")
    }
    if (check == "CONFIRM") { // deletes the recipe
        db.collection("users").doc(uUid).collection(uDisplayName + "Recipes").doc(doc_name).delete()
        setTimeout(reload, 500)
    }
}


setup = function () {
    $("#main_adder").scrollTop(0, 0) // move to top if user closes and re-opens
    pop_info() // load info
    jQuery("#finish_cancel").click(call_cancel); // cancel modify
    jQuery("#finish_add").click(call_add); // modify recipe
    jQuery("#add_tag").click(adder_tag); // add a tag
    jQuery("#add_ing").click(adder_ing); // add an ingredient
    jQuery("#delete").click(bring_confirm); // start delete or confirm delete
    $("body").on("click", ".remove_tag", delete_function_tag); // remove a tag
    $("body").on("click", ".remove_ing", delete_function_ing); // remove an ingredient
}

$(document).ready(setup)
