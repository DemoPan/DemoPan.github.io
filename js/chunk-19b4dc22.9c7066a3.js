(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19b4dc22"],{"063c":function(t,a,i){"use strict";var s=i("1875"),o=i.n(s);o.a},"16c5":function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".hospital .hospitals{padding:0 .32rem;margin-top:.533333rem}.hospital .hospital-item{margin-bottom:.533333rem;background-color:#fff;overflow:hidden}.hospital .hospital-item:last-child{margin-bottom:0}.hospital .hospital-item .hospital-cover img{width:100%;height:4.266667rem}.hospital .hospital-item .hospital-body{clear:both;padding:.213333rem .32rem .426667rem;overflow:hidden}.hospital .hospital-item .hospital-body .level{color:#00a9d6;font-size:.32rem;font-weight:500;margin:.053333rem 0 .106667rem}.hospital .hospital-item .hospital-meta-tags{margin-top:.32rem;font-size:.32rem}.hospital .hospital-item .hospital-meta-tags div{float:left}.hospital .hospital-item .hospital-meta-tags div.address{opacity:.4}.hospital .hospital-item .tag-logo img{height:.48rem;margin-right:.213333rem}",""])},1875:function(t,a,i){var s=i("16c5");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var o=i("499e").default;o("7f1e974e",s,!0,{sourceMap:!1,shadowMode:!1})},"8ecc":function(t,a,i){"use strict";i.r(a);var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"hospital"},[i("Titlebar"),i("Carousel",{attrs:{options:t.swiperOption,data:t.hospitalSwiperData}}),i("div",{staticClass:"hospitals mb"},t._l(t.hospitalData,function(a){return i("div",{key:a.id,staticClass:"hospital-item"},[i("div",{staticClass:"hospital-cover"},[i("img",{attrs:{src:a.headImg}})]),i("div",{staticClass:"hospital-body"},[i("div",{staticClass:"hospital-meta-title"},[t._v(t._s(a.title))]),i("div",{staticClass:"level"},[t._v(t._s(a.level))]),i("p",[t._v(t._s(a.detail))]),i("div",{staticClass:"hospital-meta-tags"},[i("div",{staticClass:"tag-logo"},[i("img",{attrs:{src:a.logo}})]),i("div",{staticClass:"address"},[t._v(t._s(a.address))])])])])}),0)],1)},o=[],e=i("4ec4"),l=i("3693"),r={name:"hospital",components:{Titlebar:e["a"],Carousel:l["a"]},data:function(){return{swiperOption:{slidesPerView:"auto",pagination:{el:".swiper-pagination",clickable:!0}},hospitalSwiperData:[],hospitalData:[],publicPath:"/"}},created:function(){p(this),h(this)}};function p(t,a){t.$request.carousel(a,function(a){if(1===a.data.code){var i=a.data.data;t.hospitalSwiperData=i.list.hospital}})}function h(t,a){t.$request.hospital(a,function(a){if(1===a.data.code){var i=a.data.data;t.hospitalData=i.list}})}var n=r,c=(i("063c"),i("2877")),d=Object(c["a"])(n,s,o,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-19b4dc22.9c7066a3.js.map