import{r as C,C as S,a as l,f as m,w as K,b as i,s as O,j as f,c as p,F as w,u as y,t as b,O as q,i as D,x as j,g as h,G as E,H as J,_ as N,h as g,n as d}from"./index.7cbdcbda.js";import{L as I}from"./Loading.3a98fd87.js";const M={class:"relative"},F={class:"p-4 bg-gray-100 rounded"},V=["onSubmit"],X=["placeholder","max"],A=i("button",{type:"submit",class:"absolute top-0 bottom-0 right-0 rounded-full p-3 bg-blue-500 px-5 shadow-sm text-white"}," Bayar ",-1),P={class:"my-3 text-lg"},z={class:"grid grid-flow-col lg:grid-rows-4 grid-rows-6 grid-rows-12 gap-3"},G={class:"pr-2"},H=["value","data-id","data-kelas","data-bulan","disabled"],T={key:0,class:"absolute bottom-0 right-0 text-[10px] text-white bg-green-500 shadow p-0.5 px-2 rounded-tl"},k=["Juli","Agustus","September","Oktober","November","Desember","Januari","Februari","Maret","April","Mei","Juni"],Q={__name:"spp",props:["siswa"],setup(v){const s=v,a=C({req:[],item:[],isLoading:!1,totalKekurangan:12*3,kelas:["XII","XI","X"]});function c(){a.isLoading=!0,s.siswa.nisn&&g.get("/pembayaran/spp",{_siswa_nisn:s.siswa.nisn}).then(r=>r.json()).then(r=>{a.req=r.map(t=>JSON.stringify({bulan:t.bulan,status_kelas:t.status_kelas})),a.item=[],a.totalKekurangan=12*([...a.kelas].reverse().indexOf(s.siswa.kelas)+1),r.forEach(t=>{a.totalKekurangan-=1,a.item[t.status_kelas+"-"+t.bulan]=t}),a.isLoading=!1})}function x(r){if(a.isLoading=!0,r.checked){const t=s.siswa.jurusan.jumlah_spp-s.siswa.jurusan.jumlah_spp*s.siswa.diskon_spp/100+(s.siswa.jurusan.kategori=="2"&&s.siswa.jurusan.diskon_spp>50?1e4:0),e=r.dataset.kelas,n=r.dataset.bulan;g.post("/pembayaran/spp",{siswa_nisn:s.siswa.nisn,user_id:h.id,bulan:n,jumlah_bayar:t,tabungan_wajib:s.siswa.jurusan.tabungan_wajib,status_kelas:e}).then(o=>o.json()).then(o=>{d("pembayaran berhasil disimpan"),c()}).catch(o=>{d(o,"bg-red-400")})}else{const t=r.dataset.id;g.delete("/pembayaran/spp/"+t).then(e=>e.json()).then(()=>{d("pembayaran berhasil dihapus"),c()}).catch(e=>d(e,"bg-red-400"))}}function L(r){a.isLoading=!0;const t=r.target[0],e=t.value,n=s.siswa.jurusan.jumlah_spp-s.siswa.jurusan.jumlah_spp*s.siswa.diskon_spp/100+(s.siswa.jurusan.kategori=="2"&&s.siswa.jurusan.diskon_spp>50?1e4:0);let o=[];[...a.kelas].reverse().forEach(u=>{k.forEach(_=>{a.item[u+"-"+_]||(o=[...o,{siswa_nisn:s.siswa.nisn,user_id:h.id,bulan:_,jumlah_bayar:n,tabungan_wajib:s.siswa.jurusan.tabungan_wajib,status_kelas:u}])})});const B=o.slice(0,e);g.post("/pembayaran/spp/batch",{data:B}).then(u=>u.json()).then(u=>{t.value="",d(u),c()}).catch(u=>d(u)).finally(()=>{a.isLoading=!1})}return S(()=>{s.siswa&&c()}),(r,t)=>(l(),m(N,{title:"SPP"},{default:K(()=>[i("div",M,[i("div",F,[i("form",{class:"relative",onSubmit:O(L,["prevent"])},[i("input",{type:"number",class:"w-full rounded-full p-3 border border-gray-100 outline-none shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 focus:invalid:border-red-400 focus:invalid:ring-red-300",placeholder:"Bayar Langsung 1 - "+a.totalKekurangan+" Bulan",max:a.totalKekurangan,min:"1",required:""},null,8,X),A],40,V)]),a.isLoading?(l(),m(I,{key:0})):f("",!0),(l(!0),p(w,null,y(a.kelas.slice(a.kelas.indexOf(s.siswa.kelas)),e=>(l(),p("div",null,[i("div",P,"Kelas "+b(e),1),i("div",z,[(l(),p(w,null,y(k,n=>i("div",{class:q(["p-2 relative border border-gray-100 form-field transition hover:bg-gray-50",{"bg-gray-50":!!a.item[e+"-"+n]}])},[i("table",null,[i("tr",null,[i("td",G,[D(i("input",{class:"mb-1",type:"checkbox",onChange:t[0]||(t[0]=o=>x(o.currentTarget)),"onUpdate:modelValue":t[1]||(t[1]=o=>a.req=o),value:JSON.stringify({bulan:n,status_kelas:e}),"data-id":a.item[e+"-"+n]?a.item[e+"-"+n].id:"","data-kelas":e,"data-bulan":n,disabled:a.item[e+"-"+n]?j(h).role!="1":!1},null,40,H),[[E,a.req]])]),i("td",null,b(n),1)])]),a.item[e+"-"+n]?(l(),p("div",T,b(a.item[e+"-"+n].user.nama)+", "+b(j(J)(a.item[e+"-"+n].created_at.slice(0,10))),1)):f("",!0)],2)),64))])]))),256))])]),_:1}))}};export{Q as _,k as b};
