"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[1212],{11212:(f,E,e)=>{e.r(E),e.d(E,{FORMS:()=>s});var t=e(21272),c=e(48653),d=e(38413),l=e(94061),r=e(30893),o=e(83997),m=e(43064),a=e(85963),h=e(51337),g=e(54894),v=e(17703),p=e(63891),O=e(16825),i=e(37198),P=e(86085),y=e(40811);const n=(0,p.Ay)(c.c)`
  flex: 1;
`,s={providers:{Component:()=>{const{push:R}=(0,v.W6)(),{formatMessage:u}=(0,g.A)(),{isLoading:D,providers:C}=(0,P.E)({enabled:window.strapi.features.isEnabled(window.strapi.features.SSO)}),L=()=>{R("/auth/login")};return!window.strapi.features.isEnabled(window.strapi.features.SSO)||!D&&C.length===0?t.createElement(v.rd,{to:"/auth/login"}):t.createElement(i.Ay,null,t.createElement(d.g,null,t.createElement(i.A1,null,t.createElement(i.VP,null,t.createElement(O.g,null),t.createElement(l.a,{paddingTop:6,paddingBottom:1},t.createElement(r.o,{as:"h1",variant:"alpha"},u({id:"Auth.form.welcome.title"}))),t.createElement(l.a,{paddingBottom:7},t.createElement(r.o,{variant:"epsilon",textColor:"neutral600"},u({id:"Auth.login.sso.subtitle"})))),t.createElement(o.s,{direction:"column",alignItems:"stretch",gap:7},D?t.createElement(o.s,{justifyContent:"center"},t.createElement(m.a,null,u({id:"Auth.login.sso.loading"}))):t.createElement(y.A,{providers:C}),t.createElement(o.s,null,t.createElement(n,null),t.createElement(l.a,{paddingLeft:3,paddingRight:3},t.createElement(r.o,{variant:"sigma",textColor:"neutral600"},u({id:"or"}))),t.createElement(n,null)),t.createElement(a.$,{fullWidth:!0,size:"L",onClick:L},u({id:"Auth.form.button.login.strapi"})))),t.createElement(o.s,{justifyContent:"center"},t.createElement(l.a,{paddingTop:4},t.createElement(h.N_,{to:"/auth/forgot-password"},t.createElement(r.o,{variant:"pi"},u({id:"Auth.link.forgot-password"})))))))},endPoint:null,fieldsToDisable:[],fieldsToOmit:[],schema:null,inputsPrefix:""}}},40811:(f,E,e)=>{e.d(E,{A:()=>y});var t=e(21272),c=e(90151),d=e(68074),l=e(83997),r=e(79739),o=e(30893),m=e(33544),a=e.n(m),h=e(54894),g=e(71389),v=e(63891);const p=v.Ay.a`
  width: ${136/16}rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${48/16}rem;
  border: 1px solid ${({theme:n})=>n.colors.neutral150};
  border-radius: ${({theme:n})=>n.borderRadius};
  text-decoration: inherit;
  &:link {
    text-decoration: none;
  }
  color: ${({theme:n})=>n.colors.neutral600};
`,O=(0,v.Ay)(l.s)`
  & a:not(:first-child):not(:last-child) {
    margin: 0 ${({theme:n})=>n.spaces[2]};
  }
  & a:first-child {
    margin-right: ${({theme:n})=>n.spaces[2]};
  }
  & a:last-child {
    margin-left: ${({theme:n})=>n.spaces[2]};
  }
`,i=({provider:n})=>t.createElement(r.m,{label:n.displayName},t.createElement(p,{href:`${window.strapi.backendURL}/admin/connect/${n.uid}`},n.icon?t.createElement("img",{src:n.icon,"aria-hidden":!0,alt:"",height:"32px"}):t.createElement(o.o,null,n.displayName)));i.propTypes={provider:a().shape({icon:a().string,displayName:a().string.isRequired,uid:a().string.isRequired}).isRequired};const P=({providers:n,displayAllProviders:M})=>{const{formatMessage:A}=(0,h.A)();return M?t.createElement(c.x,{gap:4},n.map(s=>t.createElement(d.E,{key:s.uid,col:4},t.createElement(i,{provider:s})))):n.length>2&&!M?t.createElement(c.x,{gap:4},n.slice(0,2).map(s=>t.createElement(d.E,{key:s.uid,col:4},t.createElement(i,{provider:s}))),t.createElement(d.E,{col:4},t.createElement(r.m,{label:A({id:"global.see-more"})},t.createElement(p,{as:g.N_,to:"/auth/providers"},t.createElement("span",{"aria-hidden":!0},"\u2022\u2022\u2022"))))):t.createElement(O,{justifyContent:"center"},n.map(s=>t.createElement(i,{key:s.uid,provider:s})))};P.defaultProps={displayAllProviders:!0},P.propTypes={providers:a().arrayOf(a().object).isRequired,displayAllProviders:a().bool};const y=P},86085:(f,E,e)=>{e.d(E,{E:()=>l});var t=e(21272),c=e(51337),d=e(74930);const l=(r={})=>{const{get:o}=(0,c.ry)(),{data:m,isLoading:a}=(0,d.useQuery)(["ee","providers"],async()=>{const{data:g}=await o("/admin/providers");return g},r);return{providers:t.useMemo(()=>m??[],[m]),isLoading:a}}}}]);
