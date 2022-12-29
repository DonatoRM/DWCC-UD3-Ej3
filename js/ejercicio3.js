let resultado; // En donde se almacenará el resultado a mostrar en una ventana emergente
// Pedimos la fecha del cumpleaños
let textoInsertado = prompt("Introduzca su fecha de cumpleaños (dd-mm-aaaa)");
// Creamos un array con cada parámetro de la fecha
let arrayFecha = textoInsertado.split("-");
textoInsertado = "";
// Si el array no tiene la longitud 3 no será válido
if (arrayFecha.length == 3) {
  // Preparamos la fecha en formato USA
  for (let contador = arrayFecha.length - 1; contador >= 0; contador--) {
    if (contador != arrayFecha.length - 1) {
      textoInsertado += "/";
    }
    textoInsertado += arrayFecha[contador];
  }
  // Creamos una fecha con el valor anterior. Si no es válida nos dará NaN
  if (!isNaN(Date.parse(textoInsertado))) {
    // Si es válida creo la fecha
    let fechaCumpleaños = new Date(textoInsertado);
    let dia = fechaCumpleaños.getDate();
    let mes = fechaCumpleaños.getMonth();
    // Vemos la fecha actual
    let fechaActual = new Date();
    let diaActual = fechaActual.getDate();
    let mesActual = fechaActual.getMonth();
    let anyoActual = fechaActual.getFullYear();
    let diaSiguiente; // Variable que almacenará el día del próximo cumpleaños
    let mesSiguiente; // Variable que almacenará el mes del próximo cumpleaños
    let anhyoSiguiente; // Variable que almacenará el año del próximo cumpleaños
    // Realizamos la comprobación si ya ha pasado la fecha o no, y se asignan los valores
    if (mes - mesActual < 0) {
      anhyoSiguiente = anyoActual + 1;
      mesSiguiente = mes;
      diaSiguiente = dia;
    } else if (mes - mesActual > 0) {
      anhyoSiguiente = anyoActual;
      mesSiguiente = mes;
      diaSiguiente = dia;
    } else {
      if (dia - diaActual < 0) {
        anhyoSiguiente = anyoActual + 1;
        mesSiguiente = mes;
        diaSiguiente = dia;
      } else if (dia - diaActual > 0) {
        anhyoSiguiente = anyoActual;
        mesSiguiente = mes;
        diaSiguiente = dia;
      } else {
        diaSiguiente = diaActual;
        mesSiguiente = mesActual;
        anhyoSiguiente = anyoActual;
      }
    }
    // Creamos la fecha del próximo cumpleaños
    let cumpleSiguiente = new Date(anhyoSiguiente, mesSiguiente, diaSiguiente);
    // Array correspondiente a los días de la semana en español
    let diasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    // Array de los meses del año en español
    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    // Se muestra el día de la semana del cumpleaños
    resultado = "El próximo cumpleaños caerá en " + diasSemana[cumpleSiguiente.getDay()] + "\n";
    // Se muestra el día completo del cumpleaños próximo
    resultado += `Será el día ${diasSemana[cumpleSiguiente.getDay()]}, ${cumpleSiguiente.getDate()} de ${
      meses[cumpleSiguiente.getMonth()]
    } del ${cumpleSiguiente.getFullYear()}`;
  } else {
    resultado = "Fecha introducida incorrecta";
  }
} else {
  resultado = "Fecha introducida incorrecta";
}
// Se muestra el resultado final en una ventana emergente
alert(resultado);
