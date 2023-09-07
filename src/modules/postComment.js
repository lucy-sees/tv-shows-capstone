import Swal from 'sweetalert2';
import clearInputs from './clearInputs.js';
import getAppID from './getAppID.js';

const appID = getAppID();
const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments/`;

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});

const postComment = async (id, nameData, commentData) => {
  const postData = {
    item_id: id,
    username: nameData,
    comment: commentData,
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  };

  try {
    Swal.showLoading();
    const response = await fetch(url, requestOptions);
    Swal.close();

    if (response.status === 201) {
      Toast.fire({
        icon: 'success',
        title: 'Comment posted successfully',
      });
      clearInputs();
    } else {
      throw new Error('Something went wrong');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Something went wrong, please try again',
    });
  }
};

export default postComment;
