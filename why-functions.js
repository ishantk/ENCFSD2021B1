let numbers = [10, 20, 30, 40, 70, 12, 33, 15];
console.log(typeof numbers);
console.log(numbers[0]);
console.log(numbers.length);

for(let idx=0; idx<numbers.length; idx++){
    console.log(numbers[idx]);
}

let marks = [50, 75, 20, 88, 45];
let productPrices = [4234, 2334, 41231, 643, 1345, 5666];
let scores = [12, 34, 54, 122, 35];

/*
let max = marks[0]; // 50

for(let idx=1; idx<marks.length;idx++){
    if(marks[idx] > max){
        max = marks[idx]; // max = 88
    }
}

console.log("Maximum is:"+max);

max = productPrices[0];

for(let idx=1; idx<productPrices.length;idx++){
    if(productPrices[idx] > max){
        max = productPrices[idx]; 
    }
}

console.log("Maximum is:"+max);

max = scores[0];

for(let idx=1; idx<scores.length;idx++){
    if(scores[idx] > max){
        max = scores[idx]; 
    }
}

console.log("Maximum is:"+max);
*/

function findMax(data){
    let max = data[0];
    for(let idx=1; idx<data.length;idx++){
        if(data[idx] > max){
            max = data[idx]; 
        }
    }
    return max;
}

console.log("Maximum in marks is:"+findMax(data=marks));
console.log("Maximum in productPrices is:"+findMax(data=productPrices));
console.log("Maximum in scores is:"+findMax(data=scores));