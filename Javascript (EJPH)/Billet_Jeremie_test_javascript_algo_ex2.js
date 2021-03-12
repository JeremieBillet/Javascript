////////////////////
// Exercice 2 //////
////////////////////

function F21(A){
    for (let i = 0; i < 9; i++) {
        if (A[i]>9 || A[i]<1) return false;
    }
    //Set contains only unique values
    let set = new Set(A);
    return (set.size == 9)
}
