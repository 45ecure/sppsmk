import{r as j,z as w,o as P,P as U,a as r,f as $,w as u,b as e,i as g,v as B,c as n,F as i,u as c,t as l,p as k,x as _,g as x,H as S,d as V,q as m,E as h,_ as E,h as p,n as T,j as N,L as D}from"./index.7cbdcbda.js";import{_ as K}from"./Table.d38c6265.js";import{_ as X}from"./AutoComplete.f3c24e8a.js";const C={class:"form-field lg:flex gap-3"},M={class:"w-full lg:w-1/5"},I={class:"w-full lg:w-2/5"},R=e("option",{value:""},"Semua Biaya Lain",-1),A=["value"],F={class:"w-full lg:w-2/5"},J=["disabled"],O=e("option",{value:""},"Semua Petugas",-1),q=["value"],z={class:"p-4 bg-gray-50 rounded mb-4"},H={class:"text-right mb-4 text-sm"},G=["href"],Q=["href"],W={class:"p-4 bg-gray-50 rounded mb-4"},Y={__name:"perhari",setup(L){const a=j({filter:{_tanggal:"",_biaya_lain_id:"",_user_id:""},biaya_lain:[],total:0,data:[],user:[],excel_url:"",print_url:""});function b(){p.get("/laporan/biaya-lain/perhari",a.filter).then(s=>(a.excel_url=s.headers.get("X-Excel-Url"),a.print_url=s.headers.get("X-Print-Url"),s.json())).then(s=>{a.total=0,a.data=s,s.forEach(o=>{a.total+=o.jumlah_bayar})}).catch(s=>T(s,"bg-red-400"))}function y(){p.get("/biaya-lain").then(s=>s.json()).then(s=>a.biaya_lain=s)}function d(){p.get("/user").then(s=>s.json()).then(s=>{a.user=s,x.role!=="1"&&(a.filter._user_id=x.id)})}return w(a.filter,()=>{b()}),P(()=>{a.filter._tanggal=U(),y(),d()}),(s,o)=>(r(),$(E,{title:"Laporan Perhari"},{default:u(()=>[e("div",C,[e("div",M,[g(e("input",{type:"date","onUpdate:modelValue":o[0]||(o[0]=t=>a.filter._tanggal=t)},null,512),[[B,a.filter._tanggal]])]),e("div",I,[g(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>a.filter._biaya_lain_id=t)},[R,(r(!0),n(i,null,c(a.biaya_lain,t=>(r(),n("option",{value:t.id},l(t.jenis),9,A))),256))],512),[[k,a.filter._biaya_lain_id]])]),e("div",F,[g(e("select",{"onUpdate:modelValue":o[2]||(o[2]=t=>a.filter._user_id=t),disabled:_(x).role!=="1"},[O,(r(!0),n(i,null,c(a.user,t=>(r(),n("option",{value:t.id},l(t.nama),9,q))),256))],8,J),[[k,a.filter._user_id]])])]),e("div",z,"Tanggal: "+l(_(S)(a.filter._tanggal)),1),e("div",H,[e("a",{target:"_blank",href:a.excel_url,class:"mr-4 text-green-500"},"EXCEL",8,G),e("a",{target:"_blank",href:a.print_url,class:"text-red-500"},"PRINT",8,Q)]),V(K,{keys:{No:"no",Nisn:"siswa_nisn",Nama_Siswa:"siswa_nama",Kelas:"siswa_kelas",Jenis_Pembayaran:"jenis",Total:"jumlah_bayar",Operator:"operator"},items:a.data},{no:u(({index:t})=>[m(l(t+1),1)]),siswa_nama:u(({item:t})=>[m(l(t.siswa.nama),1)]),siswa_kelas:u(({item:t})=>[m(l(t.siswa.kelas)+" "+l(t.siswa.jurusan_kode)+" "+l(t.siswa.rombel),1)]),operator:u(({item:t})=>[m(l(t.user.nama),1)]),jumlah_bayar:u(({item:t})=>[m(l(_(h)(t.jumlah_bayar)),1)]),_:1},8,["items"]),e("div",W,"Total: "+l(_(h)(a.total)),1)]),_:1}))}},Z={class:"form-field"},aa={class:"lg:flex gap-3"},ea={class:"w-full",lg:"w-1/2"},ta={class:"w-full",lg:"w-1/2"},sa=e("option",{value:""},"Semua Biaya Lain",-1),la=["value"],ra={class:"p-4 bg-gray-50 rounded mb-4"},oa={class:"text-right mb-4 text-sm"},na=["href"],ia=["href"],_a={class:"overflow-x-auto"},da={class:"w-full overflow-hidden whitespace-nowrap"},ua={class:"text-sm"},ca=e("td",{rowspan:"2",class:"text-center border border-gray-100 p-3 font-semibold"},"NO",-1),ha=e("td",{rowspan:"2",class:"text-center border border-gray-100 p-3 font-semibold"},"NISN",-1),pa=e("td",{rowspan:"2",class:"text-center border border-gray-100 p-3 font-semibold"},"NAMA",-1),ba={colspan:"2",class:"text-center border border-gray-100 p-3 font-semibold uppercase"},fa={class:"text-sm"},ma=e("td",{class:"text-center border border-gray-100 p-3 font-semibold uppercase"}," Terbayar ",-1),ga=e("td",{class:"text-center border border-gray-100 p-3 font-semibold uppercase"}," Kekurangan ",-1),ya=e("tr",{class:"h-3"},null,-1),ka={class:"border border-gray-100 transition hover:bg-blue-500 hover:text-white"},va={class:"p-3"},xa={class:"p-3"},wa={class:"p-3"},ja={class:"p-3"},$a={class:"p-3"},La=e("tr",{class:"h-3"},null,-1),Na=e("tr",{class:"border border-gray-100"},[e("td",{colspan:"99",class:"text-center p-3"},"Data tidak tersedia.")],-1),Pa=e("tr",{class:"h-3"},null,-1),Va={class:"p-4 bg-gray-50 rounded mb-4"},Ea={__name:"perkelas",setup(L){const a=j({filter:{_kelas_jurusan_rombel:"",_biaya_lain_id:""},total:0,total_kekuragan:0,data:[],biaya_lain:[],kelas_rombel_jurusan:[],excel_url:"",print_url:""});function b(){a.filter._kelas_jurusan_rombel&&p.get("/laporan/biaya-lain/perkelas",a.filter).then(s=>(a.excel_url=s.headers.get("X-Excel-Url"),a.print_url=s.headers.get("X-Print-Url"),s.json())).then(s=>{a.total=0,a.data=s,s.forEach(o=>{o.biaya_lain.forEach(t=>{a.total+=t.terbayar,a.total_kekuragan+=t.jumlah_bayar-t.terbayar})})}).catch(s=>T(s,"bg-red-400"))}function y(){p.get("/kelas-jurusan-rombel").then(s=>s.json()).then(s=>a.kelas_rombel_jurusan=s)}function d(){const s=a.filter._kelas_jurusan_rombel.split("-"),o=s[0],t=s[1];p.get("/biaya-lain",t?{_kelas:o,_jurusan_kode:t}:{}).then(f=>f.json()).then(f=>a.biaya_lain=f)}return w(a.filter,()=>{b()}),w(()=>a.filter._kelas_jurusan_rombel,()=>{d()}),P(()=>{y(),d()}),(s,o)=>(r(),$(E,{title:"Laporan Perkelas"},{default:u(()=>[e("div",Z,[e("div",aa,[e("div",ea,[V(X,{modelValue:a.filter._kelas_jurusan_rombel,"onUpdate:modelValue":o[0]||(o[0]=t=>a.filter._kelas_jurusan_rombel=t),items:a.kelas_rombel_jurusan.map(t=>({value:t.kelas+"-"+t.jurusan_kode+"-"+t.rombel,text:t.kelas+" "+t.jurusan_kode+" "+t.rombel})),placeholder:"Pilih Kelas"},null,8,["modelValue","items"])]),e("div",ta,[g(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>a.filter._biaya_lain_id=t)},[sa,(r(!0),n(i,null,c(a.biaya_lain,t=>(r(),n("option",{value:t.id},l(t.jenis),9,la))),256))],512),[[k,a.filter._biaya_lain_id]])])])]),e("div",ra," Kelas: "+l(a.filter._kelas_jurusan_rombel.replace(/-/gi," ")),1),e("div",oa,[e("a",{target:"_blank",href:a.excel_url,class:"mr-4 text-green-500"},"EXCEL",8,na),e("a",{target:"_blank",href:a.print_url,class:"text-red-500"},"PRINT",8,ia)]),e("div",_a,[e("table",da,[e("thead",null,[e("tr",ua,[ca,ha,pa,a.data[0]?(r(!0),n(i,{key:0},c(a.data[0].biaya_lain,t=>(r(),n("td",ba,l(t.jenis),1))),256)):N("",!0)]),e("tr",fa,[a.data[0]?(r(!0),n(i,{key:0},c(a.data[0].biaya_lain,t=>(r(),n(i,null,[ma,ga],64))),256)):N("",!0)]),ya]),e("tbody",null,[a.data.length?(r(!0),n(i,{key:0},c(a.data,(t,f)=>(r(),n(i,null,[e("tr",ka,[e("td",va,l(f+1),1),e("td",xa,l(t.nisn),1),e("td",wa,l(t.nama),1),(r(!0),n(i,null,c(t.biaya_lain,v=>(r(),n(i,null,[e("td",ja,l(_(h)(v.terbayar)),1),e("td",$a,l(_(h)(v.jumlah_bayar-v.terbayar)),1)],64))),256))]),La],64))),256)):(r(),n(i,{key:1},[Na,Pa],64))])])]),e("div",Va,[e("div",null,"Total Terbayar: "+l(_(h)(a.total)),1),e("div",null,"Total Kekurangan: "+l(_(h)(a.total_kekuragan)),1)])]),_:1}))}},Ta=e("div",{class:"mb-4 pb-2 border-b text-xl"},"Laporan Biaya Lain",-1),Ua={class:"flex"},Ba={class:"w-full form-field",lg:"w-1/2"},Sa=e("option",{disabled:"",value:""},"Pilih Laporan Biaya Lain",-1),Da=e("option",{value:"perhari"},"Laporan Perhari",-1),Ka=e("option",{value:"perkelas"},"Laporan Perkelas",-1),Xa=[Sa,Da,Ka],Ca=e("div",{class:"pt-3 border-t"},null,-1),Aa={__name:"biaya-lain",setup(L){const a=j({laporan:"perhari"}),b={perhari:Y,perkelas:Ea};return(y,d)=>(r(),n(i,null,[Ta,e("div",Ua,[e("div",Ba,[g(e("select",{"onUpdate:modelValue":d[0]||(d[0]=s=>a.laporan=s)},Xa,512),[[k,a.laporan]])])]),Ca,(r(),$(D(b[a.laporan])))],64))}};export{Aa as default};
