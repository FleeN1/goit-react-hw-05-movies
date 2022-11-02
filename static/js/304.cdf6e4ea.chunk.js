"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{139:function(n,t,e){e.d(t,{Dx:function(){return g},Ee:function(){return w},IP:function(){return P},OB:function(){return y},QE:function(){return Z},W2:function(){return h},YM:function(){return v},ck:function(){return b},gO:function(){return k},xv:function(){return m}});var r,i,o,c,a,u,s,p,f,l,d=e(168),x=e(444),h=x.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 28px;"]))),v=x.ZP.img(i||(i=(0,d.Z)(["\nwidth: 1280px;\nheight: 414px;\nopacity: 12%;\nposition: relative;"]))),g=x.ZP.h2(o||(o=(0,d.Z)(["\ncolor: white;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nfont-size: 32px;\nfont-weight: 700;"]))),m=x.ZP.p(c||(c=(0,d.Z)(["\ncolor: white;"]))),Z=x.ZP.h3(a||(a=(0,d.Z)(["\ncolor: white;\nfont-weight: 480;\nfont-size: 24px;\ncolor: rgb(5,101,178);\ntext-align: center;"]))),w=x.ZP.img(u||(u=(0,d.Z)(["\nposition: absolute;\nleft: 0;"]))),y=x.ZP.ul(s||(s=(0,d.Z)(["\ndisplay: flex;\njustify-content: center;\ngap: 32px;\nmargin-top: 15px;\nmargin-bottom: 22px;"]))),b=x.ZP.li(p||(p=(0,d.Z)(["\ndisplay: flex;\nalign-items: center;"]))),P=x.ZP.img(f||(f=(0,d.Z)(["\ndisplay: flex;"]))),k=x.ZP.div(l||(l=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nflex-wrap: wrap;\npadding-bottom: 8px;\nmargin-top: 15px;\ngap: 15px;"])))},918:function(n,t,e){e.d(t,{Z:function(){return w}});var r,i,o,c,a,u=e(668),s=e(689),p=e(731),f=e(168),l=e(444),d=l.ZP.li(r||(r=(0,f.Z)(["\ndisplay: flex;\nwidth: 180px;\nheight: 320px;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.03);\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 7px 10px rgba(0, 0, 0, 0.15);\n  }"]))),x=l.ZP.img(i||(i=(0,f.Z)(["\n  border-radius: 5px;"]))),h=l.ZP.p(o||(o=(0,f.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  color: #ffffff;\n  padding-top: 10px;\n  text-decoration: none;"]))),v=e(184),g=function(n){var t=n.movie,e=(0,s.TH)(),r=t.id,i=t.poster_path,o=t.title;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(d,{children:(0,v.jsxs)(p.OL,{to:"/movies/".concat(r),state:{from:e},children:[(0,v.jsx)(x,{src:i?u.pd+i:u.bm,width:"100%",alt:o}),(0,v.jsx)(h,{children:o})]})})})},m=e(139),Z=(l.ZP.div(c||(c=(0,f.Z)(["\n  display: flex;\n\n"]))),l.ZP.ul(a||(a=(0,f.Z)(["\ndisplay: flex;\nflex-direction: row;\nflex-wrap: wrap;\njustify-content: space-around;\ngap: 15px;\n"])))),w=function(n){var t=n.movies;return(0,v.jsx)(m.W2,{children:(0,v.jsx)(Z,{children:t.map((function(n){return(0,v.jsx)(g,{movie:n},n.id)}))})})}},668:function(n,t,e){e.d(t,{_c:function(){return o},bm:function(){return i},nF:function(){return c},pd:function(){return r}});var r="https://www.themoviedb.org/t/p/w500",i="https://en-images.kinorium.com/movie/1080/1662246.jpg?1556722314",o="https://www.themoviedb.org/t/p/w500",c="https://image.tmdb.org/t/p/original"},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,i,o=e(861),c=e(885),a=e(757),u=e.n(a),s=e(791),p=e(390),f=e(918),l=e(168),d=e(444),x=d.ZP.div(r||(r=(0,l.Z)(["\npadding-right: 15px;\npadding-left: 15px;\npadding-bottom: 45px;"]))),h=d.ZP.h2(i||(i=(0,l.Z)(["\nmargin-bottom: 30px;\nfont-size: 40px;\ncolor: #ffffff;\ntext-align: center;\nmargin-top: 32px;\n"]))),v=e(184),g=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){function n(){return(n=(0,o.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.cu)();case 2:t=n.sent,r(t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]),(0,v.jsx)("main",{children:(0,v.jsxs)(x,{children:[(0,v.jsx)(h,{children:"Trending Today"}),e.length>0&&(0,v.jsx)(f.Z,{movies:e})]})})}},390:function(n,t,e){e.d(t,{Bt:function(){return l},Y5:function(){return p},cu:function(){return u},in:function(){return s},uV:function(){return f}});var r=e(861),i=e(757),o=e.n(i),c=e(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var a="941cb65a7dbaeeae793e2e0a05475118",u=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("trending/movie/week?api_key=".concat(a));case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=new URLSearchParams({api_key:a,query:t}),n.prev=1,n.next=4,c.ZP.get("search/movie?".concat(e));case 4:return r=n.sent,n.abrupt("return",r.data.results);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(t,"?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(t,"/credits?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.ZP.get("movie/".concat(t,"/reviews?api_key=").concat(a));case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=304.cdf6e4ea.chunk.js.map