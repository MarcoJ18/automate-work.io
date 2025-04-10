class CopyDataHandler{
    constructor(buttonId){
        this.buttonIds = buttonId;
        this.init();

    }

    init() {
        this.buttonIds.forEach(ids => {
            document.getElementById(ids).addEventListener("click",()=> this.handleCopyClick());
        });
    
      }
    


      //Copy handle click
    
      handleCopyClick(){

        setTimeout(async()=>{
            await navigator.clipboard.writeText()
            .then(() => {
                alert("test");
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