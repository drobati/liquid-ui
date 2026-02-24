import{j as o}from"./chunk-jsx-runtime-D_zvdyIk.js";import{r as v}from"./chunk-index-C6d52tmz.js";import{c as G}from"./chunk-index-CSJB9oM4.js";import{P as V}from"./chunk-index-D7LgpF0F.js";import{c as X}from"./chunk-utils-BQHNewu7.js";import"./chunk-_commonjsHelpers-CqkleIqs.js";import"./chunk-index-BHISIsRW.js";import"./chunk-index-BXkLL6J-.js";import"./chunk-index-BzMW0C2i.js";import"./chunk-index-jOetL7wa.js";var g="Progress",f=100,[U]=G(g),[k,q]=U(g),A=v.forwardRef((e,r)=>{const{__scopeProgress:i,value:s=null,max:a,getValueLabel:O=z,...T}=e;(a||a===0)&&!x(a)&&console.error(B(`${a}`,"Progress"));const t=x(a)?a:f;s!==null&&!P(s,t)&&console.error(H(`${s}`,"Progress"));const n=P(s,t)?s:null,F=d(n)?O(n,t):void 0;return o.jsx(k,{scope:i,value:n,max:t,children:o.jsx(V.div,{"aria-valuemax":t,"aria-valuemin":0,"aria-valuenow":d(n)?n:void 0,"aria-valuetext":F,role:"progressbar","data-state":C(n,t),"data-value":n??void 0,"data-max":t,...T,ref:r})})});A.displayName=g;var D="ProgressIndicator",M=v.forwardRef((e,r)=>{const{__scopeProgress:i,...s}=e,a=q(D,i);return o.jsx(V.div,{"data-state":C(a.value,a.max),"data-value":a.value??void 0,"data-max":a.max,...s,ref:r})});M.displayName=D;function z(e,r){return`${Math.round(e/r*100)}%`}function C(e,r){return e==null?"indeterminate":e===r?"complete":"loading"}function d(e){return typeof e=="number"}function x(e){return d(e)&&!isNaN(e)&&e>0}function P(e,r){return d(e)&&!isNaN(e)&&e<=r&&e>=0}function B(e,r){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${r}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${f}\`.`}function H(e,r){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${r}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${f} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var L=A,J=M;const l=v.forwardRef(({className:e,value:r,...i},s)=>o.jsx(L,{ref:s,className:X("relative h-4 w-full overflow-hidden rounded-full bg-muted shadow-[0_2px_0_rgba(0,0,0,0.08)]",e),...i,children:o.jsx(J,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(r||0)}%)`}})}));l.displayName=L.displayName;l.__docgenInfo={description:"",methods:[]};const te={title:"Components/Progress",component:l,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}}}},u={args:{value:60,className:"w-[300px]"}},c={args:{value:0,className:"w-[300px]"}},m={args:{value:100,className:"w-[300px]"}},p={render:()=>o.jsxs("div",{className:"flex flex-col gap-4 w-[300px]",children:[o.jsx(l,{value:20}),o.jsx(l,{value:50}),o.jsx(l,{value:80})]})};var N,w,b;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 60,
    className: "w-[300px]"
  }
}`,...(b=(w=u.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var h,_,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 0,
    className: "w-[300px]"
  }
}`,...(y=(_=c.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};var j,E,$;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 100,
    className: "w-[300px]"
  }
}`,...($=(E=m.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var I,R,S;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-[300px]">
      <Progress value={20} />
      <Progress value={50} />
      <Progress value={80} />
    </div>
}`,...(S=(R=p.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const ne=["Default","Empty","Full","AllValues"];export{p as AllValues,u as Default,c as Empty,m as Full,ne as __namedExportsOrder,te as default};
