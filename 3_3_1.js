function printObjKeysValues(obj){
    for (let a in obj){
        if (obj.hasOwnProperty(a)){
            console.log(a, obj[a])
        }
    }
}