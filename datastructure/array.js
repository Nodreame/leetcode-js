/**
 * [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
 *   - base
 *   - properties
 *   - method
 *   - ES6
 */
let fruits = ['Apple', 'Banana'];
console.log('fruits:', fruits);
console.log('first:', fruits[0]);
console.log('last:', fruits[fruits.length-1]);
fruits.forEach(function (item, index, array) {
  console.log(item, index);
})
console.log('add to the end(return len):', fruits.push('Orange'));
console.log('array after add:', fruits);
console.log('remove from the end(return value):', fruits.pop());
console.log('array after remove:', fruits);
console.log('remove from the front(return value):', fruits.shift());
console.log('array after remove:', fruits);
console.log('add to the front(return len):', fruits.unshift('Strawberry'));
console.log('array after add:', fruits);
let removeIndex = fruits.indexOf('Banana')
console.log('find the index:', removeIndex);
console.log('remove an item from an index position(return value):', fruits.splice(removeIndex, 1));
console.log('array after remove from an index position:', fruits);
// 总结：插入总是返回数组长度，移除总是返回移除的值


// 官方说 slice 进行了浅拷贝
let shallowCopy = fruits.slice();
console.log('shallowCopy:', shallowCopy);
fruits.push('watermelon');
console.log('origin array after add an item:', fruits);                   // [ 'Strawberry', 'watermelon' ]
console.log('shallowCopy after origin array add an item:', shallowCopy);  // [ 'Strawberry' ]
// 结果与原数组不同
let testArr = [{a:1}, {b:1}];
let shallowArr = testArr.slice();
console.log('testArr === shallowArr:', testArr === shallowArr); // false
console.log('testArr[0] === shallowArr[0]:', testArr[0] === shallowArr[0]); // true
// 由上可知slice并不是直接返回原数组，而是返回了包含对象内容的新数组

// 数组语法 -- 创建方式
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(1, 2, 3, 4, 5);
let arr3 = new Array(5);
console.log('arr1:', arr1);
console.log('arr2:', arr2);
console.log('arr3:', arr3);

// 描述：
//  1. JS数组是具备操作方法的列表式对象，数组长度 & 元素类型都是不固定的, 
//    因此数据的存储空间不像其他静态语言一样是连续的（可能对随机读写性能有影响）
//  2. JS数组只能用整型数字做下标，通过中括号或者'.'来使用一个非整型数字对数组进行设置或者获取值是不会成功的，
//    但是这个操作将会尝试在数组的对象属性集上添加或获取. 数组的对象属性和数组元素列表是分开的，
//    并且数组的遍历和变化方法将不会应用在这些对象属性上。

// 数组元素访问
//   数组元素可以看做是数组对象的属性，但是略有不同：
//      - 访问数组元素时只能用中括号+整型数字的方式访问(例如 arr[2]), 
//      - 用点号形式访问会出语法错误（例如arr.2, 这个源自JS的规则，数字开头的属性必须用中括号方式访问）
let yearArr = [1995, 1996, 1997];
// console.log('yearArr.0:', yearArr.0);    // 语法错误
console.log('yearArr.0:', yearArr['0']);    // 1995
console.log('yearArr[0]:', yearArr[0]);     // 1995 
// 访问数字开头的属性
yearArr['3d'] = 1234;
console.log('yearArr[\'3d\']:', yearArr['3d']); // 1234
// console.log('yearArr.3d:', yearArr.3d);  // 语法错误

// 数组长度与数组
// 数组改变或长度改变，都会对对方造成影响；
fruits = [];
fruits.push('banana', 'apple', 'peach');
console.log('fruits:', fruits);
console.log('fruits.length:', fruits.length);
fruits[5] = 'mango';    // 添加数组对象
console.log('fruits:', fruits);
console.log('fruits.length:', fruits.length);
fruits.length = 10;     // 改变数组长度
console.log('fruits:', fruits);
console.log('fruits.length:', fruits.length);
console.log('Object.keys(fruits)', Object.keys(fruits));
fruits.length = 0;      // 通过改变数组长度来清空数组
console.log('fruits:', fruits);
console.log('fruits.length:', fruits.length);
console.log('Object.keys(fruits)', Object.keys(fruits));

