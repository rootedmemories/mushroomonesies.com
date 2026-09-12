const form = document.querySelector('#signup-form');
const email = document.querySelector('#email');
const note = document.querySelector('#form-note');

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('.notify').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelector('#waitlist').scrollIntoView({ behavior: 'smooth' });
    note.textContent = `${button.dataset.style} selected. Add your email for first dibs.`;
    email.focus({ preventScroll: true });
  });
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Nice one! This is a preview, so nothing has been sent yet.';
  form.reset();
});
