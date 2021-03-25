import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

/**
 * This react hook will execute when component will unmount
 *
 * @param {TFunction} fn
 */
export const useWillUnmount = (fn: TFunction) => {
  React.useEffect(() => {
    return () => {
      fn();
    };
  }, []);
};

export default useWillUnmount;
