import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

// like componentDidUpdate
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
