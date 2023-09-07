import getAppID from './getAppID.js';

const updateComments = async (id) => {
  try {
    const appID = await getAppID();
    const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`;

    // Fetch the comments for the specific show using the 'id' parameter

    const response = await fetch(`${url}?item_id=${id}`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Find the comments container element by its ID
    const commentsContainer = document.getElementById(`comments-container-${id}`);

    // Clear the existing comments
    commentsContainer.innerHTML = '';

    if (data.length === 0) {
      const noCommentsMessage = document.createElement('p');
      noCommentsMessage.textContent = 'No comments available.';
      commentsContainer.appendChild(noCommentsMessage);
    } else {
      data.forEach((comment) => {
        // Create a container for each comment
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');

        // Create and append elements for the comment date
        const creationDateElement = document.createElement('span');
        creationDateElement.classList.add('comment-date');
        creationDateElement.textContent = `${comment.creation_date}`;

        // Create and append elements for the username
        const usernameElement = document.createElement('span');
        usernameElement.classList.add('comment-username');
        usernameElement.textContent = `${comment.username}:`;

        // Create and append elements for the comment text
        const commentTextElement = document.createElement('p');
        commentTextElement.classList.add('comment-text');
        commentTextElement.textContent = `${comment.comment}`;

        // Append the elements to the comment container
        commentElement.append(creationDateElement, usernameElement, commentTextElement);

        // Append the comment container to the comments container
        commentsContainer.appendChild(commentElement);
      });
    }
  } catch (error) {
    console.error('Something went wrong during fetching comments:', error);
  }
};

export default updateComments;