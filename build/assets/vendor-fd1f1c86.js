var A,d,q,T,R,J,F,E={},K=[],ne=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$=Array.isArray;function w(_,e){for(var t in e)_[t]=e[t];return _}function Q(_){var e=_.parentNode;e&&e.removeChild(_)}function oe(_,e,t){var r,l,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?A.call(arguments,2):t),typeof _=="function"&&_.defaultProps!=null)for(o in _.defaultProps)s[o]===void 0&&(s[o]=_.defaultProps[o]);return L(_,s,r,l,null)}function L(_,e,t,r,l){var o={type:_,props:e,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++q};return l==null&&d.vnode!=null&&d.vnode(o),o}function I(_){return _.children}function M(_,e){this.props=_,this.context=e}function N(_,e){if(e==null)return _.__?N(_.__,_.__.__k.indexOf(_)+1):null;for(var t;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null)return t.__e;return typeof _.type=="function"?N(_):null}function X(_){var e,t;if((_=_.__)!=null&&_.__c!=null){for(_.__e=_.__c.base=null,e=0;e<_.__k.length;e++)if((t=_.__k[e])!=null&&t.__e!=null){_.__e=_.__c.base=t.__e;break}return X(_)}}function j(_){(!_.__d&&(_.__d=!0)&&T.push(_)&&!H.__r++||R!==d.debounceRendering)&&((R=d.debounceRendering)||J)(H)}function H(){var _,e,t,r,l,o,s,f,c;for(T.sort(F);_=T.shift();)_.__d&&(e=T.length,r=void 0,l=void 0,o=void 0,f=(s=(t=_).__v).__e,(c=t.__P)&&(r=[],l=[],(o=w({},s)).__v=s.__v+1,B(c,s,o,t.__n,c.ownerSVGElement!==void 0,s.__h!=null?[f]:null,r,f??N(s),s.__h,l),_e(r,s,l),s.__e!=f&&X(s)),T.length>e&&T.sort(F));H.__r=0}function Y(_,e,t,r,l,o,s,f,c,g,h){var n,y,u,i,p,D,a,v,x,S,k=0,b=r&&r.__k||K,P=b.length,C=P,m=e.length;for(t.__k=[],n=0;n<m;n++)(i=t.__k[n]=(i=e[n])==null||typeof i=="boolean"||typeof i=="function"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?L(null,i,null,null,i):$(i)?L(I,{children:i},null,null,null):i.__b>0?L(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null&&(i.__=t,i.__b=t.__b+1,(v=re(i,b,a=n+k,C))===-1?u=E:(u=b[v]||E,b[v]=void 0,C--),B(_,i,u,l,o,s,f,c,g,h),p=i.__e,(y=i.ref)&&u.ref!=y&&(u.ref&&O(u.ref,null,i),h.push(y,i.__c||p,i)),p!=null&&(D==null&&(D=p),S=!(x=u===E||u.__v===null)&&v===a,x?v==-1&&k--:v!==a&&(v===a+1?(k++,S=!0):v>a?C>m-a?(k+=v-a,S=!0):k--:k=v<a&&v==a-1?v-a:0),a=n+k,S=S||v==n&&!x,typeof i.type!="function"||v===a&&u.__k!==i.__k?typeof i.type=="function"||S?i.__d!==void 0?(c=i.__d,i.__d=void 0):c=p.nextSibling:c=ee(_,p,c):c=Z(i,c,_),typeof t.type=="function"&&(t.__d=c)));for(t.__e=D,n=P;n--;)b[n]!=null&&(typeof t.type=="function"&&b[n].__e!=null&&b[n].__e==t.__d&&(t.__d=b[n].__e.nextSibling),te(b[n],b[n]))}function Z(_,e,t){for(var r,l=_.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=_,e=typeof r.type=="function"?Z(r,e,t):ee(t,r.__e,e));return e}function ee(_,e,t){return t==null||t.parentNode!==_?_.insertBefore(e,null):e==t&&e.parentNode!=null||_.insertBefore(e,t),e.nextSibling}function re(_,e,t,r){var l=_.key,o=_.type,s=t-1,f=t+1,c=e[t];if(c===null||c&&l==c.key&&o===c.type)return t;if(r>(c!=null?1:0))for(;s>=0||f<e.length;){if(s>=0){if((c=e[s])&&l==c.key&&o===c.type)return s;s--}if(f<e.length){if((c=e[f])&&l==c.key&&o===c.type)return f;f++}}return-1}function le(_,e,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in e||W(_,o,null,t[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===e[o]||W(_,o,e[o],t[o],r)}function z(_,e,t){e[0]==="-"?_.setProperty(e,t??""):_[e]=t==null?"":typeof t!="number"||ne.test(e)?t:t+"px"}function W(_,e,t,r,l){var o;e:if(e==="style")if(typeof t=="string")_.style.cssText=t;else{if(typeof r=="string"&&(_.style.cssText=r=""),r)for(e in r)t&&e in t||z(_.style,e,"");if(t)for(e in t)r&&t[e]===r[e]||z(_.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in _?e.toLowerCase().slice(2):e.slice(2),_.l||(_.l={}),_.l[e+o]=t,t?r||_.addEventListener(e,o?V:G,o):_.removeEventListener(e,o?V:G,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e in _)try{_[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?_.removeAttribute(e):_.setAttribute(e,t))}}function G(_){return this.l[_.type+!1](d.event?d.event(_):_)}function V(_){return this.l[_.type+!0](d.event?d.event(_):_)}function B(_,e,t,r,l,o,s,f,c,g){var h,n,y,u,i,p,D,a,v,x,S,k,b,P,C,m=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,f=e.__e=t.__e,e.__h=null,o=[f]),(h=d.__b)&&h(e);try{e:if(typeof m=="function"){if(a=e.props,v=(h=m.contextType)&&r[h.__c],x=h?v?v.props.value:h.__:r,t.__c?D=(n=e.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(a,x):(e.__c=n=new M(a,x),n.constructor=m,n.render=se),v&&v.sub(n),n.props=a,n.state||(n.state={}),n.context=x,n.__n=r,y=n.__d=!0,n.__h=[],n._sb=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=w({},n.__s)),w(n.__s,m.getDerivedStateFromProps(a,n.__s))),u=n.props,i=n.state,n.__v=e,y)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&a!==u&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(a,x),!n.__e&&(n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(a,n.__s,x)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(n.props=a,n.state=n.__s,n.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(U){U&&(U.__=e)}),S=0;S<n._sb.length;S++)n.__h.push(n._sb[S]);n._sb=[],n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(a,n.__s,x),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(u,i,p)})}if(n.context=x,n.props=a,n.__P=_,n.__e=!1,k=d.__r,b=0,"prototype"in m&&m.prototype.render){for(n.state=n.__s,n.__d=!1,k&&k(e),h=n.render(n.props,n.state,n.context),P=0;P<n._sb.length;P++)n.__h.push(n._sb[P]);n._sb=[]}else do n.__d=!1,k&&k(e),h=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++b<25);n.state=n.__s,n.getChildContext!=null&&(r=w(w({},r),n.getChildContext())),y||n.getSnapshotBeforeUpdate==null||(p=n.getSnapshotBeforeUpdate(u,i)),Y(_,$(C=h!=null&&h.type===I&&h.key==null?h.props.children:h)?C:[C],e,t,r,l,o,s,f,c,g),n.base=e.__e,e.__h=null,n.__h.length&&s.push(n),D&&(n.__E=n.__=null)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=ie(t.__e,e,t,r,l,o,s,c,g);(h=d.diffed)&&h(e)}catch(U){e.__v=null,(c||o!=null)&&(e.__e=f,e.__h=!!c,o[o.indexOf(f)]=null),d.__e(U,e,t)}}function _e(_,e,t){for(var r=0;r<t.length;r++)O(t[r],t[++r],t[++r]);d.__c&&d.__c(e,_),_.some(function(l){try{_=l.__h,l.__h=[],_.some(function(o){o.call(l)})}catch(o){d.__e(o,l.__v)}})}function ie(_,e,t,r,l,o,s,f,c){var g,h,n,y=t.props,u=e.props,i=e.type,p=0;if(i==="svg"&&(l=!0),o!=null){for(;p<o.length;p++)if((g=o[p])&&"setAttribute"in g==!!i&&(i?g.localName===i:g.nodeType===3)){_=g,o[p]=null;break}}if(_==null){if(i===null)return document.createTextNode(u);_=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,f=!1}if(i===null)y===u||f&&_.data===u||(_.data=u);else{if(o=o&&A.call(_.childNodes),h=(y=t.props||E).dangerouslySetInnerHTML,n=u.dangerouslySetInnerHTML,!f){if(o!=null)for(y={},p=0;p<_.attributes.length;p++)y[_.attributes[p].name]=_.attributes[p].value;(n||h)&&(n&&(h&&n.__html==h.__html||n.__html===_.innerHTML)||(_.innerHTML=n&&n.__html||""))}if(le(_,u,y,l,f),n)e.__k=[];else if(Y(_,$(p=e.props.children)?p:[p],e,t,r,l&&i!=="foreignObject",o,s,o?o[0]:t.__k&&N(t,0),f,c),o!=null)for(p=o.length;p--;)o[p]!=null&&Q(o[p]);f||("value"in u&&(p=u.value)!==void 0&&(p!==_.value||i==="progress"&&!p||i==="option"&&p!==y.value)&&W(_,"value",p,y.value,!1),"checked"in u&&(p=u.checked)!==void 0&&p!==_.checked&&W(_,"checked",p,y.checked,!1))}return _}function O(_,e,t){try{typeof _=="function"?_(e):_.current=e}catch(r){d.__e(r,t)}}function te(_,e,t){var r,l;if(d.unmount&&d.unmount(_),(r=_.ref)&&(r.current&&r.current!==_.__e||O(r,null,e)),(r=_.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null,_.__c=void 0}if(r=_.__k)for(l=0;l<r.length;l++)r[l]&&te(r[l],e,t||typeof _.type!="function");t||_.__e==null||Q(_.__e),_.__=_.__e=_.__d=void 0}function se(_,e,t){return this.constructor(_,t)}function ce(_,e,t){var r,l,o,s;d.__&&d.__(_,e),l=(r=typeof t=="function")?null:t&&t.__k||e.__k,o=[],s=[],B(e,_=(!r&&t||e).__k=oe(I,null,[_]),l||E,E,e.ownerSVGElement!==void 0,!r&&t?[t]:l?null:e.firstChild?A.call(e.childNodes):null,o,!r&&t?t:l?l.__e:e.firstChild,r,s),_e(o,_,s)}A=K.slice,d={__e:function(_,e,t,r){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(_)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(_,r||{}),s=l.__d),s)return l.__E=l}catch(f){_=f}throw _}},q=0,M.prototype.setState=function(_,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=w({},this.state),typeof _=="function"&&(_=_(w({},t),this.props)),_&&w(t,_),_!=null&&this.__v&&(e&&this._sb.push(e),j(this))},M.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),j(this))},M.prototype.render=I,T=[],J=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,F=function(_,e){return _.__v.__b-e.__v.__b},H.__r=0;var fe=0;function pe(_,e,t,r,l,o){var s,f,c={};for(f in e)f=="ref"?s=e[f]:c[f]=e[f];var g={type:_,props:c,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--fe,__source:l,__self:o};if(typeof _=="function"&&(s=_.defaultProps))for(f in s)c[f]===void 0&&(c[f]=s[f]);return d.vnode&&d.vnode(g),g}export{ce as D,I as k,pe as o};
//# sourceMappingURL=vendor-fd1f1c86.js.map
