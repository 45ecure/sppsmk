import{r as f,e as n,o as k,a as u,f as h,w as p,_ as b,h as m,g,n as d,d as w,i as o,v as l,b as t,c as v,j as x,k as y}from"./index.7cbdcbda.js";const U=t("label",{for:""},"Username",-1),V=t("label",{for:""},"Password",-1),M={key:0,class:"hint mb-3"},N=t("label",{for:""},"Nama",-1),j=t("label",{for:""},"Role",-1),B=t("div",{class:"text-right mt-5"},[t("button",{type:"submit"},"Simpan")],-1),R={__name:"akun",setup(C){const e=f({req:{id:"",username:"",password:"",nama:"",role:""}}),c={username:n.string().min(3).required(),password:n.string().optional(),nama:n.string().required(),role:n.string().required()};function _(){e.req={id:"",username:"",password:"",nama:"",role:""}}function i(){_(),m.get("/user/"+g.id).then(a=>a.json()).then(a=>{e.req=a,e.req.password=""}).catch(a=>{d(a,"bg-red-400")})}function q(){m.put("/user/"+e.req.id,e.req).then(a=>a.json()).then(a=>{d("data berhasil diedit"),i()}).catch(a=>{d(a,"bg-red-400")})}return k(()=>{i()}),(a,s)=>(u(),h(b,{title:"Akun User"},{default:p(()=>[w(y,{class:"form-field",onSubmit:q,values:e.req,rules:c},{default:p(()=>[U,o(t("input",{type:"text",placeholder:"Masukkan Username","onUpdate:modelValue":s[0]||(s[0]=r=>e.req.username=r)},null,512),[[l,e.req.username]]),V,o(t("input",{type:"password",placeholder:"Masukkan Password","onUpdate:modelValue":s[1]||(s[1]=r=>e.req.password=r)},null,512),[[l,e.req.password]]),e.req.id?(u(),v("div",M,"Kosongkan jika tidak ingin mengganti password")):x("",!0),N,o(t("input",{type:"text",placeholder:"Masukkan Nama","onUpdate:modelValue":s[2]||(s[2]=r=>e.req.nama=r)},null,512),[[l,e.req.nama]]),j,o(t("input",{type:"text",placeholder:"Masukkan Role","onUpdate:modelValue":s[3]||(s[3]=r=>e.req.role_detail=r),disabled:""},null,512),[[l,e.req.role_detail]]),B]),_:1},8,["values"])]),_:1}))}};export{R as default};
