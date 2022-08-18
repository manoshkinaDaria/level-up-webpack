import JustValidate from 'just-validate';

document.querySelector('.feedback-form__input[name="phone"]').addEventListener("keyup", function(){
  this.value = this.value.replace(/[^\d]/g, "");
});

const validateForm = (selector) => new JustValidate(selector, {
  focusInvalidField: true,
  errorLabelStyle: {
    color: '#ff0000',
  },
})
  .addField('.feedback-form__input[name="name"]', [{
    rule: 'required',
    errorMessage: 'Данное поле обязательно для заполнения',
  }])
  .addField('.feedback-form__input[name="phone"]', [{
    rule: 'required',
    errorMessage: 'Данное поле обязательно для заполнения',
  },
  
  ])
  .onSuccess((event) => {
    event.preventDefault();
    console.log('done');
  });
  
validateForm('.feedback-form')

