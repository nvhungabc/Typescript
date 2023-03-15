//1. Function declaration
function func1() {
    console.log("Func1");
}
var func2 = function () {
    console.log("func2");
};
var func3 = function () {
    console.log("func3");
};
//2. function return
function func4() {
    return;
}
function sum(a) {
    return a;
}
function func5() {
    console.log("A nhon");
}
function func6() {
    while (true) {
    }
}
function func7() {
    var error = new Error("Đang lỗi");
    throw error;
}
//3. function parameter
function divide(a, b) {
    if (b) {
        return a - b;
    }
    else {
        return a;
    }
}
function divide2(a, b) {
    if (b === void 0) { b = 0; }
    return a - b;
}
//4. rest parameter
var show_class = function (name) {
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    return " ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classes.join(" , "));
};
console.log(show_class("Hung", "van", "toan"));
console.log(show_class("Hung hip", "van"));
//5. Callback
// const num_arr = [5, 6, 7]
// const temp = num_arr.map((item, index) => {
//     return item * 2
// })
// //
// const we17304_map = function (arr: number[], callback?: (item: number) => number) {
//     const temp = []
//     for (let i = 0; i < arr.length; i++) {
//         const newItemp = callback(arr[i])
//         temp.push(newItemp)
//     }
//     return temp;
// }
// const result = we17304_map(num_arr, (item) => {
//     return item * 2
// })
// console.log(result);
// //log ra đc index
// //console.log(show_class("Hung","van","toan"))
// const we17304 = function (arr: number[], callback?: (item: number, index: number) => number) {
//     const bost = []
//     for (let i = 0; i < arr.length; i++) {
//         const newBost = callback(arr[i], i)
//         bost.push(newBost)
//     }
//     return bost;
// }
// const hienThi = we17304(num_arr, (item, index) => {
//     return index
// })
// console.log(hienThi)
// const arrNum=[1,2,3,4,5,6,7]
// const arrStr=["hưng","long","hiếu"]
// function we17304_map<T>(arr: T[], callback: (item: T) => T): T[] {
//     let temp = []
//     for(let i = 0; i < arr.length; i++) {
//         const newItem = callback(arr[i])
//         temp.push(newItem)
//     }
//     return temp;
// }
// const result = we17304_map(arrStr, (item) => {
//     return item + " - we17304"
// })
// console.log(result);
