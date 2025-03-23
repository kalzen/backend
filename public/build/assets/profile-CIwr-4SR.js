import{r as b,m as j,j as e,K as C,L as y,$ as N}from"./app-DUoLdvnI.js";import{I as p}from"./input-error-BwbzyMER.js";import{B as m}from"./app-logo-icon-B8ijC97A.js";import{I as x}from"./input-Cww9B_pM.js";import{L as g}from"./label-CZGqZ-P5.js";import{H as v}from"./heading-small-B2tI4bcv.js";import{D as k,f as w,a as D,c as F,d as S,e as I,g as T}from"./dialog-DUxQ711L.js";import{A as L}from"./app-layout-CyD3s8AU.js";import{S as E}from"./layout-B_vQLAuD.js";import{C as H,a as M,b as B,c as X,d as $,e as q}from"./card-DloEZqPS.js";import{I as A}from"./image-uploader-4xJW3Fcg.js";import{z as G}from"./transition-brmHZfHb.js";import"./index-D05ax1I2.js";import"./index-DIzOG9aE.js";import"./helpers-DTePWeAw.js";import"./PencilIcon-ljq4KGqE.js";function K(){const o=b.useRef(null),{data:h,setData:r,delete:t,processing:n,reset:l,errors:s,clearErrors:c}=j({password:""}),u=i=>{i.preventDefault(),t(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>d(),onError:()=>{var a;return(a=o.current)==null?void 0:a.focus()},onFinish:()=>l()})},d=()=>{c(),l()};return e.jsxs("div",{className:"space-y-6",children:[e.jsx(v,{title:"Xóa tài khoản",description:"Xóa tài khoản của bạn và tất cả các tài nguyên liên quan"}),e.jsxs("div",{className:"space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10",children:[e.jsxs("div",{className:"relative space-y-0.5 text-red-600 dark:text-red-100",children:[e.jsx("p",{className:"font-medium",children:"Cảnh báo"}),e.jsx("p",{className:"text-sm",children:"Vui lòng cẩn thận, hành động này không thể hoàn tác."})]}),e.jsxs(k,{children:[e.jsx(w,{asChild:!0,children:e.jsx(m,{variant:"destructive",children:"Xóa tài khoản"})}),e.jsxs(D,{children:[e.jsx(F,{children:"Bạn có chắc chắn muốn xóa tài khoản của mình không?"}),e.jsx(S,{children:"Khi tài khoản của bạn bị xóa, tất cả tài nguyên và dữ liệu của nó cũng sẽ bị xóa vĩnh viễn. Vui lòng nhập mật khẩu của bạn để xác nhận rằng bạn muốn xóa vĩnh viễn tài khoản của mình."}),e.jsxs("form",{className:"space-y-6",onSubmit:u,children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(g,{htmlFor:"password",className:"sr-only",children:"Mật khẩu"}),e.jsx(x,{id:"password",type:"password",name:"password",ref:o,value:h.password,onChange:i=>r("password",i.target.value),placeholder:"Mật khẩu",autoComplete:"current-password"}),e.jsx(p,{message:s.password})]}),e.jsxs(I,{className:"gap-2",children:[e.jsx(T,{asChild:!0,children:e.jsx(m,{variant:"secondary",onClick:d,children:"Hủy"})}),e.jsx(m,{variant:"destructive",disabled:n,asChild:!0,children:e.jsx("button",{type:"submit",children:"Xóa tài khoản"})})]})]})]})]})]})]})}const P=[{title:"Cài đặt hồ sơ",href:route("profile.edit")}];function ne({mustVerifyEmail:o,status:h}){const{auth:r}=C().props,{data:t,setData:n,post:l,errors:s,processing:c,recentlySuccessful:u}=j({name:r.user.name,email:r.user.email,avatar:null}),d=a=>{a.preventDefault(),console.log("Form data before submit:",t),l(route("profile.update"),{preserveScroll:!0,forceFormData:!0,onError:f=>{console.error("Form errors:",f)},onSuccess:()=>{console.log("Form submission successful")}})},i=a=>{n("avatar",a)};return e.jsxs(L,{breadcrumbs:P,children:[e.jsx(y,{title:"Cài đặt hồ sơ"}),e.jsx(E,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(v,{title:"Thông tin hồ sơ",description:"Cập nhật thông tin cá nhân của bạn"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-6",children:[e.jsx(H,{className:"md:col-span-2",children:e.jsxs("form",{onSubmit:d,children:[e.jsxs(M,{children:[e.jsx(B,{children:"Thông tin cơ bản"}),e.jsx(X,{children:"Cập nhật tên và địa chỉ email của bạn"})]}),e.jsxs($,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(g,{htmlFor:"name",children:"Tên"}),e.jsx(x,{id:"name",name:"name",className:`mt-1 block w-full ${s.name?"border-destructive":""}`,value:t.name,onChange:a=>n("name",a.target.value),required:!0,autoComplete:"name",placeholder:"Họ và tên"}),e.jsx(p,{message:s.name})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(g,{htmlFor:"email",children:"Địa chỉ email"}),e.jsx(x,{id:"email",name:"email",type:"email",className:`mt-1 block w-full ${s.email?"border-destructive":""}`,value:t.email,onChange:a=>n("email",a.target.value),required:!0,autoComplete:"username",placeholder:"Địa chỉ email"}),e.jsx(p,{message:s.email})]}),o&&r.user.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-muted-foreground -mt-4 text-sm",children:["Địa chỉ email của bạn chưa được xác minh."," ",e.jsx(N,{href:route("verification.send"),method:"post",as:"button",className:"text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500",children:"Nhấn vào đây để gửi lại email xác minh."})]}),h==="verification-link-sent"&&e.jsx("div",{className:"mt-2 text-sm font-medium text-green-600",children:"Một liên kết xác minh mới đã được gửi đến địa chỉ email của bạn."})]})]}),e.jsxs(q,{className:"flex items-center justify-end gap-4 mt-6",children:[e.jsx(m,{type:"submit",disabled:c,children:c?"Đang lưu...":"Lưu thay đổi"}),e.jsx(G,{show:u,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-neutral-600",children:"Đã lưu"})})]})]})}),e.jsx(A,{id:"avatar",value:r.user.avatar_url,onChange:i,title:"Ảnh đại diện",description:"Cập nhật ảnh đại diện của bạn",error:s.avatar,helpText:"Cho phép các định dạng JPG, GIF hoặc PNG. Kích thước tối đa 2MB.",placeholder:"Chọn ảnh để cập nhật avatar",className:"w-32 h-32 rounded-full",previewClassName:"w-32 h-32 rounded-full"})]}),e.jsx(K,{})]})})]})}export{ne as default};
