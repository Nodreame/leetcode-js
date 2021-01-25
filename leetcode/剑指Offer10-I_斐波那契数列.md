# [斐波那契数列](https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/)

- 难度：Easy
- 标签：

## 刷题思路

- [x] 自顶向下(递归)
- [x] 自底向上(DP)
- [x] 自底向上(DP,空间优化)

### 方法 1 自顶向下(递归)

- 复杂度：
    - 时间 O(n)
    - 空间 O(n)

``` js
var fib = function(n) {
    const arr = [0, 1]
    return recursion(n, arr)
};

function recursion(n, arr) {
    if (arr[n] != null) return arr[n]
    arr[n] = (recursion(n-1, arr) + recursion(n-2, arr)) % (1e9+7)
    return arr[n]
}
```

### 方法 2 自底向上(DP)

- 复杂度：
    - 时间 O(n)
    - 空间 O(n)

``` js
var fib = function(n) {
    const dp = [0, 1]
    for (let i=2; i<=n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % (1e9+7)
    }
    return dp[n]
};
```

### 方法 3 自底向上(DP, 状态压缩)

- 复杂度：
    - 时间 O(n)
    - 空间 O(1)

``` js
var fib = function(n) {
    if (n < 2) return n
    let [dp1, dp2] = [0, 1]
    for (let i=2; i<=n; i++) {
        ;[dp1, dp2] = [dp2, (dp1 + dp2) % (1e9+7)]
    }
    return dp2
};
```

**[JS刷题记录 Leetcode-js](https://github.com/Nodreame/leetcode-js)** 每周都会更新刷题心得或者题解, 你的点赞或 star 都将助力我产出更好内容~
