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
    var int = int * 2;
     console.log(int);
    // console.log(typeof int);
    return int;
}
 console.log(doubleInt());


 /**CORRECTIF ET REMARQUES**/
/*Exercice réussi. Attention cependant à supprimer les console.log() après t'en être servi.
Pour simplifier ton code tu n'es pas obligé de stocker ton paramètre dans une variable.*/