//Assignment-1
let firstName = "Raveendra"
let companyName = "ABC Corp"
let mobileNumber = 1234567890
let isAutomation = true
let hasPlaywright 

console.log(typeof firstName, typeof companyName, typeof mobileNumber, typeof isAutomation, typeof hasPlaywright)

//Assignment-2
let num=-4
function numvalue(){
    if(num>0)
    {
        console.log(num," is a Positive number.")
    }
    else if(num<0)
    {
        console.log(num," ia a Negative number.")
    }
    else
    {
        console.log(num," is a Zero.")
    }
}numvalue()

//Assignment-3a and 3b
let browserName='chrome'
function launchBrowser(){
    if(browserName==="chrome"){
        console.log("The browser is",browserName)
    }
    else{
        console.log("It is a different browser.")
    }
}launchBrowser()

let testType='sanity'
function runTests(){
    switch (testType){
        
        case "smoke" :
            console.log('smoke')
            break 
        case "regression" :
            console.log('regression')   
            break
        case "sanity" :    
            console.log('sanity')
            break
        default :
        console.log("smoke")
    }

}runTests()

//Assignment-4

let stdscore=90

function studentScore(){

    switch (true) {

        case (stdscore>80):
            console.log("Student passed weith A grade")
            break
        case (80<=stdscore>60) :
            console.log("Student passed weith B grade")
            break
        case (60<=stdscore>35):
            console.log("Student passed weith c grade")
            break
        default :
            console.log("Student is failed") 
    }

}studentScore()