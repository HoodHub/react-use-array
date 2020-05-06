(this["webpackJsonpuse-array-example"]=this["webpackJsonpuse-array-example"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(2),c=n.n(l),u=(n(12),n(3)),o=n.n(u),m=function(){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:o.a,style:{height:96,marginBottom:12},alt:""}),r.a.createElement("img",{src:"https://img.shields.io/npm/v/use-array.svg",alt:""}),r.a.createElement("h1",null,"use-array"),r.a.createElement("p",null,"A custom React hook that lets you ",r.a.createElement("mark",null,"manipulate an array data structure")," without ever needing extra utilities. Start with:"),r.a.createElement("p",null,r.a.createElement("code",null,"npm install --save use-array")),r.a.createElement("p",null,"Then, import and use the hook:"),r.a.createElement("pre",null,"import useArray from 'use-array'\n","// \u2026in your functional component: \n","const [ list, {\n","  set, empty, replace, push,\n","  updateAt, setAt, removeAt,\n","  filter, map, sort, reverse, \n","  mergeBefore, mergeAfter, \n","}] = useArray(defaultList);"),r.a.createElement("p",null,"Now, let\u2019s go over each of the methods. You can also skip ahead ",r.a.createElement("mark",null,r.a.createElement("a",{href:"#docs"},"to the docs"))," or ",r.a.createElement("mark",null,r.a.createElement("a",{href:"#demo"},"the demo."))))},i=n(1),s=n(4),p=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],a=!0,r=!1,l=void 0;try{for(var c,u=e[Symbol.iterator]();!(a=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(o){r=!0,l=o}finally{try{!a&&u.return&&u.return()}finally{if(r)throw l}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},d=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},E=function(e){var t=Object(a.useState)(e),n=p(t,2),r=n[0],l=n[1];return[r,{set:l,empty:function(){return l([])},replace:function(e){return l(e)},push:function(e){return l((function(t){return[].concat(d(t),[e])}))},updateAt:function(e,t){return function(e,t,n){return n((function(n){var a=n.slice(0),r=a[e];return a[e]=t(r),a}))}(e,t,l)},setAt:function(e,t){return l((function(n){return[].concat(d(n.slice(0,e)),[t],d(n.slice(e+1)))}))},removeAt:function(e){return l((function(t){return[].concat(d(t.slice(0,e)),d(t.slice(e+1)))}))},filter:function(e){return l((function(t){return t.filter(e)}))},map:function(e){return l((function(t){return[].concat(d(t)).map(e)}))},sort:function(e){return l((function(t){return[].concat(d(t)).sort(e)}))},reverse:function(){return l((function(e){return[].concat(d(e)).reverse()}))},mergeBefore:function(e){return l((function(t){return[].concat(d(e)).concat([].concat(d(t)))}))},mergeAfter:function(e){return l((function(t){return[].concat(d(t)).concat([].concat(d(e)))}))}}]},f=[{task:r.a.createElement("span",null,"Check the ",r.a.createElement("mark",null,"use-array")," demo"),done:!0},{task:r.a.createElement("span",null,"Install with ",r.a.createElement("code",null,"npm install --save use-array")," and then import as ",r.a.createElement("code",null,"import useArray from 'use-array'")),done:!1},{task:"Follow the example and docs! \ud83c\udf89 \ud83c\udf89 \ud83c\udf89",done:!1}],h=[{task:r.a.createElement("span",null,"Added with ",r.a.createElement("code",null,"mergeBefore")),done:!1}],k=[{task:r.a.createElement("span",null,"Added with ",r.a.createElement("code",null,"mergeAfter")),done:!1}],y=function(){var e=E(f),t=Object(s.a)(e,2),n=t[0],a=t[1],l=a.empty,c=a.push,u=a.updateAt,o=a.filter,m=a.removeAt,p=a.map,d=a.reverse,y=a.mergeBefore,v=a.mergeAfter;return r.a.createElement("div",{id:"demo"},r.a.createElement("div",{className:"buttons"},r.a.createElement("h2",null,"Demo"),r.a.createElement("p",null,"All of the code is"," ",r.a.createElement("a",{href:"https://github.com/filipdanic/use-array/blob/master/example/src/Demo.js",target:"_blank",rel:"noopener noreferrer"},"available on Github.")),r.a.createElement("button",{onClick:function(){return o((function(e){return!e.done}))}},"Remove completed"),r.a.createElement("button",{onClick:l},"Remove all"),r.a.createElement("button",{onClick:function(){return c({done:!1,task:"Your new task. Timestamp: "+(new Date).getTime()})}},"Add task"),r.a.createElement("button",{onClick:function(){return p((function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!e.done})}))}},"Toggle \u201cdone\u201d"),r.a.createElement("button",{onClick:d},"Reverse"),r.a.createElement("button",{onClick:function(){return y(h)}},"Merge before"),r.a.createElement("button",{onClick:function(){return v(k)}},"Merge after")),n.map((function(e,t){return r.a.createElement("div",{key:t,className:"card "+(e.done?"card--done":"")},r.a.createElement("p",null,e.task),r.a.createElement("button",{onClick:function(){return u(t,(function(e){return Object(i.a)(Object(i.a)({},e),{},{done:!e.done})}))}},e.done?"\u21a9\ufe0f Undo":"\u2705 Done"),r.a.createElement("button",{onClick:function(){return m(t)}},"\u274c Delete"))})))},v=function(){return r.a.createElement("div",{id:"docs"},r.a.createElement("div",{className:"buttons"},r.a.createElement("h2",null,"Method Docs")),r.a.createElement("div",{className:"card"},r.a.createElement("h3",null,"empty"),r.a.createElement("p",null,r.a.createElement("code",null,"empty")," will reset the state to an ",r.a.createElement("mark",null,"empty array.")),r.a.createElement("pre",null,"empty()"),r.a.createElement("h3",null,"replace / set"),r.a.createElement("p",null,r.a.createElement("code",null,"replace")," and ",r.a.createElement("code",null,"set")," are the same, they are called with one parameter: the ",r.a.createElement("mark",null,"new array")," for the state."),r.a.createElement("pre",null,"replace(newList) \n","// or: \n","set(newList)"),r.a.createElement("h3",null,"push"),r.a.createElement("p",null,r.a.createElement("code",null,"push")," should be familiar \u2013 provide an ",r.a.createElement("mark",null,"item")," as the argument and it will be pushed to the state."),r.a.createElement("pre",null,"push(item)"),r.a.createElement("h3",null,"updateAt"),r.a.createElement("p",null,r.a.createElement("code",null,"updateAt")," takes two parameters: ",r.a.createElement("mark",null,"the index")," and an ",r.a.createElement("mark",null,"update function")," which will be called with the item at the given index."),r.a.createElement("pre",null,"updateAt(index, (item) =>\n","  ({ ...item, done: true }));"),r.a.createElement("h3",null,"setAt"),r.a.createElement("p",null,r.a.createElement("code",null,"setAt")," takes two parameters: ",r.a.createElement("mark",null,"the index")," and an ",r.a.createElement("mark",null,"item")," which will be placed at the given index."),r.a.createElement("pre",null,"setAt(index, item)"),r.a.createElement("h3",null,"removeAt"),r.a.createElement("p",null,r.a.createElement("code",null,"removeAt")," takes ",r.a.createElement("mark",null,"the index")," of the item that should be removed as a parameter."),r.a.createElement("pre",null,"removeAt(index)"),r.a.createElement("h3",null,"filter"),r.a.createElement("p",null,r.a.createElement("code",null,"filter")," takes a ",r.a.createElement("mark",null,"filter function (predicate)")," as the parameter, just like ",r.a.createElement("code",null,"Array\u200b.prototype\u200b.filter()")),r.a.createElement("pre",null,"filter((item) => item.done === false)"),r.a.createElement("h3",null,"map"),r.a.createElement("p",null,r.a.createElement("code",null,"map")," takes a ",r.a.createElement("mark",null,"map function")," as the parameter, just like ",r.a.createElement("code",null,"Array\u200b.prototype\u200b.map()")),r.a.createElement("pre",null,"map((item) => \n","  ({ ...item, updatedAt: new Date().getTime() })\n",")"),r.a.createElement("h3",null,"sort"),r.a.createElement("p",null,r.a.createElement("code",null,"sort")," takes an ",r.a.createElement("mark",null,"optional sort function")," as the parameter, just like ",r.a.createElement("code",null,"Array\u200b.prototype\u200b.sort()")),r.a.createElement("pre",null,"sort((a, b) => a.localeCompare(b))"),r.a.createElement("h3",null,"reverse"),r.a.createElement("p",null,r.a.createElement("code",null,"reverse")," works just like ",r.a.createElement("code",null,"Array\u200b.prototype\u200b.reverse()")),r.a.createElement("pre",null,"reverse()")))},A=function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(y,null),r.a.createElement(v,null))};c.a.render(r.a.createElement(A,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n.p+"static/media/logo.74487bb9.png"},5:function(e,t,n){e.exports=n(13)}},[[5,1,2]]]);
//# sourceMappingURL=main.b37284b1.chunk.js.map