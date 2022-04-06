
var courses = [
    {
        id: 1,
        name:'javascript',
        coin: 600,
        isFinished: false,
    },
    {
        id: 2,
        name:'php',
        coin: 660,
        isFinished: false
    },
    {
        id: 3,
        name:'java',
        coin: 400,
        isFinished: true,
    },
    {
        id: 4,
        name:'python',
        coin: 500,
        isFinished: false,
    },
];

var num = [1,2,3,4,5]

Array.prototype.reduce2 = function (callback, result) {
    // var i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (var i = 0; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}



var result = num.reduce2(function (acc, curr, index, array) {
    // console.log(acc, curr, index, array)
    return acc + curr
})
console.log(result)


// Array.prototype.map2 = function (callback) {
//     ouput = [];
//     for (var i = 0; i < this.length; i++) {
//          result =  callback(this[i], i, this);
//          ouput.push(result);
//     }
//     return ouput;
// }


// var result = courses.map2(function(course) {
//     return `<h2>${course.name}</h2>`
// })


// console.log(result.join(', '))

// Array.prototype.forEach2 = function(callback) {
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//             callback(this[index], index, this)
//         }
//     }
// }


// var result = courses.forEach2(function(course) {
//     console.log(course)
// })

// Array.prototype.filter2 = function(callback) {
//     ouput = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//          var result = callback(this[index], index, this)
//          if (result) {

//              ouput.push(this[index]);
//          }
//         }
//     }
//     return ouput;
// }



// var result = courses.filter2(function(course) {
//     return course.coin >500;
// })

// console.log(result)

// Array.prototype.some2 = function(callback) {
//     ouput = false;
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//            if (callback(this[index], index, this)) {
//                ouput = true;
//                break;
//            };
//         }
//     }
//     return ouput;
// }



// var result = courses.some2(function(course) {
//     return course.coin >500;
// })

// console.log(result)

// Array.prototype.every2 = function(callback) {
//     ouput = true;
//     for(var index in this) {
//         if(this.hasOwnProperty(index)) {
//            result = callback(this[index], index, this)
//             if(!result) {
//                 ouput = false;
//                 break;
//             }
//         }
//     }
//     return ouput
// }


// var result = courses.every2(function(course) {
//     return course.coin >=500;
// })

// console.log(result)