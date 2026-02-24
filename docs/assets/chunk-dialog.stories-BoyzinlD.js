import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r}from"./chunk-index-C6d52tmz.js";import{R as w,T as C,P as I,C as N,a as F,X as T,b as j,D as y,O as v}from"./chunk-index-DWdFzdOy.js";import{c as s}from"./chunk-utils-BQHNewu7.js";import{B as g}from"./chunk-button-16pLANHd.js";import{I as f}from"./chunk-input-CgrO8t-y.js";import{L as u}from"./chunk-label-CTGlARxh.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-createLucideIcon-BG6cK4Lr.js";import"./chunk-index-7Pyck7If.js";import"./chunk-index-kLBjVXXK.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-jOetL7wa.js";import"./chunk-index-MZ0GTvUX.js";import"./chunk-index-BipiRGrn.js";import"./chunk-index-jR4Qkc5T.js";import"./chunk-index-DSejAAwT.js";import"./chunk-index-BpLptVX5.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-CHvSb-jZ.js";import"./chunk-index-D7LgpF0F.js";const b=w,k=C,R=I,l=r.forwardRef(({className:a,...t},o)=>e.jsx(v,{ref:o,className:s("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t}));l.displayName=v.displayName;const n=r.forwardRef(({className:a,children:t,...o},_)=>e.jsxs(R,{children:[e.jsx(l,{}),e.jsxs(N,{ref:_,className:s("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-[0_4px_0_rgba(0,0,0,0.12)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...o,children:[t,e.jsxs(F,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[e.jsx(T,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));n.displayName=N.displayName;const d=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col space-y-1.5 text-center sm:text-left",a),...t});d.displayName="DialogHeader";const m=({className:a,...t})=>e.jsx("div",{className:s("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",a),...t});m.displayName="DialogFooter";const c=r.forwardRef(({className:a,...t},o)=>e.jsx(j,{ref:o,className:s("text-lg font-semibold leading-none tracking-tight",a),...t}));c.displayName=j.displayName;const p=r.forwardRef(({className:a,...t},o)=>e.jsx(y,{ref:o,className:s("text-sm text-muted-foreground",a),...t}));p.displayName=y.displayName;l.__docgenInfo={description:"",methods:[]};n.__docgenInfo={description:"",methods:[]};d.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};c.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const ee={title:"Components/Dialog",component:b,tags:["autodocs"]},i={render:()=>e.jsxs(b,{children:[e.jsx(k,{asChild:!0,children:e.jsx(g,{variant:"outline",children:"Open Dialog"})}),e.jsxs(n,{className:"sm:max-w-[425px]",children:[e.jsxs(d,{children:[e.jsx(c,{children:"Edit profile"}),e.jsx(p,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(f,{id:"name",defaultValue:"John Doe",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(u,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(f,{id:"username",defaultValue:"@johndoe",className:"col-span-3"})]})]}),e.jsx(m,{children:e.jsx(g,{type:"submit",children:"Save changes"})})]})]})};var x,h,D;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" defaultValue="@johndoe" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...(D=(h=i.parameters)==null?void 0:h.docs)==null?void 0:D.source}}};const ae=["Default"];export{i as Default,ae as __namedExportsOrder,ee as default};
