let mobile = 0;

function showMenu() {

  if (mobile == 1){ document.getElementById('qac').style.visibility = "visible";
  mobile = 0;
  } else {
document.getElementById('qac').style.visibility = "hidden";
    mobile = 1;
  }

}




const target = document.getElementById('maint');
const myDiv = document.getElementById('qac');


if (mobile == 0) { 
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      myDiv.classList.remove('visible');
    } else {
      myDiv.classList.add('visible');
    }
  },
  { threshold: 0 }
);

observer.observe(target);
} else {
document.getElementById('qac').style.visibility = "visible";
}





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const middle = rect.top + scrollTop - (window.innerHeight / 2) + (rect.height / 2);
      window.scrollTo({ top: middle, behavior: 'smooth' });
    }
  });
});
