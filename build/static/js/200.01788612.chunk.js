"use strict";(self.webpackChunkturkmenexpressadmin=self.webpackChunkturkmenexpressadmin||[]).push([[200],{3073:function(e,n,a){var t=a(7652),r=(a(2791),a(184));n.Z=function(e){var n=e.dataSource,a=e.columns,i=e.pagination,d=e.active,s=e.loading;return(0,r.jsx)(t.Z,{rowClassName:function(e,n){return e.id==d&&"active-row"},dataSource:n,columns:a,pagination:i,loading:s||!1})}},102:function(e,n,a){a.d(n,{b:function(){return l},J:function(){return c}});var t=a(4165),r=a(5861),i=a(1243),d=function(){var e=JSON.parse(localStorage.getItem("turkmenExpress-admin"));return e?e.access:null}(),s="https://turkmenexpress.com.tm/api/administrator/",l=i.Z.create({baseURL:s,timeout:6e4,headers:{"Content-Type":"multipart/form-data",Accept:"application/json",Authorization:"Bearer ".concat(d)}}),c=function(){var e=(0,r.Z)((0,t.Z)().mark((function e(n,a){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.post("".concat(s,"login/"),{phone_number:n,password:a});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}()},8200:function(e,n,a){a.r(n);var t=a(4942),r=a(1413),i=a(3433),d=a(4165),s=a(5861),l=a(9439),c=a(2791),u=a(7027),o=a(814),m=a(1717),h=a(7145),v=a(7892),f=a.n(v),p=a(2181),x=a(102),Z=a(3073),g=a(2438),j=a(8808),y=a.n(j),_=a(2390),k=a(184);f().extend(y()),n.default=function(){var e=(0,c.useState)([]),n=(0,l.Z)(e,2),a=n[0],v=n[1],j=(0,c.useState)(!1),y=(0,l.Z)(j,2),b=y[0],w=y[1],N=p.Z.format(new Date,"YYYY-MM-DD"),Y=(0,c.useState)(!1),C=(0,l.Z)(Y,2),S=C[0],D=C[1],I=(0,c.useState)(null),M=(0,l.Z)(I,2),q=M[0],T=M[1],E=(0,c.useState)(!1),O=(0,l.Z)(E,2),P=O[0],A=O[1],L=(0,c.useState)(null),B=(0,l.Z)(L,2),F=B[0],J=B[1],z=(0,c.useState)(null),R=(0,l.Z)(z,2),U=R[0],G=R[1],H=(0,c.useState)(null),K=(0,l.Z)(H,2),Q=K[0],V=K[1],W=(0,c.useState)(null),X=(0,l.Z)(W,2),$=X[0],ee=X[1],ne=(0,c.useState)(null),ae=(0,l.Z)(ne,2),te=ae[0],re=ae[1],ie=(0,c.useState)(null),de=(0,l.Z)(ie,2),se=de[0],le=de[1];(0,c.useEffect)((function(){x.b.get("users/list").then(function(){var e=(0,s.Z)((0,d.Z)().mark((function e(n){var a,t,r;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r=[],null===(a=n.data)||void 0===a||a.forEach((function(e){e.key=e.id,e.id=e.id,e.clients_type=e.clients_type.name_ru,e.region=e.region?e.region.name_ru:"null"})),e.next=5,x.b.get("users/types/list/");case 5:return e.sent.data.forEach((function(e){t.push({id:e.id,label:e.name_ru,value:e.name_ru})})),e.next=9,x.b.get("regions/list/");case 9:e.sent.data.forEach((function(e){r.push({id:e.id,label:e.name_ru,value:e.name_ru})})),ee(r),V(t),v(null===n||void 0===n?void 0:n.data);case 14:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}))}),[]);var ce=[{title:"id",dataIndex:"id",key:"id",display:"none",width:"65px"},{title:"\u0418\u043c\u044f",dataIndex:"name",key:"name"},{title:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",dataIndex:"surname",key:"surname"},{title:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",dataIndex:"email",key:"email"},{title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",dataIndex:"phone_number",key:"phone_number",width:"100px"},{title:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",dataIndex:"birthday",key:"birthday",width:"120px",render:function(e,n){return(0,k.jsx)("p",{children:n.birthday?p.Z.format(new Date(n.birthday),"YYYY-MM-DD"):"null"})}},{title:"\u0422\u0438\u043f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",dataIndex:"clients_type",key:"clients_type"},{title:"\u0420\u0435\u0433\u0438\u043e\u043d",dataIndex:"region",key:"region"},{title:"Staff",dataIndex:"is_staff",key:"is_staff",render:function(e,n){return(0,k.jsx)(_.Z,{checked:n.is_staff,onChange:function(){return ue(e,n)}})}},{title:"Admin",dataIndex:"is_admin",key:"is_admin",render:function(e,n){return(0,k.jsx)(_.Z,{checked:n.is_admin,onChange:function(){return ue(e,n)}})}},{title:"\u0414\u0430\u0442\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",dataIndex:"registered_date",key:"registered_date",width:"110px",render:function(e,n){return(0,k.jsx)("p",{children:p.Z.format(new Date(n.registered_date),"YYYY-MM-DD")})}},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"110px",render:function(e,n){return(0,k.jsx)("div",{className:"delete-icon",onClick:function(){return ue(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}},{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",dataIndex:"active",key:"active",width:"120px",render:function(e,n){return(0,k.jsx)("div",{className:"update-icon",onClick:function(){return me(n)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}}],ue=function(e,n){n&&G(n),T(e),w(!0)},oe=function(){var e=(0,s.Z)((0,d.Z)().mark((function e(){var n;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,D(!0),!U){e.next=9;break}return e.next=5,x.b.patch("users/update/".concat(U.id,"/"),{active:!U.active});case 5:e.sent,v((function(e){var n=e,a=n.findIndex((function(e){return e.id===U.id}));return n[a].active=!n[a].active,n})),e.next=13;break;case 9:return e.next=11,x.b.delete("users/delete/".concat(q.id));case 11:n=a.filter((function(e){return e.id!==q.id})),v(n);case 13:u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"),G(null),D(!1),w(!1),e.next=24;break;case 19:e.prev=19,e.t0=e.catch(0),D(!1),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),me=function(e){e.id&&(e.birthday&&J(p.Z.format(new Date(e.birthday),"YYYY-MM-DD")),re(e.clients_type),le(e.region),T(e),G(e)),A(!0)},he=function(){var e=(0,s.Z)((0,d.Z)().mark((function e(){var n,t,r,s,l;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(D(!0),n=new FormData,U.birthday=F,U.region=null===se||void 0===se?void 0:se.id,U.clients_type=null===te||void 0===te?void 0:te.id,t=Object.keys(U),r=Object.values(U),t.forEach((function(e,a){n.append(e,r[a])})),e.prev=8,!U.id){e.next=17;break}return e.next=12,x.b.put("users/update/".concat(U.id,"/"),n);case 12:e.sent,s=a.findIndex((function(e){return e.id==U.id})),v((function(e){var n=e;return n[s].name=U.name,n[s].surname=U.surname,n[s].email=U.email,n[s].phone_number=U.phone_number,n[s].birthday=U.birthday,n[s].clients_type=te.value,n[s].region=se.value,n[s].is_staff=U.is_staff,n[s].is_admin=U.is_admin,n[s].registered_date=U.registered_date,n})),e.next=22;break;case 17:return e.next=19,x.b.post("users/add/",n);case 19:e.sent,l={name:U.name,surname:U.surname,email:U.email,phone_number:U.phone_number,birthday:U.birthday,clients_type:te.value,region:se.value,is_staff:U.is_staff,is_admin:U.is_admin,registered_date:N},v([].concat((0,i.Z)(a),[l]));case 22:G(null),le(null),re(null),J(null),u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e!"),D(!1),A(!1),e.next=36;break;case 31:e.prev=31,e.t0=e.catch(8),D(!1),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 36:case"end":return e.stop()}}),e,null,[[8,31]])})));return function(){return e.apply(this,arguments)}}(),ve=function(e){"is_admin"==e.target.name||"is_staff"==e.target.name?G((0,r.Z)((0,r.Z)({},U),{},(0,t.Z)({},e.target.name,[e.target.checked]))):G((0,r.Z)((0,r.Z)({},U),{},(0,t.Z)({},e.target.name,[e.target.value])))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o.Z,{title:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0434\u0435\u0442\u0430\u043b\u0438",open:P,onOk:he,confirmLoading:S,onCancel:function(){G(null),le(null),re(null),J(null),A(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",width:"600px",okType:"primary",centered:!0,children:(0,k.jsxs)("form",{className:"banner-add-container",children:[(0,k.jsxs)("div",{className:"add-left",children:[(0,k.jsx)("div",{className:"add-column",children:"\u0418\u043c\u044f:"}),(0,k.jsx)("div",{className:"add-column",children:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f:"}),(0,k.jsx)("div",{className:"add-column",children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430:"}),(0,k.jsx)("div",{className:"add-column",children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430:"}),(0,k.jsx)("div",{className:"add-column",children:"\u0414\u0435\u043d\u044c \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f:"}),(0,k.jsx)("div",{className:"add-column",children:"\u0422\u0438\u043f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432:"}),(0,k.jsx)("div",{className:"add-column",children:"\u0420\u0435\u0433\u0438\u043e\u043d:"}),!(null!==U&&void 0!==U&&U.id)&&(0,k.jsx)("div",{className:"add-column",children:"Staff"}),!(null!==U&&void 0!==U&&U.id)&&(0,k.jsx)("div",{className:"add-column",children:"Admin"}),(0,k.jsx)("div",{className:"add-column",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),(0,k.jsx)("div",{className:"add-column",children:"\u041f\u0430\u0440\u043e\u043b\u044c 2:"})]}),(0,k.jsxs)("div",{className:"add-right",children:[(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"name",placeholder:"\u0418\u043c\u044f",required:!0,value:null===U||void 0===U?void 0:U.name,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"surname",placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",required:!0,value:null===U||void 0===U?void 0:U.surname,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"email",type:"email",required:!0,placeholder:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",value:null===U||void 0===U?void 0:U.email,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"phone_number",type:"number",required:!0,placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",value:null===U||void 0===U?void 0:U.phone_number,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(m.Z,{allowClear:!0,required:!0,value:F&&f()(F,"YYYY-MM-DD"),onChange:function(e){return J(p.Z.format(new Date(e),"YYYY-MM-DD"))}})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(h.Z,{showSearch:!0,"aria-required":!0,value:te,style:{width:"100%"},placeholder:"\u0422\u0438\u043f \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432",onChange:function(e){return function(e){var n=Q.filter((function(n){return n.value==e}));re(n[0])}(e)},options:Q})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(h.Z,{"aria-required":!0,showSearch:!0,value:se,style:{width:"100%"},placeholder:"\u0420\u0435\u0433\u0438\u043e\u043d",onChange:function(e){return function(e){var n=$.filter((function(n){return n.value==e}));le(n[0])}(e)},options:$})}),!(null!==U&&void 0!==U&&U.id)&&(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(_.Z,{name:"is_staff",value:null===U||void 0===U?void 0:U.is_staff,onChange:ve})}),!(null!==U&&void 0!==U&&U.id)&&(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(_.Z,{name:"is_admin",value:null===U||void 0===U?void 0:U.is_admin,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"password",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",value:null===U||void 0===U?void 0:U.password,onChange:ve})}),(0,k.jsx)("div",{className:"add-column",children:(0,k.jsx)(g.Z,{name:"password2",placeholder:"\u041d\u043e\u0432\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c 2",value:null===U||void 0===U?void 0:U.password2,onChange:ve})})]})]})}),(0,k.jsx)(o.Z,{title:U?"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442?":"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",open:b,onOk:oe,confirmLoading:S,onCancel:function(){w(!1),G(null)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",okButtonProps:!U&&{danger:!0},style:{top:"200px"}}),(0,k.jsxs)("div",{className:"page",children:[(0,k.jsxs)("div",{className:"page-header-content",children:[(0,k.jsx)("h2",{children:"\u041a\u043b\u0438\u0435\u043d\u0442\u044b"}),(0,k.jsx)("div",{className:"add-button",onClick:me,children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c"})]}),(0,k.jsx)(Z.Z,{dataSource:a,columns:ce,pagination:!1,active:null===q||void 0===q?void 0:q.id})]})]})}}}]);
//# sourceMappingURL=200.01788612.chunk.js.map