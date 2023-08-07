import{r as C,e as u,z as X,o as J,a as m,c as _,d as o,w as n,_ as h,m as q,F as v,b as t,h as f,n as r,i,p as k,u as x,t as d,v as b,q as g,k as $,s as w,f as E,j as O,x as V,A as B}from"./index.7cbdcbda.js";import{_ as D}from"./Table.d38c6265.js";import{_ as M}from"./Pagination.12989abc.js";import{L as T}from"./Loading.3a98fd87.js";const A=t("div",{class:"mb-4 pb-2 border-b text-xl"},"Data Siswa",-1),F={class:"form-field"},K={class:"form-field"},L=t("option",{value:"5"},"5",-1),P=t("option",{value:"10"},"10",-1),z=t("option",{value:"20"},"20",-1),H=t("option",{value:"50"},"50",-1),R=t("option",{value:"100"},"100",-1),G=[L,P,z,H,R],Q=t("option",{value:""},"Semua Kelas",-1),W=t("option",{value:"X"},"X",-1),Y=t("option",{value:"XI"},"XI",-1),Z=t("option",{value:"XII"},"XII",-1),ee=t("option",{value:"Alumni"},"Alumni",-1),te=[Q,W,Y,Z,ee],se=t("option",{value:""},"Semua Jurusan",-1),ae={class:"bg-white rounded inline-block px-1"},le=["onClick"],oe=["onClick"],ne={class:"flex items-center justify-end"},ie=t("label",{for:""},"NISN",-1),re=t("label",{for:""},"Nama",-1),de=t("label",{for:""},"Kelas",-1),ue=t("option",{value:""},"Pilih Kelas",-1),me=["value"],pe=t("label",{for:""},"Jurusan",-1),_e=t("option",{value:""},"Pilih Jurusan",-1),fe=["value"],be=t("label",{for:""},"Rombel",-1),ce={class:"grid grid-cols-2 gap-3"},he=t("label",{for:""},"Diskon SPP",-1),ke=t("label",{for:""},"Diskon Biaya Lain",-1),ve=t("div",{class:"text-right mt-5"},[t("button",{type:"submit"},"Simpan")],-1),ge=["onSubmit"],qe=t("div",{class:"mt-5 text-right"},[t("button",{class:"!bg-red-500",type:"submit"},"Hapus")],-1),xe=["onSubmit"],ye=t("label",{for:""},"File",-1),we={class:"mt-3 text-center"},Ve=["href"],Ie=t("div",{class:"mt-5 text-right"},[t("button",{class:"!bg-green-500",type:"submit"},"Import")],-1),Xe={__name:"siswa",setup(Se){const e=C({isEdit:!1,isImport:!1,modal:{save:!1,delete:!1,import:!1},data:{items:[],totalCount:0},jurusan:[],filter:{_limit:10,_page:1,_jurusan_kode:"",_kelas:"",q:""},import:{file:""},req:{nisn:"",nama:"",kelas:"",jurusan_kode:"",rombel:"1",diskon_spp:0,diskon_biaya_lain:0},fileImport:""}),I={nisn:u.string().min(8).required(),nama:u.string().required(),kelas:u.string().required(),jurusan_kode:u.string().required(),rombel:u.number().required(),diskon_spp:u.number().min(0).max(100),diskon_biaya_lain:u.number().min(0).max(100)};function y(){e.req={nisn:"",nama:"",kelas:"",jurusan_kode:"",rombel:"1",diskon_spp:0,diskon_biaya_lain:0}}function p(){y(),f.get("/siswa",e.filter).then(l=>(e.data.totalCount=parseInt(l.headers.get("X-Total-Count")),e.fileImport=l.headers.get("X-Import-File"),l.json())).then(l=>{e.data.items=l}).catch(l=>{r(l,"bg-red-400")})}function S(){e.isEdit?f.put("/siswa/by-nisn",e.req).then(l=>l.json()).then(l=>{e.modal.save=!1,r("data berhasil diedit"),p()}).catch(l=>{r(l,"bg-red-400")}):f.post("/siswa",e.req).then(l=>l.json()).then(l=>{e.modal.save=!1,r("data berhasil ditambah"),p()}).catch(l=>{r(l,"bg-red-400")})}function j(){f.delete("/siswa/by-nisn?old_nisn="+e.req.old_nisn).then(l=>l.json()).then(l=>{e.modal.delete=!1,r("data berhasil dihapus"),p()}).catch(l=>{r(l,"bg-red-400")})}function N(){f.get("/jurusan").then(l=>l.json()).then(l=>{e.jurusan=l})}function U(){e.isImport=!0,f.post("/siswa/import",e.import).then(l=>l.json()).then(l=>{e.modal.import=!1,r(l),p()}).catch(l=>r(l,"bg-red-400")).finally(()=>e.isImport=!1)}return X(()=>JSON.parse(JSON.stringify(e.filter)),(l,a)=>{l._page==a._page&&(e.filter._page=1),p()}),J(()=>{p(),N()}),(l,a)=>(m(),_(v,null,[A,o(h,{class:"mb-4"},{default:n(()=>[t("div",F,[t("button",{onClick:a[0]||(a[0]=s=>{e.isEdit=!1,y(),e.modal.save=!0}),class:"mr-2"}," + Tambah "),t("button",{onClick:a[1]||(a[1]=s=>e.modal.import=!0),class:"!bg-green-500"},"Import")])]),_:1}),o(h,{class:"mb-4"},{default:n(()=>[t("div",K,[i(t("select",{class:"!w-20 mr-2","onUpdate:modelValue":a[2]||(a[2]=s=>e.filter._limit=s)},G,512),[[k,e.filter._limit]]),i(t("select",{class:"!w-40 mr-2","onUpdate:modelValue":a[3]||(a[3]=s=>e.filter._kelas=s)},te,512),[[k,e.filter._kelas]]),i(t("select",{class:"!w-46 mr-2","onUpdate:modelValue":a[4]||(a[4]=s=>e.filter._jurusan_kode=s)},[se,(m(!0),_(v,null,x(e.jurusan,s=>(m(),_("option",null,d(s.kode),1))),256))],512),[[k,e.filter._jurusan_kode]]),i(t("input",{"onUpdate:modelValue":a[5]||(a[5]=s=>e.filter.q=s),type:"text",class:"!lg:w-1/2",placeholder:"Cari..."},null,512),[[b,e.filter.q,void 0,{lazy:!0}]])]),o(D,{keys:{NISN:"nisn",Nama:"nama",Kelas:"kelas",Opsi:"opsi"},items:e.data.items,class:"mt-3"},{kelas:n(({item:s})=>[g(d(s.kelas)+" "+d(s.jurusan.kode)+" "+d(s.rombel),1)]),opsi:n(({item:s})=>[t("div",ae,[t("button",{onClick:c=>{e.req=JSON.parse(JSON.stringify(s)),e.req.old_nisn=e.req.nisn,e.isEdit=!0,e.modal.save=!0},class:"material-icons-outlined text-blue-500 !text-xl"}," edit ",8,le),t("button",{onClick:c=>{e.req=JSON.parse(JSON.stringify(s)),e.req.old_nisn=e.req.nisn,e.modal.delete=!0},class:"material-icons-outlined text-red-500 !text-xl"}," delete ",8,oe)])]),_:1},8,["items"]),t("div",ne,[o(M,{"total-count":e.data.totalCount,modelValue:e.filter._page,"onUpdate:modelValue":a[6]||(a[6]=s=>e.filter._page=s),limit:e.filter._limit},null,8,["total-count","modelValue","limit"])])]),_:1}),o(q,{modelValue:e.modal.save,"onUpdate:modelValue":a[14]||(a[14]=s=>e.modal.save=s)},{default:n(()=>[o(h,{title:e.isEdit?"Edit Siswa":"Tambah Siswa",class:"w-550px max-w-full"},{default:n(()=>[o($,{class:"form-field",onSubmit:S,values:e.req,rules:I},{default:n(()=>[ie,i(t("input",{type:"text",placeholder:"Masukkan NISN","onUpdate:modelValue":a[7]||(a[7]=s=>e.req.nisn=s)},null,512),[[b,e.req.nisn]]),re,i(t("input",{type:"text",placeholder:"Masukkan Nama","onUpdate:modelValue":a[8]||(a[8]=s=>e.req.nama=s)},null,512),[[b,e.req.nama]]),de,i(t("select",{"onUpdate:modelValue":a[9]||(a[9]=s=>e.req.kelas=s)},[ue,(m(),_(v,null,x(["X","XI","XII","Alumni"],s=>t("option",{value:s},d(s),9,me)),64))],512),[[k,e.req.kelas]]),pe,i(t("select",{"onUpdate:modelValue":a[10]||(a[10]=s=>e.req.jurusan_kode=s)},[_e,(m(!0),_(v,null,x(e.jurusan,s=>(m(),_("option",{value:s.kode},d(s.kode)+" ("+d(s.nama)+") ",9,fe))),256))],512),[[k,e.req.jurusan_kode]]),be,i(t("input",{type:"number","onUpdate:modelValue":a[11]||(a[11]=s=>e.req.rombel=s),placeholder:"Rombongan Belajar"},null,512),[[b,e.req.rombel]]),t("div",ce,[t("div",null,[he,i(t("input",{type:"number","onUpdate:modelValue":a[12]||(a[12]=s=>e.req.diskon_spp=s)},null,512),[[b,e.req.diskon_spp]])]),t("div",null,[ke,i(t("input",{type:"number","onUpdate:modelValue":a[13]||(a[13]=s=>e.req.diskon_biaya_lain=s)},null,512),[[b,e.req.diskon_biaya_lain]])])]),ve]),_:1},8,["values"])]),_:1},8,["title"])]),_:1},8,["modelValue"]),o(q,{modelValue:e.modal.delete,"onUpdate:modelValue":a[15]||(a[15]=s=>e.modal.delete=s)},{default:n(()=>[o(h,{title:"Hapus Siswa",class:"max-w-full w-550px"},{default:n(()=>[t("form",{onSubmit:w(j,["prevent"]),class:"form-field"},[t("p",null,[g(" Anda yakin akan menghapus siswa dengan nama "),t("strong",null,d(e.req.nama),1),g("? ")]),qe],40,ge)]),_:1})]),_:1},8,["modelValue"]),o(q,{modelValue:e.modal.import,"onUpdate:modelValue":a[17]||(a[17]=s=>e.modal.import=s)},{default:n(()=>[o(h,{title:"Import Siswa",class:"max-w-full w-550px"},{default:n(()=>[t("form",{onSubmit:w(U,["prevent"]),class:"form-field relative"},[e.isImport?(m(),E(T,{key:0})):O("",!0),ye,t("input",{type:"file",required:"",class:"border border-gray-100 w-full rounded p-2 bg-white",onChange:a[16]||(a[16]=s=>{V(B)(s.currentTarget.files[0]).then(c=>e.import.file=c).catch(c=>V(r)(c,"bg-red-400"))})},null,32),t("div",we,[g(" Unduh format file "),t("a",{target:"_blank",href:e.fileImport,class:"text-blue-500"},"disini",8,Ve)]),Ie],40,xe)]),_:1})]),_:1},8,["modelValue"])],64))}};export{Xe as default};