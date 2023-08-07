import{r as M,g as k,l as D,e as q,C as B,a as b,c,d as y,w as o,b as s,t as i,x as _,E as h,q as g,H as O,_ as v,k as I,i as T,p as U,v as L,m as C,s as P,F as V,h as w,n as f,f as A,j as S,u as E,I as H,J as K,K as R,B as W,z as F,o as z,L as G}from"./index.7cbdcbda.js";import"./AutoComplete.f3c24e8a.js";import{_ as X}from"./spp.1ca5aee4.js";import{_ as J}from"./Table.d38c6265.js";import{L as Q}from"./Loading.3a98fd87.js";const Y={class:"mb-4 form-field flex justify-center"},Z={class:"border-white border-2 p-2 text-center border-dashed bg-blue-500 text-sm mb-4 rounded text-white"},aa=s("div",{class:"mb-2 font-semibold"},"SALDO TABUNGAN",-1),sa={key:0,class:"bg-white rounded inline-block px-1"},ea=["onClick"],ta={key:1},na=s("label",{for:""},"Pilih Tabungan",-1),ia=s("option",{value:"1"},"Tabungan Wajib",-1),la=s("option",{value:"2"},"Tabungan Pribadi",-1),oa=[ia,la],ra={class:"bg-gray-50 text-sm p-2 font-semibold mb-3"},da=s("label",{for:""},"Jumlah Transaksi",-1),ua={class:"bg-gray-50 text-sm p-2 font-semibold mb-3"},_a=s("div",{class:"mt-5 text-right"},[s("button",{type:"submit"},"Simpan")],-1),ba=["onSubmit"],ma=s("p",null,"Anda yakin akan menghapus data terpilih?",-1),ca=s("div",{class:"mt-5 text-right"},[s("button",{class:"!bg-red-500",type:"submit"},"Hapus")],-1),ha=[ma,ca],ya={__name:"tabungan",props:["siswa"],setup(N){const r=N,a=M({isMinus:!1,data:{items:[]},saldo:{tabungan_wajib:0,tabungan_pribadi:0},modal:{save:!1,delete:!1},req:{id:"",siswa_nisn:r.siswa.nisn,user_id:k.id,jumlah_bayar:"",status_tabungan:"2"}}),p=D(()=>a.req.status_tabungan=="1"?a.saldo.tabungan_wajib:a.saldo.tabungan_pribadi),u=D(()=>p.value+(a.isMinus?0-a.req.jumlah_bayar:a.req.jumlah_bayar)),x=D(()=>({siswa_nisn:q.string().required(),user_id:q.mixed().required(),jumlah_bayar:a.isMinus?q.number().min(1).max(p.value).required():q.number().min(1).required(),status_tabungan:q.string().oneOf(["1","2"]).required()})),j=D(()=>{let n=JSON.parse(JSON.stringify(a.req));return a.isMinus&&(n.jumlah_bayar=0-a.req.jumlah_bayar),n});function $(){a.req={siswa_nisn:r.siswa.nisn,user_id:k.id,jumlah_bayar:"",status_tabungan:"2"}}function t(){r.siswa.nisn&&w.get("/pembayaran/tabungan",{_siswa_nisn:r.siswa.nisn}).then(n=>(a.saldo.tabungan_pribadi=a.saldo.tabungan_wajib=0,a.saldo.tabungan_wajib=parseInt(n.headers.get("X-Tabungan-Wajib")),n.json())).then(n=>{a.data.items=n,n.forEach(m=>{m.status_tabungan=="1"?a.saldo.tabungan_wajib+=m.jumlah_bayar:a.saldo.tabungan_pribadi+=m.jumlah_bayar})}).catch(n=>{f(n,"bg-red-400")})}function l(){w.post("/pembayaran/tabungan",j.value).then(n=>n.json()).then(n=>{a.modal.save=!1,f("data berhasil disimpan"),t()}).catch(n=>{f(n,"bg-red-400")})}function e(){w.delete("/pembayaran/tabungan/"+a.req.id).then(n=>n.json()).then(n=>{a.modal.delete=!1,f("data berhasil dihapus"),t()}).catch(n=>{f(n,"bg-red-400")})}return B(()=>{r.siswa&&t()}),(n,m)=>(b(),c(V,null,[y(v,{title:"Tabungan"},{default:o(()=>[s("div",Y,[s("button",{onClick:m[0]||(m[0]=d=>{a.modal.save=!0,a.isMinus=!1,$()}),class:"mr-2"}," Tambah "),s("button",{onClick:m[1]||(m[1]=d=>{a.modal.save=!0,a.isMinus=!0,$()}),class:"!bg-red-500"}," Ambil ")]),s("div",Z,[aa,s("div",null,"Tabungan Pribadi : "+i(_(h)(a.saldo.tabungan_pribadi)),1),s("div",null,"Tabungan Wajib : "+i(_(h)(a.saldo.tabungan_wajib)),1),s("div",null," Total : "+i(_(h)(a.saldo.tabungan_pribadi+a.saldo.tabungan_wajib)),1)]),y(J,{keys:{Tanggal:"tanggal",Status:"status",Kredit:"kredit",Debit:"debit",Operator:"operator",Opsi:"opsi"},items:a.data.items},{tanggal:o(({item:d})=>[g(i(_(O)(d.created_at)),1)]),status:o(({item:d})=>[g(i(d.jumlah_bayar>0?"1":"2"),1)]),kredit:o(({item:d})=>[g(i(d.jumlah_bayar>0?_(h)(d.jumlah_bayar):"-"),1)]),debit:o(({item:d})=>[g(i(d.jumlah_bayar<0?_(h)(d.jumlah_bayar):"-"),1)]),operator:o(({item:d})=>[g(i(d.user.nama),1)]),opsi:o(({item:d})=>[d.user_id==_(k).id||_(k).role=="1"?(b(),c("div",sa,[s("button",{onClick:Vs=>{a.req=JSON.parse(JSON.stringify(d)),a.modal.delete=!0},class:"material-icons-outlined text-red-500 !text-xl"}," delete ",8,ea)])):(b(),c("span",ta,"-"))]),_:1},8,["items"])]),_:1}),y(C,{modelValue:a.modal.save,"onUpdate:modelValue":m[4]||(m[4]=d=>a.modal.save=d)},{default:o(()=>[y(v,{title:a.isMinus?"Ambil Tabungan":"Tambah Tabungan",class:"w-500px max-w-full"},{default:o(()=>[y(I,{onSubmit:l,class:"form-field",values:a.req,rules:x.value},{default:o(()=>[s("div",null,[na,T(s("select",{"onUpdate:modelValue":m[2]||(m[2]=d=>a.req.status_tabungan=d)},oa,512),[[U,a.req.status_tabungan]])]),s("div",ra," Saldo: "+i(_(h)(p.value)),1),da,T(s("input",{type:"number",placeholder:"Masukkan Jumlah Transaksi","onUpdate:modelValue":m[3]||(m[3]=d=>a.req.jumlah_bayar=d)},null,512),[[L,a.req.jumlah_bayar]]),s("div",ua," Perubahan Saldo: "+i(_(h)(u.value)),1),_a]),_:1},8,["values","rules"])]),_:1},8,["title"])]),_:1},8,["modelValue"]),y(C,{modelValue:a.modal.delete,"onUpdate:modelValue":m[5]||(m[5]=d=>a.modal.delete=d)},{default:o(()=>[y(v,{title:"Hapus Tabungan",class:"max-w-full w-550px"},{default:o(()=>[s("form",{onSubmit:P(e,["prevent"]),class:"form-field"},ha,40,ba)]),_:1})]),_:1},8,["modelValue"])],64))}},pa={class:"relative"},ga=["onSubmit"],fa=["placeholder","max","disabled"],wa=s("button",{type:"submit",class:"hidden"},null,-1),va={class:"bg-white rounded inline-block px-1"},xa=["onClick"],ja={class:"mt-4"},ka={class:"flex mb-4 pb-4 border-b items-center justify-center"},$a=["onSubmit"],qa={class:"rounded-t p-4 bg-gray-100"},Sa={class:"form-field"},Ta={class:"oveflow-x-auto bg-white mb-4 rounded p-2 relative"},Na={key:0,class:"absolute bottom-5 px-4 right-5 transform p-1 -rotate-12 border-2 border-purple-500 text-purple-500 rounded"},Da=s("td",null,"Tanggungan",-1),Pa=s("td",{class:"px-2"},":",-1),Va=s("td",null,"Terbayar",-1),Ca=s("td",{class:"px-2"},":",-1),Ma={class:"text-green-500"},La=s("td",null,"Kekurangan",-1),Ba=s("td",{class:"px-2"},":",-1),Oa={class:"text-red-500"},Ua=s("label",{for:""},"Nominal",-1),Aa=["max","disabled"],Ja=s("div",{class:"rounded-b text-center py-1 px-4 text-blue-500"},[s("button",{type:"submit"},"+ TAMBAH")],-1),Ia={key:0,class:"bg-red-100 mb-4 border rounded border-red-500 text-red-500 p-3 form-field"},Ea={class:"lg:flex"},Ha=s("div",{class:"w-full flex items-center"},"Anda yakin menghapus data terpilih?",-1),Ka={class:"w-full lg:text-right text-center lg:mt-0 mt-4"},Ra={key:1,class:"flex flex-nowrap overflow-x-auto pb-3 gap-3"},Wa={class:"rounded shadow"},Fa={class:"rounded-t p-4 py-6 bg-blue-500 text-white lg:w-350px w-280px"},za={text:"2xl center",class:"mb-3 border-b pb-3 border-white"},Ga={class:"flex text-sm"},Xa={class:"flex-1"},Qa={class:"flex-1 text-right"},Ya={class:"rounded-b p-1 text-center flex justify-between px-4 items-center h-10"},Za=["href"],as=["onClick"],ss={key:2},es=s("div",{class:"p-4 border border-gray-100 text-center"},"Data tidak tersedia.",-1),ts=[es],ns={__name:"biaya-lain",props:["siswa"],setup(N){const r=N,a=M({isLoading:!1,isDelete:!1,data:{items:[]},biaya_lain:[],terbayar:[],modal:{save:!1},req:{id:"",siswa_nisn:"",user_id:k.id,biaya_lain_id:"",jumlah_bayar:""},delete:{},item:{}});function p(){w.get("/pembayaran/biaya-lain",{_siswa_nisn:r.siswa.nisn,_biaya_lain_id:a.req.biaya_lain_id}).then(t=>t.json()).then(t=>{a.data.items=t})}function u(){w.get("/pembayaran/biaya-lain",{_siswa_nisn:r.siswa.nisn}).then(t=>t.json()).then(t=>{a.terbayar=[],t.forEach(l=>{a.terbayar[l.biaya_lain_id]?a.terbayar[l.biaya_lain_id]+=l.jumlah_bayar:a.terbayar[l.biaya_lain_id]=l.jumlah_bayar}),a.isLoading=!1})}function x(){a.isLoading=!0,r.siswa.nisn&&w.get("/biaya-lain",{_jurusan_kode:r.siswa.jurusan.kode,_kelas:r.siswa.kelas}).then(t=>t.json()).then(t=>{a.biaya_lain=t,u()}).catch(t=>{f(t)})}function j(t={},l=!1){l&&l(),w.post("/pembayaran/biaya-lain",a.req).then(e=>e.json()).then(e=>{new Promise(n=>{f("pembayaran berhasil disimpan"),a.req.max_jumlah_bayar-=a.req.jumlah_bayar,a.req.jumlah_bayar="",t&&(t[0].value=""),n(!0)}).then(()=>{x(),p(),H(e.print_url)})}).catch(e=>f(e,"bg-red-400"))}function $(){const t=a.delete;w.delete("/pembayaran/biaya-lain/"+t.id).then(l=>l.json()).then(l=>{f("pembayaran berhasil dihapus"),a.req.max_jumlah_bayar+=t.jumlah_bayar,a.req.jumlah_bayar="",a.isDelete=!1,x(),p()}).catch(l=>f(l,"bg-red-400"))}return B(()=>{r.siswa&&x()}),(t,l)=>(b(),c(V,null,[y(v,{title:"Biaya Lain"},{default:o(()=>[s("div",pa,[a.isLoading?(b(),A(Q,{key:0})):S("",!0),y(J,{class:"mt-3",keys:{Pembayaran:"jenis",Jumlah:"jumlah_bayar",Diskon:"diskon",Total_Bayar:"total_bayar",Terbayar:"terbayar",Belum_Terbayar:"belum_terbayar",Bayar:"bayar",Opsi:"opsi"},items:a.biaya_lain},{jumlah_bayar:o(({item:e})=>[g(i(_(h)(e.jumlah_bayar)),1)]),diskon:o(()=>[g(i(r.siswa.diskon_biaya_lain)+" % ",1)]),total_bayar:o(({item:e})=>[g(i(_(h)(e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100)),1)]),terbayar:o(({item:e})=>[g(i(_(h)(a.terbayar[e.id]?a.terbayar[e.id]:0)),1)]),belum_terbayar:o(({item:e})=>[g(i(_(h)(e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100-(a.terbayar[e.id]?a.terbayar[e.id]:0))),1)]),bayar:o(({item:e})=>[s("form",{onSubmit:P(n=>{j(n.currentTarget,()=>{a.req.biaya_lain_id=e.id,a.req.siswa_nisn=r.siswa.nisn,a.req.jumlah_bayar=n.currentTarget[0].value})},["prevent"]),class:"inline"},[s("input",{type:"number",placeholder:_(h)(e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100-(a.terbayar[e.id]?a.terbayar[e.id]:0)),min:"1",max:e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100-(a.terbayar[e.id]?a.terbayar[e.id]:0),disabled:e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100-(a.terbayar[e.id]?a.terbayar[e.id]:0)<=0,required:"",class:"h-10 rounded border-gray-100 text-gray-500 shadow outline-none w-120px disabled:bg-gray-100 focus:invalid:ring-2 focus:invalid:ring-red-500"},null,8,fa),wa],40,ga)]),opsi:o(({item:e})=>[s("div",va,[s("button",{onClick:n=>{a.item=JSON.parse(JSON.stringify(e)),a.modal.save=!0,a.req.jumlah_bayar="",a.req.biaya_lain_id=e.id,a.req.siswa_nisn=r.siswa.nisn,a.req.max_jumlah_bayar=e.jumlah_bayar-e.jumlah_bayar*r.siswa.diskon_biaya_lain/100-(a.terbayar[e.id]?a.terbayar[e.id]:0),a.data.items=[],p()},class:"material-icons-outlined text-blue-500 !text-xl"}," edit ",8,xa)])]),_:1},8,["items"])])]),_:1}),y(C,{modelValue:a.modal.save,"onUpdate:modelValue":l[2]||(l[2]=e=>a.modal.save=e)},{default:o(()=>[y(v,{class:"w-900px max-w-full",title:"Data Pembayaran"},{default:o(()=>[s("div",ja,[s("div",ka,[s("form",{onSubmit:P(j,["prevent"]),class:"rounded shadow w-full",lg:"w-1/2"},[s("div",qa,[s("div",Sa,[s("div",Ta,[a.req.max_jumlah_bayar<=0?(b(),c("div",Na," LUNAS ")):S("",!0),s("table",null,[s("tr",null,[Da,Pa,s("td",null,i(a.item.jenis),1)]),s("tr",null,[Va,Ca,s("td",Ma,i(_(h)(a.terbayar[a.item.id]?a.terbayar[a.item.id]:0)),1)]),s("tr",null,[La,Ba,s("td",Oa,i(_(h)(a.req.max_jumlah_bayar)),1)])])]),Ua,T(s("input",{type:"number","onUpdate:modelValue":l[0]||(l[0]=e=>a.req.jumlah_bayar=e),placeholder:"Masukkan Nominal",min:"1",max:a.req.max_jumlah_bayar,disabled:a.req.max_jumlah_bayar<=0,required:""},null,8,Aa),[[L,a.req.jumlah_bayar]])])]),Ja],40,$a)]),a.isDelete?(b(),c("div",Ia,[s("div",Ea,[Ha,s("div",Ka,[s("button",{onClick:l[1]||(l[1]=e=>a.isDelete=!1),class:"!bg-gray-500 mr-2"},"Batal"),s("button",{onClick:$,class:"!bg-red-500"},"Hapus")])])])):S("",!0),a.data.items.length?(b(),c("div",Ra,[(b(!0),c(V,null,E(a.data.items,e=>(b(),c("div",Wa,[s("div",Fa,[s("div",za,i(_(h)(e.jumlah_bayar)),1),s("div",Ga,[s("div",Xa,i(e.user.nama),1),s("div",Qa,i(_(O)(e.created_at)),1)])]),s("div",Ya,[s("a",{href:e.print_url,target:"_blank",class:"mr-2 text-sm"},"PRINT",8,Za),e.user_id==_(k).id||_(k).role=="1"?(b(),c("button",{key:0,onClick:n=>{a.isDelete=!0,a.delete=e},class:"material-icons-outlined text-red-500 !text-xl"}," delete ",8,as)):S("",!0)])]))),256))])):(b(),c("div",ss,ts))])]),_:1})]),_:1},8,["modelValue"])],64))}},is=s("div",{class:"mb-4 pb-2 border-b text-xl"},"Data Pembayaran",-1),ls={class:"flex -m-2 flex-wrap"},os={class:"lg:w-2/5 p-2 w-full"},rs=["onSubmit"],ds=s("button",{type:"submit",class:"w-full"},"Cari",-1),us={key:0,class:"lg:w-3/5 p-2 w-full"},_s={class:"overflow-x-auto"},bs={class:"whitespace-nowrap"},ms=s("td",null,"NISN",-1),cs=s("td",{class:"px-2"},":",-1),hs=s("td",null,"Nama",-1),ys=s("td",{class:"px-2"},":",-1),ps=s("td",null,"Kelas",-1),gs=s("td",{class:"px-2"},":",-1),fs=s("td",null,"Potongan",-1),ws=s("td",{class:"px-2"},":",-1),vs={key:1,class:"lg:w-3/5 p-2 w-full"},xs=s("div",{class:"text-center"},"Siswa tidak ditemukan.",-1),js={key:0},ks=s("div",{class:"pb-4 border-b mb-4"},null,-1),$s={class:"w-full form-field",lg:"w-1/2"},qs=s("option",{disabled:"",value:""},"Pilih Tanggungan",-1),Ss=s("option",{value:"spp"},"SPP",-1),Ts=s("option",{value:"biayaLain"},"Biaya Lain",-1),Ns=s("option",{value:"tabungan"},"Tabungan",-1),Ds=[qs,Ss,Ts,Ns],Ps={class:"custom-main-admin"},Us={__name:"pembayaran",setup(N){const r=K(),a=R(),p=W(r.query.siswa_nisn),u=M({siswa:{items:[],item:{jurusan:{}}},siswa_nisn:p.value,tanggungan:"spp"}),x={spp:X,biayaLain:ns,tabungan:ya};function j(){w.get("/siswa/by-nisn",{nisn:p.value}).then(t=>t.json()).then(t=>{u.siswa.item=t})}function $(){a.push("/data/pembayaran?siswa_nisn="+u.siswa_nisn)}return F(()=>r.query.siswa_nisn,t=>{p.value=u.siswa_nisn=t||"",t&&j()}),z(()=>{p.value&&j()}),(t,l)=>(b(),c(V,null,[is,s("div",ls,[s("div",os,[y(v,null,{default:o(()=>[s("form",{onSubmit:P($,["prevent"]),class:"form-field"},[T(s("input",{type:"text",required:"",placeholder:"Masukkan NISN","onUpdate:modelValue":l[0]||(l[0]=e=>u.siswa_nisn=e)},null,512),[[L,u.siswa_nisn]]),ds],40,rs)]),_:1})]),u.siswa.item.nisn?(b(),c("div",us,[y(v,{title:"Detail Siswa",class:"!bg-gradient-to-bl from-blue-400 to-blue-500 !text-white"},{default:o(()=>[s("div",_s,[s("table",bs,[s("tr",null,[ms,cs,s("td",null,i(decodeURIComponent(u.siswa.item.nisn)),1)]),s("tr",null,[hs,ys,s("td",null,i(u.siswa.item.nama),1)]),s("tr",null,[ps,gs,s("td",null,i(u.siswa.item.kelas)+" "+i(u.siswa.item.jurusan.kode)+" "+i(u.siswa.item.rombel),1)]),s("tr",null,[fs,ws,s("td",null," SPP ("+i(u.siswa.item.diskon_spp)+"%) ~ Biaya Lain ("+i(u.siswa.item.diskon_biaya_lain)+"%) ",1)])])])]),_:1})])):(b(),c("div",vs,[y(v,{title:"Detail Siswa",class:"!bg-blue-100"},{default:o(()=>[xs]),_:1})]))]),u.siswa.item.nisn?(b(),c("div",js,[ks,s("div",$s,[T(s("select",{"onUpdate:modelValue":l[1]||(l[1]=e=>u.tanggungan=e)},Ds,512),[[U,u.tanggungan]])]),s("div",Ps,[(b(),A(G(x[u.tanggungan]),{siswa:u.siswa.item},null,8,["siswa"]))])])):S("",!0)],64))}};export{Us as default};
