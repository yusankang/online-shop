(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[207],{3863:function(t,e,s){
/*!
  * Bootstrap collapse.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(5695),s(9286),s(8737),s(4072))})(0,(function(t,e,s,i){"use strict";const o="collapse",a="bs.collapse",n=`.${a}`,r=".data-api",c=`show${n}`,l=`shown${n}`,p=`hide${n}`,g=`hidden${n}`,u=`click${n}${r}`,d="show",h="collapse",f="collapsing",m="collapsed",b=`:scope .${h} .${h}`,_="collapse-horizontal",v="width",w="height",k=".collapse.show, .collapse.collapsing",y='[data-bs-toggle="collapse"]',C={parent:null,toggle:!0},x={parent:"(null|element)",toggle:"boolean"};class j extends t{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=s.find(y);for(const o of i){const t=s.getSelectorFromElement(o),e=s.find(t).filter((t=>t===this._element));null!==t&&e.length&&this._triggerArray.push(o)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return C}static get DefaultType(){return x}static get NAME(){return o}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(k).filter((t=>t!==this._element)).map((t=>j.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;const s=e.trigger(this._element,c);if(s.defaultPrevented)return;for(const e of t)e.hide();const i=this._getDimension();this._element.classList.remove(h),this._element.classList.add(f),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(h,d),this._element.style[i]="",e.trigger(this._element,l)},a=i[0].toUpperCase()+i.slice(1),n=`scroll${a}`;this._queueCallback(o,this._element,!0),this._element.style[i]=`${this._element[n]}px`}hide(){if(this._isTransitioning||!this._isShown())return;const t=e.trigger(this._element,p);if(t.defaultPrevented)return;const o=this._getDimension();this._element.style[o]=`${this._element.getBoundingClientRect()[o]}px`,i.reflow(this._element),this._element.classList.add(f),this._element.classList.remove(h,d);for(const e of this._triggerArray){const t=s.getElementFromSelector(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const a=()=>{this._isTransitioning=!1,this._element.classList.remove(f),this._element.classList.add(h),e.trigger(this._element,g)};this._element.style[o]="",this._queueCallback(a,this._element,!0)}_isShown(t=this._element){return t.classList.contains(d)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=i.getElement(t.parent),t}_getDimension(){return this._element.classList.contains(_)?v:w}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(y);for(const e of t){const t=s.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=s.find(b,this._config.parent);return s.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const s of t)s.classList.toggle(m,!e),s.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"===typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const s=j.getOrCreateInstance(this,e);if("string"===typeof t){if("undefined"===typeof s[t])throw new TypeError(`No method named "${t}"`);s[t]()}}))}}return e.on(document,u,y,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const e of s.getMultipleElementsFromSelector(this))j.getOrCreateInstance(e,{toggle:!1}).toggle()})),i.defineJQueryPlugin(j),j}))},6169:function(t,e,s){
/*!
  * Bootstrap offcanvas.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(5695),s(9286),s(8737),s(1358),s(1127),s(744),s(4072),s(1810))})(0,(function(t,e,s,i,o,a,n,r){"use strict";const c="offcanvas",l="bs.offcanvas",p=`.${l}`,g=".data-api",u=`load${p}${g}`,d="Escape",h="show",f="showing",m="hiding",b="offcanvas-backdrop",_=".offcanvas.show",v=`show${p}`,w=`shown${p}`,k=`hide${p}`,y=`hidePrevented${p}`,C=`hidden${p}`,x=`resize${p}`,j=`click${p}${g}`,L=`keydown.dismiss${p}`,A='[data-bs-toggle="offcanvas"]',E={backdrop:!0,keyboard:!0,scroll:!1},$={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class S extends t{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return E}static get DefaultType(){return $}static get NAME(){return c}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown)return;const s=e.trigger(this._element,v,{relatedTarget:t});if(s.defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||(new r).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(f);const i=()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(h),this._element.classList.remove(f),e.trigger(this._element,w,{relatedTarget:t})};this._queueCallback(i,this._element,!0)}hide(){if(!this._isShown)return;const t=e.trigger(this._element,k);if(t.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(m),this._backdrop.hide();const s=()=>{this._element.classList.remove(h,m),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new r).reset(),e.trigger(this._element,C)};this._queueCallback(s,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=()=>{"static"!==this._config.backdrop?this.hide():e.trigger(this._element,y)},s=Boolean(this._config.backdrop);return new i({className:b,isVisible:s,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:s?t:null})}_initializeFocusTrap(){return new a({trapElement:this._element})}_addEventListeners(){e.on(this._element,L,(t=>{t.key===d&&(this._config.keyboard?this.hide():e.trigger(this._element,y))}))}static jQueryInterface(t){return this.each((function(){const e=S.getOrCreateInstance(this,t);if("string"===typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return e.on(document,j,A,(function(t){const i=s.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),n.isDisabled(this))return;e.one(i,C,(()=>{n.isVisible(this)&&this.focus()}));const o=s.findOne(_);o&&o!==i&&S.getInstance(o).hide();const a=S.getOrCreateInstance(i);a.toggle(this)})),e.on(window,u,(()=>{for(const t of s.find(_))S.getOrCreateInstance(t).show()})),e.on(window,x,(()=>{for(const t of s.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&S.getOrCreateInstance(t).hide()})),o.enableDismissTrigger(S),n.defineJQueryPlugin(S),S}))},1358:function(t,e,s){
/*!
  * Bootstrap backdrop.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(9286),s(4547),s(4072))})(0,(function(t,e,s){"use strict";const i="backdrop",o="fade",a="show",n=`mousedown.bs.${i}`,r={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},c={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class l extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return r}static get DefaultType(){return c}static get NAME(){return i}show(t){if(!this._config.isVisible)return void s.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&s.reflow(e),e.classList.add(a),this._emulateAnimation((()=>{s.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(a),this._emulateAnimation((()=>{this.dispose(),s.execute(t)}))):s.execute(t)}dispose(){this._isAppended&&(t.off(this._element,n),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(o),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=s.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,n,(()=>{s.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){s.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return l}))},744:function(t,e,s){
/*!
  * Bootstrap focustrap.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(9286),s(8737),s(4547))})(0,(function(t,e,s){"use strict";const i="focustrap",o="bs.focustrap",a=`.${o}`,n=`focusin${a}`,r=`keydown.tab${a}`,c="Tab",l="forward",p="backward",g={autofocus:!0,trapElement:null},u={autofocus:"boolean",trapElement:"element"};class d extends s{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return g}static get DefaultType(){return u}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,a),t.on(document,n,(t=>this._handleFocusin(t))),t.on(document,r,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,a))}_handleFocusin(t){const{trapElement:s}=this._config;if(t.target===document||t.target===s||s.contains(t.target))return;const i=e.focusableChildren(s);0===i.length?s.focus():this._lastTabNavDirection===p?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===c&&(this._lastTabNavDirection=t.shiftKey?p:l)}}return d}))},1810:function(t,e,s){
/*!
  * Bootstrap scrollbar.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,i){t.exports=i(s(3175),s(8737),s(4072))})(0,(function(t,e,s){"use strict";const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",o=".sticky-top",a="padding-right",n="margin-right";class r{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,a,(e=>e+t)),this._setElementAttributes(i,a,(e=>e+t)),this._setElementAttributes(o,n,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,a),this._resetElementAttributes(i,a),this._resetElementAttributes(o,n)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,s){const i=this.getWidth(),o=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+i)return;this._saveInitialAttribute(t,e);const o=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${s(Number.parseFloat(o))}px`)};this._applyManipulationCallback(t,o)}_saveInitialAttribute(e,s){const i=e.style.getPropertyValue(s);i&&t.setDataAttribute(e,s,i)}_resetElementAttributes(e,s){const i=e=>{const i=t.getDataAttribute(e,s);null!==i?(t.removeDataAttribute(e,s),e.style.setProperty(s,i)):e.style.removeProperty(s)};this._applyManipulationCallback(e,i)}_applyManipulationCallback(t,i){if(s.isElement(t))i(t);else for(const s of e.find(t,this._element))i(s)}}return r}))},4677:function(t,e,s){"use strict";var i=s(9876),o=s(6154),a=s(6294);const n=(0,a.Z)();e["Z"]=(0,i.Q_)("cartStore",{state:()=>({cart:{},isUseCoupon:!1,couponPercent:100,couponCode:"",shippingFee:100,message:"",couponMessage:"",itemId:""}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/cart";n.isLoading=!0,o.Z.get(t).then((t=>{n.isLoading=!1,this.cart=t.data.data,this.checkCouponCode(),localStorage.setItem("cart",JSON.stringify(this.cart))})).catch((t=>{throw new Error(t)}))},checkQty(t,e){let s=t.qty;this.message="",this.itemId="","add"===e&&s>=1&&s<20?(s+=1,this.updateCart(t,s)):"subtract"===e&&s>1&&s<=20?(s-=1,this.updateCart(t,s)):"add"===e&&20===s?(this.itemId=t.id,this.message="最多數量限20"):"subtract"===e&&1===s&&(this.itemId=t.id,this.message="最少數量限1")},updateCart(t,e){const s=`https://vue3-course-api.hexschool.io/api/yusan-api/cart/${t.id}`;n.isLoading=!0,n.cartLoadingItem=t.id;const i={product_id:t.product.id,qty:e};o.Z.put(s,{data:i}).then((()=>{n.isLoading=!1,n.cartLoadingItem="",this.getCart()})).catch((t=>{throw new Error(t.data.message)}))},addCart(t,e){const s="https://vue3-course-api.hexschool.io/api/yusan-api/cart/";n.cartLoadingItem=t;const i={product_id:t,qty:1};i.qty=e,o.Z.post(s,{data:i}).then((()=>{n.cartLoadingItem="",n.pushMessage({title:"加入購物車"}),this.isUseCoupon&&this.addCouponCode(this.couponCode),this.getCart()})).catch((t=>{throw new Error(t.data.message)}))},deleteItem(t){const e=`https://vue3-course-api.hexschool.io/api/yusan-api/cart/${t.id}`;n.isLoading=!0,o.Z["delete"](e).then((t=>{const{message:e}=t.data;n.isLoading=!1,t.data.success?(n.pushMessage({title:"刪除品項"}),this.getCart()):t.data.success||n.pushMessage({title:e,style:"danger"})})).catch((t=>{throw new Error(t)}))},deleteCart(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/carts";n.isLoading=!0,this.message="",o.Z["delete"](t).then((t=>{const{message:e}=t.data;n.isLoading=!1,t.data.success?(n.pushMessage({title:`購物車${e}`}),this.getCart()):t.data.success||n.pushMessage({title:e,style:"danger"})})).catch((t=>{throw new Error(t)}))},addCouponCode(t){if(""===t)this.couponMessage="請輸入優惠碼";else{const e="https://vue3-course-api.hexschool.io/api/yusan-api/coupon",s={code:t};n.isLoading=!0,o.Z.post(e,{data:s}).then((t=>{n.isLoading=!1,t.data.success?(this.CouponMessage="",this.getCart()):t.data.success||(this.couponMessage=t.data.message)})).catch((t=>{throw new Error(t)}))}},clearMessage(){this.couponMessage=""},checkCouponCode(){this.cart.carts[0]?this.cart.carts[0].coupon?(this.isUseCoupon=!0,this.couponCode=this.cart.carts[0].coupon.code,this.couponPercent=this.cart.carts[0].coupon.percent):this.cart.carts[0].coupon||(this.isUseCoupon=!1,this.couponCode="",this.couponPercent=100):this.cart.carts[0]||(this.isUseCoupon=!1,this.couponCode="",this.couponPercent=100)}}})},7012:function(t,e,s){"use strict";s(7658);var i=s(9876),o=s(6154),a=s(6294);const n=(0,a.Z)();e["Z"]=(0,i.Q_)("productsStore",{state:()=>({allProducts:[],filteredProducts:[],displayProducts:[],product:{},paginationLimit:12,category:"",item:{}}),actions:{async getProducts(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/products/all";n.isLoading=!0;try{const e=await o.Z.get(t);n.isLoading=!1,this.allProducts=e.data.products,this.filterCategory()}catch(e){throw new Error(e)}},setCategory(t){localStorage.setItem("currentCategory",JSON.stringify(t))},filterCategory(){this.category=JSON.parse(localStorage.getItem("currentCategory")),"all"!==this.category&&"sale"!==this.category?this.filteredProducts=this.allProducts.filter((t=>t.category===this.category)):"sale"===this.category?this.filteredProducts=this.allProducts.filter((t=>t.origin_price>t.price)):this.filteredProducts=this.allProducts,this.setCurrentPage(1)},setCurrentPage(t){this.displayProducts=[];const e=(t-1)*this.paginationLimit,s=t*this.paginationLimit;this.filteredProducts.forEach(((t,i)=>{i>=e&&i<s&&this.displayProducts.push(t)}))},async getProduct(t){const e=`https://vue3-course-api.hexschool.io/api/yusan-api/product/${t}`;n.isLoading=!0;try{const t=await o.Z.get(e);n.isLoading=!1,this.product=t.data.product}catch(s){throw new Error(s)}},scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}})},2981:function(t,e,s){"use strict";s.d(e,{Z:function(){return b}});var i=s(6252),o=s(9963);const a={class:"mt-auto"},n={class:"d-flex mt-3 justify-content-between border-top border-2 pt-3 pb-4 px-2 px-md-5 align-items-center"},r=(0,i._)("h6",{class:"text-white m-0",style:{"font-size":"14px"}},"All rights reserved | Icon by Freepik",-1),c=(0,i._)("i",{class:"bi bi-instagram"},null,-1),l=[c],p=(0,i._)("i",{class:"bi bi-facebook"},null,-1),g=[p],u=(0,i._)("i",{class:"bi bi-person-fill"},null,-1);function d(t,e){const s=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("footer",a,[(0,i._)("div",n,[r,(0,i._)("div",null,[(0,i._)("a",{href:"#",class:"me-3 hvr-grow text-white",onClick:e[0]||(e[0]=(0,o.iM)((()=>{}),["prevent"]))},l),(0,i._)("a",{href:"#",class:"me-3 hvr-grow text-white",onClick:e[1]||(e[1]=(0,o.iM)((()=>{}),["prevent"]))},g),(0,i.Wm)(s,{to:"/login",class:"hvr-grow text-white"},{default:(0,i.w5)((()=>[u])),_:1})])])])}var h=s(3744);const f={},m=(0,h.Z)(f,[["render",d]]);var b=m},6104:function(t,e,s){"use strict";s.d(e,{Z:function(){return ct}});var i=s(6252),o=s(3577),a=s(9963);const n={class:"container-fluid"},r=["src"],c=(0,i._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,i._)("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarNav",ref:"navbarCollapse"},p={class:"navbar-nav ms-auto"},g={class:"nav-item mx-3"},u={class:"nav-item mx-3"},d={class:"nav-item mx-3"},h={class:"nav-item mx-3"},f=["disabled"],m=(0,i._)("i",{class:"bi bi-cart3"},null,-1),b={key:0,class:"badge rounded-pill bg-warning text-dark position-absolute top-25 start-md-100 translate-middle"};function _(t,e,_,v,w,k){const y=(0,i.up)("router-link"),C=(0,i.up)("CartOffcanvas");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",{class:(0,o.C_)(["navbar navbar-expand-md fixed-top",w.navbarClass]),ref:"navbar",style:{transition:"all 1s"}},[(0,i._)("div",n,[(0,i.Wm)(y,{to:"/",class:"navbar-brand hvr-grow p-0"},{default:(0,i.w5)((()=>[(0,i._)("h1",null,[(0,i._)("img",{src:s(990)(`./${w.logoUrl}`),alt:"野生廚房 logo",style:{height:"40px"}},null,8,r)])])),_:1}),c,(0,i._)("div",l,[(0,i._)("ul",p,[(0,i._)("li",g,[(0,i.Wm)(y,{to:"/user/products",class:(0,o.C_)(["nav-link fs-6",w.navLinksClass]),onClick:e[0]||(e[0]=(0,a.iM)((e=>(t.setCategory("all"),k.closeCollapse())),["prevent"])),active:""},{default:(0,i.w5)((()=>[(0,i.Uk)("商品列表 ")])),_:1},8,["class"])]),(0,i._)("li",u,[(0,i.Wm)(y,{to:"/user/about",class:(0,o.C_)(["nav-link fs-6",w.navLinksClass]),onClick:(0,a.iM)(k.closeCollapse,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)("關於我們 ")])),_:1},8,["class","onClick"])]),(0,i._)("li",d,[(0,i.Wm)(y,{to:"/user/ordersearch",class:(0,o.C_)(["nav-link fs-6",w.navLinksClass]),onClick:(0,a.iM)(k.closeCollapse,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)("查詢訂單 ")])),_:1},8,["class","onClick"])]),(0,i._)("li",h,[(0,i._)("button",{class:(0,o.C_)(["nav-link fs-6 position-relative",w.navLinksClass]),onClick:e[1]||(e[1]=(0,a.iM)((t=>(k.openOffcanvas,k.closeCollapse())),["prevent"])),disabled:t.isLoading,"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasScrolling","aria-controls":"offcanvasScrolling"},[m,w.currentCart.carts.length>0?((0,i.wg)(),(0,i.iD)("span",b,(0,o.zw)(w.currentCart.carts.length),1)):(0,i.kq)("",!0)],10,f)])])],512)])],2),(0,i.Wm)(C,{ref:"cartOffcanvas"},null,512)],64)}var v=s(9876),w=s(4677),k=s(7012),y=s(6294),C=s(3863),x=s.n(C);const j={class:"offcanvas offcanvas-end",ref:"offcanvas","data-bs-scroll":"true","data-bs-backdrop":"false",tabindex:"-1",id:"offcanvasScrolling","aria-labelledby":"offcanvasScrollingLabel"},L=(0,i._)("div",{class:"offcanvas-header"},[(0,i._)("h5",{class:"offcanvas-title",id:"offcanvasScrollingLabel"},"購物車"),(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),A={class:"offcanvas-body"},E={key:0,class:"table table-sm align-middle"},$={style:{width:"90px"},class:"ps-0"},S=["src","alt"],O={class:"py-3"},N={class:"d-flex justify-content-between align-items-center"},D={class:"fs-6 mt-2"},P=["onClick","disabled"],I=(0,i._)("i",{class:"bi bi-trash3",style:{"font-size":"22px"}},null,-1),M=[I],T={class:"d-flex justify-content-between align-items-center"},q={for:"qty",class:"input-group input-group-sm my-2"},Z=["onClick","disabled"],W=(0,i._)("i",{class:"bi bi-dash"},null,-1),z=[W],U=["onUpdate:modelValue"],F={class:"input-group-text"},B=["onClick","disabled"],Q=(0,i._)("i",{class:"bi bi-plus"},null,-1),V=[Q],J={class:"d-flex justify-content-between"},K={key:0,class:"text-danger"},R={key:1,class:"d-flex flex-column align-items-center mt-5 text-warning"},Y=(0,i._)("h5",{class:"mb-3"},"購物車沒有商品",-1),H=(0,i._)("p",{class:"text-center"},"訂單滿$2,000免運！",-1),G={class:"d-grid mt-3"};function X(t,e,s,n,r,c){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",j,[L,(0,i._)("div",A,[t.cart.final_total>0?((0,i.wg)(),(0,i.iD)("table",E,[(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.cart.carts,(e=>((0,i.wg)(),(0,i.iD)("tr",{key:e.id},[(0,i._)("td",$,[(0,i._)("img",{src:e.product.imageUrl,alt:e.product.title,class:"img-fluid"},null,8,S)]),(0,i._)("td",O,[(0,i._)("div",N,[(0,i._)("h5",D,[(0,i._)("strong",null,(0,o.zw)(e.product.title),1)]),(0,i._)("button",{type:"button",class:"btn btn-sm text-warning p-0 border-0",onClick:s=>t.deleteItem(e),disabled:t.isLoading,style:{width:"44px",height:"44px"}},M,8,P)]),(0,i._)("div",T,[(0,i._)("span",null,"單價 $"+(0,o.zw)(t.$filters.currency(e.product.price)),1),(0,i._)("div",null,(0,o.zw)(e.qty)+"/"+(0,o.zw)(e.product.unit),1)]),(0,i._)("div",null,[(0,i._)("label",q,[(0,i._)("button",{class:"btn btn-outline-warning",type:"button",onClick:(0,a.iM)((s=>t.checkQty(e,"subtract")),["prevent"]),disabled:t.isLoading},z,8,Z),(0,i.wy)((0,i._)("input",{type:"text",id:"qty",class:"form-control bg-white","onUpdate:modelValue":t=>e.qty=t,disabled:""},null,8,U),[[a.nr,e.qty,void 0,{number:!0}]]),(0,i._)("div",F,"/ "+(0,o.zw)(e.product.unit),1),(0,i._)("button",{class:"btn btn-outline-warning",type:"button",onClick:(0,a.iM)((s=>t.checkQty(e,"add")),["prevent"]),disabled:t.isLoading},V,8,B)])]),(0,i._)("div",J,[(0,i._)("strong",null,"$"+(0,o.zw)(t.$filters.currency(e.total)),1),t.message&&t.itemId===e.id?((0,i.wg)(),(0,i.iD)("span",K,(0,o.zw)(t.message)+(0,o.zw)(e.product.unit),1)):(0,i.kq)("",!0)])])])))),128))])])):((0,i.wg)(),(0,i.iD)("div",R,[Y,(0,i.Wm)(l,{to:"/user/products",class:"btn btn-warning mb-3",onClick:c.hideOffcanvas},{default:(0,i.w5)((()=>[(0,i.Uk)(" 開始購物 ")])),_:1},8,["onClick"])])),H,(0,i._)("div",G,[t.cart.final_total>0?((0,i.wg)(),(0,i.j4)(l,{key:0,to:"/user/cart",class:"btn btn-warning",onClick:(0,a.iM)(c.hideOffcanvas,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 前往購物車 ")])),_:1},8,["onClick"])):(0,i.kq)("",!0)])])],512)}var tt=s(6169),et=s.n(tt),st={computed:{...(0,v.rn)(w.Z,["cart","message","itemId"]),...(0,v.rn)(y.Z,["isLoading"])},methods:{...(0,v.nv)(w.Z,["getCart","deleteItem","checkQty"]),showOffcanvas(){this.offcanvas.show()},hideOffcanvas(){this.offcanvas.hide()}},mounted(){this.offcanvas=new(et())(this.$refs.offcanvas),this.getCart()}},it=s(3744);const ot=(0,it.Z)(st,[["render",X]]);var at=ot,nt={computed:{...(0,v.rn)(w.Z,["cart"]),...(0,v.rn)(k.Z,["favProducts"]),...(0,v.rn)(y.Z,["isLoading"])},components:{CartOffcanvas:at},watch:{cart(){this.currentCart=this.cart}},data(){return{collapse:{},screenWidth:0,logoUrl:"logos/logo-white.png",navbarClass:{"bg-transparent":!0,"bg-white":!1},navLinksClass:{"text-white":!0,"text-dark":!1},activeLinkClass:{"border-bottom":!1,"border-3":!0},collapseOpen:!1,currentCart:{}}},methods:{...(0,v.nv)(k.Z,["setCategory"]),...(0,v.nv)(w.Z,["getCart"]),changeNavBg(){const t=window.scrollY;!0===this.collapseOpen||t>100?(this.logoUrl="logos/logo-black.png",this.navbarClass={"bg-transparent":!1,"bg-white":!0},this.navLinksClass={"text-white":!1,"text-dark":!0}):!1===this.collapseOpen&&t<=100&&(this.logoUrl="logos/logo-white.png",this.navbarClass={"bg-transparent":!0,"bg-white":!1},this.navLinksClass={"text-white":!0,"text-dark":!1})},openOffcanvas(){const t=this.$refs.cartOffcanvas;t.showOffcanvas()},closeCollapse(){this.collapse.hide()},onScreenResize(){window.addEventListener("resize",(()=>{this.updateScreenWidth()}))},updateScreenWidth(){this.screenWidth=window.innerWidth,this.screenWidth>=768?(this.collapse.hide(),this.collapseOpen=!1,this.changeNavBg()):this.screenWidth<768&&this.updateCollapseState()},updateCollapseState(){const{navbarCollapse:t}=this.$refs;t&&(t.addEventListener("show.bs.collapse",(()=>{this.collapseOpen=!0,this.changeNavBg()})),t.addEventListener("shown.bs.collapse",(()=>{this.collapseOpen=!0,this.changeNavBg()})),t.addEventListener("hide.bs.collapse",(()=>{this.collapseOpen=!1,this.changeNavBg()})),t.addEventListener("hidden.bs.collapse",(()=>{this.collapseOpen=!1,this.changeNavBg()})))}},mounted(){this.collapse=new(x())(this.$refs.navbarCollapse,{toggle:!1}),window.addEventListener("scroll",this.changeNavBg),this.updateScreenWidth(),this.onScreenResize()},beforeUnmount(){window.removeEventListener("scroll",this.changeNavBg)},created(){null!==localStorage.getItem("cart")?this.currentCart=JSON.parse(localStorage.getItem("cart")):this.currentCart={carts:[]}}};const rt=(0,it.Z)(nt,[["render",_]]);var ct=rt},990:function(t,e,s){var i={"./layout-images/about-header.jpg":425,"./layout-images/homepage-image-crop.jpg":9904,"./layout-images/menu-image-coffee.jpg":8563,"./layout-images/menu-image-cookware.jpg":9442,"./layout-images/menu-image-picnic.jpg":5955,"./layout-images/products-header-cooker.jpg":3390,"./logos/logo-black.png":8605,"./logos/logo-white.png":2804,"./product-images/coffee/cup-adventure-black-crop-1.jpg":6721,"./product-images/coffee/cup-adventure-black-crop-2.jpg":4211,"./product-images/coffee/cup-adventure-white-crop-1.jpg":1894,"./product-images/coffee/cup-adventure-white-crop-2.jpg":5081,"./product-images/coffee/foldable-pourover.jpg":2739,"./product-images/coffee/grey-stove-crop-1.jpg":2238,"./product-images/coffee/grey-stove-crop-2.jpg":8309,"./product-images/coffee/happy-camper-crop-1.jpg":1453,"./product-images/coffee/happy-camper-crop-2.jpg":9389,"./product-images/coffee/leather-stove-crop-1.jpg":9357,"./product-images/coffee/leather-stove-crop-2.jpg":1373,"./product-images/coffee/leather-stove-crop-3.jpg":2406,"./product-images/coffee/trees-cup.jpg":4593,"./product-images/cookware/bbq-crop-1.jpg":7074,"./product-images/cookware/bbq-crop-2.jpg":3030,"./product-images/cookware/black-caudron-crop.jpg":2621,"./product-images/cookware/black-grill-crop-1.jpg":7311,"./product-images/cookware/black-grill-crop-2.jpg":645,"./product-images/cookware/flat-kettle-crop-1.jpg":7219,"./product-images/cookware/flat-kettle-crop-2.jpg":7069,"./product-images/cookware/green-stove-crop.jpg":4012,"./product-images/cookware/mashmallow-skewers.jpg":5182,"./product-images/cookware/red-handle-pot-crop-1.jpg":9326,"./product-images/cookware/red-handle-pot-crop-2.jpg":4140,"./product-images/cookware/small-pot-crop-1.jpg":6563,"./product-images/cookware/small-pot-crop-2.jpg":5264,"./product-images/cookware/square-pan.jpg":2373,"./product-images/cookware/stove-with-handle-crop.jpg":1986,"./product-images/cookware/table-stove-crop-2.jpg":8076,"./product-images/cookware/table-stove-crop-3.jpg":3283,"./product-images/cookware/table-stove-crop-4.jpg":7184,"./product-images/cookware/tripod-bbq-crop-1.jpg":1945,"./product-images/cookware/tripod-bbq-crop-2.jpg":4317,"./product-images/picnic/blue-stripe-blanket-crop.jpg":7971,"./product-images/picnic/bohemian-rug.jpg":5889,"./product-images/picnic/green-blanket-crop-1.jpg":9059,"./product-images/picnic/green-blanket-crop-2.jpg":8139,"./product-images/picnic/jug-crop-1.jpg":7026,"./product-images/picnic/jug-crop-2.jpg":48,"./product-images/picnic/picnic-basket-3.jpg":4956,"./product-images/picnic/picnic-basket-4.jpg":5679,"./product-images/picnic/picnic-basket-crop-1.jpg":981,"./product-images/picnic/picnic-table.jpg":2864,"./product-images/picnic/small-basket.jpg":6029,"./product-images/picnic/stripe-blanket-crop.jpg":7573,"./product-images/picnic/striped-picnic-basket-crop-1.jpg":5701,"./product-images/picnic/striped-picnic-basket-crop-2.jpg":2424,"./product-images/picnic/white-umbrella-crop-1.jpg":7760,"./product-images/picnic/white-umbrella-crop-2.jpg":568,"./product-images/picnic/white-umbrella-crop-3.jpg":5510,"./product-images/picnic/woven-bag-1.jpg":4878,"./product-images/picnic/woven-bag-2.jpg":7909};function o(t){var e=a(t);return s(e)}function a(t){if(!s.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=a,t.exports=o,o.id=990},425:function(t,e,s){"use strict";t.exports=s.p+"img/about-header.44c02761.jpg"},9904:function(t,e,s){"use strict";t.exports=s.p+"img/homepage-image-crop.4e084cf0.jpg"},8563:function(t,e,s){"use strict";t.exports=s.p+"img/menu-image-coffee.22a08256.jpg"},9442:function(t,e,s){"use strict";t.exports=s.p+"img/menu-image-cookware.198ba0a1.jpg"},5955:function(t,e,s){"use strict";t.exports=s.p+"img/menu-image-picnic.0e3929d1.jpg"},3390:function(t,e,s){"use strict";t.exports=s.p+"img/products-header-cooker.0ba03051.jpg"},8605:function(t,e,s){"use strict";t.exports=s.p+"img/logo-black.06026422.png"},2804:function(t,e,s){"use strict";t.exports=s.p+"img/logo-white.e296c563.png"},6721:function(t,e,s){"use strict";t.exports=s.p+"img/cup-adventure-black-crop-1.7e5f69c8.jpg"},4211:function(t,e,s){"use strict";t.exports=s.p+"img/cup-adventure-black-crop-2.0c117934.jpg"},1894:function(t,e,s){"use strict";t.exports=s.p+"img/cup-adventure-white-crop-1.8c64166f.jpg"},5081:function(t,e,s){"use strict";t.exports=s.p+"img/cup-adventure-white-crop-2.8915fc60.jpg"},2739:function(t,e,s){"use strict";t.exports=s.p+"img/foldable-pourover.2a96a299.jpg"},2238:function(t,e,s){"use strict";t.exports=s.p+"img/grey-stove-crop-1.cb4c025a.jpg"},8309:function(t,e,s){"use strict";t.exports=s.p+"img/grey-stove-crop-2.54d6b3af.jpg"},1453:function(t,e,s){"use strict";t.exports=s.p+"img/happy-camper-crop-1.1e5c6dcb.jpg"},9389:function(t,e,s){"use strict";t.exports=s.p+"img/happy-camper-crop-2.425ceb0e.jpg"},9357:function(t,e,s){"use strict";t.exports=s.p+"img/leather-stove-crop-1.a9845303.jpg"},1373:function(t,e,s){"use strict";t.exports=s.p+"img/leather-stove-crop-2.05b260b9.jpg"},2406:function(t,e,s){"use strict";t.exports=s.p+"img/leather-stove-crop-3.241294b0.jpg"},4593:function(t,e,s){"use strict";t.exports=s.p+"img/trees-cup.968d32e7.jpg"},7074:function(t,e,s){"use strict";t.exports=s.p+"img/bbq-crop-1.86ac4d63.jpg"},3030:function(t,e,s){"use strict";t.exports=s.p+"img/bbq-crop-2.9c090ffc.jpg"},2621:function(t,e,s){"use strict";t.exports=s.p+"img/black-caudron-crop.4871a174.jpg"},7311:function(t,e,s){"use strict";t.exports=s.p+"img/black-grill-crop-1.ba3aa467.jpg"},645:function(t,e,s){"use strict";t.exports=s.p+"img/black-grill-crop-2.abf6f71f.jpg"},7219:function(t,e,s){"use strict";t.exports=s.p+"img/flat-kettle-crop-1.6ef3b6d6.jpg"},7069:function(t,e,s){"use strict";t.exports=s.p+"img/flat-kettle-crop-2.c3b3e6e7.jpg"},4012:function(t,e,s){"use strict";t.exports=s.p+"img/green-stove-crop.3ee5a687.jpg"},5182:function(t,e,s){"use strict";t.exports=s.p+"img/mashmallow-skewers.478d019b.jpg"},9326:function(t,e,s){"use strict";t.exports=s.p+"img/red-handle-pot-crop-1.6a0ac495.jpg"},4140:function(t,e,s){"use strict";t.exports=s.p+"img/red-handle-pot-crop-2.f0f89f55.jpg"},6563:function(t,e,s){"use strict";t.exports=s.p+"img/small-pot-crop-1.d22038cf.jpg"},5264:function(t,e,s){"use strict";t.exports=s.p+"img/small-pot-crop-2.bdb75470.jpg"},2373:function(t,e,s){"use strict";t.exports=s.p+"img/square-pan.1d4ef8eb.jpg"},1986:function(t,e,s){"use strict";t.exports=s.p+"img/stove-with-handle-crop.c12346b4.jpg"},8076:function(t,e,s){"use strict";t.exports=s.p+"img/table-stove-crop-2.86e9c3e7.jpg"},3283:function(t,e,s){"use strict";t.exports=s.p+"img/table-stove-crop-3.079c122c.jpg"},7184:function(t,e,s){"use strict";t.exports=s.p+"img/table-stove-crop-4.1c2133e7.jpg"},1945:function(t,e,s){"use strict";t.exports=s.p+"img/tripod-bbq-crop-1.c6e14296.jpg"},4317:function(t,e,s){"use strict";t.exports=s.p+"img/tripod-bbq-crop-2.9f990d00.jpg"},7971:function(t,e,s){"use strict";t.exports=s.p+"img/blue-stripe-blanket-crop.a4c2bddd.jpg"},5889:function(t,e,s){"use strict";t.exports=s.p+"img/bohemian-rug.61589dc5.jpg"},9059:function(t,e,s){"use strict";t.exports=s.p+"img/green-blanket-crop-1.a37a5b09.jpg"},8139:function(t,e,s){"use strict";t.exports=s.p+"img/green-blanket-crop-2.7737be5b.jpg"},7026:function(t,e,s){"use strict";t.exports=s.p+"img/jug-crop-1.6e1eef78.jpg"},48:function(t,e,s){"use strict";t.exports=s.p+"img/jug-crop-2.8ce9f7fc.jpg"},4956:function(t,e,s){"use strict";t.exports=s.p+"img/picnic-basket-3.45fc2865.jpg"},5679:function(t,e,s){"use strict";t.exports=s.p+"img/picnic-basket-4.eab88578.jpg"},981:function(t,e,s){"use strict";t.exports=s.p+"img/picnic-basket-crop-1.e4afa835.jpg"},2864:function(t,e,s){"use strict";t.exports=s.p+"img/picnic-table.e336cfc9.jpg"},6029:function(t,e,s){"use strict";t.exports=s.p+"img/small-basket.21609f81.jpg"},7573:function(t,e,s){"use strict";t.exports=s.p+"img/stripe-blanket-crop.8d666e9e.jpg"},5701:function(t,e,s){"use strict";t.exports=s.p+"img/striped-picnic-basket-crop-1.3ceda39e.jpg"},2424:function(t,e,s){"use strict";t.exports=s.p+"img/striped-picnic-basket-crop-2.4afba8e8.jpg"},7760:function(t,e,s){"use strict";t.exports=s.p+"img/white-umbrella-crop-1.03286b1d.jpg"},568:function(t,e,s){"use strict";t.exports=s.p+"img/white-umbrella-crop-2.cb9016e3.jpg"},5510:function(t,e,s){"use strict";t.exports=s.p+"img/white-umbrella-crop-3.877090ec.jpg"},4878:function(t,e,s){"use strict";t.exports=s.p+"img/woven-bag-1.5595ad5b.jpg"},7909:function(t,e,s){"use strict";t.exports=s.p+"img/woven-bag-2.e7a37c06.jpg"}}]);
//# sourceMappingURL=207.7579d65b.js.map