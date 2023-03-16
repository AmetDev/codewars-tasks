function bubblesortOnce(a) {
    let newarr  = a.slice()
    for (let i = 0; i < newarr.length; i++) {
        if (newarr[i] > newarr[i+1]) {
            let tmp = newarr[i];
            newarr[i] = newarr[i+1];
            newarr[i+1] = tmp;

        }
    }
    return newarr; //?
}

console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));

