import{r as s,j as n}from"./app-CohZrbNC.js";import{u as D,c as z}from"./app-logo-icon-s7PxNeiK.js";import{u as M,c as O,a as R,P as A,b as B,C as H}from"./index-Akk_ocEK.js";import{u as K}from"./index-bqhsmS3p.js";import{P as j}from"./index-CfEeIEU7.js";var E="Checkbox",[L,W]=O(E),[q,T]=L(E),w=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,name:u,checked:p,defaultChecked:o,required:h,disabled:d,value:k="on",onCheckedChange:m,form:l,...C}=e,[a,x]=s.useState(null),v=D(i,r=>x(r)),y=s.useRef(!1),P=a?l||!!a.closest("form"):!0,[f=!1,g]=M({prop:p,defaultProp:o,onChange:m}),_=s.useRef(f);return s.useEffect(()=>{const r=a==null?void 0:a.form;if(r){const b=()=>g(_.current);return r.addEventListener("reset",b),()=>r.removeEventListener("reset",b)}},[a,g]),n.jsxs(q,{scope:t,state:f,disabled:d,children:[n.jsx(j.button,{type:"button",role:"checkbox","aria-checked":c(f)?"mixed":f,"aria-required":h,"data-state":N(f),"data-disabled":d?"":void 0,disabled:d,value:k,...C,ref:v,onKeyDown:R(e.onKeyDown,r=>{r.key==="Enter"&&r.preventDefault()}),onClick:R(e.onClick,r=>{g(b=>c(b)?!0:!b),P&&(y.current=r.isPropagationStopped(),y.current||r.stopPropagation())})}),P&&n.jsx(X,{control:a,bubbles:!y.current,name:u,value:k,checked:f,required:h,disabled:d,form:l,style:{transform:"translateX(-100%)"},defaultChecked:c(o)?!1:o})]})});w.displayName=E;var S="CheckboxIndicator",I=s.forwardRef((e,i)=>{const{__scopeCheckbox:t,forceMount:u,...p}=e,o=T(S,t);return n.jsx(A,{present:u||c(o.state)||o.state===!0,children:n.jsx(j.span,{"data-state":N(o.state),"data-disabled":o.disabled?"":void 0,...p,ref:i,style:{pointerEvents:"none",...e.style}})})});I.displayName=S;var X=e=>{const{control:i,checked:t,bubbles:u=!0,defaultChecked:p,...o}=e,h=s.useRef(null),d=K(t),k=B(i);s.useEffect(()=>{const l=h.current,C=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(C,"checked").set;if(d!==t&&x){const v=new Event("click",{bubbles:u});l.indeterminate=c(t),x.call(l,c(t)?!1:t),l.dispatchEvent(v)}},[d,t,u]);const m=s.useRef(c(t)?!1:t);return n.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:p??m.current,...o,tabIndex:-1,ref:h,style:{...e.style,...k,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function c(e){return e==="indeterminate"}function N(e){return c(e)?"indeterminate":e?"checked":"unchecked"}var F=w,$=I;function Y({className:e,...i}){return n.jsx(F,{"data-slot":"checkbox",className:z("peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",e),...i,children:n.jsx($,{"data-slot":"checkbox-indicator",className:"flex items-center justify-center text-current transition-none",children:n.jsx(H,{className:"size-3.5"})})})}export{Y as C};
