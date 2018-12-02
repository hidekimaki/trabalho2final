/**
 * Use filter() quando: 
 * é preciso remover elementos indesejados com base em alguma(s) condição(ões).
 * 
 * 
 * O que filter() faz: como map(), filter() percorre o array da esquerda 
 * para a direita invocando uma função de retorno em cada elemento.
 * O valor retornado deve ser um booleano que indica se o elemento 
 * será mantido ou descartado. 
 * Depois de todos os elementos terem sido analisados, filter() retorna 
 * um novo array com todos os elementos que retornaram como verdadeiro.
*/


/**
 * Parâmetros:
 * 
 * array.filter( function( elem, index, array ) {
 *     ...
 * }, thisArg );
 * 
 * Parâmetro	Significado
 *  - elem:    Valor do elemento
 *  - index:   Índice em cada iteração, da esquerda para a direita
 *  - array:   Array original invocando o método
 *  - thisArg: (opcional) Objeto que será referenciado como this no callback
 */



/**
 * EXEMPLO 1: Remover elementos duplicados no array
 */
let array = [5, 1, 9, 5, 2, 3, 4, 1, 1, 2, 3, 3, 2];

let uniqueArrayES5 = array.filter(
    function (elem, index, array) {
        return array.indexOf(elem) === index;
    }
);

// ES6
let uniqueArrayES6 = array.filter( ( elem, index, originalArray ) => originalArray.indexOf( elem ) === index );

console.log(uniqueArrayES5)
console.log(uniqueArrayES6)



/**
 * EXEMPLO 2: Deixar somente elementos maiores do que 5
 */
let array2 = [5, 1, 9, 5, 2, 3, 4, 1, 1, 2, 3, 3, 2, 7, 6, 7];
let maiorQue5ArrayES6 = array2.filter(elem => elem > 5);
console.log(maiorQue5ArrayES6)