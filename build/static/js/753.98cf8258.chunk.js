"use strict";(self.webpackChunkturkmenexpressadmin=self.webpackChunkturkmenexpressadmin||[]).push([[753],{3073:function(e,n,t){var r=t(7652),a=(t(2791),t(184));n.Z=function(e){var n=e.dataSource,t=e.columns,i=e.pagination,c=e.active,o=e.loading;return(0,a.jsx)(r.Z,{rowClassName:function(e,n){return e.id==c&&"active-row"},dataSource:n,columns:t,pagination:i,loading:o||!1})}},5753:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(3433),a=t(4165),i=t(5861),c=t(9439),o=t(2791),s=t(90),u=t(7027),d=t(3073),l=t(102),p=t(9286),f=t(814),v=t(6517),x=t(184),h=function(e){return new Promise((function(n,t){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return n(r.result)},r.onerror=function(e){return t(e)}}))};var m=function(e){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),m=t[0],Z=t[1],g=(0,o.useState)(!1),k=(0,c.Z)(g,2),j=k[0],b=k[1],y=(0,o.useState)(!1),w=(0,c.Z)(y,2),N=w[0],S=w[1],T=(0,o.useState)(!1),P=(0,c.Z)(T,2),C=P[0],O=P[1],L=(0,o.useState)(!1),I=(0,c.Z)(L,2),U=I[0],F=(I[1],(0,o.useState)(null)),R=(0,c.Z)(F,2),E=R[0],D=R[1],q=(0,o.useState)(!1),A=(0,c.Z)(q,2),B=A[0],M=A[1],z=(0,o.useState)(!1),G=(0,c.Z)(z,2),H=G[0],J=G[1],K=(0,o.useState)(""),Q=(0,c.Z)(K,2),V=Q[0],W=Q[1],X=(0,o.useState)(""),Y=(0,c.Z)(X,2),$=Y[0],_=Y[1],ee=(0,o.useState)([]),ne=(0,c.Z)(ee,2),te=ne[0],re=ne[1],ae=(0,o.useState)(0),ie=(0,c.Z)(ae,2),ce=(ie[0],ie[1]),oe=(0,o.useState)(!0),se=(0,c.Z)(oe,2),ue=se[0],de=se[1],le=(0,o.useState)(!1),pe=(0,c.Z)(le,2),fe=pe[0],ve=pe[1],xe=function(e){var n=e.fileList;return re(n)},he=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(n.originFileObj);case 2:n.preview=e.sent,W(n.preview),M(!0),_(n.name);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){l.b.get("banners/list").then((function(e){var n=[];null===e||void 0===e||e.data.forEach((function(e){n.push({key:e.id,id:e.id,image:e.image,active:e.active})})),Z(n)})).catch((function(e){return console.log(e)}))}),[]);var me=[{title:"id",dataIndex:"id",key:"id",width:"65px",style:{alignItems:"center"}},{title:"Banner image",dataIndex:"image",key:"image",render:function(e,n){return(0,x.jsx)("img",{className:"banner-image",src:n.image,alt:"banner"})}},{title:"Active",dataIndex:"active",key:"active",render:function(e,n){return(0,x.jsx)(s.Z,{name:"late",checked:n.active,onChange:function(){return ke(n)}})}},{title:"Delete",dataIndex:"active",key:"active",width:"110px",render:function(e,n){return(0,x.jsx)("div",{className:"delete-icon",onClick:function(){return Ze(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})}},{title:"Update",dataIndex:"active",key:"active",width:"120px",render:function(e,n){return(0,x.jsx)("div",{className:"update-icon",onClick:function(){return we(n)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})}}],Ze=function(e){D(e),b(!0)},ge=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,l.b.delete("banners/delete/".concat(E.id));case 4:e.sent,n=m.filter((function(e){return e.id!==E.id})),Z(n),u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u043e"),b(!1),O(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),O(!1),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),ke=function(e){D(e),ve(!0)},je=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),e.next=4,l.b.patch("banners/update/".concat(E.id,"/"),{active:!E.active});case 4:e.sent,Z((function(e){var n=e,t=n.findIndex((function(e){return e.id===E.id}));return n[t].active=!n[t].active,n})),u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e"),ve(!1),O(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),O(!1),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),be=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){var n,t,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,O(!0),(n=new FormData).append("image",te[0].originFileObj,te[0].originFileObj.name),n.append("active",ue),e.next=7,l.b.post("banners/add/",n);case 7:t=e.sent,i={key:te[0].originFileObj.uid,id:t.data.id,image:URL.createObjectURL(te[0].originFileObj),active:ue},Z([].concat((0,r.Z)(m),[i])),u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e"),J(!1),re([]),de(!0),O(!1),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(0),O(!1),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.onSuccess,r=n.onError,n.file,i=n.onProgress,{onUploadProgress:function(e){var n=Math.floor(e.loaded/e.total*100);ce(n),100===n&&setTimeout((function(){return ce(0)}),1e3),i({percent:e.loaded/e.total*100})}};try{t("Ok")}catch(a){r("Upload error")}case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),we=function(e){D(e),S(!0)},Ne=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.b.put("banners/update/".concat(E.id,"/"));case 3:Z((function(e){var n=e,t=n.findIndex((function(e){return e.id===E.id}));return n[t].image=URL.createObjectURL(te[0].originFileObj),n})),re([]),u.ZP.success("\u0423\u0441\u043f\u0435\u0448\u043d\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043e!"),S(!1),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(0),u.ZP.error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!"),S(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),Se=function(){var e=(0,i.Z)((0,a.Z)().mark((function e(n){var t,r,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=n.onSuccess,r=n.onError,n.file,i=n.onProgress,{onUploadProgress:function(e){var n=Math.floor(e.loaded/e.total*100);ce(n),100===n&&setTimeout((function(){return ce(0)}),1e3),i({percent:e.loaded/e.total*100})}};try{t("Ok")}catch(a){r({err:a})}case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Te=(0,x.jsxs)("div",{children:[(0,x.jsx)(p.Z,{}),(0,x.jsx)("div",{style:{marginTop:8},children:"Upload"})]});return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(f.Z,{open:B,title:$,footer:null,onCancel:function(){return M(!1)},centered:!0,zIndex:"1001",children:(0,x.jsx)("img",{alt:"example",style:{width:"100%"},src:V})}),(0,x.jsx)(f.Z,{title:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u043d\u043d\u0435\u0440 \u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",open:H,onOk:be,width:"600px",confirmLoading:C,onCancel:function(){re([]),J(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",style:{top:"200px"},children:(0,x.jsxs)("div",{className:"banner-add-container",children:[(0,x.jsxs)("div",{className:"add-left",children:[(0,x.jsx)("div",{className:"add-picture",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0431\u0430\u043d\u043d\u0435\u0440"}),(0,x.jsx)("div",{className:"add-column",children:"\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0439"})]}),(0,x.jsxs)("div",{className:"add-right",children:[(0,x.jsx)("div",{className:"add-picture",children:(0,x.jsx)(v.Z,{customRequest:ye,listType:"picture-card",fileList:te,onPreview:he,onChange:xe,children:0==te.length&&Te})}),(0,x.jsx)("div",{className:"add-column",children:(0,x.jsx)(s.Z,{checked:ue,onChange:function(e){return de(e.target.checked)}})})]})]})}),(0,x.jsx)(f.Z,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c?",open:j,onOk:ge,confirmLoading:C,onCancel:function(){b(!1)},okButtonProps:{danger:!0},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",style:{top:"200px"}}),(0,x.jsx)(f.Z,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442?",open:fe,onOk:je,confirmLoading:C,onCancel:function(){ve(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",style:{top:"200px"}}),(0,x.jsx)(f.Z,{title:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c",width:"750px",open:N,onOk:Ne,confirmLoading:U,onCancel:function(){re([]),S(!1)},cancelText:"\u041e\u0442\u043c\u0435\u043d\u0430",okText:"\u0414\u0430",okType:"primary",style:{top:"200px"},children:(0,x.jsxs)("div",{className:"banner-update-container",children:[(0,x.jsx)("div",{className:"banner-update-left",children:(0,x.jsx)("p",{className:"banner-image-content",children:"Image"})}),(0,x.jsxs)("div",{className:"banner-update-right",children:[(0,x.jsx)("img",{className:"banner-image",src:null===E||void 0===E?void 0:E.image}),(0,x.jsx)(v.Z,{customRequest:Se,listType:"picture-card",fileList:te,onPreview:he,onChange:xe,children:0==te.length&&Te})]})]})}),(0,x.jsxs)("div",{className:"banners-container page",children:[(0,x.jsxs)("div",{className:"banners-header-container",children:[(0,x.jsx)("h2",{children:"\u0411\u0430\u043d\u043d\u0435\u0440\u044b"}),(0,x.jsx)("div",{className:"add-button",onClick:function(e){J(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c"})]}),(0,x.jsx)(d.Z,{dataSource:m,columns:me,pagination:!1,active:null===E||void 0===E?void 0:E.id})]})]})}}}]);
//# sourceMappingURL=753.98cf8258.chunk.js.map