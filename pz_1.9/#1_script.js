let x =0;
while (x<100) {
    if (x != 1) {
        if (x == 2 || x == 3 || x == 5 || x == 7)
            console.log(x);
        if (x % 2 != 0 && x % 3 != 0 && x % 5 != 0 && x % 7 != 0)
            console.log(x);
    }
    x++;
}