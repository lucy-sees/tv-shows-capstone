import Swal from 'sweetalert2';
import generatePopup from './generatePopup.js';
import fetchShowComments from './fetchShowComments.js';

const openPopup = async (show) => {
  const overlayDiv = document.getElementById('overlay');
  const popupDiv = document.getElementById('popup');
  overlayDiv.style.display = 'block';
  popupDiv.style.display = 'block';

  popupDiv.innerHTML = '';

  try {
    Swal.showLoading();
    let commentsData = await fetchShowComments(show.id);
    Swal.close();
    commentsData = Array.isArray(commentsData) ? commentsData : [];
    const popupCard = generatePopup(show, commentsData);
    popupDiv.append(popupCard);
  } catch (error) {
    throw new Error('Something went wrong, try again', Error);
  }
};

export default openPopup;
