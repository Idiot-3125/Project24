export interface Payments{

    cashOnDelivery():void;
    upiPayments():void;
    cardPayments():void;
    internetBanking():void;

}
//all interface are consider as incomplete actions, we cant ctrate a obj in interfacs 