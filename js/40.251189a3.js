"use strict";(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[40],{4677:function(t,e,s){var a=s(9876),i=s(6154),o=s(6294);const r=(0,o.Z)();e["Z"]=(0,a.Q_)("cartStore",{state:()=>({cart:{},isUseCoupon:!1,couponPercent:100,couponCode:"",shippingFee:100,message:"",couponMessage:"",itemId:""}),actions:{getCart(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/cart";r.isLoading=!0,i.Z.get(t).then((t=>{r.isLoading=!1,this.cart=t.data.data,this.checkCouponCode(),localStorage.setItem("cart",JSON.stringify(this.cart))})).catch((t=>{throw new Error(t)}))},checkQty(t,e){let s=t.qty;this.message="",this.itemId="","add"===e&&s>=1&&s<20?(s+=1,this.updateCart(t,s)):"subtract"===e&&s>1&&s<=20?(s-=1,this.updateCart(t,s)):"add"===e&&20===s?(this.itemId=t.id,this.message="最多數量限20"):"subtract"===e&&1===s&&(this.itemId=t.id,this.message="最少數量限1")},updateCart(t,e){const s=`https://vue3-course-api.hexschool.io/api/yusan-api/cart/${t.id}`;r.isLoading=!0,r.cartLoadingItem=t.id;const a={product_id:t.product.id,qty:e};i.Z.put(s,{data:a}).then((()=>{r.isLoading=!1,r.cartLoadingItem="",this.getCart()})).catch((t=>{throw new Error(t.data.message)}))},addCart(t,e){const s="https://vue3-course-api.hexschool.io/api/yusan-api/cart/";r.cartLoadingItem=t;const a={product_id:t,qty:1};a.qty=e,i.Z.post(s,{data:a}).then((()=>{r.cartLoadingItem="",r.pushMessage({title:"加入購物車"}),this.isUseCoupon&&this.addCouponCode(this.couponCode),this.getCart()})).catch((t=>{throw new Error(t.data.message)}))},deleteItem(t){const e=`https://vue3-course-api.hexschool.io/api/yusan-api/cart/${t.id}`;r.isLoading=!0,i.Z["delete"](e).then((t=>{const{message:e}=t.data;r.isLoading=!1,t.data.success?(r.pushMessage({title:"刪除品項"}),this.getCart()):t.data.success||r.pushMessage({title:e,style:"danger"})})).catch((t=>{throw new Error(t)}))},deleteCart(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/carts";r.isLoading=!0,this.message="",i.Z["delete"](t).then((t=>{const{message:e}=t.data;r.isLoading=!1,t.data.success?(r.pushMessage({title:`購物車${e}`}),this.getCart()):t.data.success||r.pushMessage({title:e,style:"danger"})})).catch((t=>{throw new Error(t)}))},addCouponCode(t){if(""===t)this.couponMessage="請輸入優惠碼";else{const e="https://vue3-course-api.hexschool.io/api/yusan-api/coupon",s={code:t};r.isLoading=!0,i.Z.post(e,{data:s}).then((t=>{r.isLoading=!1,t.data.success?(this.CouponMessage="",this.getCart()):t.data.success||(this.couponMessage=t.data.message)})).catch((t=>{throw new Error(t)}))}},clearMessage(){this.couponMessage=""},checkCouponCode(){this.cart.carts[0]?this.cart.carts[0].coupon?(this.isUseCoupon=!0,this.couponCode=this.cart.carts[0].coupon.code,this.couponPercent=this.cart.carts[0].coupon.percent):this.cart.carts[0].coupon||(this.isUseCoupon=!1,this.couponCode="",this.couponPercent=100):this.cart.carts[0]||(this.isUseCoupon=!1,this.couponCode="",this.couponPercent=100)}}})},7012:function(t,e,s){s(7658);var a=s(9876),i=s(6154),o=s(6294);const r=(0,o.Z)();e["Z"]=(0,a.Q_)("productsStore",{state:()=>({allProducts:[],filteredProducts:[],displayProducts:[],product:{},paginationLimit:12,category:"",item:{}}),actions:{async getProducts(){const t="https://vue3-course-api.hexschool.io/api/yusan-api/products/all";r.isLoading=!0;try{const e=await i.Z.get(t);r.isLoading=!1,this.allProducts=e.data.products,this.filterCategory()}catch(e){throw new Error(e)}},setCategory(t){localStorage.setItem("currentCategory",JSON.stringify(t))},filterCategory(){this.category=JSON.parse(localStorage.getItem("currentCategory")),"all"!==this.category&&"sale"!==this.category?this.filteredProducts=this.allProducts.filter((t=>t.category===this.category)):"sale"===this.category?this.filteredProducts=this.allProducts.filter((t=>t.origin_price>t.price)):this.filteredProducts=this.allProducts,this.setCurrentPage(1)},setCurrentPage(t){this.displayProducts=[];const e=(t-1)*this.paginationLimit,s=t*this.paginationLimit;this.filteredProducts.forEach(((t,a)=>{a>=e&&a<s&&this.displayProducts.push(t)}))},async getProduct(t){const e=`https://vue3-course-api.hexschool.io/api/yusan-api/product/${t}`;r.isLoading=!0;try{const t=await i.Z.get(e);r.isLoading=!1,this.product=t.data.product}catch(s){throw new Error(s)}},scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}})},6294:function(t,e,s){s(7658);var a=s(9876);e["Z"]=(0,a.Q_)("statusStore",{state:()=>({isLoading:!1,cartLoadingItem:"",messages:[]}),actions:{pushMessage(t){const{title:e,content:s,style:a="success"}=t;this.messages.push({title:e,content:s,style:a})}}})},3040:function(t,e,s){s.r(e),s.d(e,{default:function(){return W}});var a=s(6252),i=s(3577),o=s(9963);const r=t=>((0,a.dD)("data-v-13886b77"),t=t(),(0,a.Cn)(),t),c=r((()=>(0,a._)("header",{class:"products-header header-img d-flex align-items-center justify-content-center mb-5"},[(0,a._)("div",null,[(0,a._)("h2",{class:"text-white text-center permanent-marker display-3"},"Inspired by Nature")])],-1))),n={class:"container"},u={class:"row gy-4"},d={class:"side-bar col-md-3"},l={class:"list-group sticky-md-top",style:{top:"100px"}},g={class:"col-md-9 mb-5 position-relative"},p={key:0,class:"text-white position-absolute top-50 start-50 translate-middle"},h={class:"row gy-4 mb-5"},m={class:"card h-100 border-0"},y=["src","alt"],C={class:"card-body d-flex flex-column"},P={class:"d-flex justify-content-between"},v={class:"card-title fs-6"},_={class:"d-flex justify-content-between align-items-center mt-auto"},f={class:"card-text m-0"},w={key:0},k={class:"fw-bold"},b=["onClick"],L=r((()=>(0,a._)("i",{class:"bi bi-arrow-right fs-4"},null,-1))),x=[L];function M(t,e,s,r,L,M){const Z=(0,a.up)("LoadingOverlay"),I=(0,a.up)("CustomPagination");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Z,{active:t.isLoading},null,8,["active"]),c,(0,a._)("section",n,[(0,a._)("div",u,[(0,a._)("div",d,[(0,a._)("ul",l,[(0,a._)("li",{class:(0,i.C_)(["list-group-item",{active:"all"===t.category}])},[(0,a._)("a",{href:"#",onClick:e[0]||(e[0]=(0,o.iM)((e=>(t.getProducts("all"),t.setCategory("all"))),["prevent"]))},"全部商品")],2),(0,a._)("li",{class:(0,i.C_)(["list-group-item",{active:"廚具"===t.category}])},[(0,a._)("a",{href:"#",onClick:e[1]||(e[1]=(0,o.iM)((e=>(t.setCategory("廚具"),t.getProducts())),["prevent"]))},"戶外廚具")],2),(0,a._)("li",{class:(0,i.C_)(["list-group-item",{active:"咖啡"===t.category}])},[(0,a._)("a",{href:"#",onClick:e[2]||(e[2]=(0,o.iM)((e=>(t.setCategory("咖啡"),t.getProducts())),["prevent"]))},"咖啡系列")],2),(0,a._)("li",{class:(0,i.C_)(["list-group-item",{active:"野餐"===t.category}])},[(0,a._)("a",{href:"#",onClick:e[3]||(e[3]=(0,o.iM)((e=>(t.setCategory("野餐"),t.getProducts())),["prevent"]))},"野餐系列")],2),(0,a._)("li",{class:(0,i.C_)(["list-group-item",{active:"sale"===t.category}])},[(0,a._)("a",{href:"#",onClick:e[4]||(e[4]=(0,o.iM)((e=>(t.setCategory("sale"),t.getProducts())),["prevent"]))},"Sale")],2)])]),(0,a._)("div",g,[0===this.displayProducts.length?((0,a.wg)(),(0,a.iD)("h5",p," 補貨中！請稍後再查詢 ")):(0,a.kq)("",!0),(0,a._)("div",h,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.displayProducts,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"col-md-6 col-lg-4",key:e.id},[(0,a._)("div",m,[(0,a._)("img",{src:e.imageUrl,alt:e.title,class:"card-img-top",style:{"min-height":"250px",height:"20vw","object-fit":"cover"}},null,8,y),(0,a._)("div",C,[(0,a._)("div",P,[(0,a._)("h5",v,(0,i.zw)(e.title),1)]),(0,a._)("div",_,[(0,a._)("p",f,[e.origin_price!==e.price?((0,a.wg)(),(0,a.iD)("s",w," $"+(0,i.zw)(t.$filters.currency(e.origin_price)),1)):(0,a.kq)("",!0),(0,a._)("span",k," $"+(0,i.zw)(t.$filters.currency(e.price)),1)]),(0,a._)("button",{type:"button",class:"btn bg-transparent stretched-link",onClick:(0,o.iM)((t=>M.getProduct(e.id)),["prevent"])},x,8,b)])])])])))),128))]),t.filteredProducts.length>0?((0,a.wg)(),(0,a.j4)(I,{key:1,"products-num":t.filteredProducts.length,"product-category":t.category,onEmitPages:t.setCurrentPage},null,8,["products-num","product-category","onEmitPages"])):(0,a.kq)("",!0)])])])],64)}s(7658);var Z=s(9876),I=s(7012),N=s(4677),E=s(6294);const S={"aria-label":"Page navigation example"},$={class:"pagination justify-content-center"},q={class:"page-item"},D=(0,a._)("span",{"aria-hidden":"true"},"«",-1),T=[D],j=["onClick"],B={class:"page-item"},U=(0,a._)("span",{"aria-hidden":"true"},"»",-1),z=[U];function O(t,e,s,r,c,n){return(0,a.wg)(),(0,a.iD)("nav",S,[(0,a._)("ul",$,[(0,a._)("li",q,[(0,a._)("a",{class:(0,i.C_)(["page-link",{disabled:1===c.currentPage}]),href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>n.prevButton&&n.prevButton(...t)),["prevent"]))},T,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n.pageCount,(t=>((0,a.wg)(),(0,a.iD)("li",{class:(0,i.C_)(["page-item",{active:c.currentPage===t}]),key:t},[(0,a._)("a",{class:"page-link",href:"#",onClick:(0,o.iM)((e=>n.updatePage(t)),["prevent"])},(0,i.zw)(t),9,j)],2)))),128)),(0,a._)("li",B,[(0,a._)("a",{class:(0,i.C_)(["page-link",{disabled:c.currentPage===n.pageCount}]),href:"#","aria-label":"Next",onClick:e[1]||(e[1]=(0,o.iM)(((...t)=>n.nextButton&&n.nextButton(...t)),["prevent"]))},z,2)])])])}var Q={props:{productsNum:{type:Number,required:!0,default:1},productCategory:{type:String,required:!0,default:"all"}},computed:{pageCount(){return Math.ceil(this.productsNum/this.paginationLimit)}},watch:{productCategory(){this.currentPage=1}},data(){return{paginationLimit:12,currentPage:1}},methods:{updatePage(t){this.currentPage=t,this.sendPageNum(this.currentPage)},nextButton(){this.currentPage+=1,this.sendPageNum(this.currentPage)},prevButton(){this.currentPage-=1,this.sendPageNum(this.currentPage)},sendPageNum(t){this.$emit("emit-pages",t)}},created(){this.currentPage=1}},H=s(3744);const J=(0,H.Z)(Q,[["render",O]]);var Y=J,K={components:{CustomPagination:Y},computed:{...(0,Z.rn)(I.Z,["allProducts","filteredProducts","displayProducts","pagination","category"]),...(0,Z.rn)(N.Z,["cart"]),...(0,Z.rn)(E.Z,["isLoading"])},methods:{...(0,Z.nv)(I.Z,["getProducts","filterProducts","setCategory","setCurrentPage","scrollToTop"]),getProduct(t){this.$router.push(`/user/product/${t}`)}},created(){this.getProducts(),this.scrollToTop()}};const F=(0,H.Z)(K,[["render",M],["__scopeId","data-v-13886b77"]]);var W=F}}]);
//# sourceMappingURL=40.251189a3.js.map