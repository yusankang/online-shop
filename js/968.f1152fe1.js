(self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[]).push([[968],{7424:function(t,e,i){
/*!
  * Bootstrap modal.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(5695),i(9286),i(8737),i(1358),i(1127),i(744),i(4072),i(1810))})(0,(function(t,e,i,s,n,o,l,a){"use strict";const r="modal",d="bs.modal",c=`.${d}`,h=".data-api",u="Escape",m=`hide${c}`,_=`hidePrevented${c}`,g=`hidden${c}`,f=`show${c}`,p=`shown${c}`,b=`resize${c}`,w=`click.dismiss${c}`,k=`mousedown.dismiss${c}`,y=`keydown.dismiss${c}`,v=`click${c}${h}`,A="modal-open",E="fade",T="show",D="modal-static",I=".modal.show",$=".modal-dialog",x=".modal-body",C='[data-bs-toggle="modal"]',L={backdrop:!0,focus:!0,keyboard:!0},N={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class M extends t{constructor(t,e){super(t,e),this._dialog=i.findOne($,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new a,this._addEventListeners()}static get Default(){return L}static get DefaultType(){return N}static get NAME(){return r}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const i=e.trigger(this._element,f,{relatedTarget:t});i.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(A),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){if(!this._isShown||this._isTransitioning)return;const t=e.trigger(this._element,m);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(T),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated()))}dispose(){e.off(window,c),e.off(this._dialog,c),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new s({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new o({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const s=i.findOne(x,this._dialog);s&&(s.scrollTop=0),l.reflow(this._element),this._element.classList.add(T);const n=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,e.trigger(this._element,p,{relatedTarget:t})};this._queueCallback(n,this._dialog,this._isAnimated())}_addEventListeners(){e.on(this._element,y,(t=>{t.key===u&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),e.on(window,b,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),e.on(this._element,k,(t=>{e.one(this._element,w,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(A),this._resetAdjustments(),this._scrollBar.reset(),e.trigger(this._element,g)}))}_isAnimated(){return this._element.classList.contains(E)}_triggerBackdropTransition(){const t=e.trigger(this._element,_);if(t.defaultPrevented)return;const i=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;"hidden"===s||this._element.classList.contains(D)||(i||(this._element.style.overflowY="hidden"),this._element.classList.add(D),this._queueCallback((()=>{this._element.classList.remove(D),this._queueCallback((()=>{this._element.style.overflowY=s}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=l.isRTL()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=l.isRTL()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=M.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return e.on(document,v,C,(function(t){const s=i.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),e.one(s,f,(t=>{t.defaultPrevented||e.one(s,g,(()=>{l.isVisible(this)&&this.focus()}))}));const n=i.findOne(I);n&&M.getInstance(n).hide();const o=M.getOrCreateInstance(s);o.toggle(this)})),n.enableDismissTrigger(M),l.defineJQueryPlugin(M),M}))},1358:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(9286),i(4547),i(4072))})(0,(function(t,e,i){"use strict";const s="backdrop",n="fade",o="show",l=`mousedown.bs.${s}`,a={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},r={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class d extends e{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return a}static get DefaultType(){return r}static get NAME(){return s}show(t){if(!this._config.isVisible)return void i.execute(t);this._append();const e=this._getElement();this._config.isAnimated&&i.reflow(e),e.classList.add(o),this._emulateAnimation((()=>{i.execute(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(o),this._emulateAnimation((()=>{this.dispose(),i.execute(t)}))):i.execute(t)}dispose(){this._isAppended&&(t.off(this._element,l),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(n),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=i.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),t.on(e,l,(()=>{i.execute(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){i.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return d}))},744:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(9286),i(8737),i(4547))})(0,(function(t,e,i){"use strict";const s="focustrap",n="bs.focustrap",o=`.${n}`,l=`focusin${o}`,a=`keydown.tab${o}`,r="Tab",d="forward",c="backward",h={autofocus:!0,trapElement:null},u={autofocus:"boolean",trapElement:"element"};class m extends i{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return h}static get DefaultType(){return u}static get NAME(){return s}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),t.off(document,o),t.on(document,l,(t=>this._handleFocusin(t))),t.on(document,a,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,t.off(document,o))}_handleFocusin(t){const{trapElement:i}=this._config;if(t.target===document||t.target===i||i.contains(t.target))return;const s=e.focusableChildren(i);0===s.length?i.focus():this._lastTabNavDirection===c?s[s.length-1].focus():s[0].focus()}_handleKeydown(t){t.key===r&&(this._lastTabNavDirection=t.shiftKey?c:d)}}return m}))},1810:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.3.0-alpha3 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i(3175),i(8737),i(4072))})(0,(function(t,e,i){"use strict";const s=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",n=".sticky-top",o="padding-right",l="margin-right";class a{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,(e=>e+t)),this._setElementAttributes(s,o,(e=>e+t)),this._setElementAttributes(n,l,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(s,o),this._resetElementAttributes(n,l)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(n))}px`)};this._applyManipulationCallback(t,n)}_saveInitialAttribute(e,i){const s=e.style.getPropertyValue(i);s&&t.setDataAttribute(e,i,s)}_resetElementAttributes(e,i){const s=e=>{const s=t.getDataAttribute(e,i);null!==s?(t.removeDataAttribute(e,i),e.style.setProperty(i,s)):e.style.removeProperty(i)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(t,s){if(i.isElement(t))s(t);else for(const i of e.find(t,this._element))s(i)}}return a}))},1339:function(t,e,i){"use strict";var s=i(7424),n=i.n(s);e["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(n())(this.$refs.modal)}}},968:function(t,e,i){"use strict";i.d(e,{Z:function(){return D}});var s=i(6252),n=i(3577);const o={class:"modal fade",tabindex:"-1",ref:"modal"},l={class:"modal-dialog"},a={class:"modal-content border-0"},r={class:"modal-header bg-light"},d={class:"modal-title"},c={key:0},h={key:1},u={key:2},m=(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),_={class:"modal-body"},g={key:0},f={key:1},p={key:2},b=(0,s._)("p",null,"刪除後將無法恢復",-1),w={class:"modal-footer"},k=(0,s._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 不刪除 ",-1);function y(t,e,i,y,v,A){return(0,s.wg)(),(0,s.iD)("div",o,[(0,s._)("div",l,[(0,s._)("div",a,[(0,s._)("div",r,[(0,s._)("h5",d,[i.selectedItem.title?((0,s.wg)(),(0,s.iD)("span",c,"刪除 "+(0,n.zw)(i.selectedItem.title),1)):(0,s.kq)("",!0),i.selectedItem.title||i.selectedItem.product?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",h," 刪除訂單 "+(0,n.zw)(i.selectedItem.id),1)),i.selectedItem.product?((0,s.wg)(),(0,s.iD)("span",u,"刪除品項 "+(0,n.zw)(i.selectedItem.product.title),1)):(0,s.kq)("",!0)]),m]),(0,s._)("div",_,[i.selectedItem.title?((0,s.wg)(),(0,s.iD)("p",g,[(0,s.Uk)(" 確定要刪除 "),(0,s._)("strong",null,(0,n.zw)(i.selectedItem.title),1),(0,s.Uk)("? ")])):(0,s.kq)("",!0),i.selectedItem.title||i.selectedItem.product?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("p",f,[(0,s.Uk)(" 確定要刪除訂單 "),(0,s._)("strong",null,(0,n.zw)(i.selectedItem.id),1),(0,s.Uk)("? ")])),i.selectedItem.product?((0,s.wg)(),(0,s.iD)("p",p,[(0,s.Uk)(" 確定刪除品項 "),(0,s._)("strong",null,(0,n.zw)(i.selectedItem.product.title),1),(0,s.Uk)("? ")])):(0,s.kq)("",!0),b]),(0,s._)("div",w,[k,(0,s._)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>(t.$emit("delete-item",i.selectedItem),t.$emit("hide-delete-modal")))}," 確定刪除 ")])])])],512)}var v=i(1339),A={mixins:[v.Z],props:{selectedItem:{required:!0,default(){return{}}}}},E=i(3744);const T=(0,E.Z)(A,[["render",y]]);var D=T}}]);
//# sourceMappingURL=968.f1152fe1.js.map