// Smooth navigation is handled by CSS. Keep this file for future enhancements.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open')}));
