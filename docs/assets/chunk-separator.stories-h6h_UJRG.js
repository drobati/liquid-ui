import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as u}from"./chunk-index-C6d52tmz.js";import{P as h}from"./chunk-index-D7LgpF0F.js";import{c as N}from"./chunk-utils-BQHNewu7.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-jOetL7wa.js";var j="Separator",d="horizontal",S=["horizontal","vertical"],v=u.forwardRef((a,o)=>{const{decorative:n,orientation:t=d,...s}=a,c=g(t)?t:d,f=n?{role:"none"}:{"aria-orientation":c==="vertical"?c:void 0,role:"separator"};return e.jsx(h.div,{"data-orientation":c,...f,...s,ref:o})});v.displayName=j;function g(a){return S.includes(a)}var x=v;const r=u.forwardRef(({className:a,orientation:o="horizontal",decorative:n=!0,...t},s)=>e.jsx(x,{ref:s,decorative:n,orientation:o,className:N("shrink-0 bg-border",o==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",a),...t}));r.displayName=x.displayName;r.__docgenInfo={description:"",methods:[],props:{orientation:{defaultValue:{value:'"horizontal"',computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};const _={title:"Components/Separator",component:r,tags:["autodocs"]},i={render:()=>e.jsxs("div",{className:"w-[300px]",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h4",{className:"text-sm font-medium leading-none",children:"Liquid UI"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"An open-source component library."})]}),e.jsx(r,{className:"my-4"}),e.jsxs("div",{className:"flex h-5 items-center space-x-4 text-sm",children:[e.jsx("div",{children:"Docs"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Source"}),e.jsx(r,{orientation:"vertical"}),e.jsx("div",{children:"Blog"})]})]})};var l,m,p;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Liquid UI</h4>
        <p className="text-sm text-muted-foreground">
          An open-source component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Blog</div>
      </div>
    </div>
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const b=["Horizontal"];export{i as Horizontal,b as __namedExportsOrder,_ as default};
