# tree 树专题

## 零、基础知识

### 1. 树的基础概念

- 树，是 n(n>=0) 个结点的有限集合.
    - n=0时,称为**空树**.
    - n>0时,有如下特性：
        - 有且仅有一个特定的被称为根(root)的节点;
        - 当 n>1 时，其余结点可被分成m(m>0)个互不相交的有限集合,每个集合都是一棵树，并且称为根(root)的子树;
- 树的相关概念：
    - 结点的度: 结点所拥有子树的数目;
    - 结点关系: 
        - 孩子结点: 某结点子树的根节点;
        - 双亲结点: 某结点对于其子树;
        - 兄弟结点: 同一个双亲结点的孩子结点们;
        - 叶子结点: 没有左子树和右子树的结点;
    - 结点层次:
        - 根: 第一层;
        - 根的孩子们: 第二层到第N层;
    - 树的深度: 最大层次数;

### 2. 二叉树 Binary Tree

- 二叉树，是 n(n>=0) 个结点的有限集合.
    - n=0时,称为**空树**.
    - n>0时,由(一个根节点+左子树+右子树)组成.
- 树的类型:
    - 斜树: 所有结点都只有左子树的二叉树叫做左斜树，反之叫做右斜树. 属于一种树-》链表的退化, 在二叉搜索树中斜树遍历的时间复杂度将退化为为O(n).
    - 满二叉树: 所有结点都存在左子树和右子树，且所有叶子结点都在同一层;
        - 特点:
            1).叶子结点只能在最下层;
            2).非叶子结点的度一定是2;
            3).同样深度的二叉树中，满二叉树的结点个数最多.
    - 完全二叉树: 参考满二叉树，如果一个同样高度的数，按层编号的结果与满二叉树完全相同，则该树为完全二叉树.
        - 特点:
            1).叶子结点只能在最下层&次下层;
            2).最下层的结点集中在树的左部;
            3).次下层如果存在叶子结点,一定在右部连续位置;
            4).如果树中某结点的度为1, 则该结点只有左孩子;
            5).同样结点数量的二叉树, 完全二叉树深度最小;
        - Tip: 满二叉树必为完全二叉树, 反之不一定成立;
        - TODO: 了解应用场景;

### 3. 二叉搜索树 Binary Search Tree

- 二叉搜索树，基础性质同**二叉树**.
- 二叉搜索树定义:
    - 左子树上的**所有结点**的值均小于它的根结点的值;
    - 右子树上的**所有结点**的值均大于它的根结点的值;
    - Recursively, 左、右结点也分别为二叉搜索树;

## 一、Leetcode 刷题

### 144. 二叉树的前序遍历 preorderTraversal
- 刷题进度:
    - [x] 模板递归法(DFS)
    - [x] 含状态的模板迭代法(DFS) & 优化模板迭代法(DFS)
    - [x] 模板迭代法2(DFS)
    - [x] 优化模板迭代法(DFS)
    - [x] 栈只存右节点(DFS, 迭代)
    - [ ] 莫里斯遍历(优化空间)
- 难度：medium
- 题意解析：二叉树的前序排列实现，流程是 根-》左-》右.
- 初始思路：模板递归法(DFS).
    - 思路：用数组res存储结果，递归方法以节点node和结果数组res作为参数.
    - 复杂度分析：
        - 时间：左右子树各O(n/2) + 根节点O(1) = O(n)
        - 空间：结果数组是必备空间所以不占复杂度，占空间的是树的深度h。
            - 当树类似满二叉树时，树高度为logn，故其空间复杂度为O(logn)；
            - 当树是斜树的时候，树高度为n，故其空间复杂度为O(n);
    - Leetcode 结果:
    执行用时 :
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了98.77%的用户
        - 内存消耗 : 34.1 MB, 在所有 JavaScript 提交中击败5.18%的用户
    - 实现(新):
        ``` js
        var preorderTraversal = function(root) {
            if (!root) return [];     // 在此先做一次节点判空，循环中就不用做节点判空了
            let res = [];
            recursion(root, res);
            return res;
        };

        function recursion (node, res) {
            // 1. terminator
            //if (!node || node.val===null) return;         // 旧.

            // 2. process
            res.push(node.val);                                         // 根

            // 3. drill down                                            
            node.left? recursion(node.left, res): '';          // 左
            node.right? recursion(node.right, res): '';        // 右
            
            // 4.  recover
        }
        ```
- 第二思路: 含状态的模板迭代法(DFS).**Tip: 思路类似递归法。取代"优化迭代法"新晋第二位，原因是能够同模板套用解题**
    - 思路: 用栈辅助存储未处理的值,每个节点加上标志位flag,标志位的作用是标志节点的身份是否为处理完成的节点.
    - 复杂度分析:
        - 时间: O(n). 耗时点在于每个结点会经历两次遍历(塞入->弹出->标记->塞入->弹出)，也就是时间复杂度是O(2n);
        - 空间: O(n). 分析同上.
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  96.30%的用户
        - 内存消耗 : 34.1MB, 在所有 JavaScript 提交中击败  5.18%的用户
    - 实现:
        ``` js
            var preorderTraversal = function(root) {
                if (!root) return [];
                let res = [];
                let stack = [root];
                while (stack.length>0) {
                    let node = stack.pop();
                    if (node.flag) {    // flag=true 表示这次要访问的是该节点，可以打印或者做其他处理
                        res.push(node.val);
                    } else {            // flag=false 表示暂时没空访问该节点，只能先将其入栈等待之后处理
                        // 前序顺序：根-》左-》右
                        // 进栈顺序：右-》左-》根
                        node.right? stack.push(node.right): '';
                        node.left? stack.push(node.left): '';
                        // 先标记后压栈
                        node.flag = true;
                        stack.push(node);
                    }
                }
                return res;
            };
        ```
- 第三思路：优化模板迭代法(DFS).
    - 思路：由第二思路的"模板迭代法"所衍生的写法，通过将两次遍历节点的过程改为一次遍历，有效将时间复杂度O(2n)降到O(n).同时由于不使用标志位及减少了压栈次数，故空间复杂度也得到了优化.
    - 复杂度分析：
        - 时间：O(n).耗时点在于每个结点会经历一次遍历(塞入->弹出)，也就是时间复杂度是O(n);
        - 空间：O(n).分析同上.
    - Leetcode 结果：
        - 执行用时 :68 ms, 在所有 JavaScript 提交中击败了97.78%的用户
        - 内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了51.30%的用户
    - 实现：
        ``` js
        var preorderTraversal = function(root) {
            if (!root || root.val === null) return [];
            let stack = [];
            let res = [];
            stack.push(root);
            while (stack.length !== 0) {
                let node = stack.pop();
                // 前序顺序：根-》左-》右
                // 进栈顺序：右-》左-》根
                // 优化思路：
                //  不同于"模板迭代法的两次遍历(塞入->弹出->标记->塞入->弹出)"
                //  根据先序遍历的特性"根节点先处理"，将流程变成每个节点仅需一次遍历(塞入-》弹出)，
                //  并将剩下的左右子树根据"进栈顺序：右-》左"执行进栈
                // 由于不用标志位并且减少了压栈次数，故空间复杂度成功也被优化；

                res.push(node.val);     // 直接处理然后输出，括号内位置任意不影响
                if (node.right) stack.push(node.right);
                if (node.left) stack.push(node.left);
            }
            return res;
        };
        ```
