const _ = require('lodash')

let array = [1,3,4,5,[2,4]];
let arrayFlattenned = _.flatten(array);
console.log(arrayFlattenned);
let sum2 = _.sumBy([
    {age: 19},
    {age: 20},
    {age: 12}
], (item) => item.age)
console.log(sum2);
let obj = {
    a:{
        b:{
            c:{
                d:1
            }
        }
    }
}
let value  = _.get(obj,"a.b.c.d");
console.log(value);