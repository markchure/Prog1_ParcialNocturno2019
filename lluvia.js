//Solicitar 30 datos, cantidad lluvia ordenada, rango de 0 a 300
//Qué días tuvo el máximo de lluvia, sí hay varios el día más bajo, contar cuantos días es el más bajo
//Ejercicio de Nocturno 2019

// Solicitar 30 datos, cantidad de lluvia ordenada, rango de 0 a 300
// Que día tuvo el máximo de lluvia, si hay varios el día más bajo, contar cuantos días es el más alto (es el máximo)
// Ejercicio de Nocturno 2019
function pedirPromedioLluvia(dia){
  let promedioLluvia = -1;

  // Otra opción sería: while(!(promedioLluvia >= 0 && promedioLluvia <= 300))
  while(promedioLluvia < 0 || promedioLluvia > 300){
      promedioLluvia = parseInt(prompt("Ingrese promedio de lluvia para el día " + dia + " (0-300):"));
  }

  return promedioLluvia;
}

let maximoLluviaValor = -1;
let maximoLluviaDia = 0;
let maximoLluviaCantidad = 0;

for(let i = 1; i <= 5; i++){
  let dato = pedirPromedioLluvia(i);

  if(dato > maximoLluviaValor){
      maximoLluviaValor = dato;
      maximoLluviaDia = i;
      maximoLluviaCantidad = 1;
  } else if(dato == maximoLluviaValor){
      maximoLluviaCantidad++;
      // Si yo quiero quedarme con el día más grande
      // maximoLluviaDia = i;
  }

}

console.log("EL maximo de lluvia es " + maximoLluviaValor + " que se dió el día " + maximoLluviaDia + " y ocurrió " + maximoLluviaCantidad + " día(s).")