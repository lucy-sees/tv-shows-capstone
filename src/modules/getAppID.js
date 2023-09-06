import createNewApp from './createNewApp.js';

const getAppID = () => {
  const savedAppID = localStorage.getItem('appID');

  if (savedAppID) {
    const appID = JSON.parse(savedAppID);
    return appID;
  }
  return createNewApp();
};

export default getAppID;