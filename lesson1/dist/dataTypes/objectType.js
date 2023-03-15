//Array
var arr = ["a", "b", "c"];
var arr1 = [[1, 2, 3], [4, 5, 6]];
//any(không nên dùng)
var str3 = 10;
str3 = "hung";
str3 = [1, 2, 3];
//Tuples
var tuple = ["hưng", "hn", 20];
//enum
var STATUS;
(function (STATUS) {
    STATUS[STATUS["PENDING"] = 0] = "PENDING";
    STATUS[STATUS["REJECTED"] = 1] = "REJECTED";
    STATUS[STATUS["FULFILTIS"] = 2] = "FULFILTIS";
})(STATUS || (STATUS = {}));
var trangthai1 = STATUS.FULFILTIS;
console.log(trangthai1);
var CODE;
(function (CODE) {
    CODE[CODE["thanhcong"] = 200] = "thanhcong";
    CODE[CODE["loi1"] = 400] = "loi1";
    CODE[CODE["loi2"] = 500] = "loi2";
})(CODE || (CODE = {}));
;
//function
var upperCase = function (a) {
    if (typeof a == "string") {
        console.log(a.toLowerCase());
    }
    a.toString().toUpperCase();
};
// interface User {
//  username:string,
//  password:string,
//  email:string,
//  login: ()=>{}
//  logout:()=>{}
// }
//dùng Type
