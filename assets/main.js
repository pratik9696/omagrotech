(function () {
  // Mobile menu
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Enquiry form -> WhatsApp (no backend needed)
  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = form.dataset;
      var v = function (n) { return form.elements[n].value.trim(); };
      var lines = [d.greet, '', d.lName + ': ' + v('name'), d.lPhone + ': ' + v('phone')];
      if (v('interest')) lines.push(d.lInterest + ': ' + v('interest'));
      if (v('message')) lines.push(d.lMessage + ': ' + v('message'));
      window.open('https://wa.me/' + d.wa + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  }

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
