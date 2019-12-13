### 950. 按递增顺序显示卡牌 deckRevealedIncreasing
- 难度：medium
- 题意解析：目标构建一套牌组，使之实现"抽一张显示并丢弃，然后把下一张放到牌组底部, 最终能够以**递增顺序**显示牌组"的效果.
- 初始思路：先排序数组使之实现**递增顺序**，然后逐步反推牌组构造。
    - 思路推导：
        - 牌组-》结果：抽一张显示并丢弃，把下一张放到牌组底部
        - 结果-》牌组：把最后一张放到牌组顶部，再在顶部加入目标卡牌
    - 实现：
        ``` js
        var deckRevealedIncreasing = function(deck) {
            // 求解目标：一副牌，如何排序才能在题目规则的抽卡方式下，以递增顺序显示卡牌牌组顺序
            let len = deck.length;
            if (len < 2) return deck;
            deck.sort((a,b)=>b-a);  // 1. 先排列成目标顺序(然后由第二步推出反序更好)
            // 2、 分析
            // 抽牌过程：牌组顶部抽一张，将下一张放到牌组底部
            // 恢复过程：将牌组底部的牌弹出并放到牌组顶部，再在牌组顶部放一张牌
            // 顺序分析：由于answer的第一张即牌组顶部，故应该从最大的牌开始处理，故牌组处理为反序
            let resultArr = [deck[1], deck[0]];
            for (let i=2; i<len; i++) {
                resultArr.unshift(deck[i], resultArr.pop());
            }
            return resultArr;
        };
        ```

### 78. 子集 subsets
- 难度：medium
- 题意解析：给定一个**不包含重复元素**的整数数组 nums ，返回该数组所有可能的子集。不包含重复元素说明无需考虑排除组合后相同的情况，只需要遍历所有自由组合的结果即可。
- 初始思路：**迭代**. 当前数组有n个元素，想要得到数组元素的组合结果，可以先求得(n-1)个元素的组合结果，再遍历(n-1)个元素的组合结果并为每个元素数组加上最后一个元素。
    - TODO: 《之美》-迭代篇
    - 实现：
        ``` js
        var subsets = function (nums) {
            let numsLen = nums.length;
            if (numsLen === 0) return [[]];             //  0. 边界设定
            let lastNum = nums.splice(numsLen-1, 1);    //  1. 移除并取得最后一位
            let resultArr = subsets(nums);              //  2. 将裁减掉最后一位的数组用于迭代
            for (let i=0, len=resultArr.length; i<len; i++) {
                // 3. 循环取得每个元素数组并为之加上最后一个元素
                let tempItemArr = resultArr[i].slice();     // 复制得到”新元素数组“
                tempItemArr.push(lastNum);                  // 将最后一个元素推入”新元素数组“
                resultArr.push(tempItemArr);                // 将”新元素数组“推入结果
            }
            return resultArr;
        }
        ```
- 其他思路：深度优先（TODO）
- 大神思路：**位操作法**. 首先给定数组有n个元素, 在给定数组**不包含重复元素**的情况下必有 2^n个结果, 于是遍历从 0-》2^n-1, 并且在每次遍历中通过位运算确定将哪些元素组合为临时数组加入最终结果。
    - 实现：
        ``` js
        var subsets = function(nums) {
            let len = nums.length;
            if (len === 0) return [[]];
            let resultArr = [];
            let resultLen = Math.pow(2, len);
            for (let i=0; i<resultLen; i++) {
                let tempArr = [];
                let count = 0;
                while (count < len) {
                    if (i & Math.pow(2, count)) {
                        tempArr.push(nums[count]);
                    }
                    count++;
                }
                resultArr.push(tempArr);
            }
            return resultArr;
        };
        ```

### 90. 子集II subsetsWithDup
- 难度: medium
- 题意解析：78题的扩展题，区别自傲与给定的整数数组 nums **可能包含重复元素**, 且**解集不能包含重复的子集**。 上面的**位操作法**在这里是失效的。
- 初始思路: 无
- 大神思路: 深度优先

### 283.移动零
- 刷题进度:
    - [x] 一次遍历暴力法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定数组，将 0 全部移到数组末位，不得影响其他数字顺序.
    - Tip: 要求原地排序.
