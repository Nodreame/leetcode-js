# 动态规划 Dynamic Plan

## 零、基础知识

## 一、Leetcode 刷题

### 70. 爬楼梯
- 刷题进度:
    - [x] 递推(DFS).
    - [x] 递归+记忆化(DFS).
    - [x] 动态规划.
    - [x] 动态规划(空间优化).
    - [ ] Binets(矩阵).
- 难度: easy.
- 题意解析: 目标是爬 n 步， 每步可以走 1 或者走 2, 求走法总数.
- 初始思路: 将每次的目标分为"走一步情况" & "走两步情况"，当计数刚好等于 n 时通过，走法总数+1.
    - 思路: 递归法(DFS).
    - 复杂度分析:
        - 时间: O(2^n). 该解法可视为生成树的过程，总数每加一，层数也随之加一，故时间复杂度为O(2^n).
        - 空间: O(n). 树深度为n.
    - Leetcode 结果: 超时, 需要借助 memory 去掉重复计算.
    - 实现:
        ``` js
        var climbStairs = function(n) {
            if (n < 2) return 1;
            return climbStairs(n-1) + climbStairs(n-2);
        };
        ```
- 第二思路: 递归+记忆化(DFS).
    - 思路: 思路同上，用 memory 数据去掉重复计算.
    - 复杂度分析: 
        - 时间: O(n). memory将题目简化为修复的递归树.
        - 空间: O(n). 树深度为n.
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了  93.6%的用户
        - 内存消耗 : 34MB, 在所有 JavaScript 提交中击败  7%的用户
    - 实现:
        ``` js
        var climbStairs = function(n) {
            return recursion(n, [1, 1]);
        };

        function recursion (total, memory) {
            if (!memory[total]) {
                memory[total] = recursion(total-1, memory) + recursion(total-2, memory);
            }
            return memory[total];
        }
        ```
- 第三思路: 动态规划.
    - 思路: 定义 dp[n] 为：到达 n 的走法总数, 故易得 dp[n] = dp[n-1] + dp[n-2].
    - 复杂度分析:
        - 时间: O(n). 循环 2->n.
        - 空间: O(n). dp 数组所用的空间.
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了  93%的用户
        - 内存消耗 : 33.8MB, 在所有 JavaScript 提交中击败  20%的用户
    - 实现:
        ``` js
        var climbStairs = function(n) {
            let dp = [1, 1];
            for (let i=2; i<=n; i++) {
                dp[i] = dp[i-1] + dp[i-2];
            }
            return dp[n];
        };
        ```
- 第四思路: 动态规划(空间优化).
    - 思路: 
    - 复杂度分析:
        - 时间: O(n).遍历耗时.
        - 空间: O(1).使用变量可以忽略不计.
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了  93%的用户
        - 内存消耗 : 33.6MB, 在所有 JavaScript 提交中击败  40%的用户
    - 实现:
        ``` js
        var climbStairs = function(n) {
            let [dp1, dp2] = [1, 1];
            for (let i=2; i<=n; i++) {
                [dp1, dp2] = [dp2, dp1+dp2];
            }
            return dp2;
        };
        ```

### 509. 斐波那契数
- 刷题进度:
    - [x] 记忆化 x 递归
    - [x] 动态规划
    - [x] 动态规划(空间优化)
- 难度: easy
- 题意解析: 同 70 题
- 初始思路: 记忆化 x 递归
    - 思路: 暴力递归不可取，所以用记忆化x 递归
    - 复杂度分析:
        - 时间: O(n). 记忆化将题目简化为修复的递归树.
        - 空间: O(n). 树深度为n.
    - Leetcode 结果:
        - 执行用时 : 60 ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗 : 33.8 MB, 在所有 JavaScript 提交中击败 50 %的用户
    - 实现:
        ``` js
        var fib = function(N) {
            return recursion(N, [0, 1]);
        };

        function recursion (target, arr) {
            if (arr[target] === undefined) arr[target] = recursion(target-1, arr) + recursion(target-2, arr)
            return arr[target];
        }
        ```
- 第二思路: 动态规划
    - 思路: 定义 dp[n] 为：到达 n 的走法总数, 故易得 dp[n] = dp[n-1] + dp[n-2].
    - 复杂度分析: 
        - 时间: O(n)
        - 空间: O(n)
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了 77 %的用户
        - 内存消耗 : 33.9MB, 在所有 JavaScript 提交中击败 43 %的用户
    - 实现:
        ``` js
        var fib = function(N) {
            let dp = [0, 1];
            for (let i=2; i<=N; i++) {
                dp[i] = dp[i-1] + dp[i-2];
            }
            return dp[N];
        };
        ```
- 第三思路: 动态规划(空间优化)
    - 思路: 相比原本的动态规划减少了dp的存储空间消耗.
    - 复杂度分析: 
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了 87 %的用户
        - 内存消耗 : 33.7MB, 在所有 JavaScript 提交中击败 66 %的用户
    - 实现:
        ``` js
        var fib = function(N) {
            let [dp1, dp2] = [0, 1];
            if (N === 0) return dp1;
            if (N === 1) return dp2;
            for (let i=2; i<=N; i++) {
                [dp1, dp2] = [dp2, dp1+dp2];
            }
            return dp2;
        };
        ```

### 1137. 第 N 个泰波那契数
- 刷题进度:
    - [x] 递归+记忆化
    - [x] 动态规划
    - [x] 动态规划（空间优化）
