4Story Millionaire — Cloudflare Pages

1. Перейдите на https://dash.cloudflare.com/ и войдите в Cloudflare.
2. Workers & Pages → Create application → Pages / Get started → Drag and drop your files (названия меню могут немного отличаться).
3. Назовите проект, например 4story-millionaire, и перетащите ZIP сайта или содержимое этой папки.
4. Убедитесь, что index.html лежит в корне загружаемой папки/ZIP.
5. Нажмите Deploy site (или Deploy). После публикации ссылка будет вида https://<название>.pages.dev.
6. Для следующих изменений: проект → Create a new deployment → загрузить обновлённый ZIP.

Локальный просмотр: откройте index.html в браузере. Чтобы проверить экспорт самостоятельного HTML для друзей, используйте опубликованную версию сайта, так как браузер может запрещать чтение внешних файлов со страниц file://.

Сохранение своих игр: шесть слотов и черновики хранятся только в localStorage конкретного браузера и домена. При переносе с прежнего HTML экспортируйте каждую игру в JSON и импортируйте её на новом сайте. На других устройствах данные не синхронизируются автоматически.

Публичные музыка и изображения: проверьте права на опубликованные треки и изображения.

Структура: index.html + css/style.css + js/game.js + assets/images + assets/audio. Серверная часть и сборка не нужны.

Language setting: the site opens in English for first-time visitors. The language selector is EN, RU, DE, IT, EL. Returning visitors keep the language they selected previously in that browser.
