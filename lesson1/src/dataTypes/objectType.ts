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
//object
interface Book{
    authors:Author[],
    book_cover?:string,
    categories:Categories,
    current_seller:Current_seller,
    description:string,
    images:Images[],
    list_price:number,
    name:string,
    original_price:string,
    quantity_sold:Quantity_sold,
    rating_average:number,
    short_description:string,
    specifications: Specifications[]
    id: number,
}
interface Author{
    id:number,
    name:string,
    slug:string,
}
interface Categories{
    id:number,
    name:string,
    is_leaf:boolean,
}
interface Current_seller{
    id:number,
    name:string,
    sku:string,
    link:string,
    logo:string,
    price:number,
    product_id:number,
    store_id:number,
    is_best_store:boolean,
    is_offline_installment_supported:null,
}
interface Images{
        base_url:string,
        is_gallery:boolean,
        label:null,
        large_url:string,
        medium_url:string,
        small_url:string,
        thumbnail_url:string,
        position:null,
}
interface Quantity_sold{
    text:string,
    value:number,
}
interface Specifications{
    name:string,
    attributes: Attributes[]

}
interface Attributes {
    code: string,
    name: string,
    value: string
}
// interface User {
//  username:string,
//  password:string,
//  email:string,
//  login: ()=>{}
//  logout:()=>{}
// }
//dùng Type