- 难度: easy
- 题意解析: 斐波那契额数增加一个数.
- 初始思路: 递归+记忆化.
    - 思路: 
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(n)
    - Leetcode 结果:
        - 执行用时 : 68 ms, 在所有 JavaScript 提交中击败了 92 %的用户
        - 内存消耗 : 33.7 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var tribonacci = function(n) {
            return recursion(n, [0, 1, 1])
        };

        function recursion (target, arr) {
            if (arr[target] === undefined) {
                arr[target] = recursion(target-1, arr) + recursion(target-2, arr) + recursion(target-3, arr);
            }
            return arr[target];
        }
        ```
- 第二思路: 动态规划.
    - 思路:
    - 复杂度分析:
        - 时间:  O(n)
        - 空间:  O(n)
    - Leetcode 结果:
        - 执行用时 : 64ms, 在所有 JavaScript 提交中击败了 98 %的用户
        - 内存消耗 : 33.8MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var tribonacci = function(n) {
            let dp = [0, 1, 1];
            for (let i=3; i<=n; i++) {
                dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
            }
            return dp[n];
        };
        ```
- 第三思路: 动态规划（空间优化）.
    - 思路: 相比原本的动态规划减少了dp的存储空间消耗.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了 58 %的用户
        - 内存消耗 : 33.7 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var tribonacci = function(n) {
            let [dp1, dp2, dp3] = [0, 1, 1];
            if (n===0) return dp1;
            if (n===1) return dp2;
            if (n===2) return dp3;
            for (let i=3; i<=n; i++) {
                [dp1, dp2, dp3] = [dp2, dp3, dp1+dp2+dp3];
            }
            return dp3;
        };
        ```

### 746. 使用最小花费爬楼梯
- 刷题进度:
    - [x] 动态规划.
    - [x] 动态规划(优化).
    - [ ] xxx
- 难度: easy
- 题意解析: 有一段阶梯，行走每步的体力消耗用数组存储，走到数组末位(下标=数组长度)即视为走完. 每次可以走一步或者两步，求最低花费.
- 初始思路: 动态规划.
    - 思路: 
        - 已知：步数及其对应的体力消耗;
        - 目标：到达楼层顶部的最低花费;
        - 过程：计算到达每步的最低花费，最终得到总最低花费，故使用动态规划来计算;
        - 状态定义：dp[n] 指第(n+1)步的最低花费;
            - 初始状态：
                - dp[0]: 第一步.到达cost[0]的阶梯最小花费为 cost[0];
                - dp[1]: 第二步.到达cost[1]的阶梯最小花费为 cost[1]+第一步花费(不走或走第一阶) => cost[1]+min(0, cost[0]) => cost[1];
                - dp[2]: 第三步.到达cost[2]的阶梯最小花费为 cost[2]+第二步花费(前两步的最优) => cost[2]+min(dp[1], dp[0])
            - 状态转移方程：
                - dp[n]: 第(n+1)步.到达cost[n]的阶梯最小花费为 cost[n] + 第n步花费(前两步的最优) => cost[n]+min(dp[n-1], dp[n-2])
        - 边界定义:
            - 理想: 可以在倒数第一位或者倒数第二位停下来, 所以我们**要计算的是刚好超出cost边界的值，即dp[cost.length]！**;
            - 现实: 刚好超出cost边界的值即cost[cost.length],不存在，所以向cost推入一个0, 最后求dp[cost.length-1]的值即可;
    - 复杂度分析: 
        - 时间: O(n). 循环耗时.
        - 空间: O(n). 存储 dp 状态消耗.
    - Leetcode 结果:
        - 执行用时 : 92ms, 在所有 JavaScript 提交中击败了  76.16%的用户.
        - 内存消耗 : 35.5MB, 在所有 JavaScript 提交中击败  47.83%的用户.
    - 实现:
        ``` js
        var minCostClimbingStairs = function(cost) {
            cost.push(0);
            let dp = [cost[0], cost[1]];
            let len = cost.length;
            for (let i=2; i<len; i++) {
                dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
            }
            return dp[len-1];
        };
        ```
- 第二思路: 动态规划(优化).
    - 思路: 思路同上，不过只存储最近所需两个 dp 状态，减少了空间消耗和数组查询的时间.
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 只用到数个变量.
    - Leetcode 结果:
        - 执行用时 : 88 ms, 在所有 JavaScript 提交中击败了 89.40 %的用户
        - 内存消耗 : 36.1 MB, 在所有 JavaScript 提交中击败 14.49 %的用户
    - 实现:
        ``` js
        var minCostClimbingStairs = function(cost) {
            cost.push(0);
            let [dp1, dp2] = [cost[0], cost[1]];
            for (let i=2, len = cost.length; i<len; i++) {
                [dp1, dp2] = [dp2, cost[i]+Math.min(dp1,dp2)];
            }
            return dp2;
        };
        ```

### 121. 买卖股票的最佳时机
- 刷题进度:
    - [x] 暴力解.
    - [x] 一次遍历.
    - [x] 模板动态规划.
    - [x] 模板动态规划优化.
- 难度: easy
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新) 只能做一次买入和一次卖出操作;
- 初始思路: 暴力解.
    - 思路: 双重循环对比出最大利润结果.
    - 复杂度分析:
        - 时间: O(n^2). 双重循环.
        - 空间: O(1). 忽略.
    - Leetcode 结果:
        - 执行用时 : 536 ms, 在所有 JavaScript 提交中击败了  20%的用户
        - 内存消耗 : 35.7MB, 在所有 JavaScript 提交中击败  24%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let res = 0;
            for (let i=0, len=prices.length; i<len; i++) {
                for (let j=i+1; j<len; j++) {
                    let profit = prices[j] - prices[i];
                    res = Math.max(profit, res);
                }
            }
            return res;
        };
        ```
