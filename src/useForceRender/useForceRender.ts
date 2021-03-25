import * as React from 'react';

/**
 * This react hook will force the component re-render
 *
 * @returns forceRender - function
 */
export const useForceRender = () => {
  const [, setTick] = React.useState(true);

  const forceRender = React.useCallback(() => {
    setTick((v) => !v);
  }, []);

  return forceRender;
};

export default useForceRender;
