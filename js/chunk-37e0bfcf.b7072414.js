(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37e0bfcf"],{"5f1d":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"healthy"},[e("Titlebar"),e("div",{staticClass:"carousel mb"},[e("img",{attrs:{src:t.carousel}})]),e("div",{staticClass:"healthy-list"},[e("List",{attrs:{data:t.healthyData},on:{changeItem:t.changeItem}})],1)],1)},n=[],i=e("4ec4"),h=e("2e90"),l={components:{Titlebar:i["a"],List:h["a"]},data:function(){return{healthyData:[],carousel:"".concat("/","images/healthy/healthy_banner.png")}},mounted:function(){r(this),this.$emit("handlerTabbar",!1)},methods:{changeItem:function(t){this.$router.push({path:"healthy-detail",query:{id:t.id}})}}};function r(t,a){t.$request.healthy(a,function(a){if(1===a.data.code){var e=a.data.data;t.healthyData=e.list}})}var c=l,o=(e("eead"),e("2877")),u=Object(o["a"])(c,s,n,!1,null,null,null);a["default"]=u.exports},"9aeb":function(t,a,e){a=t.exports=e("2350")(!1),a.push([t.i,".healthy .carousel{height:3.653333rem}.healthy .carousel img{width:100%}.healthy .healthy-list{padding:0 .32rem;margin-bottom:.533333rem}",""])},dd19:function(t,a,e){var s=e("9aeb");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=e("499e").default;n("7aeb0b46",s,!0,{sourceMap:!1,shadowMode:!1})},eead:function(t,a,e){"use strict";var s=e("dd19"),n=e.n(s);n.a}}]);
//# sourceMappingURL=chunk-37e0bfcf.b7072414.js.map