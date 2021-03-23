import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

// like componentWillUnmount
export const useWillUnmount = (fn: TFunction) => {
  React.useEffect(() => {
    return () => {
      fn();
    };
  }, []);
};

export default useWillUnmount;
