webpackJsonp([81],{Xt2z:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("P9l9"),o={name:"NursingHome",data:function(){return{isSearchLoading:!1,columns:[{label:"序号",prop:"index",width:"150"},{label:"机构名称",prop:"organizationName"},{label:"机构类型",prop:"organizationType"},{label:"统一社会信用代码",prop:"socialCreditCode"},{label:"法人代表姓名",prop:"legalPersonName"},{label:"法人联系电话",prop:"legalPersonPhone"},{label:"养老机构法人性质",prop:"legalPersonNature"},{label:"地址",prop:"address"},{label:"从业人员总数",prop:"employeesNum"},{label:"老年人居住房间总数",prop:"roomNum"},{label:"老年人床位总数",prop:"bedNum"}],tableData:[],pageSize:10,currentPage:1,total:0}},created:function(){var e=this;this.$store.dispatch("getUserAuthInfo").then(function(){e.getData()}).catch(function(e){console.log("获取用户权限失败",e)})},methods:{getData:function(e){var t=this;this.isSearchLoading=!0;var a={page:e,pageSize:this.pageSize};r.a.getServices4NursingHome(a).then(function(e){t.isSearchLoading=!1;var a=e&&e.obj,r=a.records,o=a.total,i=a.size,n=a.current;t.tableData=r,t.pageSize=i,t.currentPage=n,t.total=o}).catch(function(){t.isSearchLoading=!1,t.tableData=[]})},handleServiceClass:function(){this.currentPage=1}},components:{ListLayout:a("sxQs").a}},i=function(){var e=this.$createElement;return(this._self._c||e)("list-layout",{attrs:{crumbData:[{title:"",url:""}],columns:this.columns,tableData:this.tableData,total:this.total,pageSize:this.pageSize,currentPage:this.currentPage,backPath:"olderDistribution",header:"居家养老服务载体分布",title:"居家养老服务载体分布————养老院"},on:{getSearchValue:this.getData}})};i._withStripped=!0;var n={render:i,staticRenderFns:[]},s=n;var l=!1;var c=a("VU/8")(o,s,!1,function(e){l||a("YnRh")},"data-v-1137db72",null);c.options.__file="src/views/ServiceCarrier/nursingHome.vue";t.default=c.exports},YnRh:function(e,t,a){var r=a("i0sG");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);a("rjj0")("2e5dd6dc",r,!1,{})},i0sG:function(e,t,a){(e.exports=a("FZ+f")(!0)).push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"nursingHome.vue",sourceRoot:""}])}});