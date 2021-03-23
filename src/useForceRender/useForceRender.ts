import * as React from 'react';

// force the component to re-render
export const useForceRender = () => {
  const [, setTick] = React.useState(true);

  const forceRender = React.useCallback(() => {
    setTick((v) => !v);
  }, []);

  return forceRender;
};

export default useForceRender;
