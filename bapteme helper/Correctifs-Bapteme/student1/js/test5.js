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

   var result = 0;

   if (arr.length === 0) {
      console.log("valeur renvoyée :"+result);
      return result;
   }

   for (var i = 0; i < arr.length; i++) {

      if (isNaN(arr[i])) {
         console.log("valeur ignorée :"+arr[i]);
         i++;
      }
      if (!isNaN(arr[i])) {

         result = result + arr[i];
      }
   }
   console.log("resultat renvoyée : "+result);
   return result;
}


/**CORRECTIF ET REMARQUES**/ 
/*Tu sembles avoir rencontré quelques difficultés pour cet exercice.
Premier point, tu as un peu trop complexifié ton code et il manque un peu de visibilité.
Je vois que tu as bien pensé à vérifier si la valeur est un nombre (ligne 41).
Par contre ta condition ligne 30 t'as fait passer à côté des valeurs tel que les array contenant des nombres.
Il vaudrait mieux effectuer cette vérification là :  if (typeof item === 'object') 

/*C'est dommage de ne pas avoir réussi cet exercice. 
Tu n'étais pas si loin que ça de la solution et ton raisonnement est intéressant.
Essaie de te recentrer sur le traitement des arrays à l'intérieur d'array. 
Ne pourrais-tu pas exploiter de nouveau
un élément de ton code pour faire la somme de ces nombres ?
Petit indice : fonctions récursives

Par contre je t'invite à revoir la syntaxe de base des boucles "for" et leur fonctionnement car certaines de tes erreurs 
auraient pu être éviter : l'incrémentation "i++" n'est pas utile ici car tu l'as déjà défini dans les paramètres de ta boucle.

Tu as dans l'ensemble relativement bien réussi ce challenge malgré tout.
Tu est sur la bonne voie*/