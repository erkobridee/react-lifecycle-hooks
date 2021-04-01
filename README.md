[![Actions Status](https://github.com/erkobridee/react-lifecycle-hooks/workflows/CI%20-%20build%20and%20publish/badge.svg)](https://github.com/erkobridee/react-lifecycle-hooks/actions/workflows/publish.yml) [![codecov](https://codecov.io/gh/erkobridee/react-lifecycle-hooks/branch/main/graph/badge.svg)](https://codecov.io/gh/erkobridee/react-lifecycle-hooks) [![GitHub license](https://img.shields.io/github/license/erkobridee/react-lifecycle-hooks)](https://github.com/erkobridee/react-lifecycle-hooks/blob/main/LICENSE) [![GitHub Repo stars](https://img.shields.io/github/stars/erkobridee/react-lifecycle-hooks?style=social)](https://github.com/erkobridee/react-lifecycle-hooks) [![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://erkobridee.github.io/react-lifecycle-hooks)

# react lifecycle hooks

According to [A Complete Guide to useEffect | Overreacted](https://overreacted.io/a-complete-guide-to-useeffect/)

> Keep in mind that the mental model for effects is different from componentDidMount and other lifecycles, and trying to find their exact equivalents may confuse you more than help

So, to keep peace of mind and manage any function component lifecycle, follow the equivalents hooks to the cases: `useConstructor`, `useDidMount`, `useDidUpdate` and `useWillUnmount`, plus `useForceRender`

👋&nbsp;&nbsp;**IMPORTANT:** this library requires a peer dependency of the react.js [v16.8.0](https://github.com/facebook/react/releases/tag/v16.8.0) or newer

## Install

```
npm install --save @erkobridee/react-lifecycle-hooks
```

if you are using on a TypeScript, you'll need to install

```
npm install --save-dev @erkobridee/ts-definitions-common
```

## API

### useConstructor

```javascript
import { useConstructor } from '@erkobridee/react-lifecycle-hooks';

export const Component = () => {
  useConstructor(() => console.log(`executes before mount the component`));

  return <div>Component</div>;
};

export default Component;
```

### useDidMount

```javascript
import { useDidMount } from '@erkobridee/react-lifecycle-hooks';

export const Component = () => {
  useDidMount(() => console.log(`executes after component mounted`));

  return <div>Component</div>;
};

export default Component;
```

### useDidUpdate

```javascript
import React from 'react';

import { useDidUpdate } from '@erkobridee/react-lifecycle-hooks';

export const Component = () => {
  const [count, setCount] = React.useState(0);

  useDidUpdate(() => console.log(`executes whenever the component updates`));

  useDidUpdate(() => console.log(`count value updated to ${count}`), [count]);

  const resetClickHandler = () => setCount(0);

  const addClickHandler = () => setCount((prevValue) => prevValue + 1);

  const subtractClickhandler = () => setCount((prevValue) => prevValue - 1);

  return (
    <div>
      <div>Component</div>
      <div>count: {count}</div>
      <div>
        <button onClick={resetClickHandler}>reset</button>
        <button onClick={addClickHandler}>add</button>
        <button onClick={subtractClickhandler}>subtract</button>
      </div>
    </div>
  );
};

export default Component;
```

### useWillUnmount

```javascript
import React from 'react';

import { useWillUnmount } from '@erkobridee/react-lifecycle-hooks';

const InnerComponent = () => {
  useWillUnmount(() => console.log(`executes before unmount the component`));

  return <div>Inner Component</div>;
};

const Component = () => {
  const [show, setShow] = React.useState(true);

  const removeClickHandler = () => setShow(false);

  return (
    <div>
      <div>Component</div>
      {show && (
        <div>
          <button onClick={removeClickHandler}>remove</button>
          <InnerComponent />
        </div>
      )}
    </div>
  );
};

export default Component;
```

### useForceRender

```javascript
import React from 'react';

import { useForceRender } from '@erkobridee/react-lifecycle-hooks';

export const Component = () => {
  const forceRender = useForceRender();

  const forceRenderClickHandler = () => forceRender();

  React.useEffect(() => {
    console.log(`component render`);
  });

  return (
    <div>
      <div>Component</div>
      <div>
        <button click={forceRenderClickHandler}>force render</button>
      </div>
    </div>
  );
};

export default Component;
```

## Useful references

- React.js Docs

  - [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

  - [The Component Lifecycle](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

  - [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)

- [React Hooks: everything you need to know! 🚀 | Softwareontheroad](https://softwareontheroad.com/react-hooks/) - (2019/03/10) The new React Hooks API is here and it's gonna change the way you develop react apps 🔥

- [Under the hood of React’s hooks system | The Guild Blog](https://the-guild.dev/blog/react-hooks-system) - 2018/11/21

- [Under-the-hood of React Hooks | by Craig Taub - ITNEXT](https://itnext.io/under-the-hood-of-react-hooks-805dc68581c3) - 2020/04/15
