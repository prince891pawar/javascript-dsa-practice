// let prompt = require('prompt-sync')();
// let n = Number(prompt("enter a number"));

// for(let i=1; i<=n; i++){
//     for(let j=1; j<=i; j++){
//         process.stdout.write("*")
//     }
//     console.log();
// }

// let arr = new Array(5);

// for(let i=0; i<arr.length; i++ ){
//     arr[i] = Number(prompt("Enter a number "));
// }
// console.log(arr);


// find the max value of array
// let arr = [20, 59, 10, 28, 29]
// let max = arr[0];
// for(let i=1; i<arr.length; i++){
//     if(max<arr[i]){
//         max = arr[i]
//     }
    
// }
// console.log(max)

//find the second max value of array
let arr = [10, 59, 39, 30, 93, 48]; 
let max = Math.max(arr[0], arr[1])
let smax = Math.min(arr[0], arr[1])

for(let i=2; i<arr.length; i++){
    if(arr[i]>max){
        smax = max
        max = arr[i];
    }else if(arr[i]>smax){
        smax = arr[i]
    }
}
console.log(smax)