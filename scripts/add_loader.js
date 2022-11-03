
function call_add() {
    console.log($('#add_recipe').load('./text/add_recipe.html'));
}


setup = function () {
    jQuery("#add").click(call_add);
}

$(document).ready(setup)