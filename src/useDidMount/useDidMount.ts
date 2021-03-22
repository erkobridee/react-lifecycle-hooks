import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

// like componentDidMount
export const useDidMount = (fn: TFunction) => {
  React.useEffect(() => {
    fn();
  }, []);
};

export default useDidMount;
