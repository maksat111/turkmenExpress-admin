"use strict";(self.webpackChunkturkmenexpressadmin=self.webpackChunkturkmenexpressadmin||[]).push([[501],{3073:function(e,n,t){var a=t(7652),r=(t(2791),t(184));n.Z=function(e){var n=e.dataSource,t=e.columns,c=e.pagination,i=e.active,s=e.loading;return(0,r.jsx)(a.Z,{rowClassName:function(e,n){return e.id==i&&"active-row"},dataSource:n,columns:t,pagination:c,loading:s||!1})}},102:function(e,n,t){t.d(n,{b:function(){return o},J:function(){return u}});var a=t(4165),r=t(5861),c=t(1243),i=function(){var e=JSON.parse(localStorage.getItem("turkmenExpress-admin"));return e?e.access:null}(),s="https://turkmenexpress.com.tm/api/administrator/",o=c.Z.create({baseURL:s,timeout:6e4,headers:{"Content-Type":"multipart/form-data",Accept:"application/json",Authorization:"Bearer ".concat(i)}}),u=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n,t){var r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("".concat(s,"login/"),{phone_number:n,password:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()},9501:function(e,n,t){t.r(n);var a=t(4942),r=t(1413),c=t(3433),i=t(4165),s=t(5861),o=t(9439),u=t(2791),d=t(814),l=t(7027),m=t(102),p=t(3073),v=t(2438),x=t(184);n.default=function(){var e=(0,u.useState)([]),n=(0,o.Z)(e,2),t=n[0],f=n[1],h=(0,u.useState)(!1),k=(0,o.Z)(h,2),Z=k[0],j=k[1],g=(0,u.useState)(!1),y=(0,o.Z)(g,2),_=y[0],b=y[1],w=(0,u.useState)(null),N=(0,o.Z)(w,2),C=N[0],S=N[1],I=(0,u.useState)(!1),T=(0,o.Z)(I,2),O=T[0],P=T[1],E=(0,u.useState)({name_ru:"",name_en:"",name_tk:""}),L=(0,o.Z)(E,2),A=L[0],B=L[1],F=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,m.b.delete("users/types/delete/".concat(C.id,"/"));case 4:n=t.filter((function(e){return e.id!==C.id})),f(n),l.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e"),j(!1),b(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),b(!1),l.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){m.b.get("users/types/list/").then((function(e){var n;null===(n=e.data)||void 0===n||n.forEach((function(e){e.key=e.id})),f(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[]);var J=[{title:"id",dataIndex:"id",key:"id",width:"65px",style:{alignItems:"center"}},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.)",dataIndex:"name_ru",key:"name_ru"},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0442\u0443\u0440\u043a\u043c.)",dataIndex:"name_tk",key:"name_tk"},{title:"\u041d\u0430\u0432\u0437\u0430\u043d\u0438\u0435 (\u0430\u043d\u0433.)",dataIndex:"name_en",key:"name_en"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"110px",render:function(e,n){return(0,x.jsx)("div",{className:"delete-icon",onClick:function(){return e=n,j(!0),void S(e);var e},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}},{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"120px",render:function(e,n){return(0,x.jsx)("div",{className:"update-icon",onClick:function(){return z(n)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}}],z=function(e){e.id&&B(e),P(!0)},D=function(){var e=(0,s.Z)((0,i.Z)().mark((function e(){var n,a,r,s,o;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(!0),n=new FormData,a=Object.keys(A),r=Object.values(A),a.forEach((function(e,t){n.append(e,r[t])})),e.prev=5,!A.id){e.next=14;break}return e.next=9,m.b.put("users/types/update/".concat(A.id,"/"),n);case 9:e.sent,s=t.findIndex((function(e){return e.id==A.id})),f((function(e){var n=e;return n[s].name_ru=A.name_ru,n[s].name_en=A.name_en,n[s].name_tk=A.name_tk,n})),e.next=19;break;case 14:return e.next=16,m.b.post("users/types/add/",n);case 16:(o=e.sent).data.key=o.data.id,f([].concat((0,c.Z)(t),[o.data]));case 19:B(null),b(!1),l.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),P(!1),e.next=30;break;case 25:e.prev=25,e.t0=e.catch(5),b(!1),l.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 30:case"end":return e.stop()}}),e,null,[[5,25]])})));return function(){return e.apply(this,arguments)}}(),R=function(e){B((0,r.Z)((0,r.Z)({},A),{},(0,a.Z)({},e.target.name,[e.target.value])))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Z,{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u0438",open:O,onOk:D,confirmLoading:_,onCancel:function(){B(null),P(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",width:"600px",okType:"primary",style:{top:"150px"},children:(0,x.jsxs)("div",{className:"banner-add-container",children:[(0,x.jsxs)("div",{className:"add-left",children:[(0,x.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.):"}),(0,x.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0442\u0443\u0440\u043a\u043c.):"}),(0,x.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0432\u0437\u0430\u043d\u0438\u0435 (\u0430\u043d\u0433.):"})]}),(0,x.jsxs)("div",{className:"add-right",children:[(0,x.jsx)("div",{className:"add-column",children:(0,x.jsx)(v.Z,{name:"name_ru",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.)",value:null===A||void 0===A?void 0:A.name_ru,onChange:R})}),(0,x.jsx)("div",{className:"add-column",children:(0,x.jsx)(v.Z,{name:"name_tk",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0442\u0443\u0440\u043a\u043c.)",value:null===A||void 0===A?void 0:A.name_tk,onChange:R})}),(0,x.jsx)("div",{className:"add-column",children:(0,x.jsx)(v.Z,{name:"name_en",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0430\u043d\u0433.)",value:null===A||void 0===A?void 0:A.name_en,onChange:R})})]})]})}),(0,x.jsx)(d.Z,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",open:Z,onOk:F,confirmLoading:_,onCancel:function(){j(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",okButtonProps:{danger:!0},style:{top:"200px"}}),(0,x.jsxs)("div",{className:"page",children:[(0,x.jsxs)("div",{className:"page-header-content",children:[(0,x.jsx)("h2",{children:"\u0422\u0438\u043f\u044b \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439"}),(0,x.jsx)("div",{className:"add-button",onClick:z,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c"})]}),(0,x.jsx)(p.Z,{dataSource:t,columns:J,pagination:!1})]})]})}}}]);
//# sourceMappingURL=501.7907d24d.chunk.js.map