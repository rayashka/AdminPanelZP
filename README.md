# Клиника «Здоровое поколение» — админ-панель

React 18 + Vite. Управление сайтом клиники: обращения, врачи, отделения, услуги и цены, документы, контакты.
Данные хранятся в `localStorage` браузера.

## Запуск

```bash
npm install          # именно install (не ci): в package.json добавлены eslint и prettier
npm run dev          # http://localhost:5173
npm run build        # сборка в dist/
npm run preview      # посмотреть сборку
npm run lint         # проверка кода (ESLint)
npm run format       # форматирование (Prettier)
```

В Windows PowerShell, если скрипты запрещены, используйте `npm.cmd` вместо `npm`.

Вход по умолчанию: `admin` / `admin` (меняется через `.env`, см. `.env.example`).

## Структура

```
├─ index.html
├─ vite.config.js            алиас «@» -> src
├─ jsconfig.json             подсказки алиаса для IDE
├─ eslint.config.js, .prettierrc, .editorconfig
├─ .env.example              логин и пароль входа
├─ public/                   favicon
└─ src/
   ├─ main.jsx               точка входа
   ├─ app/
   │  ├─ App.jsx             проверка входа + каркас + текущая страница
   │  └─ pages.js            реестр страниц (ленивая загрузка)
   ├─ features/              разделы приложения, каждый — отдельная папка
   │  ├─ auth/               вход (LoginPage, useAuth, auth.config)
   │  ├─ requests/           обращения (страница, хук, статусы, сид)
   │  ├─ doctors/            врачи
   │  ├─ departments/        отделения (+ useDepartmentOptions для списков)
   │  ├─ services/           услуги и цены
   │  ├─ documents/          документы
   │  └─ contacts/           контакты
   ├─ components/
   │  ├─ layout/AdminLayout  боковое меню + область страницы
   │  ├─ crud/               универсальная таблица «добавить / изменить / скрыть / удалить»
   │  └─ ui/                 Button, Switch, Panel, PageHeader, Table
   ├─ hooks/                 useLocalStorage
   ├─ lib/                   id, format, url (мелкие утилиты)
   ├─ constants/             ключи localStorage
   └─ styles/                tokens.css (цвета), base.css (сброс)
```

В каждой папке компонента лежат `Component.jsx`, `Component.css` и `index.js`.
Сид-данные (врачи, услуги, отделения) вынесены в `*.seed.js` внутри своих разделов.

## Как добавить новый раздел

1. Создайте папку `src/features/<название>/` со страницей и `index.js`, который экспортирует её по умолчанию.
2. Если это справочник — используйте `CrudPage` (пример: `features/documents/DocumentsPage.jsx`).
3. Добавьте строку в `src/app/pages.js` — пункт меню появится сам.

## Хранилище

Ключи `localStorage` собраны в `src/constants/storage-keys.js` и совпадают с прежними,
поэтому уже введённые данные не потеряются.

## Безопасность

Вход в панель проверяется в браузере: логин и пароль видны любому, кто откроет код сайта.
Это защита от случайного захода, но не настоящая авторизация. Для реальной работы с данными
пациентов нужен сервер: проверка входа, хранение данных в базе, HTTPS.
