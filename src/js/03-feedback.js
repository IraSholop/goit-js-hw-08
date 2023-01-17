import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const localdata = localStorage.getItem(STORAGE_KEY);
const obj = JSON.parse(localdata);
populateData(obj);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  onLocalData(formData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(obj);
  localStorage.removeItem(STORAGE_KEY);
}

function onLocalData(obj) {
  try {
    const data = JSON.stringify(obj);
    localStorage.setItem(STORAGE_KEY, data);
  } catch (error) {
    console.error(error);
  }
}

function populateData(obj) {
  if (obj) {
    input.value = obj.email;
    textarea.value = obj.message;
  }
}
