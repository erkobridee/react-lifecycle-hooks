// https://react-hooks-testing-library.com/
import { renderHook, act } from '@testing-library/react-hooks';

import useDidUpdate from '../useDidUpdate';
import useForceRender from './useForceRender';

describe('useForceRender', () => {
  it('should call the callback function', () => {
    const fn = jest.fn();

    const { result } = renderHook(() => {
      useDidUpdate(fn);
      return useForceRender();
    });

    expect(fn).not.toHaveBeenCalled();

    act(() => {
      result.current();
    });

    expect(fn).toHaveBeenCalled();

    act(() => {
      result.current();
    });

    expect(fn).toHaveBeenCalledTimes(2);
  });
});
