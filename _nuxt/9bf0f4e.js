(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(t,e,r){var content=r(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(78).default)("56b15182",content,!0,{sourceMap:!1})},162:function(t,e,r){"use strict";var o={head:{script:[{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",body:!0},{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js",body:!0},{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js",body:!0},{src:"https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js",body:!0},{src:"/js/particles.js",body:!0},{src:"/js/scroll.js",body:!0}]}},n=(r(210),r(32)),component=Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"particles"}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"nuxt"},[e("Nuxt")],1),this._v(" "),this._m(1),this._v(" "),this._m(2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar navbar-expand-md navbar-dark fixed-top"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("SiraKen.NET")]),t._v(" "),r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#NavbarMenu","aria-controls":"NavbarMenu","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"NavbarMenu"}},[r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",{staticClass:"nav-item dropdown bg-black text-white"},[r("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v("\n                Social\n              ")]),t._v(" "),r("div",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[r("a",{staticClass:"dropdown-item",attrs:{href:"https://www.youtube.com/channel/UCUUhx5rucm_tYuM0Hbm781g",target:"_blank",rel:"noopener"}},[t._v("YouTube")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"https://twitter.com/shirasawa_kento",target:"_blank",rel:"noopener"}},[t._v("Twitter")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"https://www.facebook.com/shirasawa.kento",target:"_blank",rel:"noopener"}},[t._v("Facebook")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"https://www.instagram.com/shirasawa.kento",target:"_blank",rel:"noopener"}},[t._v("Instagram")]),t._v(" "),r("a",{staticClass:"dropdown-item",attrs:{href:"https://open.spotify.com/user/sira_kento",target:"_blank",rel:"noopener"}},[t._v("Spotify")])])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"gallery"}},[t._v("Gallery")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"https://blog.siraken.net/"}},[t._v("Blog")])]),t._v(" "),r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"https://www.novalumo.llc/"}},[t._v("Company")])])])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"mx-auto text-center"},[e("span",[this._v("Copyright © Novalumo")]),this._v(" "),e("span",[this._v("All rights reserved.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"gh-icon"},[e("span",{staticClass:"h1 d-block"},[e("a",{staticClass:"gh-link",attrs:{href:"https://github.com/SiraKen",title:"Fork me!!"}},[e("i",{staticClass:"fab fa-github"})])])])}],!1,null,null,null);e.a=component.exports},168:function(t,e,r){r(169),t.exports=r(170)},210:function(t,e,r){"use strict";r(145)},211:function(t,e,r){(e=r(77)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;700&display=swap);"]),e.push([t.i,'body{background:linear-gradient(0deg,#020307,#0e191e,#213443);color:#fff;font-family:"Lato","Noto Sans JP","ヒラギノ角ゴ ProN","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,"ＭＳ Ｐゴシック","MS PGothic",sans-serif;min-height:100vh}.navbar{color:#fff!important}.navbar-brand{transition:.2s}.navbar-brand:hover{transform:scale(1.05)}footer{width:100%;padding:1rem 0;color:#aaa;font-size:.8rem;cursor:default}.gh-icon{position:fixed;bottom:0;right:1em}.gh-link{display:block;color:#fff;transition:.5s}.gh-link:hover{color:#777;transform:rotate(1turn)}.ban{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nuxt{padding:100px 0}.unicode{font-family:"TITUS Cyberbit Basic","Code2000","Chrysanthi Unicode","Doulos SIL","Bitstream Cyberbit","Bitstream CyberBase","Bitstream Vera","Thryomanes","Gentium","GentiumAlt","Visual Geez Unicode","Lucida Grande","Arial Unicode MS","Microsoft Sans Serif","Lucida Sans Unicode",sans-serif}#particles{position:absolute;display:block;width:100vw;height:auto;top:0;left:0;bottom:0;z-index:-1}',""]),t.exports=e},24:function(t,e,r){"use strict";var o={props:["error"],computed:{message:function(){return 404===this.error.statusCode?["Not Found","お探しのページは見つかりませんでした"]:["Error","エラーが発生しました"]}}},n=r(32),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container mt-5 mb-5"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center"},[r("div",{attrs:{id:"error"}},[r("h1",[t._v(t._s(t.error.statusCode)+" "+t._s(t.message[0]))]),t._v(" "),r("p",[t._v(t._s(t.message[1]))])])])])])])}),[],!1,null,null,null);e.a=component.exports}},[[168,6,1,7]]]);