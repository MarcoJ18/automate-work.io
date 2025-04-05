class CopyDataHandler{
    constructor(inputId){
        this.inputIds = inputId;
        this.copyButton = document.getElementById("copy");
        this.init();
    }

    init() {
        this.copyButton.addEventListener("click", () => this.handleCopyClick());
      }
    
    
      //Copy element
    
      handleCopyClick(data){

        const selectValue = document.getElementById("options")

        setTimeout(async()=>{
            await navigator.clipboard.writeText(data)
            .then(() => {
                alert(selectValue.value);
            })
            .catch((error) => {
                alert('Failed to copy content to clipboard: ' + error);
            });
        },100)    
        
      }
}


export default CopyDataHandler;