export class Browser{
    browserName : string
    browserVersion : number

    constructor(browserName:string,browserVersion:number){
        this.browserName = browserName
        this.browserVersion = browserVersion
    }

    openURL(){
        console.log("URL is opened.")
    }
    closeBrowser(){
        console.log('Browser is closed.')
    }
    navigatBack(){
        console.log("Retun back to old tab.")
    }
}
//const Browse = new Browser(`chrome`, 123.345)
// console.log(Browse.browserName)
// console.log(Browse.browserVersion)
// Browse.closeBrowser()
// Browse.navigatBack()
// Browse.openURL()