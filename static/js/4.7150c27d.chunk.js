(this["webpackJsonpzeerakb1.github.io"]=this["webpackJsonpzeerakb1.github.io"]||[]).push([[4,8],{115:function(t,e,s){"use strict";var i=s(2),n=s.n(i),a=s(0),o=s(3),r=s(1);const l=a.forwardRef(((t,e)=>{const[{className:s,...i},{as:a="div",bsPrefix:l,spans:c}]=function(t){let{as:e,bsPrefix:s,className:i,...a}=t;s=Object(o.c)(s,"col");const r=Object(o.a)(),l=Object(o.b)(),c=[],h=[];return r.forEach((t=>{const e=a[t];let i,n,o;delete a[t],"object"===typeof e&&null!=e?({span:i,offset:n,order:o}=e):i=e;const r=t!==l?`-${t}`:"";i&&c.push(!0===i?`${s}${r}`:`${s}${r}-${i}`),null!=o&&h.push(`order${r}-${o}`),null!=n&&h.push(`offset${r}-${n}`)})),[{...a,className:n()(i,...c,...h)},{as:e,bsPrefix:s,spans:c}]}(t);return Object(r.jsx)(a,{...i,ref:e,className:n()(s,!c.length&&l)})}));l.displayName="Col",e.a=l},121:function(t,e,s){},127:function(t,e,s){"use strict";var i=s(2),n=s.n(i),a=s(0),o=s(3),r=s(1);const l=a.forwardRef(((t,e)=>{let{bsPrefix:s,className:i,as:a="div",...l}=t;const c=Object(o.c)(s,"row"),h=Object(o.a)(),u=Object(o.b)(),d=`${c}-cols`,p=[];return h.forEach((t=>{const e=l[t];let s;delete l[t],null!=e&&"object"===typeof e?({cols:s}=e):s=e;const i=t!==u?`-${t}`:"";null!=s&&p.push(`${d}${i}-${s}`)})),Object(r.jsx)(a,{ref:e,...l,className:n()(i,c,...p)})}));l.displayName="Row",e.a=l},62:function(t,e,s){"use strict";s.r(e);s(0),s(63);var i=s(1);e.default=function(t){const{title:e}=t;return Object(i.jsx)("div",{className:"header",children:e})}},69:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(160),o=s(106),r=s(127),l=s(115),c=s(1),h=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(t,e,s)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,j=(t,e)=>{for(var s in e||(e={}))b.call(e,s)&&g(t,s,e[s]);if(p)for(var s of p(e))m.call(e,s)&&g(t,s,e[s]);return t},f=(t,e)=>u(t,d(e)),x=class extends i.Component{constructor(t){super(t),this.ref=n.a.createRef(),this.state={style:{}};this.width=null,this.height=null,this.left=null,this.top=null,this.transitionTimeout=null,this.updateCall=null,this.element=null,this.settings=Object.assign({},{reverse:!1,max:35,perspective:1e3,easing:"cubic-bezier(.03,.98,.52,.99)",scale:"1.1",speed:"1000",transition:!0,axis:null,reset:!0},this.props.options),this.reverse=this.settings.reverse?-1:1,this.onMouseEnter=this.onMouseEnter.bind(this,this.props.onMouseEnter),this.onMouseMove=this.onMouseMove.bind(this,this.props.onMouseMove),this.onMouseLeave=this.onMouseLeave.bind(this,this.props.onMouseLeave)}componentDidMount(){this.element=this.ref.current,setTimeout((()=>{this.element.parentElement.querySelector(":hover")===this.element&&this.onMouseEnter()}),0)}componentWillUnmount(){clearTimeout(this.transitionTimeout),cancelAnimationFrame(this.updateCall)}onMouseEnter(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return this.updateElementPosition(),this.setState(Object.assign({},this.state,{style:f(j({},this.state.style),{willChange:"transform"})})),this.setTransition(),t(e)}reset(){window.requestAnimationFrame((()=>{this.setState(Object.assign({},this.state,{style:f(j({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`})}))}))}onMouseMove(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return e.persist(),null!==this.updateCall&&window.cancelAnimationFrame(this.updateCall),this.event=e,this.updateCall=requestAnimationFrame(this.update.bind(this,e)),t(e)}setTransition(){clearTimeout(this.transitionTimeout),this.setState(Object.assign({},this.state,{style:f(j({},this.state.style),{transition:`${this.settings.speed}ms ${this.settings.easing}`})})),this.transitionTimeout=setTimeout((()=>{this.setState(Object.assign({},this.state,{style:f(j({},this.state.style),{transition:""})}))}),this.settings.speed)}onMouseLeave(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},e=arguments.length>1?arguments[1]:void 0;return this.setTransition(),this.settings.reset&&this.reset(),t(e)}getValues(t){const e=(t.nativeEvent.clientX-this.left)/this.width,s=(t.nativeEvent.clientY-this.top)/this.height,i=Math.min(Math.max(e,0),1),n=Math.min(Math.max(s,0),1);return{tiltX:(this.reverse*(this.settings.max/2-i*this.settings.max)).toFixed(2),tiltY:(this.reverse*(n*this.settings.max-this.settings.max/2)).toFixed(2),percentageX:100*i,percentageY:100*n}}updateElementPosition(){const t=this.element.getBoundingClientRect();this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,this.left=t.left,this.top=t.top}update(t){const e=this.getValues(t);this.setState(Object.assign({},this.state,{style:f(j({},this.state.style),{transform:`perspective(${this.settings.perspective}px) rotateX(${"x"===this.settings.axis?0:e.tiltY}deg) rotateY(${"y"===this.settings.axis?0:e.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`})})),this.updateCall=null}render(){const t=Object.assign({},this.props.style,this.state.style);return Object(c.jsx)("div",{style:t,ref:this.ref,className:this.props.className,onMouseEnter:this.onMouseEnter,onMouseMove:this.onMouseMove,onMouseLeave:this.onMouseLeave,children:this.props.children})}},v=s(46),O=s.n(v),y=s(62),M=s(20),$=s(25);s(121);const w={sectionContainer:{padding:"60px 0"},cardBorder:{borderRadius:"50%",border:"2px solid blue"},cardContainer:{value:"0",borderRadius:"30px",padding:"30px"},introText:{fonnSize:"5%",fontWeight:400,textAlign:"left"},headerText:{margin:"2px",fontSize:"2.4em",fontWeight:500,textAlign:"left",color:"#afaeae",textShadow:"4px 4px 4px rgba(97, 97, 97, 0.874)"},titleText:{fonnSize:"20%",fontWeight:250,textAlign:"left",color:"#3D84C6"},imageContainer:{display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"16px 14px 20px #0000008c;"}};e.default=function(t){const{header:e}=t,[s,n]=Object(i.useState)(null);return Object(i.useEffect)((()=>{fetch(M.a.about,{method:"GET"}).then((t=>t.json())).then((t=>n(t))).catch((t=>t))}),[]),Object(c.jsxs)("div",{id:"about",children:[Object(c.jsx)(y.default,{title:e}),Object(c.jsx)("div",{style:w.sectionContainer,children:Object(c.jsx)(o.a,{children:s?Object(c.jsx)(O.a,{children:Object(c.jsx)("div",{style:w.cardContainer,children:Object(c.jsxs)(r.a,{children:[Object(c.jsx)(l.a,{md:4,children:Object(c.jsx)(x,{options:{reverse:!1,max:10,perspective:500,scale:1.2,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"},children:Object(c.jsx)("div",{className:"col-lg-8",children:Object(c.jsx)("div",{className:"div-img-bg",children:Object(c.jsx)("div",{className:"about-img",children:Object(c.jsx)("img",{src:null===s||void 0===s?void 0:s.imageSource,alt:"me"})})})})})}),Object(c.jsxs)(l.a,{md:8,children:[Object(c.jsx)("h2",{style:w.headerText,children:s.name}),Object(c.jsx)("h4",{style:w.titleText,children:s.title}),Object(c.jsx)("div",{style:w.introText,children:(h=s.about,Object(c.jsx)(a.a,{children:h}))})]})]})})}):Object(c.jsx)($.default,{})})})]});var h}}}]);
//# sourceMappingURL=4.7150c27d.chunk.js.map