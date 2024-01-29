function count_with_spaces(value:string){
    let count = value.length;
    return  count;
}
console.log(count_with_spaces("test 1"));

function count_without_spaces(value:string){
    let count = value.replace(" ","").length;
    return count;
}
console.log(count_without_spaces("test 1"));

function count(value:string, spaces?:boolean){
    let count:number = 0;
    if(spaces){
        count = value.length;
    }else{
        count = value.replace(" ","").length;  
    }
    return count;
}
console.log(count("test 1"),true);
console.log(count("test 1"));
