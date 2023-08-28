"use strict";(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[808],{4189:function(e,t,o){var s=o(9876),a=o(6154),n=o(6294);const d=(0,n.Z)();t["Z"]=(0,s.Q_)("dashboardStore",{state:()=>({products:[],coupons:[],orders:[],pagination:{},screenLg:!1,screenWidth:0,activePage:""}),actions:{getProducts(e=1){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/products/?page=${e}`;d.isLoading=!0,a.Z.get(t).then((e=>{d.isLoading=!1;const{message:t}=e.data;e.data.success?(this.products=e.data.products,this.pagination=e.data.pagination):e.data.success||d.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},getCoupons(){d.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/yusan-api/admin/coupons";a.Z.get(e).then((e=>{d.isLoading=!1;const{message:t}=e.data;e.data.success?this.coupons=e.data.coupons:e.data.success||d.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/orders/?page=${e}`;d.isLoading=!0,a.Z.get(t).then((e=>{d.isLoading=!1;const{message:t}=e.data;e.data.success?(this.orders=e.data.orders,this.pagination=e.data.pagination):e.data.success||d.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},deleteItem(e,t){d.isLoading=!0,a.Z["delete"](t).then((t=>{const{message:o}=t.data;t.data.success?(d.isLoading=!1,d.pushMessage({title:o}),"product"===e?this.getProducts():"coupon"===e?this.getCoupons():"order"===e&&this.getOrders()):t.data.success||d.pushMessage({title:o,style:"danger"})})).catch((e=>{throw new Error(e)}))},sendUpdate(e,t,o,s){d.isLoading=!0,a.Z[o](t,{data:s}).then((t=>{d.isLoading=!1;const{message:o}=t.data;t.data.success?(d.pushMessage({title:o}),"product"===e?this.getProducts():"coupon"===e?this.getCoupons():"paid"===e&&this.getOrders()):t.data.success||d.pushMessage({title:o,style:"danger"})})).catch((e=>{throw new Error(e)}))},onScreenResize(){window.addEventListener("resize",(()=>{this.updateScreenWidth()}))},updateScreenWidth(){this.screenWidth=window.innerWidth,this.screenWidth>=768?this.screenLg=!0:this.screenWidth<768&&(this.screenLg=!1)},setActivePage(e){this.activePage=e}}})},9808:function(e,t,o){o.r(t),o.d(t,{default:function(){return ae}});var s=o(6252),a=o(3577),n=o(9963);const d=(0,s._)("h5",{class:"text-center mt-4"},"優惠卷列表",-1),l={class:"d-grid d-md-flex justify-content-md-end"},i={key:0,class:"table table-sm table-hover mt-4"},c=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"名稱"),(0,s._)("th",{width:"200"},"折扣"),(0,s._)("th",{width:"200"},"到期日"),(0,s._)("th",{width:"200"},"是否啟用"),(0,s._)("th",{width:"200"},"編輯")])],-1),u={class:"table-group-divider"},r={key:0,class:"text-success"},p={key:1,class:"text-mute"},h={class:"btn-group"},m=["onClick"],b=["onClick"],g={key:1,class:"table table-sm mt-4 table-bordered border-dark"},_={class:"d-flex flex-column"},C={class:"d-flex justify-content-between"},v={class:"btn-group"},w=["onClick"],f=["onClick"],y={key:0,class:"text-success"},M={key:1,class:"text-mute"};function k(e,t,o,k,D,x){const L=(0,s.up)("LoadingOverlay"),W=(0,s.up)("CouponModal"),Z=(0,s.up)("DeleteModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[d,(0,s.Wm)(L,{active:e.isLoading},null,8,["active"]),(0,s._)("div",l,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark mt-3",onClick:t[0]||(t[0]=e=>x.openCouponModal(!0))}," 新增優惠卷 ")]),e.screenLg?((0,s.wg)(),(0,s.iD)("table",i,[c,(0,s._)("tbody",u,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.coupons,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,a.zw)(t.title),1),(0,s._)("td",null,(0,a.zw)(t.percent/10)+"折",1),(0,s._)("td",null,(0,a.zw)(e.$filters.date(t.due_date)),1),(0,s._)("td",null,[t.is_enabled?((0,s.wg)(),(0,s.iD)("span",r,"啟用")):((0,s.wg)(),(0,s.iD)("span",p,"未啟用"))]),(0,s._)("td",null,[(0,s._)("div",h,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:(0,n.iM)((e=>x.openCouponModal(!1,t)),["prevent"])}," 編輯 ",8,m),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:(0,n.iM)((e=>x.openDeleteModal(t)),["prevent"])}," 刪除 ",8,b)])])])))),128))])])):((0,s.wg)(),(0,s.iD)("table",g,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.coupons,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,[(0,s._)("div",_,[(0,s._)("div",C,[(0,s._)("strong",null,(0,a.zw)(t.title),1),(0,s._)("div",v,[(0,s._)("button",{type:"buton",class:"btn btn-outline-dark btn-sm",onClick:e=>x.openCouponModal(!1,t)}," 編輯 ",8,w),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>x.openDeleteModal(t)}," 刪除 ",8,f)])]),(0,s._)("span",null,"折扣："+(0,a.zw)(t.percent/10)+"折",1),(0,s._)("span",null,"到期日："+(0,a.zw)(e.$filters.date(t.due_date)),1),t.is_enabled?((0,s.wg)(),(0,s.iD)("span",y,"啟用")):((0,s.wg)(),(0,s.iD)("span",M,"未啟用"))])])])))),128))])])),(0,s.Wm)(W,{ref:"couponModal",coupon:D.tempCoupon,onUpdateCoupon:x.updateCoupon,onHideCouponModal:x.hideCouponModal},null,8,["coupon","onUpdateCoupon","onHideCouponModal"]),(0,s.Wm)(Z,{ref:"deleteModal","selected-item":D.tempCoupon,onDeleteItem:x.deleteCoupon,onHideDeleteModal:x.hideDeleteModal},null,8,["selected-item","onDeleteItem","onHideDeleteModal"])],64)}var D=o(9876),x=o(4189),L=o(6294),W=o(968);const Z={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal","data-bs-backdrop":"static","data-bs-keyboard":"false"},H={class:"modal-dialog"},$={class:"modal-header bg-light"},U=(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"新增優惠卷")],-1),S={class:"modal-body"},V={class:"row"},z={class:"col-sm-6"},P={class:"mb-3"},R=(0,s._)("label",{for:"title"},"優惠卷名稱",-1),I={class:"mb-3"},E=(0,s._)("label",{for:"percent"},"折扣百分比(e.g. 80 = 8折) ",-1),F={class:"mb-3"},O=(0,s._)("label",{for:"due-date"},"到期日",-1),q=["placeholder"],N={class:"col-sm-6"},j={class:"mb-3"},A=(0,s._)("label",{for:"code"},"優惠卷密碼",-1),Y={class:"form-check"},K={class:"form-check-label",for:"is_enabled"},Q={class:"modal-footer"},T=(0,s._)("button",{class:"btn btn-secondary"},"確認",-1);function B(e,t,o,d,l,i){const c=(0,s.up)("Field"),u=(0,s.up)("ErrorMessage"),r=(0,s.up)("Form");return(0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("div",H,[(0,s.Wm)(r,{class:"modal-content border-0",ref:"couponForm",onSubmit:t[7]||(t[7]=t=>{e.$emit("update-coupon",l.tempCoupon),e.$emit("hideCouponModal"),i.clearResetHandler()})},{default:(0,s.w5)((({errors:e})=>[(0,s._)("div",$,[U,(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close",onClick:t[0]||(t[0]=(0,n.iM)(((...e)=>i.clearResetHandler&&i.clearResetHandler(...e)),["prevent"]))})]),(0,s._)("div",S,[(0,s._)("div",V,[(0,s._)("div",z,[(0,s._)("div",P,[R,(0,s.Wm)(c,{type:"text",class:(0,a.C_)(["form-control",{"is-invalid":e["名稱"]}]),id:"title",name:"名稱",placeholder:"請輸入優惠卷名稱",rules:"required",modelValue:l.tempCoupon.title,"onUpdate:modelValue":t[1]||(t[1]=e=>l.tempCoupon.title=e)},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"名稱",class:"invalid-feedback"})]),(0,s._)("div",I,[E,(0,s.Wm)(c,{type:"number",class:(0,a.C_)(["form-control",{"is-invalid":e["折扣"]}]),id:"percent",name:"折扣",rules:"required",modelValue:l.tempCoupon.percent,"onUpdate:modelValue":t[2]||(t[2]=e=>l.tempCoupon.percent=e),modelModifiers:{number:!0}},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"折扣",class:"invalid-feedback"})]),(0,s._)("div",F,[O,(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",ref:"dateInput",id:"due-date",name:"到期日",placeholder:i.datePlaceholder,onfocus:"type='date'",onblur:"type='text'","onUpdate:modelValue":t[3]||(t[3]=e=>l.due_date=e)},null,8,q),[[n.nr,l.due_date]])])]),(0,s._)("div",N,[(0,s._)("div",j,[A,(0,s.Wm)(c,{type:"text",class:(0,a.C_)(["form-control",{"is-invalid":e["密碼"]}]),id:"code",name:"密碼",placeholder:"請輸入優惠卷密碼",rules:"required",modelValue:l.tempCoupon.code,"onUpdate:modelValue":t[4]||(t[4]=e=>l.tempCoupon.code=e)},null,8,["class","modelValue"]),(0,s.Wm)(u,{name:"密碼",class:"invalid-feedback"})]),(0,s._)("div",Y,[(0,s._)("label",K,[(0,s.Uk)(" 是否啟用 "),(0,s.wy)((0,s._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[5]||(t[5]=e=>l.tempCoupon.is_enabled=e)},null,512),[[n.e8,l.tempCoupon.is_enabled]])])])])])]),(0,s._)("div",Q,[(0,s._)("button",{type:"button",class:"btn btn-outline-danger","data-bs-dismiss":"modal",onClick:t[6]||(t[6]=(0,n.iM)(((...e)=>i.clearResetHandler&&i.clearResetHandler(...e)),["prevent"]))}," 取消 "),T])])),_:1},512)])],512)}var G=o(1339),J={mixins:[G.Z],props:{coupon:{type:Object,required:!0,default(){return{}}}},computed:{datePlaceholder(){const e=new Date(1e3*this.displayDate);return e.toLocaleDateString("en-US")}},watch:{coupon(){this.tempCoupon=this.coupon,this.displayDate=this.coupon.due_date},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3),this.displayDate=Math.floor(new Date(this.due_date)/1e3)}},data(){return{modal:{},tempCoupon:{},due_date:"",displayDate:""}},methods:{clearResetHandler(){this.clearInput(),this.reset()},clearInput(){this.due_date=""},reset(){this.$refs.couponForm.resetForm()}}},X=o(3744);const ee=(0,X.Z)(J,[["render",B]]);var te=ee,oe={components:{CouponModal:te,DeleteModal:W.Z},computed:{...(0,D.rn)(x.Z,["coupons","screenLg"]),...(0,D.rn)(L.Z,["isLoading"])},data(){return{tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1}},methods:{...(0,D.nv)(x.Z,["getCoupons","sendUpdate","deleteItem","onScreenResize","updateScreenWidth","setActivePage"]),openCouponModal(e,t){this.isNew=e,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...t};const o=this.$refs.couponModal;o.showModal()},hideCouponModal(){const e=this.$refs.couponModal;e.hideModal()},updateCoupon(e){let t="https://vue3-course-api.hexschool.io/api/yusan-api/admin/coupon",o="post";const s="coupon";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/coupon/${e.id}`,o="put"),this.sendUpdate(s,t,o,e)},openDeleteModal(e){this.tempCoupon={...e};const t=this.$refs.deleteModal;t.showModal()},deleteCoupon(e){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/coupon/${e.id}`,o="coupon";this.deleteItem(o,t)},hideDeleteModal(){const e=this.$refs.deleteModal;e.hideModal()}},created(){this.getCoupons(),this.setActivePage("coupons")},mounted(){this.updateScreenWidth(),this.onScreenResize()}};const se=(0,X.Z)(oe,[["render",k]]);var ae=se}}]);
//# sourceMappingURL=808.a9e83935.js.map