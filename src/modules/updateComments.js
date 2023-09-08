import getAppID from './getAppID.js';

const updateComments = async (id) => {
  try {
    const appID = await getAppID();
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`;

    const response = await fetch(`${url}?item_id=${id}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const commentsContainer = document.getElementById(`comments-container-${id}`);

    commentsContainer.innerHTML = '';

    if (data.length === 0) {
      const noCommentsMessage = document.createElement('p');
      noCommentsMessage.textContent = 'No comments available.';
      commentsContainer.appendChild(noCommentsMessage);
    } else {
      data.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        const creationDateElement = document.createElement('span');
        creationDateElement.classList.add('comment-date');
        creationDateElement.textContent = `${comment.creation_date}`;

        const usernameElement = document.createElement('span');
        usernameElement.classList.add('comment-username');
        usernameElement.textContent = `${comment.username}:`;

        const commentTextElement = document.createElement('p');
        commentTextElement.classList.add('comment-text');
        commentTextElement.textContent = `${comment.comment}`;

        commentElement.append(creationDateElement, usernameElement, commentTextElement);

        commentsContainer.appendChild(commentElement);
      });
    }
    const commentsTitle = document.querySelector(`#comments-title-${id}`);
    if (commentsTitle) {
      commentsTitle.textContent = `Comments (${data.length})`;
    }
  } catch (error) {
    throw new Error('Something went wrong during fetching comments:', error);
  }
};

export default updateComments;