import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as o}from"./chunk-index-C6d52tmz.js";import{S as g}from"./chunk-index-BzMW0C2i.js";import{c as t}from"./chunk-utils-BQHNewu7.js";import{C as h}from"./chunk-chevron-right-B8kFXQWJ.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-jOetL7wa.js";import"./chunk-createLucideIcon-BG6cK4Lr.js";const i=o.forwardRef(({...r},a)=>e.jsx("nav",{ref:a,"aria-label":"breadcrumb",...r}));i.displayName="Breadcrumb";const p=o.forwardRef(({className:r,...a},s)=>e.jsx("ol",{ref:s,className:t("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",r),...a}));p.displayName="BreadcrumbList";const d=o.forwardRef(({className:r,...a},s)=>e.jsx("li",{ref:s,className:t("inline-flex items-center gap-1.5",r),...a}));d.displayName="BreadcrumbItem";const n=o.forwardRef(({asChild:r,className:a,...s},B)=>{const x=r?g:"a";return e.jsx(x,{ref:B,className:t("transition-colors hover:text-foreground",a),...s})});n.displayName="BreadcrumbLink";const u=o.forwardRef(({className:r,...a},s)=>e.jsx("span",{ref:s,role:"link","aria-disabled":"true","aria-current":"page",className:t("font-normal text-foreground",r),...a}));u.displayName="BreadcrumbPage";const c=({children:r,className:a,...s})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:t("[&>svg]:w-3.5 [&>svg]:h-3.5",a),...s,children:r??e.jsx(h,{})});c.displayName="BreadcrumbSeparator";i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const k={title:"Components/Breadcrumb",component:i,tags:["autodocs"]},m={render:()=>e.jsx(i,{children:e.jsxs(p,{children:[e.jsx(d,{children:e.jsx(n,{href:"#",children:"Home"})}),e.jsx(c,{}),e.jsx(d,{children:e.jsx(n,{href:"#",children:"Settings"})}),e.jsx(c,{}),e.jsx(d,{children:e.jsx(u,{children:"Profile"})})]})})};var l,b,f;m.parameters={...m.parameters,docs:{...(l=m.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
}`,...(f=(b=m.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const w=["Default"];export{m as Default,w as __namedExportsOrder,k as default};
