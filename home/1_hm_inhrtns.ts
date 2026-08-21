export class webCompenent{

    firstName:string
    ID : number
    constructor(firstName:string, ID:number){
        this.firstName=firstName
        this.ID = ID
    }

    click(){
        console.log("Simulating a click")
    }
    focus(){
        console.log("Focusing on the component")
    }
}
// object creation
const web=new webCompenent("Ram",25)
console.log(web.firstName)
console.log(web.ID)
web.click()
web.focus()