(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(t,e,r){var content=r(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(71).default)("1bc0901c",content,!0,{sourceMap:!1})},189:function(t,e,r){"use strict";r(185)},190:function(t,e,r){(e=r(70)(!1)).push([t.i,"a[data-v-247e1320]{text-decoration:none}a:hover article[data-v-247e1320]{background:#aaa}",""]),t.exports=e},208:function(t,e,r){"use strict";r.r(e);var n={props:{title:String,description:String,date:String,category:String,slug:String}},c=(r(189),r(34)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nuxt-link",{attrs:{to:t.slug}},[r("article",{staticClass:"bg-white text-dark p-3 my-3 rounded"},[r("h2",{staticClass:"font-weight-bold m-0"},[t._v(t._s(t.title))]),t._v(" "),r("p",{staticClass:"lead text-muted"},[t._v(t._s(t.description))]),t._v(" "),r("p",{staticClass:"text-muted m-0"},[r("i",{staticClass:"fas fa-fw fa-clock mr-1"}),r("time",{attrs:{datetime:t.date}},[t._v(t._s(t.date))])])])])}),[],!1,null,"247e1320",null);e.default=component.exports},210:function(t,e,r){"use strict";r.r(e);r(31);var n=r(2),c={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,e.next=3,r("blog").where({draft:!1}).sortBy("date","desc").limit(50);case 3:return n=e.sent,e.next=6,n.fetch();case 6:return c=e.sent,e.abrupt("return",{articles:c});case 8:case"end":return e.stop()}}),e)})))()}},l=r(34),component=Object(l.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},this._l(this.articles,(function(article,t){return e("ArticleCard",{key:t,attrs:{title:article.title,description:article.description,date:article.date,category:article.category,slug:article.slug,eyecatch:article.eyecatch,eyecatch_alt:article.eyecatch_alt}})})),1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleCard:r(208).default})}}]);