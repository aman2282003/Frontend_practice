const mathOperations = {
    add(a,b){
        return a+b
    },
    subtract(a,b){
        return a-b
    },
    divide(a,b){
        if(b==0){
            return "cannot divide any number with 0"
        }
        else{
                  return a / b;
        }
  
    },
    multiply(a,b){
        return a*b
    }
};


console.log(mathOperations.divide(5,0))