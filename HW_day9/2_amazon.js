import { canaraBank } from "./2_canBank.js";
class amazon extends canaraBank {
    cashOnDelivery() {
        console.log("Payment successuly completed by cash on Delivery.");
    }
    upiPayments() {
        console.log("Payment successuly completed by UPI Paments.");
    }
    cardPayments() {
        console.log("Payment successuly completed by Card Payments.");
    }
    internetBanking() {
        console.log("Payment successuly completed by Internet Banking.");
    }
}
const payment = new amazon();
payment.cardPayments();
payment.cashOnDelivery();
payment.internetBanking();
payment.upiPayments();
payment.recordPaymentDetails();
