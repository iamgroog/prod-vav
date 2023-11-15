import isBrowserEnv from '@/script/Utils/isBrowserEnv';

const TabletBlackMarketCategories = require('./categories.json');

if (isBrowserEnv()) {
  console.log('TabletBlackMarketCategories', isBrowserEnv());

  Object.assign(
    window.gameData,
    { TabletBlackMarketCategories },
  );
}

export default TabletBlackMarketCategories;
// EOF
