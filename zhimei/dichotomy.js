function bsearch (arr, target) {
  // 普通解法
  let [start, end] = [0, arr.length-1];
  while (start <= end) {      // Tip1: 注意符号
    let mid = start + ((end-start)>>1);   // Tip2: 用"位运算"取代"相加除2"
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      start = mid + 1;      // Tip3: start & end 的更新是 +1 & -1, 而非单纯赋值，mid位已经可以被排除了
    } else {
      end = mid - 1;
    }
  }
  return -1;
  // return bsearch2Internally (arr, 0, arr.length-1, target);  // 递归
}

/**
 * 二分法递归方法
 * @param {*} arr 
 * @param {*} target 
 */
function bsearch2Internally (arr, start, end, target) {
  if (start > end) { return -1; }
  let mid = start + ((end-start)>>1);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    return bsearch2Internally(arr, mid+1, end, target);
  } else {
    return bsearch2Internally(arr, start, mid-1, target);
  }
}

let arr = [8,11,19,23,27,33,45,55,67,98];
let target = 23;
let result = bsearch(arr, target);
console.log(`result: ${result}`);