# ListNode 链表

## Leetcode 刷题

### 234. 回文链表
- from：学习完极客时间《数据结构与算法之美》第六篇|链表（上）[https://time.geekbang.org/column/article/e34d5d1bb5c8ef3b18076bc2d2fad33a/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D&oss_token=aae64bcf6e8563e6]后过来实践.
- 难度：easy (感觉是 medium)
- 题意解析：给定一个链表，判断其是否为回文链表.
- 初始思路：无
- 思路1：快慢指针（有中间变量）：用一个慢指针(每次指向下一个节点)和一个快指针(每次指向下下个节点)来遍历链表，找到链表中点后反转后半部分内容，与原链表对比.
    - 复杂度分析：遍历链表故时间为O(n)，采用了中间遍历存储后半部分链表故空间O(n)，空间复杂度不满足要求;
    - 步骤如下：
        - 0) 加预处理：
            - 链表为空或者链表长度为 1 时，return 该链表是回文链表；
            - 链表长度是 2 时，对比两个节点即可得到结果；
        - 1) 找链表中点：快指针将领先慢指针一半到达终点，故快指针到达终点时慢指针刚好到达链表中点;
            - Tip:这里需要偶数长度链表和奇数长度链表有轻微不同，但是可以归一处理，即慢指针最后一位不取中点而是**取后半部分的开始位置**;
        - 2) 反转后半部分：新建空链表half，继续不断推进慢指针并把每一位都头插到链表half中，最终得到反转后的原始链表后半部分，过程代码如下：
            ``` js
            let half = null;                // 新建空链表 half
            while (slow) {                  // 停止条件是“慢指针”无法继续推进
                let temp = slow.next;           // 用临时变量 temp 存储”慢指针的 next“，
                slow.next = half;               // 用 half 替换 slow.next 内容
                half = slow;                    // 赋值 slow 给 half，综合上一行，得到的效果就是”将当前slow.val头插到链表half“
                slow = temp;                    // 将临时存储的 slow.next内容赋值给 slow, 也就是推进慢指针前进
            }
            ```
        - 3) 最后对比原始链表和结果链表half(存放链表中点后面内容的反转链表)，停止条件是half为空 或者 对比出现不同。
    - 奇偶流程：
        - 奇数情况：假设链表内容为 1，2，3， 快慢指针都从 1 开始. 
            - 第一次循环：快指针到达 3，慢指针到达 2;
            - 第二次循环：由于3后面是空，故快指针只能到达3的next，即null，同时慢指针到达 3，这就是后半部分的开始位置；
            - 反转开始，链表中点后的内容只有 3，反转完成；
            - 遍历对比原始链表和反转后链表，1 和 3 不同，故退出；
        - 偶数情况：假设链表内容为 1，2，3，4，5，6，快慢指针都从 1 开始.
            - 第一次循环：快指针到达 3，慢指针到达 2;
            - 第二次循环：快指针到达 5，慢指针到达 3;
            - 第三次循环：快指针到达 null，慢指针到达 4，4 即后半部分的开始位置;
            - 反转链表中点后内容开始，得到[6,next:[5,next:[4, next: null]]]
            - 遍历对比原始链表和反转后链表，1 和 6 不同，故退出；
    - 实现:
        ``` js
        var isPalindrome = function(head) {
            // 0. 预判
            if (!head || !head.next) return true;
            if (!head.next.next) return head.val === head.next.val; 
            // 1. 获取中点
            let [slow, fast] = [head, head];
            while (fast) {
                slow = slow.next;
                fast = fast.next? fast.next.next: fast.next;
            }
            // 2. reverse 逆序后半部分
            let half = null;
            while (slow) {
                let tmp = slow.next;
                slow.next = half;
                half = slow;
                slow = tmp;
            }
            // 3. 对比
            while (half) {
                if (head.val !== half.val) {
                    return false;
                }
                head = head.next;
                half = half.next;
            }
            return true;
        };
        ```