- 第四思路: 模板迭代法2(DFS). 
    - 思路: 不断检测当前节点是否存在：
        - true: 塞val进结果，塞node进栈，继续左子树 DFS推进;
        - false: 弹栈赋值给node, node 右子树推进一步，循环继续 
    - 复杂度分析:
        - 时间: 执行次数等同于树节点个数，故 O(n)
        - 空间: 结果数组是必备空间所以不占复杂度，占空间的是栈的大小
            - 当树是平衡二叉树时，正常情况存2取1，故 O(n/2)
            - 当树严重左偏时，全存再取，故O(n)
            - 当树严重右偏时，存1取1，故O(1)
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了 96.68%的用户
        - 内存消耗 : 33.8MB, 在所有 JavaScript 提交中击败 17.62%的用户
    - 实现:
        ``` js
        var preorderTraversal = function(root) {
            if (!root) return [];
            let res = [];
            let stack = [];
            let node = root;
            while (node || stack.length > 0) {
                while (node) {
                    res.push(node.val);
                    stack.push(node);
                    node = node.left;
                }
                node = stack.pop();
                node = node.right;
            }
            return res;
        };
        ```
- 第五思路: 栈只存右节点(DFS, 迭代)
    - 思路: 栈只存右节点，在左斜树的情况下空间复杂度近似O(1)
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(1)-O(N). 左斜树 O(1), 右斜树 O(n).
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : 33.8MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var preorderTraversal = function(root) {
            if (!root) return [];
            let node = root;
            let res = [];
            let stack = [];
            while (node) {
                res.push(node.val);
                node.right? stack.push(node.right): '';
                node = node.left;
                if (!node) {
                    node = stack.pop();
                }
            }
            return res;
        };
        ```

### 94. 二叉树的中序遍历 inorderTraversal
- 刷题进度:
    - [x] 模板递归法(DFS).
    - [x] 含状态的模板迭代法(DFS).
    - [x] 模板迭代法2(DFS).
    - [ ] 莫里斯遍历(优化空间).
- 难度：medium
- 题意解析：二叉树的中序排列实现，流程是 左-》根-》右.
- 初始思路：模板递归法.
    - 思路：用数组res存储结果，递归方法以节点node和结果数组res作为参数.
    - 复杂度分析：
        - 时间：遍历整个二叉树故时间复杂度为 O(n)
        - 空间：结果数组是必备空间所以不占复杂度，占空间的是树的深度h
            - 当树是平衡二叉树时，树高度为logn，故其空间复杂度为O(logn)；
            - 当树严重左偏或者右偏的时候，树高度为n，故其空间复杂度为O(n);
    - Leetcode 结果:
        - 执行用时 : 60 ms, 在所有 JavaScript 提交中击败了99.84%的用户
        - 内存消耗 : 34 MB, 在所有 JavaScript 提交中击败6.34%的用户
    - 实现:
        ``` js
        var inorderTraversal = function(root) {
            if (!root) return [];        // 在此先做一次节点判空，循环中就不用做节点判空了
            let res = [];
            recursion(root, res);
            return res;
        };

        function recursion (node, res) {
            // 1. terminator
            //if (!node || node.val===null) return;         // 旧.
            
            // 2. process
            // 3. drill down
            node.left? recursion(node.left, res): '';          // 左
            res.push(node.val);                                         // 根
            node.right? recursion(node.right, res): '';        // 右
            
            // 4. recover
        }
        ```
- 第二思路: 模板迭代法.**Tip: 思路类似递归法。取代"优化迭代法"新晋第二位，原因是能够同模板套用解题**
    - 思路: 用栈辅助存储未处理的值,每个节点加上标志位flag,标志位的作用是标志节点的身份是否为处理完成的节点.
    - 复杂度分析:
        - 时间: O(n). 耗时点在于每个结点会经历两次遍历(塞入->弹出->标记->塞入->弹出)，也就是时间复杂度是O(2n);
        - 空间: O(n). 分析同上. 
    - Leetcode 结果:
        - 执行用时 : 84ms, 在所有 JavaScript 提交中击败了  78.76%的用户
        - 内存消耗 : 33.4MB, 在所有 JavaScript 提交中击败  93.28%的用户
    - 实现:
        ``` js
        var inorderTraversal = function(root) {
            if (!root || root.val===null) return [];
            let res = [];
            let stack = [root];
            while (stack.length > 0) {
                let node = stack.pop();
                if (node.flag) {    // flag=true 表示这次要访问的是该节点，可以打印或者做其他处理
                    res.push(node.val);
                } else {            // flag=false 表示暂时没空访问该节点，只能先将其入栈等待之后处理
                    // 中序顺序：左-》根-》右
                    // 进栈顺序：右-》根-》左
                    if (node.right) stack.push(node.right);
                    // 先标记再进栈
                    node.flag = true;
                    stack.push(node);
                    if (node.left) stack.push(node.left);
                }
            }
            return res;
        };
        ```
- 第三思路：模板迭代法2(DFS).
    - 思路：不断检测当前节点是否存在
        - true: DFS左子树(同时插入栈)，直到为空。
        - false: 弹栈, 由其右子树开始, 继续DFS左子树。 Next round.
        - 由上可得，终止条件是 "当前节点为空" && "栈大小===0", 反推得循环条件为"当前节点非空 || 栈大小>0"
    - 复杂度分析：
        - 时间：执行次数等同于树节点个数，故 O(n)
        - 空间：结果数组是必备空间所以不占复杂度，占空间的是栈的大小
            - 当树是平衡二叉树时，正常情况存2取1，故 O(n/2)
            - 当树严重左偏时，全存再取，故O(n)
            - 当树严重右偏时，存1取1，故O(1)
    - Leetcode 结果：
        - 执行用时 :88 ms, 在所有 JavaScript 提交中击败了73.33%的用户
        - 内存消耗 :33.5 MB, 在所有 JavaScript 提交中击败了86.94%的用户
    - 实现：
        ``` js
        var inorderTraversal = function(root) {
            let res = [];
            let stack = [];
            let curr = root;
            while (curr || stack.length>0) {
                while (curr) {
                    stack.push(curr);
                    curr = curr.left;
                }
                curr = stack.pop();
                res.push(curr.val);
                curr = curr.right;
            }
            return res;
        }
        ```

### 145. 二叉树的后序遍历 postorderTraversal
- 刷题进度:
    - [x] 模板递归法解答(四步解题)
    - [x] 模板迭代法解答
    - [ ] Leetcode其他解法学习
- 难度：hard
- 题意解析：二叉树的后序排列实现，流程是 左-》右-》根.
- 初始思路：模板递归法.
    - 思路：用数组res存储结果，递归方法以节点node和结果数组res作为参数.
    - 复杂度分析：
        - 时间：遍历整个二叉树故时间复杂度为 O(n)
        - 空间：结果数组是必备空间所以不占复杂度，占空间的是树的深度h。
            - 当树是平衡二叉树时，树高度为logn，故其空间复杂度为O(logn)；
            - 当树严重左偏或者右偏的时候，树高度为n，故其空间复杂度为O(n);
    - Leetcode 结果:
        - 执行用时 : 72 ms, 在所有 JavaScript 提交中击败了93.75 %的用户
        - 内存消耗 : 33.7 MB, 在所有 JavaScript 提交中击败31.15%的用户
    - 实现:
        ``` js
        var preorderTraversal = function(root) {
            if (!root) return [];        // 在此先做一次节点判空，循环中就不用做节点判空了
            let res = [];
            recursion(root, res);
            return res;
        };

        function recursion (node, res) {
            // 1. terminator
            //if (!node || node.val===null) return;         // 旧.
            
            // 2. process
            // 3. drill down
            node.left? recursion(node.left, res): '';          // 左
            node.right? recursion(node.right, res): '';        // 右
            res.push(node.val);                                         // 根
            
            // 4. recover
        }
        ```
- 第二思路: 模板迭代法.**Tip: 思路类似递归法。取代"优化迭代法"新晋第二位，原因是能够同模板套用解题**
    - 思路:用栈辅助存储未处理的值,每个节点加上标志位flag,标志位的作用是标志节点的身份是否为处理完成的节点.
    - 复杂度分析:
        - 时间: O(n). 耗时点在于每个结点会经历两次遍历(塞入->弹出->标记->塞入->弹出)，也就是时间复杂度是O(2n);
        - 空间: O(n). 分析同上.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  81.91%的用户
        - 内存消耗 : 34.2MB, 在所有 JavaScript 提交中击败  5.74%的用户
    - 实现:
        ``` js
        var postorderTraversal = function(root) {
            if (!root) return [];
            let res = [];
            let stack = [root];
            while (stack.length > 0) {
                let node = stack.pop();
                if (node.flag) {
                    res.push(node.val);
                } else {
                    // 后序顺序：左-》右-》根
                    // 入栈顺序：根-》右-》左
                    //   先标记后入栈
                    node.flag = true;
                    stack.push(node);
                    node.right? stack.push(node.right): '';
                    node.left? stack.push(node.left): '';
                }
            }
            return res;
        };
        ```
- 第三思路.1：结果反转法(迭代,DFS,类似前序).
    - 初始思路：通过判断左右子树是否空来实现，但是存在判断上的问题(除非改变树内容)，所以先看答案了.
    - 简易思路：后序顺序为:左-右-根，其入栈顺序为: 根-右-左，和前序相近，用前序方式实现并将结果反转即可.
        - 复杂度（同前序的迭代法）：
            - 时间：O(n). while 循环N次弹值，故 O(n) + 反转复杂度 O(n)
            - 空间：O(n). 结果数组是必备空间所以不占复杂度，占空间的是栈的大小
                - 当树是平衡二叉树时，正常情况存2取1，故 O(n/2)
                - 当树严重左偏或者右偏时，存1取1，故O(1)
        - Leetcode 结果：
            - 执行用时 : 68 ms, 在所有 JavaScript 提交中击败了96.79%的用户
            - 内存消耗 : 33.9 MB, 在所有 JavaScript 提交中击败了9.84%的用户
        - 实现：
            ``` js
            var postorderTraversal = function(root) {
                if (!root) return [];
                let res = [];
                let stack = [root];
                
                while (stack.length>0) {
                    let node = stack.pop();
                    if (node.left) stack.push(node.left);
                    if (node.right) stack.push(node.right);
                    res.push(node.val);
                }
                
                return res.reverse();
            };
            ```
- 第三思路.2: 前序头插法(迭代,DFS,类似前序)
    - 思路: 类似第三思路，将结尾反转改为结果头插.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  90.68%的用户
        - 内存消耗 : 34.1MB, 在所有 JavaScript 提交中击败  5.74%的用户
    - 实现:
        ``` js
        var postorderTraversal = function(root) {
            if (!root) return [];
            let res = [];
            let stack = [root];
            while (stack.length > 0) {
                // 后序：左右中 -》 反转为类前序：中右左 -》 stack 左右反转
                let node = stack.pop();
                res.unshift(node.val);
                node.left? stack.push(node.left): '';
                node.right? stack.push(node.right): '';
            }
            return res;
        };
        ```

### 102. 二叉树的层次遍历 levelOrder
- 刷题进度:
    - [x] 模板递归法(DFS)
    - [x] 模板状态迭代法(DFS)
    - [x] 模板状态迭代法(BFS)
    - [x] 模板递归法(BFS)
- 难度: medium
- 题意解析: 自顶向下逐层遍历并放入数组
- 初始思路: 模板递归法(DFS). 
    - 思路: 每层加上level做标记。某level第一次出现创建数组并插入res, 同level数值放入同一数组。
    - 复杂度:
        - 时间: O(n).等同二叉树节点个数，故为 O(n)
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时 : 72 ms, 在所有 JavaScript 提交中击败了 91 %的用户
        - 内存消耗 : 34.5 MB, 在所有 JavaScript 提交中击败 80 %的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];    // 上提到这里，递归方法中无需再做处理
            let res = [];
            recursion(0, root, res);
            return res;
        }

        function recursion (level, node, res) {
            // 1. terminate

            // 2. process
            if (!res[level]) res[level] = [];
            res[level].push(node.val);
            // 3. drill down
            if (node.left) recursion(level+1, node.left, res);
            if (node.right) recursion(level+1, node.right, res);
            // 4. recover
        }
        ```
