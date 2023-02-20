function sortByBinaryOnes(list){
    // your code here
    newarr = [];
    list.forEach(element => {
        newarr.push((element).toString(2));
      });
    console.log(newarr);
    let start = 0;
    let count = 0;
    let end = newarr.length; 
    let middle;
    let found = false;
    let position = -1;
    while(found === false && start <= end) {
        count += 1;
        middle = Math.floor((start+end)/2);
        if(newarr.length === middle) {
            
        }
    }
  }

sortByBinaryOnes([19,15,5,7,3])