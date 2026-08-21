import { DatabaseConnection } from "./3a_DataC.js";

class PlaywrightConnection implements DatabaseConnection{
    connect(): void {
        console.log('Connect the Playwright to DataBase');
    }
    disconnect(): void {
        console.log("Disconnect the Playwright to DataBase");
    }
    executeUpdate(): void {
        console.log("Execute the updated data in DataBase");
    }

}
const PWConnection = new PlaywrightConnection()
PWConnection.connect()
PWConnection.disconnect()
PWConnection.executeUpdate()