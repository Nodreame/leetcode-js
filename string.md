### 709 toLowerCase
- 难度：easy
- 标签：**ASCII码**
- 初始思路：大写字母ASCII范围65-90，小写字母ASCII范围97-122，func_大写转小写即为val+32
    ``` 
    resultStr = ''
    for(str) {
        if (str[i] in 大写字母ASCII码范围) {
            resultStr + = func_大写转小写（str[i]）
        } else {
            resultStr += str[i]
        }
    }
    return resultStr
    ```
- 复杂度：时间 O(N), 空间 O(1)
- 优化：
    第一次优化：使用正则判断字符是否处于大写字母ASCII码范围，只有处于该范围内才进行进行转ASCII处理，结果复杂度不变，减少了转换ASCII码的次数。实现如下：
    ``` js
    var toLowerCase = function(str) {
        let resultStr = '';
        for (let i=0, strLen=str.length; i<strLen; i++) {
            let tempChar = str[i];
            resultStr += /[A-Z]/.test(tempChar)? 
                String.fromCharCode(tempChar.charCodeAt()+32)
                : tempChar;
        }
        return resultStr;
    };
    ```
   
### 804 uniqueMorseRepresentations
- 难度：easy
- 初始思路：使用Set存储计算结果
- 复杂度: 时间：双for=>O(n^2), 空间：最差情况即全部字符串Morse码不同时为O(n)
- 实现：
    ``` js
    var uniqueMorseRepresentations = function(words) {
        let morseArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
        let set = new Set();
        for (let i=0, wordsLen=words.length; i<wordsLen; i++) {
            let tempMorseStr = '';
            for (let j=0, word=words[i]; j<word.length; j++) {
                tempMorseStr += morseArr[word[j].charCodeAt() - 97];
            }
            set.add(tempMorseStr);
        }
        return set.size;
    };
    ```
    
### 929 numUniqueEmails
- 难度：easy
- 标签：Set  **正则**
- 题意分析：只需关注@前面部分，遇.去掉，遇+忽略其后字符;
- 初始思路：基于@分割，前面部分正则去点，然后取加号之前的部分，组合放入set去重;
    - 复杂度：时间O(n)，空间O(n)
    - 实现
       ``` js
       var numUniqueEmails = function(emails) {
            let set = new Set();
            for (let i=0, emailsLen=emails.length; i<emailsLen; i++) {
                let tempArr = emails[i].split('@');
                let localStr = tempArr[0];
                localStr = localStr.replace(/\./g, '');
                let indexAdd = localStr.indexOf('+');
                if (indexAdd>-1) { localStr=localStr.slice(0, indexAdd); }
                set.add(localStr+'@'+tempArr[1]);
            }
            return set.size;
        };
       ```
- 首次优化：先基于加号分割再正则去点，组合操作一起提高可读性；
    - 实现：
        ``` js
        var numUniqueEmails = function(emails) {
            let set = new Set();
            for (let i=0, emailsLen=emails.length; i<emailsLen; i++) {
                let tempArr = emails[i].split('@');
                let localStr = tempArr[0].split('+')[0].replace(/\./g, '');
                set.add(localStr+'@'+tempArr[1]);
            }
            return set.size;
        };
        ```
    
### 22 generateParenthesis 
- 难度： medium
- 标签：**递归**
- 初始思路：创建校验函数，生成所有情况的组合后逐个校验；
    - 复杂度：时间、空间都 N!
![图片描述][1]
- 优化：分析正确组合结果生成规律，只生成符合要求的结果；
    - 左右括号规则（每次新增都有添加左括号和添加右括号两种选择，故重点在于了解不得添加情况）：
        1 . 不可加左括号：左括号数量===Num
        2 . 不可加右括号：首位、左右括号数量相等时
    - 思路：用函数不断根据左右括号规则运行添加，最终生成目标结果；
    - 复杂度：时间O(n)、空间O(n)
    - 实现：
    ```
    var generateParenthesis = function(n) {
        let arr = [];
        if (n===0) return [];
        calcFunc(arr, n, 0, 0, '');  
        return arr;
    };
    
    function calcFunc(resultArr, N, leftNum, rightNum, currStr) {
        if (leftNum+rightNum === N*2) {
            resultArr.push(currStr);
            return;
        }
        if (leftNum !== N) {
            calcFunc(resultArr, N, leftNum+1, rightNum, currStr+'(');
        }
        if (currStr !== '' && leftNum !== rightNum) {
            calcFunc(resultArr, N, leftNum, rightNum+1, currStr+')');
        }
    }
   ```

