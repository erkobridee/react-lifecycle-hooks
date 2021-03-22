// https://react-hooks-testing-library.com/
import { renderHook } from '@testing-library/react-hooks';

import useContructor from './useConstructor';

describe('useConstructor', () => {
  it('should call the callback function', () => {
    const fn = jest.fn();

    const { rerender } = renderHook(() => useContructor(fn));

    expect(fn).toHaveBeenCalled();

    rerender();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
