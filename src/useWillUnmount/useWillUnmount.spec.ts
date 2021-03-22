// https://react-hooks-testing-library.com/
import { renderHook } from '@testing-library/react-hooks';

import useWillUnmount from './useWillUnmount';

describe('useDidMount', () => {
  it('should call the callback function', () => {
    const fn = jest.fn();

    const { unmount } = renderHook(() => useWillUnmount(fn));

    expect(fn).not.toHaveBeenCalled();

    unmount();

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
