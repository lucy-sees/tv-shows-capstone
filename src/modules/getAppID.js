import createNewApp from './createNewApp.js';

const getAppID = () => {
  let appID = localStorage.getItem('appID');
  if (!appID) {
    appID = createNewApp();
    localStorage.setItem('appID', appID);
  }

  return appID;
};

export default getAppID;
