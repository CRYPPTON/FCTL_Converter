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
         Програм је намењен за конвертовање слова итд љуљашка ...
              
         </textarea><br>
         <button >Convert</button>
        `
    }

    async convert(){
        
        var letters = { a : "а",b:  "б",v: "в",g:  "г",d: "д",
                        đ: "ђ", e:  "е",ž: "ж",z:  "з",i: "и",
                        j: "ј" ,k:  "к",l: "л",lj: "љ",m: "м",
                        n: "н" ,nj: "њ",o: "о",p:  "п",r: "р",
                        s: "с" ,t:  "т",ć: "ћ",u:  "у",f: "ф",
                        h: "х" ,c:  "ц",č: "ч",dž: "џ",š: "ш" }
                   
        var text = document.getElementById("fltc").innerHTML.split("");
        
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
