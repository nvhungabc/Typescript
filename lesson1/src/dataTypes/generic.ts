// function showStringData(a:string):string{
//     return a
// }
// function showNumberData(a:number):number{
//     return a
// }
// function showData<T>(a:T):T{
//     return a
// }
// //vd
// showData("hung");
// showData(10)
//
// const arrNum=[1,2,3,4,5,6,7]
// const arrStr=["hưng","long","hiếu"]
// function User<T>(arr:T[],callback:(item:T)=>T):T[]{
//     let temp=[]
//     for(let i=0;i<arr.length;i++){
//         const newitem=callback(arr[i])
//         temp.push(newitem)

//     }
//     return temp;
// }
// const result = User(arrStr, (item) => {
//     return item+" dz v ò"
// })
// console.log(result);
// const arrNum2=[13,1,3,5,8,2]
// arrNum2.sort((a,b)=>{
//     return a-b
// })
// console.log(arrNum2);
const arrNum3=[2,8,21,4,6,1,9,16,77,3]
const arrStr3=["a","h","c","l"]
// function selectSort(arr){
// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             let tem=arr[i]
//             arr[i]=arr[j]
//             arr[j]=tem
//         }
//     }
// }
// }
// selectSort(arrStr3)
// console.log(arrStr3);
// selectSort(arrNum3)
// console.log(arrNum3);
function selection<T>(arr:T[],callBack:(item:T,item2:T)=>number):T[]{
    for(let i=0;i<arr.length-1;i++){
    for(let j=i+1;j<arr.length;j++){
        if(callBack(arr[j],arr[i])<0){
            [arr[j],arr[i]]=[arr[i],arr[j]];
        }
    }
}
return arr;
}
function ascendingOrder(item: number, item2: number): number {
    return item- item2;
  }
  selection(arrNum3, ascendingOrder);
  console.log(arrNum3);
//   arrStr1.sort();
  
  arrStr3.sort().reverse();
  console.log(arrStr3);
  

// arrNum3.sort((a,b)=>(a-b));
// console.log(arrNum3);
// arrStr3.sort((a,b)=>a.localeCompare(b))
// console.log(arrStr3);

// const arrNum1 = [100,12,3,5] 
// const arrStr1 = ["ac","c","b"];
// function selectionSort<T>(arr: T[], callback: (a: T, b: T) => number): T[] {
//     const len = arr.length;
    
//     for (let i = 0; i < len - 1; i++) {  
//       for (let j = i + 1; j < len; j++) { 
//         if(callback(arr[j], arr[i]) < 0) {
//           [arr[j], arr[i]] = [arr[i], arr[j]];
         
//         }

//       }
      
//     }
//     return arr;
//   }
//   function ascendingOrder(a: number, b: number): number {
//     return a - b;
//   }
  
//   selectionSort(arrNum1, ascendingOrder);
//   console.log(arrNum1);
//   arrStr1.sort();
  
//   arrStr1.sort().reverse();
//   console.log(arrStr1);
  
    