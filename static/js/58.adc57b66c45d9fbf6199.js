webpackJsonp([58],{fDYU:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.btns_box[data-v-736c7643] {\r\n  display: table;\n}\n.data_total[data-v-736c7643] {\r\n  display: table-cell;\r\n  text-align: left;\r\n  font-size: 0.16rem;\r\n  color: #a5dcff;\n}\n.data_total span[data-v-736c7643] {\r\n  font-weight: bolder;\r\n  color: #05e6ff;\r\n  margin-left: 30px;\n}\n.el-date-editor.el-input[data-v-736c7643],\r\n.el-date-editor.el-input__inner[data-v-736c7643] {\r\n  width: 1.6rem;\r\n  margin-right: 0.2rem;\n}\r\n","",{version:3,sources:["F:/web01/aioc-tianjin-dev/src/views/AgedDetial/index.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,iBAAiB;EACjB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,eAAe;EACf,kBAAkB;CACnB;AACD;;EAEE,cAAc;EACd,qBAAqB;CACtB",file:"index.vue",sourcesContent:["\n.btns_box[data-v-736c7643] {\r\n  display: table;\n}\n.data_total[data-v-736c7643] {\r\n  display: table-cell;\r\n  text-align: left;\r\n  font-size: 0.16rem;\r\n  color: #a5dcff;\n}\n.data_total span[data-v-736c7643] {\r\n  font-weight: bolder;\r\n  color: #05e6ff;\r\n  margin-left: 30px;\n}\n.el-date-editor.el-input[data-v-736c7643],\r\n.el-date-editor.el-input__inner[data-v-736c7643] {\r\n  width: 1.6rem;\r\n  margin-right: 0.2rem;\n}\r\n"],sourceRoot:""}])},"ih+j":function(e,t,a){var n=a("fDYU");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("rjj0")("9d65858c",n,!1,{})},jzKC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("mvHQ"),r=a.n(n),l=a("woOf"),o=a.n(l),i=a("P9l9"),s=a("sxQs"),c=a("hmat"),d={data:function(){return{isSearchLoading:!1,columns:[{label:"序号",prop:"index",width:80},{label:"老年人姓名",prop:"name",width:200},{label:"身份证号",value:"idcard",width:200},{label:"性别",prop:"sex",width:150},{label:"年龄",prop:"age",width:150},{label:"养老卡号",prop:"pensioncardNumber",width:200},{label:"联系方式",prop:"phone",width:200},{label:"居住街道",prop:"streetName",width:200},{label:"居住社区",prop:"communityName",width:200},{label:"居住地址",prop:"livingAddress"}],streetData:[],communityData:[],formData:{name:"",beginDay:"",endDay:"",sex:"",streetCode:"",communityCode:"",merchantName:this.$route.query.merchantName,attendanceRate:this.$route.query.attendanceRate,canteenNumber:this.$route.query.canteenNumber,attendNumber:this.$route.query.attendNumber},serviceDate:{},tableData:[],pageSize:10,page:1,total:0}},created:function(){var e=this;this.formData=o()(this.formData,JSON.parse(this.$route.query.serviceDate)),this.$store.dispatch("getUserAuthInfo").then(function(){e.handleGetSearchValue()}).catch(function(e){console.log("获取用户权限失败",e)}),i.a.getStreetInfo().then(function(t){t&&(e.streetData=t)})},methods:{changeStreet:function(e){var t=this;i.a.getCommunityInfo({code:e}).then(function(e){e&&(t.communityData=e)})},handleGetSearchValue:function(e){var t=this;this.isSearchLoading=!0,this.form=o()({page:"number"==typeof e?e:1,pageSize:this.pageSize},this.formData),this.form.attendanceSign=this.formData.attendNumber,this.serviceDate=o()({},{startTime:r()(this.formData.beginDay.split("-")),endTime:r()(this.formData.endDay.split("-"))}),i.a.getConsumePeopleInfo(this.form).then(function(e){if(e&&e.obj){t.isSearchLoading=!1;var a=e.obj,n=a.records,r=a.total,l=a.current,o=a.size;t.tableData=n,t.total=r,t.pageSize=o,t.page=l,t.tableData.forEach(function(e,t){e.index=t})}})}},components:{ListLayout:s.a,Menu:c.a}},m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("list-layout",{attrs:{columns:e.columns,tableData:e.tableData,pageSize:e.pageSize,serviceDate:e.serviceDate,header:"服务载体老年人消费情况统计",currentPage:e.page,backPath:"FiveService",title:"五大服务类别数据综合分析——服务载体消费老年人基本信息",total:e.total},on:{getSearchValue:e.handleGetSearchValue}},[a("el-form",{attrs:{inline:!0,model:e.formData}},[a("el-form-item",{staticClass:"search_select",attrs:{label:"姓名"}},[a("el-input",{staticClass:"head_left",attrs:{placeholder:"请输入姓名",clearable:""},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name","string"==typeof t?t.trim():t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"性别"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择性别"},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}},[a("el-option",{attrs:{label:"男性",value:"男"}}),e._v(" "),a("el-option",{attrs:{label:"女性",value:"女"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"年龄段"}},[a("el-input",{staticClass:"input_num",attrs:{placeholder:"起始年龄"},model:{value:e.formData.beginEge,callback:function(t){e.$set(e.formData,"beginEge",t)},expression:"formData.beginEge"}}),e._v(" "),a("span",[e._v("-")]),e._v(" "),a("el-input",{staticClass:"input_num",attrs:{placeholder:"截止年龄"},model:{value:e.formData.endEge,callback:function(t){e.$set(e.formData,"endEge",t)},expression:"formData.endEge"}})],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"所属街道"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择所属街道"},on:{change:e.changeStreet},model:{value:e.formData.streetCode,callback:function(t){e.$set(e.formData,"streetCode",t)},expression:"formData.streetCode"}},e._l(e.streetData,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"所属社区"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择所属社区"},model:{value:e.formData.communityCode,callback:function(t){e.$set(e.formData,"communityCode",t)},expression:"formData.communityCode"}},e._l(e.communityData,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"btns_box"},[a("div",{staticClass:"data_total"},[a("span",[e._v("服务载体：")]),e._v(e._s(e.formData.merchantName)+"\n      "),a("span",[e._v("服务时间：")]),e._v(e._s(e.formData.beginDay)+"~"+e._s(e.formData.endDay)+"\n      "),e._v(" "),a("span",[e._v("老年人消费次数：")]),e._v(e._s(e.formData.attendNumber)+"次以上\n    ")]),e._v(" "),a("div",{staticClass:"btns_right"},[a("el-button",{staticClass:"btn",attrs:{icon:"el-icon-search",loading:e.isSearchLoading},on:{click:e.handleGetSearchValue}},[e._v("查询")])],1)]),e._v(" "),a("Menu")],1)};m._withStripped=!0;var u={render:m,staticRenderFns:[]},f=u;var p=!1;var h=a("VU/8")(d,f,!1,function(e){p||a("ih+j")},"data-v-736c7643",null);h.options.__file="src/views/AgedDetial/index.vue";t.default=h.exports}});