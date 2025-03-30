class test {
  constructor() {
    this.copyButton = document.getElementById("copy");

    this.init();
  }

  // Inicializa los eventos del botón.
  init() {
    this.copyButton.addEventListener("click", () => this.handleCopyClick());
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



const terminosuso = new test;