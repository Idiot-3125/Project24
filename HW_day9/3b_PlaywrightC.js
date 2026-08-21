import { MySqlConnection } from "./3b_MySQLC.js";
class PlaywrightConnection extends MySqlConnection {
    connect() {
        console.log('Connect the Playwright to DataBase');
    }
    disconnect() {
        console.log("Disconnect the Playwright to DataBase");
    }
    executeUpdate() {
        console.log("Execute the updated data in DataBase");
        super.executeQuery();
    }
}
const pwc = new PlaywrightConnection();
pwc.connect();
pwc.disconnect();
pwc.executeUpdate();
pwc.executeQuery();
