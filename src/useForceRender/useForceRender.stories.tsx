import * as React from 'react';

import useForceRender from './useForceRender';

export default {
  title: 'React Lifecycle Hooks / useForceRender',
};

export const Test = () => {
  const forceRender = useForceRender();

  const forceRenderClickHandler = () => {
    console.log('trigger component re-render');
    forceRender();
  };

  React.useEffect(() => {
    console.log('component render (React.useEffect)');
  });

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-6/12 space-y-5">
        <div></div>
        <div className="rounded shadow-md p-3 flex flex-row content-center items-center space-x-3">
          <button
            className="border rounded my-1 py-1 px-3"
            onClick={forceRenderClickHandler}
          >
            force re-render
          </button>

          <div>check the Actions tab output</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
