"use strict";(self.webpackChunkturkmenexpressadmin=self.webpackChunkturkmenexpressadmin||[]).push([[878],{3073:function(e,n,a){var t=a(7652),r=(a(2791),a(184));n.Z=function(e){var n=e.dataSource,a=e.columns,c=e.pagination,d=e.active,i=e.loading;return(0,r.jsx)(t.Z,{rowClassName:function(e,n){return e.id==d&&"active-row"},dataSource:n,columns:a,pagination:c,loading:i||!1})}},102:function(e,n,a){a.d(n,{b:function(){return o},J:function(){return s}});var t=a(4165),r=a(5861),c=a(1243),d=function(){var e=JSON.parse(localStorage.getItem("turkmenExpress-admin"));return e?e.access:null}(),i="https://turkmenexpress.com.tm/api/administrator/",o=c.Z.create({baseURL:i,timeout:6e4,headers:{"Content-Type":"multipart/form-data",Accept:"application/json",Authorization:"Bearer ".concat(d)}}),s=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,a){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.post("".concat(i,"login/"),{phone_number:n,password:a});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}()},878:function(e,n,a){a.r(n);var t=a(4942),r=a(1413),c=a(3433),d=a(4165),i=a(5861),o=a(9439),s=a(2791),l=a(7027),u=a(814),m=a(1717),v=a(7892),x=a.n(v),p=a(2181),f=a(102),h=a(3073),Z=a(2438),j=a(8808),k=a.n(j),Y=a(2390),g=a(184);x().extend(k()),n.default=function(){var e="YYYY-MM-DD",n=(0,s.useState)([]),a=(0,o.Z)(n,2),v=a[0],j=a[1],k=(0,s.useState)(!1),N=(0,o.Z)(k,2),D=N[0],w=N[1],y=(p.Z.format(new Date,"YYYY-MM-DD"),(0,s.useState)(!1)),_=(0,o.Z)(y,2),b=_[0],C=_[1],M=(0,s.useState)(null),I=(0,o.Z)(M,2),S=I[0],T=I[1],E=(0,s.useState)(!1),O=(0,o.Z)(E,2),P=O[0],L=O[1],A=(0,s.useState)(null),B=(0,o.Z)(A,2),F=B[0],H=B[1],J=(0,s.useState)(null),z=(0,o.Z)(J,2),R=z[0],U=z[1],q=(0,s.useState)(null),G=(0,o.Z)(q,2),K=G[0],Q=G[1],V=function(e,n){n&&Q(n),T(e),w(!0)},W=function(){var e=(0,i.Z)((0,d.Z)().mark((function e(){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,C(!0),!K){e.next=9;break}return e.next=5,f.b.patch("discounts/update/".concat(K.id,"/"),{active:!K.active});case 5:e.sent,j((function(e){var n=e,a=n.findIndex((function(e){return e.id===K.id}));return n[a].active=!n[a].active,n})),e.next=13;break;case 9:return e.next=11,f.b.delete("discounts/delete/".concat(S.id));case 11:n=v.filter((function(e){return e.id!==S.id})),j(n);case 13:l.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),Q(null),C(!1),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(0),C(!1),l.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){f.b.get("discounts/list").then((function(e){var n;null===(n=e.data)||void 0===n||n.forEach((function(e){e.key=e.id})),j(null===e||void 0===e?void 0:e.data)})).catch((function(e){return console.log(e)}))}),[]);var X=[{title:"Id",dataIndex:"id",key:"id",width:"65px"},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.)",dataIndex:"name_ru",key:"name_ru"},{title:"\u0421\u0442\u0430\u0440\u0430\u044f \u0446\u0435\u043d\u0430",dataIndex:"price",key:"price"},{title:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438",dataIndex:"discount_percent",key:"discount_percent"},{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",dataIndex:"desc",key:"desc"},{title:"\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f",dataIndex:"active",key:"active",render:function(e,n){return(0,g.jsx)(Y.Z,{checked:n.active,onChange:function(){return V(e,n)}})}},{title:"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f",dataIndex:"created_date",key:"created_date",render:function(e,n){return(0,g.jsx)("p",{children:p.Z.format(new Date(n.created_date),"YYYY-MM-DD / HH:MM:SS")})}},{title:"\u041e\u0442 \u0447\u0438\u0441\u043b\u0430",dataIndex:"from_date",key:"from_date",render:function(e,n){return(0,g.jsx)("p",{children:p.Z.format(new Date(n.from_date),"YYYY-MM-DD")})}},{title:"\u0414\u043e \u0447\u0438\u0441\u043b\u0430",dataIndex:"to_date",key:"to_date",render:function(e,n){return(0,g.jsx)("p",{children:p.Z.format(new Date(n.to_date),"YYYY-MM-DD")})}},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"110px",render:function(e,n){return(0,g.jsx)("div",{className:"delete-icon",onClick:function(){return V(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}},{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"120px",render:function(e,n){return(0,g.jsx)("div",{className:"update-icon",onClick:function(){return $(n)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}}],$=function(e){e.id&&(H(p.Z.format(new Date(e.from_date),"YYYY-MM-DD")),U(p.Z.format(new Date(e.to_date),"YYYY-MM-DD")),Q(e)),L(!0)},ee=function(){var e=(0,i.Z)((0,d.Z)().mark((function e(){var n,a,t,r,i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(C(!0),n=new FormData,K.from_date=F,K.to_date=R,a=Object.keys(K),t=Object.values(K),a.forEach((function(e,a){n.append(e,t[a])})),e.prev=7,!K.id){e.next=16;break}return e.next=11,f.b.put("discounts/update/".concat(K.id,"/"),n);case 11:e.sent,r=v.findIndex((function(e){return e.id==K.id})),j((function(e){var n=e;return a.forEach((function(e,a){n[r][e]=t[a]})),n})),e.next=21;break;case 16:return e.next=18,f.b.post("discounts/add/",n);case 18:(i=e.sent).data.key=i.data.id,j([].concat((0,c.Z)(v),[i.data]));case 21:Q(null),l.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),C(!1),L(!1),e.next=32;break;case 27:e.prev=27,e.t0=e.catch(7),C(!1),l.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 32:case"end":return e.stop()}}),e,null,[[7,27]])})));return function(){return e.apply(this,arguments)}}(),ne=function(e){"active"==e.target.name?Q((0,r.Z)((0,r.Z)({},K),{},(0,t.Z)({},e.target.name,[e.target.checked]))):Q((0,r.Z)((0,r.Z)({},K),{},(0,t.Z)({},e.target.name,[e.target.value])))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u.Z,{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u0438",open:P,onOk:ee,confirmLoading:b,onCancel:function(){Q(null),L(!1),U(null),H(null)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",width:"600px",okType:"primary",style:{top:"50px"},children:(0,g.jsxs)("div",{className:"banner-add-container",children:[(0,g.jsxs)("div",{className:"add-left",children:[(0,g.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.):"}),(0,g.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0442\u0443\u0440\u043a\u043c.):"}),(0,g.jsx)("div",{className:"add-column",children:"\u041d\u0430\u0432\u0437\u0430\u043d\u0438\u0435 (\u0430\u043d\u0433.):"}),(0,g.jsx)("div",{className:"add-column",children:"\u0421\u0442\u0430\u0440\u0430\u044f \u0446\u0435\u043d\u0430:"}),(0,g.jsx)("div",{className:"add-column",children:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438:"}),!(null!==K&&void 0!==K&&K.id)&&(0,g.jsx)("div",{className:"add-column",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f"}),(0,g.jsx)("div",{className:"add-column",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),(0,g.jsx)("div",{className:"add-column",children:"\u041e\u0442 \u0447\u0438\u0441\u043b\u0430:"}),(0,g.jsx)("div",{className:"add-column",children:"\u0414\u043e \u0447\u0438\u0441\u043b\u0432:"})]}),(0,g.jsxs)("div",{className:"add-right",children:[(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"name_ru",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0440\u0443\u0441.)",value:null===K||void 0===K?void 0:K.name_ru,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"name_tk",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0442\u0443\u0440\u043a\u043c.)",value:null===K||void 0===K?void 0:K.name_tk,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"name_en",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 (\u0430\u043d\u0433.)",value:null===K||void 0===K?void 0:K.name_en,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"price",type:"number",placeholder:"\u0421\u0442\u0430\u0440\u0430\u044f \u0446\u0435\u043d\u0430",value:null===K||void 0===K?void 0:K.price,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"discount_percent",type:"number",placeholder:"\u041f\u0440\u043e\u0446\u0435\u043d\u0442 \u0441\u043a\u0438\u0434\u043a\u0438",value:null===K||void 0===K?void 0:K.discount_percent,onChange:ne})}),!(null!==K&&void 0!==K&&K.id)&&(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Y.Z,{name:"active",value:null===K||void 0===K?void 0:K.active,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(Z.Z,{name:"desc",placeholder:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",value:null===K||void 0===K?void 0:K.desc,onChange:ne})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(m.Z,{allowClear:!0,value:F&&x()(F,e),onChange:function(e){return H(p.Z.format(new Date(e),"YYYY-MM-DD"))}})}),(0,g.jsx)("div",{className:"add-column",children:(0,g.jsx)(m.Z,{allowClear:!0,value:R&&x()(R,e),onChange:function(e){return U(p.Z.format(new Date(e),"YYYY-MM-DD"))}})})]})]})}),(0,g.jsx)(u.Z,{title:K?"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442?":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",open:D,onOk:W,confirmLoading:b,onCancel:function(){w(!1),Q(null)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",okButtonProps:!K&&{danger:!0},style:{top:"200px"}}),(0,g.jsxs)("div",{className:"page",children:[(0,g.jsxs)("div",{className:"page-header-content",children:[(0,g.jsx)("h2",{children:"\u0412\u0438\u0434\u044b \u0441\u043a\u0438\u0434\u043e\u043a"}),(0,g.jsx)("div",{className:"add-button",onClick:$,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c"})]}),(0,g.jsx)(h.Z,{dataSource:v,columns:X,pagination:!1})]})]})}}}]);
//# sourceMappingURL=878.9a010e27.chunk.js.map