import AbstractPage from "./AbstractPage.js";

export default class extends AbstractPage {
    constructor(){
        super();
        this.setTitle("From Cyrillic to Latin")
        this.convert = this.convert.bind(this)
    }

    async getHtml(){
        return `
        <h1>  From Cyrillic to Latin  </h1><hr>
        <textarea id="fctl">Nikola Nikolić 
         </textarea><br>
        `
    }

    
    async convert(){
        var letters = { "а" :"a"   ,"б": "b"  , "в": "v" , "г": "g" ,"д": "d" ,
                        "ђ": "đ"   ,"е": "e"  , "ж": "ž" , "з": "z" ,"и": "i" ,
                        "ј": "j"   ,"к": "k"  , "л": "l" , "љ": "lj","м": "m" ,
                        "н": "n"   ,"њ": "nj" , "о": "o" , "п": "p" ,"р": "r" ,
                        "с": "s"   ,"т": "t"  , "ћ": "ć" , "у": "u" ,"ф": "f" ,
                        "х": "h"   ,"ц": "c"  , "ч": "č" , "џ": "dž","ш": "š"  }
                    
         var text = document.getElementById("fctl").innerHTML.split("");
         
         text = text.map(letter => {
                  if(letters[letter.toLowerCase()]!==undefined){    
                    let check_letter = checkLetter(letter);                             
                    letter = letters[letter.toLowerCase()]
                    return check_letter? letter : letter.toUpperCase()
                  } else {
                    return letter
                  }
                })
            
            return text.join('')
        }
}

const checkLetter = letter =>{  
    return letter.toLowerCase() == letter ? true : false
}