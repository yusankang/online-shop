(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[541],{5511:function(e,t,r){
/*!
  * Bootstrap alert.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,s){e.exports=s(r(5695),r(9286),r(1127),r(4072))})(0,(function(e,t,r,s){"use strict";const o="alert",n="bs.alert",i=`.${n}`,l=`close${i}`,a=`closed${i}`,c="fade",u="show";class m extends e{static get NAME(){return o}close(){const e=t.trigger(this._element,l);if(e.defaultPrevented)return;this._element.classList.remove(u);const r=this._element.classList.contains(c);this._queueCallback((()=>this._destroyElement()),this._element,r)}_destroyElement(){this._element.remove(),t.trigger(this._element,a),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=m.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}return r.enableDismissTrigger(m,"close"),s.defineJQueryPlugin(m),m}))},8541:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return U}});var s=r(6252),o=r(9963),n=r(3577);const i={style:{"background-color":"rgba(42, 62, 51, 0.8)","min-height":"100vh"}},l={class:"homepage-header header-img d-flex align-items-center justify-content-center"},a=(0,s._)("h2",{class:"text-white text-center display-3 permanent-marker"},"Wilderness kitchen",-1),c={class:"d-grid gap-2 col-5 mx-auto my-3"},u={class:"py-5"},m=(0,s._)("div",{class:"mb-5 mx-md-auto px-5 px-md-0 col-12 col-md-6"},[(0,s._)("h4",{class:"text-white text-center permanent-marker fs-2 mb-5"},"Love Nature x Love Food"),(0,s._)("p",{class:"text-white text-center fs-5"}," 在大自然中享受美食的樂趣是獨一無二的，在野生廚房，帶著你的廚房探索世界，讓大自然成為你的靈感來源。 "),(0,s._)("p",{class:"text-white text-center fs-5"}," There's nothing like enjoying good food in the great outdoors. At Wilderness Kitchen, take your kitchen with you anywhere. Let nature be your inspiration. ")],-1),g={class:"row my-4 g-0"},d=["onClick"],h={class:"menu-item"},p={class:"menu-img"},b=["src","alt"],f={class:"menu-text d-flex flex-column hvr-forward"},y={class:"m-0 fs-4"},_={class:"m-0 fs-3 permanent-marker"},v=(0,s._)("i",{class:"bi bi-arrow-right-short fs-2 mt-2"},null,-1),w=(0,s._)("h2",{class:"text-white mb-4 text-center permanent-marker"},"SALE",-1),k=(0,s._)("h2",{class:"text-white mb-4 text-center"},"特價熱賣",-1),x={class:"d-flex justify-content-end"},C={class:"alert bg-white alert-dismissible fade show p-3 mx-auto fixed-bottom my-1 blinking",role:"alert",ref:"saleAlert",style:{width:"300px"}},T=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1);function E(e,t,E,j,P,$){const L=(0,s.up)("Navbar"),M=(0,s.up)("SwiperSlider"),W=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(L),(0,s._)("header",l,[(0,s._)("div",null,[a,(0,s._)("div",c,[(0,s._)("button",{type:"button",class:"btn btn-light",onClick:t[0]||(t[0]=(0,o.iM)((e=>$.goToProductCategory("all")),["prevent"]))}," 開始購物 ")])])]),(0,s._)("section",u,[m,(0,s._)("div",g,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(P.productMenu,(e=>((0,s.wg)(),(0,s.iD)("div",{class:"col-12 col-md-4 product-menu",key:e.title},[(0,s._)("a",{href:"#",onClick:(0,o.iM)((t=>$.goToProductCategory(e.category)),["prevent"])},[(0,s._)("div",h,[(0,s._)("div",p,[(0,s._)("img",{src:r(990)(`./${e.imgUrl}`),class:"img-fluid",alt:e.title},null,8,b),(0,s._)("span",{class:"color-overlay",style:(0,n.j5)(`background-color: ${e.backgroundColor}`)},null,4)]),(0,s._)("div",f,[(0,s._)("h5",y,(0,n.zw)(e.title),1),(0,s._)("h5",_,(0,n.zw)(e.titleEng),1),v])])],8,d)])))),128))])]),w,k,(0,s.Wm)(M,{category:"sale"}),(0,s._)("div",x,[(0,s._)("button",{type:"button",class:"btn btn-outline-light btn-sm me-5",onClick:t[1]||(t[1]=(0,o.iM)((e=>$.goToProductCategory("sale")),["prevent"]))}," 看更多 ")]),(0,s._)("div",C,[(0,s.Uk)(" 夏季全店特價7折優惠碼 'summer7' "),T],512),(0,s.Wm)(W)])}r(7658);var j=r(9876),P=r(7012),$=r(5511),L=r.n($),M=r(2295),W=r(6104),Z=r(6458),A={name:"HomePage",components:{SwiperSlider:M.Z,Navbar:W.Z,Footer:Z.Z},computed:{...(0,j.rn)(P.Z,["category"])},data(){return{productMenu:[{title:"戶外廚具",titleEng:"Cookware",category:"廚具",imgUrl:"layout-images/menu-image-cookware.jpg",height:150,backgroundColor:"rgba(42,62,51)"},{title:"咖啡系列",titleEng:"Coffee Gear",category:"咖啡",imgUrl:"layout-images/menu-image-coffee.jpg",height:150,backgroundColor:"rgba(111,66,37)"},{title:"野餐系列",titleEng:"Picnic Gear",category:"野餐",imgUrl:"layout-images/menu-image-picnic.jpg",height:150,backgroundColor:"rgba(188,121,53)"}]}},methods:{...(0,j.nv)(P.Z,["setCategory","scrollToTop"]),goToProductCategory(e){this.setCategory(e),this.$router.push("/user/products")}},created(){this.scrollToTop()},mounted(){this.alert=new(L())(this.$refs.saleAlert)}},N=r(3744);const S=(0,N.Z)(A,[["render",E]]);var U=S}}]);
//# sourceMappingURL=541.d318c0a8.js.map