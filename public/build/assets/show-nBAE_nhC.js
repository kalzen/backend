import{j as e,L as j,$ as a}from"./app-CohZrbNC.js";import{A as p}from"./app-layout-DBCphzGN.js";import{B as t}from"./app-logo-icon-s7PxNeiK.js";import{B as n}from"./badge-CqoxryOg.js";import{C as d,a as c,b as l,c as o,d as i,e as g}from"./card-DjTa4SfN.js";import{T as v,a as f,b as m,c as h}from"./tabs-B7f8hnio.js";import{H as N}from"./heading-small-Bowk6hPm.js";import{F as b}from"./ArrowLeftIcon-ChST4ezT.js";import{F as _}from"./PencilIcon-BYTgCwYg.js";import"./index-Akk_ocEK.js";import"./index-CfEeIEU7.js";function I({block:r}){const x=r.items.filter(s=>s.is_active),u=s=>{switch(s.type){case"title":return e.jsx("div",{className:"prose dark:prose-invert max-w-none",children:e.jsx("h2",{children:s.title})});case"description":return e.jsx("div",{className:"prose dark:prose-invert max-w-none",children:e.jsx("p",{children:s.description})});case"content":return e.jsx("div",{className:"prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:s.content||""}});case"image":return s.image_url&&e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto"})});case"button":return e.jsx(t,{variant:s.button_type,className:"mt-4",asChild:!0,children:e.jsx(a,{href:s.button_url||"#",children:s.button_text})});case"title_description":return e.jsxs("div",{className:"prose dark:prose-invert max-w-none",children:[e.jsx("h2",{children:s.title}),e.jsx("p",{children:s.description})]});case"image_content":return e.jsxs("div",{className:`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${s.image_position==="right"?"md:flex-row-reverse":""}`,children:[s.image_url&&e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto object-cover"})}),e.jsx("div",{className:"prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:s.content||""}})]});case"full":return e.jsxs("div",{className:`grid grid-cols-1 ${s.image_position==="left"||s.image_position==="right"?"md:grid-cols-2":"md:grid-cols-1"} gap-6 items-center`,children:[s.image_position==="left"&&s.image_url&&e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto object-cover"})}),s.image_position==="top"&&s.image_url&&e.jsx("div",{className:"col-span-full rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto object-cover"})}),e.jsxs("div",{className:"space-y-4",children:[s.title&&e.jsx("h2",{className:"text-2xl font-bold",children:s.title}),s.description&&e.jsx("p",{className:"text-muted-foreground",children:s.description}),s.content&&e.jsx("div",{className:"prose dark:prose-invert max-w-none",dangerouslySetInnerHTML:{__html:s.content}}),s.button_text&&e.jsx(t,{variant:s.button_type,className:"mt-4",asChild:!0,children:e.jsx(a,{href:s.button_url||"#",children:s.button_text})})]}),s.image_position==="right"&&s.image_url&&e.jsx("div",{className:"rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto object-cover"})}),s.image_position==="bottom"&&s.image_url&&e.jsx("div",{className:"col-span-full rounded-md overflow-hidden",children:e.jsx("img",{src:s.image_url,alt:s.title||"Block image",className:"w-full h-auto object-cover"})})]});default:return e.jsx("p",{className:"text-muted-foreground",children:"Loại mục không được hỗ trợ."})}};return e.jsxs(p,{children:[e.jsx(j,{title:`Chi tiết Block: ${r.name}`}),e.jsx("div",{className:"py-8",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"flex items-center justify-between mb-6",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(t,{variant:"outline",size:"sm",asChild:!0,className:"mr-4",children:e.jsxs(a,{href:route("blocks.index"),children:[e.jsx(b,{className:"h-4 w-4 mr-2"}),"Quay lại"]})}),e.jsx(N,{title:r.name,description:"Chi tiết và xem trước block"})]}),e.jsx(t,{asChild:!0,children:e.jsxs(a,{href:route("blocks.edit",r.id),children:[e.jsx(_,{className:"h-4 w-4 mr-2"}),"Chỉnh sửa"]})})]}),e.jsxs(v,{defaultValue:"preview",className:"space-y-6",children:[e.jsxs(f,{children:[e.jsx(m,{value:"preview",children:"Xem trước"}),e.jsx(m,{value:"details",children:"Thông tin chi tiết"}),e.jsx(m,{value:"code",children:"Mã nhúng"})]}),e.jsxs(h,{value:"preview",className:"space-y-6",children:[e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"Xem trước Block"}),e.jsx(o,{children:"Xem trước cách hiển thị của block trên trang web"})]}),e.jsx(i,{children:x.length===0?e.jsxs("div",{className:"text-center py-8 text-muted-foreground",children:[e.jsx("p",{children:"Block này không có mục nào đang được kích hoạt."}),e.jsx(t,{asChild:!0,className:"mt-4",children:e.jsx(a,{href:route("blocks.edit",r.id),children:"Thêm mục ngay"})})]}):e.jsx("div",{className:"border border-dashed rounded-lg p-6 space-y-8",children:x.map(s=>e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute top-0 right-0 z-10",children:e.jsx(n,{variant:"outline",className:"mb-2",children:s.name||`ID: ${s.id}`})}),u(s)]},s.id))})})]}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"Tất cả các mục"}),e.jsx(o,{children:"Danh sách tất cả các mục trong block (bao gồm cả mục không được kích hoạt)"})]}),e.jsx(i,{children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",children:r.items.length===0?e.jsxs("div",{className:"col-span-full text-center py-8 text-muted-foreground",children:[e.jsx("p",{children:"Block này không có mục nào."}),e.jsx(t,{asChild:!0,className:"mt-4",children:e.jsx(a,{href:route("blocks.edit",r.id),children:"Thêm mục ngay"})})]}):r.items.map(s=>e.jsxs(d,{className:s.is_active?"":"opacity-60",children:[e.jsx(c,{className:"p-4",children:e.jsxs(l,{className:"text-base flex items-center justify-between",children:[s.name||s.title||`Mục ${s.id}`,e.jsx(n,{variant:s.is_active?"default":"secondary",className:"ml-2",children:s.is_active?"Hiển thị":"Ẩn"})]})}),e.jsxs(i,{className:"p-4 pt-0",children:[e.jsxs("p",{className:"text-xs text-muted-foreground mb-2",children:["Loại: ",s.type," | Vị trí: ",s.sort_order]}),s.title&&e.jsx("p",{className:"font-medium truncate",children:s.title}),s.description&&e.jsx("p",{className:"text-sm truncate",children:s.description}),s.image_thumb_url&&e.jsx("div",{className:"mt-2 h-20 bg-muted rounded overflow-hidden",children:e.jsx("img",{src:s.image_thumb_url,alt:s.title||"Thumbnail",className:"w-full h-full object-cover"})})]}),e.jsx(g,{className:"p-4 pt-0 flex justify-end",children:e.jsx(t,{size:"sm",variant:"outline",asChild:!0,children:e.jsx(a,{href:route("block-items.edit",s.id),children:"Sửa"})})})]},s.id))})})]})]}),e.jsx(h,{value:"details",className:"space-y-6",children:e.jsxs(d,{children:[e.jsx(c,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{children:"Thông tin cơ bản"}),e.jsx(n,{variant:r.is_active?"default":"secondary",children:r.is_active?"Đang hoạt động":"Đã bị ẩn"})]})}),e.jsx(i,{children:e.jsxs("dl",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4",children:[e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Tên block"}),e.jsx("dd",{className:"mt-1",children:r.name})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Slug"}),e.jsx("dd",{className:"mt-1",children:r.slug})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Vị trí hiển thị"}),e.jsx("dd",{className:"mt-1",children:r.location||"Không xác định"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Thứ tự hiển thị"}),e.jsx("dd",{className:"mt-1",children:r.sort_order})]}),e.jsxs("div",{className:"md:col-span-2",children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Mô tả"}),e.jsx("dd",{className:"mt-1",children:r.description||"Không có mô tả"})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Ngày tạo"}),e.jsx("dd",{className:"mt-1",children:new Date(r.created_at).toLocaleString()})]}),e.jsxs("div",{children:[e.jsx("dt",{className:"text-sm font-medium text-muted-foreground",children:"Cập nhật lần cuối"}),e.jsx("dd",{className:"mt-1",children:new Date(r.updated_at).toLocaleString()})]})]})})]})}),e.jsx(h,{value:"code",className:"space-y-6",children:e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(l,{children:"Mã nhúng"}),e.jsx(o,{children:"Sử dụng mã sau để hiển thị block này trong trang web của bạn"})]}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Hiển thị theo slug"}),e.jsx("div",{className:"bg-muted p-3 rounded-md",children:e.jsx("code",{className:"text-sm",children:`@php
$block = \\App\\Models\\Block::with(['activeItems' => function($query) {
    $query->orderBy('sort_order');
}])->bySlug('${r.slug}')->active()->first();
@endphp

@if($block)
    {{-- Hiển thị block tại đây --}}
@endif`})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Hiển thị theo vị trí"}),e.jsx("div",{className:"bg-muted p-3 rounded-md",children:e.jsx("code",{className:"text-sm",children:`@php
$blocks = \\App\\Models\\Block::with(['activeItems' => function($query) {
    $query->orderBy('sort_order');
}])->byLocation('${r.location||"location-name"}')->active()->orderBy('sort_order')->get();
@endphp

@foreach($blocks as $block)
    {{-- Hiển thị các blocks tại đây --}}
@endforeach`})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-2",children:"Component hiển thị block"}),e.jsx("div",{className:"bg-muted p-3 rounded-md",children:e.jsx("code",{className:"text-sm",children:`@php
// resources/views/components/block.blade.php
@endphp

@props(['block'])

<div class="block block-{{ $block->slug }}">
    @foreach($block->activeItems as $item)
        @include('components.block-items.' . $item->type, ['item' => $item])
    @endforeach
</div>`})})]})]})})]})})]})]})})]})}export{I as default};
