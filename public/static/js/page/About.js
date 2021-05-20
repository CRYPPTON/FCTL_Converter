import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("About")
    }

    async getHtml(){
        return `
        <h1>  About " </h1><hr>
        <p id="descr">
         The program intended for converting text from Cyrillic to Latin, can also convert Latin to Cyrillic, it is up to you to decide
              
         </p>
         <br>
         <br>
      
         <p>Project link: https://github.com/CRYPPTON/FCTL_Converter/tree/master<p/>
        
        `
    }
}