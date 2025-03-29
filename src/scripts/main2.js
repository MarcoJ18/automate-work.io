class DataHandler {
  constructor(inputId) {
    this.clearButton = document.getElementById("clear");
    this.copyData = document.getElementById("copy");
    this.input = document.getElementById(inputId);

    // Verifica si los elementos existen antes de agregarles eventos.
    if (this.input) {
      this.init();
    }
  }

  // Inicializa los eventos del botón.
  init() {
    if (this.clearButton) {
      this.clearButton.addEventListener("click", () => this.handleClearClick());
    }
  }

  // Get data
  getData() {
    this.input.value;
  }

  // Limpia el valor del campo de entrada.
  clearInput() {
    this.input.value = "";
  }

  // Maneja el clic del botón: dispara el confetti y limpia los datos.
  handleClearClick() {
    confetti(); // Lanza confetti.
    this.clearInput(); // Limpia el input.
  }
}

// Crear una instancia de la clase, pasando los ID de los elementos.
const DataHandler = new DataHandler("business").clearButton();
const DataHandlerEmail = new DataHandler("businessEmail");
const DataHandlerLocation = new DataHandler("locationBusiness");
const DataHandlerPhone = new DataHandler("phoneBusiness");
const DataHandlerDni = new DataHandler("dni");
const DataHandlerUrl = new DataHandler("urlSite");
