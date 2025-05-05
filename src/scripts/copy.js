import { legalTexts } from "./legalText.js";
import Swal from 'sweetalert2';


class CopyDataHandler {
  constructor(buttonId, inputId) {
    this.buttonIds = buttonId;
    this.inputIds = inputId;
    this.init();
  }

  init() {
    this.buttonIds.forEach((ids) => {
      const button = document.getElementById(ids);
      if (button) {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          this.valueControl(ids);
        });
      }
    });
  }

  //Copy handle click

  handleCopyClick(value) {
    setTimeout(async () => {
      try {
        await navigator.clipboard.writeText(value);
        Swal.fire({
          icon: 'success',
          title: '¡Copiado!',
          text: 'El contenido se copió correctamente.',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: 'top-end',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error al copiar',
          text: error.toString(),
        });
      }
    }, 100);
  }
  
/*
  handleCopyClick(value) {
    setTimeout(async () => {
      await navigator.clipboard
        .writeText(value)
        .then(() => {
          alert("Copiado");
        })
        .catch((error) => {
          alert("Failed to copy content to clipboard: " + error);
        });
    }, 100);
  }
  */

  getValueData() {
    let inputData = [];
    this.inputIds.forEach((id) => {
      let input = document.getElementById(id);
      inputData.push(input.value);
    });
    return inputData;
  }

  valueControl(buttonId) {
    let [company, email, address, phone, dni, url] = this.getValueData();

    if (legalTexts[buttonId]) {
      const legalContent = legalTexts[buttonId](company, email, address); //Termino de uso
      this.handleCopyClick(legalContent);
    } else if (legalTexts[buttonId]) {
      const legalContent = legalTexts[buttonId](company,email,address,phone,dni); //AvisoLegal
      this.handleCopyClick(legalContent);
    } else if (legalTexts[buttonId]) {
      const legalContent = legalTexts[buttonId](email); // Cookies
      this.handleCopyClick(legalContent);
    } else if (legalTexts[buttonId]) {
      const legalContent = legalTexts[buttonId](company, address, url); // DeclaraciónAccesiblidad
      this.handleCopyClick(legalContent);
    }
  }
}

export default CopyDataHandler;
