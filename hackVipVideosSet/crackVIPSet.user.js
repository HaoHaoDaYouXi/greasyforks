// ==UserScript==
// @name     破解VIP会员视频集合
// @namespace  https://greasyfork.org/zh-CN/users/104201
// @version    5.01
// @description  2020-5-13 诈尸级更新。一键破解[优酷|腾讯|乐视|爱奇艺|芒果|AB站|音悦台]等VIP或会员视频，解析接口贵精不贵多，绝对够用。详细方法看说明和图片。包含了[懒人专用***放心使用。▶懒蛤蛤][【玩的嗨】VIP工具箱***Max zhang]的部分接口。[Tampermonkey | Violentmonkey | Greasymonkey 4.0+]
// @author     黄盐
// require  https://greasemonkey.github.io/gm4-polyfill/gm4-polyfill.js
// @noframes
// @match    *://*.iqiyi.com/*
// @match    *://*.youku.com/*
// @match    *://*.le.com/*
// @match    *://*.letv.com/*
// @match    *://v.qq.com/*
// @match    *://*.tudou.com/*
// @match    *://*.mgtv.com/*
// @match    *://film.sohu.com/*
// @match    *://tv.sohu.com/*
// @match    *://*.acfun.cn/*
// @match    *://*.bilibili.com/*
// @match    *://vip.1905.com/play/*
// @match    *://*.pptv.com/*
// @match    *://v.yinyuetai.com/video/*
// @match    *://v.yinyuetai.com/playlist/*
// @match    *://*.fun.tv/vplay/*
// @match    *://*.wasu.cn/Play/show/*
// @match    *://*.56.com/*
// @exclude  *://*.bilibili.com/blackboard/*
// @grant    GM.getValue
// @grant    GM.setValue
// @grant    GM_getValue
// @grant    GM_setValue
// @grant    unsafeWindow
// @grant    GM_xmlhttpRequest
// @grant    GM.xmlHttpRequest
// @grant    GM_openInTab
// @grant    GM.openInTab
// @require  https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.runtime.min.js
// ==/UserScript==
!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=7)}([function(t,e){t.exports=Vue},function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){"use strict";var n=i(1);i.n(n).a},function(t,e,i){"use strict";var n=i(2);i.n(n).a},function(t,e,i){"use strict";var n=i(3);i.n(n).a},function(t,e,i){"use strict";i.r(e);var n=i(0),s=i.n(n),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"crackVIPSet",style:t.styleTop,attrs:{id:"crackVIPSet"}},[i("div",{attrs:{id:"nav"}},[i("button",{attrs:{name:"quickJump"},on:{mouseover:function(e){t.nav="apis"},click:t.quickJump,mousedown:function(e){return e.preventDefault(),t.moveY(e)}}},[t._v("▶")]),t._v(" "),i("button",{on:{mouseover:function(e){t.nav="settings"}}},[t._v("☑")])]),t._v(" "),i("div",{attrs:{id:"list"}},["apis"==t.nav?i("div",t._l(t.apis,(function(e,n){return i("b",{key:n,attrs:{title:e.title||"","data-icon":e.intab?"🗖":"🗗"},on:{click:function(e){return t.jump(n)}}},[t._v(t._s(e.name||"未命名"))])})),0):"settings"==t.nav?i("div",{staticStyle:{position:"relative",top:"50px"}},t._l(Object.keys(t.settings),(function(e,n){return i("b",{key:n},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.settings[e].value,expression:"settings[key].value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.settings[e].value)?t._i(t.settings[e].value,null)>-1:t.settings[e].value},on:{change:[function(i){var n=t.settings[e].value,s=i.target,a=!!s.checked;if(Array.isArray(n)){var o=t._i(n,null);s.checked?o<0&&t.$set(t.settings[e],"value",n.concat([null])):o>-1&&t.$set(t.settings[e],"value",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(t.settings[e],"value",a)},function(i){return t.changeSetting(e)}]}}),t._v(t._s(t.settings[e].name))])])})),0):t._e()])])};a._withStripped=!0;const o=[{name:"M1907",url:"https://z1.m1907.cn/?jx=",title:"懒人专用,全网VIP***【作者懒蛤蛤】脚本的接口",intab:1},{name:"17云",url:"https://www.1717yun.com/jx/ty.php?url=",title:"M1907",intab:1},{name:"618G",url:"http://jx.618g.com/?url=",title:"618G",intab:1},{name:"玩的嗨",url:"http://tv.wandhi.com/go.html?url=",title:"综合接口,一键VIP*** 更新可用【作者mark zhang】脚本的接口",intab:0},{name:"搜你妹1",url:"https://www.sounm.com/?url=",title:"综合接口,VIP视频*** 更新可用【作者sonimei134】脚本的接口",intab:0},{name:"黑米",url:"https://www.myxin.top/jx/api/?url=",title:"黑米",intab:1},{name:"思古",url:"https://api.sigujx.com/?url=",title:"思古",intab:1},{name:"人人",url:"https://vip.mpos.ren/v/?url=",title:"人人",intab:1},{name:"石头解析",url:"https://jiexi.071811.cc/jx.php?url=",title:"手动点播放",intab:1},{name:"乐乐云",url:"https://660e.com/?url=",title:"乐乐云，未知效果",intab:1},{name:"石头解析",url:"https://jiexi.071811.cc/jx.php?url=",title:"手动点播放",intab:1},{name:"无名小站",url:"http://www.sfsft.com/admin.php?url=",title:"无名小站同源",intab:1},{name:"无名小站2",url:"http://www.wmxz.wang/video.php?url=",title:"转圈圈就换线路",intab:1},{name:"人人发布",url:"http://v.renrenfabu.com/jiexi.php?url=",title:"综合，多线路",intab:0}];function l(){return location.hostname.replace(/\./g,"")}function r(t,e){let i=l(),n=GM_getValue(t,{});n[i]=e,GM_setValue(t,n)}function u(t,e){let i=l();return GM_getValue(t,{})[i]||e}function c(t,e){return GM_getValue(t,e)}function p(t,e){GM_setValue(t,e)}var d={data:()=>({apis:[],defaultApis:[],myApis:[],settings:{openIntab:{value:0,name:"页内播放"},myApisFirst:{value:0,name:"我的API优先"},editApis:{value:0,name:"管理API"}},nav:"apis",topOffset:50}),methods:{moveY(t){let e=this.$refs.crackVIPSet,i=t.clientY-e.offsetTop;document.onmousemove=t=>{this.topOffset=t.clientY-i},document.onmouseup=t=>{r("topSet",this.topOffset),document.onmousemove=null,document.onmouseup=null}},quickJump(){this.jump(0)},jump(t){let e=this.apis[t].url+location.href;this.settings.openIntab.value&&this.apis[t].intab?this.$tele.$emit("updateSrc",e):window.open(e,"_blank")},changeSetting(t){p("Settings",this.settings),"editApis"==t?this.$tele.$emit("editApis",this.defaultApis):"myApisFirst"==t&&this.updateApis()},updateApis(){this.defaultApis=c("defaultApis",o),this.myApis=c("myApis",[]);c("Settings",{});this.settings.myApisFirst.value?this.apis=this.myApis.concat(this.defaultApis):this.apis=this.defaultApis.concat(this.myApis)}},computed:{styleTop(){return`top:${this.topOffset}px;`}},mounted:function(){this.$tele.$on("updateApis",()=>{this.updateApis()}),this.$nextTick(()=>{let t=u("topSet",50);this.topOffset=t,Object.assign(this.settings,c("Settings",{})),this.updateApis()})}};i(4);function m(t,e,i,n,s,a,o,l){var r,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),a&&(u._scopeId="data-v-"+a),o?(r=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=r):s&&(r=l?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),r)if(u.functional){u._injectStyles=r;var c=u.render;u.render=function(t,e){return r.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,r):[r]}return{exports:t,options:u}}var h=m(d,a,[],!1,null,null,null);h.options.__file="crackVip/src/main.vue";var v=h.exports,f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{ref:"intabPlayer",style:t.intabPlayerStyle,attrs:{id:"intabPlayer"}},[i("div",{attrs:{id:"bar"},on:{mousedown:t.move}},[i("button",{on:{click:function(e){t.sizeCode="small"}}},[t._v("🗕")]),t._v(" "),i("button",{on:{click:function(e){t.sizeCode="medium"}}},[t._v("🗗")]),t._v(" "),i("button",{on:{click:function(e){t.sizeCode="large"}}},[t._v("🗖")]),t._v(" "),i("button",{on:{click:function(e){t.sizeCode="fill"}}},[t._v("🗔")]),t._v(" "),i("button",{on:{click:t.fullScreen}},[t._v("🡧🡥")]),t._v(" "),i("button",{on:{click:t.closePlayer}},[t._v("🗙")])]),t._v(" "),i("iframe",{attrs:{src:t.src}})]):t._e()};f._withStripped=!0;var _={data:()=>({src:"",isShow:0,position:{left:100,top:100},sizeCode:"medium",size:{small:40,medium:65,large:90,fill:100}}),methods:{move(t){let e=this.$refs.intabPlayer,i=t.clientX-e.offsetLeft,n=t.clientY-e.offsetTop;document.onmousemove=t=>{this.position.left=t.clientX-i,this.position.top=t.clientY-n},document.onmouseup=t=>{r("intabPosition",this.position),document.onmousemove=null,document.onmouseup=null}},fullScreen(){!function(t){t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullScreen?t.webkitRequestFullScreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen()}(this.$refs.intabPlayer)},closePlayer(){this.src="",this.isShow=0}},computed:{intabPlayerStyle(){let t,e,i="";return"fill"==this.sizeCode?(t=window.innerWidth+"px",e=window.innerHeight+"px",i="left: 0; top: -35px;"):(t=this.size[this.sizeCode]+"%",e=this.size[this.sizeCode]/100*.65*window.innerWidth+"px"),`left:${this.position.left}px;top:${this.position.top}px;width:${t};height:${e};${i}`}},mounted:function(){this.$nextTick(()=>{this.$tele.$on("updateSrc",t=>{this.src=t,this.isShow=1});let t=u("intabPosition",{left:100,top:100});this.position=t})}},b=(i(5),m(_,f,[],!1,null,null,null));b.options.__file="crackVip/src/intabPlayer.vue";var g=b.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.isShow?i("div",{attrs:{id:"editApis"}},[i("div",[i("button",{staticClass:"bigger",on:{click:t.saveApis}},[t._v("保存")]),t._v(" "),i("button",{staticClass:"bigger",on:{click:t.closeEdit}},[t._v("关闭")])]),t._v(" "),t._l(t.defaultApis.apis,(function(e,n){return i("li",{key:"default"+n},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"api.name"}],staticClass:"short",attrs:{placeholder:"名称"},domProps:{value:e.name},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"api.url"}],staticClass:"long",attrs:{placeholder:"API地址"},domProps:{value:e.url},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"url",i.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"api.title"}],staticClass:"short",attrs:{placeholder:"备注"},domProps:{value:e.title},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"title",i.target.value)}}}),t._v(" "),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.intab,expression:"api.intab"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.intab)?t._i(e.intab,null)>-1:e.intab},on:{change:function(i){var n=e.intab,s=i.target,a=!!s.checked;if(Array.isArray(n)){var o=t._i(n,null);s.checked?o<0&&t.$set(e,"intab",n.concat([null])):o>-1&&t.$set(e,"intab",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"intab",a)}}}),t._v("页内播放")]),t._v(" "),i("button",{on:{click:function(e){return t.testApi(n,1)}}},[t._v("测试")]),t._v(" "),i("button",{on:{click:function(e){return t.addApi(n,1)}}},[t._v("增加")]),t._v(" "),i("button",{on:{click:function(e){return t.deleteApi(n,1)}}},[t._v("删除")])])})),t._v(" "),i("hr"),t._v(" "),t._l(t.myApis.apis,(function(e,n){return i("li",{key:"my"+n},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"api.name"}],staticClass:"short",attrs:{placeholder:"名称"},domProps:{value:e.name},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"name",i.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"api.url"}],staticClass:"long",attrs:{placeholder:"API地址"},domProps:{value:e.url},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"url",i.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"api.title"}],staticClass:"short",attrs:{placeholder:"备注"},domProps:{value:e.title},on:{change:function(e){t.isChanged=1},input:function(i){i.target.composing||t.$set(e,"title",i.target.value)}}}),t._v(" "),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:e.intab,expression:"api.intab"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.intab)?t._i(e.intab,null)>-1:e.intab},on:{change:function(i){var n=e.intab,s=i.target,a=!!s.checked;if(Array.isArray(n)){var o=t._i(n,null);s.checked?o<0&&t.$set(e,"intab",n.concat([null])):o>-1&&t.$set(e,"intab",n.slice(0,o).concat(n.slice(o+1)))}else t.$set(e,"intab",a)}}}),t._v("页内播放")]),t._v(" "),i("button",{on:{click:function(e){return t.testApi(n,0)}}},[t._v("测试")]),t._v(" "),i("button",{on:{click:function(e){return t.addApi(n,0)}}},[t._v("增加")]),t._v(" "),i("button",{on:{click:function(e){return t.deleteApi(n,0)}}},[t._v("删除")])])}))],2):t._e()};y._withStripped=!0;var A={data:()=>({isShow:0,isChanged:0,defaultApis:{apis:[]},myApis:{apis:[]}}),methods:{saveApis(){let t=this.defaultApis.apis.filter(t=>{if(t.url)return t}),e=this.myApis.apis.filter(t=>{if(t.url)return t});p("defaultApis",t),p("myApis",e),this.$tele.$emit("updateApis",0),setTimeout(()=>{this.isShow=0,this.isChanged=0},500)},closeEdit(){if(this.isChanged){if(!confirm("有改动，未保存就关闭吗?"))return!1;this.isShow=0,this.isChanged=0}else this.isShow=0,this.isChanged=0},testApi(t,e){let i=e?this.defaultApis.apis[t].url:this.myApis.apis[t].url;window.open(i+location.href,"_blank")},addApi(t,e){let i={name:"",url:"",title:"",intab:0};e?this.defaultApis.apis.splice(t+1,0,i):this.myApis.apis.splice(t+1,0,i)},deleteApi(t,e){e?this.defaultApis.apis.splice(t,1):this.myApis.apis.splice(t,1)}},mounted:function(){this.$nextTick(()=>{this.$tele.$on("editApis",t=>{this.defaultApis.apis=c("defaultApis",t);let e=c("myApis",[]);this.myApis.apis=e.length?e:[{name:"",url:"",title:"",intab:0}],this.isShow=1})})}},w=(i(6),m(A,y,[],!1,null,"5740177c",null));w.options.__file="crackVip/src/editApis.vue";var k=w.exports;s.a.prototype.$tele=new s.a;let $=document.createElement("div");$.id="intabPlayerDiv",document.body.appendChild($),new s.a({el:"#intabPlayerDiv",render:t=>t(g)});let x=document.createElement("div");x.id="crackVIPSet",document.body.appendChild(x),new s.a({el:"#crackVIPSet",render:t=>t(v)});let S=document.createElement("div");S.id="editApis",document.body.appendChild(S),new s.a({el:"#editApis",render:t=>t(k)})}]);
function addStyle(cssText){let a=document.createElement("style"),doc;a.textContent=cssText,(document.head||document.documentElement).appendChild(a)}
addStyle(`body{padding:0;margin:0}#crackVIPSet{z-index:999999;position:fixed;display:grid;grid-template-columns:30px 150px;width:30px;height:50px;overflow:hidden;padding:5px 0 5px 0;opacity:.4}#crackVIPSet button{cursor:pointer}#crackVIPSet:hover{width:180px;height:300px;padding:5px 5px 5px 0;opacity:1}#crackVIPSet #nav{display:grid;grid-auto-rows:50px 50px 200px;grid-row-gap:5px}#crackVIPSet #nav [name=quickJump]:active{cursor:move}#crackVIPSet #nav button{background:orange;color:#fff;font-size:20px;padding:0;border:0;cursor:pointer;border-radius:0 5px 5px 0}#crackVIPSet #list{overflow:auto;margin-left:2px}#crackVIPSet #list b{display:block;cursor:pointer;color:#fff;font-weight:400;font-size:14px;padding:5px;background-color:orange;border-bottom:1px dashed #fff}#crackVIPSet #list b:before{content:attr(data-icon);padding-right:5px}#crackVIPSet #list b:first-child{border-radius:5px 5px 0 0}#crackVIPSet #list b:last-child{border-radius:0 0 5px 5px}#crackVIPSet #list b:hover{background-color:#333}button{cursor:pointer}#intabPlayer{z-index:999998;position:fixed;display:block;overflow:hidden;resize:both}#intabPlayer #bar{visibility:hidden;position:relative;top:40px;left:5px}#intabPlayer:hover #bar{visibility:visible;cursor:move}#intabPlayer #bar button{border:0;color:#fff;background:orange;padding:0 10px;font-size:20px;line-height:35px}#intabPlayer #bar button:hover{background:red}#intabPlayer iframe{width:100%;height:100%;border:0;background-color:#333}#editApis[data-v-5740177c]{z-index:999999;position:fixed;top:0;width:100%;padding:20px 5px;background:#eee;text-align:center}#editApis li[data-v-5740177c]{list-style-type:none;display:block}#editApis input[data-v-5740177c]{border:1px solid #999;padding:3px 5px;margin:2px;border-radius:3px}#editApis .short[data-v-5740177c]{width:100px}#editApis .long[data-v-5740177c]{width:250px}#editApis button[data-v-5740177c]{display:inline-block;padding:3px;margin:2px;color:#fff;background:orange;border:0}#editApis .bigger[data-v-5740177c]{font-size:20px;padding:5px 10px}`);
