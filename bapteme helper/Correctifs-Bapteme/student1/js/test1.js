/*
 * Tests
 */
var container = document.getElementById('container');
if (
  doubleInt(4) === 8
  && doubleInt(-4) === -8
  && doubleInt(0) === 0
) {
  container.textContent = 'Yeaaah';
  container.className = 'success';
}
else {
  container.textContent = 'Nope';
  container.className = 'error';
}


/*
 * Exo1
 *
 * int est un entier
 * Le doubler, et le retourner
 */
function doubleInt(int) {

   var rep = int * 2;
   return rep;
}


/**CORRECTIF ET REMARQUES**/
/*Tu as bien réussi l'exercice
Attention cependant : Transformer le paramètre en variable ici n'est pas utile.*/