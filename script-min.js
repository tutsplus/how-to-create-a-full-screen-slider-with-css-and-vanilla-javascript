function initSlider(){const e=document.getElementById("slider"),t=document.createElement("div");t.className="pagination",e.prepend(t);for(let d=document.querySelectorAll(".slide").length;d>0;d--){let n=document.createElement("input");n.type="radio",n.name="slide-radios",n.className="slide-radio",n.id=`slide-radio-${d}`,1===d&&(n.checked=!0),e.prepend(n);let l=document.createElement("label");l.setAttribute("for",`slide-radio-${d}`),t.prepend(l)}let d=setInterval(changeSlide,5e3);t.addEventListener("mouseenter",()=>clearTimeout(d)),t.addEventListener("mouseleave",()=>d=setInterval(changeSlide,5e3))}function changeSlide(){const e=[...document.querySelectorAll(".slide-radio")],t=e.findIndex(e=>e.checked);e[(t+1)%e.length].checked=!0}document.body.onload=initSlider;