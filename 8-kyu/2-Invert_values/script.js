
function invert(array) {
    let array1 = []
    for(i=0; i < array.length; i++) {
        if(array[i] >= 0) {
           array1.push(array[i]*(-1))
        }
        else if(array[i] < 0){
            array1.push(array[i]*(-1))
            
        }
    }  
    return array1;   
}