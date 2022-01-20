/*
 * Tests
 */
var container = document.getElementById('container');
if (
  sum([1, 2, 3]) === 6
  && sum(['un', 2, 'trois', 4, 'cinq']) === 6
  && sum([]) === 0
  && sum([1, [2, 3, [4, 5], 6], 7, [8, 9]]) === 45
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo5
 *
 * arr est un array
 * Retourner la somme des nombres contenus dans cet array
 */

function sum(arr) {
var sum1=0;
for (i=0; i<arr.length; i++){
    if (typeof(arr[i])=="number"){
        sum1+=arr[i];
    }else if (typeof(arr[i])=="string"){
    }
    else if (arr[i].length>0) {
        for (var j= 0; j < arr[i].length;j++) {
            if (arr[i][j].length>0) {
                for (var p= 0; p < arr[i][j].length;p++) {
                    sum1+=arr[i][j][p];
                }}
            else{
                sum1+=arr[i][j];
            }}}}
return sum1;
}

/**CORRECTIF ET REMARQUES**/
/*Tu as bien compris ce qu'il te fallait faire pour résoudre cet exercice.
Tu devrais maintenant essayer de refactorer ton code pour gagner en lisibilité. Pense aux fonctions récursives.
Allez, tu as fait le plus dur après tout.*/