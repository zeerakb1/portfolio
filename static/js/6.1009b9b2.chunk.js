(this["webpackJsonpzeerakb1.github.io"]=this["webpackJsonpzeerakb1.github.io"]||[]).push([[6,8],{133:function(e,t,i){},63:function(e,t,i){"use strict";i.r(t);i(0),i(64);var n=i(1);t.default=function(e){const{title:t}=e;return Object(n.jsx)("div",{className:"header",children:t})}},67:function(e,t,i){"use strict";i.r(t);var n=i(0),l=i(127),c=i(107),s=i(156),r=i(20),o=i(48),a=i.n(o),d=i(63),b=i(19),j=i(25),h=(i(133),i(1));const u={ulStyle:{listStylePosition:"outside",paddingLeft:20},subtitleContainerStyle:{marginTop:15,marginBottom:15},subtitleStyle:{display:"inline-block"},inlineChild:{display:"inline-block"},itemStyle:{marginBottom:15}};t.default=function(e){const t=Object(n.useContext)(r.a),{header:i}=e,[o,x]=Object(n.useState)(null);return Object(n.useEffect)((()=>{fetch(b.a.experiences,{method:"GET"}).then((e=>e.json())).then((e=>x(e.experiences))).catch((e=>e))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(d.default,{title:i}),o?Object(h.jsx)("div",{className:"section-content-container",children:Object(h.jsx)(c.a,{children:Object(h.jsx)(l.Timeline,{lineColor:t.timelineLineColor,children:o.map((e=>Object(h.jsx)(a.a,{children:Object(h.jsxs)(l.TimelineItem,{dateText:e.dateText,dateInnerStyle:{background:t.accentColor},style:u.itemStyle,bodyContainerStyle:{background:"#312d2d",padding:"12px",color:t.color,borderRadius:"8px",marginTop:"10px",marginBottom:"10px",boxShadow:"0.5rem 0.5rem 2rem 0 rgb(39, 36, 36)"},children:[Object(h.jsx)("h2",{className:"item-title",children:e.title}),Object(h.jsxs)("div",{style:u.subtitleContainerStyle,children:[Object(h.jsx)("h4",{style:{...u.subtitleStyle,color:t.accentColor},children:e.subtitle}),e.workType&&Object(h.jsxs)("h5",{style:u.inlineChild,children:["\xa0\xb7"," ",e.workType]})]}),Object(h.jsx)("ul",{style:u.ulStyle,children:e.workDescription.map((e=>Object(h.jsxs)("div",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.a,{children:e,components:{p:"span"}})}),Object(h.jsx)("br",{})]},e)))})]},e.title+e.dateText)})))})})}):Object(h.jsx)(j.default,{})]})}}}]);
//# sourceMappingURL=6.1009b9b2.chunk.js.map