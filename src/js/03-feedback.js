import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  mail: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
refs.mail.addEventListener('input', throttle(onTextareaInput, 500));

let formData = {};

populateTextarea();

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    refs.textarea.value = formData.message;
    refs.mail.value = formData.email;
  }
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  formData = {};
  localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput() {
  refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
    console.log(formData);
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
