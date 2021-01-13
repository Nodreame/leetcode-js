const fs = require('fs');

async function main () {
  // 0. 预检查
  if(!fs.existsSync('cache')) {
    console.log('请先运行 yarn build-leetcode 生成题目缓存')
    process.exit();
  }

  console.log('开始重新构建 README.md')

  // 1. 从缓存获取题目, 建立题目 id 与 信息的映射
  const problemsFileName = './cache/problems.json'
  const cacheData = fs.readFileSync(problemsFileName, 'utf8')
  const problems = JSON.parse(cacheData).problems.sort((a, b) => a.id - b.id)

  // 2. 生成题目列表，写入 README
  if (fs.existsSync('./leetcode/README.md')) fs.unlinkSync('./leetcode/README.md')
  const readmeTpl = `# Leetcode-js\r\n\r\n题目|难度|题解|\r\n|-|-|-|\r\n{table}`
  const listArr = fillProblemTpl(problems)
  const readmeContent = readmeTpl.replace('{table}', listArr.join('\r\n'))
  fs.writeFileSync('./leetcode/README.md', readmeContent)

  console.log('构建完成')
}

main()

// 填充模板
function fillProblemTpl (item) {
  const tdArr = []
  item.forEach (v => {
    const problem = `[${v.feId}.${v.titleZh}](https://leetcode-cn.com/problems/${v.slug}/)`
    const difficulty = v.level === 1 ? 'Easy' : (v.level === 2 ? 'Medium' : 'Hard')
    const answerUrl = `./${v.feId}_${v.titleZh}`.replace(/\s/g, '')
    tdArr.push(`|${problem}|${difficulty}|[题解](${answerUrl})|`)
  })
  return tdArr
}