let flag: boolean = true;
console.log("Value assigned to Boolean is " + flag);

let myNumber: number = 43;
console.log("My number is " + myNumber);

let myName: string = "Harold";
console.log("My name is " + myName);

let myArray: number[] = [1,2,3];
//for(let i=0;i<myArray.length;i++){
//    console.log("The value in myArray is " + myArray[i]);
//}

myArray.forEach((item) => {
    console.log(item);
})

let myUnknown: any = "anything we want";
console.log("My any value is " + myUnknown);