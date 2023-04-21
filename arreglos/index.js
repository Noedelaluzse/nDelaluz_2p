function calcularPuntaje(arreglo) {
  let puntaje = 0;
  for (let i = 0; i < arreglo.length; i++) {
    let num = arreglo[i];

    if (num === 5) {
      puntaje += 3;
    } else if (num === 7) {
      continue
    } else if(num%2 !== 0){
      puntaje += 1;
    } else if (num%2 === 0) {
      puntaje += 2;
    }
  }

  return puntaje;
}

const resultado = calcularPuntaje([1,2,3,4,5])
const resultado2 = calcularPuntaje( [17,19,21])
const resultado3 = calcularPuntaje([5,5,5])
console.log(resultado)
console.log(resultado2)
console.log(resultado3)