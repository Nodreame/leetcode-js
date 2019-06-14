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
