const array1 = [5,4,3,2,2,6] , array2 =[7,6,9,9,9,9,8,8,8];
let combinedArray = [],count = 0,element ,counts=[],finalArray=[];
combinedArray = array1.concat(array2);
combinedArray.sort();
for (let i = 0 ; i<combinedArray.length;i++){
    count = 0;
    element = combinedArray[i];
    for (let j = 0; j < combinedArray.length; j++) {
        if(element===combinedArray[j]){ 
            count ++;
        }
    }
    finalArray.push(count +""+element)
}
finalArray = removeDuplicate(finalArray);
finalArray = finalArray.toString().replace(/,/g,'');
console.log(finalArray)
function removeDuplicate(array){
    const finalArray = []
    for(let i = 0 ;i<array.length;i++){
       if(array[i]!== array[i+1])
       {finalArray.push(array[i]);}
     }
     return finalArray;
}