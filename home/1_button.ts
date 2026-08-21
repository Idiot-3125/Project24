import { webCompenent } from "./1_hm_inhrtns.js";

class Button extends webCompenent{
    
    constructor(firstName:string, ID:number){
       super(firstName,ID)
    }
    
    click(){
        console.log(`Please click on Login button`)
    }
}
// object creation
const button =new Button("Ravi",24)
console.log(button.firstName)
console.log(button.ID)
button.click()
button.focus()
