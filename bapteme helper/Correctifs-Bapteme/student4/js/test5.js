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

}


/**CORRECTIF ET REMARQUES**/
/*Que cherche-t-on à faire ? 
Le but de l'exercice est de calculer la somme de tous les nombres contenus dans un array. 
Il faut donc : 
. ne pas tenir compte des chaînes de caractères (donc vérifier si un élément est de type number ou pas)
. et si l'élément est encore un tableau(donc vérifier si un élément est de type objet), effectuer encore une somme de ces éléments
Pour additioner les valeurs entre elles, tu peux par exemple utiliser l'opérateur += (ex: result += item. Ce qui équivaut à resultat = resultat + item.)
Enfin tu devras forcément retourner le résultat.
Tu peux y arriver !
Encore une fois n'hésites pas à me demander de l'aide si tu bloques encore.
*/
