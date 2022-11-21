const creditCArd = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const form = document.querySelector('#signup-form');

form.addEventListener('submit', function(e) {
alert('Submit the form');
console.log('cc', creditCArd.value);
console.log('termns', termsCheckbox.checked);
console.log('veggie', veggieSelect.value);
//send form data to db
//append something to page using form data
e.preventDefault();
});

