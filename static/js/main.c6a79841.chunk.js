(this.webpackJsonppersonal__project_tracking_sw=this.webpackJsonppersonal__project_tracking_sw||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),i=(a(91),a(92),a(7)),c=a(11),s=a(168),m=a(173),u=a(174),d=a(185),p=a(175),g=a(176),f=a(177),b=a(178),h=a(182),x=a(171),E=a(46),y=a(183),w=a(179),k=a(14),S=a.n(k),C=a(68),v=a.n(C),O=a(172),j=a(77),N=a.n(j),F=a(75),R=a.n(F),D=a(76),T=a.n(D),A=a(78),I=a.n(A),W=a(72),z=a.n(W),B=a(180),P=a(23),L=a.n(P),_=Object(s.a)((function(e){return{formfield:{"&:focus":{backgroundColor:"#fff",border:"1px solid #4c9aff",outline:0,boxShadow:"0 0 0 1px #4c9aff"},backgroundColor:"#dfe1e6",lineHeight:"20px",border:"1px solid #dfe1e6",borderRadius:"3px",padding:"4px 7px 5px",fontSize:"12px"},formlabel:{fontSize:"12px",fontWeight:"600",lineHeight:"16px",color:"#5e6c84"},formfield1:{width:"90%"},formfield2:{width:"100px"},formfield3:{width:"90%",height:"200px",overflowY:"auto",overflowX:"hidden"}}})),H=function(e){var t=_();return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",null,r.a.createElement("label",{htmlFor:"title",className:t.formlabel},"Title*",r.a.createElement("br",null),r.a.createElement("input",{defaultValue:e.item.title,className:S()(t.formfield,t.formfield1),type:"text",id:"title",name:"title",onChange:e.handleTitle})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"summary",className:t.formlabel},"Summary*",r.a.createElement("br",null),r.a.createElement("input",{defaultValue:e.item.summary,className:S()(t.formfield,t.formfield1),type:"text",id:"summary",name:"summary",onChange:e.handleSummary})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"category",className:t.formlabel},"Category",r.a.createElement("br",null),r.a.createElement("select",{defaultValue:e.item.category,className:S()(t.formfield,t.formfield2),name:"category",id:"category",onChange:e.handleCategory},r.a.createElement("option",{value:"Work"},"Work"),r.a.createElement("option",{value:"Personal"},"Personal"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"status",className:t.formlabel},"Status",r.a.createElement("br",null),r.a.createElement("select",{defaultValue:e.item.status,className:S()(t.formfield,t.formfield2),name:"status",id:"status",onChange:e.handleStatus},r.a.createElement("option",{value:"Open"},"Open"),r.a.createElement("option",{value:"Closed"},"Closed"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"description",className:t.formlabel},"Description*",r.a.createElement("br",null),r.a.createElement("textarea",{defaultValue:e.item.description,className:S()(t.formfield,t.formfield3),type:"text",id:"description",name:"decription",onChange:e.handleDescription})),r.a.createElement("br",null)))},M=Object(s.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,padding:e.spacing(2,4,3),top:"50%",left:"50%",outline:"none",borderRadius:"2px",transform:"translate(-50%, -50%)"},icon:Object(c.a)({width:"35px",height:"35px",color:"#66473F"},e.breakpoints.down("sm"),{width:"20px",height:"20px"}),iconbuttonstyle:Object(c.a)({boxShadow:"0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)",borderRadius:"24px",position:"fixed",bottom:"20px",right:"20px",border:"2px solid #66473F",backgroundColor:"#e6db74",zIndex:"999","&:hover":{transform:"scale(1.1)",backgroundColor:"#e6db74"},transition:"0.3s all"},e.breakpoints.down("sm"),{right:"10px"}),icontitle:{padding:"7px 5px 5px 5px",fontSize:"1rem",color:"#66473F",fontFamily:"Righteous"},title:{paddingTop:"20px",marginLeft:"75px",fontFamily:"Righteous",color:"#e6db74",borderBottom:"5px solid #e6db74"},spancolor:{color:"#FF1493"},submenu:{position:"fixed",backgroundColor:"#272c34",paddingBottom:"35px",marginLeft:"-25px",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},title2:{paddingTop:"20px",fontFamily:"Righteous",color:"#272c34",textDecoration:"underline"},createstyle:{backgroundColor:"#0052cc",color:"white",marginRight:"5px",padding:"5px",fontWeight:600,border:"1px solid #0052cc",borderRadius:"2px","&:hover":{backgroundColor:"#0052cccc",cursor:"pointer"}},cancelstyle:{backgroundColor:"transparent",color:"#0052cc",marginRight:"5px",padding:"5px",border:"1px solid white",borderRadius:"2px","&:hover":{textDecoration:"underline",cursor:"pointer"}}}})),V=function(e){var t=r.a.useState(!1),a=Object(i.a)(t,2),n=a[0],o=a[1],l=r.a.useState(""),c=Object(i.a)(l,2),s=c[0],m=c[1],u=r.a.useState(""),d=Object(i.a)(u,2),p=d[0],g=d[1],f=r.a.useState("Work"),b=Object(i.a)(f,2),y=b[0],w=b[1],k=r.a.useState("Open"),C=Object(i.a)(k,2),v=C[0],j=C[1],N=r.a.useState(""),F=Object(i.a)(N,2),R=F[0],D=F[1],T=M(),A=function(){I(),o(!1)},I=function(){m(""),g(""),w("Work"),j("Open"),D("")},W={title:s,summary:p,category:y,status:v,description:R},P=r.a.createElement("div",{className:T.paper},r.a.createElement(E.a,{className:T.title2},"Create issue"),r.a.createElement("br",null),r.a.createElement(H,{item:W,handleTitle:function(e){m(e.target.value)},handleSummary:function(e){g(e.target.value)},handleCategory:function(e){w(e.target.value)},handleStatus:function(e){j(e.target.value)},handleDescription:function(e){D(e.target.value)}}),r.a.createElement("div",{style:{marginTop:"15px"}},r.a.createElement("button",{className:S()(T.createstyle),onClick:function(t){A(),I();var a={title:s,summary:p,category:y,status:v,description:R};L.a.post("/issues",a,{header:{"Content-Type":"application/JSON"}}).then((function(t){console.log(t),e.notification("Successfully created!"),e.created(),e.clicked()})).catch((function(e){console.log(e)}))}},"Create"),r.a.createElement("button",{className:S()(T.cancelstyle),onClick:function(){window.confirm("Are you sure you would like to discard the Issue?")&&A()}},"Cancel")));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{className:T.submenu,container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement(x.a,null,r.a.createElement(E.a,{className:T.title,variant:"h4"},"Issues",r.a.createElement("span",{style:{color:"#a6e22e"}},"."))),r.a.createElement(x.a,null,e.status?null:r.a.createElement(O.a,{edge:"start","aria-label":"Add Open Item",onClick:function(){o(!0)},className:T.iconbuttonstyle},r.a.createElement(z.a,{className:T.icon}),r.a.createElement(h.a,{xsDown:!0},r.a.createElement(E.a,{className:T.icontitle},"Create"))),r.a.createElement(B.a,{open:n,onClose:A},P))))},U=a(139),G=Object(s.a)((function(e){return{root:{marginLeft:"50px",marginRight:"50px",marginTop:"20px"},paper:{padding:"10px",backgroundColor:"white",border:"2px solid #212121",boxShadow:"0 0 5px white",borderRadius:"5px","&:hover":{cursor:"pointer",boxShadow:"0 0 10px #e6db74"},transition:"all 0.3s"},title:{fontWeight:"500",padding:"5px 0",fontSize:"20px",color:"#33433d",fontFamily:"Righteous"},category:{color:"#898989",fontStyle:"italic",padding:"2px 0",fontSize:"12px"},summary:{fontSize:"15px",color:"#212121",fontFamily:"Arial"}}})),J=function(e){var t=G();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{xs:12,item:!0,key:e.item.issueId},r.a.createElement(U.a,{onClick:function(){e.clicked(e.item)},className:t.paper},r.a.createElement(E.a,{noWrap:!0,className:t.title},e.item.title),r.a.createElement(E.a,{className:t.category},e.item.category),r.a.createElement(E.a,{noWrap:!0,className:t.summary},e.item.summary))))},X=a(80),Y=a(50),$=a.n(Y),q=a(73),K=a.n(q),Q=a(51),Z=a.n(Q),ee=a(74),te=a.n(ee),ae=Object(s.a)((function(e){return{root:{marginLeft:"50px",marginRight:"50px",marginTop:"20px"},paper:{padding:"10px",backgroundColor:"white",border:"2px solid #212121",boxShadow:"0 0 5px white",borderRadius:"5px",transition:"all 0.3s"},title:{fontWeight:"500",fontSize:"22px",color:"#33433d",fontFamily:"Righteous",marginTop:"10px",wordBreak:"break-word"},category:{color:"#898989",fontStyle:"italic",padding:"1px 0",fontSize:"12px"},summary:{marginTop:"20px",fontSize:"15px",color:"#33433d",fontFamily:"Arial",lineHeight:"1.5",wordBreak:"break-word"},description:{marginTop:"20px",fontSize:"15px",color:"#33433d",fontFamily:"Arial",lineHeight:"1.5",wordBreak:"break-word"},title2:{paddingTop:"20px",fontFamily:"Righteous",color:"#272c34",textDecoration:"underline"},createstyle:{backgroundColor:"#0052cc",color:"white",marginRight:"5px",padding:"5px",fontWeight:600,border:"1px solid #0052cc",borderRadius:"2px","&:hover":{backgroundColor:"#0052cccc",cursor:"pointer"}},cancelstyle:{backgroundColor:"transparent",color:"#0052cc",marginRight:"5px",padding:"5px",border:"1px solid white",borderRadius:"2px","&:hover":{textDecoration:"underline",cursor:"pointer"}}}})),ne=function(e){var t=ae(),a=r.a.useState(e.item.title),o=Object(i.a)(a,2),l=o[0],c=o[1],s=r.a.useState(e.item.summary),u=Object(i.a)(s,2),d=u[0],p=u[1],g=r.a.useState(e.item.category),f=Object(i.a)(g,2),b=f[0],h=f[1],y=r.a.useState(e.item.status),w=Object(i.a)(y,2),k=w[0],C=w[1],v=r.a.useState(e.item.description),j=Object(i.a)(v,2),N=j[0],F=j[1],R=Object(n.useState)(!1),D=Object(i.a)(R,2),T=D[0],A=D[1],I=function(){c(e.item.title),C(e.item.status),p(e.item.summary),F(e.item.description),h(e.item.category),W()},W=function(){A(!1)},z=function(t){W();var a={title:l,category:b,description:N,status:k,summary:d};L.a.put("/issues/"+e.item.issueId,a,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}}).then((function(t){e.notification("Successfully updated!"),e.created(),console.log(t),e.clicked()})).catch((function(e){console.log(e)}))},B=r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:t.title},l),r.a.createElement(E.a,{className:t.category},"Category: ",b),r.a.createElement(E.a,{className:t.summary},r.a.createElement("span",null,r.a.createElement("strong",null,"Summary:"))," ",r.a.createElement("br",null),d),r.a.createElement(E.a,{className:t.description},r.a.createElement("span",null,r.a.createElement("strong",null,"Description:")),r.a.createElement("br",null)," ",N)),P={title:l,category:b,description:N,status:k,summary:d},_=r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{className:t.title2},"Edit issue"),r.a.createElement("br",null),r.a.createElement(H,{item:P,handleTitle:function(e){c(e.target.value)},handleSummary:function(e){p(e.target.value)},handleCategory:function(e){h(e.target.value)},handleStatus:function(e){C(e.taget.value)},handleDescription:function(e){F(e.target.value)},postHandler:z,handleClose:W}),r.a.createElement("div",{style:{marginTop:"15px"}},r.a.createElement("button",{className:S()(t.createstyle),onClick:z},"Save"),r.a.createElement("button",{className:S()(t.cancelstyle),onClick:function(){window.confirm("Are you sure you wish to discard the changes?")&&I()}},"Cancel"))),M=r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(O.a,{edge:"start","aria-label":"Back",className:t.iconbuttonstyle,onClick:function(){e.backward()}},r.a.createElement($.a,{className:t.icon}))),r.a.createElement(x.a,null,r.a.createElement(O.a,{edge:"end","aria-label":"Add Open Item",className:t.iconbuttonstyle,onClick:function(){A(!0)}},r.a.createElement(K.a,{className:t.icon})),r.a.createElement(O.a,{edge:"end","aria-label":"Add Open Item",className:t.iconbuttonstyle,onClick:function(){window.confirm("Are you sure you wish to delete the item?")&&L.a.delete("/issues/"+e.item.issueId,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(t){console.log(t),e.notification("Successfully deleted!"),e.created(),e.clicked(),e.backward()})).catch((function(e){console.log(e)}))}},r.a.createElement(Z.a,{className:t.icon})))),V=r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,r.a.createElement(O.a,{edge:"start","aria-label":"Back",className:t.iconbuttonstyle,onClick:function(){window.confirm("Are you sure you wish to discard the changes?")&&I()}},r.a.createElement($.a,{className:t.icon}))),r.a.createElement(x.a,null,r.a.createElement(O.a,{edge:"end","aria-label":"Update Changes",className:t.iconbuttonstyle,onClick:z},r.a.createElement(te.a,{className:t.icon})),r.a.createElement(O.a,{edge:"end","aria-label":"Delete Item",className:t.iconbuttonstyle,onClick:function(){window.confirm("Are you sure you wish to discard the changes?")&&I()}},r.a.createElement(Z.a,{className:t.icon}))));return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{xs:12,item:!0,key:e.item.issueId},r.a.createElement(U.a,{className:t.paper},r.a.createElement(x.a,{container:!0,direction:"row",justify:"space-between"},T?V:M),r.a.createElement(m.a,null),T?_:B)))},re=a(184),oe=a(181);function le(e){return r.a.createElement(oe.a,Object.assign({elevation:6,variant:"filled"},e))}var ie=function(e){return r.a.createElement(re.a,{open:e.open,autoHideDuration:3e3,onClose:e.handleClose},r.a.createElement(le,{onClose:e.handleClose,severity:"success"},e.notificationmsg))},ce=a(45),se=Object(s.a)((function(e){return{root:{marginTop:"120px",marginLeft:"50px",marginRight:"50px",flexGrow:1,paddingBottom:"60px"},issuecontainer:{}}})),me=function(e){var t=se(),a=r.a.useState([]),o=Object(i.a)(a,2),l=o[0],c=o[1],s=r.a.useState(!1),m=Object(i.a)(s,2),u=m[0],d=m[1],p=r.a.useState("Success"),g=Object(i.a)(p,2),f=g[0],b=g[1],h=r.a.useState({showDetails:!1,itemDetails:null}),y=Object(i.a)(h,2),w=y[0],k=y[1],S=r.a.useState(!1),C=Object(i.a)(S,2),v=C[0],O=C[1],j=r.a.useState(0),N=Object(i.a)(j,2),F=N[0],R=N[1],D=r.a.useState(!1),T=Object(i.a)(D,2),A=T[0],I=T[1],W=function(){O(!0)},z=function(){I(!A)},B=function(){k({showDetails:!1})};e.category!==F&&(R(e.category),B(),z());var P=null;0===F?P="/issues/Work":1===F&&(P="/issues/Personal");var _=function(e){b(e)};Object(n.useEffect)((function(){Object(ce.trackPromise)(L.a.get(P).then((function(e){c(e.data)})).catch((function(e){d(!0)})))}),[A]);var H=function(e){k({showDetails:!0,itemDetails:M(e)})},M=function(e){return r.a.createElement(ne,{clicked:z,backward:B,item:e,created:W,notification:_})},U=r.a.createElement(E.a,{style:{color:"#b8e674",marginLeft:"10px",marginTop:"20px",fontSize:"20px"}},r.a.createElement("strong",null,"ERROR.")," Something Went Wrong!");return u||(U=0===l.length?r.a.createElement(E.a,{style:{color:"white",marginLeft:"10px",marginTop:"20px",fontSize:"20px"}}," ",r.a.createElement("strong",null," No Issues! ")):l.map((function(e){return r.a.createElement(J,{key:e.issueId,item:e,clicked:H})}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{status:w.showDetails,clicked:z,created:W,notification:_}),r.a.createElement(X.a,null,r.a.createElement(x.a,{item:!0,className:t.root},r.a.createElement(x.a,{item:!0,className:t.issuecontainer,container:!0,direction:"column",spacing:2},w.showDetails?w.itemDetails:U))),r.a.createElement(ie,{notificationmsg:f,open:v,handleClose:function(){O(!1)}}))},ue=200,de=Object(s.a)((function(e){var t,a,n,r,o;return{root:{flexGrow:1,height:"100vh",overflow:"hidden"},appbarstyle:(t={backgroundColor:"var(--mdc-theme-primary, #212121)",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"},Object(c.a)(t,e.breakpoints.up("sm"),{marginLeft:ue,width:"calc(100% - ".concat(ue,"px)")}),Object(c.a)(t,"height","64px"),Object(c.a)(t,"transition",e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})),t),contentShift:(a={},Object(c.a)(a,e.breakpoints.up("sm"),{marginLeft:ue,width:"calc(100% - ".concat(ue,"px)")}),Object(c.a)(a,"transition",e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})),a),title:{flexGrow:1},titleStyle:(n={},Object(c.a)(n,e.breakpoints.down("sm"),{fontSize:"16px"}),Object(c.a)(n,"fontSize","20px"),Object(c.a)(n,"fontWeight","500"),Object(c.a)(n,"fontFamily","Righteous"),Object(c.a)(n,"color","#FAF3DD"),n),logo:(r={},Object(c.a)(r,e.breakpoints.down("sm"),{height:"25px",width:"25px",marginRight:"2px"}),Object(c.a)(r,"height","30px"),Object(c.a)(r,"width","30px"),Object(c.a)(r,"marginRight","7px"),r),robofont:{fontFamily:"'Roboto Mono', monospace"},loginstyle:(o={},Object(c.a)(o,e.breakpoints.down("sm"),{}),Object(c.a)(o,"color","#FAF3DD"),Object(c.a)(o,"padding",0),Object(c.a)(o,"&:hover",{color:"#7f7f7f",transition:"0.3s ease 0s"}),o),menuButton:{marginRight:"2"},colorbeige:{color:"#FAF3DD"},drawerPaper:{width:ue,backgroundColor:"#b8e674",borderRight:"2px solid black "},drawer:{width:ue,flexShrink:0},toolbar:e.mixins.toolbar,drawertext:{fontFamily:"'Righteous',cursive",fontWeight:500,fontSize:"18px"},dividerColor:{backgroundColor:"#8b8b8b"},selectedItem:{color:"#66473F"},listiconcolor:{color:"#var(--mdc-theme-primary, #212121)"},container:{position:"absolute",top:"64px"}}})),pe=function(e){var t=de(),a=r.a.useState(!1),n=Object(i.a)(a,2),o=n[0],l=n[1],c=function(){l(!o)},s=r.a.useState(0),k=Object(i.a)(s,2),C=k[0],j=k[1],F=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(m.a,{classes:{root:t.dividerColor}}),r.a.createElement(u.a,null,["Work","Personal"].map((function(e,a){return r.a.createElement(d.a,{selected:C===a,button:!0,onClick:function(e){!function(e,t){j(t),ue=0}(0,a)},classes:{selected:t.selectedItem},key:e},r.a.createElement(p.a,null,function(e){return 0===e?r.a.createElement(R.a,{htmlColor:C===e?"#66473F":"black"}):1===e?r.a.createElement(T.a,{htmlColor:C===e?"#66473F":"black"}):void 0}(a)),r.a.createElement(g.a,{classes:{primary:t.drawertext},primary:e}))}))));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement(f.a,{className:t.appbarstyle,position:"fixed"},r.a.createElement(b.a,null,r.a.createElement(h.a,{smUp:!0,implementation:"css"},r.a.createElement(O.a,{edge:"start",className:S()(t.menuButton,t.colorbeige),"aria-label":"menu",onClick:c},r.a.createElement(N.a,null))),r.a.createElement(x.a,{container:!0,direction:"row",alignItems:"center"},r.a.createElement("img",{alt:"logo",src:v.a,className:t.logo}),r.a.createElement(E.a,{variant:"h6",className:S()(t.title,t.titleStyle)},"Project Management")),r.a.createElement(O.a,{"aria-label":"login",className:S()(t.loginstyle)},r.a.createElement(I.a,null)))),r.a.createElement(h.a,{xsDown:!0,implementation:"css"},r.a.createElement(y.a,{className:t.drawer,anchor:"left",classes:{paper:t.drawerPaper},variant:"permanent",open:!0},F)),r.a.createElement(h.a,{smUp:!0,implementation:"css"},r.a.createElement(y.a,{className:t.drawer,anchor:"left",open:o,classes:{paper:t.drawerPaper},variant:"temporary",ModalProps:{keepMounted:!0},onClose:c},F)),r.a.createElement(w.a,{className:S()(t.contentShift,t.container)},r.a.createElement(me,{category:C}))))};var ge=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=a(79),be=a.n(fe);L.a.defaults.baseURL="https://issueapi.herokuapp.com/api/",L.a.defaults.headers["Content-Type"]="application/json",L.a.defaults.headers["Access-Control-Allow-Origin"]="*";var he=function(e){return Object(ce.usePromiseTracker)().promiseInProgress&&r.a.createElement("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(be.a,{type:"ThreeDots",color:"#2BAD60",height:"100",width:"100"}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ge,null),r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,a){e.exports=a.p+"static/media/material-ui.d2b1e190.png"},86:function(e,t,a){e.exports=a(138)},91:function(e,t,a){},92:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.c6a79841.chunk.js.map