import { useContext, useEffect, useState } from 'react';
import { View, Epic, SplitLayout, SplitCol } from '@vkontakte/vkui';
import {
  useActiveVkuiLocation,
  usePopout,
} from '@vkontakte/vk-mini-apps-router';
import '@vkontakte/vkui/dist/vkui.css';

import { AppModalRoot } from 'components';
import { enableSwipe, showBannerAds } from 'helpers';
import { useProfile } from 'hooks';
import { EPanel } from 'consts/panels';
import { EView } from 'consts/views';
import { DataContext } from 'context/data';

import styles from './App.module.css';
import { MainPanel } from 'panels/Main';

const App = () => {
  /* Модуль 4. Разработка Урок 3. Роутинг #M4L3. Получение view и panel */
  const { view: activeView, panel: activePanel = EPanel.MAIN } =
    useActiveVkuiLocation();
  const routerPopout = usePopout();
  const dataContext = useContext(DataContext);
  const profile = dataContext?.data?.profile;
  const [adsBannerPadding, setAdsBannerPadding] = useState(0);

  // useOnboardSlides();
  useProfile();
  enableSwipe();

  useEffect(() => {
    if (!profile?.is_ads_enabled) {
      return;
    }

    const checkBannerAds = async () => {
      const bannerAdsResult = await showBannerAds();
      setAdsBannerPadding(bannerAdsResult?.banner_height ?? 0);
    };

    checkBannerAds();
  }, [profile]);

  /*
    Модуль 4. Разработка Урок 2. Знакомство с VKUI #M4L2.
    Структура приложения.
  */
  return (
    <SplitLayout modal={<AppModalRoot />} popout={routerPopout}>
      <SplitCol className={styles.col}>
        <Epic
          activeStory={activeView ?? EView.MAIN}
        >
          <View id={EView.MAIN} activePanel={activePanel}>
            <MainPanel id={EPanel.MAIN} />
          </View>
          <View id={EView.BANNER} activePanel={activePanel}>
            <div
              id={EPanel.BANNER}
              key={adsBannerPadding} //тут был не key
            />
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};

export default App;
