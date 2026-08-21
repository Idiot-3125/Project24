import { webCompenent } from "./1_hm_inhrtns.js";

class textInput extends webCompenent{

    value:string = " "

    enterText(){
        console.log("Please enter the value")
    }

}
// object creation
const txt = new textInput(`Ravi`,123)

console.log(`The text is :`,txt.value)
txt.enterText()