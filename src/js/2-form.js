document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  // Відслідковуємо введення користувача у поля форми
  form.addEventListener('input', () => {
    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });

  // Перевіряємо стан локального сховища при завантаженні сторінки
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }

  // Під час сабміту форми
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    // Перевіряємо, чи всі поля заповнені
    if (formData.email && formData.message) {
      // Виводимо дані в консоль
      console.log(formData);
      // Очищаємо сховище і поля форми
      localStorage.removeItem('feedback-form-state');
      form.reset();
    } else {
      alert('Please fill in both fields.');
    }
  });
});
