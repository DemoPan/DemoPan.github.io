(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fdb3022"],{"1b25":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-footer",on:{click:function(e){return t.back()}}},[a("span",[t._v(t._s(t.data.content))]),a("i")])},o=[],s={props:["data"],methods:{back:function(){this.$router.go("-1")}}},i=s,r=(a("bfe5"),a("2877")),c=Object(r["a"])(i,n,o,!1,null,"e1e71cde",null);e["a"]=c.exports},"6db1":function(t,e,a){},"71be":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content-detail hospital-detail"},[a("div",{staticClass:"detail-info"},[a("h1",{staticClass:"name"},[t._v(t._s(t.sourceDate.name))]),a("div",[a("img",{attrs:{src:t.sourceDate.headimg}})]),t._l(t.sourceDate.content,function(e){return a("p",[t._v(t._s(e))])})],2),a("DetailFooter",{attrs:{data:t.detailFooter}})],1)},o=[],s=a("1b25"),i={name:"hospital-detail",components:{DetailFooter:s["a"]},data:function(){return{sourceDate:{},detailFooter:{content:"更多合作医院"}}},mounted:function(){var t=this;if(sessionStorage.hospital){var e=JSON.parse(sessionStorage.hospital);e.map(function(e){e.id==t.$route.query.id&&(t.sourceDate=e)})}},methods:{}},r=i,c=(a("8a1f"),a("2877")),u=Object(c["a"])(r,n,o,!1,null,"9102477e",null);e["default"]=u.exports},"8a1f":function(t,e,a){"use strict";var n=a("6db1"),o=a.n(n);o.a},a459:function(t,e,a){},bfe5:function(t,e,a){"use strict";var n=a("a459"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-4fdb3022.e8599b8e.js.map