- 第二思路: 一次遍历.
    - 思路: 由于买入要在卖出之前，于是通过存储最小买入值和当前最大利润，单次遍历即可完成计算.
    - 复杂度分析:
        - 时间: O(n). 遍历消耗.
        - 空间: O(1). 忽略.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  92%的用户
        - 内存消耗 : 35.4MB, 在所有 JavaScript 提交中击败  47%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let min = Number.POSITIVE_INFINITY;
            let profit = 0;
            for (let i=0, len=prices.length; i<len; i++) {
                min = Math.min(min, prices[i]);
                profit = Math.max(profit, prices[i] - min);
            }
            return profit;
        };
        ```
- 第三思路: 模板动态规划.
    - 思路: "[一个方法团灭 6 道股票问题](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3)"解法.
        - 状态定义: 
            - 方式: 穷举所有状态，找出每种状态对应的选择.
            - 状态: 天数、允许的最大交易次数(买卖算一次)、当前状态:持有、卖出.
            - 选择: 买入、卖出、无操作.
            - 构建状态定义: dp[天数][买卖次数][当前状态] =》 第 X 天，最多进行 Y 次交易，手头有无股票（0-无，1-有）
                - 目标结果 dp[n-1][k][0], 即最后一天，最多进行了 k 次交易，手头无股票.
            - 状态转移: 
                - 某天空仓: dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+price[i])
                    - 上面情况可分为两种选择：一种是昨天也空仓今天继续，一种是昨天持仓今天卖了，所以到某天为止的最高利润为 max(昨日利润, 昨日利润+今日股价)
                - 某日持仓: dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-price[i])
                    - 上面情况可以分两种选择：一种是做题也持仓今天继续，一种是昨天空仓今日买入，所以到某天为止的最高利润为 max(昨日利润，昨日利润-今日股价)
                    - Tip: 注意，这里的** 昨天空仓今日买入情况，昨日交易次数为 k-1, 故今日发生交易后变为 k **.
            - 基础状态：
                - dp[-1][k][0] = 0      =>  日期未开始前无利润；
                - dp[-1][k][1] = 负无穷  =>  日期未开始必定无持仓；
                - dp[i][0][0] = 0       =>  最大交易次数为 0即不允许交易；
                - dp[i][0][1] = 负无穷   =>  不允许交易时必定无持仓；
        - 本题分析:
            - 本题限制： n 天内允许最多一次交易，即 k=1;
                - 初始状态转移方程如下(借助基础状态做简化)：
                    - dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
                    - dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) = max(dp[i-1][1][1] - prices[i])
                - k=1，可以简化掉：
                    - dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
                    - dp[i][1] = max(dp[i-1][1], - prices[i])  # 已达交易上限，故只能比对谁成本低
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 88ms, 在所有 JavaScript 提交中击败了  80%的用户
        - 内存消耗 : 41MB, 在所有 JavaScript 提交中击败  20%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let len = prices.length;
            if (len < 2) return 0;
            // 1. dp
            let dp = Array.from({length: len}, ()=>[]);
            // 2. init 
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            // 3. calc
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
                dp[i][1] = Math.max(dp[i-1][1], -prices[i]);    // 已达交易上限，故只能比对谁成本低
            }
            return dp[len-1][0];
        };
        ```
- 第四思路: 模板动态规划(优化).
    - 思路: 思路同上，微调：不用数组存储每个 dp 状态，只用变量存储两个状态.
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 数组存储改为变量存储.
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了 99.5%的用户
        - 内存消耗 : 35.4MB, 在所有 JavaScript 提交中击败 39.7%的用户
    - 实现:
        ``` js
                var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            // 1. init
            let [dp_i_0, dp_i_1] = [0, -prices[0]];
            // 2. calc
            for (let i=1,len=prices.length; i<len; i++) {
                dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
                dp_i_1 = Math.max(dp_i_1, -prices[i]);
            }
            return dp_i_0;
        };
        ```

### 122. 买卖股票的最佳时机 II
- 刷题进度: 
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [x] 炒波段.
- 难度: easy.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新) 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - (新) 同一日期最多持有一股;
- 初始思路: 模板动态规划.
    - 思路: 
        - 初始状态转移方程：
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
            - dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        - 去掉 k (本题 k 无限制之后，考虑 k 无意义)：
            - dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
            - dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 84ms, 在所有 JavaScript 提交中击败了  80%的用户
        - 内存消耗 : 40.7MB, 在所有 JavaScript 提交中击败  5%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=> []);
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
            }
            return dp[len-1][0];
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 常量级额外空间.
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  98%的用户
        - 内存消耗 : 35MB, 在所有 JavaScript 提交中击败  24%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let [dp_i_0, dp_i_1] = [0, -prices[0]];
            for (let i=1; i<len; i++) {
                let temp =  dp_i_0;
                dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i]);
                dp_i_1 = Math.max(dp_i_1, dp_i_0-prices[i])
            }
            return dp_i_0;
        };
        ```
- 第三思路: 炒波段.
    - 思路: 每笔钱都要挣到.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了 83 %的用户
        - 内存消耗 : 35.6MB, 在所有 JavaScript 提交中击败 16.8 %的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let max = 0;
            for (let i=0, len=prices.length; i<len; i++) {
                if (prices[i] > prices[i-1]) {
                    max += prices[i]-prices[i-1];
                }
            }
            return max;
        };
        ```

### 309. 最佳买卖股票时机含冷冻期
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: medium.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
        - (新)加入冷冻期，一次交易卖出之后，次日不能购买;   
- 初始思路: 模板动态规划.
    - 思路:
        - 初始状态转移方程(直接去k,dp[i][1]需要有所改变)：
            - dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices(i))
            - dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices(i))
    - 复杂度分析:
        - 时间: O(n). 循环消耗.
        - 空间: O(2n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 88ms, 在所有 JavaScript 提交中击败了  74%的用户
        - 内存消耗 : 36.3MB, 在所有 JavaScript 提交中击败  11%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>[]);
            for (let i=0; i<len; i++) {
                if (i===0) {
                    dp[0][0] = 0;
                    dp[0][1] = -prices[0];
                } else {
                    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                    // 买入需要有一天的空窗期，故需要提前一天开始空仓今日才可买入
                    dp[i][1] = Math.max(dp[i-1][1], (i>1?dp[i-2][0]:0)-prices[i]);
                }
            }
            return dp[len-1][0];
        };
        ```
- 第二思路: 模板动态规划(优化).
    - 思路: 用三个变量存储所需状态.
    - 复杂度分析: 
        - 时间: O(n). 循环消耗.
        - 空间: O(1). 忽略不计.
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了  98%的用户
        - 内存消耗 : 34.2MB, 在所有 JavaScript 提交中击败  100%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let [dp0, dp1, dp_prev] = [0, -prices[0], 0];
            for (let i = 1; i < len; i++) {
                let tmp = dp0;
                dp0 = Math.max(dp0, dp1 + prices[i]);
                dp1 = Math.max(dp1, (i>1 ? dp_prev : 0) - prices[i]);
                dp_prev = tmp;  // 获得 dp[i-1], 下次循环再使用即为 dp[i-2]
            }
            return dp0;
        };
        ```

