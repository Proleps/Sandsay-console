# <https://apiconsolka.firebaseapp.com/> 

### Консолька пока не закончена, а именно:
 - Не адаптирована под мобильные разрешения
 - Некорректно работают некоторые элементы интерфейса на тачпаде
 - Нет настоящей авторизации (которая должна происходить по данным аккаунта SandSay), без нее не может быть доступно взаимодействие с api SandSay, поэтому сейчас JSON запросы не отправляются и в любом случае записываются в историю как выполненные успешно
 - Поле ответа сейчас присутствует лишь как заглушка, поскольку ответ от api не приходит, ведь запросы не отправляются

### На данный момент реализовано:
  - Заголовок: 
   - Показывает с какими учетным данными авторизирован пользователь (логин и, если указан - сублогин);
   - Имеет кнопку перехода в полноэкранный режим;
   - Кнопка "выйти" - делает логаут;
  - История запросов:
    - Хранит определнное количество последних уникальных валидных запросов и умеет отображать их в обратном хронологическом порядке;
    - Список элементов истории запросов умеет прокручиваться горизонтально с помощью колеса мыши;
    - История запросов не пропадает при закрытии вкладки
  - Элемент истории, который умеет:
    - Выводить значение свойства action из запроса;
    - При нажатии на элемент, подставлять в поле ввода запроса отформатированный сохраненный запрос;
    - Открывать дропдаун с функциями:
     - Скопировать — запрос копируется в буфер обмена, и показывается визуальный отклик этого действия;
     - Удалить — безвозвратно удаляет запрос из истории запросов;
  - Поле запросов, которое:
    - Сохраняет JSON в Redux хранилище и localStorage из поля запросов;
    - Валидирует JSON;
    - Форматирование JSON в поле запроса по нажатию на кнопку "Форматироваь";
    - Горизонтальный размер полей можно регулировать, размеры (пропорции) сохраняются при закрытии браузера;
  - Условная авторизиция:
    - Логином может быть как email (для email используется регексп вида "строка@строка.строка"), так и строка из латинских букв, цифр и подчеркиваний;
    - В пароле пробелы могут встречаться, кириллица — нет.
    
    
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
