// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Notify form — static-friendly submit via Formspree (no backend required)
const form = document.getElementById('notify-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const button = form.querySelector('button');
  const email = form.querySelector('#email').value;

  button.disabled = true;
  button.textContent = 'Sending…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      note.textContent = `Thanks — we'll email ${email} when we launch.`;
      form.reset();
    } else {
      note.textContent = "Something went wrong. Please email us directly instead.";
    }
  } catch (err) {
    note.textContent = "Something went wrong. Please email us directly instead.";
  } finally {
    button.disabled = false;
    button.textContent = 'Notify me';
  }
});

// Subtle connecting-dots background
(function () {
  const canvas = document.getElementById('dots');
  const ctx = canvas.getContext('2d');
  let w, h, points;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(60, Math.floor((w * h) / 28000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const maxDist = Math.min(w, h) * 0.14;

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      if (!prefersReducedMotion) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      for (let j = i + 1; j < points.length; j++) {
        const q = points[j];
        const dx = p.x - q.x, dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          ctx.strokeStyle = `rgba(226, 89, 31, ${0.12 * (1 - dist / maxDist)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      ctx.fillStyle = 'rgba(28, 26, 23, 0.25)';
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
      ctx.fill();
    }

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
})();