// 正则匹配返回数组
let reg = /d(b+)(d)/i;
let regResultArr = reg.exec('cdbBdbsbz')
console.log('regResultArr:', regResultArr);
console.log('regResultArr[0] (原始字符串):', regResultArr[0]);
regResultArr.forEach(function (item, index) {
  if (index !== 0) {
    console.log('matched item:', item);
  }
});

// 属性
let names = ['xiaoming', 'xiaohong'];
console.log('names.length:', names.length);
console.log('Array[Symbol.species]:', Array[Symbol.species]);
//get Array[@@species]
// TODO: 学习 Symbol 并搞懂
class MyArray extends Array {
  static get [Symbol.species]() { return Array; }
}
console.log('MyArray[Symbol.species]:', MyArray[Symbol.species]);
// property
names.version = '1.0';
console.log('names.version:', names.version);

// 方法
// Array.from 
//    desc: 通过浅复制一个数值型对象或者一个可迭代对象，以此创建数组实例
//    param:
//      arrayLike: 一个能转换为数组的 "数组型或可迭代对象"
//      mapFn(可选): 隐射函数以调用数组的每个元素
//      thisArg(可选): 执行前一个隐射函数所要用到的值
console.log('Array.from(\'apple\')', Array.from('apple'));
console.log('Array.from([1, 2, 3], x=> x*2):', Array.from([1, 2, 3], x=> x*2));
// Python 跳步实现
// const range = (start, stop, step) => Array.from({length: (stop-start)/step + 1}, (_, i) => start + (i*step));
const range = (start, stop, step) => Array.from({length: (stop-start)/step + 1}, function (_, i) {
  console.log('_:', _);
  console.log('i:', i);
  return start + (i*step);
});
console.log('range(0, 4, 1):', range(0, 4, 1));
console.log('range(1, 10, 2):', range(1, 10, 2));
// Array.isArray
console.log('Array.isArray(fruits):', Array.isArray(fruits));
console.log('Array.isArray(range):', Array.isArray(range));
// Array.of
//  从可变数量的参数中创建一个新的数组实例
console.log('Array.of(7): ', Array.of(7));
console.log('Array.of(1,2,3): ', Array.of(1, 2, 3));
// 与 Array构造函数不同，当参数是单个数字时，Array构造函数将把数字作为数组长度来实例化数组
console.log('Array(7)', Array(7));
console.log('Array(1,2,3): ', Array(1, 2, 3));


// 数组实例
fruits = ['Apple', 'Banana', 'Lemon', 'Mango', 'Watermelon'];
//  属性：
console.log('fruits.constructor:', fruits.constructor);                     //    - 构造器
console.log('fruits.length:', fruits.length);                               //    - 长度
console.log('fruits[Symbol.unscopables]:', fruits[Symbol.unscopables]);     //    - 2015版本之前未包含在 ES 标准中的名称

//  方法：
//  一、修改方法
console.log('fruits:', fruits);
//   - copyWithin
//      desc: 在同个数组中一部分浅复制到另一部分
//      param: 
//        - target: 黏贴位置
//        - start(可选):  开始复制位置（没有的话就是 0）
//        - end(可选):    停止复制位置（没有的话就复制到末尾）
//      return 修改后的数组
console.log('fruits.copyWithin():', fruits.copyWithin()); 
console.log('fruits.copyWithin(0, 3, 4):', fruits.copyWithin(0, 3, 4));
console.log('fruits.copyWithin(1, 3):', fruits.copyWithin(1, 3));
console.log('fruits:', fruits);   // 已被修改
fruits = ['Apple', 'Banana', 'Lemon', 'Mango', 'Watermelon'];   // 还原

//   - fill
//      desc: 用一个静态值来填充(或修改)数组的start位置到end位置
//      param:
//        - value         填充值
//        - start(可选)    开始位置，默认为 0
//        - end(可选)      结束位置，默认为 length
//      return: 修改后的数组
let arr4 = [1,2,3,4];
console.log('arr4.fill(0, 2, 4)', arr4.fill(0, 2, 4)); //[1,2,0,0]
console.log('arr4.fill(5, 1)', arr4.fill(5, 1)); //[1,5,5,5]
console.log('arr4.fill(6)', arr4.fill(6)); // [6,6,6,6]
console.log('arr4:', arr4);   // [6,6,6,6]已被修改

