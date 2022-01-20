/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getLongestString(['coucou', 'hello', 'bonjour']) === 'bonjour'
  && getLongestString(['css', 'html', 'js', 'php']) === 'html'
  && getLongestString([]) === false
  && getLongestString(['un', 2, 'trois', 4, 'cinq']) === 'trois'
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo4
 *
 * arr est un array
 * Retourner la chaine la plus longue de l'array
 */
function getLongestString(arr) {
    var plus = 0;
    var nom = null;

for (i=0; i<arr.length; i++){
    if (arr[i].length>plus) {
        plus = arr[i].length
        nom = arr[i]
    }
}
if (nom !==null) {
    return nom;
}else {
    return false;
}
}


/**CORRECTIF ET REMARQUES**/
/*Ton code fonctionne. Mais il te manque un petit quelque choses pour qu'il soit parfait.
Pense à vérifier si la donnée est différente d'un type string .
Courage*/
