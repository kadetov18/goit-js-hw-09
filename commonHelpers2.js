import"./assets/styles-a53cc73d.js";document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".feedback-form"),s=e.querySelector('input[name="email"]'),m=e.querySelector('textarea[name="message"]');e.addEventListener("input",()=>{const t={email:s.value.trim(),message:m.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(t))});const o=localStorage.getItem("feedback-form-state");if(o){const{email:t,message:a}=JSON.parse(o);s.value=t,m.value=a}e.addEventListener("submit",t=>{t.preventDefault();const a={email:s.value.trim(),message:m.value.trim()};a.email&&a.message?(console.log(a),localStorage.removeItem("feedback-form-state"),e.reset()):alert("Please fill in both fields.")})});
//# sourceMappingURL=commonHelpers2.js.map