//  - pop
//    desc: 弹出数组末位
//    param: 无
//    return: 弹出值，当数组为空时返回 undefined
console.log('fruits.pop():', fruits.pop());
console.log('fruits:', fruits);   // 已被修改
// 下面是用 pop 处理“类似数组的对象”的例子
let myFish = { 0: 'angel', 1: 'clown', 2: 'mandarin', 3: 'sturgeon', length: 4};
console.log('返回弹出值：', Array.prototype.pop.call(myFish));
console.log('myFish:', myFish);

//  - push
//    desc: 在数组末位加入值
//    param: 一个或多个元素
//    return: 数组长度
fruits.push('watermelon');
console.log('fruits:', fruits);   // 已被修改
// 下面是用  push 处理“类似数组的对象”的例子
let obj = {
  length: 0,
  addElement: function addElem (elem) {
    [].push.call(this, elem);
  }
};
obj.addElement({});
obj.addElement({});
console.log(obj);

//  - reverse
//    desc: 反转数组
//    param: 无
//    return: 反转后数组
console.log('反转前fruits:', fruits);                   // 反转前 [ 'Apple', 'Banana', 'Lemon', 'Mango', 'watermelon' ]
console.log('fruits.reverse():', fruits.reverse());    // 反转后 [ 'watermelon', 'Mango', 'Lemon', 'Banana', 'Apple' ]
console.log('反转后fruits:', fruits);                   // 被修改 [ 'watermelon', 'Mango', 'Lemon', 'Banana', 'Apple' ]
fruits = ['Apple', 'Banana', 'Lemon', 'Mango', 'Watermelon'];   // 重置
// 下面是用  reverse 处理“类似数组的对象”的例子
const obj1 = {0:1, 1:2, 2:3, length:3};
console.log('obj1:', obj1);
Array.prototype.reverse.call(obj1);
console.log('obj1:', obj1);

//  - shift
//    desc: 移除数组首位 
//    param: 无
//    return: 移除元素，当数组为空时返回 undefined
console.log('fruits.shift:', fruits.shift());
console.log('fruits:', fruits);   // 已被修改
fruits = ['Apple', 'Banana', 'Lemon', 'Mango', 'Watermelon'];   // 重置

//  - sort
//    desc: 排序数组。排序依据是将元素转为字符串再比较其 UTF-16序列编码。
//    param: 排序方法（可选）
//    return: 排序后数组
let months = ['March', 'Jan', 'Feb', 'Dec'];
console.log('months.sort():', months.sort());   // 排序结果: [ 'Dec', 'Feb', 'Jan', 'March' ]
console.log('months:', months);   // [ 'Dec', 'Feb', 'Jan', 'March' ] 已被修改
let arr5 = [1, 30, 4, 21, 10000];
console.log('arr5.sort():', arr5.sort()); // 默认排序结果 [ 1, 10000, 21, 30, 4 ]
console.log('arr5.sort((a,b)=>a-b):', arr5.sort((a,b)=>a-b));  // 顺序排序 [ 1, 4, 21, 30, 10000 ]

//  - splice
//    desc: 通过移除或者替代已存在的元素修改数组（也可能是直接添加新元素）
//    param: 
//      - start 开始位
//      - deleteCount（可选）       删除数量
//      - item1, item2,...(可选)   新增元素
//    return: 被删除元素的数组
months = ['Jan', 'March', 'April', 'June'];
console.log('months.splice(1, 0, \'Feb\'):', months.splice(1, 0, 'Feb'));
console.log('month:', months);
console.log('months.splice(4, 1, \'May\'):', months.splice(4, 1, 'May'));
console.log('month:', months);

//  - unshift
//    desc: 数组头插
//    param: element1, element2,...
//    return 数组长度
let arr6 = [1,2,3];
console.log('arr6.unshift(4,5):', arr6.unshift(4,5));
console.log('arr6:', arr6);