### 657 judgeCircle
- 难度：easy
- 初始思路：放置两个计数器，for字符串并增减计数器，最终计数器归0则True;
    - 复杂度：时间O(n) 空间O(1)
    - 实现：
      ``` js
      var judgeCircle = function(moves) {
        let [x, y] = [0, 0];
        for (let i=0, movesLen=moves.length; i<movesLen; i++) {
            if (moves[i] === 'L') {
                x++;
            } else if (moves[i] === 'R') {
                x--;       
            } else if (moves[i] === 'U') { 
                y++; 
            } else if (moves[i] === 'D') {
                y--;
            }
        }
        return (x===0 && y===0)? true: false;
      };
      ```
- 思路二:使用Hashmap做需要字符数量的存储，及最后用以对比
    - 复杂度：时间O(n) 空间O(1)
    - 实现：
    ``` js
    let map = new Map();
    map.set('U', 0);
    map.set('D', 0);
    map.set('L', 0);
    map.set('R', 0);
    for (let i=0, movesLen=moves.length; i<movesLen; i++) {
        map.has(moves[i])? map.set(moves[i], map.get(moves[i])+1): '';
    }
    return map.get('U')===map.get('D') && map.get('L')===map.get('R')
    ```

### 344 reverseString
- 难度：easy
- 题意分析：原地翻转数组并输出，空间复杂度需为O(1)
- 思路：首尾ij向中间推进并交换，i<j判断失败则退出
    - 复杂度：时间O(n), 空间O(1)
    - 实现：
    ``` js
    var reverseString = function(s) {
        let [i, j] = [0, s.length-1];
        while (i<j) {
            [s[i], s[j]] = [s[j], s[i]]
            i++
            j--
        }
        return s
    };
    ```
    
### 890 findAndReplacePattern
- 难度：medium
- 题意分析：word和pattern的每个字母能构成**不重复映射**即满足条件
- 初始思路：for words, 再for pattern.length, 当map不存在当前字母则添加，当map存在当前字母时比对，成功继续,失败next word
    - Tip:隐蔽规则：**“没有两个字母映射到同一个字母”**, 即字母列表&对应pattern列表长度应始终一致（借助set与map长度对比)
    - 复杂度：时间O(n)，空间O(n)
    - 实现:
    ``` js
    var findAndReplacePattern = function(words, pattern) {
        let resultArr = [];
        let patternLen = pattern.length;
        for(let i=0, wordsLen=words.length; i<wordsLen; i++) {
            let map = new Map();
            let setVal = new Set();
            let word = words[i];
            let flag = true;
            for (let j=0; j<patternLen; j++) {
                if (map.has(pattern[j])) {
                    if (map.get(pattern[j]) !== word[j]) {
                        flag = false;
                        break;
                    }
                } else {
                    map.set(pattern[j], word[j]);
                    setVal.add(word[j]);
                    if ( map.size!== setVal.size) {
                        flag = false;
                        break;
                    }
                }
            }
            if (flag) { resultArr.push(word); }
        }
        return resultArr;
    };
    ```
    - 围观：
        - 排名第一：遍历pattern用pattern.indexOf(item)获取下标数组，使words也按照这个方法对比；
        - 其他：大同小异封装方法,只封装一次用以检测足矣;
    - 总结:本题其实是:"如何制定对比word和pattern的规则",注意点是一一映射

### 557 reverseWords
- 难度：easy
- 题意分析："注意"中提到，"每个单词由**单个空格**分隔，且字符串中**不会有任何额外的空格**"，于是解题只需要先基于**单个空格**作分割，然后依次反转每个单词就行(时间复杂度：O(n^2)，空间复杂度：O(n^2))
- 实现：
    ``` JS
    var reverseWords = function(s) {
        let resultS = ''
        let arr = s.split(' ')
        for (let i=0, arrLen=arr.length; i<arrLen; i++) {
            resultS += arr[i].split('').reverse().join('') + ' '
        }
        return resultS.trim()
    };
    ```
