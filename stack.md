# ListNode 链表

## Leetcode 刷题

### 20. 有效的括号 isValid

- 难度：easy
- 题意解析：字符串由三种括号组成（共6个），默认非空字符串，若字符串左括号能够**以正确顺序**和**同类型**的右括号匹配，则字符串有效.
- 初始思路：借助顺序栈实现功能，将左右括号以键值对形式存储在map中, 然后遍历括号字符串，左括号推入栈中，右括号则弹出栈中最后一个值来对比
    - 复杂度分析：
        - 时间: O(n), 耗时位置：for
        - 空间: O(n), 耗空间: map & 栈
    - Leetcode结果：
        - 执行用时 : 80 ms, 在所有JavaScript提交中击败了92.01%的用户
        - 内存消耗 : 34.1 MB, 在所有JavaScript提交中击败了55.66%的用户
    - 实现：
        ``` js
        var isValid = function(s) {
            let map = {
                '(': ')',
                '[': ']',
                '{': '}'
            }
            let arr = [];
            for (let i=0, sLen=s.length; i<sLen; i++) {
                if (map[s[i]]) {
                    arr.push(s[i]);
                } else {
                    if (map[arr.pop()] !== s[i]) {
                        return false;
                    }
                }
            }
            console.log('arr.length:', arr.length)
            return arr.length === 0 ? true: false;
        };
        ```
- 优化思路：加入长度判断，奇数时直接判非
    - 复杂度分析： 只是加入判断上的优化，故不变
    - Leetcode 结果：
        - 执行用时 :64 ms, 在所有JavaScript提交中击败了99.29%的用户
        - 内存消耗 :33.6 MB, 在所有JavaScript提交中击败了85.82%的用户
    - 实现：
        ``` js
        var isValid = function(s) {
            let sLen = s.length;
            if (sLen%2!==0) return false;       // 基于长度做判断
            let map = {
                '(': ')',
                '[': ']',
                '{': '}'
            }
            let arr = [];
            for (let i=0; i<sLen; i++) {
                if (map[s[i]]) {
                    arr.push(s[i]);
                } else {
                    if (map[arr.pop()] !== s[i]) {
                        return false;
                    }
                }
            }
            return arr.length === 0 ? true: false;
        };
        ```
### 155. 最小栈 MinStack
- 难度：easy
- 题意解析：写一个支持 push、pop、top、getMin 的栈，目标是能够在常数时间内检索到最小元素，也就是 getMin 的时间复杂度为 O(1).
- 顺序栈思路：简单暴力地创建两个数组arr & sortArr，arr插入值，sortArr在每次插入后重新排序，
    - 操作及其时间复杂度分析：
        - push(x): arr.push(x); sortArr.push(x); sortArr.sort((a,b)=>b-a), 由于排序故时间复杂度 O(nlogn)
        - pop(): arr.pop(); sortArr.splice(popValue, 1), 时间复杂度 O(1)
        - top(): arr[arr.length-1], 时间复杂度 O(1)
        - getMin(): sortArr[sortArr.length-1], 时间复杂度 O(1)
    - Leetcode 结果：
        - 执行用时 : 6328 ms, 在所有JavaScript提交中击败了5.07%的用户
        - 内存消耗 : 53.7 MB, 在所有JavaScript提交中击败了5.10%的用户
    - 实现：
        ``` js
        var MinStack = function() {
            this.arr = [];
            this.sortArr = [];
        };

        /** 
        * @param {number} x
        * @return {void}
        */
        MinStack.prototype.push = function(x) {
            this.arr.push(x);
            this.sortArr.push(x);
            this.sortArr.sort((a, b)=> b-a);
        };

        /**
        * @return {void}
        */
        MinStack.prototype.pop = function() {
            let temp = this.arr.pop();
            this.sortArr.splice(this.sortArr.indexOf(temp), 1);
        };

        /**
        * @return {number}
        */
        MinStack.prototype.top = function() {
            return this.arr[this.arr.length-1];
        };

        /**
        * @return {number}
        */
        MinStack.prototype.getMin = function() {
            return this.sortArr[this.sortArr.length-1];
        };
        ```
