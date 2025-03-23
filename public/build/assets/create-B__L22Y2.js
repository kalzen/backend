import{m as N,r as f,j as e,L as b,$ as C}from"./app-DvYsBOnb.js";import{A as T}from"./app-layout-CuRrIkuq.js";import{B as x}from"./app-logo-icon-DPPA0oKt.js";import{C as t,a as c,b as d,c as o,d as h}from"./card-Buo9e3DY.js";import{I as l}from"./input-DO2SqQaT.js";import{L as r}from"./label-ChzbYvSc.js";import{T as y}from"./textarea-CUjljg_S.js";import{S as w}from"./switch-B1qETeOz.js";import{T as k,a as F,b as p,c as j}from"./tabs-DPbHdBLS.js";import{I as L}from"./image-uploader-BUf2aGQO.js";import{F as _}from"./ArrowLeftIcon-BXvSk9KZ.js";import"./index-C2LM2ONO.js";import"./index-CQTslqUg.js";import"./index-CDU8Fn28.js";import"./PencilIcon-DTIk7Vo1.js";function Q(){const{data:i,setData:a,post:v,processing:m,errors:n}=N({name:"",position:"",bio:"",email:"",phone:"",facebook:"",twitter:"",linkedin:"",instagram:"",is_active:!0,sort_order:0,avatar:null}),[g,I]=f.useState(null),u=s=>{s.preventDefault(),v(route("members.store"))};return e.jsxs(T,{children:[e.jsx(b,{title:"Thêm Thành Viên Mới"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(x,{variant:"outline",size:"sm",asChild:!0,className:"mr-4",children:e.jsxs(C,{href:route("members.index"),children:[e.jsx(_,{className:"h-4 w-4 mr-2"}),"Quay lại"]})}),e.jsx("h1",{className:"text-2xl font-semibold",children:"Thêm Thành Viên Mới"})]}),e.jsx("form",{onSubmit:u,children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[e.jsxs(t,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Thông Tin Cá Nhân"}),e.jsx(o,{children:"Nhập thông tin cơ bản của thành viên"})]}),e.jsxs(h,{className:"space-y-4",children:[e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs(r,{htmlFor:"name",children:["Họ tên",e.jsx("span",{className:"text-red-500",children:"*"})]}),e.jsx(l,{id:"name",value:i.name,onChange:s=>a("name",s.target.value),placeholder:"Nguyễn Văn A",required:!0}),n.name&&e.jsx("p",{className:"text-sm text-red-600",children:n.name})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"position",children:"Chức vụ"}),e.jsx(l,{id:"position",value:i.position,onChange:s=>a("position",s.target.value),placeholder:"CEO, Giám đốc, Nhân viên,..."}),n.position&&e.jsx("p",{className:"text-sm text-red-600",children:n.position})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"bio",children:"Tiểu sử"}),e.jsx(y,{id:"bio",value:i.bio,onChange:s=>a("bio",s.target.value),placeholder:"Thông tin giới thiệu về thành viên",rows:5}),n.bio&&e.jsx("p",{className:"text-sm text-red-600",children:n.bio})]})})]})]}),e.jsxs(k,{defaultValue:"contact",className:"w-full",children:[e.jsxs(F,{className:"grid w-full grid-cols-2",children:[e.jsx(p,{value:"contact",children:"Thông tin liên hệ"}),e.jsx(p,{value:"social",children:"Mạng xã hội"})]}),e.jsx(j,{value:"contact",className:"mt-4",children:e.jsxs(t,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Thông Tin Liên Hệ"}),e.jsx(o,{children:"Thông tin để liên lạc với thành viên"})]}),e.jsxs(h,{className:"space-y-4",children:[e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"email",children:"Địa chỉ email"}),e.jsx(l,{id:"email",type:"email",value:i.email,onChange:s=>a("email",s.target.value),placeholder:"email@example.com"}),n.email&&e.jsx("p",{className:"text-sm text-red-600",children:n.email})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"phone",children:"Số điện thoại"}),e.jsx(l,{id:"phone",value:i.phone,onChange:s=>a("phone",s.target.value),placeholder:"0912345678"}),n.phone&&e.jsx("p",{className:"text-sm text-red-600",children:n.phone})]})})]})]})}),e.jsx(j,{value:"social",className:"mt-4",children:e.jsxs(t,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"Mạng xã hội"}),e.jsx(o,{children:"Thông tin tài khoản mạng xã hội của thành viên"})]}),e.jsxs(h,{className:"space-y-4",children:[e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"facebook",children:"Facebook"}),e.jsx(l,{id:"facebook",value:i.facebook,onChange:s=>a("facebook",s.target.value),placeholder:"https://facebook.com/username"})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"twitter",children:"Twitter"}),e.jsx(l,{id:"twitter",value:i.twitter,onChange:s=>a("twitter",s.target.value),placeholder:"https://twitter.com/username"})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"linkedin",children:"LinkedIn"}),e.jsx(l,{id:"linkedin",value:i.linkedin,onChange:s=>a("linkedin",s.target.value),placeholder:"https://linkedin.com/in/username"})]})}),e.jsx("div",{className:"grid gap-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"instagram",children:"Instagram"}),e.jsx(l,{id:"instagram",value:i.instagram,onChange:s=>a("instagram",s.target.value),placeholder:"https://instagram.com/username"})]})})]})]})})]})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(L,{id:"avatar",value:g,onChange:s=>a("avatar",s),title:"Hình ảnh đại diện",description:"Tải lên hình ảnh đại diện cho thành viên",error:n.avatar,helpText:"Hình ảnh đại diện nên có tỷ lệ 1:1 và kích thước tối thiểu 300x300px",placeholder:"/assets/avatar-placeholder.png",className:"w-24 h-24 rounded-full",previewClassName:"w-40 h-40"}),e.jsxs(t,{children:[e.jsx(c,{children:e.jsx(d,{children:"Cài đặt"})}),e.jsx(h,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Trạng thái hoạt động"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Hiển thị thành viên trên website"})]}),e.jsx(w,{checked:i.is_active,onCheckedChange:s=>a("is_active",s)})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(r,{htmlFor:"sort_order",children:"Thứ tự sắp xếp"}),e.jsx(l,{id:"sort_order",type:"number",value:i.sort_order,onChange:s=>a("sort_order",parseInt(s.target.value)||0)}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Số nhỏ hơn sẽ hiển thị trước"})]})]})})]}),e.jsx("div",{className:"flex justify-end",children:e.jsx(x,{type:"submit",className:"w-full",disabled:m,children:m?"Đang lưu...":"Thêm thành viên"})})]})]})})]})})]})}export{Q as default};
