(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20bb2e84"],{1433:function(e,t,a){"use strict";var i=a("bc22"),l=a.n(i);l.a},bc22:function(e,t,a){var i=a("cc2c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var l=a("499e").default;l("9d49c78e",i,!0,{sourceMap:!1,shadowMode:!1})},cc2c:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".item .meal{padding:1.626667rem .32rem .533333rem;background-repeat:no-repeat;background-size:100%}.item .meal .hospital{margin-bottom:.32rem}.item .meal .hospital .logo img{height:.48rem}.item .meal .hospital .title{font-size:.426667rem;font-weight:500;color:#fff;margin-top:.213333rem;margin-bottom:.053333rem}.item .meal .level{font-size:.32rem;color:#fff}.item .set-meal{margin-bottom:.32rem}.item .set-meal:last-child{margin-bottom:0}",""])},ec51:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item"},e._l(e.serverMeal,function(t){return a("div",{key:t.id,staticClass:"meal",style:{backgroundImage:"url("+t.headImg+")"}},[a("div",{staticClass:"hospital"},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.headLogo}})]),a("div",{staticClass:"title"},[e._v(e._s(t.hospital))]),a("div",{staticClass:"level"},[e._v(e._s(t.level))])]),e._l(t.meal,function(t){return a("Setmeal",{key:t.id,attrs:{data:t},on:{changeMeal:e.changeMeal}})})],2)}),0)},l=[],r=a("071c"),s=(a("371a"),{name:"meal",components:{Setmeal:r["a"]},data:function(){return{serverMeal:[]}},created:function(){o(this),this.$emit("handlerTabbar",!0)},methods:{changeMeal:function(e){this.$emit("handlerTabbar",!1),this.$router.push({path:"meal-detail",query:{id:e.id}})}}});function o(e,t){e.$request.serverMeal(t,function(t){if(1===t.data.code){var a=t.data.data;e.serverMeal=a.list}})}var n=s,c=(a("1433"),a("2877")),m=Object(c["a"])(n,i,l,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-20bb2e84.af2985e5.js.map