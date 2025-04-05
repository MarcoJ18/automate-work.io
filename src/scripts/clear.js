// Importar módulos de npm.
import confetti from "canvas-confetti";

// Clase que maneja la limpieza de datos y el efecto de confetti.
class ClearDataHandler {
  constructor(inputId) {
    this.inputIds = inputId;
    this.clearButton = document.getElementById("clear");


    // Verifica si los elementos existen antes de agregarles eventos.
    if (this.clearButton) {
      this.init();
    }
  }

  // Inicializa los eventos del botón.
  init() {
    this.clearButton.addEventListener("click", () => this.handleClearClick());
  }  

  // Limpia el valor del campo de entrada.
  clearInput() {
    this.inputIds.forEach(id => {
      const input = document.getElementById(id);
      input.value = '';
    });
  }

  // Maneja el clic del botón: dispara el confetti y limpia los datos.
  handleClearClick() {
    confetti();  // Lanza confetti.
    this.clearInput();  // Limpia el input.
  }



}


export default ClearDataHandler;
