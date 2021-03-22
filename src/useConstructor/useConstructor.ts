import * as React from 'react';

import { TFunction } from '@erkobridee/ts-definitions-common';

// runs only on the component initialization
export const useConstructor = (fn: TFunction) => {
  React.useState(fn);
};

export default useConstructor;
