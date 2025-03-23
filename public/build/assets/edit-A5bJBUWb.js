import{r as o,j as e,L as ve,$ as G,S as y}from"./app-CohZrbNC.js";import{A as fe}from"./app-layout-DBCphzGN.js";import{a as Ne,B as m}from"./app-logo-icon-s7PxNeiK.js";import{I as u}from"./input-ClZvPfjT.js";import{T as I}from"./textarea-CIGvYvOx.js";import{L as i}from"./label-DO9WPztj.js";import{S as Q}from"./switch-DgwVkpl5.js";import{S as F,a as L,b as H,c as V,d as b}from"./select-DLEc7v9s.js";import{T as ye,a as be,b as X,c as J}from"./tabs-B7f8hnio.js";import{D as _e,a as Ce,b as we,c as Se,d as ke,e as De}from"./dialog-DMZ0veWx.js";import{C as B,a as E,b as O,c as W,d as $,e as Y}from"./card-DjTa4SfN.js";import{B as Te}from"./badge-CqoxryOg.js";import{H as Ie}from"./heading-small-Bowk6hPm.js";import{F as Fe}from"./ArrowLeftIcon-ChST4ezT.js";import{F as Le}from"./PlusIcon-DNSAuCsu.js";import{P as He}from"./pencil-BhRdAmEF.js";import{T as Ve}from"./trash-i_SaX__y.js";import"./index-Akk_ocEK.js";import"./index-CfEeIEU7.js";import"./index-bqhsmS3p.js";import"./chevron-down-BwG3vf-c.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]],Ee=Ne("GripVertical",Be);function as({block:a,itemsByType:Z,availableTypes:_,buttonTypes:ee,imagePositions:se,availableLocations:te}){const[h,C]=o.useState({name:a.name,slug:a.slug,location:a.location||"",description:a.description||"",is_active:a.is_active,sort_order:a.sort_order||0}),[r,P]=o.useState({}),[v,x]=o.useState(!1),[f,ne]=o.useState(a.items),[w,N]=o.useState({open:!1,type:"",title:""}),[c,j]=o.useState({type:"",name:"",title:"",description:"",content:"",button_text:"",button_url:"",button_type:"primary",image_position:"left",is_active:!0}),[K,M]=o.useState(null),[R,z]=o.useState(null),[g,A]=o.useState(null),[S,U]=o.useState(null),k=s=>{const{name:t,value:n}=s.target;C(l=>({...l,[t]:n}))},ie=s=>{C(t=>({...t,is_active:s}))},ae=s=>{C(t=>({...t,location:s==="none"?"":s}))},ce=s=>{s.preventDefault(),x(!0),y.put(route("blocks.update",a.id),h,{onSuccess:()=>{x(!1)},onError:t=>{P(t),x(!1)}})},re=s=>{j({...c,type:s}),N({open:!0,type:s,title:`Thêm mục ${_[s]}`})},p=s=>{const{name:t,value:n}=s.target;j(l=>({...l,[t]:n}))},le=s=>{j(t=>({...t,is_active:s}))},q=(s,t)=>{j(n=>({...n,[s]:t}))},oe=s=>{var n;const t=(n=s.target.files)==null?void 0:n[0];t&&(M(t),z(URL.createObjectURL(t)))},de=()=>{x(!0);const s=new FormData;Object.entries(c).forEach(([t,n])=>{n!=null&&s.append(t,typeof n=="boolean"?n?"1":"0":String(n))}),K&&s.append("image",K),y.post(route("block-items.store",a.id),s,{onSuccess:()=>{j({type:"",name:"",title:"",description:"",content:"",button_text:"",button_url:"",button_type:"primary",image_position:"left",is_active:!0}),M(null),z(null),N({open:!1,type:"",title:""}),x(!1)},onError:t=>{P(t),x(!1)},preserveScroll:!0})},he=s=>{confirm("Bạn có chắc chắn muốn xóa mục này?")&&y.delete(route("block-items.destroy",s),{preserveScroll:!0})},me=s=>{A(s)},ue=s=>{U(s)},xe=()=>{if(g!==null&&S!==null&&g!==S){const s=[...f],t=s[g];s.splice(g,1),s.splice(S,0,t);const n=s.map((l,D)=>({...l,sort_order:D+1}));ne(n),y.post(route("block-items.reorder"),{items:n.map(l=>({id:l.id,sort_order:l.sort_order}))},{preserveScroll:!0,preserveState:!0})}A(null),U(null)},pe=()=>{const s=c.type,t=s?["title","title_description","full"].includes(s):!1,n=s?["description","title_description","full"].includes(s):!1,l=s?["content","image_content","full"].includes(s):!1,D=s?["button","full"].includes(s):!1,je=s?["image","image_content","full"].includes(s):!1,ge=s?["image_content","full"].includes(s):!1;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"name",children:"Tên hiển thị (quản trị)"}),e.jsx(u,{id:"name",name:"name",value:c.name||"",onChange:p,placeholder:"Tên dành cho quản trị (không hiển thị frontend)"})]}),t&&e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"title",children:"Tiêu đề"}),e.jsx(u,{id:"title",name:"title",value:c.title||"",onChange:p,placeholder:"Tiêu đề hiển thị"})]}),n&&e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"description",children:"Mô tả"}),e.jsx(I,{id:"description",name:"description",value:c.description||"",onChange:p,placeholder:"Mô tả ngắn",rows:3})]}),l&&e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"content",children:"Nội dung"}),e.jsx(I,{id:"content",name:"content",value:c.content||"",onChange:p,placeholder:"Nội dung chi tiết",rows:5})]}),D&&e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"button_text",children:"Văn bản nút"}),e.jsx(u,{id:"button_text",name:"button_text",value:c.button_text||"",onChange:p,placeholder:"Ví dụ: Xem thêm"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"button_url",children:"Liên kết"}),e.jsx(u,{id:"button_url",name:"button_url",value:c.button_url||"",onChange:p,placeholder:"URL (ví dụ: /contact)"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"button_type",children:"Loại nút"}),e.jsxs(F,{value:c.button_type||"primary",onValueChange:d=>q("button_type",d),children:[e.jsx(L,{id:"button_type",children:e.jsx(H,{placeholder:"Chọn loại nút"})}),e.jsx(V,{children:Object.entries(ee).map(([d,T])=>e.jsx(b,{value:d,children:T},d))})]})]})]}),je&&e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"image",children:"Hình ảnh"}),e.jsx(u,{id:"image",name:"image",type:"file",accept:"image/*",onChange:oe}),R&&e.jsx("div",{className:"mt-2 relative h-40 bg-muted rounded-md overflow-hidden",children:e.jsx("img",{src:R,alt:"Preview",className:"h-full w-full object-contain"})})]}),ge&&e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"image_position",children:"Vị trí hình ảnh"}),e.jsxs(F,{value:c.image_position||"left",onValueChange:d=>q("image_position",d),children:[e.jsx(L,{id:"image_position",children:e.jsx(H,{placeholder:"Chọn vị trí"})}),e.jsx(V,{children:Object.entries(se).map(([d,T])=>e.jsx(b,{value:d,children:T},d))})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(i,{htmlFor:"is_active",className:"cursor-pointer",children:"Kích hoạt"}),e.jsx(Q,{id:"is_active",checked:c.is_active===void 0?!0:c.is_active,onCheckedChange:le})]})]})};return e.jsxs(fe,{children:[e.jsx(ve,{title:`Chỉnh sửa Block: ${a.name}`}),e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx(m,{variant:"outline",size:"sm",asChild:!0,className:"mr-4",children:e.jsxs(G,{href:route("blocks.index"),children:[e.jsx(Fe,{className:"h-4 w-4 mr-2"}),"Quay lại"]})}),e.jsx(Ie,{title:`Chỉnh sửa block: ${a.name}`,description:"Quản lý thông tin và các mục trong block"})]}),e.jsxs(ye,{defaultValue:"info",className:"space-y-6",children:[e.jsx("div",{className:"flex justify-between items-center",children:e.jsxs(be,{children:[e.jsx(X,{value:"info",children:"Thông tin"}),e.jsxs(X,{value:"items",children:["Danh sách mục (",f.length,")"]})]})}),e.jsx(J,{value:"info",className:"space-y-6",children:e.jsx(B,{children:e.jsxs("form",{onSubmit:ce,children:[e.jsxs(E,{children:[e.jsx(O,{children:"Thông tin block"}),e.jsx(W,{children:"Chỉnh sửa thông tin cơ bản của block"})]}),e.jsxs($,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(i,{htmlFor:"name",children:["Tên Block ",e.jsx("span",{className:"text-destructive",children:"*"})]}),e.jsx(u,{id:"name",name:"name",value:h.name,onChange:k,placeholder:"Nhập tên block",className:r.name?"border-destructive":""}),r.name&&e.jsx("p",{className:"text-destructive text-sm",children:r.name})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"slug",children:"Slug"}),e.jsx(u,{id:"slug",name:"slug",value:h.slug,onChange:k,placeholder:"Để trống để tự động tạo từ tên",className:r.slug?"border-destructive":""}),r.slug&&e.jsx("p",{className:"text-destructive text-sm",children:r.slug}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Định danh duy nhất của block, được sử dụng trong mã nguồn."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"location",children:"Vị trí hiển thị"}),e.jsxs(F,{value:h.location||"none",onValueChange:ae,children:[e.jsx(L,{className:r.location?"border-destructive":"",children:e.jsx(H,{placeholder:"Chọn vị trí hiển thị"})}),e.jsxs(V,{children:[e.jsx(b,{value:"none",children:"Không xác định"}),Object.entries(te).map(([s,t])=>e.jsx(b,{value:s,children:t},s))]})]}),r.location&&e.jsx("p",{className:"text-destructive text-sm",children:r.location})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(i,{htmlFor:"description",children:"Mô tả"}),e.jsx(I,{id:"description",name:"description",value:h.description,onChange:k,placeholder:"Mô tả về block này (không bắt buộc)",className:r.description?"border-destructive":"",rows:4}),r.description&&e.jsx("p",{className:"text-destructive text-sm",children:r.description})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(i,{htmlFor:"is_active",className:"cursor-pointer",children:"Kích hoạt Block"}),e.jsx(Q,{id:"is_active",checked:h.is_active,onCheckedChange:ie})]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["Block sẽ ",h.is_active?"":"không"," được hiển thị trên trang web."]})]})]}),e.jsx(Y,{className:"flex justify-end border-t pt-6",children:e.jsx(m,{type:"submit",disabled:v,children:v?"Đang lưu...":"Lưu thay đổi"})})]})})}),e.jsxs(J,{value:"items",className:"space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:Object.entries(_).map(([s,t])=>e.jsxs(B,{className:"overflow-hidden",children:[e.jsx(E,{children:e.jsx(O,{children:t})}),e.jsx($,{children:e.jsx("p",{className:"text-sm text-muted-foreground",children:Oe(s)})}),e.jsx(Y,{className:"border-t pt-4",children:e.jsxs(m,{onClick:()=>re(s),className:"w-full",children:[e.jsx(Le,{className:"h-4 w-4 mr-2"}),"Thêm ",t]})})]},s))}),e.jsxs(B,{children:[e.jsxs(E,{children:[e.jsx(O,{children:"Danh sách mục (Kéo để sắp xếp)"}),e.jsx(W,{children:"Các mục bên trong block - sắp xếp theo thứ tự hiển thị"})]}),e.jsx($,{children:f.length===0?e.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"Chưa có mục nào trong block này. Hãy thêm mục đầu tiên bên trên."}):e.jsx("div",{className:"space-y-2",children:f.map((s,t)=>e.jsxs("div",{className:`flex items-center gap-2 border rounded-lg p-3 ${g===t?"opacity-50 border-primary":""}`,draggable:!0,onDragStart:()=>me(t),onDragEnter:()=>ue(t),onDragOver:n=>n.preventDefault(),onDragEnd:xe,children:[e.jsx("div",{className:"cursor-move p-1",children:e.jsx(Ee,{className:"h-5 w-5 text-muted-foreground"})}),s.image_thumb_url&&e.jsx("div",{className:"h-12 w-12 bg-muted rounded-md overflow-hidden flex-shrink-0",children:e.jsx("img",{src:s.image_thumb_url,alt:s.title||"Item image",className:"h-full w-full object-cover"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:s.name||s.title||`Mục ${t+1}`}),e.jsxs("div",{className:"text-xs text-muted-foreground",children:["Loại: ",_[s.type]]})]}),e.jsx(Te,{variant:s.is_active?"default":"secondary",children:s.is_active?"Hiển thị":"Ẩn"})]}),s.title&&e.jsx("div",{className:"text-sm mt-1",children:s.title})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(G,{href:route("block-items.edit",s.id),children:e.jsxs(m,{variant:"outline",size:"sm",className:"mr-2",children:[e.jsx(He,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Sửa"})]})}),e.jsxs(m,{variant:"outline",size:"sm",onClick:()=>he(s.id),children:[e.jsx(Ve,{className:"h-4 w-4 text-destructive"}),e.jsx("span",{className:"sr-only",children:"Xóa"})]})]})]},s.id))})})]})]})]})]})}),e.jsx(_e,{open:w.open,onOpenChange:s=>N({...w,open:s}),children:e.jsxs(Ce,{className:"sm:max-w-lg",children:[e.jsxs(we,{children:[e.jsx(Se,{children:w.title}),e.jsx(ke,{children:"Thêm mục mới vào block"})]}),pe(),e.jsxs(De,{className:"mt-4 pt-4 border-t",children:[e.jsx(m,{variant:"outline",onClick:()=>N({open:!1,type:"",title:""}),children:"Hủy"}),e.jsx(m,{onClick:de,disabled:v,children:v?"Đang lưu...":"Thêm mục"})]})]})})]})}function Oe(a){return{title:"Tiêu đề lớn, thường là H1, H2 hoặc H3.",description:"Đoạn văn bản ngắn mô tả.",content:"Nội dung chi tiết, có thể dài và đa dạng.",image:"Hình ảnh độc lập.",button:"Nút kêu gọi hành động (CTA).",title_description:"Kết hợp tiêu đề và mô tả ngắn.",image_content:"Kết hợp hình ảnh và nội dung, có thể tùy chỉnh vị trí.",full:"Đầy đủ các thành phần: tiêu đề, mô tả, nội dung, hình ảnh và nút."}[a]||"Mục tùy chỉnh"}export{as as default};
