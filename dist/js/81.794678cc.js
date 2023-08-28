"use strict";(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[81],{4189:function(e,t,a){var s=a(9876),l=a(6154),d=a(6294);const i=(0,d.Z)();t["Z"]=(0,s.Q_)("dashboardStore",{state:()=>({products:[],coupons:[],orders:[],pagination:{},screenLg:!1,screenWidth:0,activePage:""}),actions:{getProducts(e=1){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/products/?page=${e}`;i.isLoading=!0,l.Z.get(t).then((e=>{i.isLoading=!1;const{message:t}=e.data;e.data.success?(this.products=e.data.products,this.pagination=e.data.pagination):e.data.success||i.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},getCoupons(){i.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/yusan-api/admin/coupons";l.Z.get(e).then((e=>{i.isLoading=!1;const{message:t}=e.data;e.data.success?this.coupons=e.data.coupons:e.data.success||i.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},getOrders(e=1){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/orders/?page=${e}`;i.isLoading=!0,l.Z.get(t).then((e=>{i.isLoading=!1;const{message:t}=e.data;e.data.success?(this.orders=e.data.orders,this.pagination=e.data.pagination):e.data.success||i.pushMessage({title:t,style:"danger"})})).catch((e=>{throw new Error(e)}))},deleteItem(e,t){i.isLoading=!0,l.Z["delete"](t).then((t=>{const{message:a}=t.data;t.data.success?(i.isLoading=!1,i.pushMessage({title:a}),"product"===e?this.getProducts():"coupon"===e?this.getCoupons():"order"===e&&this.getOrders()):t.data.success||i.pushMessage({title:a,style:"danger"})})).catch((e=>{throw new Error(e)}))},sendUpdate(e,t,a,s){i.isLoading=!0,l.Z[a](t,{data:s}).then((t=>{i.isLoading=!1;const{message:a}=t.data;t.data.success?(i.pushMessage({title:a}),"product"===e?this.getProducts():"coupon"===e?this.getCoupons():"paid"===e&&this.getOrders()):t.data.success||i.pushMessage({title:a,style:"danger"})})).catch((e=>{throw new Error(e)}))},onScreenResize(){window.addEventListener("resize",(()=>{this.updateScreenWidth()}))},updateScreenWidth(){this.screenWidth=window.innerWidth,this.screenWidth>=768?this.screenLg=!0:this.screenWidth<768&&(this.screenLg=!1)},setActivePage(e){this.activePage=e}}})},640:function(e,t,a){a.d(t,{Z:function(){return k}});var s=a(6252),l=a(3577),d=a(9963);const i={"aria-label":"Page navigation example"},n={class:"pagination justify-content-center"},r={class:"page-item"},o=(0,s._)("span",{"aria-hidden":"true"},"«",-1),c=[o],u=["onClick"],p={class:"page-item"},h=(0,s._)("span",{"aria-hidden":"true"},"»",-1),g=[h];function _(e,t,a,o,h,_){return(0,s.wg)(),(0,s.iD)("nav",i,[(0,s._)("ul",n,[(0,s._)("li",r,[(0,s._)("a",{class:(0,l.C_)(["page-link",{disabled:1===a.pages.current_page}]),href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=(0,d.iM)(((...e)=>_.prevButton&&_.prevButton(...e)),["prevent"]))},c,2)]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.pages.total_pages,(e=>((0,s.wg)(),(0,s.iD)("li",{class:(0,l.C_)(["page-item",{active:e===a.pages.current_page}]),key:e},[(0,s._)("a",{class:"page-link",href:"#",onClick:(0,d.iM)((t=>_.updatePage(e)),["prevent"])},(0,l.zw)(e),9,u)],2)))),128)),(0,s._)("li",p,[(0,s._)("a",{class:(0,l.C_)(["page-link",{disabled:a.pages.current_page===a.pages.total_pages}]),href:"#","aria-label":"Next",onClick:t[1]||(t[1]=(0,d.iM)(((...e)=>_.nextButton&&_.nextButton(...e)),["prevent"]))},g,2)])])])}var m={props:{pages:{type:Object,default(){return{}}}},methods:{updatePage(e){this.$emit("emit-pages",e)},nextButton(){const e=this.pages.current_page+1;this.updatePage(e)},prevButton(){const e=this.pages.current_page-1;this.updatePage(e)}}},b=a(3744);const w=(0,b.Z)(m,[["render",_]]);var k=w},7081:function(e,t,a){a.r(t),a.d(t,{default:function(){return xe}});var s=a(6252),l=a(3577);const d=(0,s._)("h5",{class:"text-center mt-4"},"訂單列表",-1),i={class:"d-grid d-md-flex justify-content-md-end"},n={key:0,class:"table table-hover mt-4"},r=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",{width:"100"},"購買時間"),(0,s._)("th",{width:"180"},"Email"),(0,s._)("th",null,"購買品項"),(0,s._)("th",{width:"100"},"應付金額"),(0,s._)("th",{width:"120"},"是否付款"),(0,s._)("th",{width:"120"},"編輯")])],-1),o={class:"table-group-divider"},c=(0,s._)("br",null,null,-1),u={class:"form-check"},p={class:"form-check-label",for:"`paidCheck${item.id}`"},h=["checked","id","onChange"],g={key:0},_={key:1},m={class:"btn-group"},b=["onClick"],w=["onClick"],k={key:1,class:"table table-sm mt-4 table-bordered border-dark"},v={class:"d-flex flex-column border-top border-bottom border-dark"},y={class:"d-flex justify-content-between"},f={class:"btn-group"},D=["onClick"],M=["onClick"],O={class:"d-flex"},x={class:"form-check"},C={class:"form-check-label",for:"`paidCheck${item.id}`"},z=["checked","onChange"],P={key:0},$={key:1},L={class:"d-flex border-top"},Z=(0,s._)("br",null,null,-1);function W(e,t,a,W,E,H){const U=(0,s.up)("LoadingOverlay"),S=(0,s.up)("Pagination"),Y=(0,s.up)("OrderModal"),q=(0,s.up)("DeleteModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(U,{active:e.isLoading},null,8,["active"]),d,(0,s._)("div",i,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark mt-3",onClick:t[0]||(t[0]=e=>H.openDeleteModal(E.deleteAllOrders))}," 刪除所有訂單 ")]),e.screenLg?((0,s.wg)(),(0,s.iD)("table",n,[r,(0,s._)("tbody",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id},[(0,s._)("td",null,(0,l.zw)(e.$filters.date(t.create_at)),1),(0,s._)("td",null,(0,l.zw)(t.user.email),1),(0,s._)("td",null,[(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s.Uk)((0,l.zw)(e.product.title)+" ",1),c,(0,s.Uk)(" 數量："+(0,l.zw)(e.qty)+" "+(0,l.zw)(e.product.unit),1)])))),128))])]),(0,s._)("td",null,"$"+(0,l.zw)(e.$filters.currency(t.total)),1),(0,s._)("td",null,[(0,s._)("div",u,[(0,s._)("label",p,[(0,s._)("input",{type:"checkbox",checked:t.is_paid,id:`paidCheck${t.id}`,class:"form-check-input",onChange:e=>(t.is_paid=!t.is_paid,H.updatePaid(t))},null,40,h)]),t.is_paid?((0,s.wg)(),(0,s.iD)("span",g,"已付款")):((0,s.wg)(),(0,s.iD)("span",_,"未付款"))])]),(0,s._)("td",null,[(0,s._)("div",m,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:e=>H.openModal(t)}," 細節 ",8,b),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>H.openDeleteModal(t)}," 刪除 ",8,w)])])])))),128))])])):((0,s.wg)(),(0,s.iD)("table",k,[(0,s._)("tbody",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.orders,(t=>((0,s.wg)(),(0,s.iD)("tr",{key:t.id,class:"border-0"},[(0,s._)("td",v,[(0,s._)("div",y,[(0,s._)("span",null,"購買時間："+(0,l.zw)(e.$filters.date(t.create_at)),1),(0,s._)("div",f,[(0,s._)("button",{type:"button",class:"btn btn-outline-dark btn-sm",onClick:e=>H.openModal(t)}," 細節 ",8,D),(0,s._)("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:e=>H.openDeleteModal(t)}," 刪除 ",8,M)])]),(0,s._)("span",null,"Email："+(0,l.zw)(t.user.email),1),(0,s._)("span",null,"應付金額：$"+(0,l.zw)(e.$filters.currency(t.total)),1),(0,s._)("div",O,[(0,s.Uk)(" 是否付款： "),(0,s._)("div",x,[(0,s._)("label",C,[(0,s._)("input",{type:"checkbox",checked:t.is_paid,id:"`paidCheck${item.id}`",class:"form-check-input",onChange:e=>(t.is_paid=!t.is_paid,H.updatePaid(t))},null,40,z)])]),t.is_paid?((0,s.wg)(),(0,s.iD)("span",P,"已付款")):((0,s.wg)(),(0,s.iD)("span",$,"未付款"))]),(0,s._)("div",L,[(0,s.Uk)(" 購買品項： "),(0,s._)("ul",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(t.products,((e,t)=>((0,s.wg)(),(0,s.iD)("li",{key:t},[(0,s.Uk)((0,l.zw)(e.product.title)+" ",1),Z,(0,s.Uk)(" 數量："+(0,l.zw)(e.qty)+" "+(0,l.zw)(e.product.unit),1)])))),128))])])])])))),128))])])),(0,s.Wm)(S,{pages:e.pagination,onEmitPages:e.getOrders},null,8,["pages","onEmitPages"]),(0,s.Wm)(Y,{ref:"orderModal",order:E.tempOrder},null,8,["order"]),(0,s.Wm)(q,{ref:"deleteModal","selected-item":E.tempOrder,onDeleteItem:H.deleteOrder,onHideDeleteModal:H.hideDeleteModal},null,8,["selected-item","onDeleteItem","onHideDeleteModal"])],64)}var E=a(9876),H=a(4189),U=a(6294);const S={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Y={class:"modal-dialog modal-xl",role:"document"},q={class:"modal-content border-0"},B=(0,s._)("div",{class:"modal-header bg-light"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,s._)("span",null,"訂單資料")]),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},K={class:"row"},j={class:"col-sm-4"},A={class:"mb-3"},R=(0,s._)("h4",{class:"text-dark"},"用戶資料",-1),N={class:"table"},Q={key:0},T=(0,s._)("th",null,"姓名",-1),F=(0,s._)("th",null,"Email",-1),G=(0,s._)("th",null,"電話",-1),J=(0,s._)("th",null,"地址",-1),V={class:"col-sm-8"},X={class:"mb-5"},ee=(0,s._)("h4",{class:"text-dark"},"訂單細節",-1),te={class:"table"},ae=(0,s._)("th",{width:"100"},"訂單編號",-1),se=(0,s._)("th",null,"下單時間",-1),le={key:0},de=(0,s._)("th",null,"付款時間",-1),ie=(0,s._)("th",null,"付款狀態",-1),ne={key:0,class:"text-success"},re={key:1,class:"text-muted"},oe=(0,s._)("th",null,"總金額",-1),ce={class:"mb-3"},ue=(0,s._)("h4",{class:"text-dark"},"選購商品",-1),pe={class:"table"},he=(0,s._)("thead",null,[(0,s._)("th",null,"商品"),(0,s._)("th",null,"數量"),(0,s._)("th",null,"編號")],-1),ge={class:"table-group-divider"},_e=(0,s._)("div",{class:"modal-footer"},[(0,s._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ")],-1);function me(e,t,a,d,i,n){return(0,s.wg)(),(0,s.iD)("div",S,[(0,s._)("div",Y,[(0,s._)("div",q,[B,(0,s._)("div",I,[(0,s._)("div",K,[(0,s._)("div",j,[(0,s._)("div",A,[R,(0,s._)("table",N,[i.tempOrder.user?((0,s.wg)(),(0,s.iD)("tbody",Q,[(0,s._)("tr",null,[T,(0,s._)("td",null,(0,l.zw)(i.tempOrder.user.name),1)]),(0,s._)("tr",null,[F,(0,s._)("td",null,(0,l.zw)(i.tempOrder.user.email),1)]),(0,s._)("tr",null,[G,(0,s._)("td",null,(0,l.zw)(i.tempOrder.user.tel),1)]),(0,s._)("tr",null,[J,(0,s._)("td",null,(0,l.zw)(i.tempOrder.user.address),1)])])):(0,s.kq)("",!0)])])]),(0,s._)("div",V,[(0,s._)("div",X,[ee,(0,s._)("table",te,[(0,s._)("tbody",null,[(0,s._)("tr",null,[ae,(0,s._)("td",null,(0,l.zw)(i.tempOrder.id),1)]),(0,s._)("tr",null,[se,(0,s._)("td",null,(0,l.zw)(e.$filters.date(i.tempOrder.create_at)),1)]),i.is_paid?((0,s.wg)(),(0,s.iD)("tr",le,[de,(0,s._)("td",null,(0,l.zw)(e.$filters.date(i.tempOrder.paid_date)),1)])):(0,s.kq)("",!0),(0,s._)("tr",null,[ie,(0,s._)("td",null,[i.is_paid?((0,s.wg)(),(0,s.iD)("strong",ne,"已付款")):((0,s.wg)(),(0,s.iD)("span",re,"尚未付款"))])]),(0,s._)("tr",null,[oe,(0,s._)("td",null,"$"+(0,l.zw)(e.$filters.currency(i.tempOrder.total))+" NTD",1)])])])]),(0,s._)("div",ce,[ue,(0,s._)("table",pe,[he,(0,s._)("tbody",ge,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.tempOrder.products,(e=>((0,s.wg)(),(0,s.iD)("tr",{key:e.id},[(0,s._)("td",null,(0,l.zw)(e.product.title),1),(0,s._)("td",null,(0,l.zw)(e.qty)+" / "+(0,l.zw)(e.product.unit),1),(0,s._)("td",null,(0,l.zw)(e.id),1)])))),128))])])])])])]),_e])])],512)}var be=a(1339),we={props:{order:{type:Object,required:!0,default(){return{}}}},watch:{order(){this.tempOrder=this.order,this.is_paid=this.tempOrder.is_paid}},mixins:[be.Z],data(){return{modal:{},tempOrder:{},is_paid:!1}}},ke=a(3744);const ve=(0,ke.Z)(we,[["render",me]]);var ye=ve,fe=a(968),De=a(640),Me={components:{OrderModal:ye,DeleteModal:fe.Z,Pagination:De.Z},computed:{...(0,E.rn)(H.Z,["orders","pagination","screenLg"]),...(0,E.rn)(U.Z,["isLoading"])},data(){return{tempOrder:{},deleteAllOrders:{title:"所有訂單"}}},methods:{...(0,E.nv)(H.Z,["getOrders","updatePaid","sendUpdate","deleteItem","onScreenResize","updateScreenWidth","setActivePage"]),updatePaid(e){const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/order/${e.id}`,a="paid",s="put",l={is_paid:e.is_paid};this.sendUpdate(a,t,s,l)},openModal(e){this.tempOrder={...e};const t=this.$refs.orderModal;t.showModal()},openDeleteModal(e){this.tempOrder={...e};const t=this.$refs.deleteModal;t.showModal()},deleteOrder(e){if("所有訂單"===e.title){const e="https://vue3-course-api.hexschool.io/api/yusan-api/admin/orders/all",t="order";this.deleteItem(t,e)}else{const t=`https://vue3-course-api.hexschool.io/api/yusan-api/admin/order/${e.id}`,a="order";this.deleteItem(a,t)}},hideDeleteModal(){const e=this.$refs.deleteModal;e.hideModal()}},created(){this.getOrders(),this.setActivePage("orders")},mounted(){this.updateScreenWidth(),this.onScreenResize()}};const Oe=(0,ke.Z)(Me,[["render",W]]);var xe=Oe}}]);
//# sourceMappingURL=81.794678cc.js.map