
document.addEventListener("pointermove",e=>{
 document.documentElement.style.setProperty("--cx",e.clientX+"px");
 document.documentElement.style.setProperty("--cy",e.clientY+"px");
});
