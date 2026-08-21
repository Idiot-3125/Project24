import { Payments } from "./2_Payments.js";

export abstract class canaraBank {
    
    recordPaymentDetails():void {
        console.log("Payment details recorded in Canara Bank");
    }
    
}
//we cant ctrate a obj in abstarct class but we can create constructor 
// const canBank = new canaraBank()   