### 714. 买卖股票的最佳时机含手续费
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: medium
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
        - (新)加入手续费，一次交易(买+卖)需扣除一次手续费;
- 初始思路:
    - 思路: 模板动态规划.
        - 状态转移方程: 每次卖出时扣除手续费.
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i]-fee)
            - dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        - 交易次数无限制，故去 k：
            - dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i]-fee)
            - dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i]) 
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp数组消耗空间大小为2*n.
    - Leetcode 结果:
        - 执行用时 : 420ms, 在所有 JavaScript 提交中击败了  7%的用户
        - 内存消耗 : 94.4MB, 在所有 JavaScript 提交中击败  33%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices, fee) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>[]);
            for (let i = 0; i < len; i++) {
                if (i === 0) {
                    dp[0][0] = 0;
                    dp[0][1] = -prices[i];
                } else {
                    // 卖出时减去手续费
                    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i] - fee);
                    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
                }
            }
            return dp[len-1][0];
        };
        ```
- 第二思路:
    - 思路: 用两个个变量存储所需状态，转化过程中需要借助临时变量存值.
    - 复杂度分析:
        - 时间: O(n). 循环消耗.
        - 空间: O(1). 忽略不计.
    - Leetcode 结果:
        - 执行用时 : 108ms, 在所有 JavaScript 提交中击败了  87%的用户
        - 内存消耗 : 44.6MB, 在所有 JavaScript 提交中击败  100%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices, fee) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let [dp_i0, dp_i1] = [0, -prices[0]];
            for (let i = 1; i < len; i++) {
                let tmp = dp_i0;
                dp_i0 = Math.max(dp_i0, dp_i1 + prices[i] - fee);
                dp_i1 = Math.max(dp_i1, tmp - prices[i]);
            }
            return dp_i0;
        };
        ```

### 123. 买卖股票的最佳时机 III
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化: 只保存当天状态).
    - [x] 动态规划(优化: k=2专属优化, 四变量替换 dp).
- 难度: difficult.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新)将 121 的"最多交易1次" 改为 "最多交易2次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
- 初始思路: 模板动态规划. 
    - 思路: k 无法忽略故加入计算，增加一次循环(Tip:dp的k代表已操作次数)
        - 状态转移方程(由于 k 有明显限制：kMax=2, 所以无法去k，写代码需要考虑多一层 k)：
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
            - dp[i][k][1] = 
                当 k>1 时, max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i]) ;
                当 k<=1 时, max(dp[i-1][k][1], -prices[i]) ;
        - 初始状态：
            - 首日交易两次&首日交易一次，即原股买卖，无收益故: dp[0][2][0] = 0, dp[0][1][0] =0;
            - 首日买入，总利润减去首日价格: dp[0][1][0] = 0, dp[0][1][1] = -prices[0];
    - 复杂度分析:
        - 时间: O(n*k). 循环耗时.
        - 空间: O(n*k*2). dp数组空间占用.
    - Leetcode 结果:
        - 执行用时 : 136ms, 在所有 JavaScript 提交中击败了  42%的用户
        - 内存消耗 : 52MB, 在所有 JavaScript 提交中击败  20%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let k = 2;
            let dp = Array.from({length: len}, () => 
                            Array.from({length: k+1}, () => []));
            for (let i=0; i<len; i++) {
                for (let j=1; j<k+1; j++) {
                    if (i===0) {
                        dp[0][j][0] = 0;
                        dp[0][j][1] = -prices[0];
                    } else {
                        dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                        dp[i][j][1] = Math.max(dp[i-1][j][1], (j>1?dp[i-1][j-1][0]:0)-prices[i]);
                    }
                }
            }
            return dp[len-1][k][0];
        };
        ```
- 第二思路: 模板动态规划(优化: 只保存当天状态)
    - 思路: 建立长度为 (k+1)*2 的二维数组dp，dp[k][state]意义是直到当天已执行 k 次交易且当前状态为 state(0-空仓，1-持仓).
    - 复杂度分析:
        - 时间: O(n*k). 循环消耗.
        - 空间: O(1). 即 dp 二维数组空间消耗. O((k+1)*2) => O(1)
    - Leetcode 结果:
        - 执行用时 : 84ms, 在所有 JavaScript 提交中击败了  94.5%的用户
        - 内存消耗 : 36.5MB, 在所有 JavaScript 提交中击败  47%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let k = 2;
            let dp = Array.from({length: k+1}, ()=>[]);
            for (let i=0; i<len; i++) {
                for (let j=1; j<k+1; j++) {
                    if (i===0) {
                        dp[j][0] = 0;
                        dp[j][1] = -prices[0];
                    } else {
                        dp[j][0] = Math.max(dp[j][0], dp[j][1]+prices[i]);
                        dp[j][1] = Math.max(dp[j][1], (j>1?dp[j-1][0]: 0)-prices[i]);
                    }
                }
            }
            return dp[k][0];
        }
        ```
