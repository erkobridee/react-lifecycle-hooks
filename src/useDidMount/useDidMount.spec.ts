// https://react-hooks-testing-library.com/
import { renderHook } from '@testing-library/react-hooks';

import useDidMount from './useDidMount';

describe('useDidMount', () => {
  it('should call the callback function', () => {
    const fn = jest.fn();

    const { rerender } = renderHook(() => useDidMount(fn));

    expect(fn).toHaveBeenCalled();

    rerender();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
