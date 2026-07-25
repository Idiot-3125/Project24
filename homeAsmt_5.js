// Task 1: Function Declaration 
function userProfile1(user){
    console.log(`Hello, ${user}!`)
}userProfile1("Ravi")


// // Task 2: Arrow Function 
let double=a =>(a*2)
console.log(6*2)


// Task 3: Anonymous Function 
setTimeout(function(){
    console.log("This message is delayed by 2 seconds")
})


// Task 4: Callback Function 
// Create a function named `getUserData` that takes a callback function as a parameter. Inside 
// `getUserData`, simulate fetching data with `setTimeout` and then call the callback function 
// with a user object after 3 seconds. 
// Call the `getUserData` function and log the user's name and age using the callback function.
function userProfile(){
    console.log("Hello, Ram!")
}
function setTimeout(){
    console.log("This message is delayed by 2 seconds")
}
function getUserData(user,timeout,profile){
    console.log(user+" is logged in")
    timeout()
    profile()
}getUserData("Ram",setTimeout,userProfile)

