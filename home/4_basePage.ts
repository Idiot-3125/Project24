export class basePage{

    findElement(){
        console.log("Please find the Element")
    }
    clickElement(){
        console.log("Please click on the element")
    }
    enterText(){
        console.log("Please enter the Text")
    }
    performCommonTasks(){
        console.log("Search the required item")
    }
}
const basepage = new basePage()
basepage.findElement()
basepage.clickElement()
basepage.enterText()
basepage.performCommonTasks()
