import {showAlert} from './util.js';

// получение данных с сервера
const userData = (onSuccess) => {
  fetch ('https://27.javascript.pages.academy/kekstagram/data' ,
    {
      method: 'GET',
      credentials: 'same-origin'
    },
  )
    .then((respone) => {
      respone.json()
        .then((data) => {
          onSuccess(data);
        })
        .catch(() => {
          showAlert('Что-то пошло не так');
        });
    });
};

//отправка данных на сервер
const sendData = (onSuccess, onFail, body) => {
  fetch ('https://27.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if(response.ok) {
      onSuccess();
    } else {
      onFail('Не удалось отправить форму. Попробуйте еще раз');
    }
  })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте  еще раз');
    });
};

export {
  userData,
  sendData,
};