- 第二思路: 模板状态迭代法(DFS).
    - 思路: 给节点加上level开始迭代.
    - 复杂度分析:
        - 时间: O(n). 
        - 空间: O(n). 
    - Leetcode 结果:
        - 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 96 %的用户
        - 内存消耗: 35.2 MB, 在所有 JavaScript 提交中击败 5.47 %的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let res = [];
            root.level = 0;
            let stack = [root];
            while (stack.length > 0) {
                let node = stack.pop();
                let level = node.level;
                if (!res[level]) res[level] = [];
                res[level].push(node.val);
                if (node.right) {
                    node.right.level = level + 1;
                    stack.push(node.right);
                }
                if (node.left) {
                    node.left.level = level + 1;
                    stack.push(node.left);
                }
            }
            return res;
        }
        ```
- 第三思路: 模板状态迭代法(BFS).
    - 思路: 创建res、queue、level. 提前将root塞进queue，以queue>0为条件开始循环. 先向res加入[]，然后再以queue长度为次数循环加 res 和 queue.
    - 复杂度分析:
        - 时间: O(n).满二叉树下while循环logn次，for循环次数分别为1, 2, 4..., 综合时间复杂度为O(n)
        - 空间: O(n).满二叉树情况下为约为O(n/2)，即最底层长度.
    - Leetcode 结果:
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了 98.34 %的用户
        - 内存消耗 : 35.1MB, 在所有 JavaScript 提交中击败 7.46 %的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let res = [];
            let queue = [];
            let level = 0;
            queue.push(root);
            
            // 1. terminate
            while (queue.length > 0) {
                res[level] = [];
                // 2.process
                for (let i=0, len=queue.length; i<len; i++) {
                    let node = queue.shift();
                    res[level].push(node.val);
                    // 3. drill down
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                }
                level++;
            }
            return res;
        }
        ```
