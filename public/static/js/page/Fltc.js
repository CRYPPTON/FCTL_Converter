import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("From Latin to Cyrillic")
    }

    async getHtml(){
        return `
        <h1>  From Latin to Cyrillic </h1><hr>
        <textarea id="fltc">
         The program intended for converting text from Cyrillic to Latin, can also convert Latin to Cyrillic, it is up to you to decide
              
         </textarea><br>
         <button >Convert</button>
      

        
        `
    }
}