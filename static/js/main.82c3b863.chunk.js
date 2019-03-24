(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),o=e(32),c=e.n(o),i=e(13),u=e(14),l=e(16),p=e(15),f=e(17),d=e(23),s=e(24),m=e(5),b=e(18);function v(){return(v=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function g(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e=o[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var h=a.a.createElement("path",{d:"M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"}),O=function(t){var n=t.svgRef,e=g(t,["svgRef"]);return a.a.createElement("svg",v({width:24,height:24,viewBox:"0 0 24 24",ref:n},e),h)},j=a.a.forwardRef(function(t,n){return a.a.createElement(O,v({svgRef:n},t))}),y=(e.p,e(6)),E=e(21),x=e.n(E);function w(){var t=Object(m.a)(["\n    fragment NoteParts on Note {\n        id\n        title\n        content\n    }\n"]);return w=function(){return t},t}var N=x()(w());function S(){var t=Object(m.a)(["\n    query getNote($id: Int!) {\n        note(id: $id) @client {\n            ...NoteParts\n        }\n    }\n    ","\n"]);return S=function(){return t},t}function k(){var t=Object(m.a)(["\n    {\n        notes @client {\n            ...NoteParts\n        }\n    }\n    ","\n"]);return k=function(){return t},t}var C=x()(k(),N),I=x()(S(),N);function _(){var t=Object(m.a)(["\n    padding-bottom: 5px;\n    font-weight: 600;\n    font-size: 20px;\n"]);return _=function(){return t},t}function F(){var t=Object(m.a)(["\n    padding: 10px;\n    padding-left: 5px;\n    transition: background-color 0.1s linear;\n    cursor: pointer;\n    border-radius: 5px;\n    margin-bottom: 10px;\n    &:hover {\n        background-color: #eeeeee;\n    }\n"]);return F=function(){return t},t}function $(){var t=Object(m.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n"]);return $=function(){return t},t}function z(){var t=Object(m.a)(["\n    color: #a2a19e;\n    font-weight: 400;\n"]);return z=function(){return t},t}function q(){var t=Object(m.a)(["\n    margin-left: 10px;\n    transform: scale(0.8);\n    background-color: #eee;\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    border-radius: 10px;\n    cursor: pointer;\n"]);return q=function(){return t},t}function A(){var t=Object(m.a)(["\n    font-size: 50px;\n    font-weight: 600;\n    margin: 0;\n    margin-bottom: 30px;\n    display: flex;\n    align-items: center;\n"]);return A=function(){return t},t}function M(){var t=Object(m.a)(["\n    margin-bottom: 50px;\n"]);return M=function(){return t},t}var P=y.b.div(M()),Q=y.b.h1(A()),R=y.b.div(q()),J=y.b.h2(z()),B=y.b.div($()),U=y.b.div(F()),D=y.b.span(_()),T=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P,null,a.a.createElement(Q,null,"Note-App",a.a.createElement(d.b,{to:"/note-app/add"},a.a.createElement(R,null,a.a.createElement(j,null)))),a.a.createElement(J,null,"This is offline Note App supports Markdown.")),a.a.createElement(B,null,a.a.createElement(b.c,{query:C},function(t){var n=t.data;return n.notes?n.notes.map(function(t){return a.a.createElement(d.b,{to:"/note-app/note/".concat(t.id),key:t.id},a.a.createElement(U,null,a.a.createElement(D,null,t.title)))}):null})))}}]),n}(a.a.Component),H=e(34),G=e.n(H);function K(){var t=Object(m.a)([""]);return K=function(){return t},t}function L(){var t=Object(m.a)(["\n    font-size: 50px;\n    margin: 0;\n    padding: 0;\n"]);return L=function(){return t},t}function V(){var t=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 50px;\n"]);return V=function(){return t},t}var W=y.b.div(V()),X=y.b.h1(L()),Y=y.b.button(K()),Z=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.props.match.params.id;return a.a.createElement(b.c,{query:I,variables:{id:t}},function(t){var n=t.data;return n.note?a.a.createElement(a.a.Fragment,null,a.a.createElement(W,null,a.a.createElement(X,null,n.note&&n.note.title),a.a.createElement(d.b,{to:"/note-app/edit/".concat(n.note.id)},a.a.createElement(Y,null,"Edit"))),a.a.createElement(G.a,{markdown:n.note.content})):null})}}]),n}(a.a.Component),tt=e(35),nt=e(43);function et(){var t=Object(m.a)([""]);return et=function(){return t},t}function rt(){var t=Object(m.a)(["\n    display: flex;\n    align-items: center;\n    margin-bottom: 50px;\n"]);return rt=function(){return t},t}function at(){var t=Object(m.a)(["\n    font-size: 18px;\n    margin-top: 15px;\n"]);return at=function(){return t},t}function ot(){var t=Object(m.a)(["\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 50px;\n"]);return ot=function(){return t},t}function ct(){var t=Object(m.a)(["\n    font-size: 50px;\n    font-weight: 600;\n    width: 100%;\n    &::placeholder {\n        font-weight: 600;\n    }\n"]);return ct=function(){return t},t}var it=Object(y.b)(nt.a)(ct()),ut=y.b.div(ot()),lt=Object(y.b)(nt.a)(at()),pt=y.b.div(rt()),ft=y.b.button(et()),dt=function(t){function n(t){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(p.a)(n).call(this,t)))._onInputChange=function(t){var n=t.target,r=n.value,a=n.name;e.setState(Object(tt.a)({},a,r))},e._onSave=function(){var t=e.props.onSave,n=e.state;t(n.title,n.content,n.id)},e.state={title:t.title||"",content:t.content||"",id:t.id||null},e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.state,n=t.title,e=t.content;return a.a.createElement(a.a.Fragment,null,a.a.createElement(pt,null,a.a.createElement(it,{value:n,onChange:this._onInputChange,placeholder:"Untitled...",name:"title"}),a.a.createElement(ft,{onClick:this._onSave},"Save")),a.a.createElement(ut,null,a.a.createElement(lt,{value:e,onChange:this._onInputChange,placeholder:"# This supports markdown!",name:"content"}),a.a.createElement(G.a,{markdown:e,className:"markdown"})))}}]),n}(a.a.Component);function st(){var t=Object(m.a)(["\n    mutation createNote($title: String!, $content: String!) @client {\n        createNote(title: $title, content: $content) {\n            id\n        }\n    }\n"]);return st=function(){return t},t}var mt=x()(st()),bt=function(t){function n(){var t,e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(l.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(a))))._onSave=function(t,n){var r=e.props.history.push;""!==t&&""!==n&&(e.createNote({variables:{title:t,content:n}}),r("/note-app/"))},e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this;return a.a.createElement(b.b,{mutation:mt},function(n){return t.createNote=n,a.a.createElement(dt,{onSave:t._onSave})})}}]),n}(a.a.Component);function vt(){var t=Object(m.a)(["\n    mutation updateNote($id: Int!, $title: String!, $content: String!) @client {\n        editNote(id: $id, title: $title, content: $content) {\n            id\n        }\n    }\n"]);return vt=function(){return t},t}var gt=x()(vt()),ht=function(t){function n(){var t,e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=Object(l.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(a))))._onSave=function(t,n,r){var a=e.props.history.push;""!==t&&""!==n&&r&&(e.editNote({variables:{title:t,content:n,id:r}}),a("/note-app/note/".concat(r)))},e}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this,n=this.props.match.params.id;return a.a.createElement(b.c,{query:I,variables:{id:n}},function(n){var e=n.data;return e.note?a.a.createElement(b.b,{mutation:gt},function(n){return t.editNote=n,a.a.createElement(dt,{title:e.note.title,content:e.note.content,id:e.note.id,onSave:t._onSave})}):null})}}]),n}(a.a.Component),Ot=function(t){function n(){return Object(i.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(f.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(d.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/note-app/",component:T}),a.a.createElement(s.a,{path:"/note-app/add",component:bt}),a.a.createElement(s.a,{path:"/note-app/note/:id",component:Z}),a.a.createElement(s.a,{path:"/note-app/edit/:id",component:ht})))}}]),n}(r.Component),jt=e(27),yt=e(65),Et=e(64),xt=e(10),wt=e(61),Nt=e(62),St=function(t){var n=t.readQuery({query:C}).notes,e=JSON.stringify(n);try{localStorage.setItem("notes",e)}catch(r){console.log(r)}},kt={notes:function(){var t=localStorage.getItem("notes");if(t)try{return JSON.parse(t)}catch(n){return console.log(n),[]}return[]}()},Ct={Query:{note:function(t,n,e){var r=e.cache,a=r.config.dataIdFromObject({__typename:"Note",id:n.id}),o=r.readFragment({fragment:N,id:a});return o}},Mutation:{createNote:function(t,n,e){var r=e.cache,a=r.readQuery({query:C}).notes,o={__typename:"Note",title:n.title,content:n.content,id:a.length+1};return r.writeData({data:{notes:[o].concat(Object(Nt.a)(a))}}),St(r),o},editNote:function(t,n,e){var r=n.id,a=n.title,o=n.content,c=e.cache,i=c.config.dataIdFromObject({__typename:"Note",id:r}),u=c.readFragment({fragment:N,id:i});console.log(u);var l=Object(wt.a)({},u,{title:a,content:o});return c.writeFragment({id:i,fragment:N,data:l}),St(c),l}}},It=new yt.a,_t=Object(Et.a)({cache:It,typeDefs:["\n    schema{\n        query: Query\n        mutation: Mutation\n    }\n    type Query{\n        notes: [Note]!\n        note(id: Int!): Note\n    }\n    type Mutation{\n        createNote(title: String!, content: String!): Note\n        editNote(id: Int!, title: String, content:String): Note\n    }\n    type Note{\n        id: Int!\n        title: String!\n        content: String!\n    }\n    "],defaults:kt,resolvers:Ct}),Ft=new jt.c({cache:It,link:xt.a.from([_t])});function $t(){var t=Object(m.a)(["\n\t    :root {\n\t        --greyColor: #A2A19E;\n\t        --blackColor: #373630;\n\t    }\n\t    body{\n\t        background-color:#F7F5F3;\n\t        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n\t        color:var(--blackColor);\n\t        padding:50px 100px;\n\t        margin:0;\n\t    }\n\t    #root{\n\t        max-width:1000px;\n\t        width:100%;\n\t        margin:0 auto;\n\t    }\n\t    a {\n\t        color:inherit;\n\t        text-decoration:none;\n\t    }\n\t    div{\n\t        margin:0;\n\t    }\n\t    input,\n\t    textarea{\n\t        appearance:none;\n\t        border:none;\n\t        background-color:transparent;\n\t        resize:none;\n\t        &::placeholder {\n\t            color: #E7E7E6;\n\t        }\n\t        &:focus,\n\t        &:active{\n\t            outline:none;\n\t        }\n\t    }\n\t    .markdown a{\n\t        text-decoration:underline;\n\t    }\n\t    button{\n\t        appearance:none;\n\t        border:none;\n\t        background-color:transparent;\n\t        font-weight:600;\n\t        font-size:15px;\n\t        cursor:pointer;\n\t        border:2.5px solid var(--blackColor);\n\t        &:focus,\n\t        &:active{\n\t            outline:none\n\t        }\n\t\n\t    }\n\t"]);return $t=function(){return t},t}var zt=Object(y.a)($t());c.a.render(a.a.createElement(b.a,{client:Ft},a.a.createElement(zt,null),a.a.createElement(Ot,null)),document.getElementById("root"))},67:function(t,n,e){t.exports=e(140)}},[[67,1,2]]]);
//# sourceMappingURL=main.82c3b863.chunk.js.map