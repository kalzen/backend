import{m as u,j as s,L as f}from"./app-CohZrbNC.js";import{I as t}from"./input-error-Cren3OXb.js";import{B as h}from"./app-logo-icon-s7PxNeiK.js";import{I as i}from"./input-ClZvPfjT.js";import{L as m}from"./label-DO9WPztj.js";import{A as x,L as j}from"./auth-layout-w6yPDSxm.js";import"./index-CfEeIEU7.js";function L({token:d,email:n}){const{data:e,setData:o,post:p,processing:l,errors:r,reset:c}=u({token:d,email:n,password:"",password_confirmation:""}),w=a=>{a.preventDefault(),p(route("password.store"),{onFinish:()=>c("password","password_confirmation")})};return s.jsxs(x,{title:"Reset password",description:"Please enter your new password below",children:[s.jsx(f,{title:"Reset password"}),s.jsx("form",{onSubmit:w,children:s.jsxs("div",{className:"grid gap-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(m,{htmlFor:"email",children:"Email"}),s.jsx(i,{id:"email",type:"email",name:"email",autoComplete:"email",value:e.email,className:"mt-1 block w-full",readOnly:!0,onChange:a=>o("email",a.target.value)}),s.jsx(t,{message:r.email,className:"mt-2"})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(m,{htmlFor:"password",children:"Password"}),s.jsx(i,{id:"password",type:"password",name:"password",autoComplete:"new-password",value:e.password,className:"mt-1 block w-full",autoFocus:!0,onChange:a=>o("password",a.target.value),placeholder:"Password"}),s.jsx(t,{message:r.password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(m,{htmlFor:"password_confirmation",children:"Confirm password"}),s.jsx(i,{id:"password_confirmation",type:"password",name:"password_confirmation",autoComplete:"new-password",value:e.password_confirmation,className:"mt-1 block w-full",onChange:a=>o("password_confirmation",a.target.value),placeholder:"Confirm password"}),s.jsx(t,{message:r.password_confirmation,className:"mt-2"})]}),s.jsxs(h,{type:"submit",className:"mt-4 w-full",disabled:l,children:[l&&s.jsx(j,{className:"h-4 w-4 animate-spin"}),"Reset password"]})]})})]})}export{L as default};
