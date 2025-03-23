import{r as j,j as e,L as b,$ as l,S as r}from"./app-CohZrbNC.js";import{A as v,D as f,a as N,b as S,c as d}from"./app-layout-DBCphzGN.js";import{B as i}from"./app-logo-icon-s7PxNeiK.js";import{I as C}from"./input-ClZvPfjT.js";import{H as _}from"./heading-small-Bowk6hPm.js";import{P as w}from"./pagination-BVRYQCjS.js";import{S as y,a as D,b as P,c as T,d as m}from"./select-DLEc7v9s.js";import{C as B}from"./chevron-down-BwG3vf-c.js";import"./index-Akk_ocEK.js";import"./index-CfEeIEU7.js";import"./index-bqhsmS3p.js";const k=[{title:"Bài viết",href:"/posts"}];function X({posts:s,filters:a,categories:o}){const[c,h]=j.useState(a.search||""),x=t=>{t.preventDefault(),r.get(route("posts.index"),{search:c},{preserveState:!0})},n=t=>{r.get(route("posts.index"),{...a,status:t},{preserveState:!0})},u=t=>{r.get(route("posts.index"),{...a,category:t==="all"?"":t},{preserveState:!0})},g=t=>{r.get(route("posts.index"),{...a,page:t},{preserveState:!0})},p=t=>{r.get(route("posts.index"),{...a,per_page:t},{preserveState:!0})};return e.jsxs(v,{breadcrumbs:k,children:[e.jsx(b,{title:"Bài viết"}),e.jsxs("div",{className:"space-y-6 px-4 py-6",children:[e.jsxs("div",{className:"flex items-center justify-between pb-4 border-b",children:[e.jsx(_,{title:"Quản lý bài viết",description:"Tạo, chỉnh sửa và quản lý tất cả bài viết của bạn"}),e.jsx(l,{href:"/posts/create",children:e.jsx(i,{children:"Thêm bài viết mới"})})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx("form",{onSubmit:x,className:"flex-1 max-w-sm",children:e.jsxs("div",{className:"relative flex items-center",children:[e.jsx(C,{type:"search",placeholder:"Tìm kiếm bài viết...",className:"pl-4 pr-12",value:c,onChange:t=>h(t.target.value)}),e.jsx(i,{type:"submit",size:"sm",variant:"ghost",className:"absolute right-0",children:"Tìm"})]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs(f,{children:[e.jsx(N,{asChild:!0,children:e.jsxs(i,{variant:"outline",className:"flex items-center gap-1",children:["Trạng thái ",e.jsx(B,{size:16})]})}),e.jsxs(S,{align:"end",children:[e.jsx(d,{onClick:()=>n(""),children:"Tất cả"}),e.jsx(d,{onClick:()=>n("published"),children:"Đã xuất bản"}),e.jsx(d,{onClick:()=>n("draft"),children:"Bản nháp"})]})]}),e.jsxs(y,{value:a.category||"all",onValueChange:t=>u(t),children:[e.jsx(D,{className:"w-[180px]",children:e.jsx(P,{placeholder:"Chọn danh mục"})}),e.jsxs(T,{children:[e.jsx(m,{value:"all",children:"Tất cả danh mục"}),o.map(t=>e.jsx(m,{value:String(t.id),children:t.title},t.id))]})]}),(a.search||a.status||a.category)&&e.jsx(i,{variant:"ghost",onClick:()=>r.get(route("posts.index"),{}),children:"Xóa bộ lọc"})]})]}),e.jsx("div",{className:"rounded-md border",children:e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsxs("table",{className:"w-full caption-bottom text-sm",children:[e.jsx("thead",{className:"[&_tr]:border-b",children:e.jsxs("tr",{className:"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",children:[e.jsx("th",{className:"h-12 px-4 text-left align-middle font-medium text-muted-foreground",children:"Hình ảnh"}),e.jsx("th",{className:"h-12 px-4 text-left align-middle font-medium text-muted-foreground",children:"Tiêu đề"}),e.jsx("th",{className:"h-12 px-4 text-left align-middle font-medium text-muted-foreground",children:"Trạng thái"}),e.jsx("th",{className:"h-12 px-4 text-left align-middle font-medium text-muted-foreground",children:"Ngày"}),e.jsx("th",{className:"h-12 px-4 text-right align-middle font-medium text-muted-foreground",children:"Hành động"})]})}),e.jsx("tbody",{className:"[&_tr:last-child]:border-0",children:s.data.length===0?e.jsx("tr",{className:"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",children:e.jsx("td",{colSpan:5,className:"p-4 align-middle text-center text-muted-foreground",children:"Không tìm thấy bài viết nào. Hãy tạo bài viết đầu tiên của bạn để bắt đầu."})}):s.data.map(t=>e.jsxs("tr",{className:"border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",children:[e.jsx("td",{className:"p-4 align-middle",children:t.featured_image_thumb&&e.jsx("img",{src:t.featured_image_thumb,alt:t.title,className:"w-16 h-16 object-cover rounded"})}),e.jsx("td",{className:"p-4 align-middle",children:e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:t.title}),e.jsx("div",{className:"text-sm text-muted-foreground",children:t.slug})]})}),e.jsx("td",{className:"p-4 align-middle",children:e.jsx("span",{className:`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${t.is_published?"bg-green-100 text-green-800":"bg-amber-100 text-amber-800"}`,children:t.is_published?"Đã xuất bản":"Bản nháp"})}),e.jsx("td",{className:"p-4 align-middle",children:t.is_published&&t.published_at?new Date(t.published_at).toLocaleDateString():new Date(t.created_at).toLocaleDateString()}),e.jsx("td",{className:"p-4 align-middle text-right",children:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(l,{href:`/posts/${t.id}/edit`,children:e.jsx(i,{variant:"outline",size:"sm",children:"Sửa"})}),e.jsx(l,{href:`/posts/${t.id}`,method:"delete",as:"button",children:e.jsx(i,{variant:"destructive",size:"sm",children:"Xóa"})})]})})]},t.id))})]})})})]}),s.meta&&e.jsx("div",{className:"mt-6 border-t pt-6",children:e.jsx(w,{currentPage:s.meta.current_page,lastPage:s.meta.last_page,perPage:parseInt(a.per_page||"10"),total:s.meta.total,from:s.meta.from||0,to:s.meta.to||0,onPageChange:g,onPerPageChange:p})})]})}export{X as default};
