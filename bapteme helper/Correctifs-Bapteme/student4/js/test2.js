/*
 * Tests
 */
var container = document.getElementById('container');
if (!isEven(1) && isEven(2) && !isEven(3) && isEven(35468432)) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo2
 *
 * int est un entier
 * Retourner "true" si c'est pair, "false" si c'est impair
 */
function isEven(int) {
     var int = int % 2 == 0;
console.log(int);
return int;
}


/**CORRECTIF ET REMARQUES**/
/*Là encore tu sembles avoir acquis les bonnes notions mais comme pour l'exercice 1, 
tu n'as pas besoin de stocker ton paramètre dans une variable, tu peux directement le retourner
de cette manière là : return int % 2 === 0;
La triple égalité est préconisée car elle te permet de vérifier aussi bien le type de la variable que sa valeur.*/
