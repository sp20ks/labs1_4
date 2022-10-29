var count_of_lines = 1;


function add_to_table() {
    count_of_lines++;
    var body_table = document.getElementById('table_of_products');
    var input_name = document.getElementById('name_of_product');
    var input_price = document.getElementById('price');
    var new_row = document.createElement("tr");
    new_row.setAttribute('onclick', 'add_line_to_basket(this.children);');

    var new_cell = document.createElement("th");
    new_cell.textContent = count_of_lines;
    new_row.appendChild(new_cell);


    var new_cell = document.createElement("td");
    new_cell.textContent = input_name.value;
    new_row.appendChild(new_cell);


    var new_cell = document.createElement("td");
    new_cell.textContent = input_price.value;
    new_row.appendChild(new_cell);

    body_table.appendChild(new_row);


    input_name.value = '';
    input_price.value = '';
}

var basket_count = 0;
function add_line_to_basket(e) {
    ++basket_count;
    var basket = document.getElementById("body_basket");
    var new_row = document.createElement("tr");
    var new_cell = document.createElement("th");
    new_cell.textContent = basket_count;
    new_row.appendChild(new_cell);
    for (var i = 1; i < 3; i++) {
        var new_cell = document.createElement("td");
        new_cell.textContent = e[i].textContent;
        new_row.appendChild(new_cell);
    }
    basket.appendChild(new_row);
}


function count_price() {
    var basket = document.getElementById("body_basket");
    var result = 0;
    /*for (var i = 0; i < basket_count; ++i) {
        var cells = strings[i].children;
        console.log(cells[1].value);
        result += Number(cells[2].value);
    }*/
    var string = basket.getElementsByTagName("tr");
    for (var i = 0; i < basket_count; ++i) {
        var cell = string[i].getElementsByTagName("td");
        result += Number(cell[1].textContent);
    }
    var input = document.getElementById("result_price");
    input.value = result;
    console.log(result);
}