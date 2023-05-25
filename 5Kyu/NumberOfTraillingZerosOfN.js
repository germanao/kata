function zeros (n) {
  // your code here 
  if(+n < 25) return parseInt((+n / 5).toString(),10)

  return parseInt(((n % 25)/5).toString(),10) + ((parseInt((n/25).toString(),10)) * (5 + n.toString().length))
}

console.log(zeros(5))
console.log(zeros(6))
console.log(zeros(100)) //24

console.log(zeros(123)) //28
console.log(zeros(124)) //28
console.log(zeros(125)) // 31

console.log(zeros(1249)) // 308
console.log(zeros(1250)) // 312