- 第四思路: 模板递归法(BFS).
    - 思路: 模仿BFS迭代思路，如果只是单节点递归最终必将沦为 DFS，故将一层的数据组合传递.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 68 ms, 在所有 JavaScript 提交中击败了 96 %的用户
        - 内存消耗: 34.7 MB, 在所有 JavaScript 提交中击败 47 %的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let res = [];
            let queue = [root];
            recursion(queue, 0, res);
            return res;
        };

        function recursion (queue, level, res) {
            if (queue.length === 0) return;
            for (let i=0, len=queue.length; i<len; i++) {
                let temp = queue.shift();
                if (!res[level]) res[level] = [];
                res[level].push(temp.val);
                if (temp.left) queue.push(temp.left);
                if (temp.right) queue.push(temp.right);
            }
            recursion(queue, level+1, res);
        }
        ```

### 226. 翻转二叉树 invertTree
- 刷题进度:
    - [x] 递归法(DFS).
    - [x] 迭代法(DFS).
    - [ ] xxx
- 难度: easy
- 题意解析: 依次调换刷题进度树的所有左子树和右子树.
- 初始思路: 自递归法(DFS).
    - 思路: 以单个node为参数开始递归，左右节点直接交换，如果左右非空则继续递归.
    - 复杂度分析:
        - 时间: O(n). 所有节点都遍历过一次.
        - 空间: O(n). 消耗空间的是被放在堆上的递归函数调用，最坏情况时树高O(h)的函数调用将被放在堆上, h最好=logn,h最坏=n.
    - Leetcode 结果:
        - 执行用时 : 64ms, 在所有 JavaScript 提交中击败了  99.23%的用户
        - 内存消耗 : 34.4MB, 在所有 JavaScript 提交中击败  5.92%的用户
    - 实现:
        ``` js
        var invertTree = function(root) {
            // 1. terminate
            if (!root) return root;
            
            // 2. process
            [root.left, root.right] = [root.right, root.left];
            
            // 3. drill down
            if (root.left) invertTree(root.left);
            if (root.right) invertTree(root.right);
            
            // 4. recover
            
            return root;
        };
        ```
- 第二思路: 迭代法(DFS).
    - 思路: 思路基本同上，初始压栈 -》循环（弹栈-左右交换-左右压栈）-》返回
    - 复杂度分析:
        - 时间: O(n). 树的节点数.
        - 空间: O(n). 空间复杂度为高度O(h),满二叉树时 h=logn, 严重偏左偏右时 h=n
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  95.38%的用户
        - 内存消耗 : 33.5 MB, 在所有 JavaScript 提交中击败  82.84%的用户
    - 实现:
        ``` js
        var invertTree = function(root) {
            if (!root) return root;
            let stack = [root];
            // 1. terminate
            while (stack.length>0) {
                // 2. process
                let node = stack.pop();
                [node.left, node.right] = [node.right, node.left];
                // 3. drill down
                if (node.right) stack.push(node.right);
                if (node.left) stack.push(node.left);
                // 4. recover
            }
            return root;
        }
        ```

### 104. 二叉树最大深度 maxDepth
- 刷题进度:
    - [x] 递归法(DFS).
    - [x] 自迭代法(DFS).
    - [x] 迭代法(DFS).
    - [x] 迭代法(BFS).
    
- 难度: easy
- 题意解析: 计算**根节点**到**最远叶子节点**的**最长路径**上的**节点数**.
- 初始思路: 递归法(DFS).
    - 思路: 借助数组存储当前最大深度.
    - 复杂度分析:
        - 时间: O(n). 同节点数n.
        - 空间: O(logn). 递归调用次数，树平衡时最好，为O(logn)；树退化成链表时最坏O，为(n).
    - Leetcode 结果:
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了 99.6 %的用户
        - 内存消耗 : 37.5 MB, 在所有 JavaScript 提交中击败 10.3 %的用户
    - 实现:
        ``` js
        var maxDepth = function(root) {
            let res = [0];
            recursion(root, 0, res);
            return res[0];
        };

        function recursion (root, level, res) {
            // 1. terminate
            if (!root) return;
            // 2. process
            res[0] = Math.max(++level, res[0]);
            // 3. drill down
            if(root.left) iteration(root.left, level, res);
            if(root.right) iteration(root.right, level, res);
        }
        ```
- 第二思路: 自递归法(DFS).
    - 思路: 最大深度即 1+root左右子树的最大深度，开始递归.
    - 复杂度分析:
        - 时间: O(n). 同节点数n.
        - 空间: O(logn). 递归调用次数，树平衡时最好，为O(logn)；树退化成链表时最坏O，为(n).
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗 : 36.7MB, 在所有 JavaScript 提交中击败 95 %的用户
    - 实现:
        ``` js
        var maxDepth = function(root) {
            // root为null -> 0
            // root无左右子树 -> 1
            // root有一颗子树 -> lvL||lvR + 1 
            // root有两颗子树 -> max(lvL, lvR) + 1
            if (!root) return 0;
            return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
        };
        ```
- 第三思路: 迭代法(DFS)
    - 思路: 用栈存储{node: node, level: level}对象, 
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时 : 80 ms, 在所有 JavaScript 提交中击败了 92.9 %的用户
        - 内存消耗 : 37 MB, 在所有 JavaScript 提交中击败 60.4 %的用户
    - 实现:
        ``` js
        var maxDepth = function(root) {
            if (!root) return 0;
            let res = 1;
            root.level = 1;
            let stack = [root];
            while (stack.length > 0) {
                let node = stack.pop();
                let level = node.level;
                res = Math.max(res, level);
                if (node.right) {
                    node.right.level = level + 1;
                    stack.push(node.right);
                }
                if (node.left) {
                    node.left.level = level + 1;
                    stack.push(node.left);
                }
            }
            return res;
        };
        ```
- 第四思路: 迭代法(BFS)
    - 思路: 每层累加一次.
    - 复杂度分析:
        - 时间: O(n). 遍历所有节点故O(n)
        - 空间: O(logn). 遍历故O(logn). 退化为斜树时为O(n).
    - Leetcode 结果:
        - 执行用时 : 64 ms, 在所有 JavaScript 提交中击败了 99.6 %的用户
        - 内存消耗 : 36.7 MB, 在所有 JavaScript 提交中击败 95.7 %的用户
    - 实现:
        ``` js
        var maxDepth = function(root) {
            if (!root) return 0;
            let queue = [root];
            let max = 0;
            while (queue.length > 0) {
                max++;
                for (let i=0, len=queue.length; i<len; i++) {
                    let temp = queue.shift();
                    if (temp.left) queue.push(temp.left);
                    if (temp.right) queue.push(temp.right);
                }
            }
            return max;
        };
        ```


### 111. 二叉树最小深度 minDepth
- 刷题进度:
    - [x] 初版递归法(DFS)
    - [x] 自递归法(DFS)
    - [x] 迭代法(DFS)
    - [x] 迭代法(BFS).
    - [x] 优化迭代法(BFS).【最快】
- 难度: easy
- 题意解析: 计算**根节点**到**最近叶子节点**的**最短路径**上的**节点数**.
- 二次读题: 注意说明**"叶子节点是指没有子节点的节点"**.
- 初始思路: 初版迭代法(DFS)
    - 思路: root的情况特殊所以特别处理，其他节点照常递归即可：
        - 树为空时(即root===null)                                 ->  深度为0
        - 树只有一个节点(即root.left===null && root.right===null) ->  深度为 1
        - 树有两个节点(即root.left===null || root.right===null)   ->  深度为 1 + root的非空子节点的最小深度
        - 树有三个或以上节点(即root有左右子节点)                    ->  深度为 1 + min(root.left的最小深度, root.right的最小深度)
    - 复杂度分析:
        - 时间: O(n). DFS遍历全部故O(n).
        - 空间: O(logn). 平衡情况O(logn), 退化情况O(n).
    - Leetcode 结果:
        - 执行用时 : 72 ms, 在所有 JavaScript 提交中击败了 97.6 %的用户
        - 内存消耗 : 37.5 MB, 在所有 JavaScript 提交中击败 23.5 %的用户
    - 实现:
        ``` js
        var minDepth = function(root) {
            if (!root) return 0;
            if (root.left===null && root.right===null) return 1;
            return recursion(root);
        };

        function recursion (node) {
            if (!node) return 0;
            // 当一边为空时其结果必为0，故相加即可
            if (node.left===null || node.right===null) return recursion(node.left)  + recursion(node.right) + 1;
            return Math.min(recursion(node.left), recursion(node.right)) + 1;
        }
        ```
- 第二思路: 递归法(DFS).
    - 思路：并不是root特殊，而是最小深度的计算方式为"从root到最近叶子节点", 而叶子节点的意思是"没有子节点的节点", 故结论该题可用"自递归"求解.
        - root空                     ->  0
        - root没有 or 只有一个子节点  ->  1 + (可能存在的子节点的最小深度)
        - root有两个子节点            ->  1 + min(root.left的最小深度, root.right的最小深度)
    - 复杂度分析:
        - 时间: O(n). 同节点数n.
        - 空间: O(n). 最好O(logn), 最坏O(n).
    - Leetcode 结果:
        - 执行用时 : 68 ms, 在所有 JavaScript 提交中击败了 99 %的用户
        - 内存消耗 : 37.5 MB, 在所有 JavaScript 提交中击败 22.2 %的用户
    - 实现:
        ``` js
        var minDepth = function(root) {
            if (!root) return 0;
            return root.left && root.right? 
                1+Math.min(minDepth(root.left), minDepth(root.right)):
                1+minDepth(root.left)+minDepth(root.right);
        };
        ```
- 第三思路: 迭代法(DFS).
    - 思路: 迭代是循环，故重点在于循环中何时计算最小值，分析可知是节点两子树皆空时可以计算.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(logn). 
    - Leetcode 结果:
        - 执行用时 : 84 ms, 在所有 JavaScript 提交中击败了 88.6 %的用户
        - 内存消耗 : 37.2 MB, 在所有 JavaScript 提交中击败 51.8 %的用户
    - 实现:
        ``` js
        var minDepth = function(root) {
            if (!root) return 0;
            let min = Number.POSITIVE_INFINITY;
            root.level = 1;
            let stack = [root];
            while (stack.length > 0) {
                let temp = stack.pop();
                if (!temp.left && !temp.right) {
                    min = Math.min(min, temp.level);
                } else {
                    if (temp.left) {
                        temp.left.level = temp.level + 1;
                        stack.push(temp.left);
                    }
                    if (temp.right) {
                        temp.right.level = temp.level + 1;
                        stack.push(temp.right);
                    }
                }
            }
            return min;
        };
        ```
- 第四思路: 迭代法(BFS).
    - 思路: 同迭代法(DFS),搜索到节点子树皆空时计算最小值.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 96.5 %的用户
        - 内存消耗: 37.2 MB, 在所有 JavaScript 提交中击败 52.5 %的用户
    - 实现:
        ``` js
        var minDepth = function(root) {
            if (!root) return 0;
            let min = Number.POSITIVE_INFINITY;
            root.level = 1;
            let queue = [root];
            while (queue.length > 0) {
                for (let i=0, len=queue.length; i<len; i++) {
                    let temp = queue.shift();
                    if (!temp.left && !temp.right) {
                        min = Math.min(min, temp.level);
                    } else {
                        if (temp.left) {
                            temp.left.level = temp.level + 1;
                            queue.push(temp.left);
                        }
                        if (temp.right) {
                            temp.right.level = temp.level + 1;
                            queue.push(temp.right);
                        }
                    }
                }
            }
            return min;
        };
        ```
- 第五思路: 优化迭代法(BFS).
    - 思路: 写迭代法(BFS)的过程中意识到:
        - 由于使用BFS故每次将遍历一层，若本层出现节点子树皆空即可停止循环直接退出.减少了之后的运算及其他子树的向下推进.
        - 无需对比，触发退出时的层数即为最小层数.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时: 60 ms, 在所有 JavaScript 提交中击败了 99.6 %的用户
        - 内存消耗: 36.9 MB, 在所有 JavaScript 提交中击败 87.65 %的用户
    - 实现:
        ``` js
        var minDepth = function(root) {
            if (!root) return 0;
            root.level = 1;
            let queue = [root];
            while (queue.length > 0) {
                for (let i=0, len=queue.length; i<len; i++) {
                    let temp = queue.shift();
                    if (!temp.left && !temp.right) {
                        return temp.level; // 直接返回
                    } else {
                        if (temp.left) {
                            temp.left.level = temp.level + 1;
                            queue.push(temp.left);
                        }
                        if (temp.right) {
                            temp.right.level = temp.level + 1;
                            queue.push(temp.right);
                        }
                    }
                }
            }
        };
        ```


### 98. 验证二叉搜索树 isValidBST
- 刷题进度:
    - [x] 中序遍历递归
    - [ ] 中序遍历迭代
    - [ ] xxx
- 难度: medium
- 题意解析: 给一个棵树，通过验证其三个特征来判断这是否是一颗二叉树.
- 初始思路: 中序遍历递归.
    - 思路: 利用中序遍历递增的特性，依次对比前后元素即可. 这个思路比较难想，需要先下钻到最左然后开始验证每个结点.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(n). 最好O(logn),最坏O(n).
    - Leetcode 结果:
        - 执行用时 : 84ms, 在所有 JavaScript 提交中击败了  99.18%的用户
        - 内存消耗 : 37.4MB, 在所有 JavaScript 提交中击败  57.23%的用户
    - 实现:
        ``` js
        var isValidBST = function(root) {
            // 空树也是二叉搜索树
            if (!root) return true;
            let arr = [Number.NEGATIVE_INFINITY];
            return recursion(root, arr);
        };

        function recursion (node, arr) {
            // 1. terminate
            if (!node) return true;
            
            // 2. process
            // 3. drill down
            //   DFS 到最左，开始验证，保证每个节点都是：
            //      先左子树过，再根节点过，接下来右子树过，获取右边最大值
            if (recursion(node.left, arr)) {
                if (arr[0] < node.val) {
                    arr[0] = node.val
                    return recursion(node.right, arr)
                }
            }
            return false;       // 对比失败，非二叉搜索树
            
            // 4. recover
        }
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


