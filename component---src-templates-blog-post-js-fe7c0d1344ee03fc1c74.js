(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});a(34);var i=a(7),n=a.n(i),r=a(157),s=a(0),o=a.n(s),l=a(179),c=a(160),d=a(165),u=a(169),f=a(155),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,i=a.previous,n=a.next;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(u.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),o.a.createElement(c.a,{small:!0},o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(f.b)(-.2),{display:"block",marginBottom:Object(f.a)(1),marginTop:Object(f.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(f.a)(1)}}),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,i&&o.a.createElement(r.a,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(r.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →")))))},t}(o.a.Component);t.default=p;var m="3654438753"},155:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return l});var i=a(173),n=a.n(i),r=a(161),s=new n.a({headerFontFamily:["Rubik","sans-serif"],bodyFontFamily:["Lora","serif"],baseFontSize:18,bodyColor:r.a.text,baseLineHeight:1.75});var o=s.rhythm,l=s.scale},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a}),a.d(t,"c",function(){return o.withPrefix});a(158);var c=n.a.createContext({}),d=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){var i;e.exports=(i=a(164))&&i.default||i},159:function(e,t,a){"use strict";t.a={background:"#F2F4F2",text:"#2C3A47",primary:"#6D214F",accent:"#3B3B98",magenta:"#6D214F",gray:"#CAD3C8",white:"#FFFFFF"}},160:function(e,t,a){"use strict";a(168);var i=a(156),n=a(155),r=i.b.div.withConfig({displayName:"container__Container",componentId:"sc-6g0gtz-0"})(["padding:"," ",";max-width:",";margin:auto;"],Object(n.a)(1),Object(n.a)(.75),function(e){return e.small?Object(n.a)(28):Object(n.a)(35)});t.a=r},161:function(e,t,a){"use strict";a(74),a(55),a(35),a(174);var i=a(175),n=a.n(i),r=a(159),s=n.a.apply(void 0,Object.keys(r.a));t.a=s},162:function(e,t,a){var i=a(11),n=a(18),r=a(19),s=/"/g,o=function(e,t,a,i){var n=String(r(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},163:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return n});var i="600px",n="900px"},164:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),n=a.n(i),r=a(4),s=a.n(r),o=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},165:function(e,t,a){"use strict";var i=a(7),n=a.n(i),r=a(0),s=a.n(r),o=a(155),l=a(157),c=a(156),d=a(163),u=c.b.div.withConfig({displayName:"navigation__NavigationContainer",componentId:"sc-1jhgin1-0"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;"]),f=c.b.h1.withConfig({displayName:"navigation__SiteTitle",componentId:"sc-1jhgin1-1"})(["font-size:",";text-transform:lowercase;margin:0;"],Object(o.a)(1.25)),p=c.b.span.withConfig({displayName:"navigation__NavigationLink",componentId:"sc-1jhgin1-2"})(["text-transform:lowercase;padding-right:1rem;"]),m=c.b.div.withConfig({displayName:"navigation__NavigationLinks",componentId:"sc-1jhgin1-3"})(["display:flex;flex-direction:column;@media (min-width:","){flex-direction:row;align-items:center;}"],d.a),h=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.title;return s.a.createElement(u,null,s.a.createElement(f,null,s.a.createElement(l.a,{to:"/"},e)),s.a.createElement(m,null,s.a.createElement(p,null,s.a.createElement("a",{href:"#about"},"About")),s.a.createElement(p,null,s.a.createElement("a",{href:"#speaking"},"Speaking")),s.a.createElement(p,null,s.a.createElement("a",{href:"#blog"},"Writing"))))},t}(s.a.Component),g=a(159),y=c.b.div.withConfig({displayName:"layout__Container",componentId:"sc-1xvv2zr-0"})(["margin-left:auto;margin-right:auto;padding:"," ",";"],Object(o.a)(1),Object(o.a)(.75)),b=c.b.div.withConfig({displayName:"layout__LayoutContainer",componentId:"sc-1xvv2zr-1"})(["a{text-decoration:none;color:",";}a:active{color:",";}section:nth-child(even){background-color:",";}"],function(e){return e.theme.primary},function(e){return e.theme.secondary},function(e){return e.theme.background}),w=c.b.footer.withConfig({displayName:"layout__Footer",componentId:"sc-1xvv2zr-2"})(["text-align:center;padding:",";small{display:block;}"],Object(o.a)(.5)),v=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.children;return s.a.createElement(c.a,{theme:g.a},s.a.createElement(b,null,s.a.createElement(y,null,s.a.createElement(h,{title:t})),s.a.createElement("main",null,a),s.a.createElement(w,null,s.a.createElement("small",null,"Made with ❤️ by Becca Bailey"),s.a.createElement("small",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))))},t}(s.a.Component);t.a=v},168:function(e,t,a){"use strict";a(162)("small",function(e){return function(){return e(this,"small","","")}})},169:function(e,t,a){"use strict";var i=a(170),n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(178),c=a.n(l);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title,l=i.data.site,d=t||l.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Becca Bailey",description:"Becca likes to build things",author:"Becca Bailey"}}}}},171:function(e,t,a){"use strict";a(162)("fixed",function(e){return function(){return e(this,"tt","","")}})},172:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var n,r=i(a(7)),s=i(a(36)),o=i(a(75)),l=i(a(76)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f=Object.create({}),p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=new WeakMap;var h=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(m.has(e.target)){var t=m.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),m.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),m.set(e,t)),function(){a.unobserve(e),m.delete(e)}},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",d=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+i+"<img "+o+l+a+n+t+s+r+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+d+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.sizes,i=e.srcSet,n=e.src,r=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:i,src:n},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,n=!1,r=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,n=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,n=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:n,fadeIn:r,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,n=e.style,r=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,w=e.Tag,v=e.itemProp,E="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),C={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var L=m;return c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),E&&c.default.createElement(w,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),L.base64&&c.default.createElement(y,(0,l.default)({src:L.base64},C)),L.tracedSVG&&c.default.createElement(y,(0,l.default)({src:L.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement(y,{alt:a,title:t,sizes:L.sizes,src:L.src,crossOrigin:this.props.crossOrigin,srcSet:L.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},L))}}))}if(h){var j=h,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},r);return"inherit"===r.display&&delete A.display,c.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},E&&c.default.createElement(w,{title:t,style:{backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),j.base64&&c.default.createElement(y,(0,l.default)({src:j.base64},C)),j.tracedSVG&&c.default.createElement(y,(0,l.default)({src:j.tracedSVG},C)),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement(y,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=b;t.default=E},179:function(e,t,a){"use strict";a(171);var i=a(180),n=a(0),r=a.n(n),s=a(157),o=a(172),l=a.n(o),c=a(160),d=a(155);var u="163768820";t.a=function(){return r.a.createElement(s.b,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,i=t.social;return r.a.createElement(c.a,null,r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:60,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.a.createElement("p",null,"I'm a software engineer who loves to design things. After previous career as an elementary fine arts teacher, I love helping artists and career changers understand software."," ",r.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"You should follow me on Twitter"))))},data:i})}},180:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEHUlEQVQ4y3VUa1NTVxTNP/JTO51pbUWsiljJ0FrKoAJFGKAFDUWZUQF5JjzECEUqhVBEJWKB8ChNSEJ4hJQojwS5QGgKxYEUCiGQByEJurrv1YSA9MOZZM45d52191p78VzOTfiX02EL/HfYN7Cz44LP58GW7V/Y1i1wbK1ze8F3g79hF+8wQCeBeTzbWF6YRU9TJepyklCV8Q3qshMwpv4V264t7q5/HQroP2CZeb1uGHVKlH/Hx+1LxyFMCoco8TSECSdxJ+UsGL0aXt8Od/cgy/cYbm/bYV1dwt2rUbib/iXKUiNxjf8hcmJCUJ56DqLLp9BU8gOxtB/Kch9Dx5YVu2980LQ3Iu9iCIwaGZ6IBBCEH0EmgV6P/AjFCWG4Q8znjCPwUCUsy/8FZH9ZhvUF6Wj9MQfWVzPQd0pQePEYMiM+QHrYEWR99TFESWHorC/jAJ3vAP3f7wN0u51YXV5ATVYspvpkmO5vx8xgJ5QNxbh//QKqBVHUwwgI40+j9mYCKf/PPoH2A7LK0otzk3rISjJg1vZCIZVgoEWCWVUnxn+TQvX0AXQ9Usz2dqA5Nw3M+BBnK784+wDZTd+uBxNaOaQl17BkGkV7WzO08nZMdj/D3ODv6JPL0K/sgIXR4ydBDHSKFrx+s8v1/j2GnF3ICtOj/ajNToaJbLMwqsZLTSf+mhiAaVhOewq8MmoxqZShgoTRtEk4Eo6gPvICCtutdOjFc7UMkrwUzGi6MNHdDIaA5l6oMaOTY1LVDkbRCqOyFUKyj0pa886P1oAOewyJNkt/oKOJvMfHtLYbSy+H8bdxCOZxDcxjfVic1GJpSodRxVPcvnAMDfmpsG+uwRUkDC/Ygyyg6tnPyI35FNq2OqyYDVx54w+qYWysAzPYA4vpBdSPxGT0z1AQFwptVxNN1h7LoJLfqsz6Kyf6E8hq8rHEjMCsV8JMKpuH5BzbRcMAN9vZ0UchTDyD6qxL2LSuBCaHd3B0Wu7dwi26XHszDiZ9L+ZJkEWGLX2QSh4CQ70somnJoxm/J/iaZjwM2u7HgV4GGLJ9sFNM1ecmIj82FIXxJ6D4RYQ1yzwWjMOYNwzBtrYM5rmGAyv+9iRKk89CTPNelRGFBZOREsq1B+h0sAxteFyaiYLY41w54jQ+mJFebLtdsG2swvfai5mxQToPoQc/RxGBsiwrUr/gKtuhyAuU7J+ULkkZCqnZFWmR3GosSiMl17l2uN0OWBZNFA4RnCDCy2EQXzmP6sxolCeHY+oP5UEfetDzUIxCYlgpOI+ylHOopGBdX1nkms7eZdO75kY8sQxFCeUkG2kV3/NRTjkpq7oRVDKbNK5NPKK4Kk06w736RHQFhoGutwpSBWwSbaxZcJ+ULYw7gWoKjIaCVDwUXkVLZTb+NGjxH0ndGbf7wujSAAAAAElFTkSuQmCC",width:60,height:60,src:"/static/01f5ff664cf1d1e0f9653b821ee14430/3370f/becca.png",srcSet:"/static/01f5ff664cf1d1e0f9653b821ee14430/3370f/becca.png 1x,\n/static/01f5ff664cf1d1e0f9653b821ee14430/58db0/becca.png 1.5x,\n/static/01f5ff664cf1d1e0f9653b821ee14430/afaf9/becca.png 2x,\n/static/01f5ff664cf1d1e0f9653b821ee14430/b1c0b/becca.png 3x"}}},site:{siteMetadata:{author:"Becca Bailey",social:{twitter:"beccaliz"}}}}}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-fe7c0d1344ee03fc1c74.js.map