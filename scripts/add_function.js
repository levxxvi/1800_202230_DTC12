const tags = [];
function adder_tag() {
    let z = jQuery("#recipe_tags").val();
    z = z.toLowerCase();
    if (z != "") {
        tags.push(z);
        $("#tags_form").append(z + "\n");
        console.log(tags)
        $("#recipe_tags").val('');
    }
}

const ingred = [];
function adder_ing() {
    let x = jQuery("#recipe_ingred").val();
    x = x.toLowerCase();
    if (x != "") {
        ingred.push(x);
        $("#ingred_form").append(x + "\n");
        console.log(ingred)
        $("#recipe_ingred").val('');
    }
}

function call_cancel() {
    reload()
}

function call_add() {

    let a = jQuery("#recipe_name").val();
    a = a.toLowerCase()

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
        console.log("invalid entry")
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
        console.log(a, b, c, d, e, f, details, ingred, tags)
        setTimeout(reload, 500)
    }
}

function reload() {
    location.reload()
}



setup = function () {
    $("#main_adder").scrollTop(0, 0)
    jQuery("#finish_cancel").click(call_cancel);
    jQuery("#finish_add").click(call_add);
    jQuery("#add_tag").click(adder_tag);
    jQuery("#add_ing").click(adder_ing);
}

$(document).ready(setup)
