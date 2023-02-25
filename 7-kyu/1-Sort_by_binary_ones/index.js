function sortByBinaryOnes(list){
    // your code here
    let symbols= [];
    let newarr = [];
    //"1111", "101"
    list.forEach(element => {
        newarr.push((element).toString(2));
      });
    console.log('newarr', newarr)
    let ch = '1';
    let new1 = [];
    for(i = 0; i < newarr.length; i++) {
      symbols.push(newarr[i].length);
      var count = [...newarr[i]].filter(x => x === ch).length;
      new1.push(newarr[i] = count)
    }
    
    console.log('new1',new1)
    console.log('symbols', symbols)
    function selectionSort(new1) {
      for (let i =0; i < new1.length; i++) {
          let indexMin = i;
          for (let j = i+1; j < new1.length; j++) {
              if(new1[j] > new1[indexMin] || new1[j] == new1[indexMin] && symbols[j] > symbols[indexMin]) {
              //1) 0 < 3 //true
              //2) 2 < 3 // true
              //3) 7 < 3 //false
              //4) 6 < 7 //true
                indexMin = j;
              }
              count += 1;
          };
          let tmp = new1[i]
          new1[i] = new1[indexMin]
          new1[indexMin] = tmp
          console.log(`${i}=${new1[i]}`)
      }
      return new1.toString(10)
    }
    return selectionSort(new1)
   
}

console.log(sortByBinaryOnes([1,15,5,7,3]))
