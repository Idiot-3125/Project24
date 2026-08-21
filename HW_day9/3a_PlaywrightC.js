class PlaywrightConnection {
    connect() {
        console.log('Connect the Playwright to DataBase');
    }
    disconnect() {
        console.log("Disconnect the Playwright to DataBase");
    }
    executeUpdate() {
        console.log("Execute the updated data in DataBase");
    }
}
const PWConnection = new PlaywrightConnection();
PWConnection.connect();
PWConnection.disconnect();
PWConnection.executeUpdate();
export {};
