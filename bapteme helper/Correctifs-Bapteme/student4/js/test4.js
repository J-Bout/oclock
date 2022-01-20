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

}


/**CORRECTIF ET REMARQUES**/
/*Quel dommage de pas avoir proposé un début de solution.
Que s'est-il passé ? Un manque de temps ? Une notion que tu n'as pas assimilé ?
Nous pouvons en discuter demain après les cours.
Tu devrais avant ça, retenter cet exercice. Tu vas voir ce n'est pas si compliqué.
Comme pour l'exercice 3, nous allons décomposer ensemble l'exercice en étapes :
Que cherche-t-on à faire ? 
Le but de l'exercice est trouver quelle est la chaîne de caractère la plus longue parmis tous les éléments 
de chaque array.
Il faut donc : 
- Dans un 1er temps parcourir l'array. 
Une petite boucle "for" me semble idéale, n'est-ce pas ? 
Mais attention tu auras quelques vérification à faire : est-ce que tous les éléments sont des strings ?
Lors de cette boucle, l'idée est de comparer la valeur suivante à la valeur précédente et de ne conserver que la plus longue.
Tu pourrais peut-être utiliser cette methode "string.lenght"
- 2eme temps : retourner la valeur

Je sais que l'apprentissage peut parfois sembler éprouvant mais le tout est de garder le cap. Chacun avance à son rythme mais au final
vous finirez tous cette formation avec le même bagage !*/