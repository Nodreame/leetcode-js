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