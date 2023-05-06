export function uuidJob(key:string){
    let value:string = "zj"
    const length:number = key.length;

    for(let i=0; i< length;i++)
        value += key.charCodeAt(i).toString(16)

    const uuid:string = value.substring(0,20)
    return {value,uuid};
}


// in case needed 
function decode(value:string){
    let string = "";
    value = value.slice(2);
    const length = value.length;
    for (var i = 0; i < length;) {
        var code = value.slice(i, i += 2);
        string += String.fromCharCode(parseInt(code, 16));
    }
    return string;
}