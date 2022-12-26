let object = {a:1,b:"password",c:{single:12,newone:32}},finalObject={};
for( let entry of Object.entries(object)){
    if(typeof entry[1] === 'object')
    Object.assign(finalObject,entry[1])
    else
    finalObject[entry[0]]=entry[1];
}
console.log(finalObject);