import{r as h,m as g,j as s,L as v}from"./app-CohZrbNC.js";import{I as n}from"./input-error-Cren3OXb.js";import{A as _}from"./app-layout-DBCphzGN.js";import{S as k}from"./layout-THPRoKvd.js";import{H as b}from"./heading-small-Bowk6hPm.js";import{B as y}from"./app-logo-icon-s7PxNeiK.js";import{I as i}from"./input-ClZvPfjT.js";import{L as p}from"./label-DO9WPztj.js";import{z as N}from"./transition-8irjton_.js";import"./index-Akk_ocEK.js";import"./index-CfEeIEU7.js";const C=[{title:"Cài đặt mật khẩu",href:"/settings/password"}];function D(){const c=h.useRef(null),d=h.useRef(null),{data:e,setData:t,errors:a,put:w,reset:o,processing:f,recentlySuccessful:x}=g({current_password:"",password:"",password_confirmation:""}),j=r=>{r.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:l=>{var m,u;l.password&&(o("password","password_confirmation"),(m=c.current)==null||m.focus()),l.current_password&&(o("current_password"),(u=d.current)==null||u.focus())}})};return s.jsxs(_,{breadcrumbs:C,children:[s.jsx(v,{title:"Cài đặt hồ sơ"}),s.jsx(k,{children:s.jsxs("div",{className:"space-y-6",children:[s.jsx(b,{title:"Cập nhật mật khẩu",description:"Đảm bảo tài khoản của bạn sử dụng mật khẩu dài và ngẫu nhiên để giữ an toàn"}),s.jsxs("form",{onSubmit:j,className:"space-y-6",children:[s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"current_password",children:"Mật khẩu hiện tại"}),s.jsx(i,{id:"current_password",ref:d,value:e.current_password,onChange:r=>t("current_password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password",placeholder:"Mật khẩu hiện tại"}),s.jsx(n,{message:a.current_password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"password",children:"Mật khẩu mới"}),s.jsx(i,{id:"password",ref:c,value:e.password,onChange:r=>t("password",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"Mật khẩu mới"}),s.jsx(n,{message:a.password})]}),s.jsxs("div",{className:"grid gap-2",children:[s.jsx(p,{htmlFor:"password_confirmation",children:"Xác nhận mật khẩu"}),s.jsx(i,{id:"password_confirmation",value:e.password_confirmation,onChange:r=>t("password_confirmation",r.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password",placeholder:"Xác nhận mật khẩu"}),s.jsx(n,{message:a.password_confirmation})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(y,{disabled:f,children:"Lưu mật khẩu"}),s.jsx(N,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-neutral-600",children:"Đã lưu"})})]})]})]})})]})}export{D as default};
