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

   var result = arr[0];

   if (arr.length === 0) {

      return false;
   }

   for (var index = 1; index < arr.length; index++) {

      if (result.length < arr[index].length) {

         result = arr[index];
      }
   }
   return result;
}

/**CORRECTIF ET REMARQUES**/
/*Ton code fonctionne. Malgré tout tu as fait quelques erreurs :
Tu as oublié de vérifier si la donnée stockée dans les tableau est de type string. 
Cela pourrait te générer des résultats faussés.
De plus pourquoi faire partir ta boucle de l'index 1 ? 
Ta logique est bonne mais attention de ne pas oublier les bases.*/
