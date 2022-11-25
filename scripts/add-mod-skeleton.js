
function call_add() { // load add card
    console.log($('#add_recipe').load('../text/add_recipe.html'));
}

function call_modify() { //load mod card
    localStorage.setItem("rec_name", jQuery(this).attr('id'))
    console.log($('#mod_recipe').load('../text/mod_recipe.html'));
}

setup = function () {
    jQuery("#add").click(call_add); // call add card if add button is clicked
    jQuery("#search_cards").on("click", ".recipe_card", call_modify); // call modify card if modify button is clicked
}

$(document).ready(setup)
