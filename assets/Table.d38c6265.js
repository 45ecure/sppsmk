import{a as t,c as s,b as e,F as l,u as c,t as d,x as i,y as p,q as b}from"./index.7cbdcbda.js";const g={class:"overflow-x-auto"},x={class:"w-full lg:whitespace-nowrap"},m={class:"hidden lg:table-header-group"},y={class:"px-3 p-1 uppercase text-sm font-semibold"},f=e("tr",{class:"h-2"},null,-1),k={class:"border border-gray-100 block lg:table-row transition rounded hover:bg-blue-500 hover:text-white"},w={class:"p-3 flex items-center justify-between lg:table-cell"},v={class:"lg:hidden pr-4 font-semibold"},B={class:"lg:text-left text-right max-w-250px lg:max-w-full"},j=e("tr",{class:"h-3"},null,-1),D={class:"border border-gray-100 text-center transition rounded"},F=["colspan"],N=e("tr",{class:"h-3"},null,-1),V={__name:"Table",props:["keys","items"],setup(_){const o=_,a=Object.keys(o.keys);return(h,S)=>(t(),s("div",g,[e("table",x,[e("thead",m,[e("tr",null,[(t(!0),s(l,null,c(i(a),r=>(t(),s("td",y,d(r.replace(/_/gi," ")),1))),256))]),f]),e("tbody",null,[o.items.length?(t(!0),s(l,{key:0},c(o.items,(r,u)=>(t(),s(l,null,[e("tr",k,[(t(!0),s(l,null,c(i(a),n=>(t(),s("td",w,[e("div",v,d(n.replace(/_/gi," ")),1),e("div",B,[p(h.$slots,o.keys[n],{item:r,index:u},()=>[b(d(r[o.keys[n]]),1)])])]))),256))]),j],64))),256)):(t(),s(l,{key:1},[e("tr",D,[e("td",{class:"p-3 text-center",colspan:i(a).length},"Data tidak tersedia.",8,F)]),N],64))])])]))}};export{V as _};
