document.addEventListener('DOMContentLoaded', ()=>{
  const y = new Date().getFullYear(); document.getElementById('year').textContent = y;
  // simple follow button toggle
  const btn = document.querySelector('.follow');
  if(btn){
    btn.addEventListener('click', ()=>{
      if(btn.textContent.trim() === 'Follow'){
        btn.textContent = 'Following';
        btn.style.background = 'rgba(255,255,255,0.14)';
      } else {
        btn.textContent = 'Follow';
        btn.style.background = '#fff';
      }
    });
  }
});
