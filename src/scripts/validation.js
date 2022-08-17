import $ from 'jquery';
import JustValidate from 'just-validate';

const isNumber = (number) => {
  const regex = /^\d+$/;
  return regex.test(number);
};

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
  {
    errorMessage: 'Только цифры',
    validator: (value) => {
      if (value) {
        return isNumber($.trim(value));
      }
      return true;
    },
  }
  ])
  .onSuccess((event) => {
    event.preventDefault();
    console.log('done');
  });
validateForm('.feedback-form')

