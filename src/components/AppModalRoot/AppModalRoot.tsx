import { ModalRoot, ModalPage } from '@vkontakte/vkui';
import {
  useActiveVkuiLocation,
  useRouteNavigator,
  useSearchParams,
} from '@vkontakte/vk-mini-apps-router';

import { EModal } from 'consts/modals';

const AppModalRoot = () => {
  const { modal: activeModal } = useActiveVkuiLocation();
  const routeNavigator = useRouteNavigator();
  const [searchParams] = useSearchParams();

  const onClose = () => {
    routeNavigator.hideModal(Boolean(searchParams.get('stepBack')));
  };

  /*
    Модуль 4. Разработка Урок 4. Модальные окна #M4L4.
    ModalRoot - обертка для всех модальных окон ModalPage.
    У каждого модального окна уникальный id.
  */
  return (
    <ModalRoot activeModal={activeModal} onClose={onClose}>
      <ModalPage id={EModal.TEMP} onClose={onClose}>
        <div onClick={onClose} />
      </ModalPage>
    </ModalRoot>
  );
};

export default AppModalRoot;
