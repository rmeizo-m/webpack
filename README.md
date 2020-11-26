# Тестовое задание на позицию «Frontend-разработчик»

Чтобы запустить проект на локальной машине используйте

`yarn` или `npm` для установки зависимостей
`yarn start` или `npm start` для запуска и сборки проекта

По умолчанию проект будет запущен на порту `5000`
По умолчанию проект будет собран в папку `dist`

## Сборка использует:

- clean-webpack-plugin -  удаляет все файлы внутри каталога webpack output.path
- file-loader - конвертирует import/ require() в URL
- html-loader - Экспортирует HTML как строку
- html-webpack-plugin - создает файлы HTML
- node-sass - компилирует scss/sass в css
- sass-loader - применяет все стили к DOM
- css-loader - читает css файлы по ссылкам и возвращает css.
- style-loader - добавляет код в тег style.
- webpack -сборщик модулей
- webpack-cli - Интерфейс командной строки webpack
- webpack-dev-server - зупускает сервер для разработки

- .
- ├── dist                 - папка, куда будет собираться сайт
- ├─┬ src                  - папка с исходниками сайта
- │ ├─┬ html               - папка заготовок HTML страниц
- │ │ ├── includes         - папка с встраиваемыми шаблонами (header, footer)
- │ │ └── views            - папка с самими HTML страницами
- │ ├── img                - папка с общими изображениями (логотип, иконки и др.)
- │ ├── js                 - папка с JavaScript файлами
- │ ├── scss               - папка с SСSS файлами
- ├── package.json         - файл настроек Node.js
- └── webpack.config.js    - файл настроек Webpack