// To solve a probelm with recursion
// Firstly, it must be iterative
// Base Condition where my program is suppose to terminate

function findMax(data, length){
    if(length == 1){
        return data[0]; // termination condition
    }else{
        let num = findMax(data, length-1);
        if(num > data[length-1]){
            return num;
        }else{
            return data[length-1];
        }
    }
}

numbers = [10, 20, 30]
let result = findMax(data=numbers, length=numbers.length)
console.log("Result is: "+result);