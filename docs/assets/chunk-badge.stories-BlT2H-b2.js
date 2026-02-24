import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{c as j,a as O}from"./chunk-utils-COMqstzJ.js";const w=O("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow-[0_2px_0_oklch(0.35_0.15_264)] hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground shadow-[0_2px_0_oklch(0.35_0.1_277)] hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow-[0_2px_0_oklch(0.38_0.16_27)] hover:bg-destructive/80",outline:"text-foreground shadow-[0_2px_0_rgba(0,0,0,0.1)]"}},defaultVariants:{variant:"default"}});function r({className:B,variant:S,...D}){return e.jsx("div",{className:j(w({variant:S}),B),...D})}r.__docgenInfo={description:"",methods:[],displayName:"Badge",composes:["VariantProps"]};const k={title:"Components/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","secondary","destructive","outline"]}}},a={args:{children:"Badge"}},t={args:{variant:"secondary",children:"Secondary"}},n={args:{variant:"destructive",children:"Destructive"}},s={args:{variant:"outline",children:"Outline"}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(r,{variant:"default",children:"Default"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"destructive",children:"Destructive"}),e.jsx(r,{variant:"outline",children:"Outline"})]})};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secondary"
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,m,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Destructive"
  }
}`,...(v=(m=n.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var f,x,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Outline"
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var _,y,b;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
}`,...(b=(y=o.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const A=["Default","Secondary","Destructive","Outline","AllVariants"];export{o as AllVariants,a as Default,n as Destructive,s as Outline,t as Secondary,A as __namedExportsOrder,k as default};
