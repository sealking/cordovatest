(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e5e1b92"],{"1c6c":function(t,e,s){"use strict";var a=s("abd4"),i=s.n(a);i.a},abd4:function(t,e,s){},beef:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"operateDiv",attrs:{id:"score"}},[s("div",{staticClass:"title"},[s("mt-header",{staticStyle:{"font-size":"16px"},attrs:{fixed:"",title:"成绩信息"}})],1),s("div",{staticClass:"box"},[s("div",{staticStyle:{width:"60%","text-align":"left"}},[t._v("已答题数：    "+t._s(t.answerNumber))]),s("div",{staticStyle:{width:"40%","text-align":"left"}},[t._v("未答题数：    "+t._s(t.noAnswerNumber))])]),s("div",{staticStyle:{"font-size":"6vw"}},[t._v("总成绩:  "),s("span",{staticStyle:{"font-size":"8vw",color:"red"}},[t._v(t._s(t.score))]),t._v(" 分")]),s("div",{staticClass:"footBox"},[s("mt-button",{staticClass:"mybutton",attrs:{size:"large",type:"primary"},on:{click:function(e){t.submitClick()}}},[t._v("返回主页")])],1)])},i=[],r=(s("cadf"),s("551c"),s("097d"),{data:function(){return{score:localStorage.getItem("score"),answerNumber:localStorage.getItem("answerNumber"),noAnswerNumber:localStorage.getItem("totalNumber")-localStorage.getItem("answerNumber")}},methods:{submitClick:function(){this.$router.push("/")}}}),o=r,c=(s("1c6c"),s("2877")),n=Object(c["a"])(o,a,i,!1,null,"0099a616",null);n.options.__file="vue-scoreConfirm.vue";e["default"]=n.exports}}]);