- 输入处理: 无.
- 初始思路: 一次遍历暴力法.
    - 思路: 遍历，如果是 0 则移除再插入末尾.
    - 复杂度分析:
        - 时间: O(n^2). 循环 O(n), 数组剪切方法复杂度 O(n) & 推入数组复杂度 O(1)， 故 O(n*(n+1)) => O(n^2).
            - 最好: 不剪切 O(n).
            - 最坏: 前一半为 0, O(n/2 * n) => O(n^2).
        - 空间: O(1). 原地排序故 O(1).
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 70.6 %的用户
        - 内存消耗: 35.7 MB, 在所有 JavaScript 提交中击败 36.8 %的用户
    - 实现:
        ``` js
        var moveZeroes = function(nums) {
            for (let i=0, len=nums.length; i<len; i++) {
                if (nums[i] === 0) {
                    nums.splice(i, 1);
                    nums.push(0);
                    i--;
                    len--;
                }
            }
            return nums;
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

### 27. 移除元素
- 刷题进度:
    - [x] 一次遍历暴力法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定数组并移除所有值为 val 的元素.
- 输入处理: 无需.
- 初始思路: 一次遍历暴力法.
    - 思路: 遍历对比，匹配成功则移除.
    - 复杂度分析:
        - 时间: O(n^2). 循环 O(n), 数组剪切方法复杂度 O(n)， 故 O(n^2).
            - 最好: 不剪切 O(n).
            - 最坏: 前一半为 0, O(n/2 * n) => O(n^2).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 45 %的用户
        - 内存消耗: 34 MB, 在所有 JavaScript 提交中击败 11.8 %的用户
    - 实现:
        ``` js
        var removeElement = function(nums, val) {
            for (let i=0, len=nums.length; i < len; i++) {
                if (nums[i] === val) {
                    nums.splice(i, 1);
                    i--;
                    len--;
                }
            }
            return nums.length;
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

### 26.删除排序数组中的重复项    
- 刷题进度:
    - [x] 两次遍历暴力法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 如题.
    - Tip1: 数组为已排序数组.
    - Tip2: 原地排序.
- 输入处理: 无需.
- 初始思路: 两次遍历暴力法.
    - 思路: 两次遍历推进，重复就删后一个.
    - 复杂度分析:
        - 时间: O(n^3). 遍历 O(n^2), 删除 O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 108 ms, 在所有 JavaScript 提交中击败了 40 %的用户
        - 内存消耗: 38 MB, 在所有 JavaScript 提交中击败 7.7 %的用户
    - 实现:
        ``` js
        var removeDuplicates = function(nums) {
            for (let i=0, len=nums.length; i<len; i++) {
                for (let j=i+1; j<len; j++) {
                    if (nums[i] !== nums[j]) break;
                    nums.splice(j, 1);
                    j--;
                    len--;
                }
            }
            return nums.length;
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

### 80.删除排序数组中的重复项 II    
- 刷题进度:
    - [ ] xxx
    - [ ] xxx
    - [ ] xxx
- 难度: 
- 题意解析:
- 输入处理:
- 初始思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时:  ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗:  MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js

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

### 832. 翻转图像
- 刷题进度:
    - [x] 对撞指针翻转+三目反转.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定二维数组作为矩阵，先翻转每行，再反转数值.
- 输入处理: 无.
- 初始思路: 对撞指针翻转+三目反转
    - 思路: 边翻转行边翻转值.
    - 复杂度分析:
        - 时间: O(n). 全部遍历过一次顺便完成替换.
        - 空间: O(1). 全程原地.
    - Leetcode 结果:
        - 执行用时: 80 ms, 在所有 JavaScript 提交中击败了 63 %的用户
        - 内存消耗: 36.8 MB, 在所有 JavaScript 提交中击败 5.3 %的用户
    - 实现:
        ``` js
        var flipAndInvertImage = function(A) {
            for (let i=0, lenA=A.length; i<lenA; i++) {
                let [a, b] = [0, A[i].length-1];
                while (a <= b) {
                    [A[i][a], A[i][b]] = [A[i][b]?0:1, A[i][a]?0:1];
                    [a, b] = [a+1, b-1];
                }
            }
            return A;
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

### 1051. 高度检查器
- 刷题进度:
    - [x] 排序后对比.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定数组，要求获得"能够使其以非递减方式排列"的必要移动数量.
- 输入处理: 无.
- 初始思路: 排序后对比.
    - 思路: 记得数组的 sort 会修改原数组，需要提前复制.
    - 复杂度分析:
        - 时间: O(nlogn). 复制循环 O(n) + 排序O(nlogn) + 对比循环 O(n).
        - 空间: O(n). 复制的数组长度.
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 97.8 %的用户
        - 内存消耗: 35 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var heightChecker = function(heights) {
            let res = 0;
            let arr = [...heights];
            heights.sort((a, b) => a-b);
            for (let i=0, len=heights.length; i<len; i++) {
                if (heights[i] !== arr[i]) res++;
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

### 1266. 访问所有点的最小时间
- 刷题进度:
    - [ ] 计算点间距.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 从数组第一个点依次走到最后一个.
- 输入处理: 无.
- 初始思路: 计算点间距.
    - 思路: 计算每段点间距，即x,y互减后的最大值
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 76 %的用户
        - 内存消耗: 34.6 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var minTimeToVisitAllPoints = function(points) {
            let totalTime = 0;
            for (let i=0, len=points.length-1; i<len; i++) {
                let absX = Math.abs(points[i][0] - points[i+1][0]);
                let absY = Math.abs(points[i][1] - points[i+1][1]);
                totalTime += Math.max(absX, absY);
            } 
            return totalTime;
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

