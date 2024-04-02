"use strict";(self.webpackChunkmediumclone_angular=self.webpackChunkmediumclone_angular||[]).push([[783],{8783:(j,d,s)=>{s.r(d),s.d(d,{routes:()=>D});var u={};s.r(u),s.d(u,{getUserProfileEffect:()=>z});var o=s(6789),c=s(4755),e=s(2223),a=s(7701),p=s(9841),v=s(9300),g=s(4004),Z=s(2377),x=s(2625);const l=(0,o.R7)({source:"User Profile",events:{"Get user profile":(0,o.Ky)(),"Get user profile success":(0,o.Ky)(),"Get user profile failure":(0,o.uZ)()}});var A=s(720);const U={isLoading:!1,error:null,data:null},T=(0,o.Tz)({name:"userProfile",reducer:(0,o.Lq)(U,(0,o.on)(l.getUserProfile,r=>({...r,isLoading:!0})),(0,o.on)(l.getUserProfileSuccess,(r,i)=>({...r,isLoading:!1,data:i.userProfile})),(0,o.on)(l.getUserProfileFailure,r=>({...r,isLoading:!1})),(0,o.on)(A.hn,()=>U))}),{name:y,reducer:F,selectIsLoading:P,selectError:C,selectData:h}=T;function O(r,i){1&r&&(e.TgZ(0,"a",14),e._uU(1,"Edit Profile Settings"),e.qZA())}const I=function(r){return["/profiles",r]},m=function(){return{exact:!0}},S=function(r){return["/profiles",r,"favorites"]};function M(r,i){if(1&r&&(e.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6),e._UZ(5,"img",7),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p"),e._uU(9),e.qZA(),e.TgZ(10,"div"),e._uU(11," FOLLOW USER BUTTON "),e.YNc(12,O,2,0,"a",8),e.qZA()()()()(),e.TgZ(13,"div",4)(14,"div",5)(15,"div",6)(16,"div",9)(17,"ul",10)(18,"li",11)(19,"a",12),e._uU(20,"My Posts"),e.qZA()(),e.TgZ(21,"li",11)(22,"a",12),e._uU(23,"Favorites Posts"),e.qZA()()()(),e._UZ(24,"mc-feed",13),e.qZA()()()()),2&r){const t=e.oxw().ngIf,n=e.oxw();e.xp6(5),e.Q6J("src",t.userProfile.image,e.LSH),e.xp6(2),e.Oqu(t.userProfile.username),e.xp6(2),e.Oqu(t.userProfile.bio),e.xp6(3),e.Q6J("ngIf",t.isCurrentUserProfile),e.xp6(7),e.Q6J("routerLink",e.VKq(9,I,t.userProfile.username))("routerLinkActiveOptions",e.DdM(11,m)),e.xp6(3),e.Q6J("routerLink",e.VKq(12,S,t.userProfile.username))("routerLinkActiveOptions",e.DdM(14,m)),e.xp6(2),e.Q6J("apiUrl",n.getApiUrl())}}function Q(r,i){if(1&r&&(e.ynx(0),e.YNc(1,M,25,15,"div",1),e.BQk()),2&r){const t=i.ngIf;e.xp6(1),e.Q6J("ngIf",t.userProfile)}}let $=(()=>{class r{constructor(){this.route=(0,e.f3M)(a.gz),this.store=(0,e.f3M)(o.yh),this.router=(0,e.f3M)(a.F0),this.slug="",this.isCurrentUserProfile$=(0,p.a)({currentUser:this.store.pipe((0,o.Ys)(Z.HF),(0,v.h)(t=>!!t)),userProfile:this.store.pipe((0,o.Ys)(h),(0,v.h)(t=>!!t))}).pipe((0,g.U)(({currentUser:t,userProfile:n})=>t.username===n.username)),this.data$=(0,p.a)({isLoading:this.store.select(P),error:this.store.select(C),userProfile:this.store.select(h),isCurrentUserProfile:this.isCurrentUserProfile$}),this.isLoading=this.store.selectSignal(P),this.foo=(0,e.Flj)(()=>this.isLoading()?"true":"false")}ngOnInit(){this.route.params.subscribe(t=>{this.slug=t.slug,this.fetchUserProfile()})}fetchUserProfile(){this.store.dispatch(l.getUserProfile({slug:this.slug}))}getApiUrl(){return this.router.url.includes("favorites")?`/articles?favorited=${this.slug}`:`/articles?author=${this.slug}`}}return r.\u0275fac=function(t){return new(t||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["mc-user-profile"]],standalone:!0,features:[e.jDz],decls:4,vars:4,consts:[[4,"ngIf"],["class","profile-page",4,"ngIf"],[1,"profile-page"],[1,"user-info"],[1,"container"],[1,"row"],[1,"col-xs-12","col-md-10","offset-md-1"],[1,"user-img",3,"src"],["class","btn btn-sm btn-outline-secondary action-btn","routerLink","/settings",4,"ngIf"],[1,"articles-toggler"],[1,"nav","nav-pills","outline-active"],[1,"nav-item"],["routerLinkActive","active",1,"nav-link",3,"routerLink","routerLinkActiveOptions"],[3,"apiUrl"],["routerLink","/settings",1,"btn","btn-sm","btn-outline-secondary","action-btn"]],template:function(t,n){1&t&&(e.TgZ(0,"div"),e._uU(1),e.qZA(),e.YNc(2,Q,2,1,"ng-container",0),e.ALo(3,"async")),2&t&&(e.xp6(1),e.hij("Loading ",n.isLoading(),""),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,2,n.data$)))},dependencies:[c.ez,c.O5,c.Ov,a.rH,a.Od,x.e],encapsulation:2}),r})();var J=s(4766),Y=s(3144);let L=(()=>{class r{constructor(t){this.http=t}getUserProfile(t){return this.http.get(`${J.N.apiUrl}/profiles/${t}`).pipe((0,g.U)(G=>G.profile))}}return r.\u0275fac=function(t){return new(t||r)(e.LFG(Y.eN))},r.\u0275prov=e.Yz7({token:r,factory:r.\u0275fac}),r})();var f=s(826),E=s(3900),K=s(262),N=s(9646);const z=(0,f.GW)((r=(0,e.f3M)(f.eX),i=(0,e.f3M)(L))=>r.pipe((0,f.l4)(l.getUserProfile),(0,E.w)(({slug:t})=>i.getUserProfile(t).pipe((0,g.U)(n=>l.getUserProfileSuccess({userProfile:n})),(0,K.K)(()=>(0,N.of)(l.getUserProfileFailure()))))),{functional:!0}),D=[{path:"",component:$,providers:[L,(0,o.oY)(y,F),(0,f.y3)(u)]}]}}]);