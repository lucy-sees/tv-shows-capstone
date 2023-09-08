const getShowsCount = (shows) => {
  if (!Array.isArray(shows)) {
    return 0;
  }

  if (shows === null || shows === undefined) {
    return 0;
  }
  return shows.length;
};

export default getShowsCount;
