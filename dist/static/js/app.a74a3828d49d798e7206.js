webpackJsonp([7],{"25TI":function(t,n){},"4If6":function(t,n){t.exports={svg:"_1iWvmae6EzRXa50yal1PYN_0",progressCircularRotate:"_1Zv1Syrwc0slxbdxlEDfe_0",circle:"_2hKuQ_8kH2taOKkdlUrppQ_0",progressCircularDash:"_2Kpt6AzAmaLZ-bDUopykfl_0"}},"7T+t":function(t,n,e){"use strict";e.d(n,"i",function(){return i}),e.d(n,"h",function(){return o}),e.d(n,"g",function(){return s}),e.d(n,"j",function(){return u}),e.d(n,"f",function(){return c}),e.d(n,"e",function(){return a}),e.d(n,"b",function(){return l}),e.d(n,"d",function(){return d}),e.d(n,"c",function(){return f}),e.d(n,"a",function(){return h});var r="https://api.xiaohuochai.cc",i=r+"/auth/signup",o=r+"/auth/signin_by_username",s=r+"/auth/signin_by_phonenumber",u=r+"/auth/verificate",c=r+"/users",a=r+"/posts",l=r+"/categories",d=r+"/likes",f=r+"/comments",h="https://admin.xiaohuochai.cc"},Ef1k:function(t,n,e){"use strict";var r={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{class:this.$style.svg,attrs:{height:"50",width:"50",viewBox:"0 0 50 50"}},[n("circle",{class:this.$style.circle,attrs:{cx:"25",cy:"25",r:"20",fill:"none","stroke-width":"4"}})])},staticRenderFns:[]};n.a=r},H6RH:function(t,n,e){"use strict";e.d(n,"c",function(){return f}),e.d(n,"a",function(){return h}),e.d(n,"b",function(){return m});var r,i,o=e("IHPB"),s=e.n(o),u=e("a3Yh"),c=e.n(u),a=e("rVsN"),l=e.n(a),d=e("7T+t"),f="LOAD_LIKES_ASYNC",h="ADD_LIKE_ASYNC",m="DELETE_LIKE_ASYNC",_={state:{docs:[]},getters:{likeCount:function(t){return t.docs.length},getLikesCountByPostId:function(t){return function(n){return t.docs.filter(function(t){return t.post&&t.post._id===n}).length}},getLikesByUserId:function(t){return function(n){return t.docs.filter(function(t){return t.user&&t.user._id===n})}},getLike:function(t){return function(n){var e=n.postId,r=n.userId;return t.docs.find(function(t){return t.user&&t.user._id===r&&t.post&&t.post._id===e})}}},actions:(r={},c()(r,f,function(t){var n=this,e=t.commit;return new l.a(function(t,r){n._vm.$axios({commit:e,url:d.d,doHideAlert:!0,success:function(n){e("LOAD_LIKES",n.docs),t(n.docs)},fail:function(t){r(t)}})})}),c()(r,h,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,method:"post",data:n,headers:{Authorization:sessionStorage.getItem("token")},url:""+d.d,doHideAlert:!0,success:function(n){r("ADD_LIKE",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),c()(r,m,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,method:"delete",headers:{Authorization:sessionStorage.getItem("token")},url:d.d+"/"+n.id,doHideAlert:!0,success:function(n){r("DELETE_LIKE",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),r),mutations:(i={},c()(i,"LOAD_LIKES",function(t,n){t.docs=n}),c()(i,"ADD_LIKE",function(t,n){t.docs=[n].concat(s()(t.docs))}),c()(i,"DELETE_LIKE",function(t,n){t.docs=t.docs.filter(function(t){return t._id!==n._id})}),i)};n.d=_},"I/g9":function(t,n){t.exports={wrap:"_3vxuh-pj7I6iLhgw_GL37c_0",header:"_2E6UK9153tf8Eg-AG97Wbv_0",main:"_1HcH3dfiW_fQAIQMjYw828_0",router:"_3tP_PZ186riIUWk5mhrm5T_0"}},Iqxp:function(t,n){t.exports={wrap:"_69PY8VoYcsSzY30ktarVf_0"}},J1CH:function(t,n){t.exports={screen:"PUTNzrF1e_I7Shooch-td_0",mask:"_1l93IdUfOp7i-pzKVDmgke_0",opacity:"_3Yyg4OWuRbRORRe53WmLHd_0",list:"_HcfAgLYmbs7ql63k_0g9_0",move:"p_vDKHdm1YxIlQZ4rG_08_0",item:"_3AjtLQID12lYSUJ6rQ42Tm_0"}},LjnT:function(t,n){},Me0b:function(t,n){t.exports={avatar:"_2SmYPAaSS_OuENGj39pPz_0"}},MlLD:function(t,n,e){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.wrap})},staticRenderFns:[]};var i=e("vSla")(null,r,!1,function(t){this.$style=e("Iqxp")},null,null);n.a=i.exports},VbO5:function(t,n,e){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.avatar},[this._t("default")],2)},staticRenderFns:[]};var i=e("vSla")(null,r,!1,function(t){this.$style=e("Me0b")},null,null);n.a=i.exports},WoAM:function(t,n){t.exports={wrap:"_2d8lQMpwwHMFKGyDg3nnpR_0"}},cJl6:function(t,n){t.exports={header:"_3253mhg6QatxGs8H_3PbCn_0",logoBox:"_3jApETtWbyCYsiGq8LX93I_0",title:"kdxIiydyNtmrkaKtKq9-c_0"}},dWGe:function(t,n){t.exports={title:"_1BPYEAuw5jxaXB2hhLCNgy_0"}},gnxq:function(t,n,e){"use strict";e.d(n,"h",function(){return f}),e.d(n,"f",function(){return h}),e.d(n,"e",function(){return m}),e.d(n,"a",function(){return _}),e.d(n,"b",function(){return v}),e.d(n,"c",function(){return g}),e.d(n,"d",function(){return p}),e.d(n,"g",function(){return E});var r,i,o=e("3cXf"),s=e.n(o),u=e("a3Yh"),c=e.n(u),a=e("rVsN"),l=e.n(a),d=e("7T+t"),f="SIGNUP_ASYNC",h="SIGNIN_BYUSERNAME_ASYNC",m="SIGNIN_BYPHONENUMBER_ASYNC",_="AUTH_VERIFICATE_ASYNC",v="LOAD_USERS_ASYNC",g="LOAD_USER_ASYNC",p="SIGNIN",E="SIGNOUT",S={state:{token:null,user:null,users:[]},getters:{userCount:function(t){return t.users.length}},actions:(r={},c()(r,g,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,url:d.f+"/"+n.id,doHideAlert:!0,success:function(n){t(),r("LOAD_USER",n.doc)},fail:function(t){i(t)}})})}),c()(r,v,function(t){var n=this,e=t.commit;return new l.a(function(t,r){n._vm.$axios({commit:e,url:d.f,doHideAlert:!0,success:function(n){t(),e("LOAD_USERS",n.docs)},fail:function(t){r(t)}})})}),c()(r,f,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,url:d.i,method:"post",data:n,success:function(){t()},fail:function(t){i(t)}})})}),c()(r,h,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,url:d.h,method:"post",data:n,success:function(n){r(p,n),t()},fail:function(t){i(t)}})})}),c()(r,m,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,url:d.g,method:"post",data:n,success:function(){t()},fail:function(t){i(t)}})})}),c()(r,_,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,url:d.j,method:"post",data:n,success:function(n){r(p,n),t()},fail:function(t){i(t)}})})}),r),mutations:(i={},c()(i,p,function(t,n){var e=n.token,r=n.user;t.user=r,t.token=e,sessionStorage.setItem("token",e),sessionStorage.setItem("user",s()(r))}),c()(i,E,function(t){t.user=null,t.token=null,sessionStorage.removeItem("token"),sessionStorage.removeItem("user")}),c()(i,"LOAD_USERS",function(t,n){t.users=n}),c()(i,"LOAD_USER",function(t,n){t.user=n}),i)};n.i=S},iLYs:function(t,n,e){"use strict";var r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.$style.wrap,style:{height:this.wrapHeight+"px"}},[this._t("default")],2)},staticRenderFns:[]};var i=e("vSla")({computed:{wrapHeight:function(){return this.$store.state.size.height}}},r,!1,function(t){this.$style=e("WoAM")},null,null);n.a=i.exports},jcR6:function(t,n,e){"use strict";e.d(n,"c",function(){return f}),e.d(n,"a",function(){return h}),e.d(n,"d",function(){return m}),e.d(n,"b",function(){return _});var r,i,o=e("IHPB"),s=e.n(o),u=e("a3Yh"),c=e.n(u),a=e("rVsN"),l=e.n(a),d=e("7T+t"),f="LOAD_COMMENTS_ASYNC",h="ADD_COMMENT_ASYNC",m="UPDATE_COMMENT_ASYNC",_="DELETE_COMMENT_ASYNC",v={state:{docs:[]},getters:{commentCount:function(t){return t.docs.length},getCommentById:function(t){return function(n){return t.docs.find(function(t){return t._id===n})}},getCommentsByPostId:function(t){return function(n){return t.docs.filter(function(t){return t.post&&t.post._id===n})}},getCommentsByUserId:function(t){return function(n){return t.docs.filter(function(t){return t.user&&t.user._id===n})}},getCommentsCountByPostId:function(t,n){return function(t){return n.getCommentsByPostId(t).length}}},actions:(r={},c()(r,f,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,data:n,url:d.c,doHideAlert:!0,success:function(n){r("LOAD_COMMENTS",n.docs),t(n.docs)},fail:function(t){i(t)}})})}),c()(r,h,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,method:"post",headers:{Authorization:sessionStorage.getItem("token")},data:n,url:d.c,success:function(n){r("ADD_COMMENT",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),c()(r,m,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,method:"put",headers:{Authorization:sessionStorage.getItem("token")},data:n.data,url:d.c+"/"+n.id,success:function(n){r("UPDATE_COMMENT",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),c()(r,_,function(t,n){var e=this,r=t.commit;return new l.a(function(t,i){e._vm.$axios({commit:r,method:"delete",headers:{Authorization:sessionStorage.getItem("token")},url:d.c+"/"+n.id,success:function(n){r("DELETE_COMMENT",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),r),mutations:(i={},c()(i,"LOAD_COMMENTS",function(t,n){t.docs=n}),c()(i,"ADD_COMMENT",function(t,n){t.docs=[].concat(s()(t.docs),[n])}),c()(i,"UPDATE_COMMENT",function(t,n){t.docs=t.docs.map(function(t){return t._id===n._id?n:t})}),c()(i,"DELETE_COMMENT",function(t,n){t.docs=t.docs.filter(function(t){return t._id!==n._id})}),i)};n.e=v},oFuF:function(t,n,e){"use strict";e.d(n,"c",function(){return r}),e.d(n,"a",function(){return s}),e.d(n,"b",function(){return u}),e.d(n,"d",function(){return c});var r=function(t){if(null==t)return"";var n=String(t);if(""===n)return"";for(;null!==n.match(/00$/);)n=n.slice(0,-2);return n},i=function(t){if(null!=t&&""!==t){for(;null===t.match(/^\d{10}$/);)t+="00";return Number(t)}},o=function(t){var n=r(t);if(!(n.length<=2))return i(n.slice(0,-2))},s=function(t){var n=r(t);if(!(n.length<2))return i(n.slice(0,2))},u=function(t){if(null==t)return[];for(var n=[t];o(t);){var e=o(t);n.unshift(e),t=e}return n},c=function(t){return!![].map&&0===document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")?t+"?imageView2/1/format/webp":t}},qk4q:function(t,n,e){"use strict";e.d(n,"b",function(){return g}),e.d(n,"c",function(){return p}),e.d(n,"a",function(){return E});var r,i,o=e("a3Yh"),s=e.n(o),u=e("rVsN"),c=e.n(u),a=e("hRKE"),l=e.n(a),d=e("ZLEe"),f=e.n(d),h=e("4YfN"),m=e.n(h),_=e("7T+t"),v=e("oFuF"),g="LOAD_POSTS_ASYNC",p="LOAD_POST_ASYNC",E="CLEAR_POST",S={state:{docs:[],doc:null},getters:{postCount:function(t){return t.docs.length},getPosts:function(t){return t.docs},getPost:function(t){return t.doc},getPostId:function(t){if(t.doc)return t.doc._id},getPostsFilterByCategoryNumber:function(t){return function(n){if(null===n)return t.docs;var e=new RegExp("^"+Object(v.c)(n));return t.docs.filter(function(t){return t.category&&String(t.category.number).match(e)})}},getPostTitleByPostId:function(t){return function(n){return t.docs.find(function(t){return t._id===n}).title}},getPostWithTitleDatas:function(t,n){var e=t.doc;return e?m()({},e,{titleDatas:e.category&&0!==f()(n.getCategoriesByNumber).length?Object(v.b)(e.category.number).map(function(t){return n.getCategoriesByNumber[t].name}):[],text:"object"===("undefined"==typeof window?"undefined":l()(window))?decodeURIComponent(escape(window.atob(e.content))):""}):null},getPostsWithTitleData:function(t,n){return 0===n.getPosts.length?n.getPosts:0===f()(n.getCategoriesByNumber).length?n.getPosts:n.getPosts.map(function(t){return m()({},t,{titleData:t.category?n.getCategoriesByNumber[Object(v.a)(t.category.number)].name:""})})},getRecommendPosts:function(t,n){return n.getPostsWithTitleData.filter(function(t){return t.recommend}).sort(function(t,n){return t.index-n.index})}},actions:(r={},s()(r,p,function(t,n){var e=this,r=t.commit;return new c.a(function(t,i){e._vm.$axios({commit:r,url:_.e+"/"+n.id,doHideAlert:!0,success:function(n){r("LOAD_POST",n.doc),t(n.doc)},fail:function(t){i(t)}})})}),s()(r,g,function(t){var n=this,e=t.commit;return new c.a(function(t,r){n._vm.$axios({commit:e,url:""+_.e,doHideAlert:!0,success:function(n){e("LOAD_POSTS",n.docs),t(n.docs)},fail:function(t){r(t)}})})}),r),mutations:(i={},s()(i,"LOAD_POSTS",function(t,n){t.docs=n}),s()(i,"LOAD_POST",function(t,n){t.doc=n}),s()(i,E,function(t){t.doc=null}),i)};n.d=S},rrNU:function(t,n){t.exports={title:"_2uhRexqiN7O6cVB0FgqCOU_0",exit:"xlvJONYEidzPyj_1Bb5CV_0"}},rzHQ:function(t,n,e){"use strict";var r=e("25TI"),i=e.n(r),o=e("Ef1k");var s=function(t){this.$style=e("4If6")},u=e("vSla")(i.a,o.a,!1,s,null,null);n.default=u.exports},tPF2:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("rVsN"),i=e.n(r),o=e("MVMM"),s=e("4YfN"),u=e.n(s),c={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{height:"100",viewBox:"0 0 100 100",width:"100",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M93.302 75.008c-13.808 23.915-44.387 32.108-68.302 18.302-23.914-13.808-32.108-44.387-18.301-68.302 13.807-23.914 44.387-32.108 68.301-18.301 23.915 13.807 32.108 44.387 18.302 68.301z",fill:"#4681A0"}}),this._v(" "),n("path",{attrs:{d:"M52.982 99.915v-37.907l-6.008.075.007 37.832c2.006.12 4.009.121 6.001 0zM49.982 15.008c4.123 0 17 21.432 17 38s-7.611 22-17 22-17-5.432-17-22 13.532-38 17-38z",fill:"#EFC75E"}}),this._v(" "),n("path",{attrs:{d:"M49.982 35.008c2.425 0 10 15.011 10 24.4s-4.478 15.6-10 15.6-10-6.211-10-15.6 7.959-24.4 10-24.4z",fill:"#EA9A57"}}),this._v(" "),n("path",{attrs:{d:"M46.982 72.008h6v12s-1.512-2-3.018-2c-1.494 0-2.982 2-2.982 2v-12z",fill:"#41545F"}}),this._v(" "),n("path",{attrs:{d:"M50.094 56.016c3.315-.058 5.977 1.434 5.888 6.675s-2.896 12.248-6.21 12.305c-3.315.058-5.885-6.856-5.795-12.097.088-5.243 2.802-6.827 6.117-6.883z",fill:"#2B414D"}}),this._v(" "),n("path",{attrs:{d:"M50.771 72.995c-3.315.058-5.885-6.856-5.795-12.097.019-1.133.167-2.086.411-2.898-.848 1.071-1.373 2.645-1.411 4.898-.09 5.24 2.479 12.154 5.795 12.097 1.81-.031 3.464-2.138 4.61-4.894-1.025 1.711-2.274 2.872-3.61 2.894z",fill:"#273A45"}})])},staticRenderFns:[]},a=e("vSla")(null,c,!1,null,null,null).exports,l=e("VbO5"),d=e("MlLD"),f=e("iLYs"),h={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}),this._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},staticRenderFns:[]},m=e("vSla")(null,h,!1,null,null,null).exports,_={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}}),this._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},staticRenderFns:[]},v=e("vSla")(null,_,!1,null,null,null).exports,g={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),this._v(" "),n("path",{attrs:{d:"M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}})])},staticRenderFns:[]},p=e("vSla")(null,g,!1,null,null,null).exports,E={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}),this._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},staticRenderFns:[]},S=e("vSla")(null,E,!1,null,null,null).exports,w={render:function(){var t=this.$createElement,n=this._self._c||t;return n("svg",{attrs:{fill:"#000000",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"}}),this._v(" "),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])},staticRenderFns:[]},A=e("vSla")(null,w,!1,null,null,null).exports,x=e("gnxq"),T={components:{BaseFullScreen:f.a,BaseMask:d.a,SVGHome:m,SVGUser:v,SVGExit:p,SVGFilter:S,SVGRefresh:A},props:{onExit:{type:Function,required:!0}},computed:{userId:function(){return this.$store.state.auth.user._id}},methods:{onLogoutClick:function(){this.$store.commit(x.g),this.$router.push("/signin_by_username")}}},L={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("BaseFullScreen",{class:t.$style.screen,nativeOn:{click:function(n){return t.onExit(n)}}},[e("BaseMask",{class:t.$style.mask}),t._v(" "),e("ul",{class:t.$style.list},[e("li",{class:t.$style.item,on:{click:function(n){t.$router.push("/")}}},[e("SVGHome"),t._v("主页")],1),t._v(" "),e("li",{class:t.$style.item,on:{click:function(n){t.$router.go(0)}}},[e("SVGRefresh"),t._v("刷新")],1),t._v(" "),e("li",{class:t.$style.item,on:{click:function(n){t.$router.push("/posts")}}},[e("SVGFilter"),t._v("筛选")],1),t._v(" "),e("li",{class:t.$style.item,on:{click:function(n){t.$router.push("/users/"+t.userId)}}},[e("SVGUser"),t._v("书桌")],1),t._v(" "),e("li",{class:t.$style.item,on:{click:t.onLogoutClick}},[e("SVGExit"),t._v("退出")],1)])],1)},staticRenderFns:[]};var y=e("vSla")(T,L,!1,function(t){this.$style=e("J1CH")},null,null).exports,b=e("9rMa"),I={components:{BaseAvatar:l.a,BaseMask:d.a,SVGLogo:a,UserMenuList:y},data:function(){return{beta:"",doShowMenuList:!1}},computed:u()({},Object(b.b)({token:function(t){return t.auth.token},user:function(t){return t.auth.user}})),mounted:function(){this.autoLogin(),window.addEventListener("deviceorientation",this.changeBeta)},destroyed:function(){window.removeEventListener("deviceorientation",this.changeBeta)},methods:{autoLogin:function(){var t=this.$store.commit;sessionStorage.token&&t(x.d,{user:JSON.parse(sessionStorage.user),token:sessionStorage.token})},onUserClick:function(){this.user?this.doShowMenuList=!0:this.$router.push("/signin_by_username")},changeBeta:function(t){var n=this;requestAnimationFrame(function(){n.beta!==Math.round(t.beta)&&(n.beta=Math.round(t.beta))})}}},$={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{class:t.$style.header},[e("div",{class:t.$style.logoBox,on:{click:function(n){t.$router.push("/")}}},[e("SVGLogo",{attrs:{height:"32",width:"32"}}),t._v(" "),e("h1",{class:t.$style.title},[t._v("前端小站")])],1),t._v(" "),e("BaseAvatar",{style:{transform:"rotate("+t.beta+"deg)"},nativeOn:{click:function(n){return t.onUserClick(n)}}},[t._v("\n    "+t._s(t.user?t.user.username:"我")+"\n  ")]),t._v(" "),t.doShowMenuList?e("UserMenuList",{attrs:{onExit:function(){t.doShowMenuList=!1}}}):t._e()],1)},staticRenderFns:[]};var O=e("vSla")(I,$,!1,function(t){this.$style=e("cJl6")},null,null).exports,C=e("zFxR"),N={components:{AlertInner:C.a},props:{text:{type:String,required:!0},onClick:{type:Function,required:!0}}},D={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("AlertInner",[e("h3",{class:t.$style.title},[t._v(t._s(t.text))]),t._v(" "),e("span",{class:t.$style.exit,on:{click:t.onClick}},[t._v("×")])])},staticRenderFns:[]};var M=e("vSla")(N,D,!1,function(t){this.$style=e("rrNU")},null,null).exports,H={components:{BaseLoading:e("rzHQ").default,AlertInner:C.a}},R={render:function(){var t=this.$createElement,n=this._self._c||t;return n("AlertInner",[n("BaseLoading"),this._v(" "),n("h2",{class:this.$style.title},[this._v("请稍候")])],1)},staticRenderFns:[]};var k,P=e("vSla")(H,R,!1,function(t){this.$style=e("dWGe")},null,null).exports,B=e("a3Yh"),z=e.n(B),F={state:{doShowLoading:!1,alertText:""},mutations:(k={},z()(k,"SHOW_LOADING",function(t){t.doShowLoading=!0}),z()(k,"HIDE_LOADING",function(t){t.doShowLoading=!1}),z()(k,"SHOW_ALERTTEXT",function(t,n){t.alertText=n}),z()(k,"HIDE_ALERTTEXT",function(t){t.alertText=""}),k)},Y={state:{height:""},mutations:z()({},"SET_HEIGHT",function(t,n){t.height=n.height})},G=e("7T+t"),U={components:{TheHeader:O,AlertWithText:M,AlertWithLoading:P},data:function(){return{transitionName:"left",HIDE_ALERTTEXT:"HIDE_ALERTTEXT",lastX:null,lastY:null,lastZ:null}},computed:{alertText:function(){return this.$store.state.alert.alertText},doShowLoading:function(){return this.$store.state.alert.doShowLoading},wrapHeight:function(){return this.$store.state.size.height}},watch:{$route:function(t,n){this.transitionName=t.meta.index<n.meta.index?"right":"left"}},mounted:function(){window.addEventListener("devicemotion",this.testShake),this.setWrapHeight()},destroyed:function(){window.removeEventListener("devicemotion",this.testShake)},methods:{testShake:function(t){var n=this;requestAnimationFrame(function(){var e=t.accelerationIncludingGravity,r=e.x,i=e.y,o=e.z,s=n.lastX,u=n.lastY,c=n.lastZ;Math.abs(s-r)+Math.abs(u-i)+Math.abs(c-o)>80&&(window.location.href=G.a),n.lastX=r,n.lastY=i,n.lastZ=o})},setWrapHeight:function(){this.$store.commit("SET_HEIGHT",{height:document.documentElement.clientHeight})}}},V={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$style.wrap,style:{height:t.wrapHeight+"px"},attrs:{id:"root"}},[e("AlertWithLoading",{directives:[{name:"show",rawName:"v-show",value:t.doShowLoading,expression:"doShowLoading"}]}),t._v(" "),e("AlertWithText",{directives:[{name:"show",rawName:"v-show",value:""!==t.alertText,expression:"alertText !== ''"}],attrs:{text:t.alertText,onClick:function(){t.$store.commit(t.HIDE_ALERTTEXT)}}}),t._v(" "),e("TheHeader",{class:t.$style.header}),t._v(" "),e("main",{class:t.$style.main},[e("transition",{attrs:{name:t.transitionName}},[e("router-view",{class:t.$style.router})],1)],1)],1)},staticRenderFns:[]};var W=e("vSla")(U,V,!1,function(t){this.$style=e("I/g9"),e("LjnT")},null,null).exports,j=e("zO6J");o.a.use(j.a);var q=e("qk4q"),K=e("oFuF"),X={state:{docs:[]},getters:{categoryCount:function(t){return t.docs.length},getCategoriesByNumber:function(t){return t.docs.reduce(function(t,n){return t[n.number]=n,t},{})},getCategoryByNumber:function(t){return function(n){return t.docs.find(function(t){return t.number===n})}},getPosterityCategories:function(t,n){return function(e){var r=new RegExp("^"+Object(K.c)(e));return t.docs.filter(function(t){return t.titleDatas=Object(K.b)(t.number).map(function(t){return n.getCategoriesByNumber[t].name}),String(t.number).match(r)&&t.posts.length})}},getChildrenCategoryies:function(t){return function(n){var e=String(Object(K.c)(n)),r=e.length,i=new RegExp("^"+e+"(0[1-9]|[1-9][0-9])(0){"+(8-r)+"}");return t.docs.filter(function(t){return String(t.number).match(i)})}},getCategoryRootDatas:function(t){return t.docs.filter(function(t){return 0===Number(String(t.number).slice(2))})},getRecommendedCategories:function(t){return t.docs.filter(function(t){return t.recommend}).sort(function(t,n){return t.index-n.index})}},actions:z()({},"LOAD_CATEGORIES_ASYNC",function(t){var n=this,e=t.commit;return new i.a(function(t,r){n._vm.$axios({commit:e,url:G.b,doHideAlert:!0,success:function(n){e("LOAD_CATEGORIES",n.docs),t(n.docs)},fail:function(t){r(t)}})})}),mutations:z()({},"LOAD_CATEGORIES",function(t,n){t.docs=n})},Q=e("H6RH"),J=e("jcR6");o.a.use(b.a);var Z=e("aozt"),tt=e.n(Z),nt={install:function(t){t.prototype.$axios=function(t){var n=t.commit,e=t.url,r=t.method,i=t.data,o=t.headers,s=t.success,u=t.fail,c=t.doHideAlert;n("SHOW_LOADING");var a=e;r&&(a={method:r,url:e,data:i,headers:o}),tt()(a).then(function(t){var e=t.data,r=e.message,i=e.result;n("HIDE_LOADING"),!c&&n("SHOW_ALERTTEXT",r),setTimeout(function(){n("HIDE_ALERTTEXT")},1e3),s&&s(i)}).catch(function(t){if(n("HIDE_LOADING"),t.response){var e=t.response.data;1===e.code?n("SHOW_ALERTTEXT",e.message):2===e.code?(n("SHOW_ALERTTEXT",e.message),u&&u(t)):3===e.code?(n("SHOW_ALERTTEXT",e.message),n(x.g),window.location.href="/signin_by_username"):(n("SHOW_ALERTTEXT","服务器故障"),u&&u(t))}else n("SHOW_ALERTTEXT","服务器故障"),u&&u(t)})}}};o.a.use(nt),o.a.mixin({beforeRouteUpdate:function(t,n,e){var r=this.$options.asyncData;r?r({store:this.$store,route:t}).then(e).catch(e):e()}});var et,rt,it,ot,st,ut,ct,at,lt,dt=(et=new j.a({mode:"history",routes:[{path:"/",component:function(){return e.e(5).then(e.bind(null,"wqTG"))},name:"home",meta:{index:0}},{path:"/posts",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"/OIq"))},name:"postlist"},{path:"/posts/:postid",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"+LUI"))},name:"post",children:[{path:"comments",name:"commentlist",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"ruqi"))},children:[{path:"add",name:"addcomment",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"PdeQ"))}},{path:":commentid/update",name:"updatecomment",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"KSjq"))}},{path:":commentid/delete",name:"deletecomment",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"q5FU"))}}]}]},{path:"/categories",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"q6Oa"))},name:"categorylist"},{path:"/categories/:number",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"jgxu"))},name:"category"},{path:"/topics/:number",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"EJRa"))},name:"topic"},{path:"/signup",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"x+iw"))},name:"signup"},{path:"/signin_by_phonenumber",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"gcvW"))},name:"signin_by_phonenumber"},{path:"/signin_by_username",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"Fxtc"))},name:"signin_by_username"},{path:"/users/:userid",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"c5cd"))},name:"user"}],scrollBehavior:function(t,n,e){return e||{x:0,y:0}}}),rt=new b.a.Store({modules:{auth:x.i,alert:F,post:q.d,category:X,like:Q.d,size:Y,comment:J.e}}),{app:new o.a({router:et,store:rt,render:function(t){return t(W)}}),router:et,store:rt}),ft=dt.app,ht=dt.router,mt=dt.store;it=mt.getters,ot=it.postCount,st=it.categoryCount,ut=it.userCount,ct=it.likeCount,at=it.commentCount,lt=mt.dispatch,!st&&lt("LOAD_CATEGORIES_ASYNC"),!ot&&lt(q.b),!ct&&lt(Q.c),!at&&lt(J.c),!ut&&lt(x.b),window.__INITIAL_STATE__&&mt.replaceState(window.__INITIAL_STATE__),ht.onReady(function(){ht.beforeResolve(function(t,n,e){var r=ht.getMatchedComponents(t),o=ht.getMatchedComponents(n),s=!1,u=r.filter(function(t,n){return s||(s=o[n]!==t)});if(!u.length)return e();i.a.all(u.map(function(n){if(n.asyncData)return n.asyncData({store:mt,route:t})})).then(function(){e()}).catch(e)}),ft.$mount("#root")})},z6VR:function(t,n){t.exports={screen:"_1QeIuRPrHM1Q2QgJ4zev7n_0",inner:"IfZKF666fKNn4WDjKcWrl_0"}},zFxR:function(t,n,e){"use strict";var r=e("iLYs"),i={components:{BaseMask:e("MlLD").a,BaseFullScreen:r.a}},o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("BaseFullScreen",{class:this.$style.screen},[n("BaseMask"),this._v(" "),n("div",{class:this.$style.inner},[this._t("default")],2)],1)},staticRenderFns:[]};var s=e("vSla")(i,o,!1,function(t){this.$style=e("z6VR")},null,null);n.a=s.exports}},["tPF2"]);
//# sourceMappingURL=app.a74a3828d49d798e7206.js.map