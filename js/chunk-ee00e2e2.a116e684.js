(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee00e2e2"],{1756:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".about .carousel{height:3.2rem;overflow:hidden}.about .carousel img{width:100%;height:100%}.about .about-taipu{padding:.533333rem .32rem;background:#fff;padding-bottom:.533333rem;line-height:.586667rem}.about .companys{padding:0 .32rem .853333rem;background-color:#fff}.about .companys .company-item{margin-bottom:.533333rem}.about .companys .company-item img{width:100%;height:3.2rem}.about .companys .company-item .title{margin-top:.213333rem;margin-bottom:.053333rem;font-size:.4rem;font-weight:500}.about .companys .company-item:last-child{margin-bottom:0}.about .tp-artical-server .sv{overflow:hidden}.about .tp-artical-server .sv div{width:100%;height:2.346667rem;overflow:hidden;float:left}.about .tp-artical-server .sv div.e{margin-bottom:.08rem;background:url(/images/server/e.png);background-size:100%}.about .tp-artical-hospital{padding:.533333rem .32rem .853333rem}.about .tp-artical-hospital .hospitals .hospital-item:last-child{margin-bottom:0}.about .tp-artical-hospital .hospitals .hospital-title{font-size:.4rem;font-weight:500;margin-bottom:.213333rem}.about .tp-artical-hospital .hospitals .hospital-meta{background-color:#fff;overflow:hidden;padding:.32rem}.about .tp-artical-hospital .hospitals .description{margin-top:.426667rem;margin-bottom:.213333rem}.about .tp-artical-hospital .hospitals .cover{width:100%;height:1.6rem;background:-webkit-linear-gradient(226deg,#6c00ff,#00a9d6);background:linear-gradient(226deg,#6c00ff,#00a9d6);padding:.533333rem .64rem}.about .tp-artical-hospital .hospitals .cover img{height:.586667rem}.about .tp-artical-hospital .hospitals .cover span{display:inline-block;height:.586667rem;border-left:.026667rem solid #bfb8b8;margin-left:.533333rem;margin-right:.533333rem}.about .tp-artical-hospital .hospitals .authentication img{width:100%;height:3.466667rem}",""])},b9e7:function(t,a,i){var e=i("1756");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("499e").default;s("15359de9",e,!0,{sourceMap:!1,shadowMode:!1})},f26d:function(t,a,i){"use strict";var e=i("b9e7"),s=i.n(e);s.a},f820:function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"about"},[i("div",{staticClass:"carousel"},[i("img",{attrs:{src:t.carousel}})]),t._m(0),i("div",{staticClass:"companys mb"},t._l(t.companyData,function(a){return i("div",{key:a.id,staticClass:"company-item"},[i("div",{staticClass:"company-cover"},[i("img",{attrs:{src:a.headImg}})]),i("div",{staticClass:"company-meta"},[i("div",{staticClass:"title"},[t._v(t._s(a.title))]),i("p",[t._v(t._s(a.address))])])])}),0),i("div",{staticClass:"tp-artical tp-artical-server"},[t._m(1),i("Service",{attrs:{data:t.service},on:{changeService:t.changeService}})],1),i("div",{staticClass:"tp-artical tp-artical-hospital"},[t._m(2),i("div",{staticClass:"hospitals"},t._l(t.hospitalData,function(a){return i("div",{key:a.id,staticClass:"hospital-item mb"},[i("div",{staticClass:"hospital-title"},[i("i",{staticClass:"bar"}),t._v(" "+t._s(a.title))]),i("div",{staticClass:"hospital-meta"},[i("div",{staticClass:"cover"},[i("img",{attrs:{src:a.headLogo}}),i("span"),i("img",{attrs:{src:t.logo}})]),i("p",{staticClass:"description"},[t._v(t._s(a.description))])])])}),0)])])},s=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"about-taipu"},[i("div",[t._v("泰璞健康由泰璞日本与日本高端医疗机构合作，是集日本健康咨询与旅游咨询一体的服务机构，为您提供专业、全面、定制化医疗咨询服务。")]),i("p",[t._v("泰璞（上海）电子商务股份有限公司成立于2008年，总部位于上海，在东京、香港、北京、青岛等地均设有分公司。")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"header-name"},[i("div",{staticClass:"zh"},[t._v("服务项目")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"header-name"},[i("div",{staticClass:"zh"},[t._v("合作医院")])])}],o=i("1ad4"),r={name:"about",components:{Service:o["a"]},data:function(){return{companyData:[],service:[],hospitalData:[],carousel:"".concat("/","images/about/about_carousel.png"),logo:"".concat("/","images/logo.png")}},created:function(){c(this),n(this),l(this)},methods:{changeService:function(t){this.$emit("handlerTabbar",!1),sessionStorage.detail=JSON.stringify(t.item),this.$router.push({path:"service",query:{type:t.path,id:t.item.id}})}}};function c(t,a){t.$request.company(a,function(a){if(1===a.data.code){var i=a.data.data;t.companyData=i.list}})}function n(t,a){t.$request.service(a,function(a){if(1===a.data.code){var i=a.data.data;t.service=i.list}})}function l(t,a){t.$request.hospital(a,function(a){if(1===a.data.code){var i=a.data.data;t.hospitalData=i.list}})}var d=r,m=(i("f26d"),i("2877")),p=Object(m["a"])(d,e,s,!1,null,null,null);a["default"]=p.exports}}]);
//# sourceMappingURL=chunk-ee00e2e2.a116e684.js.map