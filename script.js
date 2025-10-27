// Just a greeting for now
console.log("Welcome to the Masanula Blog. Love and unity forever.");

window.addEventListener('scroll',()=>{
  const fadeTexts=document.querySelectorAll('.fade-text');
  const zoomImg=document.querySelector'.zoom-img');

 fadeTexts.forEach((text)=>{
  const rect=text.getBoundingClientRect();
  if (rect.top<window.innerHeight-100){
    text.classList.add('fade-in');
   }
  });

 const scrollY=window.scrollY;
 if(scrollY>100 && scrollY <400){
   zoomImg.style.transform ='scale(${1 + scrollY /500})';
} else if (scrollY <=100){
   zoomImg.style.transform='scale(1)';
}
});