// 0 - 99 までの数字  
const numbers = [...Array(100).keys()];  
// const primes = <need to filter isPrime and map to HexString>;  
{/* console.log(primes)  */}

const primes = (number) => {
  if(number < 2) {
    return false;
  }
  for( i = 2; i < number; i++) {
    if(number % i === 0) {
      return false;
    }
  }
  return true;


  // if (number % 2 === 0) {
  //   // console.log("bbb");
  //   return false
  // } else if (number % 3 === 0) {
  //   // console.log("ccc");
  //   return false
  // } else if (number % 4 === 0) {
  //   // console.log("ddd");
  //   return false
  // } else if (number % 5 === 0) {
  //   // console.log("eee");
  //   return false
  // } else if (number % 6 === 0) {
  //   // console.log("f");
  //   return false
  // } else if (number % 7 === 0) {
  //   // console.log("g");
  //   return false
  // } else if (number % 8 === 0) {
  //   // console.log("h");
  //   return false
  // } else if (number % 9 === 0) {
  //   // console.log("i");
  //   return false
  // } else {
  //   // console.log(`${number}は素数`);
  //   return true;
  // }
};

// for (i=0; i < numbers.length; i++) {
//   primes(i);
// }
// filterした入れるのmapをかける
const primeNum = numbers.filter((item) => primes(item)).map((num)=>num.toString(16));

// この書き方もできる
const primeNum_sample = numbers.filter(primes).map((num)=>num.toString(16));


console.log(primeNum);

// 素数 ２から始まって１とそれ自身でしかわれない数
