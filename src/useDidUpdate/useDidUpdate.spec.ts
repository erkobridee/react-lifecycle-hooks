// https://react-hooks-testing-library.com/
import { renderHook } from '@testing-library/react-hooks';

import useDidUpdate from './useDidUpdate';

describe('useDidUpdate', () => {
  it('should call the callback function', () => {
    const fn = jest.fn();

    const { rerender } = renderHook(() => useDidUpdate(fn));

    expect(fn).not.toHaveBeenCalled();

    rerender();

    expect(fn).toHaveBeenCalledTimes(1);

    rerender();

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
