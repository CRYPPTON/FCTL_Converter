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
        <textarea id="fctl">Nikola
         </textarea><br>
         <button onClick=${this.convert()}>Convert</button>
        `
    }

    
    async convert(){
         var letters = {a : "а",b: "б",v: "в",g: "г",d: "д",dj: "ђ",e: "е",z: "ж",z: "з",i: "и",
                        j: "ј",k: "к",l: "л",lj: "љ",m: "м",n: "н",nj: "њ",o: "о",p: "п",r: "р",
                        s: "с",t: "т",đ: "ћ",u: "у",f: "ф",h: "х",c: "ц",c: "ч",dz: "џ",s: "ш" }
                  
          
         var text = document.getElementById("fctl").innerHTML.split("");

         text = text.map(letter => {
                  if(letters[letter.toLowerCase()]==undefined){                 
                      console.log("Ne postoji")
                  } else {
                      console.log("Postoji slovo : "+letter+" je na cirilici " + letters[letter.toLowerCase()])
                  }
                })
        /* for(var k in letters){
            console.log(k)
         }*/
         
        }
}

