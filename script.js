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
// let arr = [10, 59, 39, 30, 93, 48]; 
// let max = Math.max(arr[0], arr[1])
// let smax = Math.min(arr[0], arr[1])

// for(let i=2; i<arr.length; i++){
//     if(arr[i]>max){
//         smax = max
//         max = arr[i];
//     }else if(arr[i]>smax){
//         smax = arr[i]
//     }
// }
// console.log(smax)


//reverse array 
// let arr = [10, 20,  30, 40, 50];
// let temp = new Array(arr.length)
// let j = 0;

// for(let i=arr.length-1; i>=0; i--){
//     temp[j] = arr[i]; 
//     j++;
// }
// console.log(temp)

//reverse array second devision 
// let arr = [10, 20, 30, 40, 50];
// let i = 0, j = arr.length-1

// while(i!=j){
//    let temp = arr[i]
//    arr[i] = arr[j]
//    arr[j] = temp
//    i++
//    j--
// }
// console.log(arr)

// in the array all zero one side and all the 1 is one side
// let arr = [0, 1, 0, 1, 0, 1, 0, 1, 0]
// let i = 0, j = 0

// while(i<arr.length){
//   if(arr[i]==0){
//     let temp = arr[0]
//     arr[i] = arr[j]
//     arr[j] = temp
//     j++
//   }
//   i++
// }
// console.log(arr)



// let arr = [-2, 3, -3, 9, -2, 9, -6];

// let i = 0;
// let j = arr.length - 1;

// while (i < j) {

//     // Agar left side positive hai, aage badho
//     if (arr[i] > 0) {
//         i++;
//     }

//     // Agar right side negative hai, peeche aao
//     else if (arr[j] < 0) {
//         j--;
//     }

//     // Left negative aur right positive hai → swap
//     else {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;

//         i++;
//         j--;
//     }
// }

// console.log(arr);


// let left rotation by 1 element 
// let arr = [1, 2, 3, 4, 5]
// let copy = arr[0];

// for(let i=0; i<arr.length-1; i++){
//     arr[i] = arr[i+1]
// }
//  arr[arr.length-1] = copy 

//  console.log(arr);

// let right rotation by 1 element 
let arr = [1,2,3,4,5]
let copy = arr[arr.length-1]

for(let i=arr.length-1; i>0; i--){
   arr[i] = arr[i-1]
}
  arr[0] = copy

  console.log(arr);