class CopyDataHandler{
    constructor(inputId){
        this.inputIds = inputId;
        this.copyButton = document.getElementById("copy");
        this.init();

    }

    init() {
        this.copyButton.addEventListener("click", () => this.selectorData());
        this.copyButton.addEventListener("click", () => this.handleCopyClick());
        
      }
    


      //Copy element
    
      handleCopyClick(value){


        console.log("Valor seleccionado:", selectedValue);
        
        setTimeout(async()=>{
            await navigator.clipboard.writeText(value)
            .then(() => {
                alert(value);
            })
            .catch((error) => {
                alert('Failed to copy content to clipboard: ' + error);
            });
        },100)    
        
      }


      selectorData(){

        const selectElement = document.getElementById("options").value;
        const selectElementMobile = document.querySelector("#mobileSelector #options").value;



        if(selectElementMobile == 'Términos de uso' || selectElement == 'Términos de uso'){
           console.log('si');
        

        }
        else if(selectElementMobile == 'Aviso legal' || selectElement == 'Aviso legal'){
            console.log('que');

        }
      }


}


export default CopyDataHandler;