"use strict";
class repeat {
    //customized implemention
    repeatStep(msg, status, snap) {
        if (snap) {
            console.log("Snap visibility ", status);
        }
        else if (msg) {
            console.log("The msg contains ", msg);
        }
    }
}
const repeats = new repeat();
repeats.repeatStep("Hi", `online`);
repeats.repeatStep("Hello", `offline`, true);
