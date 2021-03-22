import * as React from 'react';

import useConstructor from './useConstructor';

export default {
  title: 'React Lifecycle Hooks / useConstructor',
};

export const Test = () => {
  useConstructor(() => {
    console.log('before init the component');
  });

  return <div>check the Actions tab output</div>;
};
