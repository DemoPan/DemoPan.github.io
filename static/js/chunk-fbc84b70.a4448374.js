(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbc84b70"],{"028c":function(e){e.exports={code:0,data:{list:[{id:1,headimg:"../img/server/tab_item_1.png",name:"为什么商界强人选择双重血...",content:"今年50岁的张女士（化名），是一位实打实的女强人。工作上作为公司…",dateTime:"2017.12.19"},{id:2,headimg:"./img/server/tab_item_2.png",name:"中国贵宾在日本东京表参道...",content:"自从在日本做了干细胞美容之后，王女士不仅肤嫩脸润，更好像变…",dateTime:"2018.08.27"},{id:3,headimg:"./img/server/tab_item_3.png",name:"尝试马云在东京做的体检，…",content:"身为国内中坚民企的老总，我几乎把所有的精力都放在了工作上。企业…",dateTime:"2017.12.19"}],page:1,next:!1}}},"1d74":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content-body server"},[a("CompanyBar"),a("div",{staticClass:"company-bar"}),a("div",{staticClass:"server-body"},[a("CompanyHeader",{attrs:{companySwiper:e.companySwiper}}),a("div",{staticStyle:{height:"8px",background:"#eee"}}),a("div",{staticClass:"server-body-items"},e._l(e.items,function(t){return a("div",{staticClass:"server-body-item",on:{click:function(a){return e.changeItem(t)}}},[a("img",{attrs:{src:t.headimg}}),a("div",{staticClass:"img-info"},[a("h3",[e._v(e._s(t.name))]),a("div",{staticClass:"item-info"},[e._v(e._s(t.content))]),a("div",{staticClass:"time"},[e._v(e._s(t.dateTime))])])])}),0)],1)],1)},i=[],s=(a("cadf"),a("551c"),a("f751"),a("097d"),a("bc3a")),r=a.n(s),c=a("4328"),o=a.n(c),d=(a("2ef0"),a("8f75")),m=a("5c9a"),l=a("028c"),p={name:"server",props:["from"],components:{CompanyBar:d["a"],CompanyHeader:m["a"]},data:function(){return{companySwiper:{titleName:"服务案例",titleInfo:"权威、专业、全面的医疗咨询服务",className:"server"},tabs:["精密体验","血液净化","干细胞抗衰"],tabIndex:0,items:l.data.list,scrollNext:!0,returnRes:{}}},mounted:function(){},methods:{onInfinite:function(){this.scrollNext?f(this,{}):this.$refs.scroller&&this.$refs.scroller.finishInfinite()},changeItem:function(e){this.$router.push({name:"server-detail",path:"server-detail",query:{id:e.id}})}}};function f(e,t){r.a.get(e.$api.tiyan+o.a.stringify(t),{headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:3e5}).then(function(t){var a=t.data;0===a.code&&(e.items=a.data.list)}).catch(function(e){e.response&&e.response.data&&e.response.data.code&&alert(e.response.data.msg)})}var u=p,v=(a("a3f8"),a("2877")),h=Object(v["a"])(u,n,i,!1,null,"7c840884",null);t["default"]=h.exports},"55b7":function(e,t,a){},a3f8:function(e,t,a){"use strict";var n=a("55b7"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-fbc84b70.a4448374.js.map