webpackJsonp([45],{"87Ho":function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=n("Dd8w"),s=n.n(a),t=n("NYxO"),i=(n("P9l9"),n("sxQs")),p=n("iDrW"),o=n.n(p),m=n("nXPw"),c=n.n(m),d={data:function(){return{ops:{vuescroll:{},scrollPanel:{scrollingX:!1},bar:{background:"#eee"}},tabData:["居家养老服务商","服务商联盟"],activeIndex:0,columns:[{label:"序号",prop:"index",width:"150"},{label:"载体服务商",prop:"companyName"},{label:"关联企业",prop:"enterprise"},{label:"服务类别",prop:"classess"},{label:"服务项目",prop:"project"},{label:"关联企业联系人",prop:"enterpriseName"},{label:"关联企业联系电话",prop:"enterprisePhone"}],tableData:[],serviceOrderItemlist:["普通老年人","享受补贴老年人"],fullscreen:!0,index:1,pageSize:10,currentPage:1,total:50,path:""}},computed:s()({},Object(t.b)(["userType","code"])),created:function(){this.tableData=c.a,this.$store.dispatch("getUserAuthInfo").then(function(){}).catch(function(e){console.log("获取用户权限失败",e)})},methods:{handleTab:function(e){this.activeIndex=e,0===e?(this.tableData=c.a,this.columns=[{label:"序号",prop:"index",width:"150"},{label:"载体服务商",prop:"companyName"},{label:"关联企业",prop:"enterprise"},{label:"服务类别",prop:"classess"},{label:"服务项目",prop:"project"},{label:"关联企业联系人",prop:"enterpriseName"},{label:"关联企业联系电话",prop:"enterprisePhone"}]):(this.tableData=o.a,this.columns=[{label:"序号",prop:"index",width:"150"},{label:"统一社会信用代码",prop:"code"},{label:"企业名称",prop:"firmName"},{label:"法定代表人",prop:"representative"},{label:"联系电话",prop:"phone"},{label:"住所经营场所",prop:"address"},{label:"经营范围",prop:"range"},{label:"企业信用",prop:"credit"}])}},components:{ListLayout:i.a}},l=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("list-layout",{attrs:{crumbData:[{title:this.$route.query.label,url:""}],columns:e.columns,tableData:e.tableData,unit:"个",pageSize:e.pageSize,currentPage:e.currentPage,backPath:"HomeDistribution",title:"居家养老服务载体分布————居家养老服务联盟库"}},[n("div",{staticClass:"older-tab"},e._l(e.tabData,function(r,a){return n("p",{key:a,class:[e.activeIndex===a?"tab_item active":"tab_item"],on:{click:function(r){return e.handleTab(a)}}},[e._v("\n       "+e._s(r)+"\n     ")])}),0)])};l._withStripped=!0;var N={render:l,staticRenderFns:[]},h=N;var x=!1;var f=n("VU/8")(d,h,!1,function(e){x||n("Rkvk")},"data-v-940a1b06",null);f.options.__file="src/views/ServiceLeague/index.vue";r.default=f.exports},Rkvk:function(e,r,n){var a=n("YkdQ");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("aa3dcf7e",a,!1,{})},YkdQ:function(e,r,n){(e.exports=n("FZ+f")(!0)).push([e.i,"\n.older-tab[data-v-940a1b06] {\n  width: 100%;\n  height: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0.4rem;\n  margin-top: 0.2rem;\n}\n.older-tab .tab_item[data-v-940a1b06] {\n  width: 3rem;\n  height: 0.5rem;\n  border: 1px solid #00cefe;\n  text-align: center;\n  line-height: 0.5rem;\n  color: rgba(79, 208, 255, 0.7);\n  font-size: 0.17rem;\n  opacity: 0.6;\n}\n.older-tab .active[data-v-940a1b06] {\n  border: 1px solid #68f4ff;\n  color: #68f4ff;\n  opacity: 1;\n}\n","",{version:3,sources:["F:/web01/aioc-tianjin-dev/src/views/ServiceLeague/index.vue"],names:[],mappings:";AACA;EACE,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,qBAAqB;EACrB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;EACnB,oBAAoB;EACpB,+BAA+B;EAC/B,mBAAmB;EACnB,aAAa;CACd;AACD;EACE,0BAA0B;EAC1B,eAAe;EACf,WAAW;CACZ",file:"index.vue",sourcesContent:["\n.older-tab[data-v-940a1b06] {\n  width: 100%;\n  height: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 0.4rem;\n  margin-top: 0.2rem;\n}\n.older-tab .tab_item[data-v-940a1b06] {\n  width: 3rem;\n  height: 0.5rem;\n  border: 1px solid #00cefe;\n  text-align: center;\n  line-height: 0.5rem;\n  color: rgba(79, 208, 255, 0.7);\n  font-size: 0.17rem;\n  opacity: 0.6;\n}\n.older-tab .active[data-v-940a1b06] {\n  border: 1px solid #68f4ff;\n  color: #68f4ff;\n  opacity: 1;\n}\n"],sourceRoot:""}])},iDrW:function(e,r){e.exports=[{index:"1",code:"91120222581342761E",firmName:"天津鼎唯装饰有限公司",representative:"高朋",phone:"",address:"天津市武清区泗村店镇商贸大街南侧18号101-171（集中办公区）",range:"室内外装饰装修工程、钢结构工程、房屋建筑工程、园林景观工程、园林绿化工程、建筑幕墙工程设计及施工，门、窗、橱柜制造、销售、安装、装饰装修材料批发兼零售、劳动服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"武清",credit:"良好"},{index:"2",code:"91120104MA05LLWJ2L",firmName:"天津市霓楠电子商务有限公司",representative:"孔燕妮",phone:"13102074800",address:"天津市南开区白堤路42号3楼307",range:"批发和零售业；电子与信息技术及产品的技术开发、咨询、服务、转让；承装（承修、承试）电力设施（凭许可证经营）；安全技术防范系统设计、安装、维修；货物及技术的进出口业务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"南开",credit:"良好"},{index:"3",code:"91310112577456555D",firmName:"上海券耕贸易有限公司",representative:"高超",phone:"",address:"上海市闵行区吴中路1050号5幢917-918室",range:"食用农产品(不含生猪、牛、羊等家畜产品)、家用电器、服装、日用百货、办公用品、工艺礼品的销售,从事计算机科技领域内的技术开发、技术咨询、技术转让、技术服务,商务咨询、投资咨询(咨询类项目除经纪)。","":"",credit:"  良好1条行政处罚"},{index:"4",code:"911201127384864068",firmName:"天津市利好食品有限责任公司",representative:"史全胜",phone:"",address:"天津市津南区辛庄镇达港南路36号",range:"水果制品(果酱)、糕点(月饼馅料)、豆制品(其他豆制品)、速冻食品生产、销售食品机械、食品包装容器、塑料制品制造、销售食品销售(以许可证经营项目为准)食品生产(以许可证经营项目为准)餐饮服务(取得许可证后经营)。(依法须经批准的项目,经相关部门批准后方可开展经营活动)","":"",credit:"良好"},{index:"5",code:"91120111MA06EPDH92",firmName:"康力元（天津）医疗科技有限公司",representative:"于政",phone:"15610919589",address:"天津市西青经济技术开发区民和道24号207室",range:'"一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；特种劳动防护用品销售；劳动保护用品销售；日用口罩（非医用）销售；第一类医疗器械销售；第二类医疗器械销售；针纺织品销售；电子产品销售；化妆品零售；化妆品批发；消毒剂销售（不含危险化学品）；家用电器销售；日用百货销售；网络与信息安全软件开发；健康咨询服务（不含诊疗服务）；医疗设备租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。许可项目：第三类医疗器械经营；货物进出口；食品经营。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。',"":"",credit:"良好"},{index:"6",code:"91120116550373223B",firmName:"天津金域医学检验实验室有限公司",representative:"严婷",phone:"",address:"天津滨海高新区华苑产业区（环外）海泰华科五路2号3号楼B座",range:"许可项目：医疗服务；第三类医疗器械经营。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）。一般项目：医学研究和试验发展；健康咨询服务（不含诊疗服务）；非居住房地产租赁。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。","":"天津市滨海新区市场监督管理局",credit:"良好"},{index:"7",code:"91120103103064496Y",firmName:"天津国旅海外国际旅游有限责任公司",representative:"蒋韬",phone:"13802074320",address:"天津市河西区友谊路22号",range:"入境旅游业务；国内旅游业务；特许经营中国公民自费出国旅游业务；旅游汽车客运；国际航线或者香港、澳门、台湾地区航线的航空客运销售代理业务；会议服务、展览服务；旅游信息咨询服务；代购车船票；从事广告业务；企业形象策划；文化艺术交流信息咨询。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"",credit:"良好"},{index:"8",code:"91120104MA06WQMR97",firmName:"天津水滴医学影像诊断有限公司",representative:"陈涛",phone:"13388035322",address:"天津市南开区体育中心街道奥林匹克中心体育场一层F101号",range:"医学影像诊断服务（凭许可证经营）；医疗技术、生物技术、计算机软件及辅助设备技术开发、咨询、服务；医疗器械（凭许可证经营）批发兼零售；医疗器械租赁；健康信息咨询；互联网信息服务（金融类除外）（凭许可证经营）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"南开",credit:"良好"},{index:"9",code:"91120111MA05WWY165",firmName:"天津广源瘦美商贸有限公司",representative:"肖菲",phone:"",address:"天津市西青区李七庄街友谊南路南段西侧鸣泉花园10-1-203",range:"食品、日用品、化妆品、家用电器批发兼零售；商务信息咨询服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"西青",credit:"良好"},{index:"10",code:"91120116328562058D",firmName:"天津食品集团商贸有限公司",representative:"张馨同",phone:"13820522037",address:"天津自贸区(东疆保税港区)西昌道200号铭海中心2号楼-5、6-409",range:"批发和零售业；国际贸易；海上、陆路、航空国际货物运输代理；国内货物运输代理；报关服务；货物及技术进出口；网上贸易代理；仓储；装卸搬倒；室内外装饰装修工程；商务信息咨询；代理报检；餐饮管理；物流分拨、配货；普通货运；货物专用运输（冷藏保鲜）；租赁业务；展览展示服务。（依法须经批准的项目，经相关部门批准后方可开展经营活动）***","":"天津市自由贸易试验区市场监督管理局 ",credit:"良好"},{index:"11",code:"913702857403546485",firmName:"青岛长寿食品有限公司",representative:"曲广琳",phone:"",address:"青岛莱西市青岛昌阳工业园",range:"许可项目：食品生产；粮食加工食品生产；食品经营；食品互联网销售；粮食收购；食品进出口；技术进出口；道路货物运输（不含危险货物）。（依法须经批准的项目，经相关部门批准后方可开展经营活动，具体经营项目以相关部门批准文件或许可证件为准）一般项目：初级农产品收购；食用农产品初加工；农副产品销售；普通货物仓储服务（不含危险化学品等需许可审批的项目）。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）","":"",credit:""},{index:"12",code:"91120103MA06PC781H",firmName:"苗和原谷健康科技（天津）有限公司",representative:"苗烨",phone:"",address:"天津市河西区黑牛城道230号",range:"（食品、医药）技术开发、技术咨询、技术转让；技术推广服务；食用农产品销售；食品销售（取得经营许可后方可经营）；健康信息咨询（医疗性除外）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"",credit:"良好"},{index:"13",code:"91120104239682672H",firmName:"天津银塔实业有限公司",representative:"李德起",phone:"",address:"天津市津南区八里台镇禄纬道7号",range:"建筑用材料、装饰装修材料、水性涂料、保温材料（危险品、易燃易爆易制毒品除外）制造、销售；五金产品、化工产品（剧毒品、化学危险品、易制毒品除外）批发兼零售；机械设备安装、维修；室内外装饰工程；水性涂料技术开发、转让。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"津南",credit:"良好"},{index:"14",code:"911201017581448767",firmName:"天津中信国际旅行社有限公司",representative:"程宇",phone:"",address:"天津市河西区解放南路285号丝绸大厦北四楼-1、2层",range:"入境旅游业务、国内旅游业务、出境旅游业务。机票、车船票销售代理；会议服务、展览服务；因私出入境中介服务；自费出国留学中介服务；翻译服务。（以上range涉及行业许可的凭许可证件，在有效期限内经营，国家有专项专营规定的按规定办理）（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"",credit:"良好"},{index:"15",code:"91120222MA076N6A9K",firmName:"慧慈科技服务（天津）有限公司",representative:"安元慧",phone:"",address:"天津市武清区汊沽港镇津永公路南侧69号金融商务楼401室12号",range:"一般项目：技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广；人工智能应用软件开发；计算机软硬件及辅助设备零售；计算机软硬件及辅助设备批发；家政服务；人工智能行业应用系统集成服务；医疗设备租赁；信息咨询服务（不含许可类信息咨询服务）；市场调查（不含涉外调查）；社会调查（不含涉外调查）；劳务服务（不含劳务派遣）；组织文化艺术交流活动；健康咨询服务（不含诊疗服务）；网络与信息安全软件开发；网络技术服务；工业控制计算机及系统销售；信息系统集成服务；日用百货销售；日用品销售；鞋帽零售；体育用品及器材批发；体育用品及器材零售；第一类医疗器械销售；软件销售；光通信设备销售；机械设备销售；电子产品销售；仪器仪表销售；发电机及发电机组销售；养老服务；人力资源服务（不含职业中介活动、劳务派遣服务）。（除依法须经批准的项目外，凭营业执照依法自主开展经营活动）。","":"武清",credit:"良好"},{index:"16",code:"9112011132871455XF",firmName:"天津市河西区博华门诊部",representative:"焦洋",phone:"",address:"天津市河西区三水道玉峰花园底商1-3号",range:"门诊部服务。（依法需经批准的项目，经相关部门批准后方可开展经营活动）","":"",credit:"良好"},{index:"17",code:"91120118328582067P",firmName:"四海嘉实（天津）物业管理有限公司",representative:"李凤龙",phone:"",address:"天津自贸试验区（中心商务区）迎宾大道1988号2-304（天津源泰商务秘书有限公司托管第056号）",range:"物业管理；装卸搬倒；家政服务；保洁服务；园林绿化工程；初级农产品、花卉、苗木、食品（凭许可证经营）批发兼零售；会议服务；汽车租赁；企业管理；餐饮管理；房地产中介；消防设施工程；吊装服务；劳务服务；机械设备租赁、维修；土木工程；房屋建筑工程；防腐保温工程；建筑水暖电安装工程；室内外装饰装修工程；计算机软件技术开发、转让、咨询服务；道路货物运输经营（凭许可证经营）。（依法须经批准的项目，经相关部门批准后方可开展经营活动）","":"天津市自由贸易试验区市场监督管理局 ",credit:"良好"},{index:"18",code:"91120103MA06X2WX1L",firmName:"天津国丰餐饮集团有限公司",representative:"郭胜利",phone:"",address:"天津市河西区大营门街南昌路45院",range:"餐饮服务、食品销售（取得经营许可证后方可经营）销售，劳务服务，企业管理咨询，会议服务，展览展示服务；批发和零售业。","":"",credit:"良好"},{index:"19",code:"52120101780315686P",firmName:"天津和平尚安门诊部",representative:"齐祥农",phone:"",address:"和平区营口道102号",range:"内科、外壳、妇产科、妇科专业、儿科、耳鼻喉科、口腔科、皮肤科、中医科","":"非企业",credit:""},{index:"20",code:"91120116MA05RY298M",firmName:"全民（天津）健康管理有限公司",representative:"屠建军",phone:"",address:"天津河西区罗马花园一期B-2-2402",range:"健康管理服务；健康信息咨询；医院管理服务；企业管理咨询","":"河东",credit:"良好"},{index:"21",code:"91120116058731658A",firmName:"天津顺丰速递有限公司",representative:"郭宏宇",phone:"",address:"天津自贸试验区(空港经济区)空港国际物流园第三大街19号F1-202-1 ",range:"国内快递、国际快递（邮政企业专营业务除外凭《快递业务经营许可证》经营）；普通货运；","":"天津市自由贸易试验区市场监督管理局 ",credit:"良好"},{index:"22",code:"91120000569304463A",firmName:"天津医药集团津一堂连锁股份有限公司",representative:"尚明杰",phone:"",address:"天津市红桥区同心楼44-47门 ",range:"许可项目：药品零售；第三类医疗器械经营；保健食品销售；食品经营；食品经营（销售预包装食品）；","":"红桥",credit:"良好"},{index:"23",code:"91120116328679950L",firmName:"天津晶诺达装饰装潢工程有限公司",representative:"金维晶",phone:"13920834698",address:"天津自贸实验区（空港经济区）中环西路与西二道交口丽港大厦2-713",range:"室内外装饰；装修工程设计、施工；防水工程；钢结构工程等","":"天津市自由贸易试验区市场监督管理局",credit:"良好"},{index:"24",code:"91120104328715587H",firmName:"天津三尺余餐饮管理有限公司",representative:"杜玲娟",phone:"",address:"天津市南开区万德庄南北大街43号101",range:"餐饮管理；会议服务；健康咨询服务；企业管理咨询","":"南开",credit:""},{index:"25",code:"91120118MA069T107A",firmName:"天津索龙餐饮服务管理有限公司",representative:"索龙",phone:"",address:"天津自贸实验区（东疆保税港区）",range:"餐椅你管理；餐饮服务；物业管理；酒店管理","":"天津市自由贸易试验区市场监督管理局",credit:""},{index:"26",code:"91120111MA05JTWQ0L",firmName:"天津市众意德物业管理有限公司",representative:"王明飞",phone:"",address:"天津市西青区大寺镇大任庄平安街18号",range:"物业管理；劳务服务","":"西青",credit:""},{index:"27",code:"",firmName:"天津市河西区颐德医院",representative:"",phone:"",address:"",range:"综合医院服务","":"天津河西颐德医院",credit:"良好"},{index:"28",code:"",firmName:"天津德正堂大药房有限公司",representative:"",phone:"",address:"",range:"药品批发药品进出口，保健食品销售，食品经营，特殊医学用途配方食品销售 第二类医疗器械销售","":"",credit:"良好"},{index:"29",code:"",firmName:"贝克兰科技（天津）有限公司",representative:"",phone:"",address:"",range:"净水设备、水处理","":"天津市自由贸易试验区市场监督管理局",credit:"良好"},{index:"30",code:"",firmName:"天津兴亿仲天商贸有限公司",representative:"",phone:"",address:"",range:"净水设备、水处理、桶装水","":"和平",credit:"良好"},{index:"31",code:"",firmName:"天津椿萱茂越华养老服务有限公司",representative:"",phone:"",address:"",range:"养老院机构、服务","":"河东",credit:"良好"},{index:"32",code:"",firmName:"中移在线服务有限公司",representative:"",phone:"",address:"",range:"平台服务对接","":"",credit:"    良好"},{index:"33",code:"91120103300410159X",firmName:"天津诺康医院有限责任公司",representative:"吴宪伟",phone:"13502110424",address:"天津市河西区东江道与内江路交口南侧香年广场3号楼3门、4门、5门",range:"综合医院服务","":"",credit:"良好"},{index:"34",code:"91120113MA06TTFG6J",firmName:"天津洁夫人家政服务有限公司",representative:"张鹏",phone:"18526105584",address:"天津市北辰区宜兴埠镇高新大道欧铂苑18-1-201",range:"家政服务，清洁服务，等","":"北辰",credit:"良好"},{index:"35",code:"52120000MJ0679542L",firmName:"天津市河西区逸享为老服务中心",representative:"平翠英",phone:"88383066",address:"天津市河西区东江道南侧青林大厦1/2-1-235",range:"居家养老服务；老年餐配送；精神慰藉能力评估；养老服务单位运营评估；承接政府委托养老服务。","":"非企业",credit:""},{index:"36",code:"91120103MA05L9KN64",firmName:"天津挚美家政服务有限公司",representative:"赵志帅",phone:"15222871108",address:"天津市河西区解放南路与浯水道交口西南侧喜年广场3-806",range:"家政服务；幼儿园外托管服务（不含餐饮、住宿、文化教育培训）","":"",credit:"良好"},{index:"37",code:"91110105MA00FUDA5R",firmName:"北京健薇源医疗科技有限公司",representative:"牛建光",phone:"15222778868",address:"北京市朝阳区东坝乡东晓景产业园205号F区1578",range:"技术推广，技术开发，技术转让，健康管理","":"",credit:""},{index:"38",code:"91120105MA06BHWJ8W",firmName:"天津乐风信息科技有限责任公司",representative:"张灵",phone:"",address:"天津市河北区光复道街胜利路149号",range:"电子信息技术、计算机软硬件技术开发、咨询、转让","":"河北",credit:"良好"},{index:"39",code:"91120112684740244E",firmName:"天津友爱康复医疗设备有限公司",representative:"宁培鑫",phone:"88712039",address:"天津市津南区八里台泰达（津南）微电子工业区",range:"医疗器械、物理治疗及康复设备、健身设备、老年人残障辅助用具等","":"津南",credit:"良好"}]},nXPw:function(e,r){e.exports=[{index:"1",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"天津市河西区聚康餐饮管理服务中心",classess:"助餐服务类",project:"早餐服务、午餐服务、晚餐服务",enterpriseName:"展恒波",enterprisePhone:"18526299777",remark:""},{index:"2",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"天津普天大健康科技有限公司",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"姜鸿坤",enterprisePhone:"13803002284",remark:""},{index:"3",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"中民聚康（天津）养老产业发展有限公司",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"展恒波",enterprisePhone:"18526299777",remark:""},{index:"4",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"中民聚康（天津）养老产业发展有限公司",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"展恒波",enterprisePhone:"18526299777",remark:""},{index:"5",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"中民聚康（天津）养老产业发展有限公司",classess:"托养床位类",project:"短期托养服务、日间托养服务",enterpriseName:"展恒波",enterprisePhone:"18526299777",remark:""},{index:"6",companyName:"中民聚康（天津）养老产业发展有限公司",enterprise:"中民聚康（天津）养老产业发展有限公司",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"展恒波",enterprisePhone:"18526299777",remark:""},{index:"7",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区龙福宫马场街餐饮服务中心",classess:"助餐服务类",project:"早餐服务、午餐服务、晚餐服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"8",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区龙福宫餐饮服务中心",classess:"助餐服务类",project:"早餐服务、午餐服务、晚餐服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"9",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区龙福宫连荣里餐饮服务中心",classess:"助餐服务类",project:"早餐服务、午餐服务、晚餐服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"10",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津挚美家政服务有限公司",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"赵志帅",enterprisePhone:"15222871108",remark:""},{index:"11",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区广东路龙福宫老人院",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"12",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区广东路龙福宫老人院",classess:"助医服务类",project:"专业护理服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"13",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区广东路龙福宫老人院",classess:"托养床位类",project:"短期托养服务、日间托养服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"14",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区广东路龙福宫老人院",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"15",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区紫韵广告设计制作中心",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"史俊玲",enterprisePhone:"",remark:""},{index:"16",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市津南区大脚板足浴城",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"杨坤",enterprisePhone:"13388007166",remark:""},{index:"17",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津乐风信息科技有限责任公司",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"吴健",enterprisePhone:"",remark:""},{index:"18",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"北京建薇医疗科技有限公司",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"胡伟",enterprisePhone:"",remark:""},{index:"19",companyName:"天津市河西区广东路龙福宫老人院",enterprise:"天津市河西区乐家老店艾灸馆",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"王桂兰",enterprisePhone:"",remark:""},{index:"20",companyName:"天津华夏恒达科技有限公司",enterprise:"天津国丰餐饮集团有线公司",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"郭胜利",enterprisePhone:"13601082533",remark:""},{index:"21",companyName:"天津华夏恒达科技有限公司",enterprise:"天津华夏恒达科技有限公司",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"张岩",enterprisePhone:"13312068110",remark:""},{index:"22",companyName:"天津华夏恒达科技有限公司",enterprise:"天津华夏恒达科技有限公司",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"张岩",enterprisePhone:"13312068110",remark:""},{index:"23",companyName:"天津华夏恒达科技有限公司",enterprise:"天津和平尚安门诊部",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"",enterprisePhone:"",remark:""},{index:"24",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"天津市海洋石油物业管理有限公司河西区分公司",classess:"助餐服务类",project:"早餐服务、午餐服务、晚餐服务",enterpriseName:"张坤",enterprisePhone:"13512851882",remark:""},{index:"25",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"天津市海洋石油物业管理有限公司河西区分公司",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"张坤",enterprisePhone:"13512851882",remark:""},{index:"26",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"四海嘉实（天津）物业管理有限公司",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"",enterprisePhone:"",remark:""},{index:"27",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"慧慈科技服务(天津)有限公司",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"",enterprisePhone:"",remark:""},{index:"28",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"慧慈科技服务(天津)有限公司",classess:"助医服务类",project:"专业护理服务",enterpriseName:"",enterprisePhone:"",remark:""},{index:"29",companyName:"天津市海洋石油物业管理有限公司河西区分公司",enterprise:"天津市河西区博华门诊部",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"",enterprisePhone:"",remark:""},{index:"30",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸麟老人院",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"樊若冰",enterprisePhone:"13323337648",remark:""},{index:"31",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸麟老人院",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"樊若冰",enterprisePhone:"13323337648",remark:""},{index:"32",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸麟老人院",classess:"助医服务类",project:"专业护理服务、理疗康复服务",enterpriseName:"樊若冰",enterprisePhone:"13323337648",remark:""},{index:"33",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸麟老人院",classess:"托养床位类",project:"短期托养服务、日间托养服务",enterpriseName:"樊若冰",enterprisePhone:"13323337648",remark:""},{index:"34",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸麟老人院",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"樊若冰",enterprisePhone:"13323337648",remark:""},{index:"35",companyName:"天津市河西区逸麟老人院",enterprise:"天津市河西区逸享为老服务中心",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"",enterprisePhone:"",remark:""},{index:"36",companyName:"天津市河西区聚友福餐饮服务有限公司",enterprise:"天津市河西区聚友福餐饮服务有限公司",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"李军",enterprisePhone:"13920960966",remark:""},{index:"37",companyName:"天津市河西区福寿康居家养老服务中心",enterprise:"天津市河西区福寿康居家养老服务中心",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"王磊",enterprisePhone:"13642057331",remark:""},{index:"38",companyName:"天津市河西区福寿康居家养老服务中心",enterprise:"天津市河西区福寿康居家养老服务中心",classess:"生活照料类",project:"家政服务（助洁服务）、基本生活护理服务",enterpriseName:"王磊",enterprisePhone:"13642057331",remark:""},{index:"39",companyName:"天津市河西区福寿康居家养老服务中心",enterprise:"天津市河西区福寿康居家养老服务中心",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"王磊",enterprisePhone:"13642057331",remark:""},{index:"40",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津市河西区美塘餐厅",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"",enterprisePhone:"",remark:""},{index:"41",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津洁夫人家政服务有限公司",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"张鹏",enterprisePhone:"18526105584",remark:""},{index:"42",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津河西诺康医院有限责任公司",classess:"助医服务类",project:"理疗康复服务",enterpriseName:"吴宪伟",enterprisePhone:"88303099",remark:""},{index:"43",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津市河西区美塘佳苑养老院",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"张莹",enterprisePhone:"15522777717",remark:""},{index:"44",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津市河西区美塘佳苑养老院",classess:"托养床位类",project:"短期托养服务、日间托养服务",enterpriseName:"张莹",enterprisePhone:"15522777717",remark:""},{index:"45",companyName:"天津市河西区美塘佳苑养老院",enterprise:"天津市河西区美塘佳苑养老院",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"张莹",enterprisePhone:"15522777717",remark:""},{index:"46",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区云江养老院",classess:"助餐服务类",project:"午餐服务、晚餐服务",enterpriseName:"刘志方",enterprisePhone:"15822192231",remark:""},{index:"47",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区云江养老院",classess:"助医服务类",project:"专业护理服务、理疗康复服务",enterpriseName:"刘志方",enterprisePhone:"15822192231",remark:""},{index:"48",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区云江养老院",classess:"托养床位类",project:"短期托养服务、日间托养服务",enterpriseName:"刘志方",enterprisePhone:"15822192231",remark:""},{index:"49",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区云江养老院",classess:"其他服务类",project:"助急服务、其他服务",enterpriseName:"刘志方",enterprisePhone:"15822192231",remark:""},{index:"50",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区云江养老院",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"刘志方",enterprisePhone:"15822192231",remark:""},{index:"51",companyName:"天津育嘉物业管理有限公司",enterprise:"天津育嘉物业管理有限公司",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"",enterprisePhone:"",remark:""},{index:"52",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区技通电器维修服务中心",classess:"生活照料类",project:"家政服务（助洁服务）",enterpriseName:"杜金海",enterprisePhone:"",remark:""},{index:"53",companyName:"天津育嘉物业管理有限公司",enterprise:"天津市河西区美尔康口腔门诊有限公司",classess:"生活照料类",project:"基本生活护理服务",enterpriseName:"王毅",enterprisePhone:"",remark:""}]}});