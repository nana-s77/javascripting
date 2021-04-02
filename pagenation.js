// range 関数はこのまま使ってください。  
function range(start, end) {  
  const r = [];  
  // Math.floor() 関数は与えられた数値以下の最大の整数を返します。
  // スタートの数字がエンドの数字よりも大きくなるまでは数字に1を足していく
  for (let i = Math.floor(start); i < Math.floor(end); i++) {  
    // for(let i = 0; i < 5; i++ ){
      r.push(i+1); 
  }  
  return r;  
}  
  
function getPageNums(current, total, size) {  
  // ここにロジックを書いてください  
  // 配列の始まりは現在のページから size の半分の長さ分引いたものを開始位置、
  // 半分の長さ分足したものを終了位置とする

  let startNum = current - size/2;
  let endNum = current + size/2;

  // 始まりが負の数の時
  if (0 > startNum ) {
    startNum = 0;
    endNum = size;
  } 

  // 終わりがトータルページを超える場合
  if (endNum > total) {
    endNum = total;
    startNum = total - size;
  }

  
  return range(startNum, endNum);

  // range(startNum,endNum);
} 

// console.log(getPageNums(4, 8, 3)); 
console.log(getPageNums(1, 5, 5));  
console.log(getPageNums(3, 5, 5));  
console.log(getPageNums(4, 6, 5));  
console.log(getPageNums(3, 8, 6));  
console.log(getPageNums(4, 8, 6));  
console.log(getPageNums(4, 8, 3));  