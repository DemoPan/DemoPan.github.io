(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a5a0f80"],{"584a":function(t,a){var i=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=i)},"72c8":function(t,a,i){},"8ecc":function(t,a,i){"use strict";i.r(a);var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"page-content-body hospital"},[i("CompanyBar"),i("div",{staticClass:"company-bar"}),i("div",{staticClass:"hospital-body"},[i("CompanyHeader",{attrs:{companySwiper:t.companySwiper}}),i("div",{staticClass:"hospital-body-items"},t._l(t.items,function(a){return i("router-link",{staticClass:"hospital-body-item",attrs:{tag:"div",to:{path:"/hospital-detail",query:{id:a.id}}}},[i("img",{attrs:{src:a.headimg}}),i("div",{staticClass:"img-info"},[i("h2",[t._v(t._s(a.name))]),i("div",{staticClass:"item-info"},[t._v(t._s(a.content[0]))])])])}),1)],1)],1)},n=[],s=i("f499"),o=i.n(s),l=i("bc3a"),r=i.n(l),c=i("4328"),p=i.n(c),d=i("8f75"),m=i("5c9a"),h=i("adc7"),f={name:"hospital",components:{CompanyBar:d["a"],CompanyHeader:m["a"]},data:function(){return{companySwiper:{titleName:"合作医院",titleInfo:"日本尖端医疗机构",className:"hospital"},items:h.data.list,scrollNext:!0}},mounted:function(){sessionStorage.hospital=o()(h.data.list)},methods:{onInfinite:function(){this.scrollNext?u(this,{}):this.$refs.scroller&&this.$refs.scroller.finishInfinite()},openHospitalDetail:function(t){this.$router.push({name:"hospital-detail",path:"hospital-detail"})}}};function u(t,a){r.a.get(t.$api.hospital+p.a.stringify(a),{headers:{"Content-Type":"application/x-www-form-urlencoded"},timeout:3e5}).then(function(a){var i=a.data;0===i.code&&(0==t.items.length?t.items=i.data.list:t.scrollNext&&(t.items=_.concat(t.items,i.data.list)),t.scrollNext=i.data.next,sessionStorage.hospital=o()(t.items),setTimeout(function(){t.$refs.scroller&&t.$refs.scroller.finishInfinite()}))}).catch(function(t){t.response&&t.response.data&&t.response.data.code&&alert(t.response.data.msg)})}var g=f,y=(i("eba9"),i("2877")),v=Object(y["a"])(g,e,n,!1,null,"0131a704",null);a["default"]=v.exports},a21f:function(t,a,i){var e=i("584a"),n=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},adc7:function(t){t.exports={code:0,data:{list:[{id:1,headimg:"../img/hospital/hospital_1.png",name:"国立国际医疗研究中心医院",content:["日本国立国际医疗研究中心始建于1868年，最初是一家陆军医院，于1945年移交给厚生省，称为东京第一医院。于2004年设立国际医疗中心，与2008年整合为现在的名称。现在直属于日本厚生劳动省，相当于我们的卫生劳动部。其建院历史已经近150年，超过国内的任何一家医院。","该院是研究院与医院合一的综合医院。下设中心医院、国府台医院、研究所、国际医疗合作部和国立护理大学。包括内、外、妇、儿、精神、结核、感染（艾滋病）等科室，门类齐全。医院着重于尖端医疗，内窥镜技术为目前最为先进的治疗技术之一，感染（艾滋病）研究所也是该院的特长，在日本处于领先地位。","日本国立国际医疗研究中心通过提供最优质的综合医疗服务──克服疾病增进健康,为社会做贡献。集诊疗与研究为一体,开展尊重患者需求的医疗服务工作的实践活动"]},{id:2,headimg:"../img/hospital/hospital_2.png",name:"东京midtown医疗中心",content:["位于东京中城医疗中心有着以实战著称的强大医疗阵容做精准的诊断、治疗，涵盖从预防医疗为起点的健康体检中心，紧跟时代的步伐，开展最新型的门诊科目。此外，开设了美容诊疗所、齿科诊疗所、健康管理站，致力于发展成为全方位划时代的综合医疗空间。","为您的健康和美丽提供全方位的服务。东京中城医疗诊所位于东京都的黄金地带六本木，能够为您提供日本最先进的健康体检等服务。这里为接受健康体检的客人准备了舒适的单间客房，并且体检全程都有私人助理陪伴，可以令您享受到热情周到的服务。","与此同时，有东京中城医疗诊所内的资深医师进行疾病诊断以及治疗，还可为有特殊需求的客人提供血液净化治疗。"]},{id:3,headimg:"../img/hospital/hospital_3.png",name:"银座健康院诊疗院",content:['坐落在东京银座的健康院诊疗院是以“不患病”为目的专业医疗机构。为实现防止未来患疾病的"预防医疗"、谨慎认真的对身体进行多项检查。运用高性能的检查设备，为国内外的贵宾人士提供高精度的健康检查。结合身体的状态和烦恼给您提供选择，为您准备多彩的健康体检菜单。结合健康体检菜单，从多角度检查身体的健康状态。不仅可以及早发现疾病，还对"将来罹患疾病的风险"进行检查，提供可用于疾病预防的治疗对策。',"在健康院诊疗院，以一流的医生为中心以专业人员为小组，进行仔细的诊察和检查，配备预防对策，为每个人提供最合适的私人定制预防医疗。对远道而来的海外贵宾不仅对身体做细致的检查，还对今后的健康提供有意义的方案。","在健康院诊所，采用了国内最高端机器的影像检查等，进行高紧密度的检查。根据这些检查，如果发现有癌症等严重疾病的情况，或者需要进行更精密检查的情况，我们具备能够顺利地介绍到可以信赖的医疗机构的完善机构。"]},{id:4,headimg:"../img/hospital/hospital_4.png",name:"表参道helene",content:["表参道HELENE诊所位于日本的著名时尚代表地表参道，拥有日本厚生局颁发的再生医疗实施资格认定。是日本最高端再生医疗专业诊所，致力于全球高端再生医疗的研究和治疗，干细胞领域治疗成绩遥遥领先，日本以及国外的政治、娱乐等各界名人经常慕名而来。","该诊所干细胞疗法的7大优势","1. 使用自体细胞做治疗，干细胞注射疗法是只使用自体的皮肤细胞做增殖培养与移植。从众多接受治疗体验的患者们都收到极好的反馈。","2. 由专任的细胞培养技术者做彻底的品质管理＜培养・脐帯血＞取得的细胞会交由叫做细胞培养中心的专门机构做出大约10,000倍的培养与增殖。为了提供高品质的再生医疗、细胞培养中心24小时无休，皆由专人亲手作业皮肤细胞的健康培养与增殖。","3. 为无法避免的老化效果做延迟处理＜培养・脐帯血＞ 1次的移植效果约能持续2～3年左右。 经由定期移植皮肤细胞（1年半～2年1次左右）、能够改善健康并做维持状态、长期下来就能做到延迟老化的效果。","4. 美容面（从皮肤细胞根本做起的返老）＜培养・脐帯血＞能让人感到老化的黑眼圈与法令线的造成原因据说是因为皮肤细胞的减少。 并不是植入异物而是移植增加原本就拥有的皮肤细胞促进玻尿酸分泌进而使皱纹与法令线消失，从皮肤根本达到抗老化与返老作用。","5. 使用自体细胞不会有不自然的效果。＜培养・脐帯血＞采集约米粒大小的皮肤。回复时间根据个人差別、大约1～3天。时间较长的人大约大个礼拜左右。并不是会改变外形的治疗动作，所以不会留下不自然的凹陷或疤痕。","6. 高效的持续性与安全性受到多数医疗关系者的推崇。＜培养・脐帯血＞能够增加真皮纤维芽细胞的治疗只有此疗法。因此，拥有高度美容意识的人或医疗关系者也会选择此法。","7. 使用细胞保管胶囊包使年轻细胞的时间冻结加以保存。＜纤维芽细胞＞您自身的细胞经由-196℃的低温冻结保存能够以维持年轻活化状态让我们加以保管。使用细胞保管胶囊包不管经过几年取出时的状态都是采取当时的年轻细胞，随时能够拿来做治疗使用。"]},{id:5,headimg:"../img/hospital/hospital_5.png",name:"癌研有明医院",content:["癌研究会（JFCR）成立于1908年，是日本首家癌症专业机构，拥有专业的肿瘤研究所和医院。癌研究会有明医院拥有大批引领日本肿瘤发展的医生，为患者提供个性化治疗。以减轻患者负担，广泛提供内窥镜手术和腹腔镜手术等微创治疗。","本院的基本理念是“以患者为中心的医疗”，基于此理念，医师、护士、药剂师、注册营养师、诊疗放射线技师等不同职种的专家们共同合作，发挥各自的专长，进行小组诊断・治疗。","例如，在诊断时，各诊疗科的医师，会与诊断影像的专科医师和技师等合作，共同进行癌症诊断。另外，在治疗方面，癌症的主要治疗方法包括有外科手术、放射线治疗和化学疗法（抗癌剂）。各诊疗科与手术部、放射肿瘤科和化学疗法科等协作，为患者提供最为适宜的、定制式的治疗方法。","本院还并设有癌症筛查中心，在平日提供癌症筛查服务。在癌症筛查中如发现异常，可直接在医院进行精密检查，如有必要就顺利进行治疗。","癌研有明医院的特点是，与研究所及癌症化学疗法中心密切合作，进行先进的诊断・治疗的开发以及医疗的实践。"]}],page:1,next:!1}}},eba9:function(t,a,i){"use strict";var e=i("72c8"),n=i.n(e);n.a},f499:function(t,a,i){t.exports=i("a21f")}}]);
//# sourceMappingURL=chunk-5a5a0f80.89c906eb.js.map