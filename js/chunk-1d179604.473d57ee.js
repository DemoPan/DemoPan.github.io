(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d179604"],{"0d1f":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".details{padding:.533333rem .32rem;background-color:#fff}.details .imgs.imgs-width-1 img{width:100%;float:left;margin-left:2.5%}.details .imgs.imgs-width-1 img:first-child{margin-left:0}.details .imgs.imgs-width-2 img{width:48.75%;float:left;margin-left:2.5%}.details .imgs.imgs-width-2 img:first-child{margin-left:0}.details .imgs.imgs-width-3 img{width:31.66667%;float:left;margin-left:2.5%}.details .imgs.imgs-width-3 img:first-child{margin-left:0}.details .imgs.imgs-width-4 img{width:23.125%;float:left;margin-left:2.5%}.details .imgs.imgs-width-4 img:first-child{margin-left:0}.details .day-price{text-align:right;color:#da2f2f;margin-bottom:.4rem}.details div[class^=dsc-]{margin-bottom:.266667rem;overflow:hidden;text-align:justify}.details .font-center{text-align:center}.details .font-medium{font-weight:500}.details .font-14{font-size:.373333rem}.details .dsc-txt{font-size:.32rem;line-height:.533333rem}.details .table{display:table;width:100%;border:.026667rem solid rgba(20,20,20,.2)}.details .table .th,.details .table .tr{display:table-row}.details .table .th div,.details .table .tr div{display:table-cell;vertical-align:middle;padding:.266667rem;font-size:.32rem}.details .table .th div:first-child{width:40%;background:#a397de;color:#555}.details .table .th div:nth-of-type(2){width:20%;background:#c13229;color:#fff}.details .table .th div:last-child{width:40%;background:#c6e0b3;color:#555}.details .table .tr div:nth-of-type(2){width:20%;background:#f3ae81;color:#fff}.details .table .tr div:first-child,.details .table .tr div:last-child{text-align:justify}",""])},"1fb7":function(t,e,i){var a=i("f86c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("1f20f454",a,!0,{sourceMap:!1,shadowMode:!1})},"337d":function(t,e,i){var a=i("0d1f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var s=i("499e").default;s("1bce8a70",a,!0,{sourceMap:!1,shadowMode:!1})},"6ab7":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},t._l(t.data,function(e){return i("div",{class:["dsc-"+e.type]},["img"==e.type?i("div",{class:["imgs","imgs-width-"+e.content.length]},t._l(e.content,function(t){return i("img",{attrs:{src:t}})}),0):t._e(),"txt"==e.type?i("div",t._l(e.content,function(e){return i("span",{class:[e.color&&"font-color-"+e.color,e.indent&&"font-indent-"+e.indent,e.size&&"font-"+e.size,{"font-medium":"medium"==e.font}]},["router-link"!=e.target?i("a",{attrs:{href:e.url}},[t._v(t._s(e.content))]):t._e(),"router-link"==e.target?i("router-link",{attrs:{tag:"a",to:{path:e.url}}},[t._v(t._s(e.content))]):t._e()],1)}),0):t._e(),"table"==e.type?i("div",{staticClass:"table"},[i("div",{staticClass:"th"},t._l(e.content.th,function(e){return i("div",{class:[e.align&&"font-"+e.align,"medium"==e.font&&"font-medium"]},[t._v(t._s(e.content))])}),0),i("div",{staticClass:"tr"},t._l(e.content.tr,function(e){return i("div",{class:[e.align&&"font-"+e.align,"medium"==e.font&&"font-medium"]},[t._v(t._s(e.content))])}),0)]):t._e()])}),0)},s=[],r={props:["data"],data:function(){return{sourceData:{}}}},l=r,n=(i("b1dd"),i("2877")),o=Object(n["a"])(l,a,s,!1,null,null,null);e["a"]=o.exports},b1dd:function(t,e,i){"use strict";var a=i("337d"),s=i.n(a);s.a},c548:function(t,e,i){"use strict";var a=i("1fb7"),s=i.n(a);s.a},e05e:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"services"},[i("div",{staticClass:"title"},[t._v(t._s(t.sourceData.title))]),i("Detail",{attrs:{data:t.sourceData.details}}),"experience"==t.$route.query.type?i("div",{staticClass:"server-meal"},[i("div",{staticClass:"server-meal-title"},[t._v(t._s(t.language.taipu_services_examination))]),t._l(t.experience,function(e){return i("div",{staticClass:"hospital"},[i("div",{staticClass:"hospital-name"},[i("i",{staticClass:"bar bar-blue"}),t._v(" "+t._s(e.hospital))]),i("div",{staticClass:"ul"},t._l(e.data,function(e){return i("router-link",{attrs:{tag:"a",to:{name:"meal-detail",query:{id:e.id}}}},[t._v(t._s(e.title)+" ☜")])}),1)])})],2):t._e(),"regenerate"==t.$route.query.type?i("div",{staticClass:"server-meal"},[i("div",{staticClass:"server-meal-title"},[t._v(t._s(t.language.taipu_services_cosmetology))]),t._l(t.regenerate,function(e){return i("div",{staticClass:"hospital"},[i("div",{staticClass:"hospital-name"},[i("i",{staticClass:"bar bar-blue"}),t._v(" "+t._s(e.hospital))]),t._l(e.data,function(e,a){return i("div",{staticClass:"hospital-meal"},t._l(e.data,function(a){return i("div",{staticClass:"ul"},[i("router-link",{attrs:{tag:"a",to:{name:"mdetail",query:{id:a.id}}}},[t._v("【"+t._s(e.title)+"】 "+t._s(a.title)+" ☜")])],1)}),0)})],2)})],2):t._e(),"cosmetology"==t.$route.query.type?i("div",{staticClass:"server-meal"},[i("div",{staticClass:"server-meal-title"},[t._v(t._s(t.language.taipu_services_regenerate))]),t._l(t.cosmetology,function(e){return i("div",{staticClass:"hospital"},[i("div",{staticClass:"hospital-name"},[i("i",{staticClass:"bar bar-blue"}),t._v(" "+t._s(e.hospital))]),i("div",{staticClass:"ul"},t._l(e.data,function(e){return i("router-link",{attrs:{tag:"a",to:{name:"mdetail",query:{id:e.id}}}},[t._v(t._s(e.title)+" ☜")])}),1)])})],2):t._e()],1)},s=[],r=(i("7f7f"),i("6ab7")),l={44:window.language.anti_aging_care_beauty+"（"+window.language.beauty_medical_equipment+"）",48:window.language.injection_therapy},n=function(t,e){var i=[],a=!1;if(t.meal.map(function(t){t.status==e&&(i.push(t),a=!0)}),a)var s={hospital:t.hospital,data:i};return s},o={components:{Detail:r["a"]},data:function(){return{language:{},experience:[],regenerate:[],cosmetology:[]}},created:function(){this.language=window.language,this.sourceData=JSON.parse(sessionStorage.getItem("detail")),d(this)},mounted:function(){this.$emit("handlerTabbar",!1)}};function d(t,e){t.$request.serverMeal(e,function(e){if(1===e.data.code){var i=e.data.data;t.serverMeal=i.list,i.list.map(function(e){if("experience"==t.$route.query.type&&n(e,1)&&t.experience.push(n(e,1)),"regenerate"==t.$route.query.type){var i=[],a=!1;for(var s in l)i.push({title:l[s],data:[]});var r=[];if(e.meal.map(function(t){l[e.id+""+t.status]&&(r.push({title:l[e.id+""+t.status],item:t}),a=!0)}),a){r.map(function(t){i.map(function(e){t.title==e.title&&e.data.push(t.item)})});var o={hospital:e.hospital,data:i};t.regenerate.push(o)}}"cosmetology"==t.$route.query.type&&n(e,2)&&t.cosmetology.push(n(e,2))})}})}var c=o,u=(i("c548"),i("2877")),m=Object(u["a"])(c,a,s,!1,null,null,null);e["default"]=m.exports},f86c:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".services{overflow:hidden;margin-bottom:.533333rem}.services .title{font-size:.48rem;font-weight:500;padding:.533333rem 0;text-align:center;background:#fff}.services .server-meal{background:#fefefe;margin-top:.533333rem;font-size:.32rem}.services .server-meal .hospital-name,.services .server-meal .server-meal-title{font-weight:500}.services .server-meal .server-meal-title{font-size:.426667rem;text-align:center;background-image:-webkit-linear-gradient(bottom,#f7f7f2,#fff);padding:.32rem 0}.services .server-meal .hospital{padding:.266667rem .32rem}.services .server-meal .hospital-meal{margin-bottom:.266667rem}.services .server-meal .hospital-name{font-size:.373333rem;margin-top:.266667rem;margin-bottom:.133333rem;color:#7f7f7f}.services .server-meal .ul{background:#fff}.services .server-meal .ul a{display:block;font-size:.373333rem;line-height:.746667rem;padding:0 .346667rem;text-decoration:none;color:#7f7f7f}",""])}}]);
//# sourceMappingURL=chunk-1d179604.473d57ee.js.map