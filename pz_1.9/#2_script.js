let x =0
do{
    if (x === 0) {
        console.log(`${x}  - це нуль`);
    } else if (x % 2 === 0) {
        console.log(`${x} -  парне число`);
    } else if (x % 2 !== 0) {
        console.log(`${x} - не парне число`);
    }
    x++;
}while (x<=10)