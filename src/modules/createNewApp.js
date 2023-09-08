import saveAppID from './saveAppID.js';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const createNewApp = async () => {
  const requestOptions = {
    method: 'POST',
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const appID = await response.text();
    saveAppID(appID);
    return appID;
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default createNewApp;