- 思路二：遍历字符串并处理每段单词（记录开始位，遇到【下位为空格or最后一位】记录结束位&处理，处理完成后记录结束位+2为起始位），时间空间复杂度不变，减少了split('').reverse().join('')造成的空间损耗，实现如下：
    ``` js
    var reverseWords = function(s) {
        let arr = s.split('')
        let [startIndex, endIndex] = [0, 0]
        for (let i=0, arrLen=arr.length; i<arrLen; i++) {
            if (arr[i+1]===' ' || i===arrLen-1) {
                endIndex = i
                reserveArr(arr, startIndex, endIndex)
                startIndex = i + 2
            }
        }
        return arr.join('')
    };
    
    function reserveArr (targetArr, sIndex, eIndex) {
        // console.log('[sIndex, eIndex]:', [sIndex, eIndex])
        while (sIndex < eIndex) {
            [targetArr[sIndex], targetArr[eIndex]] = [targetArr[eIndex], targetArr[sIndex]]
            sIndex++
            eIndex--
        }
    }
    ```
    
### 537 complexNumberMultiply
- 难度：medium
- 题意分析：根据给定的**两个**格式为**a+bi**的复数字符串，计算出**a+bi**格式的结果字符串
- 思路：使用**字符串分割**或者**正则**提取输入字符串的a和b值，计算得出结果a和b值，填充入模板字符串并返回
    - 复杂度：时空均O(1)
    - 实现：
        ``` js
        var complexNumberMultiply = function(a, b) {
            let [aArr, bArr] = [a.split('+'), b.split('+')]
            let [a1, b1] = [aArr[0], aArr[1].split('i')[0]]
            let [a2, b2] = [bArr[0], bArr[1].split('i')[0]]
            let [aResult, bResult] = [a1*a2-b1*b2, a1*b2+a2*b1]
            return `${aResult}+${bResult}i`
        }
        ```
### 521 findLUSlength
- 难度：easy
- 题意分析：这道题着重题意分析，目标是获取最长特殊序列（定义：**独有**的最长子序列）。可得两字符串不相同时必定不互为子序列，故取长者返回；若相等则互为子序列而非**最长特殊序列**，即不存在，返回-1
- 实现：
    ``` js
    var findLUSlength = function(a, b) {
        if (a === b) { 
            return -1 
        } else {
            return Math.max(a.length, b.length)
        }
    };
    ```
    
### 791 customSortString
- 难度：medium
- 题意解析：使T按照S的顺序做排列，S中不存在的字符可随意排列
- 思路一：暴力思路（不推荐）。切分S形成顺序数组，并以此形成char+count的Map。for T并加入Map，for SArr按序形成结果字符串
    - 特点：思路简单，空间占用多，代码繁琐
    - 复杂度:时间O(T), 空间O(S+2T)
    - 实现：
        ``` js
        var customSortString = function(S, T) {
            let orderArr = S.split('')
            let countMap = new Map()
            let resultS = ''
            for (let i=0, SLen=S.length; i<SLen; i++) {
                countMap.set(S[i], 0)
            }
            for (let i=0, TLen=T.length; i<TLen; i++) {
                if (countMap.has(T[i])) {
                    countMap.set(T[i], countMap.get(T[i])+1)    
                } else {
                    countMap.set(T[i], 1)
                    orderArr.push(T[i])
                }
            }
            for (let i=0, orderArrLen=orderArr.length; i<orderArrLen; i++) {
                for (let j=0; j<countMap.get(orderArr[i]); j++) {
                    resultS += orderArr[i]
                }
            }
            return resultS
        };
        ```
