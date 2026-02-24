import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as t}from"./chunk-index-C6d52tmz.js";import{c as n}from"./chunk-utils-BQHNewu7.js";import{B as x}from"./chunk-button-16pLANHd.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-jOetL7wa.js";import"./chunk-index-CHvSb-jZ.js";const d=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("rounded-lg border bg-card text-card-foreground shadow-[0_3px_0_rgba(0,0,0,0.1)]",r),...a}));d.displayName="Card";const c=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("flex flex-col space-y-1.5 p-6",r),...a}));c.displayName="CardHeader";const l=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("text-2xl font-semibold leading-none tracking-tight",r),...a}));l.displayName="CardTitle";const p=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("text-sm text-muted-foreground",r),...a}));p.displayName="CardDescription";const C=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("p-6 pt-0",r),...a}));C.displayName="CardContent";const m=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("flex items-center p-6 pt-0",r),...a}));m.displayName="CardFooter";d.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};m.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};C.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const H={title:"Components/Card",component:d,tags:["autodocs"]},s={render:()=>e.jsxs(d,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Card Title"}),e.jsx(p,{children:"Card Description"})]}),e.jsx(C,{children:e.jsx("p",{children:"Card content goes here."})})]})},i={render:()=>e.jsxs(d,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Create project"}),e.jsx(p,{children:"Deploy your new project in one-click."})]}),e.jsx(C,{children:e.jsx("p",{children:"Configure your project settings below."})}),e.jsxs(m,{className:"flex justify-between",children:[e.jsx(x,{variant:"outline",children:"Cancel"}),e.jsx(x,{children:"Deploy"})]})]})};var f,j,u;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
}`,...(u=(j=s.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var h,N,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Configure your project settings below.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
}`,...(g=(N=i.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};const R=["Default","WithFooter"];export{s as Default,i as WithFooter,R as __namedExportsOrder,H as default};
