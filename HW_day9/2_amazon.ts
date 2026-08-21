import { Payments } from "./2_Payments.js"
import { canaraBank } from "./2_canBank.js"
class amazon extends canaraBank implements Payments{

    cashOnDelivery(): void {
        console.log("Payment successuly completed by cash on Delivery.")
    }
    upiPayments(): void {
        console.log("Payment successuly completed by UPI Paments.")
    }
    cardPayments(): void {
        console.log("Payment successuly completed by Card Payments.")
    }
    internetBanking(): void {
        console.log("Payment successuly completed by Internet Banking.")
    }
}
const payment = new amazon()
payment.cardPayments()
payment.cashOnDelivery()
payment.internetBanking()
payment.upiPayments()
payment.recordPaymentDetails()