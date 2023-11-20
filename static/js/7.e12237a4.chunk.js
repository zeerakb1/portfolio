(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{115:function(e,a,t){"use strict";var r=t(2),c=t.n(r),s=t(0),o=t(3),l=t(1);const n=s.forwardRef(((e,a)=>{const[{className:t,...r},{as:s="div",bsPrefix:n,spans:d}]=function(e){let{as:a,bsPrefix:t,className:r,...s}=e;t=Object(o.c)(t,"col");const l=Object(o.a)(),n=Object(o.b)(),d=[],i=[];return l.forEach((e=>{const a=s[e];let r,c,o;delete s[e],"object"===typeof a&&null!=a?({span:r,offset:c,order:o}=a):r=a;const l=e!==n?"-".concat(e):"";r&&d.push(!0===r?"".concat(t).concat(l):"".concat(t).concat(l,"-").concat(r)),null!=o&&i.push("order".concat(l,"-").concat(o)),null!=c&&i.push("offset".concat(l,"-").concat(c))})),[{...s,className:c()(r,...d,...i)},{as:a,bsPrefix:t,spans:d}]}(e);return Object(l.jsx)(s,{...r,ref:a,className:c()(t,!d.length&&n)})}));n.displayName="Col",a.a=n},65:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t(115),s=t(2),o=t.n(s),l=t(3),n=t(1);const d=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...s}=e;return r=Object(l.c)(r,"card-body"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));d.displayName="CardBody";var i=d;const b=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...s}=e;return r=Object(l.c)(r,"card-footer"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));b.displayName="CardFooter";var j=b,f=t(50);const x=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:c,as:s="div",...d}=e;const i=Object(l.c)(t,"card-header"),b=Object(r.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return Object(n.jsx)(f.a.Provider,{value:b,children:Object(n.jsx)(s,{ref:a,...d,className:o()(c,i)})})}));x.displayName="CardHeader";var m=x;const y=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,variant:c,as:s="img",...d}=e;const i=Object(l.c)(t,"card-img");return Object(n.jsx)(s,{ref:a,className:o()(c?"".concat(i,"-").concat(c):i,r),...d})}));y.displayName="CardImg";var O=y;const u=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="div",...s}=e;return r=Object(l.c)(r,"card-img-overlay"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));u.displayName="CardImgOverlay";var p=u;const g=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="a",...s}=e;return r=Object(l.c)(r,"card-link"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));g.displayName="CardLink";var N=g,v=t(47);const h=Object(v.a)("h6"),C=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=h,...s}=e;return r=Object(l.c)(r,"card-subtitle"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));C.displayName="CardSubtitle";var P=C;const S=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c="p",...s}=e;return r=Object(l.c)(r,"card-text"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));S.displayName="CardText";var w=S;const R=Object(v.a)("h5"),k=r.forwardRef(((e,a)=>{let{className:t,bsPrefix:r,as:c=R,...s}=e;return r=Object(l.c)(r,"card-title"),Object(n.jsx)(c,{ref:a,className:o()(t,r),...s})}));k.displayName="CardTitle";var T=k;const B=r.forwardRef(((e,a)=>{let{bsPrefix:t,className:r,bg:c,text:s,border:d,body:b=!1,children:j,as:f="div",...x}=e;const m=Object(l.c)(t,"card");return Object(n.jsx)(f,{ref:a,...x,className:o()(r,m,c&&"bg-".concat(c),s&&"text-".concat(s),d&&"border-".concat(d)),children:b?Object(n.jsx)(i,{children:j}):j})}));B.displayName="Card";var I=Object.assign(B,{Img:O,Title:T,Subtitle:P,Body:i,Link:N,Text:w,Header:m,Footer:j,ImgOverlay:p}),F=t(108);const V=r.forwardRef(((e,a)=>{let{bsPrefix:t,bg:r="primary",pill:c=!1,text:s,className:d,as:i="span",...b}=e;const j=Object(l.c)(t,"badge");return Object(n.jsx)(i,{ref:a,...b,className:o()(d,j,c&&"rounded-pill",s&&"text-".concat(s),r&&"bg-".concat(r))})}));V.displayName="Badge";var H=V,L=t(20),J=t(156);const z={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10,border:"4px solid #181818"},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},cardImage:{objectFit:"cover"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=e=>{var a;const t=Object(r.useContext)(L.a),{project:s}=e;return Object(n.jsx)(c.a,{children:Object(n.jsxs)(I,{style:{...z.cardStyle,backgroundColor:t.cardBackground,borderColor:t.cardBorderColor},text:t.bsSecondaryVariant,children:[Object(n.jsx)(I.Img,{variant:"top",src:null===s||void 0===s?void 0:s.image,style:z.cardImage}),Object(n.jsxs)(I.Body,{children:[Object(n.jsx)(I.Title,{style:z.cardTitleStyle,children:s.title}),Object(n.jsx)(I.Text,{style:z.cardTextStyle,children:(o=s.bodyText,Object(n.jsx)(J.a,{children:o}))})]}),Object(n.jsx)(I.Body,{children:null===s||void 0===s||null===(a=s.links)||void 0===a?void 0:a.map((e=>Object(n.jsx)(F.a,{style:z.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:()=>window.open(e.href,"_blank"),children:e.text},e.href)))}),s.tags&&Object(n.jsx)(I.Footer,{style:{backgroundColor:t.cardFooterBackground},children:s.tags.map((e=>Object(n.jsx)(H,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:z.badgeStyle,children:e},e)))})]})});var o}}}]);
//# sourceMappingURL=7.e12237a4.chunk.js.map