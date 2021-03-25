import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

/**
 * This react hook executes when the component did mount
 *
 * @param {TFunction} fn
 */
export const useDidMount = (fn: TFunction) => {
  React.useEffect(() => {
    fn();
  }, []);
};

export default useDidMount;
