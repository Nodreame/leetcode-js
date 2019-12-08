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


### 141. 链表中环的检测 
- from: 极客时间《数据结构与算法之美》第七篇|链表（下）[https://time.geekbang.org/column/article/fda84f8a5e99425f9ccf15c8076313b7/share?code=QL4k0yL62vmfx42gu7VS9i592A2AV6EbqBJEXwyI22Y%3D] 课后题02.
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
    - [x] 自递归法 -- 反转后尾接
    - [x] 尾递归法
- 难度: easy.
- 题意解析: 反转给定链表.
- 输入处理: head为空直接返回空.
- 初始思路: 迭代法
    - 思路: 设置一个前指针prev和推进指针curr，推进直到curr为空，返回prev.
    - 复杂度分析:
        - 时间: O(n). 逐个推进故 O(n).
        - 空间: O(1). 只用到了常数级额外空间故 O(1).
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
- 第二思路: 自递归法 -- 反转后尾接
    - 思路: 自递归无法存储推进状态所以无法尾递归，不断将 next 放入递归方法反转链表，结果.next = 当前节点. （Tip: 记得推进结果直到 next.next 为空）
    - 复杂度分析:
        - 时间: O(n). 从最底层两个节点反转开始，每层时间复杂度均为 O(1), 总共 n-1 层递归，故时间复杂度为 O(n).
        - 空间: O(n). 递归调用栈消耗空间，共 n-1 层递归，故空间复杂度为 O(n).
    - Leetcode 结果:
        - 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 85 %的用户
        - 内存消耗: 35.2 MB, 在所有 JavaScript 提交中击败 24 %的用户
    - 实现(反转后尾接，省去推进过程):
        ``` js
        var reverseList = function(head) {
            if (!head || !head.next) return head;
            let next = head.next; // next节点，反转后是最后一个节点
            let reverseHead = reverseList(next);
            head.next = null; // 裁减 head
            next.next = head; // 尾接
            return reverseHead;
        };
        ```
- 第三思路: 尾递归法
    - 思路: 用 prev 和 curr 存储推进状态，直到 curr 为空则输出结果.
    - 复杂度分析:
        - 时间: O(n). 等同于正常推进，故 O(n).
        - 空间: O(1). 尾递归方式，重复使用一个空间故空间复杂度为 O(1).
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 98 %的用户
        - 内存消耗: 35.2 MB, 在所有 JavaScript 提交中击败 27 %的用户
    - 实现:
        ``` js
        var reverseList = function(head) {
            return reverse(null, head);
        };

        function reverse (prev, curr) {
            if (!curr) return prev;
            // [curr.next, prev, curr] = [prev, curr.next, curr.next];
            let tmp = curr.next;
            curr.next = prev;
            return reverse(curr, tmp);
        }
        ```

### 876. 链表的中间结点
- 刷题进度:
    - [x] 快慢指针
    - [x] 两次循环
    - [ ] xxx
- 难度: easy
- 题意解析: 给定带头节点的非空链表（实际本题用例不带头），返回链表的中间节点，链表长度为1~100.
- 输入处理: 链表长度为1的情况直接返回.
- 初始思路: 快慢指针.
    - 思路: 快指针步伐是慢指针的两倍，快指针&快指针的next存在时可以继续推进.
    - 复杂度分析:
        - 时间: O(n). 快指针双倍速度推进，实际耗时O(n/2).
        - 空间: O(1). 常量级额外空间使用.
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
        - 时间: O(n). 推进一轮获取长度,耗时 O(n)，推进第二轮到中间节点, 耗时 O(n/2).
        - 空间: O(1). 无使用额外空间.
    - Leetcode 结果:
        - 执行用时: 40 ms, 在所有 JavaScript 提交中击败了 100 %的用户
        - 内存消耗: 33.6 MB, 在所有 JavaScript 提交中击败 71 %的用户
    - 实现:
        ``` js
        var middleNode = function(head) {
            if (!head || !head.next) return head;
            let [count, tmp] = [0, head];
            while (tmp) [count, tmp] = [count+1, tmp.next];
            for (let i=0, len=Math.floor(count/2); i<len; i++) {
                head = head.next;
            }
            return head;
        };
        ```

### 148. 排序链表
- 刷题进度:
    - [x] 归并递归法(空间复杂度不符合题意)
    - [x] 归并迭代法(不截断)
    - [x] 归并迭代法(截断)
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
            // 递归思想：
            if (!head || !head.next) return head;
            //  1. 快慢针二分，前一半截断并获取后一半开始节点(奇数中间，偶数中前)
            let [slow, fast, mid] = [head, head.next, null];
            while (fast && fast.next) [slow, fast] = [slow.next, fast.next.next];
            [slow.next, mid] = [null, slow.next]
            // 2. 左右递归；
            let [left, right] = [sortList(head), sortList(mid)];
            // 3. 合并递归结果左右链表 @#21
            let curr = res = new ListNode(null);
            while (left && right) {
                if (left.val < right.val) [curr.next, left] = [left, left.next];
                else [curr.next, right] = [right, right.next];
                curr = curr.next;
            }
            curr.next = left ? left : right;
            //  4. return 空节点.next;
            return res.next;
        };
        ```
- 第二思路: 归并迭代法(不截断).
    - 思路: 两两比较合并.
    - 复杂度分析:
        - 时间: O(nlogn). 每次长度*2推进复杂度 O(logn)，中间逐个推进 O(n).
        - 空间: O(1). 原地归并故O(1).
    - Leetcode 结果:
        - 执行用时: 264 ms, 在所有 JavaScript 提交中击败了 23.8 %的用户
        - 内存消耗: 49.2 MB, 在所有 JavaScript 提交中击败 8.8 %的用户
    - 实现:
        ``` js
        var sortList = function(head) {
            // 不截断归并：
            //  0. head 为空或只有一个，直接返回
            if (!head || !head.next) return head; 
            //  1. 获取链表长度
            let [tmp, count] = [head, 0];
            while (tmp) [tmp, count] = [tmp.next, count+1];
            //  2. 创建结果空节点 res
            let res = new ListNode(null);
            res.next = head;
            //  3. 获取左右链表循环开始，先是步长为1（单节点），步长不断*2，直到超过链表长度
            //      3.0 用 prev 做替身，curr 做临时工, 每次更新步长则重来
            //      3.1 获取左链表，按步长推进，获取右链表，按步长推进；
            //      3.2 对比排序循环开始，由于不截断，故循环对比排序条件只能用当前左右链表长度；
            //      3.3 用 prev 接收为左右中的未完链表；
            //      3.4 用剩余长度推进 prev;
            //      3.5 用 prev.next 接收 curr;
            for (let i=1; i<count; i*=2) {
                let [prev, curr] = [res, res.next];
                while (curr && curr.next) {
                    let [n1, n2, step] = [curr, null, i];
                    while (curr && step) [curr, step] = [curr.next, step-1];
                    if (step) break; // 无后续节点，长度不足
                    [n2, step] = [curr, i];
                    while (curr && step) [curr, step] = [curr.next, step-1];
                    let [l1, l2] = [i, i-step];
                    while (l1 && l2) {
                        if (n1.val < n2.val) [prev.next, n1, l1] = [n1, n1.next, l1-1];
                        else [prev.next, n2, l2] = [n2, n2.next, l2-1];
                        prev = prev.next;
                    }
                    prev.next = l1 ? n1 : n2;
                    while (l1>0 || l2>0) [prev, l1, l2] = [prev.next, l1-1, l2-1];
                    prev.next = curr;
                }
            }
            //  4. 返回
            return res.next;
        };
        ```
- 第三思路: 归并迭代法(截断).
    - 思路: 类似第二思路，但是每次都会截断和合并.
        - 参考：[ivan_allen的答案](https://leetcode-cn.com/problems/sort-list/solution/148-pai-xu-lian-biao-bottom-to-up-o1-kong-jian-by-/)
    - 复杂度分析:
        - 时间: O(nlogn). 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: 140 ms, 在所有 JavaScript 提交中击败了 38.9 %的用户
        - 内存消耗: 45 MB, 在所有 JavaScript 提交中击败 17.6 %的用户
    - 实现:
        ``` js
        var sortList = function(head) {
            if (!head || !head.next) return head;
            let [tmp, count] = [head, 0];
            while (tmp) [tmp, count] = [tmp.next, count+1];
            
            let res = new ListNode(null);
            res.next = head;
            for (let i=1; i<count; i*=2) {
                let [prev, curr] = [res, res.next];
                while (curr) {
                    let n1 = curr;
                    let n2 = cut(n1, i);
                    curr = cut(n2, i);
                    
                    prev.next = merge(n1, n2);
                    while (prev.next) prev = prev.next;
                }
            }
            return res.next;
        };

        function cut (head, size) {
            let curr = head;
            while (--size && curr) curr = curr.next;
            if (!curr) return null;
            let next = curr.next;
            curr.next = null;
            return next;
        }

        function merge (n1, n2) {
            let res = new ListNode(null);
            let prev = res;
            while (n1 && n2) {
                if (n1.val < n2.val) [prev.next, n1] = [n1, n1.next];
                else [prev.next, n2] = [n2, n2.next];
                prev = prev.next;
            }
            prev.next = n1 ? n1 : n2;
            return res.next;
        }
        ```

### 24. 两两交换链表中的节点
- 刷题进度:
    - [x] 迭代法.
    - [x] 自递归法.
- 难度: medium.
- 题意解析: 将给定的链表的两两节点进行交换，要求发生实际节点交换.
- 输入处理: 输入链表为空及长度为1时，直接返回输入值.
- 初始思路: 迭代法.
    - 思路: 使用哨兵头节点， 推进指针prev从当前哨兵节点位置出发，故prev.next=head，确认接下来两个节点(prev.next, prev.next.next)是否为空
        - 若不为空则开始交换: a为prev.next, b为prev.next.next, 同时发生prev.next=b, a.next=b.next, b.next=a; prev推进两格; 循环继续;
        - 若有一个或一个以上为空则直接返回哨兵head节点的next;
    - 复杂度分析:
        - 时间: O(n). 推进遍历整个链表故O(n).
        - 空间: O(1). 使用常量级空间.
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 94 %的用户
        - 内存消耗: 33.9 MB, 在所有 JavaScript 提交中击败 12.3 %的用户
    - 实现:
        ``` js
        var swapPairs = function(head) {
            // 1. 确认 head 大于等于两个，否则返回;
            if (!head || !head.next) return head;
            // 2. 新建链表哨兵头并创建指针curr；
            let res = new ListNode(null);
            res.next = head;
            let prev = res;
            // 3. 循环开始
            //    3.1 走两步，存为fst, snd;
            //    3.2 哨兵->snd, fst->snd.next, snd->fst;
            //    3.3 推进 curr = curr.next.next;
            while (prev.next && prev.next.next) {
                let [fst, snd] = [prev.next, prev.next.next];
                [prev.next, fst.next, snd.next] = [snd, snd.next, fst];
                prev = prev.next.next;
            }
            // 4. 返回res.next;
            return res.next;
        };
        ```
- 第二思路: 自递归法.
    - 思路: 明确输入、终止条件、返回值、递归方法逻辑
        - 输入：自递归的输入恒为第一个节点;
        - 终止条件：输入为空或者输入.next为空;
        - 返回值：已经完成交换的后续链表;
        - 递归方法逻辑：同上面方法，res = 1.next && 1.next=已完成交换的后续链表 && res.next = 1
    - 复杂度分析:
        - 时间: O(n). 从最底层两个互换到最高层，每层时间复杂度均为O(1), 共 n/2 层故时间复杂度为 O(n/2).
        - 空间: O(n). 共 n/2 层递归调用栈， 故空间复杂度为 O(n/2).
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 94.8 %的用户
        - 内存消耗: 33.6 MB, 在所有 JavaScript 提交中击败 63.6 %的用户
    - 实现:
        ``` js
        var swapPairs = function(head) {
            // 自递归思路：
            //    1. 确认head大于等于两个，否则返回
            if (!head || !head.next) return head; 
            //    2. 获得第二个节点;
            let next = head.next;
            //    3. 第一个节点指向第三个节点, 传入第三个节点开始递归，获得已排序的链表；
            head.next = swapPairs(next.next);
            //    4. 第二个节点指向第一个节点
            next.next = head;
            //    5. 返回第二个节点；
            return next;
        };
        ```
    - 实现二:
        ``` js
        var swapPairs = function(head) {
            if (!head || !head.next) return head;
            let [fst, snd] = [head, head.next];
            [fst.next, snd.next] = [swapPairs(snd.next), fst];
            return snd;
        };
        ```

### 21. 两个有序的链表合并
- 刷题进度:
    - [x] 直接法
    - [x] 递归法
    - [ ] xxx
- 难度: easy
- 题意解析: 将两个有序链表合并为一个新的有序链表并返回.
- 输入处理: 无需
- 初始思路: 直接法
    - 思路: 比较两个链表当前值大小, 直到两个链表一个为空，将剩余节点尾插.
    - 复杂度分析:
        - 时间: O(m+n)
        - 空间: O(m+n)
    - Leetcode 结果:
        - 执行用时: 80 ms, 在所有 JavaScript 提交中击败了 65 %的用户
        - 内存消耗: 36 MB, 在所有 JavaScript 提交中击败 10 %的用户
    - 实现:
        ``` js
        var mergeTwoLists = function(l1, l2) {
            let curr = res = new ListNode(null);
            while (l1 && l2) {
                if (l1.val < l2.val) [curr.next, l1] = [l1, l1.next];
                else [curr.next, l2] = [l2, l2.next];
                curr = curr.next;
            }
            curr.next = l1 ? l1 : l2;
            return res.next;
        };
        ```
- 第二思路: 递归法.
    - 思路: 对比两链表首位，将后续链表和另一链表递归结果尾接.
    - 复杂度分析:
        - 时间: O(m+n)
        - 空间: O(m+n)
    - Leetcode 结果:
        - 执行用时: 84 ms, 在所有 JavaScript 提交中击败了 51 %的用户
        - 内存消耗: 35.5 MB, 在所有 JavaScript 提交中击败 39 %的用户
    - 实现:
        ``` js
        var mergeTwoLists = function(l1, l2) {
            if (!l1) return l2;
            if (!l2) return l1;
            if (l1.val < l2.val) {
                l1.next = mergeTwoLists(l1.next, l2);
                return l1;
            } else {
                l2.next = mergeTwoLists(l1, l2.next);
                return l2;
            }
        };
        ```

### 147. 对链表进行插入排序
- 刷题进度:
    - [x] 直接解法
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 对链表进行插入排序，达到从左到右越来越大的效果.
- 输入处理:
- 初始思路: 直接解法.
    - 思路: 加哨兵头节点方便替换，使用 head 持续推进，推进受阻时从头遍历，交换两值，重置 head 到当前交换后位置。
    - 复杂度分析:
        - 时间: O(n^2). 最好O(n), 最坏O(n^2). 插入排序 O(n^2).
        - 空间: O(1). 插入排序是原地排序.
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 98 %的用户
        - 内存消耗: 37.5 MB, 在所有 JavaScript 提交中击败 8.33 %的用户
    - 实现:
        ``` js
        var insertionSortList = function(head) {
            if (!head || !head.next) return head;
            let res = new ListNode(null);
            res.next = head;
            while (head && head.next) {
                if (head.val <= head.next.val) {
                    head = head.next;
                    continue;
                }
                let curr = head.next;
                let prev = res;
                while (prev.next.val <= curr.val) prev = prev.next;
                head.next = curr.next;
                curr.next = prev.next;
                prev.next = curr;
            }
            return res.next;
        };
        ```
    - 简化实现：
        ``` js
        var insertionSortList = function(head) {
            if (!head || !head.next) return head;
            let res = new ListNode(null);
            res.next = head;
            while (head && head.next) {
                if (head.val <= head.next.val) {
                    head = head.next;
                    continue;
                }
                let curr = head.next;
                let prev = res;
                while (prev.next.val <= curr.val) prev = prev.next;
                // head.next = curr.next;
                // curr.next = prev.next;
                //prev.next = curr;
                [head.next, curr.next, prev.next] = [curr.next, prev.next, curr];
            }
            return res.next;
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

### 328. 奇偶链表
- 刷题进度:
    - [x] 互换法. 
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 将初始链表的第奇数位和第偶数位整合排在一起.
- 输入处理: head 或 head.next 为空则返回 head
- 初始思路: 互换法. 
    - 思路: 初始化奇数起点head、奇数终点oddTail、偶数起点evenHead、偶数终点evenTail, oddTail 和 evenTail 互相接收 next 并推进， 完成推进之后 oddTail.next = evenHead, 返回奇数起点 head 即可.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(1). 原地排序.
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 100 %的用户
        - 内存消耗: 36 MB, 在所有 JavaScript 提交中击败 69 %的用户
    - 实现:
        ``` js
        var oddEvenList = function(head) {
            if (!head || !head.next) return head;
            let [oddTail, evenTail, eHead] = [head, head.next, head.next];
            while (oddTail.next && evenTail.next) {
                oddTail.next = evenTail.next;
                oddTail = oddTail.next;
                evenTail.next = oddTail.next;
                evenTail = evenTail.next;
            }
            oddTail.next = eHead;
            return head;
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

### 25. K 个一组翻转链表
- 刷题进度:
    - [ ] 切分反转块 & 反转链表递归
    - [ ] xxx
    - [ ] xxx
- 难度: hard
- 题意解析: 将链表中每k个节点作为一个块反转. 要求：常数级空间，需要实际节点交换.
- 输入处理: 无
- 初始思路: 切分反转块 & 反转链表递归.
    - 思路:
    - 复杂度分析:
        - 时间: 最坏 O(n^2), 最好 O(n)
        - 空间: 常量级 O(1)
    - Leetcode 结果:
        - 执行用时: 92 ms, 在所有 JavaScript 提交中击败了 71.9 %的用户
        - 内存消耗: 37.9 MB, 在所有 JavaScript 提交中击败 12.5 %的用户
    - 实现:
        ``` js
        var reverseKGroup = function(head, k) {
            let res = new ListNode(0);
            res.next = head;
            let prev = res;
            while (prev.next) {
                let [start, end] = [prev.next, prev.next];
                for (let i=1; i<k && end; i++) end = end.next;
                if (!end) break; // 第(k-1)个节点为空
                let next = end.next; // 获取反转范围后面部分
                end.next = null; // 切断反转范围后面部分
                let part_reverse = reverse(start); // 反转部分
                start.next = next;
                prev.next = part_reverse;
                for (let i=0; i<k; i++) prev = prev.next;
            }
            return res.next;
        };

        // #206 反转链表
        function reverse (head) {
            let [prev, curr] = [null, head];
            while (curr) {
                [curr.next, prev, curr] = [prev, curr, curr.next];
            }
            return prev;
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

### 817. 链表组件
- 刷题进度:
    - [x] 两次检索法.
    - [x] 一次检索 + flag.
    - [x] Set查值 + flag.
- 难度: medium
- 题意解析: 给定链表 head 和 数组 G，其中数组 G 的任何一个元素都存在于链表 head 中，求数组 G 中组件的个数.
    - "组件"定义：链表中一段最长连续节点值的集合. 详见 [CoderYQ 的评论] (https://leetcode-cn.com/problems/linked-list-components/comments/13068)，我也是看了这位大神的描述才看懂题目的.
    ```
    # 搬运 CoderYQ 大神的评论：
    1，由于数组G是链表head所有元素值的子集，所以数组G中的任何元素都能在链表中找到（这TM不是废话？）;
    2，因此G中的每个元素就可以看做是链表head的一个子链表，即G中的每个元素都是链表head的组件；
    3，但是此时的组件还不敢称之为真正的组件，因为完全存在这样一种可能：
    3.1 G中任意组合的两个元素a, b构成了一个更长的head的子链表 a->b ，
    3.2 此时根据题意 a->b 比 a 和 b 都要长，所以 a->b 包涵了 a、b 成为真正的组件，原来的a、b 就不能算组件了，
    3.3 如此一来问题变成了 对于给定的集合G，G中所有的元素能构成多少个head中相连的子链表？
    ```
- 输入处理:    
    - LeetCode 上的分析：
        - 1，由于数组G是链表head所有元素值的子集，所以数组G中的任何元素都能在链表中找到（这TM不是废话？）;
        - 2，因此G中的每个元素就可以看做是链表head的一个子链表，即G中的每个元素都是链表head的组件；
        - 3，但是此时的组件还不敢称之为真正的组件，因为完全存在这样一种可能：
            - 3.1 G中任意组合的两个元素a, b构成了一个更长的head的子链表 a->b ，
            - 3.2 此时根据题意 a->b 比 a 和 b 都要长，所以 a->b 包涵了 a、b 成为真正的组件，原来的a、b 就不能算组件了，
            - 3.3 如此一来问题变成了 对于给定的集合G，G中所有的元素能构成多少个head中相连的子链表？
- 初始思路: 两次检索法.
    - 思路: 推进链表指针，如果节点存在于 G 中，则推进直到 next 节点不存在或者不存在于 G 中.
    - 复杂度分析:
        - 时间: O(n\*G). 遍历链表复杂度 O(n)，在 G 中检索元素复杂度 O(G)，故 O(n\*G).但每个节点可能会经过**两次 indexOf** 故变慢.
        - 空间: O(1)
    - Leetcode 结果:
        - 执行用时: 392ms, 在所有 JavaScript 提交中击败了 19 %的用户
        - 内存消耗: 38.2MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var numComponents = function(head, G) {
            let count = 0;
            while (head) {
                if (G.indexOf(head.val) !== -1) { // 当前节点值存在于 G 中
                    if (!head.next || G.indexOf(head.next.val) === -1) count++;  // next 值存在且不在 G 中，计数+1
                }
                head = head.next;
            }
            return count;
        };
        ```
- 第二思路: 一次检索 + flag.
    - 思路: 推进链表节点，节点存在于 G 中则触发组件模式，直到退出或者结束.
    - 复杂度分析:
        - 时间: O(n*G). 每个节点仅需一次检索.
        - 空间: O(1).
    - Leetcode 结果:
        - 执行用时: 272 ms, 在所有 JavaScript 提交中击败了 47 %的用户
        - 内存消耗: 37.7 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var numComponents = function(head, G) {
            let [count, flag] = [0, false];
            while (head) {
                if (G.indexOf(head.val) > -1) {
                    flag = true;
                    if (!head.next) count++;
                } else {
                    if (flag) [count, flag] = [count+1, false];
                }
                head = head.next;
            }
            return count;
        };
        ```
- 第三思路: Set查值 + flag.
    - 思路: 思路同上. 但是用用 Set 接收 G，使其从 索引集合 -> 键值集合，优化搜索效率.
    - 复杂度分析:
        - 时间: O(n*G). 使用键值集合优化检索效率.
        - 空间: O(G). 额外使用 Set 存储 G, 空间换时间.
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 88 %的用户
        - 内存消耗: 38.6 MB, 在所有 JavaScript 提交中击败 100 %的用户
    - 实现:
        ``` js
        var numComponents = function(head, G) {
            let [count, flag] = [0, false];
            let setG = new Set(G);
            while (head) {
                if (setG.has(head.val)) {
                    flag = true;
                    if (!head.next) count++;
                } else {
                    if (flag) [count, flag] = [count+1, false];
                }
                head = head.next;
            }
            return count;
        };
        ```

### 86. 分隔链表
- 刷题进度:
    - [x] 双链表推进
    - [x] 裁减& 头插链表
    - [x] 推进提取插入
    - [x] 双头尾针
- 难度: medium
- 题意解析: 给定链表和一个特定值 x , 用 x 分割链表，使小于 x 的节点在其他节点前面
- 输入处理: 无需.
- 初始思路: 双链表推进 
    - 思路:
        - 两个链表dummyHead1、dummyHead2分别存储小于x的节点和其他节点
        - 用 curr1、curr2 推进curr1 尾接 dummyHead2.next, 返回 dummyHead1.next
    - 复杂度分析:
        - 时间: O(n). 依次推进遍历.
        - 空间: O(n). 双链表存储共占用 n个大小的空间.
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 50 %的用户
        - 内存消耗: 34.1 MB, 在所有 JavaScript 提交中击败 41 %的用户
    - 实现:
        ``` js
        var partition = function(head, x) {
            let [dummy1, dummy2] = [new ListNode(0), new ListNode(0)];
            let [curr1, curr2] = [dummy1, dummy2];
            while (head) {
                if (head.val < x) {
                    curr1.next = head;
                    head = head.next;
                    curr1 = curr1.next;
                    curr1.next = null;
                } else {
                    curr2.next = head;
                    head = head.next;
                    curr2 = curr2.next;
                    curr2.next = null;
                }
            }
            curr1.next = dummyHead2.next;
            return dummyHead1.next;
        };
        ```
- 第二思路: 裁减& 头插链表
    - 思路: 
        - 一次遍历将所有小于 x 的值从链表中裁减并入栈；
        - 出栈并头插；
    - 复杂度分析:
        - 时间: O(n). 一次遍历裁减 & 一次遍历插入, 最差 O(2n), 最好 O(n)
        - 空间: O(n). 额外栈空间，最好 O(1)，最坏 O(n).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 69 %的用户
        - 内存消耗: 34 MB, 在所有 JavaScript 提交中击败 55 %的用户
    - 实现:
        ``` js
        var partition = function(head, x) {
            let res = new ListNode(0);
            res.next = head;
            let stack = [];
            let prev = res;
            // 去除所有小于 x 的节点
            while (prev.next) {
                if (prev.next.val < x) {
                    stack.push(prev.next.val);
                    prev.next = prev.next.next;
                } else {
                    prev = prev.next;
                }
            }
            // 栈弹出并依次头插链表
            let len = stack.length;
            for (let i=len-1; i>=0; i--) {
                let curr = new ListNode(stack[i]);
                curr.next = res.next;
                res.next = curr;
            }
            return res.next;
        };
        ```
- 第三思路: 推进提取插入
    - 思路: 推进过程中对比，如果在遇到大于等于 x 的值后，遇到小于 x 的值则提取，插入最后一个小于 x 的节点之后.
    - 复杂度分析:
        - 时间: O(n^2). 最好 O(n), 最坏 O(n^2).
        - 空间: O(n). 最好 O(1), 最坏 O(n).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 62 %的用户
        - 内存消耗: 34.8 MB, 在所有 JavaScript 提交中击败 9 %的用户
    - 实现:
        ``` js
        var partition = function(head, x) {
            let res = new ListNode(null);
            res.next = head;
            let prev = res;
            let flag = false; // 是否遇到大与 x 的数
            while (prev.next) {
                if (prev.next.val < x) {
                    if (flag) { // 没到之前小于也不移动，到之后回到原点推进
                        let curr = prev.next;
                        let tmp = res;
                        while (tmp.next.val < x) tmp = tmp.next;
                        prev.next = curr.next;
                        curr.next = tmp.next;
                        tmp.next = curr;
                    } else {
                        prev = prev.next;
                    }
                } else {
                    flag = true;
                    prev = prev.next;
                }
            }
            return res.next;
        };
        ```
- 第四思路: 双头尾针.
    - 思路: 类似思路一.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 64 ms, 在所有 JavaScript 提交中击败了 90 %的用户
        - 内存消耗: 34.5 MB, 在所有 JavaScript 提交中击败 9 %的用户
    - 实现:
        ``` js
        var partition = function(head, x) {
            let [lessHead, lessTail, greatHead, greatTail] = [null, null, null, null];
            while (head) {
                if (head.val < x) {
                    if (!lessHead) {
                        [lessHead, lessTail] = [head, head];
                    } else {
                        lessTail.next = head;
                        lessTail = lessTail.next;
                    }
                } else {
                    if (!greatHead) {
                        [greatHead, greatTail] = [head, head];
                    } else {
                        greatTail.next = head;
                        greatTail = greatTail.next;
                    }
                }
                head = head.next;
            }
            if (!lessHead) return greatHead;
            if (!greatHead) return lessHead;
            greatTail.next = null;
            lessTail.next = greatHead;
            return lessHead;
        };
        ```

### 143. 重排链表
- 刷题进度:
    - [ ] 二分链表重组.
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 给定单链表L: L0->L1->L2->L3->...->L(n-1)->L(n), 将其重排成: L0->L(n)->L1->L(n-1)->L2->....
- 输入处理: !head || !head.next 直接返回 head
- 初始思路: 二分链表重组.
    - 思路:
        - 1. 快慢针找到中点
        - 2. 拆分链表
        - 3. 后半链表反转
        - 4. 两链表合并
    - 复杂度分析:
        - 时间: O(n). 快慢针 O(n/2) + 反转 O(n/2 * log(n/2)) + 合并链表 O(n/2)
        - 空间: O(n). 后半部分链表空间 + 反转递归空间
    - Leetcode 结果:
        - 执行用时: 108 ms, 在所有 JavaScript 提交中击败了 57 %的用户
        - 内存消耗: 41.8 MB, 在所有 JavaScript 提交中击败 41.7 %的用户
    - 实现:
        ``` js
        var reorderList = function(head) {
            if (!head || !head.next) return head;
            let [fast, slow, mid] = [head, head, null];
            while (fast && fast.next) [fast, slow] = [fast.next.next, slow.next];
            [mid, slow.next] = [slow.next, null];
            
            let sndLinkList =  reverse(mid);
            
            let curr = head;
            while (curr && sndLinkList) {
                let tmp = curr.next;
                curr.next = sndLinkList;
                sndLinkList = sndLinkList.next;
                curr = curr.next;
                curr.next = tmp;
                curr = curr.next;
            }
            // return head;
        };

        function reverse (head) {
            if (!head || !head.next) return head;
            let next = head.next;
            let rHead = reverse(next);
            head.next = null;
            next.next = head;
            return rHead;
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

### 445. 两数相加 II
- 刷题进度:
    - [x] 栈 x 新链表
    - [ ] xxx
    - [ ] xxx
- 难度: medium.
- 题意解析: 给定两个链表，相加返回新链表.
    - 进阶: 输入链表不能修改.
- 输入处理: 
- 初始思路: 栈 x 新队列
    - 思路: 将两个链表入栈，之后弹出并相加存入新链表.
    - 复杂度分析:
        - 时间: O(m+n). 推进 O(m + n) + 合并 O ((m + n) / 2)
        - 空间: O(m+n). 两个栈 O(m + n).
    - Leetcode 结果:
        - 执行用时: 140 ms, 在所有 JavaScript 提交中击败了 61 %的用户
        - 内存消耗: 41 MB, 在所有 JavaScript 提交中击败 18.7 %的用户
    - 实现:
        ``` js
        var addTwoNumbers = function(l1, l2) {
            if (!l1) return l2;
            if (!l2) return l1;
            let [stack1, stack2] = [[], []];
            while (l1) {
                stack1.push(l1.val);
                l1 = l1.next;
            }
            while (l2) {
                stack2.push(l2.val);
                l2 = l2.next;
            }
            let res = new ListNode(null);
            let count = 0;
            while (stack1.length > 0 || stack2.length > 0 || count) {
                let val1 = stack1.length > 0 ? stack1.pop() : 0;
                let val2 = stack2.length > 0 ? stack2.pop() : 0;
                let tmpVal = val1 + val2 + count;
                [tmpVal, count] = tmpVal > 9 ? [tmpVal%10, 1] : [tmpVal, 0];
                let tmpListNode = new ListNode(tmpVal);
                tmpListNode.next = res.next;
                res.next = tmpListNode;
            }
            return res.next;
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

### 160. 相交链表
- 刷题进度:
    - [x] 【热评解答】链表互接补差
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
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var getIntersectionNode = function(headA, headB) {
            if (!headA || !headB) return null;
            let [currA, currB] = [headA, headB];
            while (currA !== currB) {
                currA = currA ? currA.next : headB;
                currB = currB ? currB.next : headA;
            }
            return currA;
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

### 83. 删除排序链表中的重复元素
- 刷题进度:
    - [ ] 前针遍历推进法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定有序链表，去除链表中重复元素.
- 输入处理: !head || !head.next -> return head
- 初始思路: 前针遍历推进法.
    - 思路: 对比当前元素及下一个元素并持续推进，如果相等则用 n.next = n.next.next 跳过下一个元素.
    - 复杂度分析:
        - 时间: O(n).遍历整个链表.
        - 空间: O(1).无额外.
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 93.7 %的用户
        - 内存消耗: 35.9 MB, 在所有 JavaScript 提交中击败 40.9 %的用户
    - 实现:
        ``` js
        var deleteDuplicates = function(head) {
            if (!head || !head.next) return head;
            let prev = head;
            while (prev && prev.next) {
                if (prev.val === prev.next.val) prev.next = prev.next.next;
                else prev = prev.next;
            }
            return head;
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

### 203. 移除链表元素
- 刷题进度:
    - [x] 哨兵前针推进.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 给定链表和指定值，从链表中删除值等于指定值的节点.
- 输入处理: 无需处理.
- 初始思路: 哨兵前针推进.
    - 思路: 由于有可能删除第一个节点故加上哨兵节点，剩余与题目 83 相似.
    - 复杂度分析:
        - 时间: O(n). 遍历耗时.
        - 空间: O(1). 无额外.
    - Leetcode 结果:
        - 执行用时: 80 ms, 在所有 JavaScript 提交中击败了 92.5 %的用户
        - 内存消耗: 37.2 MB, 在所有 JavaScript 提交中击败 42 %的用户
    - 实现:
        ``` js
        var removeElements = function(head, val) {
            let res = new ListNode(-1);
            res.next = head;
            let prev = res;
            while (prev.next) {
                if (prev.next.val === val) prev.next = prev.next.next;
                else prev = prev.next;
            }
            return res.next;
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

### 141. 环形链表
- 刷题进度:
    - [x] 置空推进法
    - [ ] xxx
    - [ ] xxx
- 难度: easy
- 题意解析: 给定一个链表，判断是否为环形链表.
- 输入处理: 判断空链表.
- 初始思路: 置空推进法.
    - 思路: 由于链表的 next 永不为空，故不断置空当前值并推进. 如果停止则使用停止原因来确定是否为环形.
    - 复杂度分析:
        - 时间: O(n). 一圈确认是否环形.
        - 空间: O(1). 无使用额外空间.
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 85 %的用户
        - 内存消耗: 36.7 MB, 在所有 JavaScript 提交中击败 47 %的用户
    - 实现:
        ``` js
        var hasCycle = function(head) {
            if (!head) return false;
            // 环: head.next 一直有，于是不断置空值
            while (head.next && head.val) {
                head.val = null;
                head = head.next;
            }
            // 直到退出，使用退出原因来确认是否为环
            return !head.val;
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


### 61. 旋转链表
- 刷题进度:
    - [x] 循环头插
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 给定一个链表，将每个节点循环右移k次，返回最终结果.
- 输入处理: 
    - k没说明限制，故有可能极大，计算链表长度并对其预处理为小于长度的次数.
    - 无节点或一个节点情况直接返回即可.
- 初始思路:
    - 思路: 预处理k 和 0、1个节点情况, 用哨兵，循环 k 次获取 tailPrev，头插 tail.
    - 复杂度分析:
        - 时间: O(k*len). k 次循环（处理后） * len 次推进.
        - 空间: O(1). 无额外空间使用.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        vvar rotateRight = function(head, k) {
            if (!head || !head.next) return head;
            let [count, tmp] = [0, head];
            while (tmp) [tmp, count] = [tmp.next, count+1];
            k = k % count;
            
            let res = new ListNode(null);
            res.next = head;
            for (let i=0; i<k; i++) {
                let tailPrev = res;
                while (tailPrev.next.next) tailPrev = tailPrev.next;
                let tail = tailPrev.next;
                tailPrev.next = tail.next;
                tail.next = res.next;
                res.next = tail;
            }
            return res.next;
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