- 第三思路: 动态规划(优化: k=2专属优化, 四变量替换 dp).
    - 思路: 用变量取代 dp 数组.
    - 复杂度分析:
        - 时间: O(n*k). 循环耗时
        - 空间: O(1). 变量存储，空间消耗可忽视.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  98.39%的用户
        - 内存消耗 : 36MB, 在所有 JavaScript 提交中击败  60%的用户
    - 实现:
        ``` js
        if (prices.length < 2) return 0;
        let len = prices.length;
        let dp_i20 = dp_i10 = 0;
        let dp_i21 = dp_i11 = -prices[0];
        for (let i=1; i<len; i++) {
            dp_i20 = Math.max(dp_i20, dp_i21+prices[i]);
            dp_i21 = Math.max(dp_i21, dp_i10-prices[i]);
            dp_i10 = Math.max(dp_i10, dp_i11+prices[i]);
            dp_i11 = Math.max(dp_i11, -prices[i]);
        }
        return dp_i20;
        ```



### 188. 买卖股票的最佳时机 IV
- 刷题进度:
    - [x] 模板动态规划(无优化，堆内存溢出).
    - [x] 模板动态规划(条件分支优化).
    - [x] 模板动态规划(数组优化)
- 难度: Difficult.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新)将 121 的"最多交易1次" 改为 "最多交易k次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
- 初始思路: 模板动态规划(无优化，堆内存溢出).
    - 思路: 直接 dp.
    - 复杂度分析:
        - 时间: O(n*k). 循环消耗.
        - 空间: O(n*k*2). dp 数组占用空间.
    - Leetcode 结果: 堆内存溢出
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>Array.from({length: k+1}, ()=>[[], []]));
            for (let i=0; i<len; i++) {
                for (let j=k; j>0; j--) {
                    if (i===0) {
                        dp[i][j][0] = 0;
                        dp[i][j][1] = -prices[0];
                        continue;
                    }
                    dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                    dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i]);
                }
            }
            return dp[len-1][k][0];
        };
        ```
- 第二思路: 模板动态规划(条件分支优化)
    - 思路: 当 k >= n/2时, k 的限制无意义。故当 k >= n/2, k可以直接使用 122 的思路，其他情况继续使用 188 的思路.
    - 复杂度分析:
        - 时间: O(n)=>O(n*k). 循环消耗. 
        - 空间: O(n*2)=>O(n*k*2). dp数组空间消耗.
    - Leetcode 结果:
        - 执行用时 : 208ms, 在所有 JavaScript 提交中击败了 15%的用户
        - 内存消耗 : 62.8MB, 在所有 JavaScript 提交中击败  25%的用户
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            if (k >= Math.floor(len/2)) {
                let dp = Array.from({ length: len }, () => []);
                for (let i=0; i<len; i++) {
                    if (i===0) {
                        dp[0][0] = 0;
                        dp[0][1] = -prices[0];
                        continue;
                    }
                    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
                }
                return dp[len-1][0];
            } else {
                let dp = Array.from({ length: len }, 
                        () => Array.from({ length: k+1 }, ()=>[[], []]));
                for (let i=0; i<len; i++) {
                    for (let j=k; j>0; j--) {
                        if (i===0) {
                            dp[0][j][0] = 0;
                            dp[0][j][1] = -prices[0];
                            continue;
                        }
                        dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                        dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i]);
                    }
                }
                return dp[len-1][k][0];
            }
        };
        ```
