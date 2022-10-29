function call() {
    var section = document.getElementById("div_tree");
    making_tree(document.head.children);
    result += String("\n</head> \n\n<body>\n\n");
    making_tree(document.body.children);
    result += "\n";
    result += String("</body>");
    section.innerText = result;
    console.log(result);
}


var result = String("<head> \n");
result += "\n";
step = 0;


function making_tree(e) {
    for (var i = 0; i < e.length; i++) {
        console.log("<" + e[i].localName + ">");
        for (var j = 0; j < step; j++) {
            result += "    ";
        }
        result += String("    " + "<" + e[i].localName + ">");
        step++;
        if (e[i].children.length != 0) {
            result += "\n";
            making_tree(e[i].children);
        }

        step--;
        for (var j = 0; j < step; j++) {
            result += "    ";
        }
        result += String("    " + "</" + e[i].localName + ">");
        result += "\n";
    }
}
