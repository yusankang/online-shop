"use strict";(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[959],{2959:function(r,e,t){t.r(e),t.d(e,{default:function(){return x}});var s=t(6252);const n={class:"container pt-5"},o=(0,s._)("h3",{class:"text-white text-center pt-5 permanent-marker"},"Shopping Cart",-1),a={key:0,class:"d-flex flex-column align-items-center justify-content-center"},l=(0,s._)("h5",{class:"text-white my-5"},"購物車沒有商品",-1),c={class:"row d-flex justify-content-center gx-4"},i={class:"col-md-7 mb-3"},d={class:"col-md-5"},u={class:"card border-0 mb-3"},p={key:0,class:"d-flex justify-content-center justify-content-md-end"};function m(r,e,t,m,g,f){const b=(0,s.up)("CartProgressBar"),h=(0,s.up)("router-link"),k=(0,s.up)("OrderItemsTotal"),_=(0,s.up)("OrderPriceTotal");return(0,s.wg)(),(0,s.iD)("div",n,[o,(0,s.Wm)(b,{"progress-bar":g.progressBar},null,8,["progress-bar"]),0===r.cart.final_total?((0,s.wg)(),(0,s.iD)("div",a,[l,(0,s.Wm)(h,{to:"/user/products",class:"btn btn-warning mb-5"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 開始購物 ")])),_:1})])):(0,s.kq)("",!0),(0,s._)("div",c,[(0,s._)("div",i,[(0,s.Wm)(k,{progress:g.progressBar,ref:"orderItems"},null,8,["progress"])]),(0,s._)("div",d,[(0,s._)("div",u,[(0,s.Wm)(_,{progress:g.progressBar,ref:"orderPrice"},null,8,["progress"])]),r.cart.final_total>0?((0,s.wg)(),(0,s.iD)("div",p,[(0,s._)("button",{type:"button",class:"btn btn-outline-warning btn-sm me-3",onClick:e[0]||(e[0]=(...e)=>r.deleteCart&&r.deleteCart(...e))}," 刪除購物車 "),(0,s.Wm)(h,{to:"/user/products",class:"btn btn-outline-light btn-sm"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 繼續購物 ")])),_:1})])):(0,s.kq)("",!0)])])])}var g=t(9876),f=t(4677),b=t(7012),h=t(1629),k=t(1345),_=t(7657),v={components:{CartProgressBar:h.Z,OrderPriceTotal:k.Z,OrderItemsTotal:_.Z},computed:{...(0,g.rn)(f.Z,["cart"])},data(){return{progressBar:1}},methods:{...(0,g.nv)(f.Z,["deleteCart"]),...(0,g.nv)(b.Z,["scrollToTop"])},created(){this.scrollToTop()}},w=t(3744);const C=(0,w.Z)(v,[["render",m]]);var x=C}}]);
//# sourceMappingURL=959.071b1f1d.js.map