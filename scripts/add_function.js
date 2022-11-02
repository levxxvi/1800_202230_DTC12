
function call_cancel() {
    $('#remove').remove();
}

function call_add() {
    $('#remove').remove();
}


setup = function () {
    jQuery("#finish_cancel").click(call_cancel);
    jQuery("#finish_add").click(call_add);
}

$(document).ready(setup)