import MainDataHandler from "./clear";
import confetti from "canvas-confetti";

class clearDataHandler extends MainDataHandler {
  constructor() {
    super();
  }

  // Limpia el valor del campo de entrada.
  clearInput() {
    this.input.value = "";
  }

  handleClearClick() {
    confetti(); // Lanza el confetti cuando se hace clic en el botón.
    this.clearInput(); // Limpia el campo de entrada después de hacer clic.
  }
}


const clearDataHandler = new clearDataHandler();