- 顺序栈思路1（最佳）：用三个数组。arr 照旧，第一个值插入之后，只有比第一个值更小的值才可以加入sortArr，同时再用一个新数组indexArr记录最小值位置.
    - 操作及其时间复杂度分析：
        - push(x): 
            - 操作: if (arr.len===0 || x<getMin()) { sortArr.push(x); indexArr.push(arr.length); }   arr.push(x); 
            - 时间复杂度: 最好 O(1), 最坏 O(n), 平均 O(n)
        - pop(): 
            - 操作：arr.pop(); if (this.arr.length === this.indexArr(this.indexArr.length-1)) { sortArr.pop(); indexArr.sort(); }
            - 时间复杂度 O(1)
        - top(): arr[arr.length-1], 时间复杂度 O(1)
        - getMin(): sortArr[sortArr.length-1], 时间复杂度 O(1)
    - Leetcode 结果：
        - 执行用时 :136 ms, 在所有JavaScript提交中击败了100.00%的用户
        - 内存消耗 :43.7 MB, 在所有JavaScript提交中击败了89.12%的用户
    - 实现：
        ``` js
            /**
            * initialize your data structure here.
            */
            var MinStack = function() {
                this.arr = [];
                this.sortArr = [];
                this.indexArr = [];
            };

            /** 
            * @param {number} x
            * @return {void}
            */
            MinStack.prototype.push = function(x) {
                if (this.arr.length===0 || x < this.getMin()) { 
                    this.sortArr.push(x);
                    this.indexArr.push(this.arr.length);
                }
                this.arr.push(x);
            };

            /**
            * @return {void}
            */
            MinStack.prototype.pop = function() {
                this.arr.pop();
                if (this.arr.length === this.indexArr[this.indexArr.length-1]) {
                    this.sortArr.pop();
                    this.indexArr.pop();
                }
            };

            /**
            * @return {number}
            */
            MinStack.prototype.top = function() {
                return this.arr[this.arr.length-1];
            };

            /**
            * @return {number}
            */
            MinStack.prototype.getMin = function() {
                return this.sortArr[this.sortArr.length-1];
            };

            /** 
            * Your MinStack object will be instantiated and called as such:
            * var obj = new MinStack()
            * obj.push(x)
            * obj.pop()
            * var param_3 = obj.top()
            * var param_4 = obj.getMin()
            */
        ```
- 顺序栈思路2：相对思路1的三个数组，这里采用两个数组的方式，将 push 的思路改为"新值小于等于getMin即可加入sortArr"，将 pop 的思路改为"arr 弹出值等于 sortArr 末值时即可弹出末值"，这个思路相比上面的"顺序栈思路1"少用了一个数组，但是显然增加了 push 和 pop 的次数，所以应该算是负优化；
    - 时间复杂度：同上
    - Leetcode 结果：
        - 执行用时 :144 ms, 在所有JavaScript提交中击败了99.84%的用户
        - 内存消耗 :44.6 MB, 在所有JavaScript提交中击败了14.63%的用户
    - 实现：
        ``` js
            var MinStack = function() {
                this.arr = [];
                this.sortArr = [];
            };

            /** 
            * @param {number} x
            * @return {void}
            */
            MinStack.prototype.push = function(x) {
                if (this.arr.length===0 || x <= this.getMin()) { 
                    this.sortArr.push(x);
                }
                this.arr.push(x);
                // console.log('push arr:', this.arr);
                // console.log('push sortArr:', this.sortArr);
                // console.log('push indexArr:', this.indexArr);
            };

            /**
            * @return {void}
            */
            MinStack.prototype.pop = function() {
                let temp = this.arr.pop();
                if (temp === this.sortArr[this.sortArr.length-1]) {
                    this.sortArr.pop();
                }
                // console.log('pop arr:', this.arr);
                // console.log('pop sortArr:', this.sortArr);
                // console.log('pop indexArr:', this.indexArr);
            };

            /**
            * @return {number}
            */
            MinStack.prototype.top = function() {
                return this.arr[this.arr.length-1];
            };

            /**
            * @return {number}
            */
            MinStack.prototype.getMin = function() {
                return this.sortArr[this.sortArr.length-1];
            };
        ```
- TODO：尝试使用链式栈
### 232

### 844

### 224

### 682

### 496.
