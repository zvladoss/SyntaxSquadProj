import iziToast from 'izitoast';

const form = document.querySelector('.work-form');
const modal = document.getElementById('successModal');
const closeModal = document.querySelector('.close');

function openModal() {
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function closeModalWindow() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api-docs/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        errorData.message ||
          'Error submitting form. Please check the entered data.'
      );
    }

    openModal();

    form.reset();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });

    const emailField = form.querySelector('input[name="email"]');
    if (error.message.includes('email')) {
      emailField.classList.add('error');
    }
  }
});

closeModal.addEventListener('click', closeModalWindow);

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    closeModalWindow();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalWindow();
  }
});
