// const axios = require('axios')
const { getProblems, getTranslation } = require('./api/leetcode')
const fs = require('fs')

async function main() {
  const problems = await getLeetcodeProblems()
  const cacheFolderName = 'cache'
  const cacheFileName = 'problems'
  const [ isInit, genProblems ] = diff(problems, cacheFolderName, cacheFileName)
  if (genProblems.length > 0) {
    saveCacheProblemsSync(`./${cacheFolderName}/${cacheFileName}.json`, problems)
    console.log(`题目缓存文件${ isInit ? '初始化创建' : '全量更新' }完成`)
  }

  // - [ ] 三. 文件生成
  //  - [ ] 1. leetcode 文件夹确认
  //  - [ ] 2. 读取包含占位字符的模板文件
  //  - [ ] 3. 根据列表创建单个题目文件
  //    - [ ] 使用 ${id}_${titleZh}.md 格式命名
  //    - [ ] 复制模板作为文件内容
  //    - [ ] 使用题目内容替换占位符
  // generateProblemFiles (genProblems)
}

main()


/**
 * 一. 获取题目列表
 */
async function getLeetcodeProblems () {
  //  1.获取所有题目数据
  const problemsResp = await getProblems()
  console.log(`获取题目数据${ problemsResp.status === 200 ? '成功': '失败' }`)
  const problems = getSimplifyProblems(problemsResp.data.stat_status_pairs) // 获取简化列表
  //  2.获取翻译映射（简化列表中许多 title 都是英文，需要参照映射表翻译）
  const dictResp = await getTranslation()
  console.log(`获取翻译映射${ dictResp.status === 200 ? '成功': '失败' }`)
  const dictMap = getTranslationDict(dictResp.data.data.translations)
  //  3.遍历完成翻译
  const problemZhs = localizeProblems(problems, dictMap)
  console.log('遍历完成翻译，结果长度为:', problemZhs.length)
  return problemZhs
}

// get problems from json
function getSimplifyProblems (data) {
  if (!data) return []
  return data.map(item => {
    return {
      id: item.stat.question_id,
      feId: item.stat.frontend_question_id,
      level: item.difficulty.level,
      title: item.stat.question__title, // 除了 fe_id 中包含 LCP 字样的数据外，其他题目的 title 都是英文
      slug: item.stat.question__title_slug,
      // status: item.status, // 暂时不需要，题解更新完成后手动置位即可
    }
  })
}

// get map from json
function getTranslationDict (data) {
  const map = new Map()
  if (!data) return map
  data.forEach(item => {
    map.set(item.questionId, item.title)
  })
  return map
}

// localize the array
function localizeProblems (arr=[], map) {
  if (!map) return arr
  return arr.map(item => {
    const idStr = String(item.id)
    return {
      ...item,
      titleZh: map.has(idStr) ? map.get(idStr) : item.title
    }
  })
}

/**
 * 二. 计算待生成文件列表
 * @param {*} problems 
 * @returns [ 初始化标志位, 待生成文件数组 ]
 */
function diff (problems, folderName, fileName) {
  //  1. cache 文件夹校验（不存在则创建）
  if (fs.existsSync(`./${folderName}`)) {
    console.log(`缓存文件夹已存在`)
  } else {
    console.log(`缓存文件夹不存在, 进入初始化逻辑.`)
    fs.mkdirSync(folderName)
  }
  //  2. 缓存文件校验
  const problemsFileName = `./${folderName}/${fileName}.json`
  if (fs.existsSync(problemsFileName)) {
    console.log(`题目文件已存在, 开始运行 Diff 逻辑`)
    // 获取 JSON 文件数据
    const historyProblemsStr = fs.readFileSync(problemsFileName, 'utf8')
    const historyProblemsObj = JSON.parse(historyProblemsStr)
    console.log(`读取文件成功, 列表长度为 ${historyProblemsObj.length}`)
    // Diff逻辑
    if (historyProblemsObj.length === problems.length) {
      console.log('题目列表长度不变，无需更新题目文件')
      return [false, []]
    } else {
      // 抽取编号数组逐个比对, 获得新增题目列表
      const tmpSet = new Set()
      historyProblemsObj.problems.forEach(item => { tmpSet.add(item.id) })
      const diffProblems = problems.filter(item => !tmpSet.has(item.id) )
      if (diffProblems.length > 0) {
        console.log(`Diff 执行完成, 共新增${diffProblems.length}道题目.`)
        return [false, diffProblems]
      }
      return diffProblems
    }
  } else {
    // 没有 problems.json 就创建并写数据
    console.log(`题目缓存文件不存在, 进入初始化项目逻辑，共计${problems.length}道题目.`)
    return [true, problems]
  }
}
// 保存题目列表到缓存
function saveCacheProblemsSync (filename, problems) {
  const data = {
    length: problems.length,
    updatetime: new Date(),
    problems: problems,
  }
  fs.writeFileSync(filename, JSON.stringify(data));
}


