(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),s=c(5),a=c(6),r=c(8),l=c(7),i=c(1),d=c.n(i),u=c(2),b=c.n(u),j=(c(13),c(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(s.a)(this,c);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={selectedGood:"Jam"},e.clickHandler=function(t){e.setState({selectedGood:t})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("h1",{children:["Selected good: ".concat(t?"".concat(t," is selected"):"No goods selected"),t&&Object(j.jsx)("button",{type:"button",className:b()("clear-button"),onClick:function(){e.clickHandler("")},children:"X"})]}),Object(j.jsx)("ul",{children:h.map((function(c){return Object(j.jsxs)("li",{className:b()({selected:c===t}),children:[c,Object(j.jsx)("button",{type:"button",className:b()("item-button",{hidden:c===t}),onClick:function(){e.clickHandler(c)},children:"Select"})]},c)}))})]})}}]),c}(d.a.Component),m=p;o.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.158773cf.chunk.js.map