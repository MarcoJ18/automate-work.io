// Importar módulos de npm.
import confetti from "canvas-confetti";

// Clase que maneja la limpieza de datos y el efecto de confetti.
class DataHandler {
  constructor(inputId) {
    this.clearButton = document.getElementById("clear");
    this.copyButton = document.getElementById("copy");
    this.input = document.getElementById(inputId);

    // Verifica si los elementos existen antes de agregarles eventos.
    if (this.input) {
      this.init();
    }
  }

  // Inicializa los eventos del botón.
  init() {
    this.clearButton.addEventListener("click", () => this.handleClearClick());
    this.copyButton.addEventListener("click", () => this.handleCopyClick());
  }


  // Get data
  getValue(){
    this.init.value
  }
  

  // Limpia el valor del campo de entrada.
  clearInput() {
    this.input.value = '';
  }

  // Maneja el clic del botón: dispara el confetti y limpia los datos.
  handleClearClick() {
    confetti();  // Lanza confetti.
    this.clearInput();  // Limpia el input.
  }


  //Copy element

  handleCopyClick(data){
    setTimeout(async()=>{
        await navigator.clipboard.writeText(data)
        .then(() => {
            alert('Content copied to clipboard');
        })
        .catch((error) => {
            alert('Failed to copy content to clipboard: ' + error);
        });
    },100)    
    
  }


}

// Crear una instancia de la clase, pasando los ID de los elementos.
const dataHandler = new DataHandler("business");
const dataHandlerBusiness = new DataHandler("business");
const dataHandlerEmail = new DataHandler("businessEmail");
const dataHandlerLocation = new DataHandler("locationBusiness");
const dataHandlerPhone = new DataHandler("phoneBusiness");
const dataHandlerDni = new DataHandler("dni");
const dataHandlerUrl = new DataHandler("urlSite");


export default DataHandler;
