function transformString(str) {
    
    let firstPart = str.slice(0, 3).toUpperCase();
    
    let middlePart = str.slice(3, -3).toLowerCase();
   
    let lastPart = str.slice(-3).toUpperCase();
    
    return firstPart + middlePart + lastPart;
}


console.log(transformString("somEThinG")); 