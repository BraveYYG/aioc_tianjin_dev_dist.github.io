webpackJsonp([64],{P1X1:function(e,t,a){var o=a("tOiG");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);a("rjj0")("6be9b934",o,!1,{})},aAmX:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Gu7T"),r=a.n(o),n=a("woOf"),s=a.n(n),i=a("Dd8w"),l=a.n(i),c=a("NYxO"),m=a("P9l9"),d=a("sxQs"),u=a("hmat"),p={data:function(){return{ops:{vuescroll:{},scrollPanel:{scrollingX:!1},bar:{background:"#eee"}},isSearchLoading:!1,allColumns:[{label:"排名",prop:"ranking"},{label:"街道",prop:"name",min:170},{label:"社区",prop:"communityName",min:120},{label:"老年人口数",prop:"peopleTotal",min:120},{label:"享受服务老年人口数",prop:"orderPeopleTotal",min:120},{label:"服务率",prop:"serviceRate",min:120}],columns:[{label:"排名",prop:"ranking"},{label:"街道",prop:"name",min:170},{label:"老年人口数",prop:"peopleTotal",min:120},{label:"享受服务老年人口数",prop:"orderPeopleTotal",min:120},{label:"服务率",prop:"serviceRate",min:120}],streetDatas:[],tableData:[],streetData:[],communityData:[],communityDatas:[],fullscreen:!0,index:1,pageSize:10,currentPage:1,scope:"1",formData:{beginDay:new Date,endDay:new Date,streetCode:"",communityCode:"",beginEge:"",endEge:""},params:{},spanArr:[],rowArr:[],position:0,colArr:[],disabled:!1,disabledCom:!1,streetCode:"",totalFormDataBeforeReset:{}}},computed:l()({},Object(c.b)(["userType","code","typeNew","codeNew","type"]),{streeDataAll:function(){return"2"===this.scope?this.streetDatas.filter(function(e){return e.name?-1!==e.name.indexOf("合计")||-1!==e.name.indexOf("总计"):e}):this.streetDatas},paramss:function(){var e={};return e[["code","zoneCode","streetCode","communityCode"][this.typeNew-1]]=this.codeNew[0],e}}),watch:{"formData.streetCode":{handler:function(){this.getCommunityInfo()}},tableData:function(){this.rowspan()}},created:function(){var e=this;this.$store.dispatch("getUserAuthInfo").then(function(){e.streetCode=e.code[1],e.handleGetSearchValue(),e.getStreet()}).catch(function(e){console.log("获取用户权限失败",e)}),console.log(this.code),console.log(this.paramss)},methods:{handleGetSearchValue:function(e){var t=this;if(this.isSearchLoading=!0,"1"==this.type){this.streetCodeObj={code:""}}else if("3"==this.type){var a={streetCode:this.code[1],code:""};this.streetCodeObj=a}else{var o={streetCode:this.streetCode,communityCode:this.code[0]};this.streetCodeObj=o}m.a.getCommunityServiceInfo(s()(this.formData,this.streetCodeObj,this.paramss)).then(function(e){console.log(t.formData),t.totalFormDataBeforeReset=t.formData,console.log(t.paramss),console.log(t.streetCodeObj),t.isSearchLoading=!1,"1"==t.type?(t.disabled=!1,t.disabledCom=!1):"3"==t.type?(t.disabled=!0,t.disabledCom=!1):(t.disabled=!0,t.disabledCom=!0);var a=e&&e.data,o=a.communityEatPeopleMap,n=a.communityEatPeopleAllMap,s=a.streetEatPeopleMap,i=n[0],l=i.peopleTotal,c=i.orderPeopleTotal,m=i.serviceTotal,d=i.serviceRate;t.tableData=o||[],t.streetDatas=s.filter(function(e){return""!==e.streetName}),t.communityData=o.filter(function(e){return""!==e.communityName});var u=[];t.tableData.map(function(e){u=t.tableData.filter(function(t){return t.streetName===e.streetName}),e.name=e.streetName+"(共计"+u.length+"个社区)",e.serviceRate=e.serviceRate?e.serviceRate:"0"}),t.streetDatas.map(function(e,t){e.ranking=t+1,e.serviceRate=e.serviceRate?e.serviceRate+"%":"0%",e.orderPeopleTotal=e.orderPeopleTotal?e.orderPeopleTotal:"0"}),t.communityData.map(function(e,t){e.ranking=t+1,e.serviceRate=e.serviceRate?e.serviceRate+"%":"0%",e.orderPeopleTotal=e.orderPeopleTotal?e.orderPeopleTotal:"0"}),t.streetDatas.map(function(e,a){e.name=e.streetName+"合计";var o=t.tableData.filter(function(t){return t.streetName===e.streetName&&t.communityName});o.map(function(e){e.ranking=a+1});var n=t.streetDatas.findIndex(function(t){return t.streetName===e.streetName}),s=t.streetDatas.slice(0,n),i=t.streetDatas.slice(n);if(e.streetName===o[0].streetName){s.push.apply(s,r()(o));var l=s.concat(i);t.streetDatas=l}}),t.streetDatas.unshift({streetName:"总计",name:"总计",peopleTotal:l||0,orderPeopleTotal:c||0,serviceTotal:m||0,serviceRate:(d||0)+"%"}),t.rowspan()}).catch(function(){t.isSearchLoading=!1})},getStreet:function(){var e=this;m.a.getStreetInfo().then(function(t){e.streetData=t||[]})},getCommunityInfo:function(){var e=this;m.a.getCommunityInfo({code:this.formData.streetCode}).then(function(t){var a=[];t.forEach(function(e){a.push({name:e.name,code:e.code})}),e.communityDatas=a||[],e.communityData=a})},clearSearchValue:function(){this.formData=s()({},this.formData,this.totalFormDataBeforeReset,{beginDay:"",endDay:"",communityCode:""})},getJkMonitor:function(e){var t=new ActiveXObject("WScript.Shell");try{t.Run("D:\\vlc\\vlc.exe",1,!1)}catch(e){alert("该可执行文件不存在")}},rowspan:function(){var e=this;this.spanArr=[],this.rowArr=[],this.streetDatas.forEach(function(t,a){0===a?(e.spanArr.push(1),e.position=0):e.streetDatas[a].name===e.streetDatas[a-1].name?(e.spanArr[e.position]+=1,e.spanArr.push(0)):(e.spanArr.push(1),e.position=a)})},objectSpanMethod:function(e){var t=e.row,a=(e.column,e.rowIndex),o=e.columnIndex;if(-1!==t.name.indexOf("合计")){return{rowspan:1,colspan:[0,2,0,1,1,1,1][o]}}if(-1!==t.name.indexOf("总计")){return{rowspan:1,colspan:[0,3,0,1,1,1,1][o]}}if(1===o){var r=this.spanArr[a];return{rowspan:r,colspan:r>0?1:0}}if(0===o){var n=this.spanArr[a];return{rowspan:n+1,colspan:n>0?1:0}}}},components:{ListLayout:d.a,Menu:u.a}},f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("list-layout",{attrs:{crumbData:[{title:this.$route.query.label,url:""}],columns:"1"===e.scope?e.allColumns:e.columns,tableData:e.streeDataAll,unit:"个",pageSize:e.pageSize,header:"街道社区服务率排名",currentPage:e.currentPage,backPath:"FiveService",objectSpanMethod:"1"===e.scope?e.objectSpanMethod:function(){},title:"五大服务类别数据综合分析————街道社区服务率排名"},on:{getSearchValue:e.handleGetSearchValue}},[a("el-form",{attrs:{inline:!0,model:e.formData}},[a("el-form-item",{staticClass:"search_select search_time",attrs:{label:"起始时间："}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"开始日期"},model:{value:e.formData.beginDay,callback:function(t){e.$set(e.formData,"beginDay",t)},expression:"formData.beginDay"}}),e._v(" "),a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"截止日期"},model:{value:e.formData.endDay,callback:function(t){e.$set(e.formData,"endDay",t)},expression:"formData.endDay"}})],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"街道"}},[a("el-select",{attrs:{clearable:"",disabled:e.disabled,placeholder:"请选择街道"},model:{value:e.formData.streetCode,callback:function(t){e.$set(e.formData,"streetCode",t)},expression:"formData.streetCode"}},e._l(e.streetData,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"社区"}},[a("el-select",{attrs:{clearable:"",disabled:e.disabledCom,placeholder:"请选择社区"},model:{value:e.formData.communityCode,callback:function(t){e.$set(e.formData,"communityCode",t)},expression:"formData.communityCode"}},e._l(e.communityDatas,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.code}})}),1)],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"范围"}},[a("el-select",{attrs:{clearable:"",placeholder:"请选择范围"},model:{value:e.scope,callback:function(t){e.scope=t},expression:"scope"}},[a("el-option",{attrs:{label:"全部",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"街道",value:"2"}})],1)],1),e._v(" "),a("el-form-item",{staticClass:"search_select",attrs:{label:"年龄区间段"}},[a("el-input",{staticClass:"input_num",attrs:{placeholder:"起始年龄"},model:{value:e.formData.beginEge,callback:function(t){e.$set(e.formData,"beginEge",t)},expression:"formData.beginEge"}}),e._v(" "),a("span",[e._v("-")]),e._v(" "),a("el-input",{staticClass:"input_num",attrs:{placeholder:"截止年龄"},model:{value:e.formData.endEge,callback:function(t){e.$set(e.formData,"endEge",t)},expression:"formData.endEge"}})],1)],1),e._v(" "),a("div",{staticClass:"btns_box"},[a("div",{staticClass:"btns_right"},[a("el-button",{staticClass:"btn",on:{click:e.clearSearchValue}},[e._v("重置")]),e._v(" "),a("el-button",{staticClass:"btn",attrs:{icon:"el-icon-search",loading:e.isSearchLoading},on:{click:e.handleGetSearchValue}},[e._v("查询")])],1)]),e._v(" "),a("Menu")],1)};f._withStripped=!0;var h={render:f,staticRenderFns:[]},v=h;var b=!1;var D=a("VU/8")(p,v,!1,function(e){b||a("P1X1")},"data-v-5057aa6e",null);D.options.__file="src/views/CommunityService/index.vue";t.default=D.exports},tOiG:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"\n.el-date-editor.el-input[data-v-5057aa6e],\n.el-date-editor.el-input__inner[data-v-5057aa6e] {\n  width: 1.6rem;\n  margin-right: 0.2rem;\n}\n[data-v-5057aa6e] .el-input.is-disabled .el-input__inner {\n  color: #56a4f7;\n}\n","",{version:3,sources:["F:/web01/aioc-tianjin-dev/src/views/CommunityService/index.vue"],names:[],mappings:";AACA;;EAEE,cAAc;EACd,qBAAqB;CACtB;AACD;EACE,eAAe;CAChB",file:"index.vue",sourcesContent:["\n.el-date-editor.el-input[data-v-5057aa6e],\n.el-date-editor.el-input__inner[data-v-5057aa6e] {\n  width: 1.6rem;\n  margin-right: 0.2rem;\n}\n[data-v-5057aa6e] .el-input.is-disabled .el-input__inner {\n  color: #56a4f7;\n}\n"],sourceRoot:""}])}});