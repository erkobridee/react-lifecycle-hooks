import * as React from 'react';

import useDidMount from './useDidMount';

export default {
  title: 'React Lifecycle Hooks / useDidMount',
};

export const Test = () => {
  useDidMount(() => {
    console.log('component mounted');
  });

  return <div>check the Actions tab output</div>;
};
