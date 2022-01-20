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
  if (arr.length === 0) return false;
  
  var longuest = arr.reduce(function(a, b) {
    if (typeof a === 'number') a = String(a);
    if (typeof b === 'number') b = String(b);
    return a.length > b.length ? a : b;
  }, '');  
  
  return longuest;
}


/**CORRECTIF ET REMARQUES**/
/*Trés bon travail. Tu maitrises des notions assez poussées
Attention cependant : dans cet exercice, tu n'as pas besoin de convertir les nombre en String.
La demande initiale est de pouvoir retourner la chaine la plus longue.*/
