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

   var rep = str.split('.')
   var index = rep.length - 1;
   if ( str.lastIndexOf('.') == -1){

      return false;
   }
   else {

      console.log(rep[index]);
      return (rep[index]);
   }
}


/**CORRECTIF ET REMARQUES**/
/*Exercice réussi mais Attention à ne pas laisser trainer des console.log(). 
Mieux vaut utiliser cette méthode seulement pour débugger ton code.
Code trop complexe. Essaie de voir ce que tu peux faire pour le simplifier.*/