import{r as _,a as Wn,j as e}from"./index-e4z3-022.js";var fo=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  cursor: default;
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: #3c82f7;
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: #34c759;
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}`,yo={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-annotation-popup-css-styles",t.textContent=fo,document.head.appendChild(t))}var O=yo,bo=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),xo=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ms=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",children:e.jsx("path",{d:"M3 8l3.5 3.5L13 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),ps=({size:t=14})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none",children:e.jsx("path",{d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),wo=({size:t=24,style:o={}})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o,children:[e.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[e.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_list_sparkle",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),lt=({size:t=20})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[e.jsx("circle",{cx:"10",cy:"10.5",r:"5.25",stroke:"currentColor",strokeWidth:"1.25"}),e.jsx("path",{d:"M8.5 8.75C8.5 7.92 9.17 7.25 10 7.25C10.83 7.25 11.5 7.92 11.5 8.75C11.5 9.58 10.83 10.25 10 10.25V11",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"10",cy:"13",r:"0.75",fill:"currentColor"})]}),On=({size:t=14})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 14 14",fill:"none",children:[e.jsx("style",{children:`
      @keyframes checkDraw {
        0% {
          stroke-dashoffset: 12;
        }
        100% {
          stroke-dashoffset: 0;
        }
      }
      @keyframes checkBounce {
        0% {
          transform: scale(0.5);
          opacity: 0;
        }
        50% {
          transform: scale(1.12);
          opacity: 1;
        }
        75% {
          transform: scale(0.95);
        }
        100% {
          transform: scale(1);
        }
      }
      .check-path-animated {
        stroke-dasharray: 12;
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: checkDraw 0.18s ease-out, checkBounce 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
    `}),e.jsx("path",{className:"check-path-animated",d:"M3.9375 7L6.125 9.1875L10.5 4.8125",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),gs=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),ko=({size:t=24,copied:o=!1})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("style",{children:`
      .copy-icon, .check-icon {
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
    `}),e.jsxs("g",{className:"copy-icon",style:{opacity:o?0:1,transform:o?"scale(0.8)":"scale(1)",transformOrigin:"center"},children:[e.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsxs("g",{className:"check-icon",style:{opacity:o?1:0,transform:o?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Co=({size:t=24,state:o="idle"})=>{const l=o==="idle",i=o==="sent",c=o==="failed",m=o==="sending";return e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("style",{children:`
        .send-arrow-icon, .send-check-icon, .send-error-icon {
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
      `}),e.jsx("g",{className:"send-arrow-icon",style:{opacity:l?1:m?.5:0,transform:l?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:e.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsxs("g",{className:"send-check-icon",style:{opacity:i?1:0,transform:i?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"#22c55e",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:"send-error-icon",style:{opacity:c?1:0,transform:c?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 8V12",stroke:"#ef4444",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"#ef4444",stroke:"#ef4444",strokeWidth:"1"})]})]})},hs=({size:t=24,sent:o=!1})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 22 21",fill:"none",children:[e.jsx("style",{children:`
      .send-icon, .sent-icon {
        transition: opacity 0.2s ease, transform 0.2s ease;
      }
    `}),e.jsxs("g",{className:"send-icon",style:{opacity:o?0:1,transform:o?"scale(0.8)":"scale(1)",transformOrigin:"center"},children:[e.jsx("path",{d:"M9.5 5H6.5C4.84315 5 3.5 6.34315 3.5 8V15C3.5 16.6569 4.84315 18 6.5 18H13.5C15.1569 18 16.5 16.6569 16.5 15V12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M13.5 8.5L18.5 3.5M18.5 3.5L14.4524 3.5M18.5 3.5L18.5 7.54762",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.5 13.75H12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M7.5 10.75H10.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),e.jsxs("g",{className:"sent-icon",style:{opacity:o?1:0,transform:o?"scale(1)":"scale(0.8)",transformOrigin:"center"},children:[e.jsx("path",{d:"M11 19C6.58172 19 3 15.4182 3 11C3 6.58172 6.58172 3 11 3C15.4182 3 19 6.58172 19 11C19 15.4182 15.4182 19 11 19Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14 9L10 13.25L8.25 11.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),fs=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4.91516 12.7108C4.63794 12.2883 4.63705 11.7565 4.91242 11.3328C5.84146 9.9033 8.30909 6.74994 12 6.74994C15.6909 6.74994 18.1585 9.9033 19.0876 11.3328C19.3629 11.7565 19.3621 12.2883 19.0848 12.7108C18.1537 14.13 15.6873 17.2499 12 17.2499C8.31272 17.2499 5.8463 14.13 4.91516 12.7108Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 14.25C13.2426 14.25 14.25 13.2426 14.25 12C14.25 10.7574 13.2426 9.75 12 9.75C10.7574 9.75 9.75 10.7574 9.75 12C9.75 13.2426 10.7574 14.25 12 14.25Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ys=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),bs=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),e.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),vo=({size:t=24,isOpen:o=!0})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("style",{children:`
      .eye-open, .eye-closed {
        transition: opacity 0.2s ease;
      }
    `}),e.jsxs("g",{className:"eye-open",style:{opacity:o?1:0},children:[e.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsxs("g",{className:"eye-closed",style:{opacity:o?0:1},children:[e.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),e.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),jo=({size:t=24,isPaused:o=!1})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("style",{children:`
      .pause-bar, .play-triangle {
        transition: opacity 0.15s ease;
      }
    `}),e.jsx("path",{className:"pause-bar",d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:o?0:1}}),e.jsx("path",{className:"pause-bar",d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",style:{opacity:o?0:1}}),e.jsx("path",{className:"play-triangle",d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5",style:{opacity:o?1:0}})]}),xs=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M4.91516 12.7108C4.63794 12.2883 4.63705 11.7565 4.91242 11.3328C5.84146 9.9033 8.30909 6.74994 12 6.74994C15.6909 6.74994 18.1585 9.9033 19.0876 11.3328C19.3629 11.7565 19.3621 12.2883 19.0848 12.7108C18.1537 14.13 15.6873 17.2499 12 17.2499C8.31272 17.2499 5.8463 14.13 4.91516 12.7108Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M9 12H15",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Lo=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),ws=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M9.25 5.75C9.80228 5.75 10.25 6.19772 10.25 6.75L10.25 17.25C10.25 17.8023 9.80228 18.25 9.25 18.25L6.75 18.25C6.19772 18.25 5.75 17.8023 5.75 17.25L5.75 6.75C5.75 6.19772 6.19772 5.75 6.75 5.75L9.25 5.75Z",stroke:"currentColor",strokeWidth:"1.5"}),e.jsx("path",{d:"M17.25 5.75C17.8023 5.75 18.25 6.19772 18.25 6.75L18.25 17.25C18.25 17.8023 17.8023 18.25 17.25 18.25L14.75 18.25C14.1977 18.25 13.75 17.8023 13.75 17.25L13.75 6.75C13.75 6.19772 14.1977 5.75 14.75 5.75L17.25 5.75Z",stroke:"currentColor",strokeWidth:"1.5"})]}),ks=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),e.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Cs=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})}),So=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),vs=({size:t=16,style:o={}})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",style:o,children:[e.jsx("path",{d:"M18.8875 19.25L19.6112 19.0533C19.6823 19.3148 19.6068 19.5943 19.4137 19.7844C19.2206 19.9746 18.9399 20.0457 18.6795 19.9706L18.8875 19.25ZM14.9631 18.244L15.263 18.9314L14.9631 18.244ZM18.0914 15.6309L17.4669 15.2156L18.0914 15.6309ZM4.75 11.8041H5.5C5.5 15.2664 8.39065 18.1081 12 18.1081V18.8581V19.6081C7.60123 19.6081 4 16.1334 4 11.8041H4.75ZM19.25 11.8041H18.5C18.5 8.34166 15.6094 5.5 12 5.5V4.75V4C16.3988 4 20 7.47476 20 11.8041H19.25ZM12 4.75V5.5C8.39065 5.5 5.5 8.34166 5.5 11.8041H4.75H4C4 7.47476 7.60123 4 12 4V4.75ZM18.0914 15.6309L17.4669 15.2156C18.1213 14.2315 18.5 13.0612 18.5 11.8041H19.25H20C20 13.3681 19.5276 14.8257 18.716 16.0462L18.0914 15.6309ZM18.8875 19.25L18.1638 19.4467L17.2953 16.2517L18.019 16.055L18.7428 15.8583L19.6112 19.0533L18.8875 19.25ZM12 18.8581V18.1081C12.9509 18.1081 13.8518 17.9105 14.6632 17.5565L14.9631 18.244L15.263 18.9314C14.2652 19.3667 13.1603 19.6081 12 19.6081V18.8581ZM15.3144 18.2188L15.5224 17.4982L19.0955 18.5294L18.8875 19.25L18.6795 19.9706L15.1064 18.9394L15.3144 18.2188ZM14.9631 18.244L14.6632 17.5565C14.925 17.4423 15.2286 17.4134 15.5224 17.4982L15.3144 18.2188L15.1064 18.9394C15.1677 18.957 15.223 18.9489 15.263 18.9314L14.9631 18.244ZM18.0914 15.6309L18.716 16.0462C18.7451 16.0024 18.7636 15.9351 18.7428 15.8583L18.019 16.055L17.2953 16.2517C17.1957 15.8853 17.2716 15.5093 17.4669 15.2156L18.0914 15.6309Z",fill:"currentColor"}),e.jsx("circle",{cx:"15",cy:"11.75",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"12",cy:"11.75",r:"1",fill:"currentColor"}),e.jsx("circle",{cx:"9",cy:"11.75",r:"1",fill:"currentColor"})]}),js=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_2_45)",children:e.jsx("path",{d:"M16.25 8.75L10 15.25L7.25 12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2_45",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Ls=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsx("g",{clipPath:"url(#clip0_2_37)",children:e.jsx("path",{d:"M17.5962 7.75L9.42308 16.25L6.15385 12.6538",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2_37",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Ss=({size:t=24})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_checkmark_circle)",children:[e.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_checkmark_circle",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Xt=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:[e.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[e.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_2_53",children:e.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Io=({size:t=24})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",children:e.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),$o=({size:t=16})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:[e.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),e.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Eo=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 20 20",fill:"none",children:e.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Hn=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),No=({size:t=24})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Mo=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Is=({size:t=16})=>e.jsx("svg",{width:t,height:t,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M8.5 11.5L12 8L8.5 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),$s=({size:t=20,color:o="#4C74FF"})=>e.jsxs("svg",{width:t,height:t,viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("style",{children:`
      @keyframes bunnyEnterEar {
        0% { opacity: 0; transform: scale(0.8); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes bunnyEnterFace {
        0% { opacity: 0; transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes bunnyEnterEye {
        0% { opacity: 0; transform: scale(0.5); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes leftEyeLook {
        0%, 8% { transform: translate(0, 0); }
        10%, 18% { transform: translate(1.5px, 0); }
        20%, 22% { transform: translate(1.5px, 0) scaleY(0.1); }
        24%, 32% { transform: translate(1.5px, 0); }
        35%, 48% { transform: translate(-0.8px, -0.6px); }
        52%, 54% { transform: translate(0, 0) scaleY(0.1); }
        56%, 68% { transform: translate(0, 0); }
        72%, 82% { transform: translate(-0.5px, 0.5px); }
        85%, 100% { transform: translate(0, 0); }
      }
      @keyframes rightEyeLook {
        0%, 8% { transform: translate(0, 0); }
        10%, 18% { transform: translate(0.8px, 0); }
        20%, 22% { transform: translate(0.8px, 0) scaleY(0.1); }
        24%, 32% { transform: translate(0.8px, 0); }
        35%, 48% { transform: translate(-1.5px, -0.6px); }
        52%, 54% { transform: translate(0, 0) scaleY(0.1); }
        56%, 68% { transform: translate(0, 0); }
        72%, 82% { transform: translate(-1.2px, 0.5px); }
        85%, 100% { transform: translate(0, 0); }
      }
      @keyframes leftEarTwitch {
        0%, 9% { transform: rotate(0deg); }
        12% { transform: rotate(-8deg); }
        16%, 34% { transform: rotate(0deg); }
        38% { transform: rotate(-12deg); }
        42% { transform: rotate(-6deg); }
        48%, 100% { transform: rotate(0deg); }
      }
      @keyframes rightEarTwitch {
        0%, 9% { transform: rotate(0deg); }
        12% { transform: rotate(6deg); }
        16%, 34% { transform: rotate(0deg); }
        38% { transform: rotate(10deg); }
        42% { transform: rotate(4deg); }
        48%, 71% { transform: rotate(0deg); }
        74% { transform: rotate(8deg); }
        78%, 100% { transform: rotate(0deg); }
      }
      .bunny-eye-left {
        opacity: 0;
        animation: bunnyEnterEye 0.3s ease-out 0.35s forwards, leftEyeLook 5s ease-in-out 0.65s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .bunny-eye-right {
        opacity: 0;
        animation: bunnyEnterEye 0.3s ease-out 0.4s forwards, rightEyeLook 5s ease-in-out 0.7s infinite;
        transform-origin: center;
        transform-box: fill-box;
      }
      .bunny-ear-left {
        opacity: 0;
        animation: bunnyEnterEar 0.3s ease-out 0.1s forwards, leftEarTwitch 5s ease-in-out 0.4s infinite;
        transform-origin: bottom center;
        transform-box: fill-box;
      }
      .bunny-ear-right {
        opacity: 0;
        animation: bunnyEnterEar 0.3s ease-out 0.15s forwards, rightEarTwitch 5s ease-in-out 0.45s infinite;
        transform-origin: bottom center;
        transform-box: fill-box;
      }
      .bunny-face {
        opacity: 0;
        animation: bunnyEnterFace 0.3s ease-out 0.25s forwards;
        transform-origin: center;
        transform-box: fill-box;
      }
      svg:hover .bunny-eye-left,
      svg:hover .bunny-eye-right {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      .bunny-happy-face {
        opacity: 0;
        transition: opacity 0.2s ease;
      }
      svg:hover .bunny-happy-face {
        opacity: 1;
      }
    `}),e.jsx("rect",{width:"28",height:"28",fill:"transparent"}),e.jsx("path",{className:"bunny-ear-left",d:"M3.738 10.2164L7.224 2.007H9.167L5.676 10.2164H3.738ZM10.791 6.42705C10.791 5.90346 10.726 5.42764 10.596 4.99959C10.47 4.57155 10.292 4.16643 10.063 3.78425C9.833 3.39825 9.56 3.01797 9.243 2.64343C8.926 2.26507 8.767 2.07589 8.767 2.07589L10.24 0.957996C10.24 0.957996 10.433 1.17203 10.819 1.60007C11.209 2.0243 11.559 2.49056 11.869 2.99886C12.178 3.50717 12.413 4.04222 12.574 4.60403C12.734 5.16584 12.814 5.77352 12.814 6.42705C12.814 7.10734 12.73 7.7303 12.562 8.29593C12.394 8.85774 12.153 9.3966 11.84 9.9126C11.526 10.4247 11.181 10.8833 10.802 11.2884C10.428 11.6974 10.24 11.9018 10.24 11.9018L8.767 10.7839C8.767 10.7839 8.924 10.5948 9.237 10.2164C9.554 9.8419 9.83 9.4597 10.063 9.06985C10.3 8.6762 10.479 8.26726 10.602 7.84304C10.728 7.41499 10.791 6.943 10.791 6.42705Z",fill:o}),e.jsx("path",{className:"bunny-ear-right",d:"M15.003 10.2164L18.489 2.007H20.432L16.941 10.2164H15.003ZM22.056 6.42705C22.056 5.90346 21.991 5.42764 21.861 4.99959C21.735 4.57155 21.557 4.16643 21.328 3.78425C21.098 3.39825 20.825 3.01797 20.508 2.64343C20.191 2.26507 20.032 2.07589 20.032 2.07589L21.505 0.957996C21.505 0.957996 21.698 1.17203 22.084 1.60007C22.474 2.0243 22.824 2.49056 23.133 2.99886C23.443 3.50717 23.678 4.04222 23.839 4.60403C23.999 5.16584 24.079 5.77352 24.079 6.42705C24.079 7.10734 23.995 7.7303 23.827 8.29593C23.659 8.85774 23.418 9.3966 23.105 9.9126C22.791 10.4247 22.445 10.8833 22.067 11.2884C21.693 11.6974 21.505 11.9018 21.505 11.9018L20.032 10.7839C20.032 10.7839 20.189 10.5948 20.502 10.2164C20.819 9.8419 21.094 9.4597 21.328 9.06985C21.565 8.6762 21.744 8.26726 21.866 7.84304C21.993 7.41499 22.056 6.943 22.056 6.42705Z",fill:o}),e.jsx("path",{className:"bunny-face",d:"M2.03 20.4328C2.03 20.9564 2.093 21.4322 2.219 21.8602C2.345 22.2883 2.523 22.6953 2.752 23.0813C2.981 23.4635 3.254 23.8419 3.572 24.2164C3.889 24.5948 4.047 24.7839 4.047 24.7839L2.574 25.9018C2.574 25.9018 2.379 25.6878 1.989 25.2598C1.603 24.8355 1.256 24.3693 0.946 23.861C0.636 23.3527 0.401 22.8176 0.241 22.2558C0.08 21.694 0 21.0863 0 20.4328C0 19.7525 0.084 19.1314 0.252 18.5696C0.421 18.004 0.661 17.4651 0.975 16.953C1.288 16.4371 1.632 15.9765 2.007 15.5714C2.385 15.1625 2.574 14.958 2.574 14.958L4.047 16.0759C4.047 16.0759 3.889 16.2651 3.572 16.6434C3.258 17.018 2.983 17.4021 2.746 17.7957C2.513 18.1855 2.335 18.5945 2.213 19.0225C2.091 19.4467 2.03 19.9168 2.03 20.4328ZM23.687 20.4271C23.687 19.9035 23.622 19.4276 23.492 18.9996C23.366 18.5715 23.188 18.1664 22.959 17.7843C22.729 17.3982 22.456 17.018 22.139 16.6434C21.822 16.2651 21.663 16.0759 21.663 16.0759L23.136 14.958C23.136 14.958 23.329 15.172 23.715 15.6001C24.105 16.0243 24.455 16.4906 24.765 16.9989C25.074 17.5072 25.309 18.0422 25.47 18.604C25.63 19.1658 25.71 19.7735 25.71 20.4271C25.71 21.1073 25.626 21.7303 25.458 22.2959C25.29 22.8577 25.049 23.3966 24.736 23.9126C24.422 24.4247 24.077 24.8833 23.698 25.2884C23.324 25.6974 23.136 25.9018 23.136 25.9018L21.663 24.7839C21.663 24.7839 21.82 24.5948 22.133 24.2164C22.45 23.8419 22.726 23.4597 22.959 23.0698C23.196 22.6762 23.375 22.2673 23.498 21.843C23.624 21.415 23.687 20.943 23.687 20.4271Z",fill:o}),e.jsx("circle",{className:"bunny-eye-left",cx:"8.277",cy:"20.466",r:"1.8",fill:o}),e.jsx("circle",{className:"bunny-eye-right",cx:"19.878",cy:"20.466",r:"1.8",fill:o}),e.jsx("text",{className:"bunny-happy-face",x:"14",y:"26",textAnchor:"middle",fontSize:"12",fontWeight:"bold",fill:o,fontFamily:"system-ui, -apple-system, sans-serif",children:"˃ ᵕ ˂"})]}),Gn=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],Ut=Gn.flatMap(t=>[`:not([${t}])`,`:not([${t}] *)`]).join(""),en="feedback-freeze-styles",Qt="__agentation_freeze";function Po(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:o=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const t=window;return t[Qt]||(t[Qt]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),t[Qt]}var P=Po();typeof window<"u"&&!P.installed&&(P.origSetTimeout=window.setTimeout.bind(window),P.origSetInterval=window.setInterval.bind(window),P.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(t,o,...l)=>typeof t=="string"?P.origSetTimeout(t,o):P.origSetTimeout((...i)=>{P.frozen?P.frozenTimeoutQueue.push(()=>t(...i)):t(...i)},o,...l),window.setInterval=(t,o,...l)=>typeof t=="string"?P.origSetInterval(t,o):P.origSetInterval((...i)=>{P.frozen||t(...i)},o,...l),window.requestAnimationFrame=t=>P.origRAF(o=>{P.frozen?P.frozenRAFQueue.push(t):t(o)}),P.installed=!0);var A=P.origSetTimeout,To=P.origSetInterval;function Bo(t){return t?Gn.some(o=>!!t.closest?.(`[${o}]`)):!1}function Yo(){if(typeof document>"u"||P.frozen)return;P.frozen=!0,P.frozenTimeoutQueue=[],P.frozenRAFQueue=[];let t=document.getElementById(en);t||(t=document.createElement("style"),t.id=en),t.textContent=`
    *${Ut},
    *${Ut}::before,
    *${Ut}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(t),P.pausedAnimations=[];try{document.getAnimations().forEach(o=>{if(o.playState!=="running")return;const l=o.effect?.target;Bo(l)||(o.pause(),P.pausedAnimations.push(o))})}catch{}document.querySelectorAll("video").forEach(o=>{o.paused||(o.dataset.wasPaused="false",o.pause())})}function Dn(){if(typeof document>"u"||!P.frozen)return;P.frozen=!1;const t=P.frozenTimeoutQueue;P.frozenTimeoutQueue=[];for(const l of t)P.origSetTimeout(()=>{if(P.frozen){P.frozenTimeoutQueue.push(l);return}try{l()}catch(i){console.warn("[agentation] Error replaying queued timeout:",i)}},0);const o=P.frozenRAFQueue;P.frozenRAFQueue=[];for(const l of o)P.origRAF(i=>{if(P.frozen){P.frozenRAFQueue.push(l);return}l(i)});for(const l of P.pausedAnimations)try{l.play()}catch(i){console.warn("[agentation] Error resuming animation:",i)}P.pausedAnimations=[],document.getElementById(en)?.remove(),document.querySelectorAll("video").forEach(l=>{l.dataset.wasPaused==="false"&&(l.play().catch(()=>{}),delete l.dataset.wasPaused)})}var zn=_.forwardRef(function({element:o,timestamp:l,selectedText:i,placeholder:c="What should change?",initialValue:m="",submitLabel:p="Add",onSubmit:E,onCancel:Y,onDelete:J,style:w,accentColor:Z="#3c82f7",isExiting:ye=!1,lightMode:K=!1,computedStyles:j},ae){const[I,ee]=_.useState(m),[Be,Ve]=_.useState(!1),[ce,Se]=_.useState("initial"),[V,Ye]=_.useState(!1),[G,be]=_.useState(!1),Ie=_.useRef(null),Et=_.useRef(null),f=_.useRef(null),te=_.useRef(null);_.useEffect(()=>{ye&&ce!=="exit"&&Se("exit")},[ye,ce]),_.useEffect(()=>{A(()=>{Se("enter")},0);const U=A(()=>{Se("entered")},200),We=A(()=>{const me=Ie.current;me&&(me.focus(),me.selectionStart=me.selectionEnd=me.value.length,me.scrollTop=me.scrollHeight)},50);return()=>{clearTimeout(U),clearTimeout(We),f.current&&clearTimeout(f.current),te.current&&clearTimeout(te.current)}},[]);const Ae=_.useCallback(()=>{te.current&&clearTimeout(te.current),Ve(!0),te.current=A(()=>{Ve(!1),Ie.current?.focus()},250)},[]);_.useImperativeHandle(ae,()=>({shake:Ae}),[Ae]);const Re=_.useCallback(()=>{Se("exit"),f.current=A(()=>{Y()},150)},[Y]),re=_.useCallback(()=>{I.trim()&&E(I.trim())},[I,E]),Je=_.useCallback(U=>{U.nativeEvent.isComposing||(U.key==="Enter"&&!U.shiftKey&&(U.preventDefault(),re()),U.key==="Escape"&&Re())},[re,Re]),on=[O.popup,K?O.light:"",ce==="enter"?O.enter:"",ce==="entered"?O.entered:"",ce==="exit"?O.exit:"",Be?O.shake:""].filter(Boolean).join(" ");return e.jsxs("div",{ref:Et,className:on,"data-annotation-popup":!0,style:w,onClick:U=>U.stopPropagation(),children:[e.jsxs("div",{className:O.header,children:[j&&Object.keys(j).length>0?e.jsxs("button",{className:O.headerToggle,onClick:()=>{const U=G;be(!G),U&&A(()=>Ie.current?.focus(),0)},type:"button",children:[e.jsx("svg",{className:`${O.chevron} ${G?O.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),e.jsx("span",{className:O.element,children:o})]}):e.jsx("span",{className:O.element,children:o}),l&&e.jsx("span",{className:O.timestamp,children:l})]}),j&&Object.keys(j).length>0&&e.jsx("div",{className:`${O.stylesWrapper} ${G?O.expanded:""}`,children:e.jsx("div",{className:O.stylesInner,children:e.jsx("div",{className:O.stylesBlock,children:Object.entries(j).map(([U,We])=>e.jsxs("div",{className:O.styleLine,children:[e.jsx("span",{className:O.styleProperty,children:U.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",e.jsx("span",{className:O.styleValue,children:We}),";"]},U))})})}),i&&e.jsxs("div",{className:O.quote,children:["“",i.slice(0,80),i.length>80?"...":"","”"]}),e.jsx("textarea",{ref:Ie,className:O.textarea,style:{borderColor:V?Z:void 0},placeholder:c,value:I,onChange:U=>ee(U.target.value),onFocus:()=>Ye(!0),onBlur:()=>Ye(!1),rows:2,onKeyDown:Je}),e.jsxs("div",{className:O.actions,children:[J&&e.jsx("div",{className:O.deleteWrapper,children:e.jsx("button",{className:O.deleteButton,onClick:J,type:"button",children:e.jsx(No,{size:22})})}),e.jsx("button",{className:O.cancel,onClick:Re,children:"Cancel"}),e.jsx("button",{className:O.submit,style:{backgroundColor:Z,opacity:I.trim()?1:.4},onClick:re,disabled:!I.trim(),children:p})]})]})});function Ze(t){if(t.parentElement)return t.parentElement;const o=t.getRootNode();return o instanceof ShadowRoot?o.host:null}function se(t,o){let l=t;for(;l;){if(l.matches(o))return l;l=Ze(l)}return null}function Es(t){return t.getRootNode()instanceof ShadowRoot}function Ns(t){const o=t.getRootNode();return o instanceof ShadowRoot?o.host:null}function Ao(t,o=4){const l=[];let i=t,c=0;for(;i&&c<o;){const m=i.tagName.toLowerCase();if(m==="html"||m==="body")break;let p=m;if(i.id)p=`#${i.id}`;else if(i.className&&typeof i.className=="string"){const Y=i.className.split(/\s+/).find(J=>J.length>2&&!J.match(/^[a-z]{1,2}$/)&&!J.match(/[A-Z0-9]{5,}/));Y&&(p=`.${Y.split("_")[0]}`)}const E=Ze(i);!i.parentElement&&E&&(p=`⟨shadow⟩ ${p}`),l.unshift(p),i=E,c++}return l.join(" > ")}function It(t){const o=Ao(t);if(t.dataset.element)return{name:t.dataset.element,path:o};const l=t.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(l)){const i=se(t,"svg");if(i){const c=Ze(i);if(c instanceof HTMLElement)return{name:`graphic in ${It(c).name}`,path:o}}return{name:"graphic element",path:o}}if(l==="svg"){const i=Ze(t);if(i?.tagName.toLowerCase()==="button"){const c=i.textContent?.trim();return{name:c?`icon in "${c}" button`:"button icon",path:o}}return{name:"icon",path:o}}if(l==="button"){const i=t.textContent?.trim(),c=t.getAttribute("aria-label");return c?{name:`button [${c}]`,path:o}:{name:i?`button "${i.slice(0,25)}"`:"button",path:o}}if(l==="a"){const i=t.textContent?.trim(),c=t.getAttribute("href");return i?{name:`link "${i.slice(0,25)}"`,path:o}:c?{name:`link to ${c.slice(0,30)}`,path:o}:{name:"link",path:o}}if(l==="input"){const i=t.getAttribute("type")||"text",c=t.getAttribute("placeholder"),m=t.getAttribute("name");return c?{name:`input "${c}"`,path:o}:m?{name:`input [${m}]`,path:o}:{name:`${i} input`,path:o}}if(["h1","h2","h3","h4","h5","h6"].includes(l)){const i=t.textContent?.trim();return{name:i?`${l} "${i.slice(0,35)}"`:l,path:o}}if(l==="p"){const i=t.textContent?.trim();return i?{name:`paragraph: "${i.slice(0,40)}${i.length>40?"...":""}"`,path:o}:{name:"paragraph",path:o}}if(l==="span"||l==="label"){const i=t.textContent?.trim();return i&&i.length<40?{name:`"${i}"`,path:o}:{name:l,path:o}}if(l==="li"){const i=t.textContent?.trim();return i&&i.length<40?{name:`list item: "${i.slice(0,35)}"`,path:o}:{name:"list item",path:o}}if(l==="blockquote")return{name:"blockquote",path:o};if(l==="code"){const i=t.textContent?.trim();return i&&i.length<30?{name:`code: \`${i}\``,path:o}:{name:"code",path:o}}if(l==="pre")return{name:"code block",path:o};if(l==="img"){const i=t.getAttribute("alt");return{name:i?`image "${i.slice(0,30)}"`:"image",path:o}}if(l==="video")return{name:"video",path:o};if(["div","section","article","nav","header","footer","aside","main"].includes(l)){const i=t.className,c=t.getAttribute("role"),m=t.getAttribute("aria-label");if(m)return{name:`${l} [${m}]`,path:o};if(c)return{name:`${c}`,path:o};if(typeof i=="string"&&i){const p=i.split(/[\s_-]+/).map(E=>E.replace(/[A-Z0-9]{5,}.*$/,"")).filter(E=>E.length>2&&!/^[a-z]{1,2}$/.test(E)).slice(0,2);if(p.length>0)return{name:p.join(" "),path:o}}return{name:l==="div"?"container":l,path:o}}return{name:l,path:o}}function it(t){const o=[],l=t.textContent?.trim();l&&l.length<100&&o.push(l);const i=t.previousElementSibling;if(i){const m=i.textContent?.trim();m&&m.length<50&&o.unshift(`[before: "${m.slice(0,40)}"]`)}const c=t.nextElementSibling;if(c){const m=c.textContent?.trim();m&&m.length<50&&o.push(`[after: "${m.slice(0,40)}"]`)}return o.join(" ")}function Ms(t){if(t.dataset.element)return t.dataset.element;const o=t.tagName.toLowerCase();if(o==="path")return"path";if(o==="circle")return"circle";if(o==="rect")return"rectangle";if(o==="line")return"line";if(o==="ellipse")return"ellipse";if(o==="polygon")return"polygon";if(o==="g")return"group";if(o==="svg")return"svg";if(o==="button"){const l=t.textContent?.trim();return l?`button "${l}"`:"button"}if(o==="input")return`input (${t.getAttribute("type")||"text"})`;if(o==="span"||o==="p"||o==="label"){const l=t.textContent?.trim();return l&&l.length<30?`"${l}"`:"text"}if(o==="div"){const l=t.className;if(typeof l=="string"&&l){const i=l.split(/[\s_-]+/).map(c=>c.replace(/[A-Z0-9]{5,}.*$/,"")).filter(c=>c.length>2&&!/^[a-z]{1,2}$/.test(c)).slice(0,2);if(i.length>0)return i.join(" ")}return"container"}return o}function kt(t){const o=Ze(t);if(!o)return"";const c=(t.getRootNode()instanceof ShadowRoot&&t.parentElement?Array.from(t.parentElement.children):Array.from(o.children)).filter(w=>w!==t&&w instanceof HTMLElement);if(c.length===0)return"";const m=c.slice(0,4).map(w=>{const Z=w.tagName.toLowerCase(),ye=w.className;let K="";if(typeof ye=="string"&&ye){const j=ye.split(/\s+/).map(ae=>ae.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(ae=>ae.length>2&&!/^[a-z]{1,2}$/.test(ae));j&&(K=`.${j}`)}if(Z==="button"||Z==="a"){const j=w.textContent?.trim().slice(0,15);if(j)return`${Z}${K} "${j}"`}return`${Z}${K}`});let E=o.tagName.toLowerCase();if(typeof o.className=="string"&&o.className){const w=o.className.split(/\s+/).map(Z=>Z.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(Z=>Z.length>2&&!/^[a-z]{1,2}$/.test(Z));w&&(E=`.${w}`)}const Y=o.children.length,J=Y>m.length+1?` (${Y} total in ${E})`:"";return m.join(", ")+J}function at(t){const o=t.className;return typeof o!="string"||!o?"":o.split(/\s+/).filter(i=>i.length>0).map(i=>{const c=i.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return c?c[1]:i}).filter((i,c,m)=>m.indexOf(i)===c).join(", ")}var qn=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),Ro=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),Wo=new Set(["input","textarea","select"]),Oo=new Set(["img","video","canvas","svg"]),Ho=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Ct(t){if(typeof window>"u")return{};const o=window.getComputedStyle(t),l={},i=t.tagName.toLowerCase();let c;Ro.has(i)?c=["color","fontSize","fontWeight","fontFamily","lineHeight"]:i==="button"||i==="a"&&t.getAttribute("role")==="button"?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Wo.has(i)?c=["backgroundColor","color","padding","borderRadius","fontSize"]:Oo.has(i)?c=["width","height","objectFit","borderRadius"]:Ho.has(i)?c=["display","padding","margin","gap","backgroundColor"]:c=["color","fontSize","margin","padding","backgroundColor"];for(const m of c){const p=m.replace(/([A-Z])/g,"-$1").toLowerCase(),E=o.getPropertyValue(p);E&&!qn.has(E)&&(l[m]=E)}return l}var Do=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function vt(t){if(typeof window>"u")return"";const o=window.getComputedStyle(t),l=[];for(const i of Do){const c=i.replace(/([A-Z])/g,"-$1").toLowerCase(),m=o.getPropertyValue(c);m&&!qn.has(m)&&l.push(`${c}: ${m}`)}return l.join("; ")}function zo(t){if(!t)return;const o={},l=t.split(";").map(i=>i.trim()).filter(Boolean);for(const i of l){const c=i.indexOf(":");if(c>0){const m=i.slice(0,c).trim(),p=i.slice(c+1).trim();m&&p&&(o[m]=p)}}return Object.keys(o).length>0?o:void 0}function jt(t){const o=[],l=t.getAttribute("role"),i=t.getAttribute("aria-label"),c=t.getAttribute("aria-describedby"),m=t.getAttribute("tabindex"),p=t.getAttribute("aria-hidden");return l&&o.push(`role="${l}"`),i&&o.push(`aria-label="${i}"`),c&&o.push(`aria-describedby="${c}"`),m&&o.push(`tabindex=${m}`),p==="true"&&o.push("aria-hidden"),t.matches("a, button, input, select, textarea, [tabindex]")&&o.push("focusable"),o.join(", ")}function Lt(t){const o=[];let l=t;for(;l&&l.tagName.toLowerCase()!=="html";){const i=l.tagName.toLowerCase();let c=i;if(l.id)c=`${i}#${l.id}`;else if(l.className&&typeof l.className=="string"){const p=l.className.split(/\s+/).map(E=>E.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(E=>E.length>2);p&&(c=`${i}.${p}`)}const m=Ze(l);!l.parentElement&&m&&(c=`⟨shadow⟩ ${c}`),o.unshift(c),l=m}return o.join(" > ")}var tn="feedback-annotations-",Kn=7;function $t(t){return`${tn}${t}`}function Zt(t){if(typeof window>"u")return[];try{const o=localStorage.getItem($t(t));if(!o)return[];const l=JSON.parse(o),i=Date.now()-Kn*24*60*60*1e3;return l.filter(c=>!c.timestamp||c.timestamp>i)}catch{return[]}}function eo(t,o){if(!(typeof window>"u"))try{localStorage.setItem($t(t),JSON.stringify(o))}catch{}}function Fo(){const t=new Map;if(typeof window>"u")return t;try{const o=Date.now()-Kn*24*60*60*1e3;for(let l=0;l<localStorage.length;l++){const i=localStorage.key(l);if(i?.startsWith(tn)){const c=i.slice(tn.length),m=localStorage.getItem(i);if(m){const E=JSON.parse(m).filter(Y=>!Y.timestamp||Y.timestamp>o);E.length>0&&t.set(c,E)}}}}catch{}return t}function _t(t,o,l){const i=o.map(c=>({...c,_syncedTo:l}));eo(t,i)}var Xo="agentation-session-";function nn(t){return`${Xo}${t}`}function Uo(t){if(typeof window>"u")return null;try{return localStorage.getItem(nn(t))}catch{return null}}function Vt(t,o){if(!(typeof window>"u"))try{localStorage.setItem(nn(t),o)}catch{}}function Qo(t){if(!(typeof window>"u"))try{localStorage.removeItem(nn(t))}catch{}}async function Jt(t,o){const l=await fetch(`${t}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:o})});if(!l.ok)throw new Error(`Failed to create session: ${l.status}`);return l.json()}async function Fn(t,o){const l=await fetch(`${t}/sessions/${o}`);if(!l.ok)throw new Error(`Failed to get session: ${l.status}`);return l.json()}async function St(t,o,l){const i=await fetch(`${t}/sessions/${o}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!i.ok)throw new Error(`Failed to sync annotation: ${i.status}`);return i.json()}async function Zo(t,o,l){const i=await fetch(`${t}/annotations/${o}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});if(!i.ok)throw new Error(`Failed to update annotation: ${i.status}`);return i.json()}async function Xn(t,o){const l=await fetch(`${t}/annotations/${o}`,{method:"DELETE"});if(!l.ok)throw new Error(`Failed to delete annotation: ${l.status}`)}var R={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},Un=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),Qn=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Vo=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Jo(t){const o=t?.mode??"filtered";let l=Un;if(t?.skipExact){const i=t.skipExact instanceof Set?t.skipExact:new Set(t.skipExact);l=new Set([...Un,...i])}return{maxComponents:t?.maxComponents??6,maxDepth:t?.maxDepth??30,mode:o,skipExact:l,skipPatterns:t?.skipPatterns?[...Qn,...t.skipPatterns]:Qn,userPatterns:t?.userPatterns??Vo,filter:t?.filter}}function Go(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function qo(t,o=10){const l=new Set;let i=t,c=0;for(;i&&c<o;)i.className&&typeof i.className=="string"&&i.className.split(/\s+/).forEach(m=>{if(m.length>1){const p=m.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();p.length>1&&l.add(p)}}),i=i.parentElement,c++;return l}function Ko(t,o){const l=Go(t);for(const i of o){if(i===l)return!0;const c=l.split("-").filter(p=>p.length>2),m=i.split("-").filter(p=>p.length>2);for(const p of c)for(const E of m)if(p===E||p.includes(E)||E.includes(p))return!0}return!1}function es(t,o,l,i){if(l.filter)return l.filter(t,o);switch(l.mode){case"all":return!0;case"filtered":return!(l.skipExact.has(t)||l.skipPatterns.some(c=>c.test(t)));case"smart":return l.skipExact.has(t)||l.skipPatterns.some(c=>c.test(t))?!1:!!(i&&Ko(t,i)||l.userPatterns.some(c=>c.test(t)));default:return!0}}var Ue=null,ts=new WeakMap;function Gt(t){return Object.keys(t).some(o=>o.startsWith("__reactFiber$")||o.startsWith("__reactInternalInstance$")||o.startsWith("__reactProps$"))}function ns(){if(Ue!==null)return Ue;if(typeof document>"u")return!1;if(document.body&&Gt(document.body))return Ue=!0,!0;const t=["#root","#app","#__next","[data-reactroot]"];for(const o of t){const l=document.querySelector(o);if(l&&Gt(l))return Ue=!0,!0}if(document.body){for(const o of document.body.children)if(Gt(o))return Ue=!0,!0}return Ue=!1,!1}var dt={map:ts};function os(t){return Object.keys(t).find(l=>l.startsWith("__reactFiber$")||l.startsWith("__reactInternalInstance$"))||null}function ss(t){const o=os(t);return o?t[o]:null}function Te(t){return t?t.displayName?t.displayName:t.name?t.name:null:null}function rs(t){const{tag:o,type:l,elementType:i}=t;if(o===R.HostComponent||o===R.HostText||o===R.HostHoistable||o===R.HostSingleton||o===R.Fragment||o===R.Mode||o===R.Profiler||o===R.DehydratedFragment||o===R.HostRoot||o===R.HostPortal||o===R.ScopeComponent||o===R.OffscreenComponent||o===R.LegacyHiddenComponent||o===R.CacheComponent||o===R.TracingMarkerComponent||o===R.Throw||o===R.ViewTransitionComponent||o===R.ActivityComponent)return null;if(o===R.ForwardRef){const c=i;if(c?.render){const m=Te(c.render);if(m)return m}return c?.displayName?c.displayName:Te(l)}if(o===R.MemoComponent||o===R.SimpleMemoComponent){const c=i;if(c?.type){const m=Te(c.type);if(m)return m}return c?.displayName?c.displayName:Te(l)}if(o===R.ContextProvider){const c=l;return c?._context?.displayName?`${c._context.displayName}.Provider`:null}if(o===R.ContextConsumer){const c=l;return c?.displayName?`${c.displayName}.Consumer`:null}if(o===R.LazyComponent){const c=i;return c?._status===1&&c._result?Te(c._result):null}return o===R.SuspenseComponent||o===R.SuspenseListComponent?null:o===R.IncompleteClassComponent||o===R.IncompleteFunctionComponent||o===R.FunctionComponent||o===R.ClassComponent||o===R.IndeterminateComponent?Te(l):null}function ls(t){return t.length<=2||t.length<=3&&t===t.toLowerCase()}function is(t,o){const l=Jo(o),i=l.mode==="all";if(i){const Y=dt.map.get(t);if(Y!==void 0)return Y}if(!ns()){const Y={path:null,components:[]};return i&&dt.map.set(t,Y),Y}const c=l.mode==="smart"?qo(t):void 0,m=[];try{let Y=ss(t),J=0;for(;Y&&J<l.maxDepth&&m.length<l.maxComponents;){const w=rs(Y);w&&!ls(w)&&es(w,J,l,c)&&m.push(w),Y=Y.return,J++}}catch{const Y={path:null,components:[]};return i&&dt.map.set(t,Y),Y}if(m.length===0){const Y={path:null,components:[]};return i&&dt.map.set(t,Y),Y}const E={path:m.slice().reverse().map(Y=>`<${Y}>`).join(" "),components:m};return i&&dt.map.set(t,E),E}var as=`svg[fill=none] {
  fill: none !important;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__markerIn___5FaAP {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___GU5jX {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__tooltipIn___0N31w {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__settingsPanelIn___MGfO8 {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
    filter: blur(5px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
}
@keyframes styles-module__settingsPanelOut___Zfymi {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0px);
  }
  to {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
    filter: blur(5px);
  }
}
.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 297px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

.styles-module__toolbarContainer___dIhma {
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  cursor: grab;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__dragging___xrolZ {
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  cursor: grabbing;
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 257px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 297px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer !important;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.25);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.25);
  color: #ff3b30;
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default !important;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.25);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #3c82f7;
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
.styles-module__buttonBadge___NeFWb.styles-module__light___r6n4Y {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(245, 166, 35, 0.5);
  }
  50% {
    box-shadow: 0 0 0 5px rgba(245, 166, 35, 0);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background: #34c759;
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background: #ff3b30;
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background: #f59e0b;
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.5);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.04);
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(52, 199, 89, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid rgba(60, 130, 247, 0.6);
  border-radius: 4px;
  pointer-events: none !important;
  background: rgba(60, 130, 247, 0.05);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: #3c82f7;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background: #3c82f7;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background: #34c759;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background: #34c759;
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background: #ff3b30;
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__settingsPanel___OxX3Y.styles-module__dark___ILIQf .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}
.styles-module__settingsPanelContainer___Xksv8.styles-module__transitioning___qxzCk {
  overflow-x: clip;
  overflow-y: visible;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.2s ease-out;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-100%);
  opacity: 0;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.35s cubic-bezier(0.32, 0.72, 0, 1), opacity 0.25s ease-out 0.1s;
  opacity: 0;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-100%);
  opacity: 1;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y svg {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__settingsNavLink___wCzJt.styles-module__light___r6n4Y:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
.styles-module__settingsBackButton___bIe2j.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
.styles-module__automationHeader___InP0r .styles-module__helpIcon___xQg56 svg {
  transform: none;
}
.styles-module__automationHeader___InP0r.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__automationDescription___NKlmo.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__learnMoreLink___8xv-x.styles-module__light___r6n4Y:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__autoSendLabel___icDc2.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  color: #3c82f7;
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  cursor: text !important;
  user-select: text;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__webhookUrlInput___2375C.styles-module__light___r6n4Y:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: rgba(255, 255, 255, 0.5);
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
.styles-module__cycleButton___FMKfw.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__cycleDot___nPgLY.styles-module__light___r6n4Y.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
.styles-module__settingsLabel___8UjfX.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(60, 130, 247, 0.15);
  color: #3c82f7;
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__customCheckbox___U39ax.styles-module__light___r6n4Y.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__toggleLabel___Xm8Aa.styles-module__light___r6n4Y {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: opacity 0.15s ease;
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background: #3c82f7;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
  pointer-events: none;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
.styles-module__light___r6n4Y .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(52, 199, 89, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(52, 199, 89, 0);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0.5);
  }
  70% {
    box-shadow: 0 0 0 6px rgba(255, 59, 48, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(255, 59, 48, 0);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background: #f5a623;
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background: #34c759;
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background: #ff3b30;
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__helpIcon___xQg56 {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
  margin-left: 0;
}
.styles-module__helpIcon___xQg56 svg {
  display: block;
  transform: translateY(1px);
  color: rgba(255, 255, 255, 0.2);
  transition: color 0.15s ease;
}
.styles-module__helpIcon___xQg56:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudgeDown___0cqpM svg {
  transform: translateY(1px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNoNudge___abogC svg {
  transform: translateY(0.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge1-5___DM2TQ svg {
  transform: translateY(1.5px);
}
.styles-module__helpIcon___xQg56.styles-module__helpIconNudge2___TfWgC svg {
  transform: translateY(2px);
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.6);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.08);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #34c759;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid rgba(52, 199, 89, 0.5);
  border-radius: 4px;
  background: rgba(52, 199, 89, 0.06);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-active=true] {
  color: #3c82f7;
  background: rgba(60, 130, 247, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-error=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background: rgba(255, 59, 48, 0.15);
  color: #ff3b30;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: #34c759;
  background: transparent;
}
.styles-module__light___r6n4Y.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: #ff3b30;
  background: rgba(255, 59, 48, 0.15);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerQuote___FHmrz {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerNote___QkrrS {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__markerTooltip___aLJID .styles-module__markerHint___2iF-6 {
  color: rgba(0, 0, 0, 0.35);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9 {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18 {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr:hover {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(0, 0, 0, 0.9);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp {
  background: rgba(0, 0, 0, 0.1);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-webkit-slider-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp::-moz-range-thumb {
  background: #1a1a1a;
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56 svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___r6n4Y.styles-module__settingsPanel___OxX3Y .styles-module__helpIcon___xQg56:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__themeToggle___2rUjA {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 0.5rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__themeToggle___2rUjA:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___r6n4Y .styles-module__themeToggle___2rUjA:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___LsJIM {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___lCCmo {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___TU6ML 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes styles-module__themeIconIn___TU6ML {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}`,_s={toolbar:"styles-module__toolbar___wNsdK",toolbarContainer:"styles-module__toolbarContainer___dIhma",dragging:"styles-module__dragging___xrolZ",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",controlsContent:"styles-module__controlsContent___9GJWU",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",light:"styles-module__light___r6n4Y",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",helpIcon:"styles-module__helpIcon___xQg56",themeToggle:"styles-module__themeToggle___2rUjA",dark:"styles-module__dark___ILIQf",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",transitioning:"styles-module__transitioning___qxzCk",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",helpIconNudgeDown:"styles-module__helpIconNudgeDown___0cqpM",helpIconNoNudge:"styles-module__helpIconNoNudge___abogC","helpIconNudge1-5":"styles-module__helpIconNudge1-5___DM2TQ",helpIconNudge2:"styles-module__helpIconNudge2___TfWgC",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",themeIconWrapper:"styles-module__themeIconWrapper___LsJIM",themeIcon:"styles-module__themeIcon___lCCmo",themeIconIn:"styles-module__themeIconIn___TU6ML",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje",settingsPanelIn:"styles-module__settingsPanelIn___MGfO8",settingsPanelOut:"styles-module__settingsPanelOut___Zfymi"};if(typeof document<"u"){let t=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");t||(t=document.createElement("style"),t.id="feedback-tool-styles-page-toolbar-css-styles",t.textContent=as,document.head.appendChild(t))}var s=_s;function qt(t,o="filtered"){const{name:l,path:i}=It(t);if(o==="off")return{name:l,elementName:l,path:i,reactComponents:null};const c=is(t,{mode:o});return{name:c.path?`${c.path} ${l}`:l,elementName:l,path:i,reactComponents:c.path}}var Zn=!1,Vn={outputDetail:"standard",autoClearAfterCopy:!1,annotationColor:"#3c82f7",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},fe=t=>{if(!t||!t.trim())return!1;try{const o=new URL(t.trim());return o.protocol==="http:"||o.protocol==="https:"}catch{return!1}},ds={compact:"off",standard:"filtered",detailed:"smart",forensic:"all"},ct=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}],cs=[{value:"#AF52DE",label:"Purple"},{value:"#3c82f7",label:"Blue"},{value:"#5AC8FA",label:"Cyan"},{value:"#34C759",label:"Green"},{value:"#FFD60A",label:"Yellow"},{value:"#FF9500",label:"Orange"},{value:"#FF3B30",label:"Red"}];function Qe(t,o){let l=document.elementFromPoint(t,o);if(!l)return null;for(;l?.shadowRoot;){const i=l.shadowRoot.elementFromPoint(t,o);if(!i||i===l)break;l=i}return l}function Kt(t){let o=t;for(;o&&o!==document.body;){const i=window.getComputedStyle(o).position;if(i==="fixed"||i==="sticky")return!0;o=o.parentElement}return!1}function Jn(t,o,l="standard",i="filtered"){if(t.length===0)return"";const c=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let m=`## Page Feedback: ${o}
`;return l==="forensic"?(m+=`
**Environment:**
`,m+=`- Viewport: ${c}
`,typeof window<"u"&&(m+=`- URL: ${window.location.href}
`,m+=`- User Agent: ${navigator.userAgent}
`,m+=`- Timestamp: ${new Date().toISOString()}
`,m+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),m+=`
---
`):l!=="compact"&&(m+=`**Viewport:** ${c}
`),m+=`
`,t.forEach((p,E)=>{l==="compact"?(m+=`${E+1}. **${p.element}**: ${p.comment}`,p.selectedText&&(m+=` (re: "${p.selectedText.slice(0,30)}${p.selectedText.length>30?"...":""}")`),m+=`
`):l==="forensic"?(m+=`### ${E+1}. ${p.element}
`,p.isMultiSelect&&p.fullPath&&(m+=`*Forensic data shown for first element of selection*
`),p.fullPath&&(m+=`**Full DOM Path:** ${p.fullPath}
`),p.cssClasses&&(m+=`**CSS Classes:** ${p.cssClasses}
`),p.boundingBox&&(m+=`**Position:** x:${Math.round(p.boundingBox.x)}, y:${Math.round(p.boundingBox.y)} (${Math.round(p.boundingBox.width)}×${Math.round(p.boundingBox.height)}px)
`),m+=`**Annotation at:** ${p.x.toFixed(1)}% from left, ${Math.round(p.y)}px from top
`,p.selectedText&&(m+=`**Selected text:** "${p.selectedText}"
`),p.nearbyText&&!p.selectedText&&(m+=`**Context:** ${p.nearbyText.slice(0,100)}
`),p.computedStyles&&(m+=`**Computed Styles:** ${p.computedStyles}
`),p.accessibility&&(m+=`**Accessibility:** ${p.accessibility}
`),p.nearbyElements&&(m+=`**Nearby Elements:** ${p.nearbyElements}
`),p.reactComponents&&(m+=`**React:** ${p.reactComponents}
`),m+=`**Feedback:** ${p.comment}

`):(m+=`### ${E+1}. ${p.element}
`,m+=`**Location:** ${p.elementPath}
`,p.reactComponents&&(m+=`**React:** ${p.reactComponents}
`),l==="detailed"&&(p.cssClasses&&(m+=`**Classes:** ${p.cssClasses}
`),p.boundingBox&&(m+=`**Position:** ${Math.round(p.boundingBox.x)}px, ${Math.round(p.boundingBox.y)}px (${Math.round(p.boundingBox.width)}×${Math.round(p.boundingBox.height)}px)
`)),p.selectedText&&(m+=`**Selected text:** "${p.selectedText}"
`),l==="detailed"&&p.nearbyText&&!p.selectedText&&(m+=`**Context:** ${p.nearbyText.slice(0,100)}
`),m+=`**Feedback:** ${p.comment}

`)}),m.trim()}function Ps({demoAnnotations:t,demoDelay:o=1e3,enableDemoMode:l=!1,onAnnotationAdd:i,onAnnotationDelete:c,onAnnotationUpdate:m,onAnnotationsClear:p,onCopy:E,onSubmit:Y,copyToClipboard:J=!0,endpoint:w,sessionId:Z,onSessionCreated:ye,webhookUrl:K}={}){const[j,ae]=_.useState(!1),[I,ee]=_.useState([]),[Be,Ve]=_.useState(!0),[ce,Se]=_.useState(!1),[V,Ye]=_.useState(!1),[G,be]=_.useState(null),[Ie,Et]=_.useState({x:0,y:0}),[f,te]=_.useState(null),[Ae,Re]=_.useState(!1),[re,Je]=_.useState("idle"),[on,U]=_.useState(!1),[We,me]=_.useState(!1),[ut,Nt]=_.useState(null),[Mt,$e]=_.useState(null),[sn,Ge]=_.useState([]),[rn,ln]=_.useState(null),[mt,an]=_.useState(null),[M,qe]=_.useState(null),[Pt,xe]=_.useState(null),[_n,Ee]=_.useState([]),[Ne,dn]=_.useState(0),[cn,un]=_.useState(!1),[z,to]=_.useState(!1),[ue,mn]=_.useState(!1),[Ke,pn]=_.useState(!1),[no,gn]=_.useState(!1),[Tt,Bt]=_.useState("main"),[hn,fn]=_.useState(!1),[oo,Yt]=_.useState(!1),[F,Oe]=_.useState([]),pe=_.useRef({cmd:!1,shift:!1}),ne=()=>{Yt(!0)},so=()=>{Yt(!1)},et=({content:n,children:r})=>{const[d,u]=_.useState(!1),[a,g]=_.useState(!1),[y,x]=_.useState(!1),[$,L]=_.useState({top:0,right:0}),k=_.useRef(null),C=_.useRef(null),S=_.useRef(null),v=()=>{if(k.current){const D=k.current.getBoundingClientRect();L({top:D.top+D.height/2,right:window.innerWidth-D.left+8})}},b=()=>{u(!0),x(!0),S.current&&(clearTimeout(S.current),S.current=null),v(),C.current=A(()=>{g(!0)},500)},_e=()=>{u(!1),C.current&&(clearTimeout(C.current),C.current=null),g(!1),S.current=A(()=>{x(!1)},150)};return _.useEffect(()=>()=>{C.current&&clearTimeout(C.current),S.current&&clearTimeout(S.current)},[]),e.jsxs(e.Fragment,{children:[e.jsx("span",{ref:k,onMouseEnter:b,onMouseLeave:_e,children:r}),y&&Wn.createPortal(e.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:$.top,right:$.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:a&&!hn?1:0,transition:"opacity 0.15s ease"},children:n}),document.body)]})},[h,je]=_.useState(Vn),[N,yn]=_.useState(!0),[bn,xn]=_.useState(!1),He=typeof window<"u"&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"||window.location.hostname==="0.0.0.0"||window.location.hostname.endsWith(".local")),we=He&&h.reactEnabled?ds[h.outputDetail]:"off",[le,At]=_.useState(Z??null),wn=_.useRef(!1),[q,Me]=_.useState(w?"connecting":"disconnected"),[H,Rt]=_.useState(null),[ke,kn]=_.useState(!1),[De,Cn]=_.useState(null),[ro,lo]=_.useState(0),Wt=_.useRef(!1),[vn,tt]=_.useState(new Set),[jn,pt]=_.useState(new Set),[nt,gt]=_.useState(!1),[io,ze]=_.useState(!1),[Ce,Ln]=_.useState(!1),Fe=_.useRef(null),ge=_.useRef(null),ot=_.useRef(null),st=_.useRef(null),ht=_.useRef(!1),Sn=_.useRef(0),ft=_.useRef(null),In=_.useRef(null),Ot=8,ao=50,$n=_.useRef(null),En=_.useRef(null),rt=_.useRef(null),W=typeof window<"u"?window.location.pathname:"/";_.useEffect(()=>{if(Ke)gn(!0);else{Yt(!1),Bt("main");const n=A(()=>gn(!1),0);return()=>clearTimeout(n)}},[Ke]),_.useEffect(()=>{fn(!0);const n=A(()=>fn(!1),350);return()=>clearTimeout(n)},[Tt]);const Nn=j&&Be;_.useEffect(()=>{if(Nn){Ye(!1),Se(!0),tt(new Set);const n=A(()=>{tt(r=>{const d=new Set(r);return I.forEach(u=>d.add(u.id)),d})},350);return()=>clearTimeout(n)}else if(ce){Ye(!0);const n=A(()=>{Se(!1),Ye(!1)},250);return()=>clearTimeout(n)}},[Nn]),_.useEffect(()=>{to(!0),dn(window.scrollY);const n=Zt(W);ee(n),Zn||(xn(!0),Zn=!0,A(()=>xn(!1),750));try{const r=localStorage.getItem("feedback-toolbar-settings");r&&je({...Vn,...JSON.parse(r)})}catch{}try{const r=localStorage.getItem("feedback-toolbar-theme");r!==null&&yn(r==="dark")}catch{}try{const r=localStorage.getItem("feedback-toolbar-position");if(r){const d=JSON.parse(r);typeof d.x=="number"&&typeof d.y=="number"&&Rt(d)}}catch{}},[W]),_.useEffect(()=>{z&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(h))},[h,z]),_.useEffect(()=>{z&&localStorage.setItem("feedback-toolbar-theme",N?"dark":"light")},[N,z]);const Mn=_.useRef(!1);_.useEffect(()=>{const n=Mn.current;Mn.current=ke,n&&!ke&&H&&z&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(H))},[ke,H,z]),_.useEffect(()=>{if(!w||!z||wn.current)return;wn.current=!0,Me("connecting"),(async()=>{try{const r=Uo(W),d=Z||r;let u=!1;if(d)try{const a=await Fn(w,d);At(a.id),Me("connected"),Vt(W,a.id),u=!0;const g=Zt(W),y=new Set(a.annotations.map($=>$.id)),x=g.filter($=>!y.has($.id));if(x.length>0){const L=`${typeof window<"u"?window.location.origin:""}${W}`,C=(await Promise.allSettled(x.map(v=>St(w,a.id,{...v,sessionId:a.id,url:L})))).map((v,b)=>v.status==="fulfilled"?v.value:(console.warn("[Agentation] Failed to sync annotation:",v.reason),x[b])),S=[...a.annotations,...C];ee(S),_t(W,S,a.id)}else ee(a.annotations),_t(W,a.annotations,a.id)}catch(a){console.warn("[Agentation] Could not join session, creating new:",a),Qo(W)}if(!u){const a=typeof window<"u"?window.location.href:"/",g=await Jt(w,a);At(g.id),Me("connected"),Vt(W,g.id),ye?.(g.id);const y=Fo(),x=typeof window<"u"?window.location.origin:"",$=[];for(const[L,k]of y){const C=k.filter(b=>!b._syncedTo);if(C.length===0)continue;const S=`${x}${L}`,v=L===W;$.push((async()=>{try{const b=v?g:await Jt(w,S),D=(await Promise.allSettled(C.map(ie=>St(w,b.id,{...ie,sessionId:b.id,url:S})))).map((ie,oe)=>ie.status==="fulfilled"?ie.value:(console.warn("[Agentation] Failed to sync annotation:",ie.reason),C[oe]));if(_t(L,D,b.id),v){const ie=new Set(C.map(oe=>oe.id));ee(oe=>{const de=oe.filter(B=>!ie.has(B.id));return[...D,...de]})}}catch(b){console.warn(`[Agentation] Failed to sync annotations for ${L}:`,b)}})())}await Promise.allSettled($)}}catch(r){Me("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",r)}})()},[w,Z,z,ye,W]),_.useEffect(()=>{if(!w||!z)return;const n=async()=>{try{(await fetch(`${w}/health`)).ok?Me("connected"):Me("disconnected")}catch{Me("disconnected")}};n();const r=To(n,1e4);return()=>clearInterval(r)},[w,z]),_.useEffect(()=>{if(!w||!z||!le)return;const n=new EventSource(`${w}/sessions/${le}/events`),r=["resolved","dismissed"],d=u=>{try{const a=JSON.parse(u.data);if(r.includes(a.payload?.status)){const g=a.payload.id;pt(y=>new Set(y).add(g)),A(()=>{ee(y=>y.filter(x=>x.id!==g)),pt(y=>{const x=new Set(y);return x.delete(g),x})},150)}}catch{}};return n.addEventListener("annotation.updated",d),()=>{n.removeEventListener("annotation.updated",d),n.close()}},[w,z,le]),_.useEffect(()=>{if(!w||!z)return;const n=In.current==="disconnected",r=q==="connected";In.current=q,n&&r&&(async()=>{try{const u=Zt(W);if(u.length===0)return;const g=`${typeof window<"u"?window.location.origin:""}${W}`;let y=le,x=[];if(y)try{x=(await Fn(w,y)).annotations}catch{y=null}y||(y=(await Jt(w,g)).id,At(y),Vt(W,y));const $=new Set(x.map(k=>k.id)),L=u.filter(k=>!$.has(k.id));if(L.length>0){const C=(await Promise.allSettled(L.map(v=>St(w,y,{...v,sessionId:y,url:g})))).map((v,b)=>v.status==="fulfilled"?v.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",v.reason),L[b])),S=[...x,...C];ee(S),_t(W,S,y)}}catch(u){console.warn("[Agentation] Failed to sync on reconnect:",u)}})()},[q,w,z,le,W]),_.useEffect(()=>{if(!l||!z||!t||t.length===0||I.length>0)return;const n=[];return n.push(A(()=>{ae(!0)},o-200)),t.forEach((r,d)=>{const u=o+d*300;n.push(A(()=>{const a=document.querySelector(r.selector);if(!a)return;const g=a.getBoundingClientRect(),{name:y,path:x}=It(a),$={id:`demo-${Date.now()}-${d}`,x:(g.left+g.width/2)/window.innerWidth*100,y:g.top+g.height/2+window.scrollY,comment:r.comment,element:y,elementPath:x,timestamp:Date.now(),selectedText:r.selectedText,boundingBox:{x:g.left,y:g.top+window.scrollY,width:g.width,height:g.height},nearbyText:it(a),cssClasses:at(a)};ee(L=>[...L,$])},u))}),()=>{n.forEach(clearTimeout)}},[l,z,t,o]),_.useEffect(()=>{const n=()=>{dn(window.scrollY),un(!0),rt.current&&clearTimeout(rt.current),rt.current=A(()=>{un(!1)},150)};return window.addEventListener("scroll",n,{passive:!0}),()=>{window.removeEventListener("scroll",n),rt.current&&clearTimeout(rt.current)}},[]),_.useEffect(()=>{z&&I.length>0?le?_t(W,I,le):eo(W,I):z&&I.length===0&&localStorage.removeItem($t(W))},[I,W,z,le]);const Pn=_.useCallback(()=>{ue||(Yo(),mn(!0))},[ue]),yt=_.useCallback(()=>{ue&&(Dn(),mn(!1))},[ue]),Ht=_.useCallback(()=>{ue?yt():Pn()},[ue,Pn,yt]),Tn=_.useCallback(()=>{if(F.length===0)return;const n=F[0],r=n.element,d=F.length>1,u=F.map(a=>a.element.getBoundingClientRect());if(d){const a={left:Math.min(...u.map(b=>b.left)),top:Math.min(...u.map(b=>b.top)),right:Math.max(...u.map(b=>b.right)),bottom:Math.max(...u.map(b=>b.bottom))},g=F.slice(0,5).map(b=>b.name).join(", "),y=F.length>5?` +${F.length-5} more`:"",x=u.map(b=>({x:b.left,y:b.top+window.scrollY,width:b.width,height:b.height})),L=F[F.length-1].element,k=u[u.length-1],C=k.left+k.width/2,S=k.top+k.height/2,v=Kt(L);te({x:C/window.innerWidth*100,y:v?S:S+window.scrollY,clientY:S,element:`${F.length} elements: ${g}${y}`,elementPath:"multi-select",boundingBox:{x:a.left,y:a.top+window.scrollY,width:a.right-a.left,height:a.bottom-a.top},isMultiSelect:!0,isFixed:v,elementBoundingBoxes:x,multiSelectElements:F.map(b=>b.element),targetElement:L,fullPath:Lt(r),accessibility:jt(r),computedStyles:vt(r),computedStylesObj:Ct(r),nearbyElements:kt(r),cssClasses:at(r),nearbyText:it(r)})}else{const a=u[0],g=Kt(r);te({x:a.left/window.innerWidth*100,y:g?a.top:a.top+window.scrollY,clientY:a.top,element:n.name,elementPath:n.path,boundingBox:{x:a.left,y:g?a.top:a.top+window.scrollY,width:a.width,height:a.height},isFixed:g,fullPath:Lt(r),accessibility:jt(r),computedStyles:vt(r),computedStylesObj:Ct(r),nearbyElements:kt(r),cssClasses:at(r),nearbyText:it(r),reactComponents:n.reactComponents})}Oe([]),be(null)},[F]);_.useEffect(()=>{j||(te(null),qe(null),xe(null),Ee([]),be(null),pn(!1),Oe([]),pe.current={cmd:!1,shift:!1},ue&&yt())},[j,ue,yt]),_.useEffect(()=>()=>{Dn()},[]),_.useEffect(()=>{if(!j)return;const n=document.createElement("style");return n.id="feedback-cursor-styles",n.textContent=`
      body * {
        cursor: crosshair !important;
      }
      body p, body span, body h1, body h2, body h3, body h4, body h5, body h6,
      body li, body td, body th, body label, body blockquote, body figcaption,
      body caption, body legend, body dt, body dd, body pre, body code,
      body em, body strong, body b, body i, body u, body s, body a,
      body time, body address, body cite, body q, body abbr, body dfn,
      body mark, body small, body sub, body sup, body [contenteditable],
      body p *, body span *, body h1 *, body h2 *, body h3 *, body h4 *,
      body h5 *, body h6 *, body li *, body a *, body label *, body pre *,
      body code *, body blockquote *, body [contenteditable] * {
        cursor: text !important;
      }
      [data-feedback-toolbar], [data-feedback-toolbar] * {
        cursor: default !important;
      }
      [data-feedback-toolbar] textarea,
      [data-feedback-toolbar] input[type="text"],
      [data-feedback-toolbar] input[type="url"] {
        cursor: text !important;
      }
      [data-feedback-toolbar] button,
      [data-feedback-toolbar] button *,
      [data-feedback-toolbar] label,
      [data-feedback-toolbar] label *,
      [data-feedback-toolbar] a,
      [data-feedback-toolbar] a *,
      [data-feedback-toolbar] [role="button"],
      [data-feedback-toolbar] [role="button"] * {
        cursor: pointer !important;
      }
      [data-annotation-marker], [data-annotation-marker] * {
        cursor: pointer !important;
      }
    `,document.head.appendChild(n),()=>{const r=document.getElementById("feedback-cursor-styles");r&&r.remove()}},[j]),_.useEffect(()=>{if(!j||f)return;const n=r=>{const d=r.composedPath()[0]||r.target;if(se(d,"[data-feedback-toolbar]")){be(null);return}const u=Qe(r.clientX,r.clientY);if(!u||se(u,"[data-feedback-toolbar]")){be(null);return}const{name:a,elementName:g,path:y,reactComponents:x}=qt(u,we),$=u.getBoundingClientRect();be({element:a,elementName:g,elementPath:y,rect:$,reactComponents:x}),Et({x:r.clientX,y:r.clientY})};return document.addEventListener("mousemove",n),()=>document.removeEventListener("mousemove",n)},[j,f,we]),_.useEffect(()=>{if(!j)return;const n=r=>{if(ht.current){ht.current=!1;return}const d=r.composedPath()[0]||r.target;if(se(d,"[data-feedback-toolbar]")||se(d,"[data-annotation-popup]")||se(d,"[data-annotation-marker]"))return;if(r.metaKey&&r.shiftKey&&!f&&!M){r.preventDefault(),r.stopPropagation();const D=Qe(r.clientX,r.clientY);if(!D)return;const ie=D.getBoundingClientRect(),{name:oe,path:de,reactComponents:B}=qt(D,we),T=F.findIndex(Q=>Q.element===D);T>=0?Oe(Q=>Q.filter((X,Le)=>Le!==T)):Oe(Q=>[...Q,{element:D,rect:ie,name:oe,path:de,reactComponents:B??void 0}]);return}const u=se(d,"button, a, input, select, textarea, [role='button'], [onclick]");if(h.blockInteractions&&u&&(r.preventDefault(),r.stopPropagation()),f){if(u&&!h.blockInteractions)return;r.preventDefault(),$n.current?.shake();return}if(M){if(u&&!h.blockInteractions)return;r.preventDefault(),En.current?.shake();return}r.preventDefault();const a=Qe(r.clientX,r.clientY);if(!a)return;const{name:g,path:y,reactComponents:x}=qt(a,we),$=a.getBoundingClientRect(),L=r.clientX/window.innerWidth*100,k=Kt(a),C=k?r.clientY:r.clientY+window.scrollY,S=window.getSelection();let v;S&&S.toString().trim().length>0&&(v=S.toString().trim().slice(0,500));const b=Ct(a),_e=vt(a);te({x:L,y:C,clientY:r.clientY,element:g,elementPath:y,selectedText:v,boundingBox:{x:$.left,y:k?$.top:$.top+window.scrollY,width:$.width,height:$.height},nearbyText:it(a),cssClasses:at(a),isFixed:k,fullPath:Lt(a),accessibility:jt(a),computedStyles:_e,computedStylesObj:b,nearbyElements:kt(a),reactComponents:x??void 0,targetElement:a}),be(null)};return document.addEventListener("click",n,!0),()=>document.removeEventListener("click",n,!0)},[j,f,M,h.blockInteractions,we,F]),_.useEffect(()=>{if(!j)return;const n=u=>{u.key==="Meta"&&(pe.current.cmd=!0),u.key==="Shift"&&(pe.current.shift=!0)},r=u=>{const a=pe.current.cmd&&pe.current.shift;u.key==="Meta"&&(pe.current.cmd=!1),u.key==="Shift"&&(pe.current.shift=!1);const g=pe.current.cmd&&pe.current.shift;a&&!g&&F.length>0&&Tn()},d=()=>{pe.current={cmd:!1,shift:!1},Oe([])};return document.addEventListener("keydown",n),document.addEventListener("keyup",r),window.addEventListener("blur",d),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",r),window.removeEventListener("blur",d)}},[j,F,Tn]),_.useEffect(()=>{if(!j||f)return;const n=r=>{const d=r.composedPath()[0]||r.target;se(d,"[data-feedback-toolbar]")||se(d,"[data-annotation-marker]")||se(d,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(d.tagName)||d.isContentEditable||(Fe.current={x:r.clientX,y:r.clientY})};return document.addEventListener("mousedown",n),()=>document.removeEventListener("mousedown",n)},[j,f]),_.useEffect(()=>{if(!j||f)return;const n=r=>{if(!Fe.current)return;const d=r.clientX-Fe.current.x,u=r.clientY-Fe.current.y,a=d*d+u*u,g=Ot*Ot;if(!Ce&&a>=g&&(ge.current=Fe.current,Ln(!0)),(Ce||a>=g)&&ge.current){if(ot.current){const B=Math.min(ge.current.x,r.clientX),T=Math.min(ge.current.y,r.clientY),Q=Math.abs(r.clientX-ge.current.x),X=Math.abs(r.clientY-ge.current.y);ot.current.style.transform=`translate(${B}px, ${T}px)`,ot.current.style.width=`${Q}px`,ot.current.style.height=`${X}px`}const y=Date.now();if(y-Sn.current<ao)return;Sn.current=y;const x=ge.current.x,$=ge.current.y,L=Math.min(x,r.clientX),k=Math.min($,r.clientY),C=Math.max(x,r.clientX),S=Math.max($,r.clientY),v=(L+C)/2,b=(k+S)/2,_e=new Set,D=[[L,k],[C,k],[L,S],[C,S],[v,b],[v,k],[v,S],[L,b],[C,b]];for(const[B,T]of D){const Q=document.elementsFromPoint(B,T);for(const X of Q)X instanceof HTMLElement&&_e.add(X)}const ie=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const B of ie)if(B instanceof HTMLElement){const T=B.getBoundingClientRect(),Q=T.left+T.width/2,X=T.top+T.height/2,Le=Q>=L&&Q<=C&&X>=k&&X<=S,ve=Math.min(T.right,C)-Math.max(T.left,L),An=Math.min(T.bottom,S)-Math.max(T.top,k),go=ve>0&&An>0?ve*An:0,Rn=T.width*T.height,ho=Rn>0?go/Rn:0;(Le||ho>.5)&&_e.add(B)}const oe=[],de=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const B of _e){if(se(B,"[data-feedback-toolbar]")||se(B,"[data-annotation-marker]"))continue;const T=B.getBoundingClientRect();if(!(T.width>window.innerWidth*.8&&T.height>window.innerHeight*.5)&&!(T.width<10||T.height<10)&&T.left<C&&T.right>L&&T.top<S&&T.bottom>k){const Q=B.tagName;let X=de.has(Q);if(!X&&(Q==="DIV"||Q==="SPAN")){const Le=B.textContent&&B.textContent.trim().length>0,ve=B.onclick!==null||B.getAttribute("role")==="button"||B.getAttribute("role")==="link"||B.classList.contains("clickable")||B.hasAttribute("data-clickable");(Le||ve)&&!B.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(X=!0)}if(X){let Le=!1;for(const ve of oe)if(ve.left<=T.left&&ve.right>=T.right&&ve.top<=T.top&&ve.bottom>=T.bottom){Le=!0;break}Le||oe.push(T)}}}if(st.current){const B=st.current;for(;B.children.length>oe.length;)B.removeChild(B.lastChild);oe.forEach((T,Q)=>{let X=B.children[Q];X||(X=document.createElement("div"),X.className=s.selectedElementHighlight,B.appendChild(X)),X.style.transform=`translate(${T.left}px, ${T.top}px)`,X.style.width=`${T.width}px`,X.style.height=`${T.height}px`})}}};return document.addEventListener("mousemove",n,{passive:!0}),()=>document.removeEventListener("mousemove",n)},[j,f,Ce,Ot]),_.useEffect(()=>{if(!j)return;const n=r=>{const d=Ce,u=ge.current;if(Ce&&u){ht.current=!0;const a=Math.min(u.x,r.clientX),g=Math.min(u.y,r.clientY),y=Math.max(u.x,r.clientX),x=Math.max(u.y,r.clientY),$=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(v=>{if(!(v instanceof HTMLElement)||se(v,"[data-feedback-toolbar]")||se(v,"[data-annotation-marker]"))return;const b=v.getBoundingClientRect();b.width>window.innerWidth*.8&&b.height>window.innerHeight*.5||b.width<10||b.height<10||b.left<y&&b.right>a&&b.top<x&&b.bottom>g&&$.push({element:v,rect:b})});const k=$.filter(({element:v})=>!$.some(({element:b})=>b!==v&&v.contains(b))),C=r.clientX/window.innerWidth*100,S=r.clientY+window.scrollY;if(k.length>0){const v=k.reduce((de,{rect:B})=>({left:Math.min(de.left,B.left),top:Math.min(de.top,B.top),right:Math.max(de.right,B.right),bottom:Math.max(de.bottom,B.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),b=k.slice(0,5).map(({element:de})=>It(de).name).join(", "),_e=k.length>5?` +${k.length-5} more`:"",D=k[0].element,ie=Ct(D),oe=vt(D);te({x:C,y:S,clientY:r.clientY,element:`${k.length} elements: ${b}${_e}`,elementPath:"multi-select",boundingBox:{x:v.left,y:v.top+window.scrollY,width:v.right-v.left,height:v.bottom-v.top},isMultiSelect:!0,fullPath:Lt(D),accessibility:jt(D),computedStyles:oe,computedStylesObj:ie,nearbyElements:kt(D),cssClasses:at(D),nearbyText:it(D)})}else{const v=Math.abs(y-a),b=Math.abs(x-g);v>20&&b>20&&te({x:C,y:S,clientY:r.clientY,element:"Area selection",elementPath:`region at (${Math.round(a)}, ${Math.round(g)})`,boundingBox:{x:a,y:g+window.scrollY,width:v,height:b},isMultiSelect:!0})}be(null)}else d&&(ht.current=!0);Fe.current=null,ge.current=null,Ln(!1),st.current&&(st.current.innerHTML="")};return document.addEventListener("mouseup",n),()=>document.removeEventListener("mouseup",n)},[j,Ce]);const he=_.useCallback(async(n,r,d)=>{const u=h.webhookUrl||K;if(!u||!h.webhooksEnabled&&!d)return!1;try{return(await fetch(u,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:n,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...r})})).ok}catch(a){return console.warn("[Agentation] Webhook failed:",a),!1}},[K,h.webhookUrl,h.webhooksEnabled]),_o=_.useCallback(n=>{if(!f)return;const r={id:Date.now().toString(),x:f.x,y:f.y,comment:n,element:f.element,elementPath:f.elementPath,timestamp:Date.now(),selectedText:f.selectedText,boundingBox:f.boundingBox,nearbyText:f.nearbyText,cssClasses:f.cssClasses,isMultiSelect:f.isMultiSelect,isFixed:f.isFixed,fullPath:f.fullPath,accessibility:f.accessibility,computedStyles:f.computedStyles,nearbyElements:f.nearbyElements,reactComponents:f.reactComponents,elementBoundingBoxes:f.elementBoundingBoxes,...w&&le?{sessionId:le,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};ee(d=>[...d,r]),ft.current=r.id,A(()=>{ft.current=null},300),A(()=>{tt(d=>new Set(d).add(r.id))},250),i?.(r),he("annotation.add",{annotation:r}),gt(!0),A(()=>{te(null),gt(!1)},150),window.getSelection()?.removeAllRanges(),w&&le&&St(w,le,r).then(d=>{d.id!==r.id&&(ee(u=>u.map(a=>a.id===r.id?{...a,id:d.id}:a)),tt(u=>{const a=new Set(u);return a.delete(r.id),a.add(d.id),a}))}).catch(d=>{console.warn("[Agentation] Failed to sync annotation:",d)})},[f,i,he,w,le]),co=_.useCallback(()=>{gt(!0),A(()=>{te(null),gt(!1)},150)},[]),Dt=_.useCallback(n=>{const r=I.findIndex(u=>u.id===n),d=I[r];M?.id===n&&(ze(!0),A(()=>{qe(null),xe(null),Ee([]),ze(!1)},150)),ln(n),pt(u=>new Set(u).add(n)),d&&(c?.(d),he("annotation.delete",{annotation:d})),w&&Xn(w,n).catch(u=>{console.warn("[Agentation] Failed to delete annotation from server:",u)}),A(()=>{ee(u=>u.filter(a=>a.id!==n)),pt(u=>{const a=new Set(u);return a.delete(n),a}),ln(null),r<I.length-1&&(an(r),A(()=>an(null),200))},150)},[I,M,c,he,w]),bt=_.useCallback(n=>{if(qe(n),Nt(null),$e(null),Ge([]),n.elementBoundingBoxes?.length){const r=[];for(const d of n.elementBoundingBoxes){const u=d.x+d.width/2,a=d.y+d.height/2-window.scrollY,g=Qe(u,a);g&&r.push(g)}Ee(r),xe(null)}else if(n.boundingBox){const r=n.boundingBox,d=r.x+r.width/2,u=n.isFixed?r.y+r.height/2:r.y+r.height/2-window.scrollY,a=Qe(d,u);if(a){const g=a.getBoundingClientRect(),y=g.width/r.width,x=g.height/r.height;y<.5||x<.5?xe(null):xe(a)}else xe(null);Ee([])}else xe(null),Ee([])},[]),xt=_.useCallback(n=>{if(!n){Nt(null),$e(null),Ge([]);return}if(Nt(n.id),n.elementBoundingBoxes?.length){const r=[];for(const d of n.elementBoundingBoxes){const u=d.x+d.width/2,a=d.y+d.height/2-window.scrollY,y=document.elementsFromPoint(u,a).find(x=>!x.closest("[data-annotation-marker]")&&!x.closest("[data-agentation-root]"));y&&r.push(y)}Ge(r),$e(null)}else if(n.boundingBox){const r=n.boundingBox,d=r.x+r.width/2,u=n.isFixed?r.y+r.height/2:r.y+r.height/2-window.scrollY,a=Qe(d,u);if(a){const g=a.getBoundingClientRect(),y=g.width/r.width,x=g.height/r.height;y<.5||x<.5?$e(null):$e(a)}else $e(null);Ge([])}else $e(null),Ge([])},[]),uo=_.useCallback(n=>{if(!M)return;const r={...M,comment:n};ee(d=>d.map(u=>u.id===M.id?r:u)),m?.(r),he("annotation.update",{annotation:r}),w&&Zo(w,M.id,{comment:n}).catch(d=>{console.warn("[Agentation] Failed to update annotation on server:",d)}),ze(!0),A(()=>{qe(null),xe(null),Ee([]),ze(!1)},150)},[M,m,he,w]),mo=_.useCallback(()=>{ze(!0),A(()=>{qe(null),xe(null),Ee([]),ze(!1)},150)},[]),Pe=_.useCallback(()=>{const n=I.length;if(n===0)return;p?.(I),he("annotations.clear",{annotations:I}),w&&Promise.all(I.map(d=>Xn(w,d.id).catch(u=>{console.warn("[Agentation] Failed to delete annotation from server:",u)}))),me(!0),U(!0);const r=n*30+200;A(()=>{ee([]),tt(new Set),localStorage.removeItem($t(W)),me(!1)},r),A(()=>U(!1),1500)},[W,I,p,he,w]),zt=_.useCallback(async()=>{const n=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:W,r=Jn(I,n,h.outputDetail,we);if(r){if(J)try{await navigator.clipboard.writeText(r)}catch{}E?.(r),Re(!0),A(()=>Re(!1),2e3),h.autoClearAfterCopy&&A(()=>Pe(),500)}},[I,W,h.outputDetail,we,h.autoClearAfterCopy,Pe,J,E]),Ft=_.useCallback(async()=>{const n=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:W,r=Jn(I,n,h.outputDetail,we);if(!r)return;Y&&Y(r,I),Je("sending"),await new Promise(u=>A(u,150));const d=await he("submit",{output:r,annotations:I},!0);Je(d?"sent":"failed"),A(()=>Je("idle"),2500),d&&h.autoClearAfterCopy&&A(()=>Pe(),500)},[Y,he,I,W,h.outputDetail,we,h.autoClearAfterCopy,Pe]);_.useEffect(()=>{if(!De)return;const n=10,r=u=>{const a=u.clientX-De.x,g=u.clientY-De.y,y=Math.sqrt(a*a+g*g);if(!ke&&y>n&&kn(!0),ke||y>n){let x=De.toolbarX+a,$=De.toolbarY+g;const L=20,k=297,C=44,v=k-(j?q==="connected"?297:257:44),b=L-v,_e=window.innerWidth-L-k;x=Math.max(b,Math.min(_e,x)),$=Math.max(L,Math.min(window.innerHeight-C-L,$)),Rt({x,y:$})}},d=()=>{ke&&(Wt.current=!0),kn(!1),Cn(null)};return document.addEventListener("mousemove",r),document.addEventListener("mouseup",d),()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",d)}},[De,ke,j,q]);const po=_.useCallback(n=>{if(n.target.closest("button")||n.target.closest(`.${s.settingsPanel}`))return;const r=n.currentTarget.parentElement;if(!r)return;const d=r.getBoundingClientRect(),u=H?.x??d.left,a=H?.y??d.top,g=(Math.random()-.5)*10;lo(g),Cn({x:n.clientX,y:n.clientY,toolbarX:u,toolbarY:a})},[H]);if(_.useEffect(()=>{if(!H)return;const n=()=>{let a=H.x,g=H.y;const $=20-(297-(j?q==="connected"?297:257:44)),L=window.innerWidth-20-297;a=Math.max($,Math.min(L,a)),g=Math.max(20,Math.min(window.innerHeight-44-20,g)),(a!==H.x||g!==H.y)&&Rt({x:a,y:g})};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[H,j,q]),_.useEffect(()=>{const n=r=>{const d=r.target,u=d.tagName==="INPUT"||d.tagName==="TEXTAREA"||d.isContentEditable;if(r.key==="Escape"){if(F.length>0){Oe([]);return}f||j&&(ne(),ae(!1))}if((r.metaKey||r.ctrlKey)&&r.shiftKey&&(r.key==="f"||r.key==="F")){r.preventDefault(),ne(),ae(a=>!a);return}if(!(u||r.metaKey||r.ctrlKey)&&((r.key==="p"||r.key==="P")&&(r.preventDefault(),ne(),Ht()),(r.key==="h"||r.key==="H")&&I.length>0&&(r.preventDefault(),ne(),Ve(a=>!a)),(r.key==="c"||r.key==="C")&&I.length>0&&(r.preventDefault(),ne(),zt()),(r.key==="x"||r.key==="X")&&I.length>0&&(r.preventDefault(),ne(),Pe()),r.key==="s"||r.key==="S")){const a=fe(h.webhookUrl)||fe(K||"");I.length>0&&a&&re==="idle"&&(r.preventDefault(),ne(),Ft())}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[j,f,I.length,h.webhookUrl,K,re,Ft,Ht,zt,Pe,F]),!z)return null;const Xe=I.length>0,wt=I.filter(n=>!jn.has(n.id)),Bn=I.filter(n=>jn.has(n.id)),Yn=n=>{const g=n.x/100*window.innerWidth,y=typeof n.y=="string"?parseFloat(n.y):n.y,x={};window.innerHeight-y-22-10<80&&(x.top="auto",x.bottom="calc(100% + 10px)");const L=g-200/2,k=10;if(L<k){const C=k-L;x.left=`calc(50% + ${C}px)`}else if(L+200>window.innerWidth-k){const C=L+200-(window.innerWidth-k);x.left=`calc(50% - ${C}px)`}return x};return Wn.createPortal(e.jsxs(e.Fragment,{children:[e.jsx("div",{className:s.toolbar,"data-feedback-toolbar":!0,style:H?{left:H.x,top:H.y,right:"auto",bottom:"auto"}:void 0,children:e.jsxs("div",{className:`${s.toolbarContainer} ${N?"":s.light} ${j?s.expanded:s.collapsed} ${bn?s.entrance:""} ${ke?s.dragging:""} ${!h.webhooksEnabled&&(fe(h.webhookUrl)||fe(K||""))?s.serverConnected:""}`,onClick:j?void 0:n=>{if(Wt.current){Wt.current=!1,n.preventDefault();return}ae(!0)},onMouseDown:po,role:j?void 0:"button",tabIndex:j?-1:0,title:j?void 0:"Start feedback mode",style:{...ke&&{transform:`scale(1.05) rotate(${ro}deg)`,cursor:"grabbing"}},children:[e.jsxs("div",{className:`${s.toggleContent} ${j?s.hidden:s.visible}`,children:[e.jsx(wo,{size:24}),Xe&&e.jsx("span",{className:`${s.badge} ${j?s.fadeOut:""} ${bn?s.entrance:""}`,style:{backgroundColor:h.annotationColor},children:I.length})]}),e.jsxs("div",{className:`${s.controlsContent} ${j?s.visible:s.hidden} ${H&&H.y<100?s.tooltipBelow:""} ${oo||Ke?s.tooltipsHidden:""}`,onMouseLeave:so,children:[e.jsxs("div",{className:`${s.buttonWrapper} ${H&&H.x<120?s.buttonWrapperAlignLeft:""}`,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:n=>{n.stopPropagation(),ne(),Ht()},"data-active":ue,children:e.jsx(jo,{size:24,isPaused:ue})}),e.jsxs("span",{className:s.buttonTooltip,children:[ue?"Resume animations":"Pause animations",e.jsx("span",{className:s.shortcut,children:"P"})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:n=>{n.stopPropagation(),ne(),Ve(!Be)},disabled:!Xe,children:e.jsx(vo,{size:24,isOpen:Be})}),e.jsxs("span",{className:s.buttonTooltip,children:[Be?"Hide markers":"Show markers",e.jsx("span",{className:s.shortcut,children:"H"})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light} ${Ae?s.statusShowing:""}`,onClick:n=>{n.stopPropagation(),ne(),zt()},disabled:!Xe,"data-active":Ae,children:e.jsx(ko,{size:24,copied:Ae})}),e.jsxs("span",{className:s.buttonTooltip,children:["Copy feedback",e.jsx("span",{className:s.shortcut,children:"C"})]})]}),e.jsxs("div",{className:`${s.buttonWrapper} ${s.sendButtonWrapper} ${!h.webhooksEnabled&&(fe(h.webhookUrl)||fe(K||""))?s.sendButtonVisible:""}`,children:[e.jsxs("button",{className:`${s.controlButton} ${N?"":s.light} ${re==="sent"||re==="failed"?s.statusShowing:""}`,onClick:n=>{n.stopPropagation(),ne(),Ft()},disabled:!Xe||!fe(h.webhookUrl)&&!fe(K||"")||re==="sending","data-no-hover":re==="sent"||re==="failed",tabIndex:fe(h.webhookUrl)||fe(K||"")?0:-1,children:[e.jsx(Co,{size:24,state:re}),Xe&&re==="idle"&&e.jsx("span",{className:`${s.buttonBadge} ${N?"":s.light}`,style:{backgroundColor:h.annotationColor},children:I.length})]}),e.jsxs("span",{className:s.buttonTooltip,children:["Send Annotations",e.jsx("span",{className:s.shortcut,children:"S"})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:n=>{n.stopPropagation(),ne(),Pe()},disabled:!Xe,"data-danger":!0,children:e.jsx(So,{size:24})}),e.jsxs("span",{className:s.buttonTooltip,children:["Clear all",e.jsx("span",{className:s.shortcut,children:"X"})]})]}),e.jsxs("div",{className:s.buttonWrapper,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:n=>{n.stopPropagation(),ne(),pn(!Ke)},children:e.jsx(Lo,{size:24})}),w&&q!=="disconnected"&&e.jsx("span",{className:`${s.mcpIndicator} ${N?"":s.light} ${s[q]} ${Ke?s.hidden:""}`,title:q==="connected"?"MCP Connected":"MCP Connecting..."}),e.jsx("span",{className:s.buttonTooltip,children:"Settings"})]}),e.jsx("div",{className:`${s.divider} ${N?"":s.light}`}),e.jsxs("div",{className:`${s.buttonWrapper} ${H&&typeof window<"u"&&H.x>window.innerWidth-120?s.buttonWrapperAlignRight:""}`,children:[e.jsx("button",{className:`${s.controlButton} ${N?"":s.light}`,onClick:n=>{n.stopPropagation(),ne(),ae(!1)},children:e.jsx(Io,{size:24})}),e.jsxs("span",{className:s.buttonTooltip,children:["Exit",e.jsx("span",{className:s.shortcut,children:"Esc"})]})]})]}),e.jsx("div",{className:`${s.settingsPanel} ${N?s.dark:s.light} ${no?s.enter:s.exit}`,onClick:n=>n.stopPropagation(),style:H&&H.y<230?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,children:e.jsxs("div",{className:`${s.settingsPanelContainer} ${hn?s.transitioning:""}`,children:[e.jsxs("div",{className:`${s.settingsPage} ${Tt==="automations"?s.slideLeft:""}`,children:[e.jsxs("div",{className:s.settingsHeader,children:[e.jsxs("span",{className:s.settingsBrand,children:[e.jsx("span",{className:s.settingsBrandSlash,style:{color:h.annotationColor,transition:"color 0.2s ease"},children:"/"}),"agentation"]}),e.jsxs("span",{className:s.settingsVersion,children:["v","2.2.1"]}),e.jsx("button",{className:s.themeToggle,onClick:()=>yn(!N),title:N?"Switch to light mode":"Switch to dark mode",children:e.jsx("span",{className:s.themeIconWrapper,children:e.jsx("span",{className:s.themeIcon,children:N?e.jsx($o,{size:20}):e.jsx(Eo,{size:20})},N?"sun":"moon")})})]}),e.jsxs("div",{className:s.settingsSection,children:[e.jsxs("div",{className:s.settingsRow,children:[e.jsxs("div",{className:`${s.settingsLabel} ${N?"":s.light}`,children:["Output Detail",e.jsx(et,{content:"Controls how much detail is included in the copied output",children:e.jsx("span",{className:s.helpIcon,children:e.jsx(lt,{size:20})})})]}),e.jsxs("button",{className:`${s.cycleButton} ${N?"":s.light}`,onClick:()=>{const r=(ct.findIndex(d=>d.value===h.outputDetail)+1)%ct.length;je(d=>({...d,outputDetail:ct[r].value}))},children:[e.jsx("span",{className:s.cycleButtonText,children:ct.find(n=>n.value===h.outputDetail)?.label},h.outputDetail),e.jsx("span",{className:s.cycleDots,children:ct.map((n,r)=>e.jsx("span",{className:`${s.cycleDot} ${N?"":s.light} ${h.outputDetail===n.value?s.active:""}`},n.value))})]})]}),e.jsxs("div",{className:`${s.settingsRow} ${s.settingsRowMarginTop} ${He?"":s.settingsRowDisabled}`,children:[e.jsxs("div",{className:`${s.settingsLabel} ${N?"":s.light}`,children:["React Components",e.jsx(et,{content:He?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use on localhost in development mode.",children:e.jsx("span",{className:s.helpIcon,children:e.jsx(lt,{size:20})})})]}),e.jsxs("label",{className:`${s.toggleSwitch} ${He?"":s.disabled}`,children:[e.jsx("input",{type:"checkbox",checked:He&&h.reactEnabled,disabled:!He,onChange:()=>je(n=>({...n,reactEnabled:!n.reactEnabled}))}),e.jsx("span",{className:s.toggleSlider})]})]})]}),e.jsxs("div",{className:s.settingsSection,children:[e.jsx("div",{className:`${s.settingsLabel} ${s.settingsLabelMarker} ${N?"":s.light}`,children:"Marker Colour"}),e.jsx("div",{className:s.colorOptions,children:cs.map(n=>e.jsx("div",{role:"button",onClick:()=>je(r=>({...r,annotationColor:n.value})),style:{borderColor:h.annotationColor===n.value?n.value:"transparent"},className:`${s.colorOptionRing} ${h.annotationColor===n.value?s.selected:""}`,children:e.jsx("div",{className:`${s.colorOption} ${h.annotationColor===n.value?s.selected:""}`,style:{backgroundColor:n.value},title:n.label})},n.value))})]}),e.jsxs("div",{className:s.settingsSection,children:[e.jsxs("label",{className:s.settingsToggle,children:[e.jsx("input",{type:"checkbox",id:"autoClearAfterCopy",checked:h.autoClearAfterCopy,onChange:n=>je(r=>({...r,autoClearAfterCopy:n.target.checked}))}),e.jsx("label",{className:`${s.customCheckbox} ${h.autoClearAfterCopy?s.checked:""}`,htmlFor:"autoClearAfterCopy",children:h.autoClearAfterCopy&&e.jsx(On,{size:14})}),e.jsxs("span",{className:`${s.toggleLabel} ${N?"":s.light}`,children:["Clear on copy/send",e.jsx(et,{content:"Automatically clear annotations after copying",children:e.jsx("span",{className:`${s.helpIcon} ${s.helpIconNudge2}`,children:e.jsx(lt,{size:20})})})]})]}),e.jsxs("label",{className:`${s.settingsToggle} ${s.settingsToggleMarginBottom}`,children:[e.jsx("input",{type:"checkbox",id:"blockInteractions",checked:h.blockInteractions,onChange:n=>je(r=>({...r,blockInteractions:n.target.checked}))}),e.jsx("label",{className:`${s.customCheckbox} ${h.blockInteractions?s.checked:""}`,htmlFor:"blockInteractions",children:h.blockInteractions&&e.jsx(On,{size:14})}),e.jsx("span",{className:`${s.toggleLabel} ${N?"":s.light}`,children:"Block page interactions"})]})]}),e.jsx("div",{className:`${s.settingsSection} ${s.settingsSectionExtraPadding}`,children:e.jsxs("button",{className:`${s.settingsNavLink} ${N?"":s.light}`,onClick:()=>Bt("automations"),children:[e.jsx("span",{children:"Manage MCP & Webhooks"}),e.jsxs("span",{className:s.settingsNavLinkRight,children:[w&&q!=="disconnected"&&e.jsx("span",{className:`${s.mcpNavIndicator} ${s[q]}`}),e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})})]}),e.jsxs("div",{className:`${s.settingsPage} ${s.automationsPage} ${Tt==="automations"?s.slideIn:""}`,children:[e.jsxs("button",{className:`${s.settingsBackButton} ${N?"":s.light}`,onClick:()=>Bt("main"),children:[e.jsx(Mo,{size:16}),e.jsx("span",{children:"Manage MCP & Webhooks"})]}),e.jsxs("div",{className:s.settingsSection,children:[e.jsxs("div",{className:s.settingsRow,children:[e.jsxs("span",{className:`${s.automationHeader} ${N?"":s.light}`,children:["MCP Connection",e.jsx(et,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time.",children:e.jsx("span",{className:`${s.helpIcon} ${s.helpIconNudgeDown}`,children:e.jsx(lt,{size:20})})})]}),w&&e.jsx("div",{className:`${s.mcpStatusDot} ${s[q]}`,title:q==="connected"?"Connected":q==="connecting"?"Connecting...":"Disconnected"})]}),e.jsxs("p",{className:`${s.automationDescription} ${N?"":s.light}`,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",e.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:`${s.learnMoreLink} ${N?"":s.light}`,children:"Learn more"})]})]}),e.jsxs("div",{className:`${s.settingsSection} ${s.settingsSectionGrow}`,children:[e.jsxs("div",{className:s.settingsRow,children:[e.jsxs("span",{className:`${s.automationHeader} ${N?"":s.light}`,children:["Webhooks",e.jsx(et,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations.",children:e.jsx("span",{className:`${s.helpIcon} ${s.helpIconNoNudge}`,children:e.jsx(lt,{size:20})})})]}),e.jsxs("div",{className:s.autoSendRow,children:[e.jsx("span",{className:`${s.autoSendLabel} ${N?"":s.light} ${h.webhooksEnabled?s.active:""}`,children:"Auto-Send"}),e.jsxs("label",{className:`${s.toggleSwitch} ${h.webhookUrl?"":s.disabled}`,children:[e.jsx("input",{type:"checkbox",checked:h.webhooksEnabled,disabled:!h.webhookUrl,onChange:()=>je(n=>({...n,webhooksEnabled:!n.webhooksEnabled}))}),e.jsx("span",{className:s.toggleSlider})]})]})]}),e.jsx("p",{className:`${s.automationDescription} ${N?"":s.light}`,children:"The webhook URL will receive live annotation changes and annotation data."}),e.jsx("textarea",{className:`${s.webhookUrlInput} ${N?"":s.light}`,placeholder:"Webhook URL",value:h.webhookUrl,style:{"--marker-color":h.annotationColor},onChange:n=>je(r=>({...r,webhookUrl:n.target.value}))})]})]})]})})]})}),e.jsxs("div",{className:s.markersLayer,"data-feedback-toolbar":!0,children:[ce&&wt.filter(n=>!n.isFixed).map((n,r)=>{const d=!V&&ut===n.id,u=rn===n.id,a=(d||u)&&!M,g=n.isMultiSelect,y=g?"#34C759":h.annotationColor,x=I.findIndex(C=>C.id===n.id),$=!vn.has(n.id),L=V?s.exit:We?s.clearing:$?s.enter:"",k=a&&h.markerClickBehavior==="delete";return e.jsxs("div",{className:`${s.marker} ${g?s.multiSelect:""} ${L} ${k?s.hovered:""}`,"data-annotation-marker":!0,style:{left:`${n.x}%`,top:n.y,backgroundColor:k?void 0:y,animationDelay:V?`${(wt.length-1-r)*20}ms`:`${r*20}ms`},onMouseEnter:()=>!V&&n.id!==ft.current&&xt(n),onMouseLeave:()=>xt(null),onClick:C=>{C.stopPropagation(),V||(h.markerClickBehavior==="delete"?Dt(n.id):bt(n))},onContextMenu:C=>{h.markerClickBehavior==="delete"&&(C.preventDefault(),C.stopPropagation(),V||bt(n))},children:[a?k?e.jsx(Xt,{size:g?18:16}):e.jsx(Hn,{size:16}):e.jsx("span",{className:mt!==null&&x>=mt?s.renumber:void 0,children:x+1}),d&&!M&&e.jsxs("div",{className:`${s.markerTooltip} ${N?"":s.light} ${s.enter}`,style:Yn(n),children:[e.jsxs("span",{className:s.markerQuote,children:[n.element,n.selectedText&&` "${n.selectedText.slice(0,30)}${n.selectedText.length>30?"...":""}"`]}),e.jsx("span",{className:s.markerNote,children:n.comment})]})]},n.id)}),ce&&!V&&Bn.filter(n=>!n.isFixed).map(n=>{const r=n.isMultiSelect;return e.jsx("div",{className:`${s.marker} ${s.hovered} ${r?s.multiSelect:""} ${s.exit}`,"data-annotation-marker":!0,style:{left:`${n.x}%`,top:n.y},children:e.jsx(Xt,{size:r?12:10})},n.id)})]}),e.jsxs("div",{className:s.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[ce&&wt.filter(n=>n.isFixed).map((n,r)=>{const d=wt.filter(S=>S.isFixed),u=!V&&ut===n.id,a=rn===n.id,g=(u||a)&&!M,y=n.isMultiSelect,x=y?"#34C759":h.annotationColor,$=I.findIndex(S=>S.id===n.id),L=!vn.has(n.id),k=V?s.exit:We?s.clearing:L?s.enter:"",C=g&&h.markerClickBehavior==="delete";return e.jsxs("div",{className:`${s.marker} ${s.fixed} ${y?s.multiSelect:""} ${k} ${C?s.hovered:""}`,"data-annotation-marker":!0,style:{left:`${n.x}%`,top:n.y,backgroundColor:C?void 0:x,animationDelay:V?`${(d.length-1-r)*20}ms`:`${r*20}ms`},onMouseEnter:()=>!V&&n.id!==ft.current&&xt(n),onMouseLeave:()=>xt(null),onClick:S=>{S.stopPropagation(),V||(h.markerClickBehavior==="delete"?Dt(n.id):bt(n))},onContextMenu:S=>{h.markerClickBehavior==="delete"&&(S.preventDefault(),S.stopPropagation(),V||bt(n))},children:[g?C?e.jsx(Xt,{size:y?18:16}):e.jsx(Hn,{size:16}):e.jsx("span",{className:mt!==null&&$>=mt?s.renumber:void 0,children:$+1}),u&&!M&&e.jsxs("div",{className:`${s.markerTooltip} ${N?"":s.light} ${s.enter}`,style:Yn(n),children:[e.jsxs("span",{className:s.markerQuote,children:[n.element,n.selectedText&&` "${n.selectedText.slice(0,30)}${n.selectedText.length>30?"...":""}"`]}),e.jsx("span",{className:s.markerNote,children:n.comment})]})]},n.id)}),ce&&!V&&Bn.filter(n=>n.isFixed).map(n=>{const r=n.isMultiSelect;return e.jsx("div",{className:`${s.marker} ${s.fixed} ${s.hovered} ${r?s.multiSelect:""} ${s.exit}`,"data-annotation-marker":!0,style:{left:`${n.x}%`,top:n.y},children:e.jsx(bo,{size:r?12:10})},n.id)})]}),j&&e.jsxs("div",{className:s.overlay,"data-feedback-toolbar":!0,style:f||M?{zIndex:99999}:void 0,children:[G?.rect&&!f&&!cn&&!Ce&&e.jsx("div",{className:`${s.hoverHighlight} ${s.enter}`,style:{left:G.rect.left,top:G.rect.top,width:G.rect.width,height:G.rect.height,borderColor:`${h.annotationColor}80`,backgroundColor:`${h.annotationColor}0A`}}),F.filter(n=>document.contains(n.element)).map((n,r)=>{const d=n.element.getBoundingClientRect(),u=F.length>1;return e.jsx("div",{className:u?s.multiSelectOutline:s.singleSelectOutline,style:{position:"fixed",left:d.left,top:d.top,width:d.width,height:d.height,...u?{}:{borderColor:`${h.annotationColor}99`,backgroundColor:`${h.annotationColor}0D`}}},r)}),ut&&!f&&(()=>{const n=I.find(a=>a.id===ut);if(!n?.boundingBox)return null;if(n.elementBoundingBoxes?.length)return sn.length>0?sn.filter(a=>document.contains(a)).map((a,g)=>{const y=a.getBoundingClientRect();return e.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:y.left,top:y.top,width:y.width,height:y.height}},`hover-outline-live-${g}`)}):n.elementBoundingBoxes.map((a,g)=>e.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:a.x,top:a.y-Ne,width:a.width,height:a.height}},`hover-outline-${g}`));const r=Mt&&document.contains(Mt)?Mt.getBoundingClientRect():null,d=r?{x:r.left,y:r.top,width:r.width,height:r.height}:{x:n.boundingBox.x,y:n.isFixed?n.boundingBox.y:n.boundingBox.y-Ne,width:n.boundingBox.width,height:n.boundingBox.height},u=n.isMultiSelect;return e.jsx("div",{className:`${u?s.multiSelectOutline:s.singleSelectOutline} ${s.enter}`,style:{left:d.x,top:d.y,width:d.width,height:d.height,...u?{}:{borderColor:`${h.annotationColor}99`,backgroundColor:`${h.annotationColor}0D`}}})})(),G&&!f&&!cn&&!Ce&&e.jsxs("div",{className:`${s.hoverTooltip} ${s.enter}`,style:{left:Math.max(8,Math.min(Ie.x,window.innerWidth-100)),top:Math.max(Ie.y-(G.reactComponents?48:32),8)},children:[G.reactComponents&&e.jsx("div",{className:s.hoverReactPath,children:G.reactComponents}),e.jsx("div",{className:s.hoverElementName,children:G.elementName})]}),f&&e.jsxs(e.Fragment,{children:[f.multiSelectElements?.length?f.multiSelectElements.filter(n=>document.contains(n)).map((n,r)=>{const d=n.getBoundingClientRect();return e.jsx("div",{className:`${s.multiSelectOutline} ${nt?s.exit:s.enter}`,style:{left:d.left,top:d.top,width:d.width,height:d.height}},`pending-multi-${r}`)}):f.targetElement&&document.contains(f.targetElement)?(()=>{const n=f.targetElement.getBoundingClientRect();return e.jsx("div",{className:`${s.singleSelectOutline} ${nt?s.exit:s.enter}`,style:{left:n.left,top:n.top,width:n.width,height:n.height,borderColor:`${h.annotationColor}99`,backgroundColor:`${h.annotationColor}0D`}})})():f.boundingBox&&e.jsx("div",{className:`${f.isMultiSelect?s.multiSelectOutline:s.singleSelectOutline} ${nt?s.exit:s.enter}`,style:{left:f.boundingBox.x,top:f.boundingBox.y-Ne,width:f.boundingBox.width,height:f.boundingBox.height,...f.isMultiSelect?{}:{borderColor:`${h.annotationColor}99`,backgroundColor:`${h.annotationColor}0D`}}}),(()=>{const n=f.x,r=f.isFixed?f.y:f.y-Ne;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:`${s.marker} ${s.pending} ${f.isMultiSelect?s.multiSelect:""} ${nt?s.exit:s.enter}`,style:{left:`${n}%`,top:r,backgroundColor:f.isMultiSelect?"#34C759":h.annotationColor},children:e.jsx(xo,{size:12})}),e.jsx(zn,{ref:$n,element:f.element,selectedText:f.selectedText,computedStyles:f.computedStylesObj,placeholder:f.element==="Area selection"?"What should change in this area?":f.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:_o,onCancel:co,isExiting:nt,lightMode:!N,accentColor:f.isMultiSelect?"#34C759":h.annotationColor,style:{left:Math.max(160,Math.min(window.innerWidth-160,n/100*window.innerWidth)),...r>window.innerHeight-290?{bottom:window.innerHeight-r+20}:{top:r+20}}})]})})()]}),M&&e.jsxs(e.Fragment,{children:[M.elementBoundingBoxes?.length?_n.length>0?_n.filter(n=>document.contains(n)).map((n,r)=>{const d=n.getBoundingClientRect();return e.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:d.left,top:d.top,width:d.width,height:d.height}},`edit-multi-live-${r}`)}):M.elementBoundingBoxes.map((n,r)=>e.jsx("div",{className:`${s.multiSelectOutline} ${s.enter}`,style:{left:n.x,top:n.y-Ne,width:n.width,height:n.height}},`edit-multi-${r}`)):(()=>{const n=Pt&&document.contains(Pt)?Pt.getBoundingClientRect():null,r=n?{x:n.left,y:n.top,width:n.width,height:n.height}:M.boundingBox?{x:M.boundingBox.x,y:M.isFixed?M.boundingBox.y:M.boundingBox.y-Ne,width:M.boundingBox.width,height:M.boundingBox.height}:null;return r?e.jsx("div",{className:`${M.isMultiSelect?s.multiSelectOutline:s.singleSelectOutline} ${s.enter}`,style:{left:r.x,top:r.y,width:r.width,height:r.height,...M.isMultiSelect?{}:{borderColor:`${h.annotationColor}99`,backgroundColor:`${h.annotationColor}0D`}}}):null})(),e.jsx(zn,{ref:En,element:M.element,selectedText:M.selectedText,computedStyles:zo(M.computedStyles),placeholder:"Edit your feedback...",initialValue:M.comment,submitLabel:"Save",onSubmit:uo,onCancel:mo,onDelete:()=>Dt(M.id),isExiting:io,lightMode:!N,accentColor:M.isMultiSelect?"#34C759":h.annotationColor,style:(()=>{const n=M.isFixed?M.y:M.y-Ne;return{left:Math.max(160,Math.min(window.innerWidth-160,M.x/100*window.innerWidth)),...n>window.innerHeight-290?{bottom:window.innerHeight-n+20}:{top:n+20}}})()})]}),Ce&&e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:ot,className:s.dragSelection}),e.jsx("div",{ref:st,className:s.highlightsContainer})]})]})]}),document.body)}export{Ps as Agentation,$s as AnimatedBunny,zn as AnnotationPopupCSS,vs as IconChatEllipsis,ms as IconCheck,ps as IconCheckSmall,On as IconCheckSmallAnimated,js as IconCheckmark,Ss as IconCheckmarkCircle,Ls as IconCheckmarkLarge,Mo as IconChevronLeft,Is as IconChevronRight,bo as IconClose,gs as IconCopyAlt,ko as IconCopyAnimated,Hn as IconEdit,fs as IconEye,ys as IconEyeAlt,vo as IconEyeAnimated,bs as IconEyeClosed,xs as IconEyeMinus,Lo as IconGear,lt as IconHelp,wo as IconListSparkle,Eo as IconMoon,ks as IconPause,ws as IconPauseAlt,jo as IconPausePlayAnimated,Cs as IconPlayAlt,xo as IconPlus,hs as IconSendAnimated,Co as IconSendArrow,$o as IconSun,No as IconTrash,So as IconTrashAlt,Xt as IconXmark,Io as IconXmarkLarge,Ps as PageFeedbackToolbarCSS,se as closestCrossingShadow,at as getElementClasses,Ao as getElementPath,it as getNearbyText,Ns as getShadowHost,$t as getStorageKey,Ms as identifyAnimationElement,It as identifyElement,Es as isInShadowDOM,Zt as loadAnnotations,eo as saveAnnotations};
