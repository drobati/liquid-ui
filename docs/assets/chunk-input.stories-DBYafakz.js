import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{I as i}from"./chunk-input-CgrO8t-y.js";import{L as f}from"./chunk-label-CTGlARxh.js";import"./chunk-index-C6d52tmz.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-utils-BQHNewu7.js";import"./chunk-index-D7LgpF0F.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-jOetL7wa.js";import"./chunk-index-CHvSb-jZ.js";const W={title:"Components/Input",component:i,tags:["autodocs"]},r={args:{type:"text",placeholder:"Enter text..."}},t={args:{type:"text",placeholder:"Disabled input",disabled:!0}},a={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(f,{htmlFor:"email",children:"Email"}),e.jsx(i,{type:"email",id:"email",placeholder:"Email"})]})},s={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(f,{htmlFor:"picture",children:"Picture"}),e.jsx(i,{id:"picture",type:"file"})]})};var o,l,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter text..."
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,n,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const _=["Default","Disabled","WithLabel","File"];export{r as Default,t as Disabled,s as File,a as WithLabel,_ as __namedExportsOrder,W as default};