- 思路二：用Map存储S顺序，然后用数组存储每个S位置所对应的所有T字符，整合输出
    - 特点：思路&代码清晰
    - 实现：
        ``` js
        var customSortString = function(S, T) {
            let SLen = S.length
            let map = new Map()
            let resultArr = Array.from({length: SLen+1}, ()=>'')
            for (let i=0; i<SLen; i++) {
                map.set(S[i], i)
            }
            for (let i=0, TLen=T.length; i<TLen; i++) {
                if (map.has(T[i])) {
                    resultArr[map.get(T[i])] += T[i]
                } else {
                    resultArr[SLen] += T[i]
                }
            }
            return resultArr.join('')
        };
        ```
### 893 numSpecialEquivGroups
- 难度：easy
- 题意分析：目标是将数组内特殊等价的字符串归纳为一组并求总数组长度。判断是否为特殊等价的依据是，奇位字符相同&偶位字符相同（忽略顺序）。
- 思路：for数组，取得item并将其分开为奇字符串及偶字符串，sort两个字符串并整合放入Set中，Set长度即结果。
    - 实现
        ``` js
        var numSpecialEquivGroups = function(A) {
          let set = new Set();
          let itemSize = A[0].length;
          for (let i=0, ALen=A.length; i<ALen; i++) {
            let [oArr, eArr] = [[], []];
            for (let j=0; j<itemSize; j++) {
              if (j%2===0) { eArr.push(A[i][j]) }
              else { oArr.push(A[i][j]) }
            }
            set.add(oArr.sort().join('')+eArr.sort().join(''));
          }
          return set.size;
        };
        ```

### 12. intToRoman
- 难度：medium
- 题意分析：将一个0~3999的数转换为罗马数字
- 初始思路：枚举0~9(间隔1)、10-90(间隔10)、100~900(间隔100)、1000-3000(间隔1000), 然后循环取数字最后一位取得对应字符串，累加结果。
    - 实现：
        ```
        var intToRoman = function(num) {
            let fixedArr = [
                ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
                ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
                ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
                ['', 'M', 'MM', 'MMM']
            ];
            let resultStr = '';
            let count = 0;
            while (num!==0) {
                resultStr = fixedArr[count++][num%10] + resultStr
                num = Math.floor(num/10)
            }
            return resultStr;
        };
        ```
- 优化思路：直接一路暴力if下来，免去了预先定义数组及从二维数组中取值，故速度空间都得到节省。
    - 实现：
        ``` js
        var intToRoman = function(num) {
            let resultStr = ''
            if (num>=1000) {
                for (let i=0, len=Math.floor(num/1000); i<len; i++) {
                    resultStr += 'M'
                }
                num = num%1000
            }
            if (num>=900) {
                resultStr += 'CM'
                num -= 900
            }
            if (num>=500) {
                resultStr += 'D'
                num -= 500
            }
            if (num>=400) {
                resultStr += 'CD'
                num -= 400
            }
            if (num>=100) {
                for (let i=0, len=Math.floor(num/100); i<len; i++) {
                    resultStr += 'C'
                }
                num = num%100
            }
            if (num>=90) {
                resultStr += 'XC'
                num -= 90
            }
            if (num>=50) {
                resultStr += 'L'
                num -= 50
            }
            if (num>=40) {
                resultStr += 'XL'
                num -= 40
            }
            if (num>=10) {
                for (let i=0, len=Math.floor(num/10); i<len; i++) {
                    resultStr += 'X'
                }
                num = num%10
            }
            if (num>=9) {
                resultStr += 'IX'
                num -= 9
            }
            if (num>=5) {
                resultStr += 'V'
                num -= 5
            }
            if (num>=4) {
                resultStr += 'IV'
                num -= 4
            }
            if (num>=1) {
                for (let i=0; i<num; i++) {
                    resultStr += 'I'
                }
            }
            return resultStr;
        };
        ```
### 13. romanToInt
- 难度：easy
- 题意分析：将罗马数字转换为数字
- 思路：创建对象映射单个罗马数字与数值的关系，遍历罗马数字字符串，比较第 i 位与第 i+1 位的值，如果第 i 位的值小于第 i+1 位，则额外计算，其他情况直接计算获得结果。
    - 实现：
        ``` js
        var romanToInt = function(s) {
            let fixedObj = {
                '': 0,
                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000
            };
            let result = 0;
            for (let i=0; i<s.length; i++) {
                if (s[i+1] && fixedObj[s[i+1]]>fixedObj[s[i]]) {
                    result += fixedObj[s[i+1]] - fixedObj[s[i++]];
                } else {
                    result += fixedObj[s[i]];
                }
            }
            return result;
        };
        ```
