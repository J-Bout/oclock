/*
 * Tests
 */
var container = document.getElementById('container');
if (
  getExtension('test1.css') === 'css'
  && getExtension('jquery.min.js') === 'js'
  && getExtension('.eslintrc') === 'eslintrc'
  && getExtension('monfichier') === false
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo3
 *
 * str est une string
 * Retourner l'extension de fichier.
 * Par exemple index.html => html
 */
function getExtension(str) {

    var str = str.lastIndexOf('css';'js';'eslintrc';'eslintrc');
    console.log(str);
    return str;
}


/**CORRECTIF ET REMARQUES**/
/*Il semble que tu as éprouvé quelques difficultés pour résoudre cet exercice.
Ton résonnement était pourtant le bon. À savoir : récupérer le dernier élément de la chaîne de caractère.
La méthode utilisée n'est par contre pas la bonne. ".lastIndexOf" permet de retourner la position, 
dans la chaîne courante, de la dernière occurence de la valeur donnée en argument.
De plus tu as écris les différentes valeurs "en dur" dans la fonction, ce qui n'est pas la bonne façon de procéder.
Pour t'aiguiller voici les différentes étapes qui te permettront de résoudre l'exercice.
Etape 1 : décomposer la chaîne de caractère pour "isoler" l'extension du reste.
Tu pourrais par exemple utiliser la méthode .split()
Etape 2 : Vu que cette méthode génère un array, il faudra tu trouves un moyen pour identifier si les items
sont des extensions ou non. Repars de ton résonnement de base. Pour t'aider un peu plus : pourquoi penses-tu 
que la ligne 9 renvoie false.
Que devrais-tu vérifier ?
Etape 3 : Enfin, une fois l'extension identifiée, il faudra que tu trouves un moyen pour récupérer cet élément : 
Tu devrais pouvoir trouver des éléments de réponses grâce à ces deux liens 
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length
Ne te décourage pas ! 
Tu dois juste prendre le temps de décomposer le problème. N'hésites pas à écrire en toutes lettres 
ce que la fonction doit faire pour t'aider et organiser tes idées. Par exemple : "Je veux récupérer l'extension... Pour cela je dois ... et ..."*/
