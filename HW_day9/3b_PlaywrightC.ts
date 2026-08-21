import { DatabaseConnection } from "./3a_DataC.js";
import { MySqlConnection } from "./3b_MySQLC.js";

class PlaywrightConnection extends MySqlConnection implements DatabaseConnection{

    connect(): void {
        console.log('Connect the Playwright to DataBase');
    }
    disconnect(): void {
        console.log("Disconnect the Playwright to DataBase");
    }
    executeUpdate(): void {
        console.log("Execute the updated data in DataBase");
        super.executeQuery()
    }
    
}const pwc = new PlaywrightConnection()
pwc.connect()
pwc.disconnect()
pwc.executeUpdate()
pwc.executeQuery()