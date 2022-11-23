
function grocerySkeleton() {

    let test1 = ["b1", "b2", "b3", "b4", "b5", "b6"]
    let l1 = test1.length
    for (let i = 0; i < l1; i++) {
        console.log()

        // populate breakfast
        $('#breakfast_list').append(`<li class="list_item"> 
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${test1[i]}</label>
                    </div>
                </li>`);
    }

    let test2 = ["l1", "l2", "l3", "l4", "l5", "l6"]
    let l2 = test1.length
    for (let i = 0; i < l2; i++) {
        console.log()
        // populate lunch
        $('#lunch_list').append(`<li class="list_item">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${test2[i]}</label>
                    </div>
                </li>`);
    }

    let test3 = ["s1", "s2", "s3", "s4", "s5", "s6"]
    let l3 = test1.length
    for (let i = 0; i < l3; i++) {
        console.log()
        // populate snack
        $('#snack_list').append(`<li class="list_item">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${test3[i]}</label>
                    </div>
                </li>`);
    }

    let test4 = ["d1", "d2", "d3", "d4", "d5", "d6"]
    let l4 = test1.length
    for (let i = 0; i < l4; i++) {
        // populate dinner
        $('#dinner_list').append(`<li class="list_item">
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" id="Grocery" value="option1">
                        <label class="form-check-label" for="dinner"> &nbsp; ${test4[i]}</label>
                    </div>
                </li>`);
    }
}
grocerySkeleton();  //invoke the function
