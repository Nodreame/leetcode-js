(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1423],{

/***/ "./leetcode/71_简化路径.md":
/*!*****************************!*\
  !*** ./leetcode/71_简化路径.md ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./71_简化路径.md?vue&type=template&id=525a5014& */ "./leetcode/71_简化路径.md?vue&type=template&id=525a5014&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__["render"],
  _71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./leetcode/71_简化路径.md?vue&type=template&id=525a5014&":
/*!************************************************************!*\
  !*** ./leetcode/71_简化路径.md?vue&type=template&id=525a5014& ***!
  \************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/cache-loader/dist/cjs.js??ref--1-0!../node_modules/vue-loader/lib??ref--1-1!../node_modules/@vuepress/markdown-loader??ref--1-2!./71_简化路径.md?vue&type=template&id=525a5014& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/71_简化路径.md?vue&type=template&id=525a5014&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_vuepress_core_node_modules_cache_vuepress_cacheIdentifier_81e7108c_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_ref_1_1_node_modules_vuepress_markdown_loader_index_js_ref_1_2_71_md_vue_type_template_id_525a5014___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/@vuepress/core/node_modules/.cache/vuepress\",\"cacheIdentifier\":\"81e7108c-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./node_modules/@vuepress/markdown-loader/index.js?!./leetcode/71_简化路径.md?vue&type=template&id=525a5014&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/@vuepress/core/node_modules/.cache/vuepress","cacheIdentifier":"81e7108c-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??ref--1-1!./node_modules/@vuepress/markdown-loader??ref--1-2!./leetcode/71_简化路径.md?vue&type=template&id=525a5014& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ContentSlotsDistributor',{attrs:{"slot-key":_vm.$parent.slotKey}},[_c('h1',{attrs:{"id":"简化路径"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#简化路径"}},[_vm._v("#")]),_vm._v(" "),_c('a',{attrs:{"href":"https://leetcode-cn.com/problems/simplify-path/","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("简化路径"),_c('OutboundLink')],1)]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("难度：Medium")]),_vm._v(" "),_c('li',[_vm._v("标签：栈")])]),_vm._v(" "),_c('h2',{attrs:{"id":"刷题思路"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#刷题思路"}},[_vm._v("#")]),_vm._v(" 刷题思路")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("[x] 栈")]),_vm._v(" "),_c('li',[_vm._v("[ ] xx")])]),_vm._v(" "),_c('h3',{attrs:{"id":"方法-1-栈"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-1-栈"}},[_vm._v("#")]),_vm._v(" 方法 1 栈")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O(n), 一次遍历.")]),_vm._v(" "),_c('li',[_vm._v("空间 O(n), stack占用空间.")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("var")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token function-variable function"}},[_vm._v("simplifyPath")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("function")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("path")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("const")]),_vm._v(" stack "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("[")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("]")]),_vm._v("\n    path"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("split")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'/'")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("forEach")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token parameter"}},[_vm._v("s")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("=>")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("if")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("s "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!==")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("''")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("&&")]),_vm._v(" s "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("!=")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'.'")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("{")]),_vm._v("\n            s "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("===")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'..'")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("?")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("pop")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v(":")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("push")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_vm._v("s"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n        "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n    "),_c('span',{pre:true,attrs:{"class":"token keyword"}},[_vm._v("return")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'/'")]),_vm._v(" "),_c('span',{pre:true,attrs:{"class":"token operator"}},[_vm._v("+")]),_vm._v(" stack"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(".")]),_c('span',{pre:true,attrs:{"class":"token function"}},[_vm._v("join")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("(")]),_c('span',{pre:true,attrs:{"class":"token string"}},[_vm._v("'/'")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(")")]),_vm._v("\n"),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v("}")]),_c('span',{pre:true,attrs:{"class":"token punctuation"}},[_vm._v(";")]),_vm._v("\n")])])]),_c('h3',{attrs:{"id":"方法-2"}},[_c('a',{staticClass:"header-anchor",attrs:{"href":"#方法-2"}},[_vm._v("#")]),_vm._v(" 方法 2")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("复杂度：\n"),_c('ul',[_c('li',[_vm._v("时间 O()")]),_vm._v(" "),_c('li',[_vm._v("空间 O()")])])])]),_vm._v(" "),_c('div',{staticClass:"language-js extra-class"},[_c('pre',{pre:true,attrs:{"class":"language-js"}},[_c('code',[_vm._v("\n")])])]),_c('p',[_c('strong',[_c('a',{attrs:{"href":"https://github.com/Nodreame/leetcode-js","target":"_blank","rel":"noopener noreferrer"}},[_vm._v("JS刷题记录 Leetcode-js"),_c('OutboundLink')],1)]),_vm._v(" 每周都会更新刷题心得或者题解, 你的点赞或 star 都将助力我产出更好内容~")])])}
var staticRenderFns = []



/***/ })

}]);
//# sourceMappingURL=1423.dc2e7644.js.map