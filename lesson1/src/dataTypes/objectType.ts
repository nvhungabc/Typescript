//Array
const arr:string[]=["a","b","c"];
const arr1:number[][]=[[1,2,3],[4,5,6]];
//any(không nên dùng)
var str3:any=10;
str3="hung"
str3=[1,2,3]
//Tuples
const tuple:[string,string,number]=["hưng","hn",20]
//enum
enum STATUS{PENDING,REJECTED,FULFILTIS}
const trangthai1:STATUS=STATUS.FULFILTIS
console.log(trangthai1);
enum CODE{thanhcong=200,loi1=400,loi2=500};
//function
const upperCase=(a:string|number|string)=>{
    if(typeof a=="string"){
        console.log(a.toLowerCase());

    }
    a.toString().toUpperCase()
}