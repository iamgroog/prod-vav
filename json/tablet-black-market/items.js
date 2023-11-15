import isBrowserEnv from '@/script/Utils/isBrowserEnv';

const TabletBlackMarketItems = require('./items.json');

if (isBrowserEnv()) {
  console.log('TabletBlackMarketItems', isBrowserEnv());

  Object.assign(
    window.gameData,
    { TabletBlackMarketItems },
  );
}

export default TabletBlackMarketItems;
// EOF
