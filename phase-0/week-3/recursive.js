function factorialRecur(num){
  if(num==1){
    return 1;
  }
  else{
    return num * factorialRecur(num - 1);
  }
}

console.log(factorialRecur(5));

function multiplySeqRec(num1,num2){
  if(num1-num2===2){
    return num1 *2;
  }
  else{
      return num1 * multiplySeqRec(num1-num2,num2);
  }
}

console.log(multiplySeqRec(12,5));
