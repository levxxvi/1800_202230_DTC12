
function call_cancel() {
    $('#remove').remove();
}

function call_add() {

    let a = jQuery("#recipe_name").val();
    let b = jQuery("#breakfast:checked").val();

    if (b == "option1") {
        b = "breakfast"
    } else if (b != "breakfast") {
        b = "not_breakfast"
    }
    let c = jQuery("#lunch:checked").val();
    if (c == "option1") {
        c = "lunch"
    } else if (c != "lunch") {
        c = "not_lunch"
    }
    let d = jQuery("#snack:checked").val();
    if (d == "option1") {
        d = "snack"
    } else if (d != "snack") {
        d = "not_snack"
    }
    let e = jQuery("#dinner:checked").val();
    if (e == "option1") {
        e = "dinner"
    } else if (e != "dinner") {
        e = "not_dinner"
    }

    let f = jQuery("#recipe_details").val();
    let g = jQuery("#recipe_link").val();

    if (a == "" || (b != "breakfast" && c != "lunch" && d != "snack" && e != "dinner") || (f == "")) {
        console.log("invalid entry")
        jQuery("#error").html("Error: one or more required fields is missing")
        let doc = [a, b, c, d, e, f, g,]
        console.log(doc)

    } else {
        let doc = [a, b, c, d, e, f, g,]
        console.log(doc)
        $('#remove').remove();
    }
}




setup = function () {
    jQuery("#finish_cancel").click(call_cancel);
    jQuery("#finish_add").click(call_add);
}

$(document).ready(setup)