- 第三思路: 模板动态规划(数组优化)
    - 思路: 使用变量代替 dp 的方式简化复杂度.
    - 复杂度分析:
        - 时间: O(n)=>O(n*k). 循环消耗. 
        - 空间: O(1). 变量空间占用基本可以忽略不计.
    - Leetcode 结果:
        - 执行用时 : 92ms, 在所有 JavaScript 提交中击败了 95%的用户
        - 内存消耗 : 37.2MB, 在所有 JavaScript 提交中击败  50%的用户
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            if (k >= Math.floor(len/2)) {
                let [dp_i0, dp_i1] = [0, -prices[0]];
                for (let i=1; i<len; i++) {
                    let temp = dp_i0;
                    dp_i0 = Math.max(dp_i0, dp_i1+prices[i]);
                    dp_i1 = Math.max(dp_i1, temp-prices[i]);
                }
                return dp_i0;
            } else {
                let dp = Array.from({ length: k+1 }, () => [0, -prices[0]]);
                for (let i=1; i<len; i++) {
                    for (let j=k; j>0; j--) {
                        dp[j] = [
                            Math.max(dp[j][0], dp[j][1]+prices[i]),
                            Math.max(dp[j][1], dp[j-1][0]-prices[i])
                        ];
                    }
                }
                return dp[k][0];
            }
        };
        ```

        dp: [ 
                [ [ [], [] ], [ 0, -3 ], [ 0, -3 ] ],
                [ [ [], [] ], [ 0, -2 ], [ 0, -2 ] ],
                [ [ [], [] ], [ 4, -2 ], [ 4, -2 ] ],
                [ [ [], [] ], [ 4, -2 ], [ 4, -1 ] ],
                [ [ [], [] ], [ 4, 0 ],  [ 4, 4 ] ],
                [ [ [], [] ], [ 4, 0 ],  [ 7, 4 ] ] 
            ]

### 502. IPO
- 刷题进度:
    - [ ] xxx
    - [ ] xxx
    - [ ] xxx
- 难度: 
- 题意解析:
- 初始思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 120. 三角形最小路径和
- 刷题进度:
    - [x] 自底向上递归
    - [x] 记忆化自底向上递归(新空间)
    - [x] 记忆化自底向上递归(原地替换)
- 难度: medium
- 题意解析: 给定代表三角形的二维数组，计算自顶向下最小路径和。
- 初始思路: 自底向上递归
    - 思路: 回到常规数学题的解答思维
        - 从上到下计算：在过程中不能直观看出大小，必须最后把所有结果做对比，故放弃;
        - 从下到上计算：可以在过程中不断对比左右大小，最后得到最大结果；
    - 复杂度分析:
        - 时间: O(h*w). 遍历个数。 
        - 空间: O(h). 递归树高度.
    - Leetcode 结果: 超时.
    - 实现:
        ``` js
        var minimumTotal = function(triangle) {
            return recursion(triangle, triangle.length, 0, 0);
        };

        function recursion (arr, level, currLevel, currPos) {
            if (currLevel === level-1) return arr[currLevel][currPos];
            let left = recursion(arr, level, currLevel+1, currPos);
            let right = recursion(arr, level, currLevel+1, currPos+1);
            return Math.min(left, right) + arr[currLevel][currPos];
        }
        ```
- 第二思路: 记忆化自底向上递归(新空间)
    - 思路: 基于初始思路优化，创建新数组用以记忆和递归时复用.
    - 复杂度分析:
        - 时间: O(h*w). 遍历个数.
        - 空间: O(n). 同 triangle大小.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了 76 %的用户
        - 内存消耗 : 35.4MB, 在所有 JavaScript 提交中击败 14 %的用户
    - 实现:
        ``` js
        var minimumTotal = function(triangle) {
            let len = triangle.length;
            return recursion(triangle, Array.from({length:len}, ()=>[]), len, 0, 0);
        };

        function recursion (arr, newArr, level, currLevel, currPos) {
            if (newArr[currLevel][currPos]) return newArr[currLevel][currPos];
            if (currLevel === level-1) return newArr[currLevel][currPos] = arr[currLevel][currPos];
            let left = recursion(arr, newArr, level, currLevel+1, currPos);
            let right = recursion(arr, newArr, level, currLevel+1, currPos+1);
            return newArr[currLevel][currPos] = Math.min(left, right) + arr[currLevel][currPos];
        }
        ```
- 第三思路: 记忆化自底向上递归(原地替换)
    - 思路: 基于初始思路优化，自底向上不断取较小值，通过累加来替换数组元素，最终只需输出triangle[0][0]即可.
    - 复杂度分析:
        - 时间: O(h*w).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了 76 %的用户
        - 内存消耗 : 34.7MB, 在所有 JavaScript 提交中击败 75 %的用户
    - 实现:
        ``` js
        var minimumTotal = function(triangle) {
            let len = triangle.length;
            if (len < 1) return 0;
            if (len === 1) return triangle[0][0];
            for (let i=len-2; i>=0; i--) {
                for (let j=0, jLen=triangle[i].length; j<jLen; j++) {
                    triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1]);
                }
            }
            return triangle[0][0];
        };
        ```
- 第四思路: 
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 320. 零钱兑换（*）
- 刷题进度:
    - [x] 自递归
    - [x] 递归 + 记忆化
    - [x] 动态规划
    - [ ] TODO
- 难度: medium
- 题意解析: 用最少数量的 coins 组合获得 amount
- 输入处理：
    - 原文：如果没有任何一种硬币组合能组成总金额，返回 -1;
    - 翻译：如果总金额不正常则返回 0；如果总金额正常且没有硬币组合能够组成，则返回-1; 
- 初始思路: 自递归.
    - 思路: 动态规划阶段一：状态枚举 & 递归处理，coinChange(coins, amount) 必定返回最小硬币数. 
        - 状态枚举：
            - coins[i] == amount : return 1
            - coins[i] > amount : continue (可去除)
            - coins[i] < amount : 计算 amount-coins[i] 的最小硬币数 temp：
                - temp == -1: amount-coins[i] 无最小硬币数 (路径废弃)
                - else: amount的最小硬币数 =  min(amount-coins[i]的最小硬币数 + 1, amount当前最小硬币数)
    - 复杂度分析:
        - 时间: O(树高^coinsLen), 指数型.
        - 空间: O(树高)
    - Leetcode 结果: 超时
    - 实现:
        ``` js
        var coinChange = function (coins, amount) {
            if (amount < 1) return 0;
            let res = Number.POSITIVE_INFINITY;
            for (let i=0, len=coins.length; i<len; i++) {
                if (coins[i] === amount) {
                    return 1;
                } else if (coins[i] < amount) {
                    let temp = coinChange(coins, amount-coins[i]);
                    if (temp !== -1) { // temp===1 =》路径废弃
                        res = Math.min(res, temp+1);
                    }
                }
            }
            return res === Number.POSITIVE_INFINITY? -1: res;
        }
        ```
- 第二思路: 递归 + 记忆化
    - 思路: 通过记忆化将递归的时间复杂度优化为线性;
    - 复杂度分析:
        - 时间: O(amount). 最多每个数值计算一次.
        - 空间: O(amount). 一维数组长度.
    - Leetcode 结果:
        - 执行用时 : 256 ms, 在所有 JavaScript 提交中击败了 18 %的用户
        - 内存消耗 : 41.6 MB, 在所有 JavaScript 提交中击败 20 %的用户
    - 实现:
        ``` js
        var coinChange = function(coins, amount) {
            return recursion (coins, amount, [0]);
        };

        function recursion (coins, amount, arr) {
            if (arr[amount] != null) return arr[amount];
            let res = Number.POSITIVE_INFINITY;
            for (let i=0, len=coins.length; i<len; i++) {
                if (coins[i] === amount) {
                    arr[amount] = 1;
                    return 1;
                } else if (coins[i] < amount) {
                    let temp = recursion (coins, amount-coins[i], arr);
                    if (temp !== -1) res = Math.min(res, temp+1);
                    arr[amount] = res;
                }
            }
            // console.log('arr:', arr);
            return res === Number.POSITIVE_INFINITY ? -1: res;
        }
        ```
- 第三思路: 动态规划
    - 思路: dp[i]存储每个金额的最小硬币组成数量， dp[i] = Math.min(dp[i], dp[i-count[j]]+1)
    - 复杂度分析:
        - 时间: O(amount * coinsLens)
        - 空间: O(amount)
    - Leetcode 结果:
        - 执行用时 : 252ms, 在所有 JavaScript 提交中击败了 19 %的用户
        - 内存消耗 : 37MB, 在所有 JavaScript 提交中击败 66 %的用户
    - 实现:
        ``` js
        var coinChange = function(coins, amount) {
            if (amount < 1) return 0;
            let dp = Array.from({length: amount+1}, ()=>Number.POSITIVE_INFINITY);
            dp[0] = 0;
            for (let i=1, len=amount+1; i<len; i++) {
                for (let j=0, coinsLen=coins.length; j<coinsLen; j++) {
                    if (coins[j] <= i) {
                        dp[i] = Math.min(dp[i], dp[i-coins[j]]+1);
                    }
                }
            }
            return dp[amount] === Number.POSITIVE_INFINITY? -1: dp[amount];
        };
        ```
- 第四思路: TODO
    - 思路: 动态规划全部取值的方式时空消耗过大
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 53. 最大子序和
- 刷题进度:
    - [x] 循环连乘.
    - [x] "连续类型"的动态规划.
    - [x] 分治法.
- 难度: easy.
- 题意解析: 求给定整数数组的最大"连续"子序列(最少一个数)的和.
- 输入处理: 输入数组长度小于 1 时, 返回 0.
- 初始思路: 循环连乘.
    - 思路: 获取数组长度n，然后依次获取数组长度为 1~n 的连续组合和.
    - 复杂度分析:
        - 时间: O(n^3). 数组长度 1->n & 每次从子序列的开头开始 & 子序列逐个相乘. n!型.
        - 空间: O(1).
    - Leetcode 结果: 超时.
    - 实现:
        ``` js
        var maxSubArray = function(nums) {
            let len = nums.length;
            let res = Number.NEGATIVE_INFINITY;
            for (let i=1; i<=len; i++) { // 连续子序列长度
                for (let j=0; j<=(len-i); j++) { // 连续子序列的开头位置
                    let temp;
                    for (let k=0; k<i; k++) { // 子序列逐个相加
                        temp = temp==null? nums[j+k]: temp + nums[j+k];
                    }
                    res = Math.max(temp, res);
                }
            }
            return res;
        };
        ```
- 第二思路: "连续类型"的动态规划.
    - 思路: 目标是连续子序列的最大和，所以在循环中不断推进子序列的头并获取子序列的尾部.
    - TODO: "连续"类型的动态规划解题步骤
    - 复杂度分析:
        - 时间: O(n). 一次 for.
        - 空间: O(1). 
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了 93.5 %的用户
        - 内存消耗 : 35.6MB, 在所有 JavaScript 提交中击败 17 %的用户
    - 实现:
        ``` js
        var maxSubArray = function(nums) {
            let len = nums.length;
            if (len < 1) return 0;
            let max = Number.NEGATIVE_INFINITY;
            let temp = 0;
            for (let i=0; i<len; i++) {
                if (temp >= 0) {
                    temp += nums[i];
                } else {
                    temp = nums[i];
                }
                max = Math.max(max, temp);
            }
            return max;
        };
        ```
- 第三思路: 分治法.
    - 思路: 对半分，然后对比左 & 右 & 中, 取最大值.
    - 复杂度分析:
        - 时间: O(nlogn). 分治的折半递归即 n * 深度logn.
        - 空间: O(1). 
    - Leetcode 结果:
        - 执行用时 : 96ms, 在所有 JavaScript 提交中击败了 35 %的用户
        - 内存消耗 : 37.8MB, 在所有 JavaScript 提交中击败 5 %的用户
    - 实现:
        ``` js
        var maxSubArray = function(nums) {
            let numsLen = nums.length;
            if (numsLen === 1) return nums[0];
            let halfNum = Math.ceil(numsLen/2);
            let maxLeft = maxSubArray(nums.slice(0, halfNum));          // 计算左部连续子串最大值
            let maxRight = maxSubArray(nums.slice(halfNum, numsLen));    // 计算右部连续子串最大值
            // 从左部末值出发 & 从右部首值出发, 计算中部连续子串最大值
            let maxL = Number.NEGATIVE_INFINITY;
            let temp = 0;
            for (let i=halfNum-1; i>=0; i--) {
                temp += nums[i];
                maxL = Math.max(maxL, temp);
            }
            let maxR = Number.NEGATIVE_INFINITY;
            temp = 0;
            for (let i=halfNum; i<numsLen; i++) {
                temp += nums[i];
                maxR = Math.max(maxR, temp);
            }
            return Math.max(maxLeft, maxRight, maxL+maxR);
        };
        ```
- 总结：避免指数型计算的方式是得出规律，本题是加法增益规律，加上一个数后>=0即可继续加，若小于0则放弃当前的连续，从下一个开始.

### 152. 乘积最大子序列
- 刷题进度:
    - [x] 循环连乘.
    - [x] 动态规划.
    - [x] 分治法.
- 难度: medium
- 题意解析: 求给定整数数组的最大"连续"子序列(最少一个数)的积. 不同于 53 题的加法，乘法的规律并不是找最大，因为最小值为负数时，下一个负数可能直接使其变成最大，所以乘法的规律应该是求 max 和 min， 然后每次计算出一个 superMax.
- 输入处理: 输入数组长度小于 1 时, 返回 0.
- 初始思路: 循环连乘.
    - 思路: 获取数组长度n，然后依次获取数组长度为 1~n 的连续组合乘积.
    - 复杂度分析:
        - 时间: O(n^3). 数组长度 1->n & 每次从子序列的开头开始 & 子序列逐个相乘. n!型.
        - 空间: O(1).
    - Leetcode 结果: 超时.
    - 实现:
        ``` js
        var maxProduct = function(nums) {
            let len = nums.length;
            let res = Number.NEGATIVE_INFINITY;
            for (let i=1; i<=len; i++) { // 每次的连续子序列长度
                for (let j=0; j<=(len-i); j++) { // 连续子序列的开头位置
                    let temp = 1;
                    for (let k=0; k<i; k++) { // 子序列逐个相乘
                        temp *= nums[j+k];
                    }
                    res = Math.max(res, temp);
                }
            }
            return res;
        };
        ```
- 第二思路: 动态规划.
    - 思路: for 循环数组，求每次计算后的 max、min、superMax. 
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了 100 %的用户
        - 内存消耗 : 36.2MB, 在所有 JavaScript 提交中击败 29 %的用户
    - 实现:
        ``` js
        var maxProduct = function(nums) {
            let len = nums.length;
            if (len < 1) return nums[0];
            let superMax = Number.NEGATIVE_INFINITY;
            let max = 1;
            let min = 1;
            for (let i=0; i<len; i++) {
                // 求最大积，遇到负数直接反转
                if (nums[i] < 0)  [max, min] = [min, max]
                // 对比大小，当前积比不过当前值时，使用当前值将其替换
                max = Math.max(nums[i], max*nums[i]);
                min = Math.min(nums[i], min*nums[i]);
                superMax = Math.max(superMax, max);
            }
            return superMax;
        };
        ```
- 第三思路：分治法.
    - 思路: 对半分解求解 左 & 右 & 中的最大.
    - 复杂度分析:
        - 时间: O(nlogn). n * 深度logn
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 84 ms, 在所有 JavaScript 提交中击败了 70 %的用户
        - 内存消耗 : 38 MB, 在所有 JavaScript 提交中击败 12 %的用户
    - 实现:
        ``` js
        var maxProduct = function(nums) {
            let len = nums.length;
            if (len === 1) return nums[0];
            let halfNum = Math.floor(len/2);
            let maxLeft = maxProduct(nums.slice(0, halfNum));
            let maxRight = maxProduct(nums.slice(halfNum, len));
            // console.log(`maxLeft of (0~${halfNum-1}): ${maxLeft}`);
            // console.log(`maxRight of (${halfNum}~${len-1}): ${maxRight}`);
            let [temp, maxL, minL] = [1, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
            for (let i=halfNum-1; i>=0; i--) {
                temp *= nums[i]; // 单边推进
                [maxL, minL] = [ Math.max(maxL, temp), Math.min(minL, temp) ];
            }
            let [maxR, minR] = [Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY];
            temp = 1; // reset 推进器
            for (let i=halfNum; i<len; i++) {
                temp *= nums[i]; // 单边推进
                [maxR, minR] = [ Math.max(maxR, temp), Math.min(minR, temp) ];
            }
            // console.log(`maxR: ${maxR}, minR: ${minR}`);
            return Math.max(maxLeft, maxRight, maxL*maxR, maxL*minR, minL*maxR, minL*minR);
        };
        ```

### 198. 打家劫舍
- 刷题进度:
    - [x] 动态规划.
    - [x] 动态规划(空间优化).
- 难度: easy
- 题意解析: 每个房屋都存在价值为>=0的财物，目标是最终财物综合价值最高，限制条件是不能偷窃相邻的房屋。
- 输入处理: 输入数组不得为空.
- 初始思路: 动态规划.
    - 思路: 金钱房屋逐个推进也会越来越多，故价值最高结果必定是最后一间房屋的结果，故用动态规划```dp[len]```存储到达每间屋子时的最大收益。程序设计逻辑应注意：
        - 本间房拿了上一间必定不能拿；
        - 三间房间至少拿一次，因为限制只在相邻房屋存在；
        - 综上可以推出状态转移方程：目前为之最大利益 = 上次偷这次不偷 or 上次不偷这次偷
        - 程序表示如下``` dp[i] = max(dp[i-1], dp[i-2]+nums[i])```
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(n)
    - Leetcode 结果:
        - 执行用时 : 68 ms, 在所有 JavaScript 提交中击败了 93 %的用户
        - 内存消耗 : 34.1 MB, 在所有 JavaScript 提交中击败 6.9 %的用户
    - 实现:
        ``` js
        var rob = function(nums) {
            let len = nums.length;
            if (len < 1) return 0;
            let dp = [];
            dp[0] = nums[0];
            dp[1] = Math.max(nums[0], nums[1]);
            for (let i=2; i<len; i++) {
                dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
            }
            return dp[len-1];
        };
        ```
- 第二思路: 动态规划(空间优化).
    - 思路: 有用的只有上次最大收益和上上次最大收益，故无需使用数组存储.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了 98 %的用户
        - 内存消耗 : 34.1 MB, 在所有 JavaScript 提交中击败 6.9 %的用户
    - 实现:
        ``` js
        var rob = function(nums) {
            let len = nums.length;
            if (len < 1) return 0;
            let [last, curr] = [0, nums[0]];
            for (let i=1; i<len; i++) {
                [last, curr] = [curr, Math.max(curr, last+nums[i])];
            }
            return curr;
        };
        ```

### 213. 打家劫舍Ⅱ
- 刷题进度:
    - [x] 动态规划(避开条件).
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 相比198，不同点在于房屋首尾相连.
- 输入处理: 输入数组<1 => 0, 输入数组<2 => nums[i].
- 初始思路: 动态规划(避开条件).
    - 思路: 既然 0 和 n-1 相邻，那么求 0 ~ n-2 和 1 ~ n-1 的最大值即可.
    - 复杂度分析: 
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时 : 68 ms, 在所有 JavaScript 提交中击败了 96.6 %的用户
        - 内存消耗 : 34.3 MB, 在所有 JavaScript 提交中击败 12.9 %的用户
    - 实现:
        ``` js
        var rob = function(nums) {
            let len = nums.length;
            if (len < 1) return 0;
            if (len < 2) return nums[0];
            let [last1, last2, curr1, curr2] = [0, 0, nums[0], nums[1]];
            for (let i=1; i<len; i++) {
                if (i < len-1) [last1, curr1] = [curr1, Math.max(curr1, last1+nums[i])];
                if (i > 1) [last2, curr2] = [curr2, Math.max(curr2, last2+nums[i])];
            }
            return Math.max(curr1, curr2);
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```