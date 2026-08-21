import { basePage } from "./4_basePage.js";
class loginPage extends basePage {
    performCommonTasks() {
        super.performCommonTasks();
        console.log("Click on the Login button");
    }
}
const loginpage = new loginPage();
loginpage.clickElement();
loginpage.enterText();
loginpage.performCommonTasks();
