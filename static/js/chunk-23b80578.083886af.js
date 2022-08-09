(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23b80578"],{"13d7":function(e,t,r){"use strict";r("54b2")},"54b2":function(e,t,r){},fb3b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dashboard-container"},[r("div",{staticClass:"app-container"},[r("el-card",{staticClass:"tree-card"},[r("TreeTools",{attrs:{isRoot:!0,treeNode:e.company},on:{add:e.onAdd}}),r("el-tree",{attrs:{data:e.treeData,"default-expand-all":"",props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return[r("TreeTools",{attrs:{treeNode:a},on:{edit:e.editDepts,add:e.onAdd}})]}}])})],1)],1),e.addDialogVisible?r("add-dept",{ref:"addDept",attrs:{visible:e.addDialogVisible,currentNode:e.currentNode},on:{"update:visible":function(t){e.addDialogVisible=t}}}):e._e()],1)},n=[],o=r("c7eb"),i=r("1da1"),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticStyle:{width:"100%"},attrs:{type:"flex"}},[r("el-col",[e._v(e._s(e.treeNode.name))]),r("el-col",{attrs:{span:4}},[r("el-row",{attrs:{type:"flex"}},[r("el-col",[e._v("负责人")]),r("el-col",[r("el-dropdown",[r("span",{staticClass:"el-dropdown-link"},[e._v(" 操作 "),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){return e.add(t)}}},[e._v(" 添加 ")]),e.isRoot?e._e():[r("el-dropdown-item",{nativeOn:{click:function(t){return e.edit(t)}}},[e._v(" 编辑 ")]),r("el-dropdown-item",{nativeOn:{click:function(t){return e.remove(t)}}},[e._v(" 删除 ")])]],2)],1)],1)],1)],1)],1)},s=[],c={data:function(){return{}},props:{treeNode:{type:Object,required:!0},isRoot:{type:Boolean,default:!1}},created:function(){},methods:{remove:function(){console.log(123)},add:function(){this.$emit("add",this.treeNode)},edit:function(){this.$emit("edit",this.treeNode)}}},d=c,u=r("2877"),m=Object(u["a"])(d,l,s,!1,null,"2cd26e8b",null),p=m.exports,f=r("1eef"),b=r("ed08"),g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"添加部门",visible:e.visible,width:"50%"},on:{close:e.onClose}},[r("el-form",{attrs:{model:e.formData,rules:e.formDataRules,"label-width":"120px"}},[r("el-form-item",{attrs:{prop:"name",label:"部门名称"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),r("el-form-item",{attrs:{prop:"code",label:"部门编码"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-50个字符"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),r("el-form-item",{attrs:{prop:"manager",label:"部门负责人"}},[r("el-select",{staticStyle:{width:"80%"},attrs:{placeholder:"请选择"},on:{focus:e.getEmployeeSimple},model:{value:e.formData.manager,callback:function(t){e.$set(e.formData,"manager",t)},expression:"formData.manager"}},e._l(e.peoples,(function(e){return r("el-option",{key:e.id,attrs:{label:e.username,value:e.username}})})),1)],1),r("el-form-item",{attrs:{prop:"introduce",label:"部门介绍"}},[r("el-input",{staticStyle:{width:"80%"},attrs:{placeholder:"1-300个字符",type:"textarea",rows:3},model:{value:e.formData.introduce,callback:function(t){e.$set(e.formData,"introduce",t)},expression:"formData.introduce"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){return e.$emit("update:visible",!1)}}},[e._v(" 取 消 ")]),r("el-button",{attrs:{type:"primary"}},[e._v("确 定")])],1)],1)},v=[],h=(r("d3b7"),r("b0c0"),r("8f00")),w={data:function(){var e=this;return{formData:{name:"",code:"",manager:"",introduce:""},formDataRules:{name:[{required:!0,message:"部门名称不能为空",trigger:"blur"},{min:1,max:50,message:"部门名称要求1-50个字符",trigger:"blur"},{validator:function(t,r,a){var n,o=null===(n=e.currentNode.children)||void 0===n?void 0:n.some((function(e){return e.name===r}));o?a(new Error("部门重复")):a()},trigger:"blur"}],code:[{required:!0,message:"部门编码不能为空",trigger:"blur"},{min:1,max:50,message:"部门编码要求1-50个字符",trigger:"blur"},{validator:function(){var e=Object(i["a"])(Object(o["a"])().mark((function e(t,r,a){var n,i,l;return Object(o["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(f["a"])();case 2:n=e.sent,i=n.depts,l=i.some((function(e){return e.code===r})),l?a(new Error("部门编码重复")):a();case 6:case"end":return e.stop()}}),e)})));function t(t,r,a){return e.apply(this,arguments)}return t}(),trigger:"blur"}],manager:[{required:!0,message:"部门负责人不能为空",trigger:"blur"}],introduce:[{required:!0,message:"部门介绍不能为空",trigger:"blur"},{trigger:"blur",min:1,max:300,message:"部门介绍要求1-50个字符"}]},peoples:[]}},props:{visible:{type:Boolean,required:!0},currentNode:{type:Object,required:!0}},created:function(){},methods:{onClose:function(){this.$emit("update:visible",!1)},getEmployeeSimple:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["c"])();case 2:e.peoples=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},D=w,y=Object(u["a"])(D,g,v,!1,null,"a895d650",null),x=y.exports,O={data:function(){return{defaultProps:{label:"name"},treeData:[{name:"总裁办",children:[{name:"董事会"}]},{name:"行政部"},{name:"人事部"}],company:{name:"传智教育",id:""},addDialogVisible:!1,currentNode:{}}},components:{TreeTools:p,AddDept:x},created:function(){this.getDepartments()},methods:{getDepartments:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){var r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["a"])();case 2:r=t.sent,e.treeData=Object(b["a"])(r.depts,""),e.company={name:r.companyName,manager:"负责人",children:e.treeData},console.log(r);case 6:case"end":return t.stop()}}),t)})))()},onAdd:function(e){this.addDialogVisible=!0,this.currentNode=e},editDepts:function(e){this.addDialogVisible=!0,this.currentNode=e}}},_=O,j=(r("13d7"),Object(u["a"])(_,a,n,!1,null,"77a8223e",null));t["default"]=j.exports}}]);