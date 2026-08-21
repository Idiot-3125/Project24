import { Browser } from "./2_inher"
class edge extends Browser{

    constructor(browserName:string,browserVersion:number){
        super(browserName,browserVersion)
    }
     takeSnap(){
        console.log("Snap is taken.")
     } 
     clearCookies(){
        console.log("All cookies are cleared.")
     } 
}
const edg = new edge('edge',234.980)
console.log(edg.browserName)
console.log(edg.browserVersion)
edg.takeSnap()
edg.clearCookies()
edg.openURL()