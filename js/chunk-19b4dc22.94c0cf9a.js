(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b4dc22"],{"063c":function(t,a,i){"use strict";var s=i("1875"),e=i.n(s);e.a},"16c5":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".hospital .hospitals{padding:0 .32rem;margin-top:.533333rem}.hospital .hospital-item{margin-bottom:.533333rem;background-color:#fff;overflow:hidden}.hospital .hospital-item:last-child{margin-bottom:0}.hospital .hospital-item .hospital-cover img{width:100%;height:4.266667rem}.hospital .hospital-item .hospital-body{clear:both;padding:.213333rem .32rem .426667rem;overflow:hidden}.hospital .hospital-item .hospital-body .level{color:#00a9d6;font-size:.32rem;font-weight:500;margin:.053333rem 0 .106667rem}.hospital .hospital-item .hospital-meta-tags{margin-top:.32rem;font-size:.32rem}.hospital .hospital-item .hospital-meta-tags div{float:left}.hospital .hospital-item .hospital-meta-tags div.address{opacity:.4}.hospital .hospital-item .tag-logo img{height:.48rem;margin-right:.213333rem}",""])},1875:function(t,a,i){var s=i("16c5");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("499e").default;e("7f1e974e",s,!0,{sourceMap:!1,shadowMode:!1})},"8ecc":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"hospital"},[i("div",{staticClass:"hospitals mb"},t._l(t.hospitalData,function(a){return i("div",{key:a.id,staticClass:"hospital-item",on:{click:function(i){return t.changeMeal(a)}}},[i("div",{staticClass:"hospital-cover"},[i("img",{attrs:{src:a.headImg}})]),i("div",{staticClass:"hospital-body"},[i("div",{staticClass:"hospital-meta-title"},[t._v(t._s(a.title))]),i("div",{staticClass:"level"},[t._v(t._s(a.level))]),i("p",[t._v(t._s(a.detail))]),i("div",{staticClass:"hospital-meta-tags"},[i("div",{staticClass:"tag-logo"},[i("img",{attrs:{src:a.logo}})]),i("div",{staticClass:"address"},[t._v(t._s(a.address))])])])])}),0)])},e=[],o={name:"hospital",data:function(){return{swiperData:[],swiperOption:{slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}},hospitalSwiperData:[],hospitalData:[],publicPath:"/"}},created:function(){l(this),r(this),this.$emit("handlerTabbar",!0)},methods:{changeCarousel:function(t){if("index"==t.type)switch(t.index){case 0:this.$router.push({path:"meal"});break;case 1:this.$router.push({path:"healthy"});break;case 2:this.$router.push({path:"example"});break}},changeMeal:function(t){console.log(t),this.$router.push({path:"meal",query:{id:t.id}})}}};function l(t,a){t.$request.carousel(a,function(a){if(1===a.data.code){var i=a.data.data;t.swiperData=i.list.index}})}function r(t,a){t.$request.hospital(a,function(a){if(1===a.data.code){var i=a.data.data;t.hospitalData=i.list}})}var h=o,p=(i("063c"),i("2877")),n=Object(p["a"])(h,s,e,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-19b4dc22.94c0cf9a.js.map