### 236. 二叉树的最近公共祖先 lowestCommonAncestor
- 刷题进度:
    - [x] 递归法.
    - [ ] xxx
    - [ ] xxx
- 难度: medium
- 题意解析: 获取两个结点在一棵二叉树中的父节点. 前提: 两个结点都存在于给定的树中.
- 初始思路: 递归法.
    - 思路: 递归
    - 复杂度分析:
        - 时间: O(N)，最好 O(1), 最坏 O(N)
        - 空间: O(N)，最好 O(1), 最坏 O(N)
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  100%的用户
        - 内存消耗 : 41.5MB, 在所有 JavaScript 提交中击败  34.56%的用户
    - 实现:
        ``` js
        var lowestCommonAncestor = function(root, p, q) {
            // 1. terminate
            if (!root || root.val===p.val || root.val===q.val) return root;
            
            // 3. drill down
            let left = lowestCommonAncestor(root.left, p, q);
            let right = lowestCommonAncestor(root.right, p, q);
            
            // 2. process
            if (left != null && right != null) {
                return root;
            } else if (left != null) {
                return left;
            } else if (right != null){
                return right;
            }
            return null;
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

### 429. N叉树的层序遍历
- 刷题进度:
    - [x] 递归法(DFS).
    - [x] 迭代法(DFS).
    - [x] 递归法(BFS).
    - [x] 迭代法(BFS).
- 难度: easy
- 题意解析: 类似 102.
- 初始思路: 递归法(DFS).
    - 思路: 用 level 记层级，用 res 存储结果.
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 964ms, 在所有 JavaScript 提交中击败了  85.21%的用户
        - 内存消耗 : 86.2MB, 在所有 JavaScript 提交中击败  19.74%的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let level = 0;
            let res = [];
            recursion(level, root, res);
            return res;
        };

        function recursion (level, node, res) {
            // 1. terminate
            
            // 2. process
            if (!res[level]) res[level] = [];
            res[level].push(node.val);
            if (!node.children || node.children.length===0) return;
            
            // 3. drill down 
            for (let i=0, len = node.children.length; i<len; i++) {
                recursion(level+1, node.children[i], res);
            }
            
            // 4. recover
        }
        ```
