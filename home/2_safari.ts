import {Browser} from './2_inher.js'
class safari extends Browser {

    constructor(browserName:string, browserVersion:number){
    super(browserName,browserVersion)
    }
     readerMode(){
        console.log('Currently we are in reader moode')
     }
     fullScreenMode(){
        console.log("Currently we are using full Screen mode")
     }
}
const safri = new safari('safari',562.635)
console.log(safri.browserName)
console.log(safri.browserVersion)
safri.readerMode()
safri.fullScreenMode()
