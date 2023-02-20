function sortByBinaryOnes(list){
    // your code here

    newarr = [];
    list.forEach(element => {
        newarr.push((element).toString(2));
      });
    console.log(newarr);
    let ch = '1';
    let new1 = [];
    for(i = 0; i < newarr.length; i++) {
      var count = [...newarr[i]].filter(x => x === ch).length;
      new1.push(newarr[i] = count)
    }
    console.log(new1)
   
  }

sortByBinaryOnes([1,15,5,7,3,7])