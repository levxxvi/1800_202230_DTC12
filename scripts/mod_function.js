const tags = [];
var doc_name = ""

function adder_tag() {
    let tag = tags.length
    let z = jQuery("#recipe_tags").val();
    z = z.toLowerCase();
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

    if ((b != true && c != true && d != true && e != true) || (f == "")) {
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

        db.collection("added_recipes").doc(doc_name).set({
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
        setTimeout(reload, 500)
    }
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


function pop_info() {
    var recipe = localStorage.getItem("rec_name")
    db.collection("added_recipes").doc(recipe).get().then(rec_info => {
        var doc_tags = rec_info.data().tag;
        var doc_ing = rec_info.data().ingredients;

        if ((doc_tags).includes("breakfast")) {
            document.getElementById("breakfast").checked = true;
        }
        if ((doc_tags).includes("lunch")) {
            document.getElementById("lunch").checked = true;
        }
        if ((doc_tags).includes("snack")) {
            document.getElementById("snack").checked = true;
        }
        if ((doc_tags).includes("dinner")) {
            document.getElementById("dinner").checked = true;
        }

        for (let i = 0; i < doc_tags.length; i++) {
            if (doc_tags[i] != "breakfast" && doc_tags[i] != "lunch" && doc_tags[i] != "snack" && doc_tags[i] != "dinner") {
                tags.push(doc_tags[i]);
                $("#tag_list").append(`<li class="list_item"> <button id = "${tags.length - 1}" class = "remove_tag"> ${doc_tags[i]} </button> </li>`);
            }
        }

        for (let i = 0; i < doc_ing.length; i++) {
            ingred.push(doc_ing[i]);
            $("#ingred_list").append(`<li class="list_item"> <button id = "${ingred.length - 1}" class = "remove_ing"> ${doc_ing[i]} </button> </li>`);
        }

        jQuery("#recipe_name").val(rec_info.data().name);
        jQuery("#details_form").val(rec_info.data().description);
        jQuery("#recipe_link").val(rec_info.data().link);
        doc_name = rec_info.data().name
    })


}


function reload() {
    location.reload()
}

function bring_confirm() {
    let check = $("#delete_first").html();
    console.log(check)
    if (check == "DELETE") {
        $("#delete_confirm").css("pointer-events", "auto")
        $("#delete_confirm").css("border-color", "#D4A373")
        $("#delete_confirm").css("background-color", "#FAEDCD")
        $("#delete_confirm").css("color", "#D4A373")
        $("#delete_first").html("CONFIRM")
    }
    if (check == "CONFIRM") {
        db.collection("added_recipes").doc(doc_name).delete()
        setTimeout(reload, 500)
    }
}


setup = function () {
    $("#main_adder").scrollTop(0, 0)
    pop_info()
    jQuery("#finish_cancel").click(call_cancel);
    jQuery("#finish_add").click(call_add);
    jQuery("#add_tag").click(adder_tag);
    jQuery("#add_ing").click(adder_ing);
    jQuery("#delete_first").click(bring_confirm);
    jQuery("#delete_confirm").click(confirm_delete);
    $("body").on("click", ".remove_tag", delete_function_tag);
    $("body").on("click", ".remove_ing", delete_function_ing);
}

$(document).ready(setup)