- 思路2：快慢指针（无中间变量）用一个慢指针(每次指向下一个节点)和一个快指针(每次指向下下个节点)来遍历链表，慢指针不断反转自身直到找到链表中点，找到后直接开始对比操作.


### 206. 单链表反转 
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题01.
### 141. 链表中环的检测 
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题02.
### 21. 两个有序的链表合并
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题03.
### 19. 删除链表倒数第n个结点
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题04.
### 876. 求链表的中间结点
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题05.

### 237. 删除链表中的节点
- 刷题进度:
    - [x] 直接next
    - [x] "替身攻击"
- 难度: easy
- 题意解析: 给定当前节点，要求删除而并不给目标链表. 看答案后知道要求在不给定目标链表的情况下删除给定节点(有点东西).
- 输入处理: 无.
- 初始思路: 直接next.
    - 思路: 想用 node = node.next, 发现无效果，原因有大佬给出来了[对象赋值](https://leetcode-cn.com/problems/delete-node-in-a-linked-list/solution/jsxiao-keng-by-chitanda-eru/)，也就是所直接对象赋值改变的只是指向的对象地址，只有直接改变对象数据才有用，于是我们使用Object.assign替换对象的val和next属性.
    - 复杂度分析:
        - 时间: O(1)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 64 ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗: 35.6 MB, 在所有 JavaScript 提交中击败 55 %的用户
    - 实现:
        ``` js
        var deleteNode = function(node) {
          Object.assign(node, node.next);
        };
        ```
- 第二思路: "替身攻击"
    - 思路: 网友的思路，将node.next的值赋给当前节点node, 然后将当前节点node的next指向下下个节点
    - 复杂度分析:
        - 时间: O(1)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 64 ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗: 35.7 MB, 在所有 JavaScript 提交中击败 43 %的用户
    - 实现:
        ``` js
        var deleteNode = function(node) {
            node.val = node.next.val;
            node.next = node.next.next;
        };
        ```

### 206. 反转链表
- 刷题进度:
    - [x] 迭代法
    - [x] 递归法
- 难度: easy.
- 题意解析: 反转给定链表.
- 输入处理: head为空直接返回空.
- 初始思路: 迭代法
    - 思路: 设置一个前指针prev和推进指针curr，推进直到curr为空，返回prev.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗: 34.9 MB, 在所有 JavaScript 提交中击败 51 %的用户
    - 实现:
        ``` js
        var reverseList = function(head) {
            let [prev, curr] = [null, head];
            while (curr) {
                let tmp = curr.next;    // 1. 临时存储当前指针后续内容
                curr.next = prev;       // 2. 反转链表
                prev = curr;            // 3. 接收反转结果
                curr = tmp;             // 4. 接回临时存储的后续内容
            }
            return prev;
        };
        ```
    - 简化实现：
        ``` js
        var reverseList = function(head) {
            let [prev, curr] = [null, head];
            while (curr) {
                [curr.next, prev, curr] = [prev, curr, curr.next];
            }
            return prev;
        };
        ```
- 第二思路: 递归法
    - 思路: 类似迭代，初始传递前指针prev和当前指针curr(初始即head)到递归方法中，curr为空则返回prev.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 64 ms, 在所有 JavaScript 提交中击败了 96 %的用户
        - 内存消耗: 35.2 MB, 在所有 JavaScript 提交中击败 27 %的用户
    - 实现:
        ``` js
        var reverseList = function(head) {
            return reverse(null, head);
        };

        function reverse (prev, curr) {
            if (!curr) return prev;
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
            return reverse(prev, curr);
        }
        ```
    - 简化实现:
        ``` js
        var reverseList = function(head) {
            return reverse(null, head);
        };

        function reverse (prev, curr) {
            if (!curr) return prev;
            let tmp = curr.next;
            curr.next = prev;
            // prev = curr;
            // curr = tmp;
            return reverse(curr, tmp);
        }
        ```

### 876. 链表的中间结点
- 刷题进度:
    - [x] 快慢指针
    - [x] 循环计数
    - [ ] xxx
- 难度: easy
- 题意解析: 给定带头节点的非空链表（实际本题用例不带头），返回链表的中间节点，链表长度为1~100.
- 输入处理: 链表长度为1的情况直接返回.
- 初始思路: 快慢指针.
    - 思路: 快指针步伐是慢指针的两倍，快指针&快指针的next存在时可以继续推进.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 55 %的用户
        - 内存消耗: 33.6 MB, 在所有 JavaScript 提交中击败 66 %的用户
    - 实现:
        ``` js
        var middleNode = function(head) {
            let [fast, slow] = [head, head];
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            return slow;
        };
        ```
- 第二思路: 两次循环.
    - 思路: 第一轮计数并取目标下标，第二轮循环到下标.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 67 %的用户
        - 内存消耗: 33.6 MB, 在所有 JavaScript 提交中击败 71 %的用户
    - 实现:
        ``` js
        var middleNode = function(head) {
            let count = 0;
            let curr = head;
            while (curr) {
                curr = curr.next;
                count++;
            }
            let idx = Math.floor(count/2);
            for (let i=0; i<idx; i++) {
                head = head.next;
            }
            return head;
        };
        ```

### 148. 排序链表
- 刷题进度:
    - [x] 归并递归法(空间复杂度不符合题意)
    - [x] 归并迭代法
    - [ ] xxx
- 难度: medium
- 题意解析: 对给定链表进行排序，要求时间复杂度为O(nlogn), 空间复杂度为O(1).
- 输入处理: 给定链表为空 & 链表长度为1时，直接返回.
- 初始思路: 归并递归法.
    - 思路: 不断二分再归并.
    - 复杂度分析:
        - 时间: O(nlogn).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时: 116 ms, 在所有 JavaScript 提交中击败了 81 %的用户
        - 内存消耗: 41.8 MB, 在所有 JavaScript 提交中击败 32 %的用户
    - 实现:
        ``` js
        var sortList = function(head) {
            if (!head || !head.next) return head;
            let [slow, fast, mid] = [head, head.next, null];
            while (fast && fast.next) {
                fast = fast.next.next;
                slow = slow.next;
            }
            [mid, slow.next] = [slow.next, null];
            
            let [left, right] = [sortList(head), sortList(mid)];
            let curr = res = new ListNode(null);
            while (left && right) {
                if (left.val <= right.val) {
                    curr.next = left;
                    left = left.next;
                } else {
                    curr.next = right;
                    right = right.next;
                }
                curr = curr.next;
            }
            curr.next = left ? left : right;
            return res.next;
        };
        ```
- 第二思路: 归并迭代法
    - 思路: 两两比较合并.
    - 复杂度分析:
        - 时间: O(nlogn)
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 264 ms, 在所有 JavaScript 提交中击败了 23.8 %的用户
        - 内存消耗: 49.2 MB, 在所有 JavaScript 提交中击败 8.8 %的用户
    - 实现:
        ``` js
        var sortList = function(head) {
            if (!head || !head.next) return head;   
            let len = 0;
            let tmp = head;
            while (tmp) {
                len++;
                tmp = tmp.next;
            }
            let res = new ListNode(null);
            res.next = head;
            let step = 1;
            while (step < len) {
                let [prev, curr] = [res, res.next];
                while (curr) {
                    let [h1, h2, i] = [curr, null, step];
                    while (curr && i) {
                        [curr, i] = [curr.next, i-1];
                    }
                    if (i) break;
                    [h2, i] = [curr, step];
                    while (curr && i) {
                        [curr, i] = [curr.next, i-1];
                    }
                    let [c1, c2] = [step, step-i];
                    while (c1 && c2) {
                        if (h1.val < h2.val) {
                            [prev.next, h1, c1] = [h1, h1.next, c1-1];
                        } else {
                            [prev.next, h2, c2] = [h2, h2.next, c2-1];
                        }
                        prev = prev.next;
                    }
                    prev.next = c1? h1: h2;
                    while (c1>0 || c2>0) {
                        [prev, c1, c2] = [prev.next, c1-1, c2-1];
                    }
                    prev.next = curr;
                }
                step *=2;
            }
            return res.next;
        };
        ```