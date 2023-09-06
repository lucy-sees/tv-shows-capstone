const saveAppID = (id) => {
  localStorage.setItem('appID', JSON.stringify(id));
};

export default saveAppID;