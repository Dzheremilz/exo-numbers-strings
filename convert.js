const array = [10, 15, 16, 5005, 52390903]

array.forEach((elem, i) => {
  console.log(`En base 10: ${array[i]}, en binaire: ${array[i].toString(2)}, en octal: ${array[i].toString(8)}, en hexadécimal: ${array[i].toString(16)}`)
})