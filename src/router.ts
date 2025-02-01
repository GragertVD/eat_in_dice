import { createHashRouter } from '@vkontakte/vk-mini-apps-router';

import { EModal } from './consts/modals';
import { EPanel } from './consts/panels';
import { EView } from './consts/views';

/*
  Модуль 4. Разработка Урок 3. Роутинг #M4L3.
  Создание роутера и объявление маршрутов.
*/
export const router = createHashRouter([
  {
    path: '/',
    view: EView.MAIN,
    panel: EPanel.MAIN,
  },
  {
    path: '/reserve',
    view: EView.BANNER,
    panel: EPanel.MAIN,
  },
  {
    path: '/reserve/:id',
    view: EView.MAIN,
    panel: EPanel.MAIN,
    modal: EModal.TEMP,
  },
]);
