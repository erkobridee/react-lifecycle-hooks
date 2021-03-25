import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

/**
 * This react hook will execute when like the component did update
 *
 * In case of passing and array of dependencies, this will executes only one of them gets updated
 *
 * @param {TFunction} fn
 * @param {React.DependencyList} deps - optional
 */
export const useDidUpdate = (fn: TFunction, deps?: React.DependencyList) => {
  const firstRunRef = React.useRef(true);

  React.useEffect(() => {
    if (firstRunRef.current) {
      firstRunRef.current = false;
    } else {
      fn();
    }
  }, deps);
};

export default useDidUpdate;
