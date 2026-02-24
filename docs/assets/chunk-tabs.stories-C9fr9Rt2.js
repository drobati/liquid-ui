import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as l}from"./chunk-index-C6d52tmz.js";import{u as H,P as T,c as N,a as J}from"./chunk-index-7Pyck7If.js";import{R as Q,I as U,c as M}from"./chunk-index-COLxck2A.js";import{P as W}from"./chunk-index-BpLptVX5.js";import{u as X}from"./chunk-index-BeV0_RF-.js";import{u as Y}from"./chunk-index-MZ0GTvUX.js";import{c as j}from"./chunk-utils-BQHNewu7.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-kLBjVXXK.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-jOetL7wa.js";import"./chunk-index-jR4Qkc5T.js";var h="Tabs",[Z]=J(h,[M]),S=M(),[ee,y]=Z(h),V=l.forwardRef((t,a)=>{const{__scopeTabs:s,value:r,onValueChange:i,defaultValue:d,orientation:n="horizontal",dir:u,activationMode:g="automatic",...f}=t,c=X(u),[o,v]=H({prop:r,onChange:i,defaultProp:d??"",caller:h});return e.jsx(ee,{scope:s,baseId:Y(),value:o,onValueChange:v,orientation:n,dir:c,activationMode:g,children:e.jsx(T.div,{dir:c,"data-orientation":n,...f,ref:a})})});V.displayName=h;var D="TabsList",F=l.forwardRef((t,a)=>{const{__scopeTabs:s,loop:r=!0,...i}=t,d=y(D,s),n=S(s);return e.jsx(Q,{asChild:!0,...n,orientation:d.orientation,dir:d.dir,loop:r,children:e.jsx(T.div,{role:"tablist","aria-orientation":d.orientation,...i,ref:a})})});F.displayName=D;var L="TabsTrigger",k=l.forwardRef((t,a)=>{const{__scopeTabs:s,value:r,disabled:i=!1,...d}=t,n=y(L,s),u=S(s),g=O(n.baseId,r),f=K(n.baseId,r),c=r===n.value;return e.jsx(U,{asChild:!0,...u,focusable:!i,active:c,children:e.jsx(T.button,{type:"button",role:"tab","aria-selected":c,"aria-controls":f,"data-state":c?"active":"inactive","data-disabled":i?"":void 0,disabled:i,id:g,...d,ref:a,onMouseDown:N(t.onMouseDown,o=>{!i&&o.button===0&&o.ctrlKey===!1?n.onValueChange(r):o.preventDefault()}),onKeyDown:N(t.onKeyDown,o=>{[" ","Enter"].includes(o.key)&&n.onValueChange(r)}),onFocus:N(t.onFocus,()=>{const o=n.activationMode!=="manual";!c&&!i&&o&&n.onValueChange(r)})})})});k.displayName=L;var $="TabsContent",G=l.forwardRef((t,a)=>{const{__scopeTabs:s,value:r,forceMount:i,children:d,...n}=t,u=y($,s),g=O(u.baseId,r),f=K(u.baseId,r),c=r===u.value,o=l.useRef(c);return l.useEffect(()=>{const v=requestAnimationFrame(()=>o.current=!1);return()=>cancelAnimationFrame(v)},[]),e.jsx(W,{present:i||c,children:({present:v})=>e.jsx(T.div,{"data-state":c?"active":"inactive","data-orientation":u.orientation,role:"tabpanel","aria-labelledby":g,hidden:!v,id:f,tabIndex:0,...n,ref:a,style:{...t.style,animationDuration:o.current?"0s":void 0},children:v&&d})})});G.displayName=$;function O(t,a){return`${t}-trigger-${a}`}function K(t,a){return`${t}-content-${a}`}var te=V,B=F,q=k,z=G;const C=te,w=l.forwardRef(({className:t,...a},s)=>e.jsx(B,{ref:s,className:j("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground shadow-[0_3px_0_rgba(0,0,0,0.1)]",t),...a}));w.displayName=B.displayName;const m=l.forwardRef(({className:t,...a},s)=>e.jsx(q,{ref:s,className:j("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",t),...a}));m.displayName=q.displayName;const p=l.forwardRef(({className:t,...a},s)=>e.jsx(z,{ref:s,className:j("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",t),...a}));p.displayName=z.displayName;w.__docgenInfo={description:"",methods:[]};m.__docgenInfo={description:"",methods:[]};p.__docgenInfo={description:"",methods:[]};const fe={title:"Components/Tabs",component:C,tags:["autodocs"]},b={render:()=>e.jsxs(C,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(w,{children:[e.jsx(m,{value:"account",children:"Account"}),e.jsx(m,{value:"password",children:"Password"})]}),e.jsx(p,{value:"account",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Make changes to your account here."})}),e.jsx(p,{value:"password",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Change your password here."})})]})},x={render:()=>e.jsxs(C,{defaultValue:"overview",className:"w-[400px]",children:[e.jsxs(w,{className:"grid w-full grid-cols-3",children:[e.jsx(m,{value:"overview",children:"Overview"}),e.jsx(m,{value:"analytics",children:"Analytics"}),e.jsx(m,{value:"reports",children:"Reports"})]}),e.jsx(p,{value:"overview",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Overview content."})}),e.jsx(p,{value:"analytics",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Analytics content."})}),e.jsx(p,{value:"reports",children:e.jsx("p",{className:"text-sm text-muted-foreground p-4",children:"Reports content."})})]})};var _,R,I;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground p-4">
          Make changes to your account here.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground p-4">
          Change your password here.
        </p>
      </TabsContent>
    </Tabs>
}`,...(I=(R=b.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var A,P,E;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <p className="text-sm text-muted-foreground p-4">Overview content.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <p className="text-sm text-muted-foreground p-4">Analytics content.</p>
      </TabsContent>
      <TabsContent value="reports">
        <p className="text-sm text-muted-foreground p-4">Reports content.</p>
      </TabsContent>
    </Tabs>
}`,...(E=(P=x.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};const be=["Default","ThreeTabs"];export{b as Default,x as ThreeTabs,be as __namedExportsOrder,fe as default};