### 1016. queryString
- 难度：medium
- 题意解析：确认 1~N 的每个数的二进制表示都是 S 的子串。
- 思路：编写一个数字转二进制字符串方法（避开32位限制），for 数组转换结果，确定是否在 S 中都存在。(由于只要一个二进制字符串不匹配就退出故实际运行时间应该是更低的)
    - 复杂度: 时间 O(n), 空间 O(N)
    - 实现：
        ``` js
        var queryString = function(S, N) {
            for (let i=0; i<=N; ++i) {
                if (S.indexOf(num2bin(i)) === -1) {
                    return false;
                }
            }
            return true;
        };
        
        function num2bin (num){
            let binStr = '';
            while(num>0) {
                binStr = num%2 + binStr;
                num = Math.floor(num/2);
            }
            return binStr;
        }
        ```

### 49. groupAnagrams
- 难度：medium
- 题意解析：将字符串数组中，字母组成相同的词归纳到同一数组内，再合并进数组。
- 初始思路：遍历数组，对item进行 sort 并作为 map 的key，value 为计数器的计数（也是结果数组的 index），根据map.has(key)的情况，数组分别尾增新数组或在特定数组中尾插单词。
    - 复杂度：时间 O(n), 空间复杂度O(n)
    - 实现：
        ``` js
        var groupAnagrams = function(strs) {
            let map = new Map();
            let resultArr = [];
            let count = 0;
            for (let i=0, arrLen=strs.length; i<arrLen; i++) {
                let tempStr = strs[i].split('').sort().join('');
                if (map.has(tempStr)) {
                    let index = map.get(tempStr);
                    resultArr[index].push(strs[i]);
                } else {
                    map.set(tempStr, count);
                    resultArr[count++] = [strs[i]];
                }
            }
            return resultArr;
        };
        ```
        
- 优化思路：用 map 存放 a-z 映射到26个质数的键值对，用每次"拆分 item 对获得乘积" 替换 "sort item"的过程
    - 复杂度：同上. 中间的从 item 获取 key 的过程被简化了。
    - 实现：
        ``` js
        var groupAnagrams = function(strs) {
            var fixedObj={
                a:2,
                b:3,
                c:5,
                d:7,
                e:11,
                f:13,
                g:17,
                h:19,
                i:23,
                j:29,
                k:31,
                l:37,
                m:41,
                n:43,
                o:47,
                p:53,
                q:59,
                r:61,
                s:67,
                t:71,
                u:73,
                v:79,
                w:83,
                x:89,
                y:97,
                z:101
            }
            let map = new Map();
            let resultArr = [];
            let count = 0;
            for (let i=0, arrLen=strs.length; i<arrLen; i++) {
                // let tempStr = strs[i].split('').sort().join('');
                let uniqueNum = 1;
                for (let j=0, word=strs[i], len=word.length; j<len; j++) {
                    uniqueNum *= fixedObj[word[j]];
                }
                if (map.has(uniqueNum)) {
                    let index = map.get(uniqueNum);
                    resultArr[index].push(strs[i]);
                } else {
                    map.set(uniqueNum, count);
                    resultArr[count++] = [strs[i]];
                }
            }
            return resultArr;
        };
        ```

### 824. toGoatLatin
- 难度：easy
- 题意解析：句子可被空格分割为 n 个单词，每个单词处理如下：
    - 单词开头为元音则尾部+ma+a*(单词在数组中的下标+1)；
    - 非元音开头则单词摘出开头+开头+ma+a*(单词在数组中的下标+1)；
