const getShowLikes = async (appID) => {
  try {
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes/`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('API response is not an array');
    }

    const likesObject = {};
    data.forEach((item) => {
      if (item && item.item_id && item.likes) {
        likesObject[item.item_id] = item.likes;
      }
    });

    return likesObject;
  } catch (error) {
    return {};
  }
};

export default getShowLikes;