- 第二思路: 迭代法(DFS).
    - 思路: node 加上 level 标志，用 stack 存储未处理节点；
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 928ms, 在所有 JavaScript 提交中击败了  92.25%的用户
        - 内存消耗 : 81.6MB, 在所有 JavaScript 提交中击败  38.16%的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            root.level = 0;
            let stack = [root];
            let res = [];
            // 1. terminate
            while (stack.length > 0) {
                // 2. process
                let node = stack.pop();
                let currLevel = node.level;
                if (!res[currLevel]) res[currLevel] = [];
                res[currLevel].push(node.val);
                
                // 3. drill down
                if (!node.children || node.children.length===0) continue;
                let childLen = node.children.length;
                for (let i=childLen-1; i>=0; i--) {
                    if (node.children[i]) {
                        node.children[i].level = currLevel + 1;
                        stack.push(node.children[i]);
                    }
                }
                
                // 4. recover
            } 
            return res;
        };
        ```
- 第三思路: 递归法(BFS).
    - 思路: 传递 level、queue、res 来递归, 一层处理完递归处理下一层.
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 888 ms, 在所有 JavaScript 提交中击败了 98.59 %的用户
        - 内存消耗 : 77.5 MB, 在所有 JavaScript 提交中击败 81.58%的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let res = [];
            let queue = [root];
            recursion (0, queue, res);
            return res;
        };


        function recursion (level, queue, res) {
            // 1. terminate
            if (queue.length===0) return;
            
            // 2. process
            res[level] = [];
            for (let i=0, len=queue.length; i<len; i++) {
                let node = queue.shift();
                res[level].push(node.val);
                if (!node.children || node.children.length===0) continue;
                for (let j=0, cLen=node.children.length; j<cLen; j++) {
                    queue.push(node.children[j]);
                }
            }
            
            // 3. drill down
            recursion(level+1, queue, res);
        }
        ```
- 第四思路: 迭代法(BFS).
    - 思路: 每次处理一层，并用 queue 存储下一层节点.
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 924 ms, 在所有 JavaScript 提交中击败了 94.37%的用户
        - 内存消耗 : 80.5 MB, 在所有 JavaScript 提交中击败  59.21%的用户
    - 实现:
        ``` js
        var levelOrder = function(root) {
            if (!root) return [];
            let level = 0;
            let res = [];
            let queue = [root];
            // 1. termimate
            while (queue.length > 0) {
                res[level] = [];
                for (let i=0, len=queue.length; i<len; i++) {
                    // 2. process
                    let node = queue.shift();
                    res[level].push(node.val);
                    // 3. drill down
                    if (!node.children || node.children.length===0) continue;
                    for (let j=0, cLen=node.children.length; j<cLen; j++) {
                        queue.push(node.children[j]);
                    }
                }
                level++;
            }
            return res;
        };
        ```