- 解题思路：按照题意编写代码
    - 实现：
        ``` js
        var toGoatLatin = function(S) {
            let arr = S.split(' ');
            for (let i=0, arrLen=arr.length; i<arrLen; i++) {
                if (/[aeiouAEIOU]/.test(arr[i][0])) {
                    arr[i] += 'ma'
                } else {
                    let tempArr = arr[i].split('');
                    tempArr = tempArr.splice(1, tempArr.length)
                    tempArr.push(arr[i][0])
                    tempArr.push('ma')
                    arr[i] = tempArr.join('') 
                }
                for (let j=0, len=i+1; j<len; j++) {
                    arr[i] += 'a'
                }
            }
            return arr.join(' ').trim()
        };
        ```

### 609.findDuplicate
- 难度：medium
- 题意解析：给定一个二维数组，每个子数组第一个元素为根目录，第二到第 n 个元素为文件+文件内容，目标是将相同文本内容的文件路径名放入同一数组。
- 初始思路：创建 map，双 for 循环组装出实际文件路径，并将内容作为key，数组为 value 放入 map, 相同数组不断插入 value，最后取 map.values() 整合出目标二维数组。
    - 实现：
        ``` js
        var findDuplicate = function(paths) {
            let map = new Map();
            for (let i=0, pathsLen=paths.length; i<pathsLen; i++) {
                let tempArr = paths[i].split(' ');
                let prefix = tempArr[0];
                for (let j=1, len=tempArr.length; j<len; j++) {
                    let fileArr = tempArr[j].split('(');
                    let pathName = prefix + '/' + fileArr[0];
                    let content = fileArr[1].split(')')[0];
                    if (!map.has(content)) {
                        map.set(content, [])
                    }
                    map.get(content).push(pathName)
                }
            }
            let resultArr = []
            for (let value of map.values()) {
                if (value.length > 1) {
                    resultArr.push(value)
                }
            }
            return resultArr
        };
        ```
- 优化思路：
    - 优化点1：将中间的"两次切分字符串"改为"字符串截取"，减少了空间消耗；
    - 优化点2：最后从 map.values()生产目标二维数组的过程使用 ES6语法的 Array.from + filter 代替，提高执行效率（副作用是加大内存消耗）；
        - 实现：
        ``` js
        var findDuplicate = function(paths) {
            let map = new Map();
            for (let i=0, pathsLen=paths.length; i<pathsLen; i++) {
                let tempArr = paths[i].split(' ');
                let prefix = tempArr[0];
                for (let j=1, len=tempArr.length; j<len; j++) {
                    let item = tempArr[j];
                    let contentIndex = item.indexOf('(');
                    let content = item.slice(contentIndex+1, item.length-1);
                    let pathName = prefix + '/' + item.slice(0, contentIndex);
                    if (!map.has(content)) {
                        map.set(content, [])
                    }
                    map.get(content).push(pathName)
                }
            }
            return Array.from(map.values()).filter(item=>item.length>1);
        };
        ```

### 49. groupAnagrams
- 难度：medium
- 题意解析：从包含数个字符串的数组中获取包含字母完全相同的字符串。
- 初始解法：通过键值对方法，将每个字符串的字母排序形成键，键相同的字符串放到一起。
    - 复杂度：时间O(n)、空间O(n)
    - 实现：
    ``` js
    var groupAnagrams = function(strs) {
        let map = new Map();
        for (let i=0, strsLen=strs.length; i<strsLen; i++) {
            let sortStr = strs[i].split('').sort().join('')
            if (map.has(sortStr)) {
                map.get(sortStr).push(strs[i])
            } else {
                map.set(sortStr, [strs[i]])
            }
        }
        return Array.from(map.values());
    };
    ```

###  788. rotatedDigits
- 难度：easy
- 题意解析：计算 1-》N 中间的数字有多少个是好数，好数的定位为180旋转后仍为数字且不与原数相等。即满足数字为好数的前提是：
    - 1）翻转后所有数字有效（0，1，2，5，6，8，9）；
    - 2）至少一个数字为不同数；（2，5，6，9）
- 初始解法：所有数均为有效=》没有无效数字=》不包含(3，4，7), 故只要满足包含(2,5,6,9)且不包含(3,4,7)即符合要求，用正则可以简单得出结果。
    - 实现：
    ``` js
    var rotatedDigits = function(N) {
    let count = 0;
        for (let i=1, len=N+1; i<len; i++) {
            if (!(/[347]/g.test(i)) && /[2569]/g.test(i)) {
                count++;
            }
        }
        return count;
    };
    ```

