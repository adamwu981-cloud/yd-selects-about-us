const header=document.querySelector('.site-header');
addEventListener('scroll',()=>header.classList.toggle('compact',scrollY>60),{passive:true});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
document.querySelectorAll('.origin-list button').forEach(btn=>btn.addEventListener('mouseenter',()=>{document.querySelectorAll('.origin-list button').forEach(b=>b.classList.remove('selected'));btn.classList.add('selected')}));
