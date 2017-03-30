function factorialFor(num){
  total = 1;
  for(i=num;i>1;i--){
    total *= i;
  }
  return total;
}
console.log(factorialFor(5));

function multiplySeqFor(num1,num2){
  total=1;
  for(i=num1;i>=2;i=i-num2){
    total*=i;
  }
  return total;
}

console.log(multiplySeqFor(12,5));
