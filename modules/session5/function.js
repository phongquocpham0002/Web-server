// const fs = require('fs')
// function sum(a,b){
//     console.log(arguments)
//     return a+b;
    
// }

//1.arguments
// console.log(sum.length)// so luong arguments chuyen vao ham
// sum(1,2)
// function log(){
//     let dataToLog = arguments;
//     for(let item of dataToLog){
//         console.log(item)
//     }
// }

// function log(...dataToLog){
//     for(let item of dataToLog){
//         console.log(item);
//     }
// }
//  log(1,2,3,4);
//  log(...[1,2,3,4,5]);
//  // 2. Async function vs sync function
//   // async function: return a Promise
//   // callBack function: require a callback
//   function doTask(callback){
//       console.log('doing task!');
//       callback();
//   }
//   doTask(function(){
//       console.log('done');
//   })
// // async function
// // async/await: only available when place before an promise
// // function readFileAsync(path){
// //     return new Promise(function(resolve, reject){
// //         fs.readFile()
// //     })
// // }
// // 3. pure function vs impure function
// function sum(a,b){
//     return a+b;
// } // pure function
// let number = 0;
// function sumImpure(a){
//     number = number + a;
//     return number;
// }
// console.log(sumImpure(1));
// console.log(sumImpure(1));
// console.log(sumImpure(1));
// console.log(sumImpure(1));
// 3. this vs .bind()
// function printThis(){
//     console.log(this)
// }
// printThis(); // global
// let containerA = {
//     name: "A",
//     printThis: printThis.bind(global)
// }
// let containerB = {
//     name: "B",
//     printThis: printThis
// }
// containerA.printThis();
// containerB.printThis();

// arrow function
const multiply = () => {console.log(this)}; // auto bind this
const containerX = {
    name: 'X',
    multiply: multiply
}
const containerY = {
    name: 'Y',
    multiply: multiply
}
containerX.multiply;
containerY.multiply;
multiply();
