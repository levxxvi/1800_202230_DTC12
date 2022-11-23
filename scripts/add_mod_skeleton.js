
function call_add() {
    console.log($('#add_recipe').load('../text/add_recipe.html'));
}

function call_modify() {
    localStorage.setItem("rec_name", jQuery(this).attr('id'))
    console.log($('#mod_recipe').load('../text/mod_recipe.html'));
}

setup = function () {
    jQuery("#add").click(call_add);
    jQuery("#search_cards").on("click", ".recipe_card", call_modify);
}

$(document).ready(setup)
