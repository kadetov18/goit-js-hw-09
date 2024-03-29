document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  form.addEventListener('input', () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }

  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    if (formData.email && formData.message) {
      console.log(formData);

      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both fields.');
    }
  });
});
