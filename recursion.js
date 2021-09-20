/*for(let i=1;i<=10;i++){
    console.log(i);
    if(i==5){
        break; // helps to terminate the loop
    }
}*/

function print(number){
    console.log(number);
    number++;
    if(number <=5){
        print(number); // Executing the same function from the function
    }
    // return;
}

print(1);
// print(2);
// print(3);
// print(4);
// print(5);

console.log("Thank You");

