(this["webpackJsonpzeerakb1.github.io"]=this["webpackJsonpzeerakb1.github.io"]||[]).push([[4,8],{116:function(t,e,s){"use strict";var i=s(2),n=s.n(i),o=s(0),a=s(3),c=s(1);const r=o.forwardRef(((t,e)=>{const[{className:s,...i},{as:o="div",bsPrefix:r,spans:l}]=function(t){let{as:e,bsPrefix:s,className:i,...o}=t;s=Object(a.c)(s,"col");const c=Object(a.a)(),r=Object(a.b)(),l=[],h=[];return c.forEach((t=>{const e=o[t];let i,n,a;delete o[t],"object"===typeof e&&null!=e?({span:i,offset:n,order:a}=e):i=e;const c=t!==r?"-".concat(t):"";i&&l.push(!0===i?"".concat(s).concat(c):"".concat(s).concat(c,"-").concat(i)),null!=a&&h.push("order".concat(c,"-").concat(a)),null!=n&&h.push("offset".concat(c,"-").concat(n))})),[{...o,className:n()(i,...l,...h)},{as:e,bsPrefix:s,spans:l}]}(t);return Object(c.jsx)(o,{...i,ref:e,className:n()(s,!l.length&&r)})}));r.displayName="Col",e.a=r},122:function(t,e,s){},126:function(t,e,s){"use strict";var i=s(2),n=s.n(i),o=s(0),a=s(3),c=s(1);const r=o.forwardRef(((t,e)=>{let{bsPrefix:s,className:i,as:o="div",...r}=t;const l=Object(a.c)(s,"row"),h=Object(a.a)(),d=Object(a.b)(),u="".concat(l,"-cols"),p=[];return h.forEach((t=>{const e=r[t];let s;delete r[t],null!=e&&"object"===typeof e?({cols:s}=e):s=e;const i=t!==d?"-".concat(t):"";null!=s&&p.push("".concat(u).concat(i,"-").concat(s))})),Object(c.jsx)(o,{ref:e,...r,className:n()(i,l,...p)})}));r.displayName="Row",e.a=r},63:function(t,e,s){"use strict";s.r(e);s(0),s(64);var i=s(1);e.default=function(t){const{title:e}=t;return Object(i.jsx)("div",{className:"header",children:e})}},70:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),o=s(158),a=s(107),c=s(126),r=s(116),l=s(1),h=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,j=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&g(t,s,e[s]);if(p)for(var s of p(e))m.call(e,s)&&g(t,s,e[s]);return t},x=(t,e)=>d(t,u(e)),f=class extends i.Component{constructor(t){super(t),this.ref=n.a.createRef(),this.state={style:{}};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout((()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()}),0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:x(j({},this.state.style),{willChange:"transform"})})),this.setTransition(),t(e)}reset(){window.requestAnimationFrame((()=>{this.setState(Object.assign({},this.state,{style:x(j({},this.state.style),{transform:"perspective(".concat(this.settings.perspective,"px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)")})}))}))}onMouseMove(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.update.bind(this,e)),t(e)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:x(j({},this.state.style),{transition:"".concat(this.settings.speed,"ms ").concat(this.settings.easing)})})),this.transitionTimeout=setTimeout((()=>{this.setState(Object.assign({},this.state,{style:x(j({},this.state.style),{transition:""})}))}),this.settings.speed)}onMouseLeave(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return this.setTransition(),this.settings.reset&&this.reset(),t(e)}getValues(t){const e=(t.nativeEvent.clientX-this.left)/this.width,s=(t.nativeEvent.clientY-this.top)/this.height,i=Math.min(Math.max(e,0),1),n=Math.min(Math.max(s,0),1);return{tiltX:(this.reverse*(this.settings.max/2-i*this.settings.max)).toFixed(2),tiltY:(this.reverse*(n*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*i,percentageY:100*n}}updateElementPosition(){const t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(t){const e=this.getValues(t);this.setState(Object.assign({},this.state,{style:x(j({},this.state.style),{transform:"perspective(".concat(this.settings.perspective,"px) rotateX(").concat("x"===this.settings.axis?0:e.tiltY,"deg) rotateY(").concat("y"===this.settings.axis?0:e.tiltX,"deg) scale3d(").concat(this.settings.scale,", ").concat(this.settings.scale,", ").concat(this.settings.scale,")")})})),this.updateCall=null}render(){const t=Object.assign({},this.props.style,this.state.style);return Object(l.jsx)("div",{style:t,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}},v=s(47),O=s.n(v),y=s(63),M=s(19),w=s(25);s(122);const T={sectionContainer:{padding:"60px 0"},cardBorder:{borderRadius:"50%",border:"2px solid blue"},cardContainer:{value:"0",borderRadius:"30px",padding:"30px"},introText:{fonnSize:"5%",fontWeight:400,textAlign:"left"},headerText:{margin:"2px",fontSize:"2.4em",fontWeight:500,textAlign:"left",color:"#afaeae",textShadow:"4px 4px 4px rgba(97, 97, 97, 0.874)"},titleText:{fonnSize:"20%",fontWeight:250,textAlign:"left",color:"#3D84C6"},imageContainer:{display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"16px 14px 20px #0000008c;"},circularImage:{width:"250px",height:"250px",marginBottom:"12%",borderRadius:"50%",objectFit:"cover",position:"relative",overflow:"hidden",border:"8px solid #1a2e44"}};e.default=function(t){const{header:e}=t,[s,n]=Object(i.useState)(null);return Object(i.useEffect)((()=>{fetch(M.a.about,{method:"GET"}).then((t=>t.json())).then((t=>n(t))).catch((t=>t))}),[]),Object(l.jsxs)("div",{id:"about",children:[Object(l.jsx)(y.default,{title:e}),Object(l.jsx)("div",{style:T.sectionContainer,children:Object(l.jsx)(a.a,{children:s?Object(l.jsx)(O.a,{children:Object(l.jsx)("div",{style:T.cardContainer,children:Object(l.jsxs)(c.a,{children:[Object(l.jsx)(r.a,{md:4,children:Object(l.jsx)(f,{options:{reverse:!1,max:10,perspective:500,scale:1.2,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},children:Object(l.jsx)("div",{className:"col-lg-8",children:Object(l.jsx)("div",{className:"div-img-bg",children:Object(l.jsx)("div",{className:"about-img",children:Object(l.jsx)("img",{src:null===s||void 0===s?void 0:s.imageSource,alt:"me"})})})})})}),Object(l.jsxs)(r.a,{md:8,children:[Object(l.jsx)("h2",{style:T.headerText,children:s.name}),Object(l.jsx)("h4",{style:T.titleText,children:s.title}),Object(l.jsx)("div",{style:T.introText,children:(h=s.about,Object(l.jsx)(o.a,{children:h}))})]})]})})}):Object(l.jsx)(w.default,{})})})]});var h}}}]);
//# sourceMappingURL=4.4a3a8615.chunk.js.map