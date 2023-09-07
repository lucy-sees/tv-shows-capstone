import getCommentsCount from '../src/modules/getCommentsCount.js';

describe('getCommentsCount', () => {
  it('returns 0 for an empty array', () => {
    const Comments = [];
    const result = getCommentsCount(Comments);
    expect(result).toBe(0);
  });

  it('returns 0 for null input', () => {
    const Comments = null;
    const result = getCommentsCount(Comments);
    expect(result).toBe(0);
  });

  it('returns 0 for undefined input', () => {
    const Comments = undefined;
    const result = getCommentsCount(Comments);
    expect(result).toBe(0);
  });

  it('returns 0 for non-array object input', () => {
    const Comments = { Comment1: 'Comment 1', Comment2: 'Comment 2' };
    const result = getCommentsCount(Comments);
    expect(result).toBe(0);
  });

  it('returns the correct count for a non-empty array', () => {
    const Comments = ['Comment 1', 'Comment 2', 'Comment 3'];
    const result = getCommentsCount(Comments);
    expect(result).toBe(3);
  });

  it('returns the correct count for an array with duplicate items', () => {
    const Comments = ['Comment 1', 'Comment 1', 'Comment 2', 'Comment 3'];
    const result = getCommentsCount(Comments);
    expect(result).toBe(4);
  });

  it('counts an empty string element correctly', () => {
    const Comments = ['Comment 1', ''];
    const result = getCommentsCount(Comments);
    expect(result).toBe(2);
  });
});