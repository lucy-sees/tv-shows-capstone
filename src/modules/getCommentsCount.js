const getCommentsCount = (commentsData) => {
  if (!Array.isArray(commentsData)) {
    return 0;
  }

  if (commentsData === null || commentsData === undefined) {
    return 0;
  }
  return commentsData.length;
};

export default getCommentsCount;
