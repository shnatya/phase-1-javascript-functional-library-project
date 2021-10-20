const TestArr = [6, 2, 3, 3, 4, 1001]
  const TestObj = {one: 5, two: 6, three: 7, four: 8}

function myEach(collection, cb) {
    let tempArray = []
    //if collection is an object, we create an
    //array that contains the object's values.
    if(!(Array.isArray(collection))) {
        tempArray = Object.values(collection);
    } else {
        tempArray = collection;
    }
    
    for(let i=0; i < tempArray.length; i++) {
        
        cb(tempArray[i]);
    }
    
    console.log(collection)
    return collection;
}

function myMap(collection, cb) {
    let tempArray = [];
    let newArr = [];

    if(!(Array.isArray(collection))) {
        tempArray = Object.values(collection);
    }else{
        tempArray = collection;
    }

    for(let i = 0; i < tempArray.length; i++){
        newArr[i] = cb(tempArray[i]);
    }
    return newArr;
}

function myReduce(collection, cb, acc) {
    let tempArray = [];
    let result = 0; 
    let firstValue = 0;

    if(!(Array.isArray(collection))) {
        tempArray = Object.values(collection);
    }else{
        tempArray = collection;
    }
    //If a start value of acc is not passed to myReduce, the first value in the
    //collection should be used as the start value. tempArray now is without the first
    //element. the first element = acc = firstValue
    if(typeof(acc) === "undefined") {
        firstValue = tempArray.slice(0, 1)[0];
        tempArray = tempArray.slice(1)
    }else{
        firstValue = acc;
    }

    for(let i = 0; i < tempArray.length; i++){
        result = cb(firstValue, tempArray[i], tempArray);
        firstValue = result;
    }
    return result;
}
function myFind(collection, predicate) {
    let tempArray = [];

    if(!(Array.isArray(collection))) {
        tempArray = Object.values(collection);
    }else{
        tempArray = collection;
    }

    for(let i = 0; i < tempArray.length; i++){
       if( predicate(tempArray[i])) {return tempArray[i]}
    }
    return  undefined;
}
function myFilter(collection, predicate) {
    let tempArray = [];
    debugger
    if(!(Array.isArray(collection))) {
        
        tempArray = Object.values(collection);
    }else{
        tempArray = collection;
    }

    let result = [];
    debugger
    for(let i = 0; i < tempArray.length; i++){
        debugger
       if( predicate(tempArray[i])) {
           debugger
            result.push(tempArray[i]);
        }
    }
    debugger
    return  result;
}
function mySize(collection) {
    let tempArray = [];
    
    if(!(Array.isArray(collection))) {
        
        tempArray = Object.values(collection);
    }else{
        tempArray = collection;
    }

    let count = 0; 
    for(let i=0; i < tempArray.length; i++){
        count += 1;
    }
    return count
}
function myFirst(array, n) {
    if(typeof(n) === "undefined") {
        debugger
        return array[0];
    }else{
        debugger
        let newArray = [];
        for(let i = 0; i < n; i++){
            newArray.push(array[i])
        }
        return newArray
}}
function myLast(array, n) {
    if(typeof(n) === "undefined") {
        debugger
        return array[`${array.length-1}`];
    }
    else{
        let newArray = [];
        for(let i = array.length - n; i<array.length; i++){
            newArray.push(array[i])
        }
        return newArray
    }
}
function myKeys(object){
    //let array = Object.entries(object);
    let newArr = [];
    for(let key in object){
        newArr.push(key)
    }
    // for(let i = 0; i < array.length; i++){
    //     newArr.push(array[i][0])
    // }
    return newArr
}
function myValues(object){
   //let array = Object.entries(object);
    let newArr = [];
    // for(let i = 0; i < array.length; i++){
    //     newArr.push(array[i][1])
    // }
    for(let key in object){
        newArr.push(object[key])
    }
    return newArr
}
// function myKeys(object){
//     let array = [];
//     let newStr = '';
//     str = JSON.stringify(object);
//     for(let i = 1; i < str.length; i++){
//         if(str[i] === ":"){array.push(newStr)}
//         else{newStr = newStr + `${str[i]}`
//         console.log(newStr)}
//     }
//     console.log(array)
// }
