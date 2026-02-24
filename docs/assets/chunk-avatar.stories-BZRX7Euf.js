import{j as t}from"./chunk-jsx-runtime-D_zvdyIk.js";import{a as Y,r as l}from"./chunk-index-C6d52tmz.js";import{c as Z}from"./chunk-index-CSJB9oM4.js";import{u as ee}from"./chunk-index-jR4Qkc5T.js";import{u as w}from"./chunk-index-kLBjVXXK.js";import{P as k}from"./chunk-index-D7LgpF0F.js";import{c as L}from"./chunk-utils-BQHNewu7.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-jOetL7wa.js";var _={exports:{}},j={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var F;function ae(){if(F)return j;F=1;var e=Y();function a(s,c){return s===c&&(s!==0||1/s===1/c)||s!==s&&c!==c}var n=typeof Object.is=="function"?Object.is:a,o=e.useState,i=e.useEffect,r=e.useLayoutEffect,v=e.useDebugValue;function u(s,c){var h=c(),y=o({inst:{value:h,getSnapshot:c}}),f=y[0].inst,b=y[1];return r(function(){f.value=h,f.getSnapshot=c,d(f)&&b({inst:f})},[s,h,c]),i(function(){return d(f)&&b({inst:f}),s(function(){d(f)&&b({inst:f})})},[s]),v(h),h}function d(s){var c=s.getSnapshot;s=s.value;try{var h=c();return!n(s,h)}catch{return!0}}function p(s,c){return c()}var S=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:u;return j.useSyncExternalStore=e.useSyncExternalStore!==void 0?e.useSyncExternalStore:S,j}var N;function re(){return N||(N=1,_.exports=ae()),_.exports}var te=re();function ne(){return te.useSyncExternalStore(se,()=>!0,()=>!1)}function se(){return()=>{}}var I="Avatar",[oe]=Z(I),[ce,W]=oe(I),G=l.forwardRef((e,a)=>{const{__scopeAvatar:n,...o}=e,[i,r]=l.useState("idle");return t.jsx(ce,{scope:n,imageLoadingStatus:i,onImageLoadingStatusChange:r,children:t.jsx(k.span,{...o,ref:a})})});G.displayName=I;var H="AvatarImage",O=l.forwardRef((e,a)=>{const{__scopeAvatar:n,src:o,onLoadingStatusChange:i=()=>{},...r}=e,v=W(H,n),u=ie(o,r),d=ee(p=>{i(p),v.onImageLoadingStatusChange(p)});return w(()=>{u!=="idle"&&d(u)},[u,d]),u==="loaded"?t.jsx(k.img,{...r,ref:a,src:o}):null});O.displayName=H;var K="AvatarFallback",z=l.forwardRef((e,a)=>{const{__scopeAvatar:n,delayMs:o,...i}=e,r=W(K,n),[v,u]=l.useState(o===void 0);return l.useEffect(()=>{if(o!==void 0){const d=window.setTimeout(()=>u(!0),o);return()=>window.clearTimeout(d)}},[o]),v&&r.imageLoadingStatus!=="loaded"?t.jsx(k.span,{...i,ref:a}):null});z.displayName=K;function C(e,a){return e?a?(e.src!==a&&(e.src=a),e.complete&&e.naturalWidth>0?"loaded":"loading"):"error":"idle"}function ie(e,{referrerPolicy:a,crossOrigin:n}){const o=ne(),i=l.useRef(null),r=o?(i.current||(i.current=new window.Image),i.current):null,[v,u]=l.useState(()=>C(r,e));return w(()=>{u(C(r,e))},[r,e]),w(()=>{const d=s=>()=>{u(s)};if(!r)return;const p=d("loaded"),S=d("error");return r.addEventListener("load",p),r.addEventListener("error",S),a&&(r.referrerPolicy=a),typeof n=="string"&&(r.crossOrigin=n),()=>{r.removeEventListener("load",p),r.removeEventListener("error",S)}},[r,n,a]),v}var J=G,Q=O,X=z;const m=l.forwardRef(({className:e,...a},n)=>t.jsx(J,{ref:n,className:L("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full shadow-[0_3px_0_oklch(0.35_0.15_264/0.4)]",e),...a}));m.displayName=J.displayName;const R=l.forwardRef(({className:e,...a},n)=>t.jsx(Q,{ref:n,className:L("aspect-square h-full w-full",e),...a}));R.displayName=Q.displayName;const A=l.forwardRef(({className:e,...a},n)=>t.jsx(X,{ref:n,className:L("flex h-full w-full items-center justify-center rounded-full bg-muted",e),...a}));A.displayName=X.displayName;m.__docgenInfo={description:"",methods:[]};R.__docgenInfo={description:"",methods:[]};A.__docgenInfo={description:"",methods:[]};const Ee={title:"Components/Avatar",component:m,tags:["autodocs"]},g={render:()=>t.jsxs(m,{children:[t.jsx(R,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),t.jsx(A,{children:"CN"})]})},x={render:()=>t.jsx(m,{children:t.jsx(A,{children:"DR"})})},E={render:()=>t.jsxs("div",{className:"flex -space-x-2",children:[t.jsx(m,{children:t.jsx(A,{children:"AB"})}),t.jsx(m,{children:t.jsx(A,{children:"CD"})}),t.jsx(m,{children:t.jsx(A,{children:"EF"})})]})};var M,q,D;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
}`,...(D=(q=g.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var $,P,B;x.parameters={...x.parameters,docs:{...($=x.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Avatar>
      <AvatarFallback>DR</AvatarFallback>
    </Avatar>
}`,...(B=(P=x.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var T,U,V;E.parameters={...E.parameters,docs:{...(T=E.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </div>
}`,...(V=(U=E.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};const ye=["WithImage","Fallback","Multiple"];export{x as Fallback,E as Multiple,g as WithImage,ye as __namedExportsOrder,Ee as default};
