import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

/**
 * This react hooks runs only on the component initialization
 *
 * @param {TFunction } fn
 */
export const useConstructor = (fn: TFunction) => {
  React.useState(fn);
};

export default useConstructor;
