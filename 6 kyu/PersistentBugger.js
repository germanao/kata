function persistence(num) {
  
  let arr = num.toString().split('')
  let cont = 0;

   while(arr.length > 1){
    arr = arr.reduce((accumulator, currentValue) => accumulator * +currentValue).toString().split('');
    cont += 1
 }

  return cont
}