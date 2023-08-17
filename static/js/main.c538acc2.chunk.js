(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),a=(c(18),c(19),c(5)),s=c(2),r=c(6),j=c.n(r),i=(c(20),c(0)),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{to:"/",className:l,children:"Home"}),Object(i.jsx)(a.c,{to:"/people",className:l,children:"People"})]})})}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(s.b,{})})})]})},o=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},h=c(4),O=c(1),x=(c(22),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var m=function(e){var t=e.human,c=e.people,n=t.name,r=t.sex,l=t.born,b=t.died,o=t.fatherName,d=t.motherName,h=t.slug,O=t.mother,x=void 0===O?c.find((function(e){return e.name===d})):O,u=t.father,m=void 0===u?c.find((function(e){return e.name===o})):u,p=Object(s.i)().slugName;return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":h===p}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"../".concat(h),className:j()({"has-text-danger":"f"===r}),children:n})}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:l}),Object(i.jsx)("td",{children:b}),x?Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"../".concat(x.slug),className:"has-text-danger",children:x.name})}):Object(i.jsx)("td",{children:d||"-"}),m?Object(i.jsx)("td",{children:Object(i.jsx)(a.b,{to:"".concat(m.slug),children:m.name})}):Object(i.jsx)("td",{children:o||"-"})]})},p=function(e){var t=e.people,c=Object(O.useState)(!1),n=Object(h.a)(c,2),a=n[0],s=n[1];return Object(O.useEffect)((function(){t.length||s(!0)}),[t]),Object(i.jsx)(i.Fragment,{children:a?Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}):Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(m,{human:e,people:t},e.slug)}))})]})})})},f=function(){var e=Object(O.useState)([]),t=Object(h.a)(e,2),c=t[0],n=t[1],a=Object(O.useState)(!0),s=Object(h.a)(a,2),r=s[0],j=s[1],l=Object(O.useState)(!1),b=Object(h.a)(l,2),o=b[0],d=b[1];return Object(O.useEffect)((function(){u().then((function(e){return n(e)})).catch((function(){return d(!0)})).finally((function(){return j(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"box table-container",children:[r&&!o?Object(i.jsx)(x,{}):Object(i.jsx)(p,{people:c}),o&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]})})]})},g=function(){return Object(i.jsx)(a.a,{children:Object(i.jsx)(s.e,{children:Object(i.jsxs)(s.c,{path:"/",element:Object(i.jsx)(b,{}),children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(o,{})}),Object(i.jsx)(s.c,{path:"home",element:Object(i.jsx)(s.a,{to:"..",replace:!0})}),Object(i.jsxs)(s.c,{path:"people",children:[Object(i.jsx)(s.c,{index:!0,element:Object(i.jsx)(f,{})}),Object(i.jsx)(s.c,{path:":slugName",element:Object(i.jsx)(f,{})})]}),Object(i.jsx)(s.c,{path:"*",element:Object(i.jsx)(d,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(g,{}))}},[[23,1,2]]]);
//# sourceMappingURL=main.c538acc2.chunk.js.map