import{j as e}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as o}from"./chunk-index-C6d52tmz.js";import{c as t}from"./chunk-utils-BQHNewu7.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";const c=o.forwardRef(({className:a,...l},s)=>e.jsx("div",{className:"relative w-full overflow-auto rounded-lg border shadow-[0_3px_0_rgba(0,0,0,0.1)]",children:e.jsx("table",{ref:s,className:t("w-full caption-bottom text-sm",a),...l})}));c.displayName="Table";const m=o.forwardRef(({className:a,...l},s)=>e.jsx("thead",{ref:s,className:t("[&_tr]:border-b",a),...l}));m.displayName="TableHeader";const b=o.forwardRef(({className:a,...l},s)=>e.jsx("tbody",{ref:s,className:t("[&_tr:last-child]:border-0",a),...l}));b.displayName="TableBody";const p=o.forwardRef(({className:a,...l},s)=>e.jsx("tfoot",{ref:s,className:t("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...l}));p.displayName="TableFooter";const n=o.forwardRef(({className:a,...l},s)=>e.jsx("tr",{ref:s,className:t("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...l}));n.displayName="TableRow";const r=o.forwardRef(({className:a,...l},s)=>e.jsx("th",{ref:s,className:t("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",a),...l}));r.displayName="TableHead";const d=o.forwardRef(({className:a,...l},s)=>e.jsx("td",{ref:s,className:t("p-4 align-middle [&:has([role=checkbox])]:pr-0",a),...l}));d.displayName="TableCell";const f=o.forwardRef(({className:a,...l},s)=>e.jsx("caption",{ref:s,className:t("mt-4 text-sm text-muted-foreground",a),...l}));f.displayName="TableCaption";c.__docgenInfo={description:"",methods:[],displayName:"Table"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};p.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};r.__docgenInfo={description:"",methods:[],displayName:"TableHead"};n.__docgenInfo={description:"",methods:[],displayName:"TableRow"};d.__docgenInfo={description:"",methods:[],displayName:"TableCell"};f.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const g={title:"Components/Table",component:c,tags:["autodocs"]},i={render:()=>e.jsxs(c,{children:[e.jsx(m,{children:e.jsxs(n,{children:[e.jsx(r,{className:"w-[100px]",children:"Invoice"}),e.jsx(r,{children:"Status"}),e.jsx(r,{children:"Method"}),e.jsx(r,{className:"text-right",children:"Amount"})]})}),e.jsxs(b,{children:[e.jsxs(n,{children:[e.jsx(d,{className:"font-medium",children:"INV001"}),e.jsx(d,{children:"Paid"}),e.jsx(d,{children:"Credit Card"}),e.jsx(d,{className:"text-right",children:"$250.00"})]}),e.jsxs(n,{children:[e.jsx(d,{className:"font-medium",children:"INV002"}),e.jsx(d,{children:"Pending"}),e.jsx(d,{children:"PayPal"}),e.jsx(d,{className:"text-right",children:"$150.00"})]}),e.jsxs(n,{children:[e.jsx(d,{className:"font-medium",children:"INV003"}),e.jsx(d,{children:"Unpaid"}),e.jsx(d,{children:"Bank Transfer"}),e.jsx(d,{className:"text-right",children:"$350.00"})]})]})]})};var T,x,h;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$150.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Unpaid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
    </Table>
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const w=["Default"];export{i as Default,w as __namedExportsOrder,g as default};
