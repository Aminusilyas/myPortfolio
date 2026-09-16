document.addEventListener('DOMContentLoaded', function(){
  // year in footer(s)
  const y = new Date().getFullYear();
  const els = document.querySelectorAll('#year, #year-about, #year-projects, #year-contact');
  els.forEach(e=>{ if(e) e.textContent = y });

  // mobile nav toggle
  const nav = document.getElementById('nav');
  const btn = document.getElementById('navToggle');
  if(btn && nav){
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      btn.classList.toggle('open');
      // simple accessible toggle
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // simple contact form handling (no backend)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const fd = new FormData(form);
      const name = fd.get('name');
      const email = fd.get('email');
      const message = fd.get('message');
      if(!name || !email || !message){
        alert('Please complete all fields.');
        return;
      }
      // fallback: open mail client
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(message + '\n\n— ' + name + ' — ' + email);
      window.location.href = 'mailto:aminushehuilyasu@gmail.com?subject='+subject+'&body='+body;
    });
  }
});
