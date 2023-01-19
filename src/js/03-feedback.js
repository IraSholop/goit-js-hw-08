import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';


form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
populateData(formData);
  

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    onLocalData(formData);  
      
}

function onFormSubmit(evt) {
  evt.preventDefault();
  if (formData.email !== undefined && formData.message !== undefined) {
    evt.currentTarget.reset();
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    formData = {};
  }else{
    alert("Заповніть всі поля");
  }
  
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
    input.value = obj?.email || "";
    textarea.value = obj?.message || "";
  }
}
