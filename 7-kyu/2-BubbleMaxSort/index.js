function bubblesortOnce(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            if (a[j] > a[j+1]) {
                a[j] = Math.max(a[j]);
                let tmp = a[j]
                a[j] = a[j+1]
                a[j+1] = tmp
            }
        }
    }
    return a
}


console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
