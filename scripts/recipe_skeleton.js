
function cardSkeleton() {
    $("#get_title_1").html("test1")
    let test1 = [1, 2, 3, 4, 5, 6]
    let l1 = test1.length
    for (let i = 0; i < l1; i++) {
        $('#card_list_1').append('<li class="list_item">' + test1[i] + '</li>');
    }
    $("#get_title_2").html("test2")
    let test2 = [1, 2, 3, 4, 5, 6]
    let l2 = test2.length
    for (let i = 0; i < l2; i++) {
        $('#card_list_2').append('<li class="list_item">' + test2[i] + '</li>');
    }
    $("#get_title_3").html("test3")
    let test3 = [1, 2, 3, 4, 5, 6]
    let l3 = test3.length
    for (let i = 0; i < l3; i++) {
        $('#card_list_3').append('<li class="list_item">' + test3[i] + '</li>');
    }

}
cardSkeleton();  //invoke the function