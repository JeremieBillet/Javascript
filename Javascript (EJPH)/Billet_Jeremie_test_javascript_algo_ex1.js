////////////////////
// Exercice 1 //////
////////////////////

// question 1
var table = new Array(9);
for (let i = 0; i < 9; i++) {
    table[i] = new Array(9);
}

// question 2
function F11(array_providen) {
    for (let i = 0; i < 9; i++) {
        const numbers = array_providen[i].split(' ');
        for (let j = 0; j < 9; j++) {
            table[i][j] = parseInt(numbers[j], 10);
        }

    }
}
F11(array_number)


//question 3
function F12(tableToDisplay) {
    document.write("<h2>Exercice 1</h2>")
    document.write("<table>");
    for (let i = 0; i < 9; i++) {
        document.write("<tr>")
        for (let j = 0; j < 9; j++) {
            document.write("<td>"+tableToDisplay[i][j]+"</td>");
        }
        document.write("</tr>");
    }
    document.write("</table>");
}
F12(table)