const tags = [];

function adder_tag() {
    let tag = tags.length
    let z = jQuery("#recipe_tags").val();
    z = z.toLowerCase();
    z = z.trim();
    if (z != "") {
        tags.push(z);
        $("#tag_list").append(`<li class="list_item"> <button id = "${tag}" class = "remove_tag"> ${z} </button> </li>`);
        $("#recipe_tags").val('');
    }
}

const ingred = [];
function adder_ing() {
    let ing = ingred.length
    let x = jQuery("#recipe_ingred").val();
    x = x.toLowerCase();
    x = x.trim();
    if (x != "") {
        ingred.push(x);
        $("#ingred_list").append(`<li class="list_item"> <button id = "${ing}" class = "remove_ing"> ${x} </button> </li>`);
        $("#recipe_ingred").val('');
    }
}

function call_cancel() {
    reload()
}

function call_add() {

    let a = jQuery("#recipe_name").val();
    a = a.toLowerCase()
    a = a.trim()

    let b = jQuery("#breakfast:checked").val();

    let details = jQuery("#details_form").val();

    if (b == "breakfast") {
        b = true

    } else {
        b = false
    }

    let c = jQuery("#lunch:checked").val();
    if (c == "lunch") {
        c = true

    } else {
        c = false
    }

    let d = jQuery("#snack:checked").val();
    if (d == "snack") {
        d = true

    } else {
        d = false
    }

    let e = jQuery("#dinner:checked").val();
    if (e == "dinner") {
        e = true

    } else {
        e = false
    }

    let f = jQuery("#recipe_link").val();

    if (a == "" || (b != true && c != true && d != true && e != true) || (f == "")) {
        jQuery("#error").html("Error: one or more required fields is missing")
    } else {
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
            if (tags[i] != undefined) { tags.push(tags[i]); }
        tags.splice(0, len);

        len = ingred.length;
        for (i = 0; i < len; i++)
            if (ingred[i] != undefined) { ingred.push(ingred[i]); }
        ingred.splice(0, len);

        db.collection("added_recipes").doc(a).set({
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
        setTimeout(reload, 500)
    }
}

function reload() {
    location.reload()
}

function delete_function_tag() {
    tag = jQuery(this).attr('id')
    delete tags[tag];
    jQuery(this).parent().remove()
}

function delete_function_ing() {
    ing = jQuery(this).attr('id')
    delete ingred[ing];
    jQuery(this).parent().remove()
}


setup = function () {
    $("#main_adder").scrollTop(0, 0)
    jQuery("#finish_cancel").click(call_cancel);
    jQuery("#finish_add").click(call_add);
    jQuery("#add_tag").click(adder_tag);
    jQuery("#add_ing").click(adder_ing);
    $("body").on("click", ".remove_tag", delete_function_tag);
    $("body").on("click", ".remove_ing", delete_function_ing);
}

$(document).ready(setup)
