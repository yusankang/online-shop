"use strict";(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[422],{7422:function(e,s,a){a.r(s),a.d(s,{default:function(){return $}});var l=a(6252),r=a(3577),o=a(9963);const t={class:"container pt-5"},m=(0,l._)("h3",{class:"text-white text-center pt-5 permanent-marker"},"Create Order",-1),d={class:"row d-flex flex-md-row-reverse"},n={class:"col-md-5 mb-3"},i={class:"card mb-3 border-0"},c={class:"col-md-7 mb-3"},u=(0,l._)("h5",{class:"text-center mb-3"},"建立訂單",-1),p={class:"mb-3"},f=(0,l._)("label",{for:"email",class:"form-label"},"收件人 Email *",-1),b={class:"mb-3"},h=(0,l._)("label",{for:"name",class:"form-label"},"收件人姓名 *",-1),g={class:"mb-3"},v=(0,l._)("label",{for:"tel",class:"form-label"},"收件人電話 *",-1),_={class:"mb-3"},V=(0,l._)("label",{for:"address",class:"form-label"},"地址 *",-1),W={class:"mb-3"},w=(0,l._)("label",{for:"message",class:"form-label"},"留言",-1),x=(0,l._)("div",{class:"text-end"},[(0,l._)("button",{type:"sumbit",class:"btn btn-warning w-100"},"建立訂單")],-1);function k(e,s,a,k,y,C){const O=(0,l.up)("LoadingOverlay"),T=(0,l.up)("CartProgressBar"),B=(0,l.up)("OrderItemsTotal"),P=(0,l.up)("OrderPriceTotal"),Z=(0,l.up)("Field"),L=(0,l.up)("ErrorMessage"),U=(0,l.up)("Form");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(O,{active:y.isLoading},null,8,["active"]),(0,l._)("div",t,[m,(0,l.Wm)(T,{"progress-bar":y.progressBar},null,8,["progress-bar"]),(0,l._)("div",d,[(0,l._)("div",n,[(0,l._)("div",i,[(0,l.Wm)(B,{progress:y.progressBar},null,8,["progress"]),(0,l.Wm)(P,{progress:y.progressBar},null,8,["progress"])])]),(0,l._)("div",c,[(0,l.Wm)(U,{class:"justify-content-center bg-white rounded p-3",onSubmit:C.createOrder},{default:(0,l.w5)((({errors:e})=>[u,(0,l._)("div",p,[f,(0,l.Wm)(Z,{type:"email",class:(0,r.C_)(["form-control",{"is-invalid":e["email"]}]),name:"email",id:"email",placeholder:"請輸入Email",rules:"email|required",modelValue:y.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=e=>y.form.user.email=e)},null,8,["class","modelValue"]),(0,l.Wm)(L,{name:"email",class:"invalid-feedback"})]),(0,l._)("div",b,[h,(0,l.Wm)(Z,{type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["姓名"]}]),name:"姓名",id:"name",placeholder:"請輸入姓名",rules:"required",modelValue:y.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=e=>y.form.user.name=e)},null,8,["class","modelValue"]),(0,l.Wm)(L,{name:"姓名",class:"invalid-feedback"})]),(0,l._)("div",g,[v,(0,l.Wm)(Z,{type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["電話"]}]),name:"電話",id:"tel",placeholder:"請輸入電話",oninput:"this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\\..*)\\./g, '$1');",rules:C.isPhone,modelValue:y.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=e=>y.form.user.tel=e)},null,8,["class","rules","modelValue"]),(0,l.Wm)(L,{name:"電話",class:"invalid-feedback"})]),(0,l._)("div",_,[V,(0,l.Wm)(Z,{type:"text",class:(0,r.C_)(["form-control",{"is-invalid":e["地址"]}]),id:"address",name:"地址",placeholder:"請輸入地址",rules:"required",modelValue:y.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=e=>y.form.user.address=e)},null,8,["class","modelValue"]),(0,l.Wm)(L,{name:"地址",class:"invalid-feedback"})]),(0,l._)("div",W,[w,(0,l.wy)((0,l._)("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=e=>y.form.message=e)},null,512),[[o.nr,y.form.message]])]),x])),_:1},8,["onSubmit"])])])])],64)}a(7658);var y=a(9876),C=a(6294),O=a(7012),T=a(1629),B=a(9628),P=a(7657),Z={components:{CartProgressBar:T.Z,OrderPriceTotal:B.Z,OrderItemsTotal:P.Z},data(){return{isLoading:!1,progressBar:2,form:{user:{name:"",email:"",tel:"",address:""},message:""}}},methods:{...(0,y.nv)(C.Z,["pushMessage"]),...(0,y.nv)(O.Z,["scrollToTop"]),createOrder(){const e="https://vue3-course-api.hexschool.io/api/yusan-api/order",s=this.form;this.isLoading=!0,this.$http.post(e,{data:s}).then((e=>{this.isLoading=!1;const{message:s}=e.data;e.data.success&&(this.pushMessage({title:s}),this.$router.push(`/user/checkout/${e.data.orderId}`))}))},isPhone(e){const s=/^(09)[0-9]{8}$/;return!!s.test(e)||"需要正確的電話號碼"}},created(){this.scrollToTop()}},L=a(3744);const U=(0,L.Z)(Z,[["render",k]]);var $=U}}]);
//# sourceMappingURL=422.a8cffc74.js.map