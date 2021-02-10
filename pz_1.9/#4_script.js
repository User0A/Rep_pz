let x = prompt('Скільки етажів у трикутнику ви бажаєте?')

let output = "";
for (var y=1; y<x; y++){
    output +="*";
    console.log(output);
}

console.log("\n");
let output_prm = "";
for (var g=1; g<x-1; g++){
    output_prm += " ";
}
let str = "*";
console.log(output_prm + str);
number = 1;
for (let j=1; j<x-1; j++){
    str+="**";
    output_prm = output_prm.substr(0,output_prm.length-1);
    console.log(output_prm + str);
}

console.log("\n");
let output_prm_1 = "";
for (var k=1; k<x-1; k++){
    output_prm_1+=" ";
}
let str_1= "*";
console.log(output_prm_1 + str_1);
for (let j=1; j<x-1; j++){
    str_1+="**";
    output_prm_1 = output_prm_1.substr(0, output_prm_1.length-1);
    console.log(output_prm_1 + str_1);
}
for( let j=1; j<x-1; j++){
    str = str.substr(0, str.length-2);
    output_prm+=" ";
    console.log(output_prm + str);
}