import {renderPhotos} from './printElement.js';

// получение данных с сервера
const userData = () => {
  fetch ('https://27.javascript.pages.academy/kekstagram/data' ,
    {
      method: 'GET',
      credentials: 'same-origin'
    },
  )
    .then((respone) => {
      respone.json()
        .then((data) => {
          renderPhotos(data);
        });
    });
};

//отправка данных на сервер
const postUserData = () => {
  fetch ('https://27.javascript.pages.academy/kekstagram/data').then()
}

export {
  userData,
};
