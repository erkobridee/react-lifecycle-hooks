import * as React from 'react';

import useWillUnmount from './useWillUnmount';

export default {
  title: 'React Lifecycle Hooks / useWillUnmount',
};

const MyReactComponent = () => {
  useWillUnmount(() => {
    console.log('componentWillUnmount: MyReactComponent');
  });

  return <div className="font-uni-neue text-blue-500">My React Component</div>;
};

export const Test = () => {
  const [showComponent, setShowComponent] = React.useState(true);

  const removeComponentClickHandler = () => {
    console.log('trigger component remove');
    setShowComponent(false);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-8/12 space-y-5">
        <div></div>
        <div className="rounded shadow-md p-3 flex flex-row content-center items-center space-x-3">
          {showComponent && (
            <>
              <MyReactComponent />

              <button
                className="border rounded my-1 py-1 px-3"
                onClick={removeComponentClickHandler}
              >
                remove react component
              </button>
            </>
          )}

          <div>check the Actions tab output</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
