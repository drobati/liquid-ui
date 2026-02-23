import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{I as i,L as f}from"./chunk-label-C7cTh6pl.js";import"./chunk-index-C6d52tmz.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-utils-COMqstzJ.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-2vtAB4s9.js";const I={title:"Components/Input",component:i,tags:["autodocs"]},r={args:{type:"text",placeholder:"Enter text..."}},a={args:{type:"text",placeholder:"Disabled input",disabled:!0}},t={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(f,{htmlFor:"email",children:"Email"}),e.jsx(i,{type:"email",id:"email",placeholder:"Email"})]})},s={render:()=>e.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[e.jsx(f,{htmlFor:"picture",children:"Picture"}),e.jsx(i,{id:"picture",type:"file"})]})};var l,o,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Enter text..."
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var n,p,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: "text",
    placeholder: "Disabled input",
    disabled: true
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,u,x;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...(x=(u=t.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var g,h,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const N=["Default","Disabled","WithLabel","File"];export{r as Default,a as Disabled,s as File,t as WithLabel,N as __namedExportsOrder,I as default};
