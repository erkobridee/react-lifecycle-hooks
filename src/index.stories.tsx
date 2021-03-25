import * as React from 'react';

import * as Hooks from './index';

export default {
  title: 'React Lifecycle Hooks',
};

const name = 'useful react lifecycle hooks';

const ExternalLink = ({ label, href }) => (
  <a
    className="text-blue-600 hover:text-blue-400 underline hover:no-underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {label}
  </a>
);

export const Welcome = () => {
  console.log(`Welcome to ${name}`);

  return (
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row  space-x-2 ml-4">
        <a href="https://github.com/erkobridee/react-lifecycle-hooks/actions/workflows/publish.yml">
          <img
            src="https://github.com/erkobridee/react-lifecycle-hooks/workflows/CI%20-%20build%20and%20publish/badge.svg"
            alt="Actions Status"
          />
        </a>

        <a href="https://codecov.io/gh/erkobridee/react-lifecycle-hooks">
          <img
            src="https://codecov.io/gh/erkobridee/react-lifecycle-hooks/branch/main/graph/badge.svg"
            alt="codecov"
          />
        </a>

        <a href="https://github.com/erkobridee/react-lifecycle-hooks/blob/main/LICENSE">
          <img
            src="https://img.shields.io/github/license/erkobridee/react-lifecycle-hooks"
            alt="GitHub license"
          />
        </a>

        <a href="https://github.com/erkobridee/react-lifecycle-hooks">
          <img
            src="https://img.shields.io/github/stars/erkobridee/react-lifecycle-hooks?style=social"
            alt="GitHub Repo stars"
          />
        </a>

        <a href="https://erkobridee.github.io/react-lifecycle-hooks">
          <img
            src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg"
            alt="Storybook"
          />
        </a>
      </div>
      <div className="rounded shadow-md p-3">
        <h1 className="text-blue-900">Welcome to {name}!</h1>
      </div>
      <div className="rounded shadow-md p-3 flex flex-col space-y-1">
        <div>Useful references:</div>
        <ExternalLink
          label="State and Lifecycle | React.js Docs"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        />
        <ExternalLink
          label="The Component Lifecycle | React.js Docs"
          href="https://reactjs.org/docs/react-component.html#the-component-lifecycle"
        />
        <ExternalLink
          label="Introducing Hooks | React.js Docs"
          href="https://reactjs.org/docs/hooks-intro.html"
        />
      </div>
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
      <div className="text-blue-500">My React Component</div>
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
