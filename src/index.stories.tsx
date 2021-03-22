import * as React from 'react';

import * as Hooks from './index';

export default {
  title: 'React Lifecycle Hooks',
};

const name = 'useful react lifecycle hooks';

export const Welcome = () => {
  console.log(`Welcome to ${name}`);

  return (
    <div className="rounded shadow-md p-3">
      <h1 className="font-uni-neue text-blue-500">Welcome to {name}!</h1>
    </div>
  );
};

//----------------------------------------------------------------------------//

interface IButton {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FunctionComponent<IButton> = (props) => (
  <button className="border rounded my-1 py-1 px-3" {...props} />
);

const MyReactComponent = () => {
  const [count, setCount] = React.useState(0);
  const forceRender = Hooks.useForceRender();

  Hooks.useConstructor(() => {
    console.log('before init: MyReactComponent');
  });

  Hooks.useDidMount(() => {
    console.log('componentDidMount: MyReactComponent');
  });

  Hooks.useDidUpdate(() => {
    console.log('componentDidUpdate: MyReactComponent');
  });

  Hooks.useWillUnmount(() => {
    console.log('componentWillUnmount: MyReactComponent');
  });

  const addClickHandler = () => setCount((value) => value + 1);

  const subtractClickHandler = () => setCount((value) => value - 1);

  const forceRenderClickHandler = () => {
    console.log('trigger component re-render');
    forceRender();
  };

  return (
    <div className="flex flex-row items-center space-x-3">
      <div className="font-uni-neue text-blue-500">My React Component</div>
      <span>count: {count}</span>
      <div className="flex flex-row items-center space-x-1">
        <Button onClick={addClickHandler}> + </Button>
        <Button onClick={subtractClickHandler}> - </Button>
        <div className="w-5"></div>
        <Button onClick={forceRenderClickHandler}>Force Render</Button>
      </div>
    </div>
  );
};

export const ReactFullLifeCycle = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  const toggleShowComponent = () => {
    setShowComponent((v) => !v);
  };

  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col w-8/12 space-y-5">
        <div className="flex flex-row space-x-5">
          <Button onClick={toggleShowComponent}>
            {showComponent ? 'unload' : 'load'} component
          </Button>
        </div>
        <div></div>
        {showComponent && <MyReactComponent />}
        <div></div>
        <div>check the Actions tab output</div>
      </div>
    </div>
  );
};
