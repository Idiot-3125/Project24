import { Browser } from "./2_inher.js"
class chrome extends Browser{

    constructor(browserName:string, browserVersion:number){
        super(browserName ,browserVersion)
    }
    openIncognito(){
        console.log("Opened InCognito mode")
    }
    clearCache(){
        console.log("All cache is cleared")
    }
}
const chrom = new chrome("chrome",450.541)
console.log(chrom.browserName)
console.log(chrom.browserVersion)
chrom.openIncognito()
chrom.clearCache()
