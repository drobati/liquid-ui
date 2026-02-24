import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as n}from"./chunk-index-C6d52tmz.js";import{R as D,T as B,P as O,C as y,a as k,X as H,b as N,D as b,O as v}from"./chunk-index-DWdFzdOy.js";import{c as R}from"./chunk-index-CHvSb-jZ.js";import{c as a}from"./chunk-utils-BQHNewu7.js";import{B as C}from"./chunk-button-V7i2eFBu.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-createLucideIcon-BG6cK4Lr.js";import"./chunk-index-7Pyck7If.js";import"./chunk-index-kLBjVXXK.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-jOetL7wa.js";import"./chunk-index-MZ0GTvUX.js";import"./chunk-index-BipiRGrn.js";import"./chunk-index-jR4Qkc5T.js";import"./chunk-index-DSejAAwT.js";import"./chunk-index-BpLptVX5.js";import"./chunk-index-BzMW0C2i.js";const m=D,_=B,E=O,h=n.forwardRef(({className:t,...s},o)=>e.jsx(v,{className:a("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",t),...s,ref:o}));h.displayName=v.displayName;const I=R("fixed z-50 gap-4 bg-background p-6 shadow-[0_4px_0_rgba(0,0,0,0.12)] transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),d=n.forwardRef(({side:t="right",className:s,children:o,...w},T)=>e.jsxs(E,{children:[e.jsx(h,{}),e.jsxs(y,{ref:T,className:a(I({side:t}),s),...w,children:[o,e.jsxs(k,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[e.jsx(H,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));d.displayName=y.displayName;const l=({className:t,...s})=>e.jsx("div",{className:a("flex flex-col space-y-2 text-center sm:text-left",t),...s});l.displayName="SheetHeader";const c=n.forwardRef(({className:t,...s},o)=>e.jsx(N,{ref:o,className:a("text-lg font-semibold text-foreground",t),...s}));c.displayName=N.displayName;const p=n.forwardRef(({className:t,...s},o)=>e.jsx(b,{ref:o,className:a("text-sm text-muted-foreground",t),...s}));p.displayName=b.displayName;h.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};l.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};c.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const te={title:"Components/Sheet",component:m,tags:["autodocs"]},r={render:()=>e.jsxs(m,{children:[e.jsx(_,{asChild:!0,children:e.jsx(C,{variant:"outline",children:"Open Sheet"})}),e.jsxs(d,{children:[e.jsxs(l,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{className:"text-sm text-muted-foreground",children:"Sheet content goes here."})})]})]})},i={render:()=>e.jsxs(m,{children:[e.jsx(_,{asChild:!0,children:e.jsx(C,{variant:"outline",children:"Open Left"})}),e.jsx(d,{side:"left",children:e.jsxs(l,{children:[e.jsx(c,{children:"Navigation"}),e.jsx(p,{children:"Browse the sidebar."})]})})]})};var f,u,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm text-muted-foreground">Sheet content goes here.</p>
        </div>
      </SheetContent>
    </Sheet>
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,S,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Left</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription>Browse the sidebar.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const se=["Default","Left"];export{r as Default,i as Left,se as __namedExportsOrder,te as default};
