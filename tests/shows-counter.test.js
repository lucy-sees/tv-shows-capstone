import getShowsCount from '../src/modules/getShowsCount.js';

describe('getShowCount', () => {
  it('returns 0 for an empty array', () => {
    const shows = [];
    const result = getShowsCount(shows);
    expect(result).toBe(0);
  });

  it('returns 0 for null input', () => {
    const shows = null;
    const result = getShowsCount(shows);
    expect(result).toBe(0);
  });

  it('returns 0 for undefined input', () => {
    const shows = undefined;
    const result = getShowsCount(shows);
    expect(result).toBe(0);
  });

  it('returns 0 for non-array object input', () => {
    const shows = { show1: 'Show 1', show2: 'Show 2' };
    const result = getShowsCount(shows);
    expect(result).toBe(0);
  });

  it('returns the correct count for a non-empty array', () => {
    const shows = ['Show 1', 'Show 2', 'Show 3'];
    const result = getShowsCount(shows);
    expect(result).toBe(3);
  });

  it('returns the correct count for an array with duplicate items', () => {
    const shows = ['Show 1', 'Show 1', 'Show 2', 'Show 3'];
    const result = getShowsCount(shows);
    expect(result).toBe(4);
  });

  it('counts an empty string element correctly', () => {
    const shows = ['Show 1', ''];
    const result = getShowsCount(shows);
    expect(result).toBe(2);
  });
});