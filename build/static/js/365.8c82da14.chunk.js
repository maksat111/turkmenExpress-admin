"use strict";(self.webpackChunkturkmenexpressadmin=self.webpackChunkturkmenexpressadmin||[]).push([[365],{9098:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(2791),i=s(7689),r=s(9439),a=s(814),o=s.p+"static/media/logo3.5a691f4fb327d13c2a30.png",c=s(8820),l=s(3853),x=s(184);var d=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),s=t[0],d=t[1],u=(0,n.useState)(""),f=(0,r.Z)(u,2),m=f[0],p=f[1],j=(0,i.s0)();return(0,n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("turkmenExpress-admin"));p(e.user_fio)}),[]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.Z,{title:"\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0432\u044b\u0439\u0442\u0438?",open:s,onOk:function(){localStorage.removeItem("turkmenExpress-admin"),j("/")},okText:"\u0414\u0430",cancelText:"\u041d\u0435\u0442",okButtonProps:{danger:!0},onCancel:function(){d(!1)},style:{top:"200px"}}),(0,x.jsxs)("div",{className:"navbar-container",children:[(0,x.jsx)("img",{src:o,alt:"turkmenExpress"}),(0,x.jsxs)("div",{className:"navbar-items",children:[(0,x.jsxs)("div",{className:"navbar-user-item",children:[(0,x.jsx)(c.nf1,{style:{fontSize:"24px"}}),(0,x.jsx)("p",{children:m})]}),(0,x.jsxs)("div",{className:"navbar-logout",onClick:function(){d(!0)},children:[(0,x.jsx)(l.xqh,{style:{transform:"rotate(180deg)"}}),"\u0412\u044b\u0439\u0442\u0438"]})]})]})]})},u=s(860),f=s(9126),m=s(1578),p=s(7425),j=s(6355),h=s(6856),g=s(7692),b=s(4651),v=s(8617);var y=function(){var e=(0,n.useState)(!1),t=(0,r.Z)(e,2),s=t[0],a=t[1],o=(0,i.s0)(),d=s?{fontSize:"22px",marginBottom:"-8px"}:{fontSize:"20px"},y=[{group:"\u0411\u0418\u0411\u041b\u0418\u041e\u041d\u0422\u0415\u041a\u0410",icon:(0,x.jsx)(u.Zk4,{style:d}),title:"Dashboard",href:"/dashboard"},{icon:(0,x.jsx)(f.QrK,{style:d}),title:"\u0411\u0430\u043d\u043d\u0435\u0440\u044b",href:"/banners"},{icon:(0,x.jsx)(c.Wwr,{style:d}),title:"\u0411\u0440\u0435\u043d\u0434\u044b",href:"/brands"},{icon:(0,x.jsx)(m.u5D,{style:d}),title:"\u0412\u0438\u0434\u044b \u0434\u043e\u0441\u0442\u0430\u0432\u043e\u043a",href:"/deliveryType"},{icon:(0,x.jsx)(p.m9N,{style:d}),title:"\u0412\u0438\u0434\u044b \u043a\u0443\u043f\u043e\u043d\u043e\u0432",href:"/couponType"},{icon:(0,x.jsx)(h.zc2,{style:d}),title:"\u0413\u043e\u0440\u043e\u0434\u0430 \u0438 \u044d\u0442\u0440\u0430\u043f\u044b",href:"/city"},{icon:(0,x.jsx)(g.Qns,{style:d}),title:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",href:"/categories"},{icon:(0,x.jsx)(m.Dwm,{style:d}),title:"\u041f\u043e\u0434\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438",href:"/subcategories"},{icon:(0,x.jsx)(j.Rvu,{style:d}),title:"\u0420\u0435\u0433\u0438\u043e\u043d\u044b",href:"/regions"},{icon:(0,x.jsx)(m.lRd,{style:d}),title:"\u0421\u041c\u0421 \u0442\u0430\u0431\u043b\u0438\u0446\u0430",href:"/smsTable"},{group:"\u041a\u041b\u0418\u0415\u041d\u0422\u042b",icon:(0,x.jsx)(m.HLl,{style:d}),title:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b",href:"/clients"},{icon:(0,x.jsx)(c.nxQ,{style:d}),title:"\u0422\u0438\u043f\u044b \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439",href:"/clientType"},{group:"\u0422\u041e\u0412\u0410\u0420\u042b",icon:(0,x.jsx)(m.K4D,{style:s?{fontSize:"26px",marginBottom:"-5px"}:{fontSize:"23px",marginLeft:"-2px"}}),title:"\u0412\u0438\u0434\u044b \u0441\u043a\u0438\u0434\u043e\u043a",href:"/discountList"},{icon:(0,x.jsx)(l.nbt,{style:d}),title:"\u0413\u0440\u0443\u043f\u043f\u0430 \u043e\u043f\u0446\u0438\u0439",href:"/groupSettings"},{icon:(0,x.jsx)(p.dR_,{style:s?{fontSize:"25px",marginBottom:"-8px"}:{fontSize:"24px"}}),title:s?"\u0413\u0440\u0443\u043f. \u043e\u043f\u0446. \u0432 \u043f\u043e\u0434\u0430\u043a\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0445":"\u0413\u0440\u0443\u043f\u043f\u0430 \u043e\u043f\u0446\u0438\u0439 \u0432 \u043f\u043e\u0434\u0430\u043a\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0445",href:"/subcategorySettings"},{icon:(0,x.jsx)(b.P66,{style:d}),title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043e\u043f\u0446\u0438\u0439",href:"/settingsList"},{icon:(0,x.jsx)(f.xx1,{style:d}),title:"\u0422\u043e\u0432\u0430\u0440\u044b",href:"/products"}];return(0,x.jsxs)("div",{className:"".concat(s?"toggled-sidebar-container":"sidebar_container"),children:[y.map((function(e,t){return(0,x.jsxs)("div",{className:"sidebar-items",children:[e.group&&(0,x.jsx)("p",{className:"".concat(s?"sidebar-toggled-group":"sidebar-group"),children:e.group}),(0,x.jsxs)("div",{className:"".concat(s?"toggled-sidebar-item":"sidebar-item"," ").concat(window.location.pathname===e.href?"active-sidebar":""),onClick:function(){return t=e.href,void o(t);var t},children:[e.icon,(0,x.jsx)("p",{children:e.title})]})]},t)})),(0,x.jsx)("div",{className:"".concat(s?"toggled-sidebar-button":"sidebar-toggle-button"),onClick:function(){a(!s)},children:s?(0,x.jsx)(v.nq,{}):(0,x.jsx)(v.Gjm,{})})]})};var k=function(){return(0,x.jsxs)("div",{className:"sidebar-navbar-container",children:[(0,x.jsx)(d,{}),(0,x.jsxs)("div",{className:"sidebar-outlet",children:[(0,x.jsx)(y,{}),(0,x.jsx)(i.j3,{})]})]})}}}]);
//# sourceMappingURL=365.8c82da14.chunk.js.map