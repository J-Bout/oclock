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
for (var i=str.length; i>=0; i--){
    if (str[i]=="."){
        var j= str.slice(i+1,str.length);
        console.log(j);
        return j;
    }
}
return false;
}


/**CORRECTIF ET REMARQUES**/
/*Bien mais ton code est trop complexe. Essaie de le refactorer en partant de cette base : 
var parts = str.split('.');
Attention au console.log() encore présent, mieux vaut utiliser cette méthode seulement pour débugger ton code.*/