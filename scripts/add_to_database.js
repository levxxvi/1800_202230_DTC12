const tags = []; // tags array
const h1 = document.querySelector('h1');
const uUid = localStorage.getItem('userUid')
const uDisplayName = localStorage.getItem('userDisplayName')

function adder_tag() { // pull tags from html, format them, add them to a array
    let tag = tags.length // format tags
    let z = jQuery("#recipe_tags").val();
    z = z.toLowerCase();
    z = z.trim();
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
    x = x.trim();
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

    let a = jQuery("#recipe_name").val(); // save and format name
    a = a.toLowerCase()
    a = a.trim()

    let details = jQuery("#details_form").val();  // save user details

    let b = jQuery("#breakfast:checked").val(); // save if breakfast item 
    if (b == "breakfast") {
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

    if (a == "" || (b != true && c != true && d != true && e != true) || (f == "")) { // check if all required info is present
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

        db.collection("users").doc(uUid).collection(uDisplayName + "Schedule").doc(doc_name).set({ // push to firebase
            name: a,
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

function reload() {
    location.reload() // refresh the page
}

function delete_function_tag() { // remove a tag from the array
    tag = jQuery(this).attr('id') // find tag based on button id
    delete tags[tag]; // remove tag and button
    jQuery(this).parent().remove()
}

function delete_function_ing() { // remove a ingredient from the array
    ing = jQuery(this).attr('id') // find ingredient based on button id
    delete ingred[ing]; // remove tag and button
    jQuery(this).parent().remove()
}


setup = function () {
    $("#main_adder").scrollTop(0, 0) // move to top if user closes and re-opens
    jQuery("#finish_cancel").click(call_cancel); //calls the cancel if cancel button is pressed
    jQuery("#finish_add").click(call_add); //adds to the firebase if finish button is pressed
    jQuery("#add_tag").click(adder_tag); //adds the ingredients if add button is pressed
    jQuery("#add_ing").click(adder_ing); //adds the tags if add  button is pressed
    $("body").on("click", ".remove_tag", delete_function_tag);  //removes a tag when it is clicked
    $("body").on("click", ".remove_ing", delete_function_ing);  //removes a ingredient when it is clicked
}

$(document).ready(setup)
