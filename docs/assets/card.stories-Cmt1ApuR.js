import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./index-ZH-6pyQh.js";import{c as n}from"./utils-COMqstzJ.js";import{B as x}from"./button-MQtKmJjr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-D6Aj0t_5.js";const s=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a}));s.displayName="Card";const c=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("flex flex-col space-y-1.5 p-6",r),...a}));c.displayName="CardHeader";const l=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("text-2xl font-semibold leading-none tracking-tight",r),...a}));l.displayName="CardTitle";const p=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("text-sm text-muted-foreground",r),...a}));p.displayName="CardDescription";const C=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("p-6 pt-0",r),...a}));C.displayName="CardContent";const m=t.forwardRef(({className:r,...a},o)=>e.jsx("div",{ref:o,className:n("flex items-center p-6 pt-0",r),...a}));m.displayName="CardFooter";s.__docgenInfo={description:"",methods:[],displayName:"Card"};c.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};m.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};l.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};p.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};C.__docgenInfo={description:"",methods:[],displayName:"CardContent"};const b={title:"Components/Card",component:s,tags:["autodocs"]},d={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Card Title"}),e.jsx(p,{children:"Card Description"})]}),e.jsx(C,{children:e.jsx("p",{children:"Card content goes here."})})]})},i={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(c,{children:[e.jsx(l,{children:"Create project"}),e.jsx(p,{children:"Deploy your new project in one-click."})]}),e.jsx(C,{children:e.jsx("p",{children:"Configure your project settings below."})}),e.jsxs(m,{className:"flex justify-between",children:[e.jsx(x,{variant:"outline",children:"Cancel"}),e.jsx(x,{children:"Deploy"})]})]})};var f,j,u;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
    </Card>
}`,...(u=(j=d.parameters)==null?void 0:j.docs)==null?void 0:u.source}}};var h,N,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(N=i.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};const F=["Default","WithFooter"];export{d as Default,i as WithFooter,F as __namedExportsOrder,b as default};
