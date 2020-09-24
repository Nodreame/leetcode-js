# [从尾到头打印链表](https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

- 难度：Easy
- 标签：链表反转 递归

## 刷题思路

- [x] 链表转数组
- [x] 链表反转+遍历
- [x] 递归

### 方法 1 链表转数组

- 复杂度：
    - 时间 O(N). 遍历 O(N).
    - 空间 O(N^2). 倒插复杂度依次为 1~n, 即 O(n*(n-1)/2) => O(N^2)
- 结果：
    - 执行用时：100 ms, 在所有 JavaScript 提交中击败了39.14%的用户
    - 内存消耗：38.6 MB, 在所有 JavaScript 提交中击败了38.86%的用户

``` js

var reversePrint = function(head) {
    const res = []
    while (head) {
        res.unshift(head.val)
        head = head.next
    }
    return res
};
```

### 方法 2 链表反转+遍历

- 复杂度：
    - 时间 O(N). 反转 O(N) + 遍历 O(N).
    - 空间 O(1).
- 结果:
    - 执行用时：84 ms, 在所有 JavaScript 提交中击败了85.33%的用户
    - 内存消耗：38.6 MB, 在所有 JavaScript 提交中击败了37.17%的用户

``` js
var reversePrint = function(head) {
    head = reverse(head)
    const res = []
    while (head) {
        res.push(head.val)
        head = head.next
    }
    return res
};

function reverse (head) {
    if (!head || !head.next) return head
    let [prev, curr] = [null, head]
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
```

### 方法 3 递归打印

- 思路: 递归都是从运行到栈最尾部，完成运算后依次弹出. 这里利用了递归的特性倒转打印，无需写反转链表的逻辑.
- 复杂度：
    - 时间 O(N). 一次遍历.
    - 空间 O(N). 递归调用栈消耗.
- 结果:
    - 执行用时：84 ms, 在所有 JavaScript 提交中击败了85.33%的用户
    - 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了6.41%的用户

``` js
var reversePrint = function(head) {
    const res = []
    recursion(head, res)
    return res
};

function recursion (head, arr) {
    if (!head) return head
    const res = recursion(head.next, arr)
    arr.push(head.val)
}
```

**[JS刷题记录 Leetcode-js](https://github.com/Nodreame/leetcode-js)** 每周都会更新刷题心得或者题解, 你的点赞或 star 都将助力我产出更好内容~
