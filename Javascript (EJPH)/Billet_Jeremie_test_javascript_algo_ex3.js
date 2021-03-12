////////////////////
// Exercice 3 //////
////////////////////

//boolean pour afficher ou non à la fin un messsage de réussite
var success = true

document.write("<h2>Exercice 3</h2>")

document.write("<table>")

// test des lignes du tableau
function F31(tableToCheck){
    for (let i = 0; i < 9; i++) {
        //appel de la fonction de verification
        var ok = F21(tableToCheck[i]);

        //si erreur ecriture d'une ligne
        if (ok == false) {
            success = false;
            document.write("<tr><td>line "+(i+1)+" incorrect</td>");
            tableToCheck[i].forEach(element => {
                document.write("<td>"+element+"</td>");
            });
            document.write("</tr>");
        }
        
    }
}
F31(table)

//test des colonnes du tableau
function F32(tableToCheck){
    for (let i = 0; i < 9; i++) {

        //recuperation d'une colonne
        let colonne = new Array(9);
        for (let j = 0; j < 9; j++) {
            colonne[j] = tableToCheck[j][i];
        } 

        //appel de la fonction de verification
        var ok = F21(colonne);

        //si erreur ecriture d'une ligne
        if (ok == false) {
            success = false;
            document.write("<tr><td>colonne "+(i+1)+" incorrect</td>");
            colonne.forEach(element => {
                document.write("<td>"+element+"</td>");
            });
            document.write("</tr>");
        }
        
    }
}
F32(table)

//test des regions du tableau
function F33(tableToCheck){
    for (let i = 0; i < 9; i++) {

        //recuperation d'une region
        let region = new Array(9);
        for (let j = 0; j < 9; j++) {
            region[j] = tableToCheck[Math.floor(i/3)*3+Math.floor(j/3)][(i%3)*3+j%3];
            
        } 
        console.log(region);
        //appel de la fonction de verification
        var ok = F21(region);

        //si erreur ecriture d'une ligne
        if (ok == false) {
            success = false;
            document.write("<tr><td>region "+(i+1)+" incorrect</td>");
            region.forEach(element => {
                document.write("<td>"+element+"</td>");
            });
            document.write("</tr>");
        }
        
    }
}
F33(table)

document.write("</table>")

if (success==true) document.write("<p>Félicitation ! Vous n'avez pas fait d'erreur.</p>");