### 107. 二叉树的层次遍历 II
- 刷题进度:
    - [ ] 102反转结果法 复杂度:102复杂度+反转数组复杂度
    - [ ] 先获取最大深度，再DFS或BFS 复杂度: 104复杂度+102复杂度
    - [ ] 102 递归x迭代(BFSxDFS), 插入数组顺序调整  复杂度：102复杂度


### 103. 二叉树的锯齿形层次遍历
- 刷题进度:
    - [x] 102递归法(BFS).
    - [x] 102迭代法(BFS).
    - [ ] 本题专属套路解法.
- 难度: medium
- 题意解析: 同 102，奇数层反转. **切勿调换插入队列顺序!**.
- 初始思路: 递归法(BFS).
    - 思路: 同 102递归法(BFS).
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了 90.44 %的用户
        - 内存消耗 : 32MB, 在所有 JavaScript 提交中击败 43.75 %的用户
    - 实现:
        ``` js
        function recursion (level, queue, res) {
            // 1. terminate
            if (queue.length === 0) return;
            
            res[level] = [];
            // 2. process
            for (let i=0, len=queue.length; i<len; i++) {
                let node = queue.shift();
                res[level].push(node.val);
                
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            if(level%2===1) res[level].reverse();
            
            // 3. drill down 
            recursion(level+1, queue, res);
            
            // 4. recover
        }
        ```
- 第二思路: 迭代法(BFS).
    - 思路: 同 102迭代法(BFS).
    - 复杂度分析:
        - 时间: O(n). 遍历所有故 O(n).
        - 空间: O(n). O(logn)->O(n).
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了  98.53%的用户
        - 内存消耗 : 34.4MB, 在所有 JavaScript 提交中击败  6.25%的用户
    - 实现:
        ``` js
        var zigzagLevelOrder = function(root) {
            if (!root) return [];
            let level = 0;
            let queue = [root];
            let res = [];
            // 1.terminate
            while (queue.length > 0) {
                res[level] = [];
                for (let i=0, len=queue.length; i<len; i++) {
                    // 2. process
                    let node = queue.shift();
                    res[level].push(node.val);
                    // 3.drill down
                    if (node.left) queue.push(node.left);
                    if (node.right) queue.push(node.right);
                    // 4. recover
                }
                if (level%2===1) res[level].reverse();
                level++;
            }
            return res;
        };
        ```

### 529. 扫雷游戏
- 刷题进度:
    - [ ] xxx
    - [ ] xxx
    - [ ] xxx
- 难度: medium.
- 题意解析: 挖地雷. 根据**给定面板数组** & **挖掘位置** 来更新 **结果面板数组**. 点击之后响应如下:
    - 'M'是未挖的地雷，被点击则将其更新为'X';
    - 'E'是未挖的空格，被点击则检查周围格子是否有地雷
        - 有则更新为'1'-'8', 结束;
        - 无则更新为'B', 然后**与其相邻的方块都将被递归地揭露(直到边界 or 周边有)**;
    - 'X'是已挖到的地雷，被点击无反应;
    - '1'-'8'是周围有地雷的格子，被点击无反应;
    - 'B'是被打开的空白格子，被点击无反应;
- 总思路：
    - 'M'打开直接更新为'X'即可;
    - 'E'打开要判断周围,
    - 非'M' & 'E', 直接返回即可;
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

### 100. 相同的树
- 刷题进度:
    - [x] 自递归.
    - [x] 迭代.
    - [ ] xxx
- 难度: easy.
- 题意解析: 判断两颗树是否相同.
- 输入处理: 两棵树皆为 null 也相同，此时皆为空树.
- 初始思路: 自递归.
    - 思路: 当前方法可以被复用，直接自递归.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(logn).
    - Leetcode 结果:
        - 执行用时 : 56 ms, 在所有 JavaScript 提交中击败了 99.5 %的用户
        - 内存消耗 : 34.1MB, 在所有 JavaScript 提交中击败 5.3 %的用户
    - 实现:
        ``` js
        var isSameTree = function(p, q) {
            if (p===null && q===null) return true;
            if (p===null || q===null) return false;
            if (p.val !== q.val) return false;
            return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        };
        ```
- 第二思路: 迭代.
    - 思路: 创建栈，塞入原始数据，在不断推进的过程中做判断，能够完全完成为 true.
    - 复杂度分析:
        - 时间: O(n)
        - 空间: O(logn)
    - Leetcode 结果:
        - 执行用时 : 52 ms, 在所有 JavaScript 提交中击败了 99,8 %的用户
        - 内存消耗 : 33.8 MB, 在所有 JavaScript 提交中击败 18.6 %的用户
    - 实现:
        ``` js
        var isSameTree = function(p, q) {
            let stack = [[p, q]];
            while (stack.length > 0) {
                let temp = stack.pop();
                if (!isEqual(temp[0], temp[1])) {
                    return false;
                }
                if (temp[0]!==null && temp[1]!==null) {
                    stack.push([temp[0].left, temp[1].left])
                    stack.push([temp[0].right, temp[1].right]);
                }
            }
            return true;
        };
        function isEqual (a, b) {
            if (a===null && b===null) return true;
            if (a===null || b===null) return false;
            if (a.val !== b.val) return false;
            return true;
        }
        ```

### 112. 路径总和
- 刷题进度:
    - [x] 递归法(DFS).
    - [x] 迭代法(DFS).
    - [x] 递归法(BFS).
    - [x] 迭代法(BFS).
- 难度: easy
- 题意解析: 求树有无等同于给定值的根-》叶子的路径总和，故获取所有路径总和做匹配.
- 输入处理: root=null 时, 返回 false.
- 初始思路: 递归法(DFS).
    - 思路: 在递归方法中加入"叶子节点判断条件", 获得叶子节点值之后进行匹配.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 98 %的用户
        - 内存消耗: 37 MB, 在所有 JavaScript 提交中击败 70 %的用户
    - 实现:
        ``` js
        var hasPathSum = function(root, sum) {
            if (!root) return false;
            return recursion (root, 0, sum);
        };

        function recursion (node, total, sum) {
            if (!node) return false;
            if (!node.left && !node.right) {
                total += node.val;
                return total===sum;
            }
            return recursion(node.left, total+node.val, sum) || recursion(node.right, total+node.val, sum);
        }
        ```
- 第二思路: 迭代法(DFS).
    - 思路: 在模板迭代法的 while 部分加入"叶子节点判断条件", 并将获取到的累积值加入 res.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 76 ms, 在所有 JavaScript 提交中击败了 96.4 %的用户
        - 内存消耗: 37.1 MB, 在所有 JavaScript 提交中击败 55 %的用户
    - 实现:
        ``` js
        var hasPathSum = function(root, sum) {
            if (!root) return false;
            let stack = [root];
            while (stack.length > 0) {
                let temp = stack.pop();
                if (!temp.left && !temp.right && temp.val === sum) {
                    return true;
                }
                if (temp.right) {
                    temp.right.val += temp.val;
                    stack.push(temp.right);
                }
                if (temp.left) {
                    temp.left.val += temp.val;
                    stack.push(temp.left);
                }
            }
            return false;
        };
        ```
