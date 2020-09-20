const axios = require('axios')

function getProblems () {
  // const problemsUrl = 'https://leetcode-cn.com/api/problems/algorithms/' // 旧链接，只有 1400 左右题目
  const problemsUrl = 'https://leetcode-cn.com/api/problems/all/' // 新链接
  return axios.get(problemsUrl)
}

function getTranslation () {
  const translateParams = {
    "operationName":"getQuestionTranslation",
    "variables":{},
    "query":"query getQuestionTranslation($lang: String) {\n  translations: allAppliedQuestionTranslations(lang: $lang) {\n    title\n    questionId\n    __typename\n  }\n}\n"
  }
  return axios.post('https://leetcode-cn.com/graphql', translateParams)
}

function getTags () {
  return axios.get('https://leetcode-cn.com/problems/api/tags/')
}

module.exports = {
  getProblems,
  getTranslation,
  getTags,
}