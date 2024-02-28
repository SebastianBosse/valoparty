import{u as h,A as M}from"./teams--0Xrd7dC.js";import{d as f,_ as v,o as n,c as r,p as g,a as b,b as a,r as y,e as m,F as w,f as T,w as S,v as A,g as _,h as C,t as I,i as L,j as D,k as E,l as O,T as G,s as B,m as q,n as U,V as j,q as F,u as k,x as z}from"./index-OnFifNUg.js";const J=f({setup(){return{}}}),R=e=>(g("data-v-f46cc282"),e=e(),b(),e),H={class:"add__player",name:"Add Player"},K=R(()=>a("span",null,"+",-1)),Q=[K];function W(e,t,o,s,u,c){return n(),r("button",H,Q)}const X=v(J,[["render",W],["__scopeId","data-v-f46cc282"]]),Y=f({setup(){return{}}}),Z=e=>(g("data-v-0eece6b1"),e=e(),b(),e),x={xmlns:"http://www.w3.org/2000/svg",height:"16",width:"12",viewBox:"0 0 384 512"},ee=Z(()=>a("path",{d:"M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"},null,-1)),te=[ee];function oe(e,t,o,s,u,c){return n(),r("svg",x,te)}const V=v(Y,[["render",oe],["__scopeId","data-v-0eece6b1"]]),se=f({props:{team:{type:Number,required:!0}},components:{addButton:X,close:V},emits:["openModal"],setup(e,t){const o=e.team,s=h(),u=s.getTeam(o),c=y("");function l(p){s.deletePlayer(o,p)}function i(p){s.addToTeam(o,{name:c.value,Agent:null,notAvailable:[]}),c.value=""}function d(p){s.setSelectedPlayer(o,p),t.emit("openModal")}return{team:u,addToTeam:i,teamNumber:o,nameToAdd:c,openPlayerModal:d,deletePlayer:l}}}),ne={class:"card"},ae={class:"player_row"},le=["onClick"],de={key:0,class:"create_player_row"};function re(e,t,o,s,u,c){var d,p;const l=m("close"),i=m("addButton");return n(),r("div",ne,[(n(!0),r(w,null,T((d=e.team)==null?void 0:d.players,($,P)=>(n(),r("div",ae,[a("h6",{class:"player_row_name",onClick:N=>e.openPlayerModal(P)},I($.name),9,le),_(l,{onClick:N=>e.deletePlayer(P)},null,8,["onClick"])]))),256)),e.team&&((p=e.team)==null?void 0:p.players.length)<5?(n(),r("div",de,[S(a("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[0]||(t[0]=$=>e.nameToAdd=$)},null,512),[[A,e.nameToAdd]]),_(i,{onClick:t[1]||(t[1]=$=>e.addToTeam(e.teamNumber)),disabled:e.nameToAdd==""},null,8,["disabled"])])):C("",!0)])}const ce=v(se,[["render",re],["__scopeId","data-v-3b1c43c1"]]),pe=f({components:{close:V},props:{open:{type:Boolean,required:!0}},emits:["closed"],setup(e){const t=y(!1),o=y(null);return L(()=>e.open,(s,u)=>{var c;console.log("Entered with: ",s),s&&o.value&&((c=o.value)==null||c.showModal()),s||D(()=>{var l;o.value&&((l=o.value)==null||l.close())})}),{open:t,props:e,playerEditModal:o}}}),ie={ref:"playerEditModal",class:"modal"};function ue(e,t,o,s,u,c){const l=m("close");return n(),E(G,{to:"body"},[a("dialog",ie,[a("button",{class:"close_button",onClick:t[0]||(t[0]=i=>e.$emit("closed"))},[_(l)]),O(e.$slots,"default",{},void 0,!0)],512)])}const _e=v(pe,[["render",ue],["__scopeId","data-v-3124857a"]]),me=f({setup(){const e=h(),{selectedPlayer:t}=B(e),o=q(()=>Object.groupBy(M,({role:s})=>s));return{Agents:M,selectedPlayer:t,sortedAgents:o}}}),$e={key:0,class:"agent__grid"},fe={class:"agent__row"},ve={class:"agent"},ye=["id","value"],he=["for"],ge=["src","alt"];function be(e,t,o,s,u,c){return e.selectedPlayer?(n(),r("div",$e,[(n(!0),r(w,null,T(e.sortedAgents,(l,i)=>(n(),r("div",null,[a("h6",null,I(i),1),a("div",fe,[(n(!0),r(w,null,T(l,d=>(n(),r("div",ve,[S(a("input",{type:"checkbox",id:d.name,value:d,"onUpdate:modelValue":t[0]||(t[0]=p=>e.selectedPlayer.notAvailable=p)},null,8,ye),[[U,e.selectedPlayer.notAvailable]]),a("label",{for:d.name},[a("img",{src:`/agents/${d.cleanName??d.name}_icon.webp`,alt:d.name},null,8,ge)],8,he)]))),256))])]))),256))])):C("",!0)}const we=v(me,[["render",be],["__scopeId","data-v-81303298"]]),Te=f({components:{agentGridSelection:we},setup(e){const t=h(),{selectedPlayer:o}=B(t);return{selectedPlayer:o}}}),Se=e=>(g("data-v-94d2175c"),e=e(),b(),e),Ce=Se(()=>a("h4",null,"My Agents",-1));function Pe(e,t,o,s,u,c){const l=m("agentGridSelection");return n(),r("div",null,[e.selectedPlayer?S((n(),r("input",{key:0,class:"name__edit_input",type:"text","onUpdate:modelValue":t[0]||(t[0]=i=>e.selectedPlayer.name=i)},null,512)),[[A,e.selectedPlayer.name]]):C("",!0),a("div",null,[Ce,_(l)])])}const Me=v(Te,[["render",Pe],["__scopeId","data-v-94d2175c"]]),ke=f({components:{TeamCard:ce,modal:_e,playerModalDisplay:Me,VPButton:j},setup(){const e=h();e.$subscribe((o,s)=>{localStorage.setItem("teams",JSON.stringify(s))});const t=y(!1);return F(()=>{e.resetAgents()}),{open:t}}}),Ae=e=>(g("data-v-e60ae7a8"),e=e(),b(),e),Ie={class:"full-screen-height vp-center"},Be=Ae(()=>a("h1",null,"Team Creation",-1)),Ve={class:"card_wrapper"};function Ne(e,t,o,s,u,c){const l=m("playerModalDisplay"),i=m("modal"),d=m("TeamCard"),p=m("VPButton");return n(),r("div",Ie,[_(i,{onClosed:t[0]||(t[0]=$=>e.open=!1),open:e.open},{default:k(()=>[_(l)]),_:1},8,["open"]),Be,a("div",Ve,[_(d,{onOpenModal:t[1]||(t[1]=$=>e.open=!0),team:1}),_(d,{onOpenModal:t[2]||(t[2]=$=>e.open=!0),team:2})]),_(p,{target:"/play"},{default:k(()=>[z("Lets GO!")]),_:1})])}const Ee=v(ke,[["render",Ne],["__scopeId","data-v-e60ae7a8"]]);export{Ee as default};