- 第三思路: 递归法(BFS).
    - 思路: BFS 方式都是借助数组存储一层结果，再对整层进行处理.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 84 ms, 在所有 JavaScript 提交中击败了 90.9 %的用户
        - 内存消耗: 37.2 MB, 在所有 JavaScript 提交中击败 39.7 %的用户
    - 实现:
        ``` js
        var hasPathSum = function(root, sum) {
            if (!root) return false;
            let arr = [root];
            return recursion(arr, sum);
        };

        function recursion (nodes, sum) {
            if (nodes.length === 0) return false;
            let tempArr = [];
            while (nodes.length > 0) {
                let temp = nodes.shift();
                if (!temp.left && !temp.right && temp.val===sum) {
                    return true;
                }
                if (temp.left) {
                    temp.left.val += temp.val;
                    tempArr.push(temp.left);
                }
                if (temp.right) {
                    temp.right.val += temp.val;
                    tempArr.push(temp.right);
                }
            }
            return recursion(tempArr, sum);
        }
        ```
- 第四思路: 迭代法(BFS).
    - 思路: BFS 模板迭代法加上"叶子节点判断"即可.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 98.3 %的用户
        - 内存消耗: 37.1 MB, 在所有 JavaScript 提交中击败 54.6 %的用户
    - 实现:
        ``` js
        var hasPathSum = function(root, sum) {
            if (!root) return false;
            let stack = [root];
            while (stack.length > 0) {
                let temp = stack.pop();
                if (!temp.left && !temp.right && temp.val===sum) {
                    return true;
                }
                if (temp.right) {
                    temp.right.val += temp.val;
                    stack.push(temp.right);
                }
                if (temp.left) {
                    temp.left.val += temp.val;
                    stack.push(temp.left);
                }
            }
            return false;
        };
        ```

### 110. 平衡二叉树
- 刷题进度:
    - [x] 递归法(DFS).
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 判断二叉树是否为高度平衡二叉树（每个节点的左右两个子树的高度差绝对值不超过 1）.
- 输入处理: 空为 true.
- 初始思路: 递归法(DFS).
    - 思路: 由于每个节点的左右子树高度差超过 1 就不满足条件，故递归计算每个节点的最小高度差，如果有超过 2 的马上标志为 -1 来停止迭代.
    - 复杂度分析:
        - 时间: O(n).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: 72 ms, 在所有 JavaScript 提交中击败了 98.4 %的用户
        - 内存消耗: 37.4 MB, 在所有 JavaScript 提交中击败 69.3 %的用户
    - 实现:
        ``` js
        var isBalanced = function(root) {
            return recursion(root) !== -1;
        };
        function recursion (node) {
            if (!node) return 0;
            let left = recursion(node.left);
            if (left === -1) return -1;
            let right = recursion(node.right);
            if (right === -1) return -1;
            return Math.abs(left-right)<2 ? Math.max(left, right)+1: -1;
        }
        ```

### 108. 将有序数组转换为二叉搜索树
- 刷题进度:
    - [x] 递归法(DFS).
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 将有序一维数组转换成为一颗二叉搜索树，且要求是高度平衡的（左右子树高度差的绝对值<2）。
- 输入处理: 空树 => 空数组.
- 输出处理：左右子树皆空无需处理，左右子树只有一颗空时，空树为null(JS in leetcode的输出过关要求).
- 初始思路: 递归法(DFS).
    - 思路: 高度平衡的二叉搜索树，即每个节点的左右子树高度差绝对值<2，且数组为一维&有序，明显可用二分法. 以二分不断获取根节点，并使左右数组不断递归并加入当前根节点即可.
        - 递归式：recursion(root, arrL, arrR)
    - 复杂度分析:
        - 时间: O(n).
        - 空间:  
    - Leetcode 结果:
        - 执行用时: 64 ms, 在所有 JavaScript 提交中击败了 99.5 %的用户
        - 内存消耗: 37.6 MB, 在所有 JavaScript 提交中击败 53.2 %的用户
    - 实现:
        ``` js
        var sortedArrayToBST = function(nums) {
            if (nums.length === 0) return null;
            let numsLen = nums.length;
            let midIdx = Math.floor(numsLen/2);
            let root = new TreeNode(nums[midIdx]);
            recursion(root, nums.slice(0, midIdx), nums.slice(midIdx+1, numsLen));
            return root;
        };

        function recursion (root, arrL, arrR) {
            if (arrL.length === 0 && arrR.length === 0) return;
            let lenL = arrL.length;
            let midIdxL = Math.floor(lenL/2);
            let nodeL = null;
            if (arrL[midIdxL]!==undefined) {
                nodeL = new TreeNode(arrL[midIdxL]);
                recursion(nodeL, arrL.slice(0, midIdxL), arrL.slice(midIdxL+1, lenL));
            }
            root.left = nodeL;
            let lenR = arrR.length;
            let midIdxR = Math.floor(lenR/2);
            let nodeR = null;
            if (arrR[midIdxR]!==undefined) {
                nodeR = new TreeNode(arrR[midIdxR]);
                recursion(nodeR, arrR.slice(0, midIdxR), arrR.slice(midIdxR+1, lenR));   
            }
            root.right = nodeR;
        }
        ```
    - 抽出calc方法版本：
        ``` js
        var sortedArrayToBST = function(nums) {
            let res = calc(nums);
            recursion(res[0], res[1], res[2]);
            return res[0];
        };

        function recursion (root, arrL, arrR) {
            if (arrL.length === 0 && arrR.length === 0) return;
            let resL = calc(arrL);
            recursion(resL[0], resL[1], resL[2]);
            root.left = resL[0];

            let resR = calc(arrR);
            recursion(resR[0], resR[1], resR[2]);
            root.right = resR[0];
        }

        function calc (arr){
            let len = arr.length;
            let midIdx = Math.floor(len/2);
            let [root, arrL, arrR] = [null, [], []];
            if (arr[midIdx] !== undefined) {
                root = new TreeNode(arr[midIdx]);
                arrL = arr.slice(0, midIdx);
                arrR = arr.slice(midIdx+1, len);        
            }
            return [root, arrL, arrR];
        }
        ```
    - 最简版本：
        ``` js
        var sortedArrayToBST = function(nums) {
            return recursion(nums, 0, nums.length-1);
        };

        function recursion (nums, left, right) {
            if (left > right) return null;
            let midIdx = Math.floor((right+left)/2);
            let root = new TreeNode(nums[midIdx]);
            root.left = recursion(nums, left, midIdx-1);
            root.right = recursion(nums, midIdx+1, right);
            return root;
        }
        ```