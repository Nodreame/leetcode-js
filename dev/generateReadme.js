const fs = require('fs')
const { getTags } = require('./api/leetcode')

async function main () {
  if(!fs.existsSync('cache')) {
    console.log('请先运行 yarn build-leetcode 生成题目缓存')
    process.exit();
  }
  console.log('开始重新构建 README.md')
  // 1. 获取标签列表（包含题目数组）
  const tagsResp = await getTags()
  const topics = tagsResp.data.topics

  // 2. 从缓存获取题目, 建立题目 id 与 信息的映射
  const problemsFileName = './cache/problems.json'
  const problems = JSON.parse(fs.readFileSync(problemsFileName, 'utf8'))
  const problemMap = new Map()
  problems.problems.forEach(v => {
    problemMap.set(v.id, v)
  });

  // 3. 构建分类标题 & 分类下的题目列表
  const topicDetails = topics.map(topic => {
    const problems = topic.questions.map(v => {
      return problemMap.has(v) ? problemMap.get(v) : null
    }).filter(v => v!==null)
    return {
      title: `${topic.translatedName ? topic.translatedName : ''}${topic.name}`,
      problems,
    }
  })

  // 4. 基于模板生成 README.md 文件
  if (fs.existsSync('README.md')) fs.unlinkSync('README.md')
  let topicParts = topicDetails.map(item => fillTpl(item))
  const readmeContent = '# Leetcode-js\r\n' + topicParts.join('\r\n')
  fs.writeFileSync('README.md', readmeContent)
  console.log('构建完成')
}

// 初始化 Readme 用，之后都是手动修改
main()

// 填充模板
function fillTpl (item) {
  const tpl = `## {title}\r\n|题目|难度|手撸标签|题解|完成情况|\r\n|-|-|-|-|-|\r\n{table}`
  const tdArr = []
  item.problems.forEach (v => {
    const problemName = `${v.feId}.${v.titleZh}`
    const problemUrl = `https://leetcode-cn.com/problems/${v.slug}/`
    const difficulty = v.level === 1 ? 'Easy' : (v.level === 2 ? 'Medium' : 'Hard')
    const answerName = `${v.feId}_${v.titleZh}.md`.replace(/\s/g, '')
    const answerUrl = `https://github.com/Nodreame/leetcode-js/tree/master/leetcode/${answerName}`
    tdArr.push(`|[${problemName}](${problemUrl})|${difficulty}||[${answerName}](${answerUrl})|0%|`)
  })
  return tpl.replace('{title}', item.title).replace('{table}', tdArr.join('\r\n'))
}