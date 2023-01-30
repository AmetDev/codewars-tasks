function addLength(str) {
  //start-here
  const str1 = str.split(" ")
  let array1 = []
  str1.forEach((value, index, array) => {
  array1.push(`${value} ${value.length}`)
  })
  return array1
  }