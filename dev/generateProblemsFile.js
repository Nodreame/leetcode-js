const axios = require('axios')

async function main() {
  // 一. 获取题目列表
  //  1.获取所有题目数据
  // // const problemsUrl = 'https://leetcode-cn.com/api/problems/algorithms/' // 旧链接，只有 1400 左右题目
  const problemsUrl = 'https://leetcode-cn.com/api/problems/all/'
  const allProblemsResp = await axios.get(problemsUrl)
  console.log(`获取所有题目数据${ allProblemsResp.status === 200 ? '成功': '失败' }`)
  const problems = getProblems(allProblemsResp.data) // 成功获取列表，但是除了部分新增题目，其他 title 都是英文，需要翻译
  // console.log(problems)
  
  //  2.获取翻译映射
  const translateParams = {
    "operationName":"getQuestionTranslation",
    "variables":{},
    "query":"query getQuestionTranslation($lang: String) {\n  translations: allAppliedQuestionTranslations(lang: $lang) {\n    title\n    questionId\n    __typename\n  }\n}\n"
  }
  const dictResp = await axios.post('https://leetcode-cn.com/graphql', translateParams)
  console.log(`获取翻译映射${ dictResp.status === 200 ? '成功': '失败' }`)
  const dictMap = getDict(dictResp.data)
  
  //  3.遍历完成翻译
  const problemZhs = localizeProblems(problems, dictMap)
  // console.log(problemZhs)
  console.log('遍历完成翻译，结果长度为:', problemZhs.length)

  // - [ ] 二. 初始化生成文件
  //  - [ ] 1.创建 leetcode 文件夹
  //  - [ ] 2.编写包含占位字符的模板文件 
  //  - [ ] 3.创建单个题目文件
  //    - [ ] 使用 ${id}_${titleZh}.md 格式命名
  //    - [ ] 复制模板作为文件内容
  //    - [ ] 使用题目内容替换占位符
  
  // - [ ] 三. 考虑 Diff 逻辑, 用于出新题目后自动创建新题目文件
  //   - [ ] 1.初次执行逻辑
  //    - [ ] 缓存当前初始题目数据problems(原始数组太多冗余) & 翻译映射数组dictResp.data.translations（去掉无关属性）
  //    - [ ] 创建 cache 文件夹, 以 JSON 对象形式缓存在 cache 文件夹中 (存储生成日期 & 数量 & 内容数组，数量用以对比)
  //   - [ ] 2.更新 Diff 逻辑
  //    - [ ] 待完成逻辑设计 
}

main()

/**
 * get problems from json
 * @param {*} data 
 */
function getProblems (data) {
  if (!data || !data.stat_status_pairs) return []
  return data.stat_status_pairs.map(item => {
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

/**
 * get map from json
 * @param {*} data 
 */
function getDict (data) {
  const map = new Map()
  if (!data || !data.translations) return map
  data.translations.forEach(item => {
    map.set(item.questionId, item.title)
  })
  return map
}

/**
 * localize the array
 * @param {*} arr 
 * @param {*} map 
 */
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