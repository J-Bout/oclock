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
  var separator = '.';
  var getExtension = str.split(separator);
  var extension = getExtension.slice(-1)[0];
  
  if (getExtension.length === 1) return false;
  
  return extension;
}

/**CORRECTIF ET REMARQUES**/
/*L'exercice est réussi mais tu aurais pu faire plus simple pour récupérer l'extension 
une fois ton array "getExtension" généré : var extension = getExtension[getExtension.length - 1];
Petite remarque : tu n'as pas besoin de stocker dans une variable ton séparateur.*/