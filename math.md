### 191. 位1的个数【汉明重量】
- 刷题进度:
    - [x] 取余推进.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 取余推进.
    - 思路: 
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var hammingWeight = function(n) {
            let count = 0;
                while (n !== 0) {
                    if (n % 2 === 1) count++;
                    n = Math.floor(n / 2);
                }
                return count;
            };
        }
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 461. 汉明距离
- 刷题进度:
    - [x] 倒序二进制数组对比.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 倒序二进制数组对比.
    - 思路: 
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var hammingDistance = function(x, y) {
            let [arrX, arrY] = [[], []];
            while (x) {
                arrX.push(x % 2);
                x = Math.floor(x / 2);
            }
            while (y) {
                arrY.push(y % 2);
                y = Math.floor(y / 2);
            }
            let max = Math.max(arrX.length, arrY.length);
            let count = 0;
            for (let i=0; i<max; i++) {
                let [tmpX, tmpY] = [arrX[i] ? arrX[i] : 0, arrY[i] ? arrY[i] : 0];
                if (tmpX !== tmpY) count++;
            }
            return count;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 190. 颠倒二进制位
- 刷题进度:
    - [x] 倒序数组补零后计算.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 倒序数组补零后计算.
    - 思路:
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var reverseBits = function(n) {
            let arr = [];
            while (n) {
                arr.push(n % 2);
                n = Math.floor(n / 2);
            }
            for (let i=0, len = 32 - arr.length; i < len; i++) arr.push(0);
            let res = 0;
            for (let i=0; i < 32; i++) res += arr[i] ? Math.pow(2, 31 - i) : 0;
            return res;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 268. 缺失数字
- 刷题进度:
    - [x] "目标总和" 减去 "当前总和".
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: "目标总和" 减去 "当前总和".
    - 思路:
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var missingNumber = function(nums) {
            let len = nums.length;
            let total = len * (len + 1) / 2;
            let sum = nums.reduce((a, b) => a + b);
            return total - sum;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 412. Fizz Buzz
- 刷题进度:
    - [x] 遍历替换法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 遍历替换法.
    - 思路: 
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var fizzBuzz = function(n) {
            let res = [];
            for (let i=1; i<=n; i++) {
                let tmp = i % 15 === 0 ? 'FizzBuzz'
                    : i % 5 === 0 ? 'Buzz'
                    : i % 3 === 0 ? 'Fizz'
                    : i + '';
                res.push(tmp);
            }
            return res;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 204. 计数质数
- 刷题进度:
    - [x] 暴力法.
    - [x] 取反法.
    - [ ] xxx
- 难度: easy,
- 题意解析:
- 输入处理:
- 初始思路: 暴力法.
    - 思路: 计算并存储质数用于计算.
    - 复杂度分析:
        - 时间: O(n*k). 外层遍历O(n)，质数数组遍历O(k).
        - 空间: O(k). 质数数组大小.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var countPrimes = function(n) {
            let count = 0;
            let arr = [];
            for (let i = 2; i < n; i++) {
                if (i > 2 && i % 2 === 0) continue;
                let flag = true;
                for (let j=0, len=arr.length; j<len; j++) {
                    if (i % arr[j] === 0) {
                        flag = false;
                        break;
                    }
                    if (arr[j] * arr[j] > i) break;
                }
                if (flag) arr.push(i);
            }
            return arr.length;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 326. 3的幂
- 刷题进度:
    - [x] 循环.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 循环.
    - 思路:
    - 复杂度分析:
        - 时间: O(logN).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var isPowerOfThree = function(n) {
            let count = 0;
            let tmp = Math.pow(3, count);
            while (tmp < n) [count, tmp] = [count+1, tmp*3];
            return tmp === n;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 12.整数转罗马数字
- 刷题进度:
    - [x] Map.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: Map.
    - 思路:
    - 复杂度分析:
        - 时间: O(n). s 长度.
        - 空间: O(k). Map 大小.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var romanToInt = function(s) {
            let map = new Map();
            map.set('I', 1);
            map.set('IV', 4);
            map.set('V', 5);
            map.set('IX', 9);
            map.set('X', 10);
            map.set('XL', 40);
            map.set('L', 50);
            map.set('XC', 90);
            map.set('C', 100);
            map.set('CD', 400);
            map.set('D', 500);
            map.set('CM', 900);
            map.set('M', 1000);
            let res = 0;
            for (let i=0, len=s.length; i<len; i++) {
                if (s[i+1] && map.has(s[i]+s[i+1])) {
                    res += map.get(s[i]+s[i+1]);
                    i++;
                } else {
                    res += map.get(s[i]);
                }
            }
            return res;
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 693. 交替位二进制数
- 刷题进度:
    - [x] 暴力法(先转数组再遍历检测).
    - [x] 一次遍历.
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 暴力法(先转数组再遍历检测).
    - 思路:
    - 复杂度分析:
        - 时间: O(logn).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: 34.2 MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var hasAlternatingBits = function(n) {
            let arr = [];
            while (n !== 0) {
                arr.push(n % 2);
                n = Math.floor(n / 2);
            }
            for (let i=0, len=arr.length; i<len; i++) {
                if (typeof arr[i+1] !== 'undefined' && arr[i] === arr[i+1]) {
                    return false;
                }
            } 
            return true;
        };
        ```
- 第二思路: 一次遍历.
    - 思路:
    - 复杂度分析:
        - 时间: O(logn).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 90 %的用户
        - 内存消耗: 34 MB, 在所有 JavaScript 提交中击败 17.5 %的用户
    - 实现:
        ``` js
        var hasAlternatingBits = function(n) {
            let flag;
            while (n !== 0) {
                let tmp = n % 2;
                n = Math.floor(n / 2);
                if (typeof flag === undefined) {
                    flag = tmp;
                } else {
                    if (flag === tmp) return false;
                    flag = tmp;
                }
            }
            return true;
        };
        ```

### 50. Pow(x, n)
- 刷题进度:
    - [x] 砍半递归.
    - [ ] xxx
    - [ ] xxx
- 难度: medium.
- 题意解析:
- 输入处理:
- 初始思路: 砍半递归.
    - 思路:
    - 复杂度分析:
        - 时间: O(logn).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var myPow = function(x, n) {
            if (n === 0) return 1;
            let flag = n > 0;
            return flag ? pow(x, n, 1) : 1 / pow(x, -n, 1);
        };

        function pow (x, n, e) {
            if (n === 0) return e;
            if (n % 2 === 0) return pow(x*x, Math.floor(n/2), e);
            if (n % 2 === 1) return pow(x, n-1, e*x);
        }
        ```
- 第二思路: 砍半迭代.
    - 思路:
    - 复杂度分析:
        - 时间: O(logn).
        - 空间: o(1).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var myPow = function(x, n) {
            if (n === 0) return 1;
            let flag = n > 0;
            return flag ? pow(x, n) : 1 / pow(x, -n);
        };

        function pow (x, n) {
            let res = 1;
            while (n !== 0) {
                if (n % 2 === 1) res *= x;
                x *= x;
                n = Math.floor(n / 2);
            }
            return res;
        }
        ```