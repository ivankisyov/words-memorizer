(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+rOU":function(t,e,i){"use strict";i.d(e,"a",(function(){return l})),i.d(e,"b",(function(){return _})),i.d(e,"c",(function(){return r})),i.d(e,"d",(function(){return c})),i.d(e,"e",(function(){return d})),i.d(e,"f",(function(){return h}));var s=i("fXoL"),o=i("ofXK");class n{attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;null!=t&&(this._attachedHost=null,t.detach())}get isAttached(){return null!=this._attachedHost}setAttachedHost(t){this._attachedHost=t}}class r extends n{constructor(t,e,i,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.componentFactoryResolver=s}}class h extends n{constructor(t,e,i){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}}class a extends n{constructor(t){super(),this.element=t instanceof s.l?t.nativeElement:t}}class l{constructor(){this._isDisposed=!1,this.attachDomPortal=null}hasAttached(){return!!this._attachedPortal}attach(t){return t instanceof r?(this._attachedPortal=t,this.attachComponentPortal(t)):t instanceof h?(this._attachedPortal=t,this.attachTemplatePortal(t)):this.attachDomPortal&&t instanceof a?(this._attachedPortal=t,this.attachDomPortal(t)):void 0}detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}}class c extends l{constructor(t,e,i,s,o){super(),this.outletElement=t,this._componentFactoryResolver=e,this._appRef=i,this._defaultInjector=s,this.attachDomPortal=t=>{const e=t.element,i=this._document.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})},this._document=o}attachComponentPortal(t){const e=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component);let i;return t.viewContainerRef?(i=t.viewContainerRef.createComponent(e,t.viewContainerRef.length,t.injector||t.viewContainerRef.injector),this.setDisposeFn(()=>i.destroy())):(i=e.create(t.injector||this._defaultInjector),this._appRef.attachView(i.hostView),this.setDisposeFn(()=>{this._appRef.detachView(i.hostView),i.destroy()})),this.outletElement.appendChild(this._getComponentRootNode(i)),i}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context);return i.rootNodes.forEach(t=>this.outletElement.appendChild(t)),i.detectChanges(),this.setDisposeFn(()=>{let t=e.indexOf(i);-1!==t&&e.remove(t)}),i}dispose(){super.dispose(),null!=this.outletElement.parentNode&&this.outletElement.parentNode.removeChild(this.outletElement)}_getComponentRootNode(t){return t.hostView.rootNodes[0]}}let _=(()=>{class t extends l{constructor(t,e,i){super(),this._componentFactoryResolver=t,this._viewContainerRef=e,this._isInitialized=!1,this.attached=new s.o,this.attachDomPortal=t=>{const e=t.element,i=this._document.createComment("dom-portal");t.setAttachedHost(this),e.parentNode.insertBefore(i,e),this._getRootNode().appendChild(e),super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})},this._document=i}get portal(){return this._attachedPortal}set portal(t){(!this.hasAttached()||t||this._isInitialized)&&(this.hasAttached()&&super.detach(),t&&super.attach(t),this._attachedPortal=t)}get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedPortal=null,this._attachedRef=null}attachComponentPortal(t){t.setAttachedHost(this);const e=null!=t.viewContainerRef?t.viewContainerRef:this._viewContainerRef,i=(t.componentFactoryResolver||this._componentFactoryResolver).resolveComponentFactory(t.component),s=e.createComponent(i,e.length,t.injector||e.injector);return e!==this._viewContainerRef&&this._getRootNode().appendChild(s.hostView.rootNodes[0]),super.setDisposeFn(()=>s.destroy()),this._attachedPortal=t,this._attachedRef=s,this.attached.emit(s),s}attachTemplatePortal(t){t.setAttachedHost(this);const e=this._viewContainerRef.createEmbeddedView(t.templateRef,t.context);return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=t,this._attachedRef=e,this.attached.emit(e),e}_getRootNode(){const t=this._viewContainerRef.element.nativeElement;return t.nodeType===t.ELEMENT_NODE?t:t.parentNode}}return t.\u0275fac=function(e){return new(e||t)(s.Kb(s.j),s.Kb(s.Q),s.Kb(o.d))},t.\u0275dir=s.Fb({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:["cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[s.xb]}),t})(),d=(()=>{class t{}return t.\u0275mod=s.Ib({type:t}),t.\u0275inj=s.Hb({factory:function(e){return new(e||t)}}),t})()},rDax:function(t,e,i){"use strict";i.d(e,"a",(function(){return X})),i.d(e,"b",(function(){return O})),i.d(e,"c",(function(){return E})),i.d(e,"d",(function(){return Y}));var s=i("vxfF"),o=i("fXoL"),n=i("nLfN"),r=i("cH1L"),h=i("ofXK"),a=i("8LU1"),l=i("+rOU"),c=i("XNiG"),_=i("quSY"),d=i("VRyK"),p=i("IzEk"),u=i("1G5W");i("7o/Q"),i("FtGj");class g{constructor(t,e){this._viewportRuler=t,this._previousHTMLStyles={top:"",left:""},this._isEnabled=!1,this._document=e}attach(){}enable(){if(this._canBeEnabled()){const t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||"",this._previousHTMLStyles.top=t.style.top||"",t.style.left=Object(a.d)(-this._previousScrollPosition.left),t.style.top=Object(a.d)(-this._previousScrollPosition.top),t.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){const t=this._document.documentElement,e=t.style,i=this._document.body.style,s=e.scrollBehavior||"",o=i.scrollBehavior||"";this._isEnabled=!1,e.left=this._previousHTMLStyles.left,e.top=this._previousHTMLStyles.top,t.classList.remove("cdk-global-scrollblock"),e.scrollBehavior=i.scrollBehavior="auto",window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),e.scrollBehavior=s,i.scrollBehavior=o}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;const t=this._document.body,e=this._viewportRuler.getViewportSize();return t.scrollHeight>e.height||t.scrollWidth>e.width}}class f{constructor(t,e,i,s){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=s,this._scrollSubscription=null,this._detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}}attach(t){this._overlayRef=t}enable(){if(this._scrollSubscription)return;const t=this._scrollDispatcher.scrolled(0);this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{const t=this._viewportRuler.getViewportScrollPosition().top;Math.abs(t-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}class m{enable(){}disable(){}attach(){}}function y(t,e){return e.some(e=>t.bottom<e.top||t.top>e.bottom||t.right<e.left||t.left>e.right)}function v(t,e){return e.some(e=>t.top<e.top||t.bottom>e.bottom||t.left<e.left||t.right>e.right)}class b{constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=s,this._scrollSubscription=null}attach(t){this._overlayRef=t}enable(){this._scrollSubscription||(this._scrollSubscription=this._scrollDispatcher.scrolled(this._config?this._config.scrollThrottle:0).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){const t=this._overlayRef.overlayElement.getBoundingClientRect(),{width:e,height:i}=this._viewportRuler.getViewportSize();y(t,[{width:e,height:i,bottom:i,right:e,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}}))}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}}let w=(()=>{class t{constructor(t,e,i,s){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this.noop=()=>new m,this.close=t=>new f(this._scrollDispatcher,this._ngZone,this._viewportRuler,t),this.block=()=>new g(this._viewportRuler,this._document),this.reposition=t=>new b(this._scrollDispatcher,this._viewportRuler,this._ngZone,t),this._document=s}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(s.c),o.Ub(s.e),o.Ub(o.A),o.Ub(h.d))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(s.c),Object(o.Ub)(s.e),Object(o.Ub)(o.A),Object(o.Ub)(h.d))},token:t,providedIn:"root"}),t})();class O{constructor(t){if(this.scrollStrategy=new m,this.panelClass="",this.hasBackdrop=!1,this.backdropClass="cdk-overlay-dark-backdrop",this.disposeOnNavigation=!1,t){const e=Object.keys(t);for(const i of e)void 0!==t[i]&&(this[i]=t[i])}}}class C{constructor(t,e,i,s,o){this.offsetX=i,this.offsetY=s,this.panelClass=o,this.originX=t.originX,this.originY=t.originY,this.overlayX=e.overlayX,this.overlayY=e.overlayY}}class R{constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}}let P=(()=>{class t{constructor(t){this._attachedOverlays=[],this._document=t}ngOnDestroy(){this.detach()}add(t){this.remove(t),this._attachedOverlays.push(t)}remove(t){const e=this._attachedOverlays.indexOf(t);e>-1&&this._attachedOverlays.splice(e,1),0===this._attachedOverlays.length&&this.detach()}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(h.d))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(h.d))},token:t,providedIn:"root"}),t})(),x=(()=>{class t extends P{constructor(t){super(t),this._keydownListener=t=>{const e=this._attachedOverlays;for(let i=e.length-1;i>-1;i--)if(e[i]._keydownEvents.observers.length>0){e[i]._keydownEvents.next(t);break}}}add(t){super.add(t),this._isAttached||(this._document.body.addEventListener("keydown",this._keydownListener),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("keydown",this._keydownListener),this._isAttached=!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(h.d))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(h.d))},token:t,providedIn:"root"}),t})(),S=(()=>{class t extends P{constructor(t,e){super(t),this._platform=e,this._cursorStyleIsSet=!1,this._clickListener=t=>{const e=t.composedPath?t.composedPath()[0]:t.target,i=this._attachedOverlays.slice();for(let s=i.length-1;s>-1;s--){const o=i[s];if(!(o._outsidePointerEvents.observers.length<1)&&o.hasAttached()){if(o.overlayElement.contains(e))break;o._outsidePointerEvents.next(t)}}}}add(t){super.add(t),this._isAttached||(this._document.body.addEventListener("click",this._clickListener,!0),this._document.body.addEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=this._document.body.style.cursor,this._document.body.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0)}detach(){this._isAttached&&(this._document.body.removeEventListener("click",this._clickListener,!0),this._document.body.removeEventListener("contextmenu",this._clickListener,!0),this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(h.d),o.Ub(n.a))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(h.d),Object(o.Ub)(n.a))},token:t,providedIn:"root"}),t})();const k=!("undefined"==typeof window||!window||!window.__karma__&&!window.jasmine);let E=(()=>{class t{constructor(t,e){this._platform=e,this._document=t}ngOnDestroy(){const t=this._containerElement;t&&t.parentNode&&t.parentNode.removeChild(t)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){const t=this._platform?this._platform.isBrowser:"undefined"!=typeof window,e="cdk-overlay-container";if(t||k){const t=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let e=0;e<t.length;e++)t[e].parentNode.removeChild(t[e])}const i=this._document.createElement("div");i.classList.add(e),k?i.setAttribute("platform","test"):t||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(h.d),o.Ub(n.a))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(h.d),Object(o.Ub)(n.a))},token:t,providedIn:"root"}),t})();class j{constructor(t,e,i,s,o,n,r,h,a){this._portalOutlet=t,this._host=e,this._pane=i,this._config=s,this._ngZone=o,this._keyboardDispatcher=n,this._document=r,this._location=h,this._outsideClickDispatcher=a,this._backdropElement=null,this._backdropClick=new c.a,this._attachments=new c.a,this._detachments=new c.a,this._locationChanges=_.a.EMPTY,this._backdropClickHandler=t=>this._backdropClick.next(t),this._keydownEvents=new c.a,this._outsidePointerEvents=new c.a,s.scrollStrategy&&(this._scrollStrategy=s.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=s.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropElement}get hostElement(){return this._host}attach(t){let e=this._portalOutlet.attach(t);return!this._host.parentElement&&this._previousHostParent&&this._previousHostParent.appendChild(this._host),this._positionStrategy&&this._positionStrategy.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._ngZone.onStable.pipe(Object(p.a)(1)).subscribe(()=>{this.hasAttached()&&this.updatePosition()}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&this._location&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher&&this._outsideClickDispatcher.add(this),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();const t=this._portalOutlet.detach();return this._detachments.next(),this._keyboardDispatcher.remove(this),this._detachContentWhenStable(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher&&this._outsideClickDispatcher.remove(this),t}dispose(){const t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this.detachBackdrop(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher&&this._outsideClickDispatcher.remove(this),this._host&&this._host.parentNode&&(this._host.parentNode.removeChild(this._host),this._host=null),this._previousHostParent=this._pane=null,t&&this._detachments.next(),this._detachments.complete()}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=Object.assign(Object.assign({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Object.assign(Object.assign({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){const t=this._config.direction;return t?"string"==typeof t?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;const t=this._pane.style;t.width=Object(a.d)(this._config.width),t.height=Object(a.d)(this._config.height),t.minWidth=Object(a.d)(this._config.minWidth),t.minHeight=Object(a.d)(this._config.minHeight),t.maxWidth=Object(a.d)(this._config.maxWidth),t.maxHeight=Object(a.d)(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"auto":"none"}_attachBackdrop(){const t="cdk-overlay-backdrop-showing";this._backdropElement=this._document.createElement("div"),this._backdropElement.classList.add("cdk-overlay-backdrop"),this._config.backdropClass&&this._toggleClasses(this._backdropElement,this._config.backdropClass,!0),this._host.parentElement.insertBefore(this._backdropElement,this._host),this._backdropElement.addEventListener("click",this._backdropClickHandler),"undefined"!=typeof requestAnimationFrame?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{this._backdropElement&&this._backdropElement.classList.add(t)})}):this._backdropElement.classList.add(t)}_updateStackingOrder(){this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){let t,e=this._backdropElement;if(!e)return;let i=()=>{e&&(e.removeEventListener("click",this._backdropClickHandler),e.removeEventListener("transitionend",i),e.parentNode&&e.parentNode.removeChild(e)),this._backdropElement==e&&(this._backdropElement=null),this._config.backdropClass&&this._toggleClasses(e,this._config.backdropClass,!1),clearTimeout(t)};e.classList.remove("cdk-overlay-backdrop-showing"),this._ngZone.runOutsideAngular(()=>{e.addEventListener("transitionend",i)}),e.style.pointerEvents="none",t=this._ngZone.runOutsideAngular(()=>setTimeout(i,500))}_toggleClasses(t,e,i){const s=t.classList;Object(a.b)(e).forEach(t=>{t&&(i?s.add(t):s.remove(t))})}_detachContentWhenStable(){this._ngZone.runOutsideAngular(()=>{const t=this._ngZone.onStable.pipe(Object(u.a)(Object(d.a)(this._attachments,this._detachments))).subscribe(()=>{this._pane&&this._host&&0!==this._pane.children.length||(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._previousHostParent.removeChild(this._host)),t.unsubscribe())})})}_disposeScrollStrategy(){const t=this._scrollStrategy;t&&(t.disable(),t.detach&&t.detach())}}const D="cdk-overlay-connected-position-bounding-box",B=/([A-Za-z%]+)$/;class L{constructor(t,e,i,s,o){this._viewportRuler=e,this._document=i,this._platform=s,this._overlayContainer=o,this._lastBoundingBoxSize={width:0,height:0},this._isPushed=!1,this._canPush=!0,this._growAfterOpen=!1,this._hasFlexibleDimensions=!0,this._positionLocked=!1,this._viewportMargin=0,this._scrollables=[],this._preferredPositions=[],this._positionChanges=new c.a,this._resizeSubscription=_.a.EMPTY,this._offsetX=0,this._offsetY=0,this._appliedPanelClasses=[],this.positionChanges=this._positionChanges,this.setOrigin(t)}get positions(){return this._preferredPositions}attach(t){this._validatePositions(),t.hostElement.classList.add(D),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition)return void this.reapplyLastPosition();this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect();const t=this._originRect,e=this._overlayRect,i=this._viewportRect,s=[];let o;for(let n of this._preferredPositions){let r=this._getOriginPoint(t,n),h=this._getOverlayPoint(r,e,n),a=this._getOverlayFit(h,e,i,n);if(a.isCompletelyWithinViewport)return this._isPushed=!1,void this._applyPosition(n,r);this._canFitWithFlexibleDimensions(a,h,i)?s.push({position:n,origin:r,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(r,n)}):(!o||o.overlayFit.visibleArea<a.visibleArea)&&(o={overlayFit:a,overlayPoint:h,originPoint:r,position:n,overlayRect:e})}if(s.length){let t=null,e=-1;for(const i of s){const s=i.boundingBoxRect.width*i.boundingBoxRect.height*(i.position.weight||1);s>e&&(e=s,t=i)}return this._isPushed=!1,void this._applyPosition(t.position,t.origin)}if(this._canPush)return this._isPushed=!0,void this._applyPosition(o.position,o.originPoint);this._applyPosition(o.position,o.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&A(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(D),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(!this._isDisposed&&(!this._platform||this._platform.isBrowser)){this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect();const t=this._lastPosition||this._preferredPositions[0],e=this._getOriginPoint(this._originRect,t);this._applyPosition(t,e)}}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,-1===t.indexOf(this._lastPosition)&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}_getOriginPoint(t,e){let i,s;if("center"==e.originX)i=t.left+t.width/2;else{const s=this._isRtl()?t.right:t.left,o=this._isRtl()?t.left:t.right;i="start"==e.originX?s:o}return s="center"==e.originY?t.top+t.height/2:"top"==e.originY?t.top:t.bottom,{x:i,y:s}}_getOverlayPoint(t,e,i){let s,o;return s="center"==i.overlayX?-e.width/2:"start"===i.overlayX?this._isRtl()?-e.width:0:this._isRtl()?0:-e.width,o="center"==i.overlayY?-e.height/2:"top"==i.overlayY?0:-e.height,{x:t.x+s,y:t.y+o}}_getOverlayFit(t,e,i,s){let{x:o,y:n}=t,r=this._getOffset(s,"x"),h=this._getOffset(s,"y");r&&(o+=r),h&&(n+=h);let a=0-n,l=n+e.height-i.height,c=this._subtractOverflows(e.width,0-o,o+e.width-i.width),_=this._subtractOverflows(e.height,a,l),d=c*_;return{visibleArea:d,isCompletelyWithinViewport:e.width*e.height===d,fitsInViewportVertically:_===e.height,fitsInViewportHorizontally:c==e.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){const s=i.bottom-e.y,o=i.right-e.x,n=F(this._overlayRef.getConfig().minHeight),r=F(this._overlayRef.getConfig().minWidth),h=t.fitsInViewportHorizontally||null!=r&&r<=o;return(t.fitsInViewportVertically||null!=n&&n<=s)&&h}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};const s=this._viewportRect,o=Math.max(t.x+e.width-s.width,0),n=Math.max(t.y+e.height-s.height,0),r=Math.max(s.top-i.top-t.y,0),h=Math.max(s.left-i.left-t.x,0);let a=0,l=0;return a=e.width<=s.width?h||-o:t.x<this._viewportMargin?s.left-i.left-t.x:0,l=e.height<=s.height?r||-n:t.y<this._viewportMargin?s.top-i.top-t.y:0,this._previousPushAmount={x:a,y:l},{x:t.x+a,y:t.y+l}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._lastPosition=t,this._positionChanges.observers.length){const e=this._getScrollVisibility(),i=new R(t,e);this._positionChanges.next(i)}this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;const e=this._boundingBox.querySelectorAll(this._transformOriginSelector);let i,s=t.overlayY;i="center"===t.overlayX?"center":this._isRtl()?"start"===t.overlayX?"right":"left":"start"===t.overlayX?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${s}`}_calculateBoundingBoxRect(t,e){const i=this._viewportRect,s=this._isRtl();let o,n,r,h,a,l;if("top"===e.overlayY)n=t.y,o=i.height-n+this._viewportMargin;else if("bottom"===e.overlayY)r=i.height-t.y+2*this._viewportMargin,o=i.height-r+this._viewportMargin;else{const e=Math.min(i.bottom-t.y+i.top,t.y),s=this._lastBoundingBoxSize.height;o=2*e,n=t.y-e,o>s&&!this._isInitialRender&&!this._growAfterOpen&&(n=t.y-s/2)}if("end"===e.overlayX&&!s||"start"===e.overlayX&&s)l=i.width-t.x+this._viewportMargin,h=t.x-this._viewportMargin;else if("start"===e.overlayX&&!s||"end"===e.overlayX&&s)a=t.x,h=i.right-t.x;else{const e=Math.min(i.right-t.x+i.left,t.x),s=this._lastBoundingBoxSize.width;h=2*e,a=t.x-e,h>s&&!this._isInitialRender&&!this._growAfterOpen&&(a=t.x-s/2)}return{top:n,left:a,bottom:r,right:l,width:h,height:o}}_setBoundingBoxStyles(t,e){const i=this._calculateBoundingBoxRect(t,e);this._isInitialRender||this._growAfterOpen||(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));const s={};if(this._hasExactPosition())s.top=s.left="0",s.bottom=s.right=s.maxHeight=s.maxWidth="",s.width=s.height="100%";else{const t=this._overlayRef.getConfig().maxHeight,o=this._overlayRef.getConfig().maxWidth;s.height=Object(a.d)(i.height),s.top=Object(a.d)(i.top),s.bottom=Object(a.d)(i.bottom),s.width=Object(a.d)(i.width),s.left=Object(a.d)(i.left),s.right=Object(a.d)(i.right),s.alignItems="center"===e.overlayX?"center":"end"===e.overlayX?"flex-end":"flex-start",s.justifyContent="center"===e.overlayY?"center":"bottom"===e.overlayY?"flex-end":"flex-start",t&&(s.maxHeight=Object(a.d)(t)),o&&(s.maxWidth=Object(a.d)(o))}this._lastBoundingBoxSize=i,A(this._boundingBox.style,s)}_resetBoundingBoxStyles(){A(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){A(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(t,e){const i={},s=this._hasExactPosition(),o=this._hasFlexibleDimensions,n=this._overlayRef.getConfig();if(s){const s=this._viewportRuler.getViewportScrollPosition();A(i,this._getExactOverlayY(e,t,s)),A(i,this._getExactOverlayX(e,t,s))}else i.position="static";let r="",h=this._getOffset(e,"x"),l=this._getOffset(e,"y");h&&(r+=`translateX(${h}px) `),l&&(r+=`translateY(${l}px)`),i.transform=r.trim(),n.maxHeight&&(s?i.maxHeight=Object(a.d)(n.maxHeight):o&&(i.maxHeight="")),n.maxWidth&&(s?i.maxWidth=Object(a.d)(n.maxWidth):o&&(i.maxWidth="")),A(this._pane.style,i)}_getExactOverlayY(t,e,i){let s={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let n=this._overlayContainer.getContainerElement().getBoundingClientRect().top;return o.y-=n,"bottom"===t.overlayY?s.bottom=this._document.documentElement.clientHeight-(o.y+this._overlayRect.height)+"px":s.top=Object(a.d)(o.y),s}_getExactOverlayX(t,e,i){let s,o={left:"",right:""},n=this._getOverlayPoint(e,this._overlayRect,t);return this._isPushed&&(n=this._pushOverlayOnScreen(n,this._overlayRect,i)),s=this._isRtl()?"end"===t.overlayX?"left":"right":"end"===t.overlayX?"right":"left","right"===s?o.right=this._document.documentElement.clientWidth-(n.x+this._overlayRect.width)+"px":o.left=Object(a.d)(n.x),o}_getScrollVisibility(){const t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(t=>t.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:v(t,i),isOriginOutsideView:y(t,i),isOverlayClipped:v(e,i),isOverlayOutsideView:y(e,i)}}_subtractOverflows(t,...e){return e.reduce((t,e)=>t-Math.max(e,0),t)}_getNarrowedViewportRect(){const t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._viewportMargin,left:i.left+this._viewportMargin,right:i.left+t-this._viewportMargin,bottom:i.top+e-this._viewportMargin,width:t-2*this._viewportMargin,height:e-2*this._viewportMargin}}_isRtl(){return"rtl"===this._overlayRef.getDirection()}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return"x"===e?null==t.offsetX?this._offsetX:t.offsetX:null==t.offsetY?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Object(a.b)(t).forEach(t=>{""!==t&&-1===this._appliedPanelClasses.indexOf(t)&&(this._appliedPanelClasses.push(t),this._pane.classList.add(t))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getOriginRect(){const t=this._origin;if(t instanceof o.l)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();const e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}}function A(t,e){for(let i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}function F(t){if("number"!=typeof t&&null!=t){const[e,i]=t.split(B);return i&&"px"!==i?null:parseFloat(e)}return t||null}class H{constructor(t,e,i,s,o,n,r){this._preferredPositions=[],this._positionStrategy=new L(i,s,o,n,r).withFlexibleDimensions(!1).withPush(!1).withViewportMargin(0),this.withFallbackPosition(t,e),this.onPositionChange=this._positionStrategy.positionChanges}get positions(){return this._preferredPositions}attach(t){this._overlayRef=t,this._positionStrategy.attach(t),this._direction&&(t.setDirection(this._direction),this._direction=null)}dispose(){this._positionStrategy.dispose()}detach(){this._positionStrategy.detach()}apply(){this._positionStrategy.apply()}recalculateLastPosition(){this._positionStrategy.reapplyLastPosition()}withScrollableContainers(t){this._positionStrategy.withScrollableContainers(t)}withFallbackPosition(t,e,i,s){const o=new C(t,e,i,s);return this._preferredPositions.push(o),this._positionStrategy.withPositions(this._preferredPositions),this}withDirection(t){return this._overlayRef?this._overlayRef.setDirection(t):this._direction=t,this}withOffsetX(t){return this._positionStrategy.withDefaultOffsetX(t),this}withOffsetY(t){return this._positionStrategy.withDefaultOffsetY(t),this}withLockedPosition(t){return this._positionStrategy.withLockedPosition(t),this}withPositions(t){return this._preferredPositions=t.slice(),this._positionStrategy.withPositions(this._preferredPositions),this}setOrigin(t){return this._positionStrategy.setOrigin(t),this}}const I="cdk-global-overlay-wrapper";class U{constructor(){this._cssPosition="static",this._topOffset="",this._bottomOffset="",this._leftOffset="",this._rightOffset="",this._alignItems="",this._justifyContent="",this._width="",this._height=""}attach(t){const e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(I),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._rightOffset="",this._leftOffset=t,this._justifyContent="flex-start",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._leftOffset="",this._rightOffset=t,this._justifyContent="flex-end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._justifyContent="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:s,height:o,maxWidth:n,maxHeight:r}=i,h=!("100%"!==s&&"100vw"!==s||n&&"100%"!==n&&"100vw"!==n),a=!("100%"!==o&&"100vh"!==o||r&&"100%"!==r&&"100vh"!==r);t.position=this._cssPosition,t.marginLeft=h?"0":this._leftOffset,t.marginTop=a?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=this._rightOffset,h?e.justifyContent="flex-start":"center"===this._justifyContent?e.justifyContent="center":"rtl"===this._overlayRef.getConfig().direction?"flex-start"===this._justifyContent?e.justifyContent="flex-end":"flex-end"===this._justifyContent&&(e.justifyContent="flex-start"):e.justifyContent=this._justifyContent,e.alignItems=a?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;const t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(I),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}}let M=(()=>{class t{constructor(t,e,i,s){this._viewportRuler=t,this._document=e,this._platform=i,this._overlayContainer=s}global(){return new U}connectedTo(t,e,i){return new H(e,i,t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}flexibleConnectedTo(t){return new L(t,this._viewportRuler,this._document,this._platform,this._overlayContainer)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(s.e),o.Ub(h.d),o.Ub(n.a),o.Ub(E))},t.\u0275prov=Object(o.Gb)({factory:function(){return new t(Object(o.Ub)(s.e),Object(o.Ub)(h.d),Object(o.Ub)(n.a),Object(o.Ub)(E))},token:t,providedIn:"root"}),t})(),V=0,X=(()=>{class t{constructor(t,e,i,s,o,n,r,h,a,l,c){this.scrollStrategies=t,this._overlayContainer=e,this._componentFactoryResolver=i,this._positionBuilder=s,this._keyboardDispatcher=o,this._injector=n,this._ngZone=r,this._document=h,this._directionality=a,this._location=l,this._outsideClickDispatcher=c}create(t){const e=this._createHostElement(),i=this._createPaneElement(e),s=this._createPortalOutlet(i),o=new O(t);return o.direction=o.direction||this._directionality.value,new j(s,e,i,o,this._ngZone,this._keyboardDispatcher,this._document,this._location,this._outsideClickDispatcher)}position(){return this._positionBuilder}_createPaneElement(t){const e=this._document.createElement("div");return e.id="cdk-overlay-"+V++,e.classList.add("cdk-overlay-pane"),t.appendChild(e),e}_createHostElement(){const t=this._document.createElement("div");return this._overlayContainer.getContainerElement().appendChild(t),t}_createPortalOutlet(t){return this._appRef||(this._appRef=this._injector.get(o.g)),new l.d(t,this._componentFactoryResolver,this._appRef,this._injector,this._document)}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(w),o.Ub(E),o.Ub(o.j),o.Ub(M),o.Ub(x),o.Ub(o.s),o.Ub(o.A),o.Ub(h.d),o.Ub(r.b),o.Ub(h.g),o.Ub(S))},t.\u0275prov=o.Gb({token:t,factory:t.\u0275fac}),t})();const N={provide:new o.r("cdk-connected-overlay-scroll-strategy"),deps:[X],useFactory:function(t){return()=>t.scrollStrategies.reposition()}};let Y=(()=>{class t{}return t.\u0275mod=o.Ib({type:t}),t.\u0275inj=o.Hb({factory:function(e){return new(e||t)},providers:[X,N],imports:[[r.a,l.e,s.d],s.d]}),t})()},sIil:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));var s=i("fXoL");let o=(()=>{class t{setId(){return(new Date).getTime().toString()}shuffle(t){let e,i,s=t.length;for(;0!==s;)i=Math.floor(Math.random()*s),s-=1,e=t[s],t[s]=t[i],t[i]=e;return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s.Gb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);