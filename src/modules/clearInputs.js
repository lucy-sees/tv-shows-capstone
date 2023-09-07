const clearInputs = () => {
  const nameInput = document.getElementById('name-input');
  const commentInput = document.getElementById('comment-input');
  nameInput.value = '';
  commentInput.value = '';
};

export default clearInputs;
