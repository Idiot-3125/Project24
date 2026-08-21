import { DatabaseConnection } from "./3a_DataC.js";

export abstract class MySqlConnection{

    executeQuery(){
        console.log("Execute the givan Query in DataBase.")
    }
}