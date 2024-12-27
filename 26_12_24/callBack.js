function displayMessage(name) {
  console.log(`Hello ${name}`);
}
function getUserInput(callback) {
    setTimeout(() =>{
        callback("Aman")
    },1000)
}


getUserInput(displayMessage)
