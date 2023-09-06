const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p7eyUav3i6tJe4HpTUQg/likes/';

const likeShow = async (id) => {
  const postData = { item_id: id };
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };
  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    throw new Error('Something went wrong, please try again');
  }
};

export default likeShow;
