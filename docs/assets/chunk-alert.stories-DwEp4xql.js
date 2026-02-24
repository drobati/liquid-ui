import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as c}from"./chunk-index-C6d52tmz.js";import{c as A}from"./chunk-index-CHvSb-jZ.js";import{c as d}from"./chunk-utils-BQHNewu7.js";import{c as f}from"./chunk-createLucideIcon-BG6cK4Lr.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],_=f("circle-alert",y);/**
 * @license lucide-react v0.575.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],j=f("terminal",N),k=A("relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-background text-foreground shadow-[0_3px_0_oklch(0.35_0.15_264/0.2)]",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive shadow-[0_3px_0_oklch(0.3_0.2_27)]"}},defaultVariants:{variant:"default"}}),a=c.forwardRef(({className:r,variant:t,...s},h)=>e.jsx("div",{ref:h,role:"alert",className:d(k({variant:t}),r),...s}));a.displayName="Alert";const i=c.forwardRef(({className:r,...t},s)=>e.jsx("h5",{ref:s,className:d("mb-1 font-medium leading-none tracking-tight",r),...t}));i.displayName="AlertTitle";const l=c.forwardRef(({className:r,...t},s)=>e.jsx("div",{ref:s,className:d("text-sm [&_p]:leading-relaxed",r),...t}));l.displayName="AlertDescription";a.__docgenInfo={description:"",methods:[],displayName:"Alert"};i.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};l.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const E={title:"Components/Alert",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"]}}},o={render:()=>e.jsxs(a,{children:[e.jsx(j,{className:"h-4 w-4"}),e.jsx(i,{children:"Heads up!"}),e.jsx(l,{children:"You can add components to your app using the CLI."})]})},n={render:()=>e.jsxs(a,{variant:"destructive",children:[e.jsx(_,{className:"h-4 w-4"}),e.jsx(i,{children:"Error"}),e.jsx(l,{children:"Your session has expired. Please log in again."})]})};var p,m,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const R=["Default","Destructive"];export{o as Default,n as Destructive,R as __namedExportsOrder,E as default};
