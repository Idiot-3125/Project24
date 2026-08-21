class repeat{

    public repeatStep(msg:string,status:string):void;
    public repeatStep(msg:string,status:string,snap:boolean):void;

    //customized implemention
    public repeatStep(msg?:string,status?:string,snap?:boolean):void{
        if(snap){
            console.log("Snap visibility ",status)
        }else if(msg){
            console.log("The msg contains ",msg)
        }
    }

}
const repeats =new repeat()
repeats.repeatStep("Hi",`online`)
repeats.repeatStep("Hello",`offline`,true)
