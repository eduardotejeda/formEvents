const creditCArd = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');

const formData = {};
for(let input of [creditCArd, termsCheckbox, veggieSelect]) {
    input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target;
    formData[name] = type === 'checkbox' ? checked : value;
    console.log(formData);
    
    })
    
}



/*
creditCArd.addEventListener('input', (e) => {
    console.log('CC CHANGED!', e);
    formData['cc'] = e.target.value;
})

veggieSelect.addEventListener('input', (e) => {
    console.log('VEGGIE!', e);
    formData['veggie'] = e.target.value;
})

termsCheckbox.addEventListener('input', (e) => {
    console.log('CHECK!', e);
    formData['checkbox'] = e.target.checked;
}) */