### 67. 二进制求和
- 刷题进度:
    - [x] 补零同位相加法.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 补零同位相加法.
    - 思路: 先补零再同位相加即可.
    - 复杂度分析:
        - 时间: O(n). 最好情况为同长度 O(n/2). 最坏长度悬殊 O(n).
        - 空间: O(n). 借助额外数组.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var addBinary = function(a, b) {
            // 计算长度补0
            // 逐个累加
            // 得到结果数组并改为字符串
            let [lenA, lenB] = [a.length, b.length];
            if (lenA !== lenB) {
                let tmpArr = Array.from({length: Math.abs(lenA-lenB)}, ()=>0);
                tmpArr.push(lenA < lenB ? a:b);
                if (lenA < lenB) {
                    a = tmpArr.join('');
                    lenA = a.length;
                } else {
                    b = tmpArr.join('');
                    lenB = b.length;
                }
            } 
            let count = lenA-1;
            let arr = [];
            let carry = 0;
            while (count >= 0) {
                let tmp = (a[count]-0) + (b[count]-0) + carry;
                arr[count] = tmp % 2;
                carry = tmp >= 2 ? 1 : 0;
                count--;
            }
            if(carry === 1) arr.unshift(1);
            return arr.join('');
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

	
### 28. 实现 strStr()
- 刷题进度:
    - [x] 双遍历.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 双遍历.
    - 思路: 第一次遍历确认起点，第二次遍历确认是否全匹配.
    - 复杂度分析:
        - 时间: O(hLen * nLen). 第一次遍历确认起点O(hLen)，第二次遍历确认是否全匹配O(nLen).
        - 空间: O(1). 常量级额外空间.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var strStr = function(haystack, needle) {
            let [hLen, nLen] = [haystack.length, needle.length];
            if (nLen === 0) return 0;
            if (hLen < nLen) return -1;
            for (let i=0, len=hLen-nLen+1; i<len; i++) {
                if (haystack[i] === needle[0]) {
                    let flag = true;
                    for (let j=1; j<nLen; j++) {
                        if (haystack[i+j] !== needle[j]) {
                            flag = false;
                            break;   
                        }
                    }
                    if (flag) return i;
                }
            }
            return -1;
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

### 14. 最长公共前缀
- 刷题进度:
    - [x] 两次遍历.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 两次遍历.
    - 思路: 第一次遍历第一单词的字母，第二次遍历用其他单词的同位置字符对比.
    - 复杂度分析:
        - 时间: O(n * k). n 为单词总数，k 为结果长度.
        - 空间: O(k). 额外使用了一个数组.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var longestCommonPrefix = function(strs) {
            if (strs.length === 0) return '';
            let strsLen = strs.length;
            let arr = [];
            for (let i=0, len=strs[0].length; i<len; i++) {
                for (let j=1; j<strsLen; j++) {
                    if (strs[0][i] !== strs[j][i]) {
                        return arr.join('');
                    }
                }
                arr.push(strs[0][i]);
            }
            return arr.join('');
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

### 151. 翻转字符串里的单词
- 刷题进度:
    - [x] 正则预处理 + 转数组反转.
    - [ ] xxx
    - [ ] xxx
- 难度: medium.
- 题意解析:
- 输入处理:
- 初始思路: 正则预处理 + 转数组反转.
    - 思路:
    - 复杂度分析:
        - 时间: O(n). 转数组 O(n), 反转 O(n), 合并 O(n).
        - 空间: O(n). 转数组占用 n 长度额外空间.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var reverseWords = function(s) {
            if (s.length === 0) return s;
            s = s.trim().replace(/\s+/g, ' ');
            return s.split(' ').reverse().join(' ');
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

### 557. 反转字符串中的单词 III
- 刷题进度:
    - [x] 一行.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: 一行.
    - 思路: 分割为数组 & 反转 & 组合，再以一个空格分割为数组 & 反转 & 组合.
    - 复杂度分析:
        - 时间: O(n+k). 首次分割为数组O(n) & 反转O(n) & 组合O(n), 再以一个空格分割为数组O(k) & 反转O(k) & 组合O(k).
        - 空间: O(n+k). 首次 O(n) 额外空间，再次 O(k) 额外空间.
    - Leetcode 结果:
        - 执行用时: 92 ms, 在所有 JavaScript 提交中击败了 71.5 %的用户
        - 内存消耗: 41MB, 在所有 JavaScript 提交中击败 95 %的用户
    - 实现:
        ``` js
        var reverseWords = function(s) {
            return s.split('').reverse().join('').split(' ').reverse().join(' ');
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
    
### 1108. IP 地址无效化
- 刷题进度:
    - [x] 正则替换.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析: 
- 输入处理:
- 初始思路: 正则替换.
    - 思路: 
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var defangIPaddr = function(address) {
            return address.replace(/\./g, '[.]');
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

### 1221. 分割平衡字符串
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
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var balancedStringSplit = function(s) {
            let res = 0;
            let count = 0;
            for (let i=0, len=s.length; i<len; i++) {
                if (s[i] === 'L') count++;
                else count--;
                if (count === 0) res++;
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

### 387. 字符串中的第一个唯一字符
- 刷题进度:
    - [x] Map + 检索 from val=1.
    - [ ] xxx
    - [ ] xxx
- 难度: easy.
- 题意解析:
- 输入处理:
- 初始思路: Map + 检索 from val=1.
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var swapPairs = function(head) {
            if (!head || !head.next) return head;
            let res = new ListNode(0);
            res.next = head;
            let prev = res;
            while (prev.next && prev.next.next) {
                let [fst, snd] = [prev.next, prev.next.next];
                [prev.next, fst.next, snd.next] = [snd, snd.next, fst];
                prev = prev.next.next;
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

### 49. 字母异位词分组
- 刷题进度:
    - [x] Map(字母重排, 原值数组]
    - [ ] xxx
    - [ ] xxx
- 难度: 
- 题意解析:
- 输入处理:
- 初始思路: Map(字母重排, 原值数组]
    - 思路:
    - 复杂度分析:
        - 时间: O(n^k). k 为字符平均长度.
        - 空间: O(n). map 最大为 n.
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var groupAnagrams = function(strs) {
            let map = new Map();
            strs.forEach(item => {
                let key = item.split('').sort().join('');
                if (map.has(key)) map.get(key).push(item);
                else map.set(key, [item]);
            });
            return Array.from(map.values());
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

### 149. 直线上最多的点数
- 刷题进度:
    - [x] 双遍历放，斜率存Map
    - [ ] xxx
    - [ ] xxx
- 难度: hard.
- 题意解析:
- 输入处理:
- 初始思路: 双遍历放，斜率存Map
    - 思路: 每轮计算出当前最大值, 遇到相同的点直接加一退出即可.
    - 复杂度分析:
        - 时间: O(n^2).
        - 空间: O(n).
    - Leetcode 结果:
        - 执行用时: ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗: MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        var maxPoints = function(points) {
            let len = points.length;
            if (len < 3) return len; 
            let res = 0;
            for (let i=0; i<len; i++) {
                let max = 0;
                let duplicate = 0;
                let map = new Map();
                for (let j=i+1; j<len; j++) {
                    let [x, y] = [points[j][0] - points[i][0], points[j][1] - points[i][1]];
                    if (x === 0 && y === 0) {
                        duplicate++;
                        continue;
                    }
                    let gcdNum = gcd(x, y);
                    let slope = `${Math.floor(y/gcdNum)}|${Math.floor(x/gcdNum)}`;
                    map.set(slope, map.has(slope) ? map.get(slope)+1 : 1);
                    max = Math.max(max, map.get(slope));
                    console.log(`[${i}, ${j}, ${gcdNum}, ${slope}, ${map.get(slope)}`);
                }
                res = Math.max(res, duplicate+max+1);
            }
            return res;
        };

        function gcd (a, b) {
            while (b !== 0) {
                [a, b] = [b, a % b];
            }
            return a;
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